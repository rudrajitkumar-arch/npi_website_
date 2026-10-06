"use client";

/**
 * QualityInAction — Compact Editorial Image Mosaic
 *
 * Location: /quality
 *  After: METROLOGY TOOLKIT
 *  Before: BUSINESS PROCESS
 *
 * EXACTLY 6 Image Slots:
 *  01 — Quality Inspection Lab       (Aspect Ratio: 16:9)
 *  02 — Advanced Machinery Floor      (Right stacked)
 *  03 — Modern Office & Engineering   (Right stacked)
 *  04 — Modern Office & Engineering   (Bottom row, 4:3)
 *  05 — Modern Office & Engineering   (Bottom row, 4:3)
 *  06 — Modern Office & Engineering   (Bottom row, 4:3)
 *
 * Perfect Alignment Rules:
 *  - Top-left Image 01 height matches the combined height of Image 02 + Image 03 + gap.
 *  - Uniform 12-14px gap across the entire mosaic.
 *  - Zero gap between top block and bottom row.
 *  - Bottom 3 images perfectly aligned with equal 4:3 aspect ratios.
 */

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/* ─── DATA CONFIGURATION (EXACTLY 6 IMAGES) ──────────────── */
export interface QualityActionImage {
  id: number;
  title: string;
  groupLabel: string;
  image: string;
  aspectRatio: string;
  alt: string;
}

export const QUALITY_IN_ACTION_IMAGES: QualityActionImage[] = [
  {
    id: 1,
    title: "Quality Inspection Lab",
    groupLabel: "01  QUALITY INSPECTION LAB",
    image: "/images/quality/quality-in-action-01.jpg",
    aspectRatio: "16 / 9",
    alt: "Quality inspection and metrology laboratory with calibrated measurement equipment",
  },
  {
    id: 2,
    title: "Advanced Machinery Floor",
    groupLabel: "02  ADVANCED MACHINERY FLOOR",
    image: "/images/quality/quality-in-action-02.jpg",
    aspectRatio: "4 / 5",
    alt: "Advanced CNC turning and precision component machining floor",
  },
  {
    id: 3,
    title: "Modern Office & Engineering",
    groupLabel: "03  MODERN OFFICE & ENGINEERING",
    image: "/images/quality/quality-in-action-03.jpg",
    aspectRatio: "4 / 5",
    alt: "Modern office and executive engineering coordination workspace",
  },
  {
    id: 4,
    title: "Modern Office & Engineering",
    groupLabel: "03  MODERN OFFICE & ENGINEERING",
    image: "/images/quality/quality-in-action-04.jpg",
    aspectRatio: "4 / 3",
    alt: "Engineering planning and conference suite",
  },
  {
    id: 5,
    title: "Modern Office & Engineering",
    groupLabel: "03  MODERN OFFICE & ENGINEERING",
    image: "/images/quality/quality-in-action-05.jpg",
    aspectRatio: "4 / 3",
    alt: "CAD design and technical drawing review workspace",
  },
  {
    id: 6,
    title: "Modern Office & Engineering",
    groupLabel: "03  MODERN OFFICE & ENGINEERING",
    image: "/images/quality/quality-in-action-06.jpg",
    aspectRatio: "4 / 3",
    alt: "Operations coordination and quality management office",
  },
];

