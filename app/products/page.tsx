/**
 * /products — Products Landing Page
 *
 * Category grid driven by PRODUCT_CATALOGUE (lib/products.ts).
 * Shows first `previewCount` sub-products per card + "+X more" indicator.
 * Existing Services, Material & Finish, and CTA sections preserved below.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCT_CATALOGUE } from "@/lib/products";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the complete product catalogue of New Perfect Incorporation — precision brass, copper, bronze and gunmetal components across 8 major categories. Manufacturer & exporter from Jamnagar, India.",
  keywords: [
    "brass inserts manufacturer",
    "brass fittings exporter",
    "CNC turned brass parts",
    "brass cable glands",
    "copper bronze components Jamnagar",
    "stamping parts manufacturer",
    "precision components India",
    "brass fasteners manufacturer",
  ],
};

/* ─── PRIMITIVES ─────────────────────────────────────────── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-[#1E6D95]/40 bg-[#EAF3F7] px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.14em] sm:tracking-[0.22em] text-[#1E6D95]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#1E6D95]" />
      {children}
    </span>
  );
}

function SectionHead({
  tag,
  title,
  sub,
  light = false,
  center = true,
}: {
  tag?: string;
  title: string;
  sub?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 lg:mb-16 ${center ? "text-center" : ""}`}>
      {tag && <Tag>{tag}</Tag>}
      <h2
        className={`mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.15] tracking-tight ${
          light ? "text-white" : "text-[#252A2D]"
        }`}
        style={{ fontFamily: "var(--font-serif-display)" }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-3.5 text-sm sm:text-base max-w-2xl leading-relaxed ${
            light ? "text-zinc-400" : "text-[#667177]"
          } ${center ? "mx-auto" : ""}`}
        >
          {sub}
        </p>
      )}
      <div className={`mt-4 w-12 h-1 bg-[#1E6D95] ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

/* ─── SERVICES DATA ────────────────────────────────────────── */
const SERVICES = [
  { num: "01", label: "Precision Machining", img: "/images/services/Precision_Machining.jpg", alt: "Precision machining components" },
  { num: "02", label: "Custom Screw Machining", img: "/images/services/Custom_Screw_Machining.jpg", alt: "Custom screw machining components" },
  { num: "03", label: "CNC Turning & Milling", img: "/images/services/CNC_Turning_Milling.jpg", alt: "CNC turning and milling components" },
  { num: "04", label: "Forging + Machining", img: "/images/services/Forging_Machining.png", alt: "Forged and machined components" },
  { num: "05", label: "Stamping & Marking", img: "/images/services/Stamping_Marking.png", alt: "Metal stamping and marking" },
  { num: "06", label: "Brazing & Welding", img: "/images/services/Brazing_Welding.jpeg", alt: "Brazing and welding process" },
  { num: "07", label: "Annealing & Heat Treatment", img: "/images/services/Annealing_Heat_Treatment.jpg", alt: "Annealing and heat treatment" },
  { num: "08", label: "Surface Cleaning & Plating", img: "/images/services/Surface_Cleaning_Plating.png", alt: "Surface cleaning and plating" },
  { num: "09", label: "Light Assembly", img: "/images/services/Light_Assembly.jpg", alt: "Precision component assembly" },
  { num: "10", label: "Packaging & Labelling", img: "/images/services/Packaging_Labelling.png", alt: "Industrial component packaging and labelling" },
];

const MATERIALS = [
  "Brass",
  "Copper",
  "Bronze",
  "Gunmetal",
  "Customer-Specified Grades",
  "Plated & Surface-Treated Finishes",
];

const FINISHES = [
  "Silver", "Zinc", "Copper", "Tin", "Nickel",
  "Chrome", "Gold", "Black Nickel", "Buffing", "Anodizing",
];

