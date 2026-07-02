"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useCallback, useRef, useEffect, useState, useMemo } from "react";
import { Center, Environment } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
import HeroModel from "./HeroModel";
import FloatingModel from "./FloatingModel";

const PRIMARY_DARK = "#062F3A";

const canvasStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  pointerEvents: "auto",
  transition: "opacity 420ms ease-out",
} as const;

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
  onLoaded: (size: THREE.Vector3) => void;
}) {
  const { size: canvasSize } = useThree();

  // Responsive scale factors to make the brass component act as a balanced background element
  const responsiveScale = useMemo(() => {
    if (canvasSize.width < 640) return 8.0; // Mobile scale
    if (canvasSize.width < 1024) return 4.2; // Tablet scale
    return 5.6; // Desktop scale
  }, [canvasSize.width]);

  // Position coordinates: shift to the right side (1.15) and center/up (-0.05) to balance composition
  const positionOffset = useMemo(() => {
    if (canvasSize.width < 768) return [0, -0.05, 0] as [number, number, number]; // Centered on mobile
    return [1.15, -0.05, 0] as [number, number, number]; // Shifted right on desktop/tablet
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
    // R3F expects imperative Three.js mutations inside the render loop.
    // eslint-disable-next-line react-hooks/immutability
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
  const [loadedPath, setLoadedPath] = useState<string | null>(null);
  const isModelLoaded = loadedPath === modelPath;

  const handleModelLoaded = useCallback((size: THREE.Vector3) => {
    if (size.length() > 0) {
      setLoadedPath(modelPath);
    }
  }, [modelPath]);

  // GSAP entrance animation for canvas container on load/slide transition
  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0.5,
        scale: 0.96,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.85,
        ease: "power2.out",
      }
    );
  }, [slideIndex]);

  return (
    <div
      ref={containerRef}
      className="hero-scene-stage absolute inset-0 w-full h-full pointer-events-auto flex items-center justify-center overflow-hidden bg-transparent border-0 outline-0"
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-out ${isModelLoaded ? "opacity-0" : "opacity-100"
          }`}
        aria-hidden="true"
      >
        <div className="relative h-52 w-52 sm:h-64 sm:w-64">
          <div className="absolute inset-0 rounded-full bg-accent-gold/10 blur-3xl" />
          <div className="absolute inset-8 rounded-full border border-accent-gold/25" />
          <div className="absolute inset-16 rounded-full bg-accent-gold/20 blur-xl" />
        </div>
      </div>
      <Canvas
        dpr={[1, 1.5]} // Cap device pixel ratio for faster first paint on dense screens
        frameloop="always"
        performance={{ min: 0.6 }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0); // Set transparent clear color (alpha = 0)
        }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true, // Transparent WebGL context enabled
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.25, // Exposure target = 1.25
        }}
        camera={{ position: [0, 0, 4.4], fov: 32, near: 0.1, far: 1000 }} // Camera Z offset at 4.4 to accommodate large scale without clipping
        style={{
          ...canvasStyle,
          opacity: isModelLoaded ? 1 : 0,
        }}
      >
        {/* Professional Studio Product Lighting Setup */}
        <CameraRig />

        {/* Soft global ambient fill to eliminate shadows on brass crevices */}
        <ambientLight color="#ffffff" intensity={2.2} />

        {/* Key Light: Large soft warm light, upper left */}
        <directionalLight
          color="#fffcf0" // Warm champagne tint
          intensity={4.5}
          position={[-6, 8, 4]}
        />

        {/* Fill Light: Soft neutral light, front right to eliminate dark reflections */}
        <directionalLight
          color="#ffffff"
          intensity={3.5}
          position={[6, 3, 5]}
        />

        {/* Front Soft Light: Soft direct fill to keep front face fully illuminated */}
        <directionalLight
          color="#fff8e7"
          intensity={2.5}
          position={[0, 0, 8]}
        />

        {/* Rim Light: Back right to create beautiful champagne edge highlights */}
        <directionalLight
          color="#ffffff"
          intensity={2.5}
          position={[6, 6, -6]}
        />

        {/* 3D Environment HDRI reflection mapping from local high-speed EXR file */}
        <Suspense fallback={null}>
          <Environment files="/hdr/studio.exr" />
        </Suspense>

        {/* Model, positioning, scale, and dynamic group animations */}
        <Suspense fallback={null}>
          <SceneWrapper modelPath={modelPath} onLoaded={handleModelLoaded} />
        </Suspense>
      </Canvas>
    </div>
  );
}
