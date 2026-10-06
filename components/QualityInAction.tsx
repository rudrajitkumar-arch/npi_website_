"use client";

/**
 * QualityInAction — Editorial Facility & Operations Showcase
 *
 * Placed in /quality:
 *  After: METROLOGY TOOLKIT
 *  Before: BUSINESS PROCESS
 *
 * Exactly 7 Image Slots:
 *  - Group 01: QUALITY INSPECTION LAB (1 slot)
 *  - Group 02: ADVANCED MACHINERY FLOOR (2 slots)
 *  - Group 03: MODERN OFFICE & ENGINEERING (4 slots)
 *
 * 100% visible clean industrial placeholders with zero layout shift.
 * Replacing `src: null` with image paths auto-renders Next.js Image.
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

/* ─── DATA TYPES ─────────────────────────────────────────── */
export interface QualitySlotItem {
  id: string;
  slotNum: string; // e.g. "01/07"
  src: string | null;
  alt: string;
  label: string;
  caption?: string;
  groupTitle: string;
  recommendedSize: string;
}

export interface QualityGroup {
  id: string;
  num: string;
  title: string;
  desc: string;
  slots: QualitySlotItem[];
}

/* ─── DATA SOURCE (EXACTLY 7 SLOTS) ──────────────────────── */
export const QUALITY_IN_ACTION_GROUPS: QualityGroup[] = [
  {
    id: "quality-lab",
    num: "01",
    title: "QUALITY INSPECTION LAB",
    desc: "Dedicated inspection and metrology facilities supporting dimensional checks, quality verification, and precision component control.",
    slots: [
      {
        id: "slot-lab-1",
        slotNum: "01/07",
        src: null, // Replace with real image: e.g. "/images/quality/quality-lab.jpg"
        alt: "Dedicated quality inspection laboratory with calibrated measuring equipment and metrology tools",
        label: "Primary Metrology Facility",
        caption: "Calibrated optical projectors, digital height gauges, and precision measurement bench.",
        groupTitle: "Quality Inspection Lab",
        recommendedSize: "1920 × 900 px",
      },
    ],
  },
  {
    id: "machinery-floor",
    num: "02",
    title: "ADVANCED MACHINERY FLOOR",
    desc: "A dedicated production environment supporting precision machining and high-volume component manufacturing.",
    slots: [
      {
        id: "slot-machinery-1",
        slotNum: "02/07",
        src: null, // Replace with: "/images/quality/machinery-floor-1.jpg"
        alt: "Advanced CNC turning and sliding-head machinery production floor",
        label: "Primary Production Fleet",
        caption: "High-speed multi-axis CNC turning and automated lathe production lines.",
        groupTitle: "Advanced Machinery Floor",
        recommendedSize: "1600 × 1000 px",
      },
      {
        id: "slot-machinery-2",
        slotNum: "03/07",
        src: null, // Replace with: "/images/quality/machinery-floor-2.jpg"
        alt: "Automated Traub lathe and secondary machining workcells",
        label: "Machining Workcells",
        caption: "Dedicated automatic Traub cells feeding tight-tolerance repetitive components.",
        groupTitle: "Advanced Machinery Floor",
        recommendedSize: "1400 × 1000 px",
      },
    ],
  },
  {
    id: "modern-office",
    num: "03",
    title: "MODERN OFFICE & ENGINEERING",
    desc: "Professional office and engineering spaces supporting planning, coordination, technical review, and day-to-day operations.",
    slots: [
      {
        id: "slot-office-1",
        slotNum: "04/07",
        src: null, // Replace with: "/images/quality/office-1.jpg"
        alt: "Engineering planning and coordination conference facility",
        label: "Engineering & Conference Suite",
        caption: "Central planning room for cross-departmental coordination and drawing review.",
        groupTitle: "Modern Office & Engineering",
        recommendedSize: "1600 × 1050 px",
      },
      {
        id: "slot-office-2",
        slotNum: "05/07",
        src: null, // Replace with: "/images/quality/office-2.jpg"
        alt: "CAD design and technical drawing verification desk",
        label: "CAD & Technical Review",
        caption: "Computer-aided engineering station for blueprint inspection and tolerances.",
        groupTitle: "Modern Office & Engineering",
        recommendedSize: "1200 × 900 px",
      },
      {
        id: "slot-office-3",
        slotNum: "06/07",
        src: null, // Replace with: "/images/quality/office-3.jpg"
        alt: "Production scheduling and operations management workspace",
        label: "Operations Coordination",
        caption: "Order tracking, dispatch scheduling, and material batch verification.",
        groupTitle: "Modern Office & Engineering",
        recommendedSize: "1200 × 900 px",
      },
      {
        id: "slot-office-4",
        slotNum: "07/07",
        src: null, // Replace with: "/images/quality/office-4.jpg"
        alt: "Quality administration and export documentation office",
        label: "Quality Administration",
        caption: "PPAP documentation, mill test certificates, and compliance records filing.",
        groupTitle: "Modern Office & Engineering",
        recommendedSize: "1400 × 750 px",
      },
    ],
  },
];