/* ─── CATEGORY CARD ──────────────────────────────────────── */
function CategoryCard({
  category,
  index,
}: {
  category: (typeof PRODUCT_CATALOGUE)[number];
  index: number;
}) {
  const preview = category.subProducts.slice(0, category.previewCount ?? 4);
  const remaining = category.subProducts.length - preview.length;

  return (
    <div
      className="product-card group/card bg-white border border-zinc-200 hover:border-[#1E6D95] hover:shadow-xl flex flex-col relative overflow-hidden reveal-hidden"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Top accent reveal on hover */}
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#1E6D95] group-hover/card:w-full transition-all duration-500 z-20" />

      {/* Image */}
      <div className="relative h-48 sm:h-52 w-full bg-[#252A2D] overflow-hidden shrink-0">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          loading="lazy"
          className="card-image object-cover opacity-90 group-hover/card:opacity-100"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, (max-width:1280px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252A2D]/90 via-[#252A2D]/20 to-transparent" />

        {/* Category name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <h3
            className="text-base sm:text-lg font-black uppercase tracking-wide text-white leading-tight"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            {category.name}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow space-y-4">
        {/* Description */}
        <p className="text-xs text-zinc-500 leading-relaxed">{category.description}</p>

        {/* Sub-product list */}
        <div className="flex-grow">
          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-2">
            Products
          </span>
          <ul className="space-y-1.5">
            {preview.map((sub) => (
              <li key={sub.slug} className="flex items-start gap-2 text-[11px] text-zinc-600 leading-snug">
                <span className="mt-[4px] w-1 h-1 rounded-full bg-[#1E6D95]/60 shrink-0" />
                {sub.name}
              </li>
            ))}
            {remaining > 0 && (
              <li className="text-[10px] font-mono font-bold text-[#1E6D95] mt-0.5">
                +{remaining} more
              </li>
            )}
          </ul>
        </div>

        {/* CTA */}
        <Link
          href={`/products/${category.slug}`}
          className="mt-auto inline-flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-[0.18em] text-[#252A2D] hover:text-[#1E6D95] transition-colors duration-200 border-t border-zinc-100 pt-4"
        >
          View Category
          <span className="view-cat-arrow text-[#1E6D95]">→</span>
        </Link>
      </div>
    </div>
  );
}

