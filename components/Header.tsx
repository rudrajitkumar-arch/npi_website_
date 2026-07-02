"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "Industries", href: "/industries" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base =
    "fixed top-0 left-0 right-0 z-50 transition-all duration-400";
  const bg = scrolled
    ? "bg-primary-dark shadow-2xl py-3 border-b border-white/10"
    : "bg-transparent py-5";

  return (
    <header className={`${base} ${bg}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight shrink-0">
          <span
            className="text-white font-black uppercase tracking-wider text-xl leading-none"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            New Perfect
          </span>
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-accent-gold mt-0.5">
            Precision Brass &amp; Copper Components
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`px-2 py-1.5 text-[10px] font-black uppercase tracking-widest transition-colors ${
                pathname === n.href
                  ? "text-accent-gold"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden xl:block shrink-0">
          <Link
            href="/contact"
            className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover transition-colors border border-accent-gold"
          >
            Get Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="xl:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
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

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-primary-dark border-t border-white/10 px-4 py-4 space-y-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2.5 text-sm font-bold uppercase tracking-widest rounded ${
                pathname === n.href
                  ? "text-accent-gold bg-white/5"
                  : "text-zinc-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-3 text-sm font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover rounded"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
