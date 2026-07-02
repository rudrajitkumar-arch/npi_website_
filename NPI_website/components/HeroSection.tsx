"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

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
  },
];

const STATS = [
  { val: "2007", label: "Established" },
  { val: "10,000", label: "sq.m. Facility" },
  { val: "110+", label: "Machines" },
  { val: "ISO 9001:2015", label: "Certified" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
      }, 300);
    },
    [animating]
  );

  useEffect(() => {
    const t = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(t);
  }, [current, goTo]);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-primary-dark overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{ backgroundImage: "url('/images/factory-floor.jpg')" }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary-dark/40" />

      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-[33%] w-px bg-white/5 hidden xl:block" />
      <div className="absolute inset-y-0 left-[66%] w-px bg-white/5 hidden xl:block" />

      {/* Slide content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-12">
          <div
            className={`max-w-3xl transition-all duration-300 ${
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-accent-gold/40 bg-accent-gold/10 px-4 py-1.5 rounded-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gold">
                {slide.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight text-white mb-6"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              {slide.headline.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span className="text-accent-gold">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            {/* Brass accent line */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-0.5 bg-accent-gold" />
              <p className="text-sm sm:text-base font-semibold text-white/90 leading-snug">
                {slide.sub}
              </p>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mb-10 max-w-xl">
              {slide.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
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

          {/* Slide indicators */}
          <div className="flex items-center gap-3 mt-16">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-2 bg-accent-gold"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
            <span className="ml-4 text-[10px] font-mono text-white/30 tracking-widest">
              {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Stat bar */}
      <div className="relative z-10 border-t border-white/10 bg-primary-dark/80 backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="px-6 py-5 flex flex-col items-center text-center"
              >
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
