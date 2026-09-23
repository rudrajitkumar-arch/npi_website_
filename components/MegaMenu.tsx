"use client";

/**
 * MegaMenu
 *
 * Renders the full-width 4-column product mega menu.
 * Consumed by Header.tsx — Header manages open/close state and passes it down.
 *
 * Animation: CSS class `animate-mega-menu-in` (megaMenuIn keyframe, 180ms).
 * Sub-product stagger: CSS `--stagger` custom property + `stagger-child-fast` class.
 */

import Link from "next/link";
import { MEGA_MENU_COLUMNS } from "@/lib/products";
import type { ProductCategory } from "@/lib/products";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function CategoryColumn({
  category,
  catIndex,
  onClose,
}: {
  category: ProductCategory;
  catIndex: number;
  onClose: () => void;
}) {
  const preview = category.subProducts.slice(0, 6);

  return (
    <div>
      {/* Category title → category page */}
      <Link
        href={`/products/${category.slug}`}
        onClick={onClose}
        className="mega-cat-title block mb-3 group/title"
      >
        <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#1E6D95] font-mono leading-none group-hover/title:text-[#15516F] transition-colors duration-150">
          {category.name}
        </span>
      </Link>

      {/* Thin rule under category */}
      <div className="w-8 h-px bg-[#1E6D95]/40 mb-3" />

      {/* Sub-products */}
      <ul className="space-y-1.5">
        {preview.map((sub, i) => (
          <li key={sub.slug}>
            <Link
              href={`/products/${category.slug}`}
              onClick={onClose}
              className="mega-sub-link flex items-start gap-2 text-[12px] text-zinc-300 hover:text-white font-sans leading-snug py-0.5"
            >
              <span className="mt-[5px] w-1 h-1 rounded-full bg-[#1E6D95]/60 shrink-0" />
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* View all link */}
      <Link
        href={`/products/${category.slug}`}
        onClick={onClose}
        className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#1E6D95] hover:text-white transition-colors duration-150"
      >
        View all
        <span className="view-cat-arrow">→</span>
      </Link>
    </div>
  );
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="animate-mega-menu-in absolute top-full left-0 right-0 z-40 bg-[#1B2023] border-t border-[#1E6D95]/30 shadow-2xl"
      role="navigation"
      aria-label="Products mega menu"
    >
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#1E6D95]/60 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="w-4 h-px bg-[#1E6D95]" />
            <span className="text-[9px] font-mono font-black uppercase tracking-[0.25em] text-[#1E6D95]">
              Product Catalogue
            </span>
          </div>
          <Link
            href="/products"
            onClick={onClose}
            className="text-[9px] font-mono font-black uppercase tracking-[0.18em] text-zinc-400 hover:text-[#1E6D95] transition-colors duration-150 flex items-center gap-1"
          >
            View all products <span className="view-cat-arrow">→</span>
          </Link>
        </div>

        {/* 4-column grid — 2 categories per column */}
        <div className="grid grid-cols-4 gap-x-8 gap-y-0 divide-x divide-white/[0.06]">
          {MEGA_MENU_COLUMNS.map((column, colIdx) => (
            <div
              key={colIdx}
              className={`${colIdx > 0 ? "pl-8" : ""} space-y-7 animate-fade-in-up stagger-child`}
              style={{ "--stagger": colIdx } as React.CSSProperties}
            >
              {column.map((category, catIdx) => (
                <CategoryColumn
                  key={category.slug}
                  category={category}
                  catIndex={catIdx}
                  onClose={onClose}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-7 pt-5 border-t border-white/[0.06] flex items-center justify-between">
          <p className="text-[10px] text-zinc-500 font-mono">
            8 product categories · Jamnagar, Gujarat
          </p>
          <Link
            href="/contact"
            onClick={onClose}
            className="px-4 py-1.5 text-[9px] font-mono font-black uppercase tracking-[0.2em] text-white bg-[#1E6D95] hover:bg-[#15516F] transition-colors duration-150"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
