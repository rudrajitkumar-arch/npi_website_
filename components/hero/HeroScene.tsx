"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useState, useMemo } from "react";
import { Center, Environment, ContactShadows } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
import { fitCameraToModel } from "@/utils/threeHelpers";
import HeroModel from "./HeroModel";
import FloatingModel from "./FloatingModel";

interface HeroSceneProps {
  modelPath?: string;
  slideIndex: number;
}

// Controller component to dynamically adjust camera focal length based on bounding box
function CameraController({ modelSize }: { modelSize: THREE.Vector3 }) {
  const { camera } = useThree();

  useEffect(() => {
    if (modelSize.length() === 0) return;

    // Calculate distance needed to fit model vertically within 35 deg FOV
    // Target ratio set to 0.75 to ensure the model occupies ~75% of height and leaves padding
    const distance = fitCameraToModel(modelSize, 35, 0.75);

    camera.position.set(0, 0, Math.max(distance, 4.0));
    camera.near = 0.1;
    camera.far = 1000;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    camera.updateProjectionMatrix();
  }, [camera, modelSize]);

  return null;
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

  // Responsive scale factor based on screen size width
  const responsiveScale = useMemo(() => {
    if (canvasSize.width < 640) return 1.4; // Mobile
    if (canvasSize.width < 1024) return 1.8; // Tablet
    return 2.3; // Desktop
  }, [canvasSize.width]);

  // Position coordinates: shift to right on desktop/tablet, center on mobile
  const positionOffset = useMemo(() => {
    if (canvasSize.width < 768) return [0, -0.15, 0] as [number, number, number]; // Centered on mobile
    return [1.4, -0.15, 0] as [number, number, number]; // Shifted right on desktop/tablet
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

export default function HeroScene({
  modelPath = "/models/brass_component_1.glb",
  slideIndex,
}: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [modelSize, setModelSize] = useState<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  // GSAP entrance animation for canvas container on load/slide transition
  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        scale: 0.95,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, [slideIndex]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center"
    >
      <Canvas
        shadows
        dpr={[1, 2]} // Cap device pixel ratio at 2.0 for performance
        frameloop="always"
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true, // Transparent background to blend into dark teal hero
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        camera={{ position: [0, 0, 5], fov: 35 }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none", // Prevent Canvas from trapping cursor clicks
        }}
      >
        {/* Lights setup as per requested premium studio specs */}
        <ambientLight color="#ffffff" intensity={1.2} />
        
        <directionalLight
          color="#ffffff"
          intensity={2.5}
          position={[6, 8, 6]}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        
        <directionalLight
          color="#ffffff"
          intensity={1.2}
          position={[-6, 4, 5]}
        />

        {/* Dynamic camera adapter */}
        <CameraController modelSize={modelSize} />

        {/* 3D Environment HDRI reflection mapping from studio preset */}
        <Suspense fallback={null}>
          <Environment preset="studio" />
        </Suspense>

        {/* Model, positioning, scale, and dynamic group animations */}
        <Suspense fallback={null}>
          <SceneWrapper modelPath={modelPath} onLoaded={setModelSize} />

          {/* Soft contact shadow underneath the floating object */}
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.25}
            scale={10}
            blur={2.0}
            far={5.0}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
