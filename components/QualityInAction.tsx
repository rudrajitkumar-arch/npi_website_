"use client";

/**
 * QualityInAction — Editorial Facility & Operations Gallery
 *
 * Placed in /quality:
 *  After: METROLOGY TOOLKIT
 *  Before: BUSINESS PROCESS
 *
 * Exact 7 Image Slots across 3 groups:
 *  - 01: QUALITY INSPECTION LAB (1 image)
 *  - 02: ADVANCED MACHINERY FLOOR (2 images, 67/33 hierarchy)
 *  - 03: MODERN OFFICE & ENGINEERING (4 images, editorial collage)
 *
 * Clean, architectural placeholders without development noise.
 * Data-driven: replace `image: null` with `image: "/path.jpg"` to activate real images.
 */

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/* ─── DATA TYPES ─────────────────────────────────────────── */
export interface QualityVisualItem {
  id: string;
  image: string | null;
  alt: string;
  caption?: string;
  groupTitle: string;
}

export interface QualityVisualGroup {
  number: string;
  title: string;
  description: string;
  images: QualityVisualItem[];
}

/* ─── DATA SOURCE (EXACTLY 7 IMAGE SLOTS) ────────────────── */
export const QUALITY_VISUAL_GROUPS: QualityVisualGroup[] = [
  {
    number: "01",
    title: "QUALITY INSPECTION LAB",
    description:
      "Dedicated inspection and metrology facilities supporting dimensional checks, quality verification, and precision component control.",
    images: [
      {
        id: "lab-1",
        image: null, // Replace with e.g. "/images/quality/quality-lab.jpg"
        alt: "Dedicated quality inspection laboratory and metrology room",
        caption: "Calibrated optical projectors, digital height gauges, and metrology bench",
        groupTitle: "Quality Inspection Lab",
      },
    ],
  },
  {
    number: "02",
    title: "ADVANCED MACHINERY FLOOR",
    description:
      "A dedicated production environment supporting precision machining and high-volume component manufacturing.",
    images: [
      {
        id: "machinery-1",
        image: null, // Replace with e.g. "/images/quality/machinery-floor-1.jpg"
        alt: "Advanced CNC turning and sliding-head machinery production floor",
        caption: "High-speed multi-axis CNC turning and automated production fleet",
        groupTitle: "Advanced Machinery Floor",
      },
      {
        id: "machinery-2",
        image: null, // Replace with e.g. "/images/quality/machinery-floor-2.jpg"
        alt: "Automated Traub lathe and secondary machining workcells",
        caption: "Automated lathe workcells for precision repetitive components",
        groupTitle: "Advanced Machinery Floor",
      },
    ],
  },
  {
    number: "03",
    title: "MODERN OFFICE & ENGINEERING",
    description:
      "Professional office and engineering spaces supporting planning, coordination, technical review, and day-to-day operations.",
    images: [
      {
        id: "office-1",
        image: null, // Replace with e.g. "/images/quality/office-1.jpg"
        alt: "Engineering planning and conference suite",
        caption: "Central engineering coordination and drawing review suite",
        groupTitle: "Modern Office & Engineering",
      },
      {
        id: "office-2",
        image: null, // Replace with e.g. "/images/quality/office-2.jpg"
        alt: "CAD design and technical drawing verification desk",
        caption: "CAD design and component tolerance verification station",
        groupTitle: "Modern Office & Engineering",
      },
      {
        id: "office-3",
        image: null, // Replace with e.g. "/images/quality/office-3.jpg"
        alt: "Production scheduling and operations coordination workspace",
        caption: "Operations scheduling and supply chain coordination",
        groupTitle: "Modern Office & Engineering",
      },
      {
        id: "office-4",
        image: null, // Replace with e.g. "/images/quality/office-4.jpg"
        alt: "Quality administration and export documentation office",
        caption: "Quality administration and PPAP documentation records",
        groupTitle: "Modern Office & Engineering",
      },
    ],
  },
];

/* Flattened 7 items for Lightbox */
const ALL_VISUAL_ITEMS: QualityVisualItem[] = QUALITY_VISUAL_GROUPS.flatMap((g) => g.images);

