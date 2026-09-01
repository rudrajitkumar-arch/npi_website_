"use client";

/**
 * HeroSection
 *
 * Slide-hijacked scroll-locked hero with:
 * - Full-screen background 3D Canvas (HeroScene) behind a subtle dark overlay
 * - Native wheel, touch-swipe, and keyboard arrow locked navigation (useHeroScroll)
 * - Auto-slide cycle triggered on the final slide with interactive overrides (useAutoPlay)
 * - Apple-style staggered text animations using GSAP on slide change
 * - Seamless release of scroll lock upon completing the slide deck
 */

import { useRef, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import HeroScene from "@/components/hero/HeroScene";
import { useAutoPlay, useHeroScroll } from "@/hooks/useHeroScroll";

/* ─── SLIDE DATA ──────────────────────────────────────────── */
const SLIDES = [
  {
    badge: "Est. 2007 · Jamnagar, India's Brass City",
    headline: "PRECISION\nENGINEERED",
    sub: "Precision components manufactured to exact specification.",
    body: "Nearly two decades of precision engineering from Jamnagar — India's Brass City.",
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
    modelPath: "/models/bolt_and_nut.glb",
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
    modelPath: "/models/copper_component.glb",
  },
];

const STATS = [
  { val: "2007", label: "Established" },
  { val: "50,000", label: "Sq Ft Facility" },
  { val: "110+", label: "Machines" },
  { val: "ISO 9001:2015", label: "Certified" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const stopAutoPlayRef = useRef(() => {});
  const [mounted, setMounted] = useState(false);

  // Set mounted true on client
  useEffect(() => {
    setMounted(true);
  }, []);

  /** Staggered Apple-style text element animations on slide change */
  const handleSlideChange = useCallback((idx: number) => {
    void idx;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    if (textRef.current) {
      const badge = textRef.current.querySelector(".slide-badge");
      const title = textRef.current.querySelector(".slide-title");
      const accent = textRef.current.querySelector(".slide-accent");
      const body = textRef.current.querySelector(".slide-body");
      const ctas = textRef.current.querySelector(".slide-ctas");

      // Kill previous tweens to prevent overlapping animations
      gsap.killTweensOf([badge, title, accent, body, ctas]);

      const tl = gsap.timeline();
      tl.fromTo(
        badge,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      )
        .fromTo(
          title,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.28"
        )
        .fromTo(
          accent,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.28"
        )
        .fromTo(
          body,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.28"
        )
        .fromTo(
          ctas,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.28"
        );
    }
  }, []);

  // Hook scroll hijacked events to slide transitions
  const { current, goTo, isHeroActive } = useHeroScroll({
    slideCount: SLIDES.length,
    heroRef,
    onSlideChange: handleSlideChange,
    onHeroLeave: () => stopAutoPlayRef.current(),
    onUserInteract: () => stopAutoPlayRef.current(),
    throttleMs: 750,
  });

  // Cycle automatically after 2s on the last slide, stopping on user input
  const { stopAutoPlay } = useAutoPlay({
    current,
    slideCount: SLIDES.length,
    goTo,
    enabled: isHeroActive,
    initialDelay: 2000,
    interval: 3600,
  });

  // Sync autoplay ref
  useEffect(() => {
    stopAutoPlayRef.current = stopAutoPlay;
  }, [stopAutoPlay]);

  /** Manual indicator click jumps dot and moves scroll view back to lock area */
  const handleManualGoTo = useCallback((idx: number) => {
    stopAutoPlay();
    goTo(idx);
    if (heroRef.current) {
      const top = window.scrollY + heroRef.current.getBoundingClientRect().top;
      window.scrollTo(0, top);
    }
  }, [goTo, stopAutoPlay]);

  const slide = SLIDES[current];

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col bg-primary-dark overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── BACKGROUND FULL-SIZE 3D CANVAS & OVERLAYS ── */}
      <div className="relative lg:absolute w-full h-[280px] lg:h-full lg:inset-0 z-10 lg:z-0 overflow-hidden pointer-events-auto bg-primary-dark mt-14 lg:mt-0">
        {/* Subtle dark gradient overlay rendered on the bottom layer (hidden on mobile) */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary-dark/45 z-0 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary-dark/35 z-0 hidden lg:block" />

        {/* 3D Canvas rendered on top of overlays (but beneath foreground content z-20) */}
        <div className="absolute inset-0 w-full h-full z-10">
          {mounted && <HeroScene modelPath={slide.modelPath} slideIndex={current} />}
        </div>
      </div>

      {/* ── SLIDE FOREGROUND CONTENT ── */}
      <div className="relative z-20 flex-1 flex items-center pointer-events-none">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 lg:pt-20 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative">
            
            {/* Left side: Stagger-animated text blocks */}
            <div ref={textRef} className="lg:col-span-7 space-y-5 z-20 relative pointer-events-auto">
              {/* Badge */}
              <div className="slide-badge inline-flex items-center gap-2 border border-accent-gold/40 bg-accent-gold/10 px-4 py-1.5 rounded-sm mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent-gold font-mono">
                  {slide.badge}
                </span>
              </div>

              {/* Headline */}
              <h1
                className="slide-title text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tight text-white"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                {slide.headline.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? <span className="text-accent-gold">{line}</span> : line}
                  </span>
                ))}
              </h1>

              {/* Accent line */}
              <div className="slide-accent flex items-center gap-3 py-1">
                <div className="w-12 h-0.5 bg-accent-gold shrink-0" />
                <p className="text-sm sm:text-base font-semibold text-white/95 leading-relaxed">
                  {slide.sub}
                </p>
              </div>

              {/* Description */}
              <p className="slide-body text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl pb-2">{slide.body}</p>

              {/* CTAs */}
              <div className="slide-ctas flex flex-wrap gap-4">
                {slide.ctas.map((c) =>
                  c.primary ? (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover transition-colors border border-accent-gold hover:shadow-lg hover:shadow-accent-gold/30 font-mono"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white border border-white/40 hover:border-accent-gold hover:text-accent-gold transition-colors font-mono"
                    >
                      {c.label}
                    </Link>
                  )
                )}
              </div>
            </div>
            
            {/* Right side spacer to balance layout grid */}
            <div className="hidden lg:block lg:col-span-5 h-[350px] pointer-events-none" />
          </div>

          {/* ── SLIDE INDICATORS ── */}
          <div className="flex items-center gap-3 mt-6 z-20 relative pointer-events-auto" role="tablist" aria-label="Hero slides">
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
            <span className="ml-4 text-[11px] font-mono text-white/40 tracking-widest" aria-live="polite">
              {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* ── STAT BAR ── */}
      <div className="relative z-20 border-t border-white/10 bg-primary-dark/85 backdrop-blur-sm shrink-0 pointer-events-auto">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
            {STATS.map((s) => (
              <div key={s.label} className="px-6 py-5 flex flex-col items-center text-center">
                <span
                  className="text-2xl sm:text-3xl font-black text-accent-gold leading-none"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {s.val}
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mt-2 font-mono">
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
