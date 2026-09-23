"use client";
/**
 * ScrollReveal
 * Tiny client component — runs IntersectionObserver to toggle
 * `.is-visible` on every `.reveal-hidden` element in the document.
 * Renders nothing visible.
 */
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll<HTMLElement>(".reveal-hidden").forEach((el) =>
      io.observe(el)
    );

    return () => io.disconnect();
  }, []);

  return null;
}