/* ─── IMAGE SLOT COMPONENT ───────────────────────────────── */
function MosaicSlot({
  item,
  priority = false,
  onClick,
}: {
  item: QualityActionImage;
  priority?: boolean;
  onClick: () => void;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`${item.groupLabel}: ${item.alt}`}
      className="group relative w-full h-full overflow-hidden bg-[#EFF2F5] border border-zinc-200/90 hover:border-[#1E6D95] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md"
    >
      {/* Real Image Layer */}
      {!hasError && item.image ? (
        <Image
          src={item.image}
          alt={item.alt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          onError={() => setHasError(true)}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 35vw"
        />
      ) : (
        /* Clean Neutral Placeholder */
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-3 sm:p-4">
        <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-white">
          {item.groupLabel}
        </span>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
export default function QualityInAction() {
  const [activeSlot, setActiveSlot] = useState<QualityActionImage | null>(null);

  const images = QUALITY_IN_ACTION_IMAGES;

  // Keyboard navigation for Lightbox
  const currentIndex = activeSlot
    ? images.findIndex((img) => img.id === activeSlot.id)
    : -1;

  const handleNext = useCallback(() => {
    if (currentIndex === -1) return;
    const nextIdx = (currentIndex + 1) % images.length;
    setActiveSlot(images[nextIdx]);
  }, [currentIndex, images]);

  const handlePrev = useCallback(() => {
    if (currentIndex === -1) return;
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    setActiveSlot(images[prevIdx]);
  }, [currentIndex, images]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!activeSlot) return;
      if (e.key === "Escape") setActiveSlot(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    },
    [activeSlot, handleNext, handlePrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section
      id="quality-in-action"
      className="py-12 sm:py-14 lg:py-16 bg-[#F8F9FA] border-t border-zinc-200/80 relative"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── SECTION HEADING ── */}
        <div className="text-center mb-7 sm:mb-8 lg:mb-9">
          <span className="inline-flex items-center gap-2 border border-[#1E6D95]/40 bg-[#EAF3F7] px-3.5 py-1 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#1E6D95]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E6D95]" />
            FACILITY & OPERATIONS
          </span>
          <h2
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#252A2D] tracking-tight"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            QUALITY IN ACTION
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed text-[#667177] mx-auto">
            Dedicated inspection facilities, precision manufacturing environments, and professional
            engineering spaces support quality at every stage.
          </p>
          <div className="mt-3 w-12 h-1 bg-[#1E6D95] mx-auto" />
        </div>

        {/* ── 6-IMAGE TIGHT UNIFIED MOSAIC ── */}
        <div className="space-y-3 sm:space-y-3.5">
          {/* TOP BLOCK:
              Desktop: Image 01 (Left ~67% with 16:9) and Right column (~33%)
              Right column contains Images 02 & 03 whose combined height perfectly matches Image 01.
              Mobile: Image 01 full width, Images 02 & 03 in 2-column row.
          */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
            {/* IMAGE 01: Quality Inspection Lab (16:9 establishing anchor) */}
            <div className="md:col-span-8 aspect-[16/9] w-full">
              <MosaicSlot
                item={images[0]}
                priority
                onClick={() => setActiveSlot(images[0])}
              />
            </div>

            {/* IMAGE 02 & 03: Advanced Machinery Floor & Office 1
                Fills exactly the same top-to-bottom height as Image 01 on desktop! */}
            <div className="md:col-span-4 grid grid-cols-2 md:flex md:flex-col gap-3 sm:gap-3.5 h-full">
              <div className="aspect-[4/5] md:aspect-auto md:flex-1 md:min-h-0 relative w-full">
                <MosaicSlot
                  item={images[1]}
                  onClick={() => setActiveSlot(images[1])}
                />
              </div>
              <div className="aspect-[4/5] md:aspect-auto md:flex-1 md:min-h-0 relative w-full">
                <MosaicSlot
                  item={images[2]}
                  onClick={() => setActiveSlot(images[2])}
                />
              </div>
            </div>
          </div>

          {/* BOTTOM BLOCK:
              Desktop: Images 04, 05, 06 in 3 equal columns with exact 4:3 ratio.
              Sits immediately below top block with matching 12-14px gap.
              Mobile: Images 04 & 05 in 2-column, Image 06 full width.
          */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3.5">
            <div className="col-span-1 aspect-[4/3] w-full">
              <MosaicSlot
                item={images[3]}
                onClick={() => setActiveSlot(images[3])}
              />
            </div>
            <div className="col-span-1 aspect-[4/3] w-full">
              <MosaicSlot
                item={images[4]}
                onClick={() => setActiveSlot(images[4])}
              />
            </div>
            <div className="col-span-2 md:col-span-1 aspect-[4/3] sm:aspect-[4/3] w-full">
              <MosaicSlot
                item={images[5]}
                onClick={() => setActiveSlot(images[5])}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── MINIMAL EDITORIAL LIGHTBOX ── */}
      {activeSlot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeSlot.alt}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveSlot(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#141A1F] border border-white/10 p-3 sm:p-5 shadow-2xl flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-white">
              <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
                {activeSlot.groupLabel}
              </span>
              <button
                type="button"
                onClick={() => setActiveSlot(null)}
                aria-label="Close"
                className="w-7 h-7 text-zinc-400 hover:text-white flex items-center justify-center transition-colors text-sm"
              >
                ✕
              </button>
            </div>

            {/* Lightbox Frame */}
            <div
              style={{ aspectRatio: activeSlot.aspectRatio }}
              className="relative w-full max-h-[75vh] bg-[#0D1216] border border-white/5 overflow-hidden flex items-center justify-center mx-auto"
            >
              <Image
                src={activeSlot.image}
                alt={activeSlot.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Lightbox Controls */}
            <div className="flex items-center justify-between pt-1 text-xs text-zinc-400">
              <button
                type="button"
                onClick={handlePrev}
                className="hover:text-white transition-colors font-mono uppercase text-[10px] tracking-wider"
              >
                ← Prev
              </button>
              <span className="text-[11px] text-zinc-400 truncate max-w-md hidden sm:inline font-mono">
                {activeSlot.title}
              </span>
              <button
                type="button"
                onClick={handleNext}
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
