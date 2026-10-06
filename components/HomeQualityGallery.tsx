"use client";

/**
 * HomeQualityGallery — Compact Horizontal Editorial Quality Gallery
 *
 * Placed on Home Page:
 *  Near Quality section, before the final CTA.
 *
 * Features:
 *  - Exactly 6 quality/facility images
 *  - Fixed 4:3 aspect ratio per card (consistent width & height)
 *  - Smooth continuous horizontal scrolling marquee (Right → Left)
 *  - Seamless infinite loop
 *  - Hover to pause scrolling
 *  - Click & drag on desktop, swipe on mobile
 *  - Accessible modal lightbox on click
 *  - Respects prefers-reduced-motion
 *  - Zero layout shift with fallback neutral placeholder
 */

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export interface QualityGalleryItem {
  id: number;
  title: string;
  groupLabel: string;
  src: string;
  alt: string;
}

export const HOME_QUALITY_IMAGES: QualityGalleryItem[] = [
  {
    id: 1,
    title: "Quality Inspection Lab",
    groupLabel: "01  QUALITY INSPECTION LAB",
    src: "/images/quality/quality-in-action-01.jpg",
    alt: "Quality inspection and metrology laboratory with calibrated measurement equipment",
  },
  {
    id: 2,
    title: "Advanced Machinery Floor",
    groupLabel: "02  ADVANCED MACHINERY FLOOR",
    src: "/images/quality/quality-in-action-02.jpg",
    alt: "Advanced CNC turning and precision component machining floor",
  },
  {
    id: 3,
    title: "Advanced Machinery Floor",
    groupLabel: "03  ADVANCED MACHINERY FLOOR",
    src: "/images/quality/quality-in-action-03.jpg",
    alt: "Automated Traub lathe machining workcells",
  },
  {
    id: 4,
    title: "Modern Office & Engineering",
    groupLabel: "04  MODERN OFFICE & ENGINEERING",
    src: "/images/quality/quality-in-action-04.jpg",
    alt: "Engineering planning and conference suite",
  },
  {
    id: 5,
    title: "Modern Office & Engineering",
    groupLabel: "05  MODERN OFFICE & ENGINEERING",
    src: "/images/quality/quality-in-action-05.jpg",
    alt: "CAD design and technical drawing verification workspace",
  },
  {
    id: 6,
    title: "Modern Office & Engineering",
    groupLabel: "06  MODERN OFFICE & ENGINEERING",
    src: "/images/quality/quality-in-action-06.jpg",
    alt: "Operations coordination and quality management office",
  },
  {
    id: 7,
    title: "Precision Manufacturing Facility",
    groupLabel: "07  MANUFACTURING FACILITY",
    src: "/images/factory_images/about-facility.png",
    alt: "New Perfect Incorporation modern manufacturing facility and plant in Jamnagar",
  },
];

/* Duplicate once for seamless infinite looping */
const LOOPED_IMAGES = [...HOME_QUALITY_IMAGES, ...HOME_QUALITY_IMAGES];

