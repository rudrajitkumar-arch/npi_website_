"use client";

/**
 * HomeQualityGallery — Compact Horizontal Auto-Scrolling Image Strip
 *
 * Placed on Home page AFTER the Quality section, BEFORE Certifications.
 * Uses 6 existing quality facility images.
 * CSS-only infinite marquee; no carousel library.
 * Pauses on hover. Drag support. Touch-swipe support.
 * Respects prefers-reduced-motion.
 */

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

/* ─── DATA: EXACTLY 6 IMAGES ─────────────────────────────── */
const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/images/quality/quality-in-action-01.jpg",
    alt: "Quality inspection and metrology laboratory",
    label: "QUALITY INSPECTION LAB",
  },
  {
    id: 2,
    src: "/images/quality/quality-in-action-02.jpg",
    alt: "Advanced CNC turning and precision machining floor",
    label: "ADVANCED MACHINERY FLOOR",
  },
  {
    id: 3,
    src: "/images/quality/quality-in-action-03.jpg",
    alt: "Modern office engineering workspace",
    label: "MODERN OFFICE & ENGINEERING",
  },
  {
    id: 4,
    src: "/images/quality/quality-in-action-04.jpg",
    alt: "Engineering planning and conference suite",
    label: "MODERN OFFICE & ENGINEERING",
  },
  {
    id: 5,
    src: "/images/quality/quality-in-action-05.jpg",
    alt: "CAD design and technical review workspace",
    label: "MODERN OFFICE & ENGINEERING",
  },
  {
    id: 6,
    src: "/images/quality/quality-in-action-06.jpg",
    alt: "Operations coordination and quality management",
    label: "MODERN OFFICE & ENGINEERING",
  },
  {
    id: 7,
    src: "/images/factory_images/about-facility.png",
    alt: "NPI manufacturing facility exterior",
    label: "OUR FACILITY",
  },
];

/* ─── INDIVIDUAL CARD ─────────────────────────────────────── */
function GalleryCard({
  item,
  onClick,
}: {
  item: (typeof GALLERY_IMAGES)[0];
  onClick: () => void;
}) {
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
      aria-label={item.alt}
      /* Fixed width + aspect-ratio → stable dimensions regardless of image */
      className="group relative flex-none w-[280px] sm:w-[320px] lg:w-[340px] aspect-[4/3] overflow-hidden bg-[#EFF2F5] border border-zinc-200/80 hover:border-[#1E6D95] cursor-pointer transition-colors duration-300 select-none"
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        priority={item.id <= 2}
        loading={item.id <= 2 ? "eager" : "lazy"}
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 640px) 280px, 340px"
        draggable={false}
      />
      {/* Subtle label on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-3.5">
        <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-white/90">
          {item.label}
        </span>
      </div>
    </div>
  );
}

/* ─── LIGHTBOX ─────────────────────────────────────────────── */
function Lightbox({
  item,
  total,
  index,
  onClose,
  onNext,
  onPrev,
}: {
  item: (typeof GALLERY_IMAGES)[0];
  total: number;
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#141A1F] border border-white/10 p-3 sm:p-4 shadow-2xl flex flex-col gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
            {item.label}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-7 h-7 text-zinc-400 hover:text-white transition-colors text-sm flex items-center justify-center"
          >
            ✕
          </button>
        </div>
        <div className="relative aspect-[4/3] w-full bg-[#0D1216] overflow-hidden">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={onPrev}
            className="text-[10px] font-mono uppercase text-zinc-400 hover:text-white tracking-wider transition-colors"
          >
            ← Prev
          </button>
          <span className="text-[10px] font-mono text-zinc-500">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            onClick={onNext}
            className="text-[10px] font-mono uppercase text-zinc-400 hover:text-white tracking-wider transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
export default function HomeQualityGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* ── Drag-to-scroll ── */
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const wasDragging = useRef(false);

  function onMouseDown(e: React.MouseEvent) {
    isDragging.current = true;
    wasDragging.current = false;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    const delta = x - startX.current;
    if (Math.abs(delta) > 4) wasDragging.current = true;
    if (trackRef.current) trackRef.current.scrollLeft = scrollLeft.current - delta;
  }

  function onMouseUp() {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }

  // Duplicate images for infinite visual effect on touch/static-scroll mode
  const displayImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  const lightboxItem = lightboxIndex !== null ? GALLERY_IMAGES[lightboxIndex] : null;

  return (
    <>
      <section
        id="quality-visual-gallery"
        className="py-12 sm:py-14 lg:py-16 bg-[#F8F9FA] border-t border-zinc-200/80 overflow-hidden"
      >
        {/* ── HEADING (aligned to standard container) ── */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 sm:mb-8 text-center">
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
          <p className="mt-2 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed text-[#667177]">
            A closer look at the facilities, machinery, and engineering environment behind our
            precision manufacturing.
          </p>
        </div>

        {/* ── MARQUEE / GALLERY STRIP ── */}
        {prefersReducedMotion ? (
          /* Reduced-motion: plain horizontal scroll, no animation */
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 cursor-grab"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {GALLERY_IMAGES.map((img) => (
              <GalleryCard
                key={img.id}
                item={img}
                onClick={() => {
                  if (!wasDragging.current)
                    setLightboxIndex(GALLERY_IMAGES.findIndex((i) => i.id === img.id));
                }}
              />
            ))}
          </div>
        ) : (
          /* Auto-scroll marquee with hover-pause and drag */
          <div
            className="group/strip"
            style={{ overflow: "hidden" }}
          >
            <div
              className="flex gap-4 w-max group-hover/strip:[animation-play-state:paused]"
              style={{
                animation: "quality-marquee 40s linear infinite",
              }}
            >
              {/* Duplicated track for seamless loop */}
              {displayImages.map((img, idx) => (
                <GalleryCard
                  key={`${img.id}-${idx}`}
                  item={img}
                  onClick={() => {
                    const realIdx = GALLERY_IMAGES.findIndex((i) => i.id === img.id);
                    setLightboxIndex(realIdx);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── KEYFRAME (injected once) ── */}
      <style>{`
        @keyframes quality-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* Hide scrollbar on reduced-motion strip */
        #quality-visual-gallery div::-webkit-scrollbar { display: none; }
      `}</style>

      {/* ── LIGHTBOX ── */}
      {lightboxItem && lightboxIndex !== null && (
        <Lightbox
          item={lightboxItem}
          total={GALLERY_IMAGES.length}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length)
          }
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
            )
          }
        />
      )}
    </>
  );
}
