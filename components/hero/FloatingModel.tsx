"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMouseParallax } from "@/hooks/useMouseParallax";

interface FloatingModelProps {
  children: React.ReactNode;
}

export default function FloatingModel({ children }: FloatingModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { update } = useMouseParallax(0.04); // smooth cursor tracking

  // Initial target isometric angle: X = 18 deg, Y = -45 deg, Z = 8 deg
  const initialRotX = THREE.MathUtils.degToRad(18);
  const initialRotY = THREE.MathUtils.degToRad(-45);
  const initialRotZ = THREE.MathUtils.degToRad(8);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    // 1. Continuous slow Y-axis rotation (0.21 radians/second)
    const continuousRotY = t * 0.21;

    // 2. Subtle floating animation (±0.05 units, 4 second period, Sine In Out)
    const floatY = 0.05 * Math.sin((t * 2 * Math.PI) / 4);

    // 3. Mouse Parallax (subtle rotation & movement, maximum 6 deg rotation)
    const mousePos = update();

    // Max rotation 6 degrees (~0.10 rad)
    const targetParallaxRotX = mousePos.y * THREE.MathUtils.degToRad(12); // ±6 deg range
    const targetParallaxRotY = mousePos.x * THREE.MathUtils.degToRad(12); // ±6 deg range

    // Apply combined rotations and floating positions
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      initialRotX + targetParallaxRotX,
      0.08
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      initialRotY + continuousRotY + targetParallaxRotY,
      0.08
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      initialRotZ,
      0.08
    );
    
    groupRef.current.position.x = 0;
    groupRef.current.position.y = floatY;
    groupRef.current.position.z = 0;
  });

  return <group ref={groupRef}>{children}</group>;
}
