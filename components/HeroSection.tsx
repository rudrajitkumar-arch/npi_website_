"use client";

/**
 * HeroSection
 *
 * Scroll-driven 3-slide hero with:
 * - React Three Fiber 3D backgrounds (lazy-loaded per slide)
 * - GSAP slide transitions (opacity + vertical translate)
 * - Scroll-hijack while hero is in viewport
 * - Autoplay on last slide
 * - Keyboard + touch + mouse-wheel navigation
 * - Accessible, SEO-friendly, respects prefers-reduced-motion
 */

import { useRef, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { useHeroScroll, useAutoPlay } from "@/hooks/useHeroScroll";

// Dynamic import for the R3F Canvas wrapper (client-only to prevent SSR canvas issues)
const HeroScene = dynamic(() => import("@/components/hero/HeroScene"), {
  ssr: false,
});

/* ─── SLIDE DATA ──────────────────────────────────────────── */
const SLIDES = [
  {
    badge: "Est. 2007 · Jamnagar, India's Brass City",
    headline: "PRECISION\nENGINEERED",
    sub: "Brass & copper components manufactured to exact specification.",
    body: "Two decades of precision engineering from Jamnagar, India's Brass City.",
    ctas: [
      { label: "Get a Quote", href: "/contact", primary: true },
      { label: "Explore Capabilities", href: "/capabilities", primary: false },
    ],
    modelPath: "/models/brass_component_1.glb",
  },
  {
    badge: "ISO 9001:2015 Certified · RoHS Compliant",
    headline: "QUALITY\nCERTIFIED",
    sub: "ISO 9001:2015 certified manufacturing with 100% visual inspection.",
    body: "From raw material to dispatch, every component follows a controlled quality process.",
    ctas: [
      { label: "View Quality System", href: "/quality", primary: true },
      { label: "Contact Sales", href: "/contact", primary: false },
    ],
    modelPath: "/models/brass_component_1.glb", // Reuse first model for slide 2 for now
  },
  {
    badge: "CNC · Machined · Plated · Export-Ready",
    headline: "CUSTOM\nCOMPONENTS",
    sub: "CNC turned, machined, plated, assembled, and export-ready.",
    body: "Serving electrical, automotive, aerospace, medical, plumbing, and industrial supply chains.",
    ctas: [
      { label: "View Products", href: "/products", primary: true },
      { label: "Send Enquiry", href: "/contact", primary: false },
    ],
    modelPath: "/models/brass_component_1.glb", // Reuse first model for slide 3 for now
  },
];

const STATS = [
  { val: "2007", label: "Established" },
  { val: "10,000", label: "sq.m. Facility" },
  { val: "110+", label: "Machines" },
  { val: "ISO 9001:2015", label: "Certified" },
];

/* ─── SLIDE CONTENT PANEL ──────────────────────────────────
   Identical markup/classes to original — with grid for 3D model
──────────────────────────────────────────────────────────── */
interface SlideContentProps {
  slide: (typeof SLIDES)[number];
  contentRef: React.RefObject<HTMLDivElement | null>;
  slideIndex: number;
}

function SlideContent({ slide, contentRef, slideIndex }: SlideContentProps) {
  return (
    <div
      ref={contentRef}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full"
    >
      {/* Left side: Text Column */}
      <div className="lg:col-span-7 space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-accent-gold/40 bg-accent-gold/10 px-4 py-1.5 rounded-sm mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gold">
            {slide.badge}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight text-white"
          style={{ fontFamily: "var(--font-serif-display)" }}
        >
          {slide.headline.split("\n").map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? <span className="text-accent-gold">{line}</span> : line}
            </span>
          ))}
        </h1>

        {/* Accent line */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-0.5 bg-accent-gold shrink-0" />
          <p className="text-sm sm:text-base font-semibold text-white/90 leading-snug">
            {slide.sub}
          </p>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">{slide.body}</p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 pt-2">
          {slide.ctas.map((c) =>
            c.primary ? (
              <Link
                key={c.label}
                href={c.href}
                className="px-8 py-3.5 text-xs font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover transition-colors border border-accent-gold hover:shadow-lg hover:shadow-accent-gold/30"
              >
                {c.label}
              </Link>
            ) : (
              <Link
                key={c.label}
                href={c.href}
                className="px-8 py-3.5 text-xs font-black uppercase tracking-widest text-white border border-white/40 hover:border-accent-gold hover:text-accent-gold transition-colors"
              >
                {c.label}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Right side: 3D Model Column */}
      <div className="lg:col-span-5 w-full h-[320px] sm:h-[450px] lg:h-[550px] flex items-center justify-center pointer-events-none relative">
        <HeroScene modelPath={slide.modelPath} slideIndex={slideIndex} />
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ────────────────────────────────────── */
export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);

  // Keep currentRef in sync
  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  /** Called by useHeroScroll when the active slide changes */
  const handleSlideChange = useCallback((idx: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // No animation — instant switch
      setCurrent(idx);
      isAnimating.current = false;
      return;
    }

    // GSAP: fade out content, swap, fade in
    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    // Fade out current content
    tl.to(contentRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
    });

    // Switch React state
    tl.call(() => {
      setCurrent(idx);
      currentRef.current = idx;
    });

    // Fade in new content
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, []);

  const { goTo } = useHeroScroll({
    slideCount: SLIDES.length,
    heroRef: heroRef as React.RefObject<HTMLElement>,
    onSlideChange: handleSlideChange,
    throttleMs: 700,
  });

  const { stopAutoPlay } = useAutoPlay({
    current,
    slideCount: SLIDES.length,
    goTo: handleSlideChange,
    initialDelay: 2000,
    interval: 3500,
  });

  /** Manual navigation (dots) — also stops autoplay */
  const handleManualGoTo = useCallback(
    (idx: number) => {
      stopAutoPlay();
      handleSlideChange(idx);
    },
    [stopAutoPlay, handleSlideChange]
  );

  const slide = SLIDES[current];

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col bg-primary-dark overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── BACKGROUND GRADIENT OVERLAYS ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/98 via-primary-dark/90 to-primary-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary-dark/40" />

      {/* ── DECORATIVE VERTICAL LINES ── */}
      <div className="absolute inset-y-0 left-[33%] w-px bg-white/5 hidden xl:block" aria-hidden="true" />
      <div className="absolute inset-y-0 left-[66%] w-px bg-white/5 hidden xl:block" aria-hidden="true" />

      {/* ── SLIDE CONTENT ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-12">
          <SlideContent slide={slide} contentRef={contentRef} slideIndex={current} />

          {/* ── SLIDE INDICATORS ── */}
          <div className="flex items-center gap-3 mt-16" role="tablist" aria-label="Hero slides">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => handleManualGoTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-2 bg-accent-gold"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
            <span className="ml-4 text-[10px] font-mono text-white/30 tracking-widest" aria-live="polite">
              {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* ── STAT BAR ── */}
      <div className="relative z-10 border-t border-white/10 bg-primary-dark/80 backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
            {STATS.map((s) => (
              <div key={s.label} className="px-6 py-5 flex flex-col items-center text-center">
                <span
                  className="text-xl sm:text-2xl font-black text-accent-gold leading-none"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {s.val}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
