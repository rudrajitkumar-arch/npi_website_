"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useCallback, useRef, useEffect, useState, useMemo } from "react";
import { Center, Environment } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
import HeroModel from "./HeroModel";
import FloatingModel from "./FloatingModel";

interface HeroSceneProps {
  modelPath?: string;
  slideIndex: number;
}

// Internal wrapper to manage responsive scale and position offsets
function SceneWrapper({
  modelPath,
  onLoaded,
}: {
  modelPath: string;
  onLoaded: () => void;
}) {
  const { size: canvasSize } = useThree();

  // Responsive scale factors to make the brass component act as a balanced element
  const responsiveScale = useMemo(() => {
    if (canvasSize.width < 640) return 4.0;
    if (canvasSize.width < 1024) return 3.6;
    return 4.4;
  }, [canvasSize.width]);

  // Position coordinates: shift to right side on desktop/tablet, center on mobile
  const positionOffset = useMemo(() => {
    if (canvasSize.width < 768) return [0, -0.05, 0] as [number, number, number];
    return [1.2, -0.05, 0] as [number, number, number];
  }, [canvasSize.width]);

  return (
    <group position={positionOffset} scale={[responsiveScale, responsiveScale, responsiveScale]}>
      <FloatingModel>
        <Center>
          <HeroModel modelPath={modelPath} onLoaded={onLoaded} />
        </Center>
      </FloatingModel>
    </group>
  );
}

function CameraRig() {
  const { camera } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, Math.sin(t * 0.28) * 0.08, 0.025);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, Math.cos(t * 0.22) * 0.05, 0.025);
    camera.lookAt(0, -0.05, 0);
  });

  return null;
}

export default function HeroScene({
  modelPath = "/models/brass_component_1.glb",
  slideIndex,
}: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  const handleModelLoaded = useCallback(() => {
    setIsModelLoaded(true);
  }, []);

  // Kickstart resize measurement on mount for React 19 + react-use-measure compatibility
  useEffect(() => {
    const trigger = () => {
      window.dispatchEvent(new Event("resize"));
    };
    trigger();
    const raf = requestAnimationFrame(trigger);
    const t1 = setTimeout(trigger, 60);
    const t2 = setTimeout(trigger, 200);
    const t3 = setTimeout(trigger, 500);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Ensure spinner fades out smoothly even on fast loads
  useEffect(() => {
    const timer = setTimeout(() => setIsModelLoaded(true), 350);
    return () => clearTimeout(timer);
  }, [modelPath]);

  // GSAP entrance animation on slide change
  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current,
      { opacity: 0.6, scale: 0.97 },
      { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" }
    );
  }, [slideIndex]);

  return (
    <div
      ref={containerRef}
      className="hero-scene-stage relative w-full h-full overflow-hidden bg-transparent"
    >
      {/* Background radial glow */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out pointer-events-none ${
          isModelLoaded ? "opacity-40" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        <div className="relative h-52 w-52 sm:h-64 sm:w-64">
          <div className="absolute inset-0 rounded-full bg-[#1E6D95]/25 blur-3xl" />
          <div className="absolute inset-8 rounded-full border border-[#1E6D95]/30" />
          <div className="absolute inset-16 rounded-full bg-[#1E6D95]/20 blur-xl" />
        </div>
      </div>

      <Canvas
        dpr={[1, 2]}
        frameloop="always"
        performance={{ min: 0.6 }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.25,
        }}
        camera={{ position: [0, 0, 4.4], fov: 32, near: 0.1, far: 1000 }}
        className="w-full h-full"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {/* Camera motion */}
        <CameraRig />

        {/* Studio Lighting Setup for Golden/Brass Precision Components */}
        <ambientLight color="#ffffff" intensity={1.8} />

        {/* Key Light */}
        <directionalLight
          color="#fff8e7"
          intensity={3.4}
          position={[-5, 7, 5]}
        />

        {/* Fill Light */}
        <directionalLight
          color="#e8f4fc"
          intensity={2.4}
          position={[6, 3, 5]}
        />

        {/* Front Warm Direct Fill */}
        <directionalLight
          color="#fff4dc"
          intensity={2.0}
          position={[0, 0, 7]}
        />

        {/* Rim Light */}
        <directionalLight
          color="#ffffff"
          intensity={2.4}
          position={[5, 6, -5]}
        />

        {/* Environment Map */}
        <Suspense fallback={null}>
          <Environment files="/hdr/studio.exr" />
        </Suspense>

        {/* 3D Model with Floating Physics */}
        <Suspense fallback={null}>
          <SceneWrapper modelPath={modelPath} onLoaded={handleModelLoaded} />
        </Suspense>
      </Canvas>
    </div>
  );
}