/* ─── ALL 7 SLOTS FLATTENED (FOR LIGHTBOX) ───────────────── */
const ALL_SLOTS: QualitySlotItem[] = QUALITY_IN_ACTION_GROUPS.flatMap((g) => g.slots);

/* ─── REUSABLE SLOT VIEW COMPONENT ───────────────────────── */
interface SlotViewProps {
  slot: QualitySlotItem;
  aspectClass?: string;
  className?: string;
  showOverlay?: boolean;
  priority?: boolean;
  onClick?: () => void;
}

function QualitySlotView({
  slot,
  aspectClass = "aspect-[16/10]",
  className = "",
  showOverlay = true,
  priority = false,
  onClick,
}: SlotViewProps) {
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
      aria-label={`${slot.groupTitle} - ${slot.label} (Slot ${slot.slotNum})`}
      className={`group/slot relative overflow-hidden transition-all duration-300 cursor-pointer ${aspectClass} ${className}`}
    >
      {slot.src ? (
        <>
          <Image
            src={slot.src}
            alt={slot.alt}
            fill
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className="object-cover transition-transform duration-700 ease-out group-hover/slot:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {showOverlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#252A2D]/85 via-[#252A2D]/20 to-transparent transition-opacity duration-300 group-hover/slot:from-[#252A2D]/90 pointer-events-none" />
          )}
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-widest bg-black/60 backdrop-blur-sm text-white border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E6D95]" />
              SLOT {slot.slotNum}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white pointer-events-none">
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#EAF3F7] block mb-1">
              {slot.label}
            </span>
            {slot.caption && (
              <p className="text-xs text-zinc-300 leading-snug line-clamp-2">{slot.caption}</p>
            )}
          </div>
        </>
      ) : (
        /* ── Visible Clean Industrial Placeholder ── */
        <div className="absolute inset-0 bg-[#F4F7F9] border-2 border-dashed border-zinc-300 group-hover/slot:border-[#1E6D95] group-hover/slot:bg-[#EDF3F7] transition-all duration-300 flex flex-col items-center justify-center p-4 sm:p-6 text-center select-none">
          {/* Subtle Precision Corner Crosshairs */}
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-zinc-400/80 group-hover/slot:border-[#1E6D95] transition-colors pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-zinc-400/80 group-hover/slot:border-[#1E6D95] transition-colors pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-zinc-400/80 group-hover/slot:border-[#1E6D95] transition-colors pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-zinc-400/80 group-hover/slot:border-[#1E6D95] transition-colors pointer-events-none" />

          {/* Top Slot Pill */}
          <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 flex items-center gap-1.5 pointer-events-none">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest bg-white border border-zinc-300 text-[#1E6D95] shadow-xs group-hover/slot:border-[#1E6D95]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E6D95]" />
              SLOT {slot.slotNum}
            </span>
          </div>

          {/* Center Graphic */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-zinc-300 shadow-sm flex items-center justify-center text-zinc-400 group-hover/slot:text-[#1E6D95] group-hover/slot:border-[#1E6D95] group-hover/slot:scale-105 transition-all duration-300 mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          {/* Primary Label */}
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#252A2D] group-hover/slot:text-[#1E6D95] transition-colors">
            IMAGE PLACEHOLDER
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-zinc-500 mt-1 max-w-[260px] truncate">
            {slot.label}
          </span>

          {/* Dimension Tag */}
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-zinc-500 border border-zinc-200 bg-white px-2 py-0.5">
              Rec: {slot.recommendedSize}
            </span>
            <span className="inline-flex items-center gap-1 text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-[#1E6D95] bg-[#EAF3F7] px-2 py-0.5 font-bold">
              Ready for Asset
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── GROUP HEADER COMPONENT ─────────────────────────────── */
function GroupHeader({
  num,
  title,
  desc,
  slotCount,
}: {
  num: string;
  title: string;
  desc: string;
  slotCount: number;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-zinc-200 mb-5 sm:mb-6">
      <div className="space-y-1.5 max-w-2xl">
        <div className="flex items-center gap-2.5">
          <span className="text-[11px] font-mono font-bold text-[#1E6D95] tracking-[0.2em]">
            [{num}]
          </span>
          <h3
            className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-[#252A2D]"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            {title}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#667177] leading-relaxed">{desc}</p>
      </div>

      <div className="shrink-0 flex items-center gap-2">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 bg-white border border-zinc-300 text-zinc-600">
          {slotCount} {slotCount === 1 ? "Image Slot" : "Image Slots"}
        </span>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
export default function QualityInAction() {
  const [lightboxSlot, setLightboxSlot] = useState<QualitySlotItem | null>(null);

  const labGroup = QUALITY_IN_ACTION_GROUPS[0];
  const machineryGroup = QUALITY_IN_ACTION_GROUPS[1];
  const officeGroup = QUALITY_IN_ACTION_GROUPS[2];

  // Lightbox navigation
  const currentSlotIndex = lightboxSlot
    ? ALL_SLOTS.findIndex((s) => s.id === lightboxSlot.id)
    : -1;

  const handleNext = useCallback(() => {
    if (currentSlotIndex === -1) return;
    const nextIdx = (currentSlotIndex + 1) % ALL_SLOTS.length;
    setLightboxSlot(ALL_SLOTS[nextIdx]);
  }, [currentSlotIndex]);

  const handlePrev = useCallback(() => {
    if (currentSlotIndex === -1) return;
    const prevIdx = (currentSlotIndex - 1 + ALL_SLOTS.length) % ALL_SLOTS.length;
    setLightboxSlot(ALL_SLOTS[prevIdx]);
  }, [currentSlotIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxSlot) return;
      if (e.key === "Escape") setLightboxSlot(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    },
    [lightboxSlot, handleNext, handlePrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section
      id="quality-in-action"
      className="py-20 lg:py-24 bg-white border-t border-zinc-200 relative overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-14 lg:mb-18">
          <span className="inline-flex items-center gap-2 border border-[#1E6D95]/40 bg-[#EAF3F7] px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.14em] sm:tracking-[0.22em] text-[#1E6D95]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E6D95]" />
            FACILITY & OPERATIONS
          </span>
          <h2
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.15] tracking-tight text-[#252A2D]"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            QUALITY IN ACTION
          </h2>
          <p className="mt-3.5 text-sm sm:text-base max-w-2xl leading-relaxed text-[#667177] mx-auto">
            Dedicated inspection facilities, precision manufacturing environments, and professional
            engineering spaces support quality at every stage.
          </p>
          <div className="mt-4 w-12 h-1 bg-[#1E6D95] mx-auto" />
        </div>

        {/* ── 3 EDITORIAL GROUPS (TOTAL 7 SLOTS) ── */}
        <div className="space-y-16 lg:space-y-20">
          {/* ═════════════════════════════════════════════════════
              GROUP 01 — QUALITY INSPECTION LAB (Slot 1 of 7)
             ═════════════════════════════════════════════════════ */}
          <div>
            <GroupHeader
              num={labGroup.num}
              title={labGroup.title}
              desc={labGroup.desc}
              slotCount={labGroup.slots.length}
            />
            {/* Primary Landscape Hero Slot */}
            <QualitySlotView
              slot={labGroup.slots[0]}
              aspectClass="aspect-[16/9] sm:aspect-[2.1/1] lg:aspect-[2.5/1]"
              className="border border-zinc-200 hover:border-[#1E6D95] hover:shadow-lg transition-all duration-300"
              onClick={() => setLightboxSlot(labGroup.slots[0])}
            />
          </div>

          {/* ═════════════════════════════════════════════════════
              GROUP 02 — ADVANCED MACHINERY FLOOR (Slots 2 & 3 of 7)
             ═════════════════════════════════════════════════════ */}
          <div>
            <GroupHeader
              num={machineryGroup.num}
              title={machineryGroup.title}
              desc={machineryGroup.desc}
              slotCount={machineryGroup.slots.length}
            />
            {/* 2 Complementary Images Grid: 7 / 5 Hierarchy on Desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
              <div className="lg:col-span-7">
                <QualitySlotView
                  slot={machineryGroup.slots[0]}
                  aspectClass="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10]"
                  className="border border-zinc-200 hover:border-[#1E6D95] hover:shadow-lg transition-all duration-300 h-full"
                  onClick={() => setLightboxSlot(machineryGroup.slots[0])}
                />
              </div>
              <div className="lg:col-span-5">
                <QualitySlotView
                  slot={machineryGroup.slots[1]}
                  aspectClass="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10]"
                  className="border border-zinc-200 hover:border-[#1E6D95] hover:shadow-lg transition-all duration-300 h-full"
                  onClick={() => setLightboxSlot(machineryGroup.slots[1])}
                />
              </div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════
              GROUP 03 — MODERN OFFICE & ENGINEERING (Slots 4, 5, 6, 7 of 7)
             ═════════════════════════════════════════════════════ */}
          <div>
            <GroupHeader
              num={officeGroup.num}
              title={officeGroup.title}
              desc={officeGroup.desc}
              slotCount={officeGroup.slots.length}
            />

            {/* Editorial 4-slot layout: Featured view + 3 supporting slots */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
              {/* Featured Slot: Slot 04/07 (Desktop Left) */}
              <div className="lg:col-span-7 flex flex-col">
                <QualitySlotView
                  slot={officeGroup.slots[0]}
                  aspectClass="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/11]"
                  className="border border-zinc-200 hover:border-[#1E6D95] hover:shadow-lg transition-all duration-300 h-full"
                  onClick={() => setLightboxSlot(officeGroup.slots[0])}
                />
              </div>

              {/* 3 Supporting Slots: Slots 05, 06, 07 of 7 (Desktop Right) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {/* 2 Tiles Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <QualitySlotView
                    slot={officeGroup.slots[1]}
                    aspectClass="aspect-[4/3]"
                    className="border border-zinc-200 hover:border-[#1E6D95] hover:shadow-md transition-all duration-300"
                    onClick={() => setLightboxSlot(officeGroup.slots[1])}
                  />
                  <QualitySlotView
                    slot={officeGroup.slots[2]}
                    aspectClass="aspect-[4/3]"
                    className="border border-zinc-200 hover:border-[#1E6D95] hover:shadow-md transition-all duration-300"
                    onClick={() => setLightboxSlot(officeGroup.slots[2])}
                  />
                </div>

                {/* Bottom Supporting Wide Slot */}
                <QualitySlotView
                  slot={officeGroup.slots[3]}
                  aspectClass="aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2.1/1]"
                  className="border border-zinc-200 hover:border-[#1E6D95] hover:shadow-md transition-all duration-300 flex-grow"
                  onClick={() => setLightboxSlot(officeGroup.slots[3])}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {lightboxSlot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Inspection view: ${lightboxSlot.label}`}
          className="fixed inset-0 z-50 bg-[#0B1520]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxSlot(null)}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full bg-[#18232F] border border-white/15 p-4 sm:p-6 shadow-2xl flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1E6D95] bg-[#EAF3F7] px-2 py-0.5">
                  SLOT {lightboxSlot.slotNum}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  {lightboxSlot.groupTitle}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxSlot(null)}
                aria-label="Close Lightbox"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-white text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Image Frame / Placeholder */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0D1824] border border-white/10 overflow-hidden flex items-center justify-center">
              {lightboxSlot.src ? (
                <Image
                  src={lightboxSlot.src}
                  alt={lightboxSlot.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              ) : (
                <div className="text-center p-6 text-zinc-400 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-3 text-[#1E6D95]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-mono font-bold uppercase tracking-widest text-white">
                    SLOT {lightboxSlot.slotNum} PLACEHOLDER
                  </span>
                  <p className="text-xs font-mono uppercase text-zinc-400 mt-1">
                    {lightboxSlot.label}
                  </p>
                  <p className="text-xs text-zinc-400 mt-2 max-w-md">{lightboxSlot.caption}</p>
                  <span className="mt-4 text-[10px] font-mono uppercase tracking-widest text-[#1E6D95] border border-[#1E6D95]/40 bg-[#1E6D95]/10 px-3 py-1">
                    Awaiting Image: {lightboxSlot.recommendedSize}
                  </span>
                </div>
              )}
            </div>

            {/* Modal Footer Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-white">
              <button
                type="button"
                onClick={handlePrev}
                className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                ← Prev Slot
              </button>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Use Arrow Keys • Esc to Close
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                Next Slot →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
