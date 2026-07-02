"use client";

import { useEffect, useRef, useState } from "react";

interface ImageSequenceProps {
  progress: number;
  totalFrames?: number;
  fallback: React.ReactNode;
}

export default function ImageSequence({
  progress,
  totalFrames = 70,
  fallback,
}: ImageSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  // Preload images into memory
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    let hasError = false;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      // Pad frame indexes (e.g. frame_001.png to frame_070.png)
      img.src = `/images/sequence/frame_${String(i).padStart(3, "0")}.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames && !hasError) {
          setLoaded(true);
        }
      };

      img.onerror = () => {
        hasError = true;
        setLoadError(true);
      };

      images.push(img);
    }

    imagesRef.current = images;
  }, [totalFrames]);

  // Render current frame to canvas
  useEffect(() => {
    if (!loaded || loadError) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Calculate frame index from 0 to 1 progress
    const frameIndex = Math.max(0, Math.min(totalFrames - 1, Math.floor(progress * totalFrames)));
    const img = imagesRef.current[frameIndex];

    if (img && img.complete) {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Preserve aspect ratio
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.min(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  }, [progress, loaded, loadError, totalFrames]);

  if (loadError || !loaded) {
    // Graceful fallback to interactive 3D model if assets are missing
    return <>{fallback}</>;
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative bg-transparent">
      <canvas
        ref={canvasRef}
        width={750}
        height={750}
        className="w-full h-full object-contain pointer-events-none bg-transparent"
      />
    </div>
  );
}