/* ─── REVEAL OBSERVER (client) ───────────────────────────── */
// Minimal script injected as a Server Component — no "use client" needed
// because we use a dangerouslySetInnerHTML inline script trick for zero-bundle reveal.
// Actually we'll do it as a simple client component import.

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function ProductsPage() {
  return (
    <>
      {/* 1. HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-[500px] sm:min-h-[580px] lg:h-[760px] flex items-center bg-[#252A2D] overflow-hidden">
        <Image
          src="/images/header_images/products.jpg"
          alt="Range of Precision Products"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252A2D]/95 via-[#252A2D]/85 to-[#252A2D]/60 lg:bg-gradient-to-r lg:from-[#252A2D]/97 lg:via-[#252A2D]/88 lg:to-[#252A2D]/55" />
        <div className="absolute inset-0 bg-[#252A2D]/25" />
        <div className="absolute inset-y-0 right-[20%] w-px bg-white/5 hidden xl:block" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-2xl space-y-4 sm:space-y-5 lg:space-y-6">
            <Tag>Product Catalogue</Tag>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.1] sm:leading-[1.08] tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Product{" "}
              <span className="text-[#1E6D95]">Categories</span>
            </h1>
            <p className="text-sm sm:text-base font-semibold text-white/95 leading-snug sm:leading-relaxed">
              8 major product families. Manufactured to your specification.
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed max-w-xl">
              New Perfect Incorporation manufactures precision brass, copper, bronze and gunmetal
              components for a broad range of industrial applications from Jamnagar, Gujarat.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white bg-[#1E6D95] hover:bg-[#15516F] border border-[#1E6D95] transition-colors"
              >
                Send Product Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORIES ──────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#F5F6F4]" id="categories">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Product Portfolio"
            title="Product Categories"
            sub="Select a category to explore the full range of components we manufacture."
          />

          {/* 4-col grid — 2 rows of 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {PRODUCT_CATALOGUE.map((cat, i) => (
              <CategoryCard key={cat.slug} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-reveal — client component, zero bundle impact */}
      <ScrollReveal />

      {/* 3. SERVICES ──────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#252A2D]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Manufacturing Services"
            title="Services We Provide"
            sub="End-to-end manufacturing services from raw stock to packaged, dispatch-ready components."
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={s.num}
                className={[
                  "group bg-[#1F2528] border border-[#30383C] hover:border-[#1E6D95]/70",
                  "overflow-hidden flex flex-col transition-colors duration-200 ease-out cursor-default",
                  i === 8 ? "lg:col-start-2" : "",
                  i === 9 ? "lg:col-start-3" : "",
                ].join(" ")}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden shrink-0">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="px-5 py-5 min-h-[90px] flex flex-col justify-center">
                  <span
                    className="block text-[11px] font-semibold text-[#1E6D95] tracking-[0.15em] mb-2"
                    style={{ fontFamily: "var(--font-serif-display)" }}
                  >
                    {s.num}
                  </span>
                  <p className="text-[13px] font-black uppercase tracking-wide text-zinc-200 group-hover:text-white transition-colors duration-200 leading-snug">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MATERIAL & FINISH SUPPORT ─────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#F5F6F4] border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Material & Finish"
            title="Material & Finish Support"
            sub="All components manufactured to customer-specified alloy grades. Surface finishes applied in-house."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Materials */}
            <div className="bg-white border border-zinc-200 p-7 lg:p-8">
              <h3
                className="text-base font-black uppercase tracking-wide text-[#252A2D] mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                <span className="w-6 h-0.5 bg-[#1E6D95]" />
                Base Materials
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {MATERIALS.map((m) => (
                  <div
                    key={m}
                    className="flex items-center gap-2.5 px-4 py-3 bg-[#F5F6F4] border border-zinc-200 hover:border-[#1E6D95] group transition-colors cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1E6D95] shrink-0" />
                    <span className="text-xs font-bold text-zinc-700 group-hover:text-[#252A2D] transition-colors">
                      {m}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-zinc-400 mt-5 leading-relaxed">
                Components can be manufactured in any customer-specified alloy grade or material
                equivalent. Share your drawing or MTC requirements and we will match them exactly.
              </p>
            </div>

            {/* Finishes */}
            <div className="bg-white border border-zinc-200 p-7 lg:p-8">
              <h3
                className="text-base font-black uppercase tracking-wide text-[#252A2D] mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                <span className="w-6 h-0.5 bg-[#1E6D95]" />
                Surface Finishing Options
              </h3>
              <div className="flex flex-wrap gap-2.5 mb-5">
                {FINISHES.map((f) => (
                  <span
                    key={f}
                    className="px-3.5 py-2 text-[10px] font-black uppercase tracking-widest text-[#252A2D] bg-[#F5F6F4] border border-zinc-200 hover:border-[#1E6D95] hover:text-[#1E6D95] transition-colors cursor-default"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                All plating and surface treatment work is performed in-house using calibrated
                equipment. Thickness and adhesion are verified against customer or international
                standards before dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOM MANUFACTURING CTA ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Tag>Custom Manufacturing</Tag>
              <h2
                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.15] tracking-tight text-[#252A2D]"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                Send Your Drawing{" "}
                <span className="text-[#1E6D95]">We&apos;ll Manufacture</span>{" "}
                to Specification
              </h2>
              <div className="mt-4 w-12 h-1 bg-[#1E6D95] mx-auto" />
            </div>

            <div className="border-2 border-dashed border-zinc-300 hover:border-[#1E6D95] bg-[#F5F6F4] transition-colors duration-300 p-8 lg:p-12 flex flex-col items-center text-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-zinc-200 group-hover:border-[#1E6D95] flex items-center justify-center mb-5 transition-colors duration-300">
                <svg className="w-7 h-7 text-zinc-400 group-hover:text-[#1E6D95] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>

              <p className="text-sm font-black uppercase tracking-widest text-[#252A2D] group-hover:text-[#1E6D95] transition-colors mb-2">
                Drop Your Drawing or Sample
              </p>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed max-w-sm">
                PDF, DWG, STEP, IGES, or JPG accepted. Include target material, quantity, grade, and finish requirement
              </p>

              <div className="flex flex-wrap gap-2.5 justify-center mb-8">
                {["Technical Drawing", "Target Material", "Quantity Required", "Surface Finish", "Tolerance Class"].map((chip) => (
                  <span key={chip} className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest border border-zinc-300 group-hover:border-[#1E6D95]/40 text-zinc-500 transition-colors">
                    {chip}
                  </span>
                ))}
              </div>

              <Link
                href="/contact?action=upload"
                className="px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-[#1E6D95] hover:bg-[#15516F] border border-[#1E6D95] transition-colors"
              >
                Request a Quote
              </Link>

              <div className="text-[10px] text-zinc-400 mt-4 space-y-1">
                <p>Or email our sales team directly:</p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 font-semibold">
                  <a href="mailto:info@newperfectinc.com" className="text-[#252A2D] hover:text-[#1E6D95] transition-colors">
                    info@newperfectinc.com
                  </a>
                  <span className="text-zinc-300">·</span>
                  <a href="mailto:newperfectinc@gmail.com" className="text-[#252A2D] hover:text-[#1E6D95] transition-colors">
                    newperfectinc@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="relative py-20 lg:py-24 bg-[#252A2D] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/shop-floor.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#252A2D]/95 to-[#252A2D]/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6D95]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6D95]/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Tag>Jamnagar Manufacturing</Tag>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.15]"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Not Found What You Need?{" "}
            <span className="text-[#1E6D95]">We Can Machine It</span>
          </h2>
          <div className="w-12 h-1 bg-[#1E6D95] mx-auto" />
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl mx-auto">
            If your component is not listed, contact us directly. New Perfect Incorporation
            handles custom requirements — simply share a drawing, sample, or specification.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link href="/contact" className="px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-[#1E6D95] hover:bg-[#15516F] border border-[#1E6D95] transition-colors">
              Send Product Enquiry
            </Link>
            <Link href="/capabilities" className="px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white border border-white/30 hover:border-[#1E6D95] hover:text-[#1E6D95] transition-colors">
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