export default function HomeQualityGallery() {
  const [activeItem, setActiveItem] = useState<QualityGalleryItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollOffsetRef = useRef(0);
  const isHoveredRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const hasDraggedRef = useRef(false);

  // Check prefers-reduced-motion
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(media.matches);
      const listener = () => setReducedMotion(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, []);

  // Continuous Marquee Loop via requestAnimationFrame
  const speed = 38; // pixels per second (~35-45s full loop)

  const loop = useCallback(
    (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      const track = trackRef.current;
      if (track && !reducedMotion && !isHoveredRef.current && !isDraggingRef.current) {
        scrollOffsetRef.current += speed * delta;
        // Total half-width of the track (6 items)
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0 && scrollOffsetRef.current >= halfWidth) {
          scrollOffsetRef.current -= halfWidth;
        }
        track.scrollLeft = scrollOffsetRef.current;
      }

      animFrameRef.current = requestAnimationFrame(loop);
    },
    [reducedMotion]
  );

  useEffect(() => {
    if (!reducedMotion) {
      animFrameRef.current = requestAnimationFrame(loop);
    }
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [loop, reducedMotion]);

  // Sync scrollLeft on manual touch/wheel scroll
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const halfWidth = track.scrollWidth / 2;
    if (halfWidth > 0) {
      if (track.scrollLeft >= halfWidth * 1.8) {
        track.scrollLeft -= halfWidth;
      } else if (track.scrollLeft <= 5) {
        track.scrollLeft += halfWidth;
      }
      scrollOffsetRef.current = track.scrollLeft;
    }
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - (trackRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    e.preventDefault();
    hasDraggedRef.current = true;
    const x = e.pageX - startXRef.current;
    trackRef.current.scrollLeft = -x;
    scrollOffsetRef.current = -x;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Lightbox keyboard controls
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === "Escape") setActiveItem(null);
      if (e.key === "ArrowRight") {
        const nextId = (activeItem.id % HOME_QUALITY_IMAGES.length) + 1;
        setActiveItem(HOME_QUALITY_IMAGES.find((img) => img.id === nextId) || null);
      }
      if (e.key === "ArrowLeft") {
        const prevId = activeItem.id === 1 ? HOME_QUALITY_IMAGES.length : activeItem.id - 1;
        setActiveItem(HOME_QUALITY_IMAGES.find((img) => img.id === prevId) || null);
      }
    },
    [activeItem]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="py-14 lg:py-18 bg-white border-t border-zinc-200 overflow-hidden relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-7 sm:mb-8 lg:mb-10">
          <span className="inline-flex items-center gap-2 border border-[#1E6D95]/40 bg-[#EAF3F7] px-3.5 py-1 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#1E6D95]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E6D95]" />
            FACILITY &amp; OPERATIONS
          </span>
          <h2
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#252A2D] tracking-tight"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            QUALITY IN ACTION
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed text-[#667177] mx-auto">
            A closer look at the facilities, machinery, and engineering environment behind our precision
            manufacturing.
          </p>
          <div className="mt-3.5 w-12 h-1 bg-[#1E6D95] mx-auto" />
        </div>
      </div>

      {/* ── HORIZONTAL SCROLLING STRIP (EDGE-TO-EDGE) ── */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          handleMouseUp();
        }}
      >
        {/* Subtle Edge Vignettes for Editorial Polish */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none z-10" />

        {/* Scrollable Track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar py-2 cursor-grab active:cursor-grabbing select-none px-4 sm:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {LOOPED_IMAGES.map((item, index) => {
            const isFailed = failedImages[item.id];
            return (
              <div
                key={`${item.id}-${index}`}
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (!hasDraggedRef.current) {
                    setActiveItem(item);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveItem(item);
                  }
                }}
                aria-label={`${item.groupLabel}: ${item.alt}`}
                className="group relative shrink-0 w-[260px] sm:w-[300px] lg:w-[340px] aspect-[4/3] bg-[#EFF2F5] border border-zinc-200/90 hover:border-[#1E6D95] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md cursor-pointer"
              >
                {!isFailed ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    onError={() => {
                      setFailedImages((prev) => ({ ...prev, [item.id]: true }));
                    }}
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
                  />
                ) : (
                  /* Clean Neutral Placeholder Fallback */
                  <div className="absolute inset-0 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#E7ECF0]">
                    <svg
                      className="w-5 h-5 text-zinc-400/80 group-hover:text-zinc-500 transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.25}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}

                {/* Subtle Editorial Label on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-3.5">
                  <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-white">
                    {item.groupLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.alt}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#141A1F] border border-white/10 p-3 sm:p-5 shadow-2xl flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-white">
              <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
                {activeItem.groupLabel}
              </span>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                aria-label="Close"
                className="w-7 h-7 text-zinc-400 hover:text-white flex items-center justify-center transition-colors text-sm"
              >
                ✕
              </button>
            </div>

            {/* Lightbox Frame */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full max-h-[75vh] bg-[#0D1216] border border-white/5 overflow-hidden flex items-center justify-center mx-auto">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Lightbox Controls */}
            <div className="flex items-center justify-between pt-1 text-xs text-zinc-400">
              <button
                type="button"
                onClick={() => {
                  const prevId =
                    activeItem.id === 1 ? HOME_QUALITY_IMAGES.length : activeItem.id - 1;
                  setActiveItem(HOME_QUALITY_IMAGES.find((img) => img.id === prevId) || null);
                }}
                className="hover:text-white transition-colors font-mono uppercase text-[10px] tracking-wider"
              >
                ← Prev
              </button>
              <span className="text-[11px] text-zinc-400 truncate max-w-md hidden sm:inline font-mono">
                {activeItem.title}
              </span>
              <button
                type="button"
                onClick={() => {
                  const nextId = (activeItem.id % HOME_QUALITY_IMAGES.length) + 1;
                  setActiveItem(HOME_QUALITY_IMAGES.find((img) => img.id === nextId) || null);
                }}
                className="hover:text-white transition-colors font-mono uppercase text-[10px] tracking-wider"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