/* ─── MINIMAL EDITORIAL IMAGE SLOT COMPONENT ─────────────── */
interface MinimalSlotProps {
  item: QualityVisualItem;
  aspectClass?: string;
  className?: string;
  priority?: boolean;
  onClick?: () => void;
}

function MinimalImageSlot({
  item,
  aspectClass = "aspect-[16/10]",
  className = "",
  priority = false,
  onClick,
}: MinimalSlotProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`${item.groupTitle}: ${item.alt}`}
      className={`group relative overflow-hidden bg-[#EFF2F5] border border-zinc-200/80 transition-all duration-300 cursor-pointer ${aspectClass} ${className}`}
    >
      {item.image ? (
        <>
          <Image
            src={item.image}
            alt={item.alt}
            fill
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 40vw"
          />
          {/* Subtle bottom gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          {item.caption && (
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="text-xs font-mono text-zinc-200 truncate">{item.caption}</p>
            </div>
          )}
        </>
      ) : (
        /* Quiet, architectural placeholder */
        <div className="absolute inset-0 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#E8ECEF]">
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
    </div>
  );
}

/* ─── GROUP HEADER (EDITORIAL TYPOGRAPHY) ─────────────────── */
function GroupHeader({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1.5 md:gap-6 mb-3 sm:mb-3.5">
      <div className="flex items-baseline gap-2.5 shrink-0">
        <span className="text-[11px] font-mono font-bold text-[#1E6D95] tracking-widest">
          {num}
        </span>
        <h3
          className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#252A2D]"
          style={{ fontFamily: "var(--font-serif-display)" }}
        >
          {title}
        </h3>
      </div>
      <p className="text-xs sm:text-[13px] text-[#667177] max-w-xl leading-relaxed md:text-right">
        {desc}
      </p>
    </div>
  );
}

/* ─── MAIN QUALITY IN ACTION COMPONENT ───────────────────── */
export default function QualityInAction() {
  const [activeItem, setActiveItem] = useState<QualityVisualItem | null>(null);

  const labGroup = QUALITY_VISUAL_GROUPS[0];
  const machineryGroup = QUALITY_VISUAL_GROUPS[1];
  const officeGroup = QUALITY_VISUAL_GROUPS[2];

  // Lightbox keyboard handlers
  const currentIndex = activeItem
    ? ALL_VISUAL_ITEMS.findIndex((it) => it.id === activeItem.id)
    : -1;

  const handleNext = useCallback(() => {
    if (currentIndex === -1) return;
    const nextIdx = (currentIndex + 1) % ALL_VISUAL_ITEMS.length;
    setActiveItem(ALL_VISUAL_ITEMS[nextIdx]);
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex === -1) return;
    const prevIdx = (currentIndex - 1 + ALL_VISUAL_ITEMS.length) % ALL_VISUAL_ITEMS.length;
    setActiveItem(ALL_VISUAL_ITEMS[prevIdx]);
  }, [currentIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === "Escape") setActiveItem(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    },
    [activeItem, handleNext, handlePrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section
      id="quality-in-action"
      className="py-16 lg:py-20 bg-[#F8F9FA] border-t border-zinc-200/80 relative"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── SECTION HEADING (MATCHING QUALITY PAGE CONVENTIONS) ── */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <span className="inline-flex items-center gap-2 border border-[#1E6D95]/40 bg-[#EAF3F7] px-3.5 py-1 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#1E6D95]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E6D95]" />
            FACILITY & OPERATIONS
          </span>
          <h2
            className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#252A2D] tracking-tight"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            QUALITY IN ACTION
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed text-[#667177] mx-auto">
            Dedicated inspection facilities, precision manufacturing environments, and professional
            engineering spaces support quality at every stage.
          </p>
          <div className="mt-3.5 w-12 h-1 bg-[#1E6D95] mx-auto" />
        </div>

        {/* ── EDITORIAL IMAGE GROUPS (TOTAL 7 SLOTS) ── */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-14">
          {/* ═════════════════════════════════════════════════════
              GROUP 01 — QUALITY INSPECTION LAB (1 Feature Image)
             ═════════════════════════════════════════════════════ */}
          <div>
            <GroupHeader
              num={labGroup.number}
              title={labGroup.title}
              desc={labGroup.description}
            />
            {/* Sleek, wide panoramic feature slot */}
            <MinimalImageSlot
              item={labGroup.images[0]}
              aspectClass="aspect-[16/9] sm:aspect-[2.1/1] lg:aspect-[2.5/1]"
              onClick={() => setActiveItem(labGroup.images[0])}
            />
          </div>

          {/* ═════════════════════════════════════════════════════
              GROUP 02 — ADVANCED MACHINERY FLOOR (2 Images)
             ═════════════════════════════════════════════════════ */}
          <div>
            <GroupHeader
              num={machineryGroup.number}
              title={machineryGroup.title}
              desc={machineryGroup.description}
            />
            {/* 67% Primary / 33% Secondary aligned row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
              <div className="md:col-span-8">
                <MinimalImageSlot
                  item={machineryGroup.images[0]}
                  aspectClass="aspect-[16/10] sm:aspect-[16/9]"
                  className="h-full"
                  onClick={() => setActiveItem(machineryGroup.images[0])}
                />
              </div>
              <div className="md:col-span-4">
                <MinimalImageSlot
                  item={machineryGroup.images[1]}
                  aspectClass="aspect-[16/10] sm:aspect-[16/9] md:aspect-auto"
                  className="h-full"
                  onClick={() => setActiveItem(machineryGroup.images[1])}
                />
              </div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════
              GROUP 03 — MODERN OFFICE & ENGINEERING (4 Images)
             ═════════════════════════════════════════════════════ */}
          <div>
            <GroupHeader
              num={officeGroup.number}
              title={officeGroup.title}
              desc={officeGroup.description}
            />
            {/* Balanced Editorial Collage: 1 Main (~58%) + 3 Supporting (~42%) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
              {/* Main Feature Slot */}
              <div className="md:col-span-7">
                <MinimalImageSlot
                  item={officeGroup.images[0]}
                  aspectClass="aspect-[16/10] sm:aspect-[16/9] md:aspect-auto"
                  className="h-full min-h-[220px] sm:min-h-[280px]"
                  onClick={() => setActiveItem(officeGroup.images[0])}
                />
              </div>

              {/* 3 Supporting Slots in Compact Block */}
              <div className="md:col-span-5 flex flex-col gap-3.5 sm:gap-4 justify-between">
                {/* 2 Tiles Row */}
                <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                  <MinimalImageSlot
                    item={officeGroup.images[1]}
                    aspectClass="aspect-[4/3]"
                    onClick={() => setActiveItem(officeGroup.images[1])}
                  />
                  <MinimalImageSlot
                    item={officeGroup.images[2]}
                    aspectClass="aspect-[4/3]"
                    onClick={() => setActiveItem(officeGroup.images[2])}
                  />
                </div>

                {/* Bottom Supporting Slot */}
                <MinimalImageSlot
                  item={officeGroup.images[3]}
                  aspectClass="aspect-[16/7] sm:aspect-[2.2/1]"
                  className="flex-grow"
                  onClick={() => setActiveItem(officeGroup.images[3])}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MINIMAL EDITORIAL LIGHTBOX ── */}
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
            {/* Header bar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-white">
              <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
                {activeItem.groupTitle}
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

            {/* Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0D1216] border border-white/5 overflow-hidden flex items-center justify-center">
              {activeItem.image ? (
                <Image
                  src={activeItem.image}
                  alt={activeItem.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              ) : (
                <div className="text-center p-6 text-zinc-500 flex flex-col items-center">
                  <svg
                    className="w-8 h-8 text-zinc-600 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.25}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-xs font-mono uppercase text-zinc-400">{activeItem.alt}</p>
                </div>
              )}
            </div>

            {/* Caption & Controls */}
            <div className="flex items-center justify-between pt-1 text-xs text-zinc-400">
              <button
                type="button"
                onClick={handlePrev}
                className="hover:text-white transition-colors font-mono uppercase text-[10px] tracking-wider"
              >
                ← Prev
              </button>
              {activeItem.caption && (
                <span className="text-[11px] text-zinc-400 truncate max-w-md hidden sm:inline">
                  {activeItem.caption}
                </span>
              )}
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
