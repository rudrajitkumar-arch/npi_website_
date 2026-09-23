/**
 * /products/[slug] — Category Page
 *
 * Next.js 16: params is a Promise — must await.
 * generateStaticParams pre-renders all 8 category slugs at build time.
 * generateMetadata returns a unique title + description per category.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PRODUCT_CATALOGUE, CATALOGUE_MAP } from "@/lib/products";

/* ── Static params — pre-render all 8 slugs ── */
export async function generateStaticParams() {
  return PRODUCT_CATALOGUE.map((cat) => ({ slug: cat.slug }));
}

/* ── Unique metadata per category ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATALOGUE_MAP[slug];
  if (!cat) return { title: "Category Not Found" };

  return {
    title: cat.name,
    description: `${cat.description} Manufactured by New Perfect Incorporation, Jamnagar, Gujarat, India.`,
    keywords: [cat.name, ...cat.subProducts.map((s) => s.name), "manufacturer Jamnagar", "precision components India"],
  };
}

/* ── Page ── */
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = CATALOGUE_MAP[slug];

  if (!cat) notFound();

  return (
    <>
      {/* HERO — Category specific contrast overlay (retains visible product photography) */}
      <section className="relative min-h-[400px] sm:min-h-[480px] lg:h-[580px] flex items-end bg-[#202A2E] overflow-hidden">
        <Image
          src={cat.image}
          alt={cat.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-right"
        />

        {/* Desktop directional overlay: dark on left (text zone), reveals image on right */}
        <div
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(32,42,46,0.92) 0%, rgba(32,42,46,0.80) 32%, rgba(32,42,46,0.52) 58%, rgba(32,42,46,0.20) 80%, rgba(32,42,46,0.05) 100%)",
          }}
        />

        {/* Mobile vertical overlay: subtle top, darker bottom where text sits */}
        <div
          className="block md:hidden absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(32,42,46,0.35) 0%, rgba(32,42,46,0.68) 45%, rgba(32,42,46,0.92) 100%)",
          }}
        />

        {/* Brand accent top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6D95]/60 to-transparent" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 sm:pb-16 lg:pb-20 pt-32">
          {/* Breadcrumb — enhanced readability */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  Home
                </Link>
              </li>
              <li style={{ color: "rgba(255,255,255,0.45)" }}>›</li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  Products
                </Link>
              </li>
              <li style={{ color: "rgba(255,255,255,0.45)" }}>›</li>
              <li className="text-[#1E6D95] font-semibold">{cat.name}</li>
            </ol>
          </nav>

          <div className="max-w-2xl space-y-4">
            {/* Category badge */}
            <span
              className="inline-flex items-center gap-2 border px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.2em] shadow-sm"
              style={{
                backgroundColor: "rgba(245,246,244,0.94)",
                color: "#1E6D95",
                borderColor: "rgba(30,109,149,0.40)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E6D95]" />
              Product Category
            </span>

            {/* H1 / Category Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tight text-[#FFFFFF]"
              style={{
                fontFamily: "var(--font-serif-display)",
                textShadow: "0 2px 10px rgba(0,0,0,0.20)",
              }}
            >
              {cat.name}
            </h1>

            {/* Description */}
            <p
              className="text-sm sm:text-base leading-relaxed max-w-xl"
              style={{ color: "#F5F6F4" }}
            >
              {cat.description}
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-16 lg:py-20 bg-[#F5F6F4]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-6 h-px bg-[#1E6D95]" />
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.22em] text-[#1E6D95]">
              Products in this Category
            </span>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
            {cat.subProducts.map((sub, i) => (
              <article
                key={sub.slug}
                className="product-card animate-fade-in-up stagger-child bg-white border border-[#D9DEE0] overflow-hidden"
                style={{ "--stagger": i } as React.CSSProperties}
              >
                {/* Image area — 4:3 ratio */}
                <div className="relative w-full overflow-hidden" style={{ paddingTop: "75%" }}>
                  <Image
                    src={sub.image}
                    alt={sub.imageAlt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="product-card-img object-cover object-center"
                    loading="lazy"
                  />
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col gap-3">
                  <h3 className="product-card-title text-[11px] sm:text-xs font-black uppercase tracking-wide text-[#252A2D] leading-snug min-h-[2.5rem] flex items-start">
                    {sub.name}
                  </h3>
                  <a
                    href={`/contact?product=${encodeURIComponent(sub.name)}&category=${cat.slug}`}
                    className="product-card-btn inline-flex items-center gap-1.5 text-[10px] font-mono font-black uppercase tracking-[0.16em] text-white bg-[#1E6D95] hover:bg-[#15516F] transition-colors px-3 py-2 self-start"
                    aria-label={`Enquire about ${sub.name}`}
                  >
                    Enquire
                    <span className="product-card-arrow">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom row: back link + sidebar info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Back link */}
            <div className="lg:col-span-2 flex items-center">
              <a
                href="/products"
                className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-500 hover:text-[#1E6D95] transition-colors"
              >
                <span className="rotate-180 inline-block">→</span>
                Back to All Products
              </a>
            </div>

            {/* Sidebar: enquiry + other categories + manufactured by */}
            <div className="space-y-5">
              {/* Enquiry CTA */}
              <div className="bg-[#252A2D] p-6 sm:p-7 border border-white/5">
                <span className="text-[9px] font-mono font-black uppercase tracking-[0.22em] text-[#1E6D95] block mb-4">
                  Product Enquiry
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                  Need these components? Send us your drawing, quantity and specification.
                </p>
                <a
                  href={`/contact?category=${cat.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-[10px] font-mono font-black uppercase tracking-[0.18em] text-white bg-[#1E6D95] hover:bg-[#15516F] transition-colors"
                >
                  Send Enquiry
                  <span className="view-cat-arrow">→</span>
                </a>
              </div>

              {/* Browse other categories */}
              <div className="bg-white border border-zinc-200 p-6">
                <span className="text-[9px] font-mono font-black uppercase tracking-[0.22em] text-zinc-400 block mb-4">
                  Other Categories
                </span>
                <ul className="space-y-2">
                  {PRODUCT_CATALOGUE.filter((c) => c.slug !== slug).map((c) => (
                    <li key={c.slug}>
                      <a
                        href={`/products/${c.slug}`}
                        className="flex items-center gap-2 text-[11px] font-bold text-zinc-600 hover:text-[#1E6D95] transition-colors py-0.5 uppercase tracking-wide"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#1E6D95]/50 shrink-0" />
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company info chip */}
              <div className="bg-[#EAF3F7] border border-[#1E6D95]/20 p-5">
                <p className="text-[10px] font-mono text-[#1E6D95] font-bold uppercase tracking-widest mb-1">
                  Manufactured by
                </p>
                <p className="text-sm font-black text-[#252A2D] uppercase tracking-wide">
                  New Perfect Incorporation
                </p>
                <p className="text-[11px] text-zinc-500 mt-1">Jamnagar, Gujarat, India</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* CTA STRIP */}
      <section className="relative py-16 lg:py-20 bg-[#252A2D] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6D95]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6D95]/50 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-[1.2]"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Ready to Source{" "}
            <span className="text-[#1E6D95]">{cat.name}?</span>
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed max-w-lg mx-auto">
            Contact us with your drawing, sample or specification. Our team will revert with a quotation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              href={`/contact?category=${cat.slug}`}
              className="px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-[#1E6D95] hover:bg-[#15516F] border border-[#1E6D95] transition-colors"
            >
              Send Enquiry
            </Link>
            <Link
              href="/products"
              className="px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white border border-white/30 hover:border-[#1E6D95] hover:text-[#1E6D95] transition-colors"
            >
              ← All Categories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
