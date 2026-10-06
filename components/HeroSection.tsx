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
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { useAutoPlay, useHeroScroll } from "@/hooks/useHeroScroll";

const HeroScene = dynamic(() => import("@/components/hero/HeroScene"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative h-52 w-52 sm:h-64 sm:w-64">
        <div className="absolute inset-0 rounded-full bg-accent-gold/10 blur-3xl animate-pulse" />
        <div className="absolute inset-8 rounded-full border border-accent-gold/25" />
        <div className="absolute inset-16 rounded-full bg-accent-gold/20 blur-xl" />
      </div>
    </div>
  ),
});

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
  const stopAutoPlayRef = useRef(() => { });
  const [mounted, setMounted] = useState(false);

  // Set mounted true on client
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
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
      <div className="relative lg:absolute w-full h-[210px] sm:h-[270px] lg:h-full lg:inset-0 z-10 lg:z-0 overflow-hidden pointer-events-auto bg-primary-dark mt-[76px] sm:mt-[88px] lg:mt-0">
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
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 sm:pt-4 lg:pt-20 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center w-full relative">

            {/* Left side: Stagger-animated text blocks */}
            <div ref={textRef} className="lg:col-span-7 space-y-3.5 sm:space-y-4 lg:space-y-5 z-20 relative pointer-events-auto">
              {/* Badge with 16-24px visual gap above headline on mobile */}
              <div className="slide-badge inline-flex items-center gap-1.5 sm:gap-2 border border-[#1E6D95]/40 bg-[#EAF3F7]/10 px-2.5 py-1.5 sm:px-4 sm:py-1.5 rounded-sm max-w-full mb-4 sm:mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B9793F] shrink-0 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.11em] sm:tracking-[0.22em] text-[#EAF3F7] font-mono whitespace-nowrap">
                  {slide.badge}
                </span>
              </div>

              {/* Headline */}
              <h1
                className="slide-title text-4xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.96] sm:leading-[0.95] tracking-tight text-white"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                {slide.headline.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? <span className="text-[#1E6D95]">{line}</span> : line}
                  </span>
                ))}
              </h1>

              {/* Subheading without decorative line */}
              <div className="slide-accent">
                <p className="text-[13px] sm:text-base font-semibold text-white/95 leading-snug sm:leading-relaxed">
                  {slide.sub}
                </p>
              </div>

              {/* Description */}
              <p className="slide-body text-xs sm:text-base text-zinc-300 leading-relaxed max-w-xl pb-0 sm:pb-2">
                {slide.body}
              </p>

              {/* CTAs - Side-by-side on mobile */}
              <div className="slide-ctas flex flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto pt-0.5 sm:pt-0">
                {slide.ctas.map((c) =>
                  c.primary ? (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="flex-1 sm:flex-initial flex items-center justify-center text-center min-h-[44px] sm:min-h-[48px] px-2.5 sm:px-8 py-3 sm:py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.06em] sm:tracking-[0.2em] text-white bg-[#1E6D95] hover:bg-[#15516F] transition-colors border border-[#1E6D95] hover:shadow-lg hover:shadow-[#1E6D95]/30 font-mono whitespace-nowrap"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="flex-1 sm:flex-initial flex items-center justify-center text-center min-h-[44px] sm:min-h-[48px] px-2.5 sm:px-8 py-3 sm:py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.06em] sm:tracking-[0.2em] text-white border border-white/40 hover:border-[#1E6D95] hover:text-[#1E6D95] transition-colors font-mono whitespace-nowrap"
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
          <div className="flex items-center gap-3 mt-4 sm:mt-6 z-20 relative pointer-events-auto" role="tablist" aria-label="Hero slides">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => handleManualGoTo(i)}
                className={`transition-all duration-300 rounded-full ${i === current
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
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => {
              const borderClass =
                i === 0
                  ? "border-r border-white/10 lg:border-r-0"
                  : i === 1
                  ? "lg:border-l lg:border-white/10"
                  : i === 2
                  ? "border-r border-t border-white/10 lg:border-t-0 lg:border-l"
                  : "border-t border-white/10 lg:border-t-0 lg:border-l";

              const isLongVal = s.val.length > 8; // specifically "ISO 9001:2015"

              return (
                <div
                  key={s.label}
                  className={`px-2 min-[375px]:px-3 sm:px-6 py-4 sm:py-5 flex flex-col items-center justify-center text-center ${borderClass}`}
                >
                  <div className="h-7 sm:h-9 flex items-center justify-center">
                    <span
                      className={`font-black text-accent-gold leading-none whitespace-nowrap ${
                        isLongVal
                          ? "text-[15px] min-[375px]:text-[17px] min-[390px]:text-[18px] sm:text-2xl lg:text-3xl tracking-tight"
                          : "text-2xl min-[375px]:text-[26px] sm:text-3xl"
                      }`}
                      style={{ fontFamily: "var(--font-serif-display)" }}
                    >
                      {s.val}
                    </span>
                  </div>
                  <span className="text-[9px] min-[375px]:text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-zinc-400 mt-1.5 sm:mt-2 font-mono whitespace-nowrap">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
