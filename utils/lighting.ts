export const LIGHT_CONFIG = {
  ambient: {
    color: "#ffffff",
    intensity: 2.2, // Increased ambient light to reduce black reflections
  },
  directional: {
    color: "#ffffff",
    intensity: 4.0, // High intensity main key light
    position: [6, 8, 6] as [number, number, number],
  },
  fill: {
    color: "#ffffff",
    intensity: 2.5, // Soft fill light from front-left
    position: [-6, 3, 5] as [number, number, number],
  },
  rim: {
    color: "#ffffff",
    intensity: 2.0, // Rim light from back-left for highlighted edges
    position: [-4, 6, -6] as [number, number, number],
  },
};
