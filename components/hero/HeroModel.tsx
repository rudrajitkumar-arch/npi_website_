"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { normalizeScale } from "@/utils/threeHelpers";

interface HeroModelProps {
  modelPath?: string;
  onLoaded?: () => void;
}

export default function HeroModel({
  modelPath = "/models/brass_component_1.glb",
  onLoaded,
}: HeroModelProps) {
  const { scene } = useGLTF(modelPath);

  // Clone scene so multiple instances don't collide
  const model = useMemo(() => scene.clone(true), [scene]);

  // Normalize scale to consistent target size
  const scaleFactor = useMemo(() => {
    return normalizeScale(model, 0.32);
  }, [model]);

  // Notify parent that model is parsed and ready
  useEffect(() => {
    if (onLoaded) {
      onLoaded();
    }
  }, [onLoaded]);

  // Apply rich metallic physical materials
  useEffect(() => {
    const isBoltAndNut = modelPath.includes("bolt_and_nut");
    const isCopperComponent = modelPath.includes("copper_component");

    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const nameLower = child.name.toLowerCase();

        // Hide default backdrops, planes, environment cards in the GLB
        if (
          nameLower.includes("plane") ||
          nameLower.includes("background") ||
          nameLower.includes("backdrop") ||
          nameLower.includes("stage") ||
          nameLower.includes("floor") ||
          nameLower.includes("wall") ||
          nameLower.includes("light") ||
          nameLower.includes("camera") ||
          nameLower.includes("studio") ||
          nameLower.includes("box") ||
          nameLower.includes("ground") ||
          nameLower.includes("shadow") ||
          nameLower.includes("screen")
        ) {
          child.visible = false;
          return;
        }

        if (child.material) {
          const oldMat = child.material as THREE.MeshStandardMaterial;

          // Rich physical material: 0.85 metalness ensures vibrant color is lit by studio lights
          const mat = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(
              isCopperComponent
                ? "#d97443"
                : isBoltAndNut
                ? "#bcc4ce"
                : "#d4a843"
            ),
            roughness: isCopperComponent ? 0.20 : isBoltAndNut ? 0.22 : 0.18,
            metalness: 0.85,
            clearcoat: 0.3,
            clearcoatRoughness: 0.08,
            envMapIntensity: 1.5,
            map: oldMat.map || null,
            normalMap: oldMat.normalMap || null,
            roughnessMap: oldMat.roughnessMap || null,
            metalnessMap: oldMat.metalnessMap || null,
          });

          child.material = mat;
          mat.needsUpdate = true;
        }
      }
    });
  }, [model, modelPath]);

  return (
    <group scale={[scaleFactor, scaleFactor, scaleFactor]}>
      <primitive object={model} />
    </group>
  );
}

// Preload models for instant display
useGLTF.preload("/models/brass_component_1.glb");
useGLTF.preload("/models/bolt_and_nut.glb");
useGLTF.preload("/models/copper_component.glb");
