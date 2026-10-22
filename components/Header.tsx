"use client";

/**
 * Header
 *
 * Changes from original:
 *  — PRODUCTS nav item replaced with mega menu trigger (desktop)
 *  — Products entry in mobile menu becomes a full accordion with 8 categories
 *  — Mega menu closes on: mouseleave (80ms grace), Escape, outside click, route change
 *  — ARIA: aria-expanded, aria-haspopup on the Products button
 *  — All other nav items and CTA button unchanged
 */

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MegaMenu from "@/components/MegaMenu";
import { PRODUCT_CATALOGUE } from "@/lib/products";

const NAV_LEFT = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
];

const NAV_RIGHT = [
  { label: "Quality", href: "/quality" },
  { label: "Industries", href: "/industries" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Contact", href: "/contact" },
];

function isNavActive(href: string, currentPath: string | null): boolean {
  if (!currentPath) return false;
  const current = currentPath.replace(/\/+$/, "") || "/";
  const target = href.replace(/\/+$/, "") || "/";
  if (target === "/") return current === "/";
  return current === target || current.startsWith(target + "/");
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  /** Which mobile category accordion is open (slug or null) */
  const [mobileCatOpen, setMobileCatOpen] = useState<string | null>(null);
  /** Whether Products section is expanded in mobile menu */
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const pathname = usePathname();
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  /* ── Scroll listener ── */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mega menu on route change ── */
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileProductsOpen(false);
    setMobileCatOpen(null);
  }, [pathname]);

  /* ── Escape key closes mega menu ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* ── Outside click closes mega menu ── */
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    if (megaOpen) {
      document.addEventListener("mousedown", onClickOutside);
    }
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [megaOpen]);

  /* ── Mouse-leave grace period ── */
  const handleMouseEnterProducts = useCallback(() => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    setMegaOpen(true);
  }, []);

  const handleMouseLeaveHeader = useCallback(() => {
    leaveTimerRef.current = setTimeout(() => setMegaOpen(false), 120);
  }, []);

  const handleMouseEnterMega = useCallback(() => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
  }, []);

  const closeMega = useCallback(() => setMegaOpen(false), []);

  const isProductsActive = isNavActive("/products", pathname);

  const base = "fixed top-0 left-0 right-0 z-50 transition-all duration-400";
  const bg = scrolled
    ? "bg-[#252A2D] shadow-2xl py-2 sm:py-2.5"
    : "bg-transparent py-2.5 sm:py-3";

  return (
    <header
      ref={headerRef}
      className={`${base} ${bg}`}
      suppressHydrationWarning
      onMouseLeave={handleMouseLeaveHeader}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/company_logo/New Logo Final final.png"
            alt="New Perfect Incorporation"
            width={360}
            height={167}
            priority
            className="h-14 sm:h-16 md:h-18 lg:h-[76px] w-auto object-contain block transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
          {/* Left nav items */}
          {NAV_LEFT.map((n) => {
            const active = isNavActive(n.href, pathname);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`relative px-2 py-1.5 text-[10px] font-black uppercase tracking-widest font-mono transition-colors ${
                  active ? "text-[#1E6D95]" : "text-white/90 hover:text-[#1E6D95]"
                }`}
              >
                {n.label}
                {active && (
                  <span
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#1E6D95] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}

          {/* PRODUCTS — mega menu trigger & link to products page */}
          <div className="relative" onMouseEnter={handleMouseEnterProducts}>
            <Link
              id="products-menu-btn"
              href="/products"
              aria-haspopup="true"
              aria-expanded={megaOpen}
              aria-current={isProductsActive ? "page" : undefined}
              onClick={() => setMegaOpen(false)}
              className={`relative px-2 py-1.5 text-[10px] font-black uppercase tracking-widest transition-colors font-mono flex items-center gap-1 ${
                isProductsActive || megaOpen
                  ? "text-[#1E6D95]"
                  : "text-white/90 hover:text-[#1E6D95]"
              }`}
            >
              Products
              <svg
                className={`w-2.5 h-2.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
              {isProductsActive && (
                <span
                  className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#1E6D95] rounded-full"
                  aria-hidden="true"
                />
              )}
            </Link>
          </div>

          {/* Right nav items */}
          {NAV_RIGHT.map((n) => {
            const active = isNavActive(n.href, pathname);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`relative px-2 py-1.5 text-[10px] font-black uppercase tracking-widest font-mono transition-colors ${
                  active ? "text-[#1E6D95]" : "text-white/90 hover:text-[#1E6D95]"
                }`}
              >
                {n.label}
                {active && (
                  <span
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#1E6D95] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden xl:block shrink-0">
          <Link
            href="/contact"
            className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white bg-[#1E6D95] hover:bg-[#15516F] transition-colors border border-[#1E6D95] font-mono shadow-sm"
          >
            Get Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="xl:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mega Menu (desktop) ── */}
      <div onMouseEnter={handleMouseEnterMega}>
        <MegaMenu isOpen={megaOpen} onClose={closeMega} currentPath={pathname} />
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#252A2D] border-t border-white/10 overflow-y-auto max-h-[80vh]">
          <div className="px-4 py-4 space-y-1">
            {/* NAV_LEFT: Home, About, Capabilities */}
            {NAV_LEFT.map((n) => {
              const active = isNavActive(n.href, pathname);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block px-3 py-2.5 text-sm font-bold uppercase tracking-widest font-mono transition-colors ${
                    active
                      ? "text-[#1E6D95] bg-white/5 border-l-2 border-[#1E6D95]"
                      : "text-white/90 hover:text-[#1E6D95] hover:bg-white/5 border-l-2 border-transparent"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}

            {/* PRODUCTS accordion trigger & body — placed immediately after Capabilities */}
            <div>
              <button
                className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold uppercase tracking-widest font-mono transition-colors ${
                  isProductsActive
                    ? "text-[#1E6D95] bg-white/5 border-l-2 border-[#1E6D95]"
                    : mobileProductsOpen
                    ? "text-[#1E6D95] border-l-2 border-transparent"
                    : "text-white/90 hover:text-[#1E6D95] border-l-2 border-transparent"
                }`}
                onClick={() => {
                  setMobileProductsOpen((v) => !v);
                  if (mobileProductsOpen) setMobileCatOpen(null);
                }}
                aria-expanded={mobileProductsOpen}
                aria-current={isProductsActive ? "page" : undefined}
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Products accordion body */}
              {mobileProductsOpen && (
                <div className="animate-accordion-down mt-1 bg-[#1B2023] border border-white/[0.06]">
                  {/* All products link */}
                  {(() => {
                    const isAllProductsActive =
                      isNavActive("/products", pathname) &&
                      (pathname?.replace(/\/+$/, "") === "/products");
                    return (
                      <Link
                        href="/products"
                        onClick={() => setMobileOpen(false)}
                        aria-current={isAllProductsActive ? "page" : undefined}
                        className={`flex items-center gap-2 px-4 py-2.5 text-[11px] font-mono font-bold uppercase tracking-widest border-b border-white/[0.06] transition-colors ${
                          isAllProductsActive
                            ? "text-[#1E6D95] bg-white/5"
                            : "text-[#1E6D95] hover:bg-white/5"
                        }`}
                      >
                        View All Products
                        <span className="view-cat-arrow">→</span>
                      </Link>
                    );
                  })()}

                  {/* 8 categories with sub-accordion */}
                  {PRODUCT_CATALOGUE.map((cat) => {
                    const isCatActive = pathname
                      ? pathname.replace(/\/+$/, "") === `/products/${cat.slug}`
                      : false;
                    return (
                      <div key={cat.slug} className="border-b border-white/[0.04] last:border-0">
                        <button
                          className={`w-full flex items-center justify-between px-4 py-3 text-[12px] font-bold uppercase tracking-wide font-mono transition-colors text-left ${
                            isCatActive
                              ? "text-[#1E6D95] bg-white/5"
                              : "text-white/80 hover:text-white hover:bg-white/5"
                          }`}
                          onClick={() =>
                            setMobileCatOpen((prev) =>
                              prev === cat.slug ? null : cat.slug
                            )
                          }
                          aria-expanded={mobileCatOpen === cat.slug}
                          aria-current={isCatActive ? "page" : undefined}
                        >
                          <span>{cat.name}</span>
                          <span
                            className={`text-[#1E6D95] transition-transform duration-200 inline-block ${
                              mobileCatOpen === cat.slug ? "rotate-45" : ""
                            }`}
                          >
                            +
                          </span>
                        </button>

                        {/* Sub-products */}
                        {mobileCatOpen === cat.slug && (
                          <div className="animate-accordion-down pb-2 bg-[#161A1C]">
                            {cat.subProducts.map((sub) => (
                              <Link
                                key={sub.slug}
                                href={`/products/${cat.slug}`}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-start gap-2.5 px-6 py-2 text-[12px] text-zinc-400 hover:text-white transition-colors"
                              >
                                <span className="mt-[5px] w-1 h-1 rounded-full bg-[#1E6D95]/50 shrink-0" />
                                {sub.name}
                              </Link>
                            ))}
                            <Link
                              href={`/products/${cat.slug}`}
                              onClick={() => setMobileOpen(false)}
                              aria-current={isCatActive ? "page" : undefined}
                              className={`flex items-center gap-1.5 px-6 py-2 mt-1 text-[10px] font-mono font-bold uppercase tracking-widest transition-colors ${
                                isCatActive
                                  ? "text-white underline"
                                  : "text-[#1E6D95] hover:text-white"
                              }`}
                            >
                              View category <span className="view-cat-arrow">→</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* NAV_RIGHT: Quality, Industries, Infrastructure, Contact */}
            {NAV_RIGHT.map((n) => {
              const active = isNavActive(n.href, pathname);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block px-3 py-2.5 text-sm font-bold uppercase tracking-widest font-mono transition-colors ${
                    active
                      ? "text-[#1E6D95] bg-white/5 border-l-2 border-[#1E6D95]"
                      : "text-white/90 hover:text-[#1E6D95] hover:bg-white/5 border-l-2 border-transparent"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}

            {/* CTA: Get Quote */}
            <div className="pt-3 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-4 py-3 text-sm font-black uppercase tracking-widest text-white bg-[#1E6D95] hover:bg-[#15516F] font-mono"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
