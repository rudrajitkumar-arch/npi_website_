"use client";

/**
 * QualityInAction — Editorial Facility & Operations Showcase
 *
 * Inserted into /quality page:
 *  After: METROLOGY TOOLKIT
 *  Before: BUSINESS PROCESS
 *
 * Features:
 *  - EXACTLY 7 image slots across 3 editorial groups:
 *      Group 01: QUALITY INSPECTION LAB (1 slot)
 *      Group 02: ADVANCED MACHINERY FLOOR (2 slots)
 *      Group 03: MODERN OFFICE & ENGINEERING (4 slots)
 *  - Clean development placeholders for all 7 slots with zero layout shift.
 *  - Replacing `src: null` with a string path auto-switches to the real Next.js Image.
 *  - Interactive Office gallery (clicking thumbnails promotes to main view).
 *  - Lightweight accessible modal lightbox.
 *  - Subtle scroll-reveal and micro-hover animations.
 */

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/* ─── DATA TYPES ─────────────────────────────────────────── */
export interface QualitySlotItem {
  id: string;
  src: string | null;
  alt: string;
  label: string;
  caption?: string;
  groupTitle: string;
}

export interface QualityGroup {
  id: string;
  num: string;
  title: string;
  desc: string;
  slots: QualitySlotItem[];
}

/* ─── DATA SOURCE (7 EXACT SLOTS) ────────────────────────── */
export const QUALITY_IN_ACTION_GROUPS: QualityGroup[] = [
  {
    id: "quality-lab",
    num: "01",
    title: "QUALITY INSPECTION LAB",
    desc: "Dedicated inspection and metrology facilities supporting dimensional checks, quality verification, and precision component control.",
    slots: [
      {
        id: "slot-lab-1",
        src: null, // Replace with: "/images/quality/quality-lab.jpg"
        alt: "Dedicated quality inspection laboratory with calibrated measuring equipment and metrology tools",
        label: "Primary Metrology Facility",
        caption: "Calibrated optical projectors, digital height gauges, and precision measurement bench.",
        groupTitle: "Quality Inspection Lab",
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
        src: null, // Replace with: "/images/quality/machinery-floor-1.jpg"
        alt: "Advanced CNC turning and sliding-head machinery production floor",
        label: "Primary Production Fleet",
        caption: "High-speed multi-axis CNC turning and automated lathe production lines.",
        groupTitle: "Advanced Machinery Floor",
      },
      {
        id: "slot-machinery-2",
        src: null, // Replace with: "/images/quality/machinery-floor-2.jpg"
        alt: "Automated Traub lathe and secondary machining workcells",
        label: "Machining Workcells",
        caption: "Dedicated automatic Traub cells feeding tight-tolerance repetitive components.",
        groupTitle: "Advanced Machinery Floor",
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
        src: null, // Replace with: "/images/quality/office-1.jpg"
        alt: "Engineering planning and coordination conference facility",
        label: "Engineering & Conference Suite",
        caption: "Central planning room for cross-departmental coordination and drawing review.",
        groupTitle: "Modern Office & Engineering",
      },
      {
        id: "slot-office-2",
        src: null, // Replace with: "/images/quality/office-2.jpg"
        alt: "CAD design and technical drawing verification desk",
        label: "CAD & Technical Review",
        caption: "Computer-aided engineering station for blueprint inspection and tolerances.",
        groupTitle: "Modern Office & Engineering",
      },
      {
        id: "slot-office-3",
        src: null, // Replace with: "/images/quality/office-3.jpg"
        alt: "Production scheduling and operations management workspace",
        label: "Operations Coordination",
        caption: "Order tracking, dispatch scheduling, and material batch verification.",
        groupTitle: "Modern Office & Engineering",
      },
      {
        id: "slot-office-4",
        src: null, // Replace with: "/images/quality/office-4.jpg"
        alt: "Quality administration and export documentation office",
        label: "Quality Administration",
        caption: "PPAP documentation, mill test certificates, and compliance records filing.",
        groupTitle: "Modern Office & Engineering",
      },
    ],
  },
];

/* ─── ALL SLOTS FLATTENED (FOR LIGHTBOX) ─────────────────── */
const ALL_SLOTS: QualitySlotItem[] = QUALITY_IN_ACTION_GROUPS.flatMap((g) => g.slots);

/* ─── REUSABLE SLOT PLACEHOLDER / IMAGE ──────────────────── */
interface SlotViewProps {
  slot: QualitySlotItem;
  aspectClass?: string;
  className?: string;
  showOverlay?: boolean;
  priority?: boolean;
  onClick?: () => void;
  isActive?: boolean;
}

