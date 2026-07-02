"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { centerModel, normalizeScale } from "@/utils/threeHelpers";

interface HeroModelProps {
  modelPath?: string;
  onLoaded: (size: THREE.Vector3) => void;
}

export default function HeroModel({
  modelPath = "/models/brass_component_1.glb",
  onLoaded,
}: HeroModelProps) {
  // Load model using Drei's useGLTF
  const { scene } = useGLTF(modelPath);

  // Compute scale and centering properties using utilities
  const { center, scaleFactor, size } = useMemo(() => {
    const centerPoint = centerModel(scene);
    const factor = normalizeScale(scene, 2.0); // Keep normalized baseline in logic
    
    const box = new THREE.Box3().setFromObject(scene);
    const sizeVec = new THREE.Vector3();
    box.getSize(sizeVec);
    
    return { center: centerPoint, scaleFactor: factor, size: sizeVec };
  }, [scene]);

  // Send size updates up to parent for camera fitting
  useEffect(() => {
    onLoaded(size);
  }, [size, onLoaded]);

  // Traverse model meshes to enable shadows and optimize brass metal PBR reflections
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          // Adjust physical properties for premium Apple-style product reflections
          const mat = child.material as THREE.MeshStandardMaterial;
          mat.roughness = 0.10; // Extra smooth for specular highlights
          mat.metalness = 1.0;  // Fully metallic brass
          mat.envMapIntensity = 2.2; // Brighter environment mapping reflection strength
          mat.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  return (
    // Outer group normalizes scale, inner primitive offsets origin to (0,0,0)
    <group scale={[scaleFactor, scaleFactor, scaleFactor]}>
      <primitive object={scene} position={[-center.x, -center.y, -center.z]} />
    </group>
  );
}

// Preload the default GLB model
useGLTF.preload("/models/brass_component_1.glb");
