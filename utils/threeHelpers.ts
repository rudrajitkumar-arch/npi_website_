import * as THREE from "three";

/**
 * Compute the bounding box center of a 3D object.
 * Returns the center Vector3.
 */
export function centerModel(object: THREE.Object3D): THREE.Vector3 {
  const box = new THREE.Box3().setFromObject(object);
  const center = new THREE.Vector3();
  box.getCenter(center);
  return center;
}

/**
 * Compute the scale factor needed to normalize the object's
 * largest bounding dimension to targetSize.
 */
export function normalizeScale(object: THREE.Object3D, targetSize = 2.0): number {
  const box = new THREE.Box3().setFromObject(object);
  const size = new THREE.Vector3();
  box.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z);
  return maxDim > 0 ? targetSize / maxDim : 1.0;
}

/**
 * Calculate the camera distance needed to fit a bounding box size
 * vertically within the camera view at a specific target ratio.
 */
export function fitCameraToModel(
  modelSize: THREE.Vector3,
  fov: number,
  targetRatio = 0.8
): number {
  // Bounding sphere radius approximation
  const radius = modelSize.length() / 2;
  const fovRad = (fov * Math.PI) / 180;
  return radius / (Math.sin(fovRad / 2) * targetRatio);
}
