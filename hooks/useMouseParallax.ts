import { useEffect, useRef } from "react";

export function useMouseParallax(lerpFactor = 0.05) {
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -0.5 to 0.5
      target.current.x = (e.clientX / window.innerWidth) - 0.5;
      target.current.y = (e.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Update on each frame
  const update = () => {
    mouse.current.x += (target.current.x - mouse.current.x) * lerpFactor;
    mouse.current.y += (target.current.y - mouse.current.y) * lerpFactor;
    return mouse.current;
  };

  return { mouse, target, update };
}