function QualitySlotView({
  slot,
  aspectClass = "aspect-[16/10]",
  className = "",
  showOverlay = true,
  priority = false,
  onClick,
  isActive = false,
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
      aria-label={`${slot.groupTitle} - ${slot.label}`}
      className={`group/slot relative overflow-hidden transition-all duration-300 cursor-pointer ${aspectClass} ${className} ${
        isActive ? "ring-2 ring-[#1E6D95] ring-offset-2 ring-offset-white" : ""
      }`}
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
        /* ── Industrial Placeholder ── */
        <div className="absolute inset-0 bg-[#F4F7F8] border border-zinc-200/90 group-hover/slot:border-[#1E6D95]/60 transition-colors duration-300 flex flex-col items-center justify-center p-4 text-center select-none">
          {/* Subtle Corner Brackets for Precision Aesthetic */}
          <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-zinc-300/80 pointer-events-none" />
          <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-zinc-300/80 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-zinc-300/80 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-zinc-300/80 pointer-events-none" />

          {/* Icon Badge */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-zinc-200 shadow-xs flex items-center justify-center text-zinc-400 group-hover/slot:text-[#1E6D95] group-hover/slot:border-[#1E6D95]/40 group-hover/slot:scale-105 transition-all duration-300 mb-2.5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#252A2D] group-hover/slot:text-[#1E6D95] transition-colors">
            Image Placeholder
          </span>
          <span className="text-[9px] font-mono uppercase tracking-[0.14em] text-zinc-400 mt-1 max-w-[200px] truncate">
            {slot.label}
          </span>

          <span className="mt-2.5 inline-flex items-center gap-1.5 text-[8px] font-mono uppercase tracking-widest text-zinc-400 border border-zinc-200/80 bg-white/70 px-2 py-0.5 rounded-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E6D95]/50 animate-pulse" />
            Ready for Asset
          </span>
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
        <p className="text-xs sm:text-[13px] text-[#667177] leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="shrink-0 self-start md:self-end">
        <span className="inline-flex items-center gap-1.5 border border-zinc-200 bg-white px-2.5 py-1 text-[9px] font-mono font-semibold uppercase tracking-[0.16em] text-zinc-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E6D95]" />
          {slotCount} {slotCount === 1 ? "Slot" : "Slots"}
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════ */
export default function QualityInAction() {
  const [activeOfficeIdx, setActiveOfficeIdx] = useState(0);
  const [lightboxSlot, setLightboxSlot] = useState<QualitySlotItem | null>(null);

  const groups = QUALITY_IN_ACTION_GROUPS;
  const labGroup = groups[0];
  const machineryGroup = groups[1];
  const officeGroup = groups[2];

  /* ── Lightbox Keyboard Controls ── */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxSlot) return;

      if (e.key === "Escape") {
        setLightboxSlot(null);
      } else if (e.key === "ArrowRight") {
        const idx = ALL_SLOTS.findIndex((s) => s.id === lightboxSlot.id);
        const next = ALL_SLOTS[(idx + 1) % ALL_SLOTS.length];
        setLightboxSlot(next);
      } else if (e.key === "ArrowLeft") {
        const idx = ALL_SLOTS.findIndex((s) => s.id === lightboxSlot.id);
        const prev = ALL_SLOTS[(idx - 1 + ALL_SLOTS.length) % ALL_SLOTS.length];
        setLightboxSlot(prev);
      }
    },
    [lightboxSlot]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-zinc-200 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-14 lg:mb-18">
          <span className="inline-flex items-center gap-2 border border-[#1E6D95]/40 bg-[#EAF3F7] px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.14em] sm:tracking-[0.22em] text-[#1E6D95]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E6D95]" />
            Operations Showcase
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

        <div className="space-y-16 lg:space-y-20">
          {/* ═════════════════════════════════════════════════════
              GROUP 01 — QUALITY INSPECTION LAB (1 Image)
             ═════════════════════════════════════════════════════ */}
          <div className="reveal-hidden">
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
              GROUP 02 — ADVANCED MACHINERY FLOOR (2 Images)
             ═════════════════════════════════════════════════════ */}
          <div className="reveal-hidden">
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
              GROUP 03 — MODERN OFFICE & ENGINEERING (4 Images)
             ═════════════════════════════════════════════════════ */}
          <div className="reveal-hidden">
            <GroupHeader
              num={officeGroup.num}
              title={officeGroup.title}
              desc={officeGroup.desc}
              slotCount={officeGroup.slots.length}
            />

            {/* Editorial 4-slot layout: Featured view + 3 supporting tiles */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
              {/* Featured Active Slot (Desktop Left) */}
              <div className="lg:col-span-7 flex flex-col">
                <QualitySlotView
                  slot={officeGroup.slots[activeOfficeIdx]}
                  aspectClass="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/11]"
                  className="border border-zinc-200 hover:border-[#1E6D95] hover:shadow-lg transition-all duration-300 flex-grow"
                  onClick={() => setLightboxSlot(officeGroup.slots[activeOfficeIdx])}
                />
              </div>

              {/* Supporting Tiles (Desktop Right / Mobile Strip) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between pb-1 border-b border-zinc-100">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                    Curated Facilities [{officeGroup.slots.length} Views]
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#1E6D95]">
                    Tap to Switch View
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2.5 sm:gap-3 flex-grow">
                  {officeGroup.slots.map((slot, idx) => {
                    const isSelected = activeOfficeIdx === idx;
                    return (
                      <div
                        key={slot.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => setActiveOfficeIdx(idx)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActiveOfficeIdx(idx);
                          }
                        }}
                        className={`group p-2 sm:p-2.5 border transition-all duration-200 cursor-pointer flex items-center gap-3 ${
                          isSelected
                            ? "border-[#1E6D95] bg-[#EAF3F7]/50 shadow-xs"
                            : "border-zinc-200 bg-white hover:border-[#1E6D95]/60 hover:bg-zinc-50"
                        }`}
                      >
                        {/* Mini Thumbnail */}
                        <div className="relative w-14 h-11 sm:w-16 sm:h-12 bg-zinc-100 shrink-0 border border-zinc-200 overflow-hidden">
                          {slot.src ? (
                            <Image
                              src={slot.src}
                              alt={slot.alt}
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#F4F7F8] text-zinc-400 group-hover:text-[#1E6D95]">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Title & Badge */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] font-mono font-bold text-[#1E6D95]">
                              0{idx + 1}
                            </span>
                            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#252A2D] truncate">
                              {slot.label}
                            </h4>
                          </div>
                          <p className="text-[10px] text-zinc-500 truncate hidden lg:block mt-0.5">
                            {slot.caption}
                          </p>
                        </div>

                        {/* Radio Indicator */}
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                            isSelected ? "bg-[#1E6D95]" : "bg-zinc-200 group-hover:bg-zinc-300"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════
          ACCESSIBLE MODAL LIGHTBOX
         ═════════════════════════════════════════════════════ */}
      {lightboxSlot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxSlot.label}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xs animate-fade-in"
          onClick={() => setLightboxSlot(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#181C1E] border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#202528]">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#1E6D95] block">
                  {lightboxSlot.groupTitle}
                </span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  {lightboxSlot.label}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setLightboxSlot(null)}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full border border-white/20 text-zinc-300 hover:text-white hover:border-white transition-colors flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            {/* Media Area */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/50 flex items-center justify-center">
              {lightboxSlot.src ? (
                <Image
                  src={lightboxSlot.src}
                  alt={lightboxSlot.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center text-zinc-400">
                  <div className="w-14 h-14 rounded-full border border-dashed border-zinc-600 flex items-center justify-center mb-3 text-zinc-500">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-300">
                    Asset Placeholder Active
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 mt-1 max-w-sm">
                    {lightboxSlot.caption}
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Controls */}
            <div className="px-5 py-3 border-t border-white/10 bg-[#202528] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-[10px] tracking-widest uppercase">
                Slot {ALL_SLOTS.findIndex((s) => s.id === lightboxSlot.id) + 1} of {ALL_SLOTS.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const idx = ALL_SLOTS.findIndex((s) => s.id === lightboxSlot.id);
                    setLightboxSlot(ALL_SLOTS[(idx - 1 + ALL_SLOTS.length) % ALL_SLOTS.length]);
                  }}
                  className="px-2.5 py-1 border border-white/20 hover:border-white text-zinc-300 hover:text-white transition-colors text-[10px] uppercase tracking-wider"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const idx = ALL_SLOTS.findIndex((s) => s.id === lightboxSlot.id);
                    setLightboxSlot(ALL_SLOTS[(idx + 1) % ALL_SLOTS.length]);
                  }}
                  className="px-2.5 py-1 border border-white/20 hover:border-white text-zinc-300 hover:text-white transition-colors text-[10px] uppercase tracking-wider"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
