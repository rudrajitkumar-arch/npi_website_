"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { centerModel, normalizeScale } from "@/utils/threeHelpers";

interface HeroModelProps {
  modelPath?: string;
  onLoaded: (size: THREE.Vector3) => void;
}

function disposeMaterial(material: THREE.Material | THREE.Material[]) {
  if (Array.isArray(material)) {
    material.forEach((mat) => mat.dispose());
    return;
  }

  material.dispose();
}

export default function HeroModel({
  modelPath = "/models/brass_component_1.glb",
  onLoaded,
}: HeroModelProps) {
  const { scene } = useGLTF(modelPath);

  const model = useMemo(() => scene.clone(true), [scene]);

  const { center, scaleFactor, size } = useMemo(() => {
    const centerPoint = centerModel(model);
    const factor = normalizeScale(model, 0.25);

    const box = new THREE.Box3().setFromObject(model);
    const sizeVec = new THREE.Vector3();
    box.getSize(sizeVec);

    return { center: centerPoint, scaleFactor: factor, size: sizeVec };
  }, [model]);

  useEffect(() => {
    onLoaded(size);
  }, [size, onLoaded]);

  useEffect(() => {
    const isBoltAndNut = modelPath === "/models/bolt_and_nut.glb";
    const isCopperComponent = modelPath === "/models/copper_component.glb";

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

          const mat = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(
              isCopperComponent
                ? "#d97746"
                : isBoltAndNut
                ? "#9CA3AF"
                : "#ebd39c"
            ),
            roughness: isCopperComponent ? 0.22 : isBoltAndNut ? 0.28 : 0.18,
            metalness: 1.0,  // Fully metallic
            clearcoat: 0.20, // Clearcoat layer
            clearcoatRoughness: 0.05,
            envMapIntensity: 2.2, // High reflection intensity to eliminate black reflection spots
            map: oldMat.map,
            normalMap: oldMat.normalMap,
            roughnessMap: oldMat.roughnessMap,
            metalnessMap: oldMat.metalnessMap,
          });

          child.material = mat;
          mat.needsUpdate = true;
        }
      }
    });
  }, [model]);

  useEffect(() => {
    return () => {
      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material) disposeMaterial(child.material);
        }
      });
    };
  }, [model]);

  return (
    <group scale={[scaleFactor, scaleFactor, scaleFactor]}>
      <primitive object={model} position={[-center.x, -center.y, -center.z]} />
    </group>
  );
}
