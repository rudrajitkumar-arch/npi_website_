"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingModelProps {
  children: React.ReactNode;
}

export default function FloatingModel({ children }: FloatingModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Refs to store animated values for smooth transitions
  const scaleRef = useRef(1.0);
  const spinSpeedRef = useRef(1.0);
  const rotationYRef = useRef(0.0);
  const wiggleXRef = useRef(0.0);
  const wiggleZRef = useRef(0.0);

  // Initial tilt angles from reference: X = 20 deg, Y = -35 deg, Z = 5 deg
  const initialRotX = THREE.MathUtils.degToRad(20);
  const initialRotY = THREE.MathUtils.degToRad(-35);
  const initialRotZ = THREE.MathUtils.degToRad(5);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    // 1. Hover state animations:
    // Scale up slightly (8%) on hover
    const targetScale = hovered ? 1.08 : 1.0;
    // Slow down auto-spin slightly (to 60% speed) for a calmer look when hovered
    const targetSpinSpeed = hovered ? 0.6 : 1.0;

    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, 0.08);
    spinSpeedRef.current = THREE.MathUtils.lerp(spinSpeedRef.current, targetSpinSpeed, 0.05);

    groupRef.current.scale.set(scaleRef.current, scaleRef.current, scaleRef.current);

    // 2. Accumulative CLOCKWISE Y-axis rotation (prevents phase jumps when speed changes)
    const baseSpinSpeed = Math.PI * 2 / 12; // ~0.5236 rad/sec
    rotationYRef.current -= delta * baseSpinSpeed * spinSpeedRef.current;

    // 3. Floating animation (Sine In Out)
    const floatY = 0.02 * Math.sin((t * 2 * Math.PI) / 5);

    // 4. Subtle wiggle animation on X and Z axes (active only on hover)
    const targetWiggleX = hovered ? 0.04 * Math.sin(t * 3.5) : 0.0;
    const targetWiggleZ = hovered ? 0.02 * Math.cos(t * 4.5) : 0.0;

    wiggleXRef.current = THREE.MathUtils.lerp(wiggleXRef.current, targetWiggleX, 0.08);
    wiggleZRef.current = THREE.MathUtils.lerp(wiggleZRef.current, targetWiggleZ, 0.08);

    // Apply linear clockwise spin combined with the subtle hover wiggle
    groupRef.current.rotation.x = initialRotX + wiggleXRef.current;
    groupRef.current.rotation.y = initialRotY + rotationYRef.current;
    groupRef.current.rotation.z = initialRotZ + wiggleZRef.current;

    // 5. Subtle camera glide simulation (translating X, Y, Z slowly over time to slide reflections)
    const glideX = 0.015 * Math.sin(t * 0.4);
    const glideY = floatY + 0.01 * Math.cos(t * 0.3);
    const glideZ = 0.01 * Math.sin(t * 0.2);

    groupRef.current.position.set(glideX, glideY, glideZ);
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
    >
      {children}
    </group>
  );
}
