"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "EVERY PRECISION COMPONENTS",
    subtitle: "EXPORTING QUALITY SINCE 2007",
    description: "ISO 9001:2015 Certified manufacturer and global exporter of high-grade copper and brass fasteners, fittings, and machined parts based in Jamnagar, India",
    image: "/images/factory-floor.jpg",
    badge: "ISO 9001:2015 CERTIFIED"
  },
  {
    id: 2,
    title: "50,000 SQ FT MANUFACTURING FACILITY",
    subtitle: "STATE-OF-THE-ART INFRASTRUCTURE",
    description: "Equipped with 110+ advanced CNC, VMC, and automatic lathe machines to deliver complex geometric components with tolerances up to +/- 0.01 mm",
    image: "/images/cnc-turned-parts.jpg",
    badge: "110+ ADVANCED MACHINES"
  },
  {
    id: 3,
    title: "CUSTOM B2B ENGINEERING SOLUTIONS",
    subtitle: "GLOBAL SECTOR SPECIFIC SUPPLIER",
    description: "Reliable OEM supplier to electrical, automotive, aerospace, plumbing, medical, and marine industries across international markets",
    image: "/images/raw-material.jpg",
    badge: "RoHS & COMPLIANCE COMPATIBLE"
  }
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[650px] sm:h-[750px] lg:h-[850px] bg-primary-dark overflow-hidden shrink-0 flex items-center">
      {/* Background Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-40 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover scale-105 filter brightness-75"
          />
        </div>
      ))}

      {/* Dark overlay for factory/product imagery */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-transparent z-20" />
      <div className="absolute inset-0 bg-primary-dark/30 z-20" />

      {/* Slide Messaging Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl space-y-6">
          {slides[currentSlide].badge && (
            <div className="inline-flex items-center gap-2 border border-accent-gold/45 bg-accent-gold/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-gold">
                {slides[currentSlide].badge}
              </span>
            </div>
          )}

          <span className="block text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-accent-gold">
            {slides[currentSlide].subtitle}
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-white leading-tight uppercase tracking-tight">
            {slides[currentSlide].title}
          </h1>

          <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-accent-gold bg-accent-gold hover:bg-accent-gold-hover text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/30"
            >
              Request A Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white hover:border-accent-gold hover:bg-accent-gold text-white text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Navigator Controls */}
      <div className="absolute bottom-10 right-4 sm:right-10 lg:right-20 z-30 flex items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="p-3 border border-white/20 hover:border-accent-gold text-white hover:text-accent-gold hover:bg-white/5 transition-all duration-200"
          aria-label="Previous Slide"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slide Counter Numbers */}
        <div className="text-white font-mono text-sm tracking-widest">
          <span className="text-accent-gold font-bold">{(currentSlide + 1).toString().padStart(2, "0")}</span>
          <span className="text-white/40"> / </span>
          <span>{slides.length.toString().padStart(2, "0")}</span>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="p-3 border border-white/20 hover:border-accent-gold text-white hover:text-accent-gold hover:bg-white/5 transition-all duration-200"
          aria-label="Next Slide"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-white/5 pointer-events-none hidden lg:block z-25" />
      <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-white/5 pointer-events-none hidden lg:block z-25" />
      <div className="absolute top-0 bottom-0 left-[90%] w-[1px] bg-white/5 pointer-events-none hidden lg:block z-25" />
    </div>
  );
}
