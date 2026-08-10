import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Precision brass inserts, fittings, fasteners, cable glands, CNC turned parts, copper, bronze & gunmetal components from New Perfect Incorporation — Jamnagar, India. Custom grades and surface finishes available",
  keywords: [
    "brass inserts manufacturer",
    "brass fittings exporter",
    "brass fasteners India",
    "CNC turned brass parts",
    "brass cable glands",
    "copper bronze components Jamnagar",
    "custom brass components manufacturer",
  ],
};

/* ─── PRIMITIVES ─────────────────────────────────────────── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-accent-gold/40 bg-accent-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gold">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
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
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {tag && <Tag>{tag}</Tag>}
      <h2
        className={`mt-4 text-3xl sm:text-4xl font-black uppercase leading-tight tracking-tight ${
          light ? "text-white" : "text-primary-dark"
        }`}
        style={{ fontFamily: "var(--font-serif-display)" }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-3 text-sm max-w-2xl leading-relaxed ${
            light ? "text-zinc-400" : "text-zinc-500"
          } ${center ? "mx-auto" : ""}`}
        >
          {sub}
        </p>
      )}
      <div className={`mt-4 w-14 h-1 bg-accent-gold ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

/* ─── PRODUCT DATA ───────────────────────────────────────── */
const CATEGORIES = [
  {
    id: "brass-inserts",
    title: "Brass Inserts",
    img: "/images/brass-components.jpg",
    items: [
      "Brass knurled inserts",
      "Brass threaded inserts",
      "Brass CPVC / PPR fitting inserts",
      "Brass hex inserts",
      "Brass square inserts",
      "Brass compression limiters",
    ],
  },
  {
    id: "brass-fittings",
    title: "Brass Fittings",
    img: "/images/product-portfolio.jpg",
    items: [
      "Brass sanitary & plumbing fittings",
      "Brass pipe fittings",
      "Brass nipple & hose barbs",
      "Brass fitting nuts",
      "CP brass fittings",
    ],
  },
  {
    id: "brass-forging",
    title: "Brass Forging & Casting Components",
    img: "/images/factory-floor.jpg",
    items: [
      "Bronze pipe fittings",
      "Brass forged fittings",
      "Brass forging components",
      "Gunmetal casting parts",
    ],
  },
  {
    id: "brass-engineering",
    title: "Brass Engineering Components",
    img: "/images/cnc-machine.jpg",
    items: [
      "Brass heater & geyser parts",
      "Brass medical parts",
      "Brass radiator keys",
      "Brass cable grippers",
      "Brass LPG gas fittings",
    ],
  },
  {
    id: "earthing-lightning",
    title: "Earthing & Lightning Protection",
    img: "/images/inspection.jpg",
    items: [
      "Earthing accessories",
      "Lightning protection accessories",
      "Brass transformer parts",
    ],
  },
  {
    id: "brass-fasteners",
    title: "Brass Fasteners & Fixings",
    img: "/images/shop-floor.jpg",
    items: [
      "Brass anchors",
      "Brass bolts",
      "Brass nuts",
      "Brass screws",
      "Brass studs",
      "Brass washers",
    ],
  },
  {
    id: "cable-glands",
    title: "Brass Cable Glands & Accessories",
    img: "/images/raw-material.jpg",
    items: [
      "Brass cable glands",
      "Brass cable accessories",
      "Brass cable gland accessories",
    ],
  },
  {
    id: "cnc-turned",
    title: "CNC Turned Parts",
    img: "/images/cnc-machine.jpg",
    items: [
      "Brass CNC turned parts",
      "CNC turned parts",
      "CNC turned components",
    ],
  },
  {
    id: "copper-bronze",
    title: "Copper / Bronze / Gunmetal Components",
    img: "/images/brass-components.jpg",
    items: [
      "Copper components",
      "Bronze pipe fittings",
      "Bronze / gunmetal casting parts",
    ],
  },
];

const SERVICES = [
  { num: "01", label: "Precision Machining" },
  { num: "02", label: "Custom Screw Machining" },
  { num: "03", label: "CNC Turning & Milling" },
  { num: "04", label: "Forging + Machining" },
  { num: "05", label: "Stamping & Marking" },
  { num: "06", label: "Brazing & Welding" },
  { num: "07", label: "Annealing & Heat Treatment" },
  { num: "08", label: "Surface Cleaning & Plating" },
  { num: "09", label: "Light Assembly" },
  { num: "10", label: "Packaging & Labelling" },
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
  "Silver",
  "Zinc",
  "Copper",
  "Tin",
  "Nickel",
  "Chrome",
  "Gold",
  "Black Nickel",
  "Buffing",
  "Anodizing",
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function ProductsPage() {
  return (
    <>
      {/* 1. HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[68vh] flex items-center bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/brass-components.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/97 via-primary-dark/88 to-primary-dark/55" />
        <div className="absolute inset-0 bg-primary-dark/25" />
        <div className="absolute inset-y-0 right-[20%] w-px bg-white/5 hidden xl:block" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
          <div className="max-w-2xl space-y-6">
            <Tag>Products &amp; Services</Tag>
            <h1
              className="text-4xl sm:text-6xl font-black uppercase leading-none tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Range of Products{" "}
              <span className="text-accent-gold">&amp; Services</span>
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-accent-gold shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-white/90">
                Customized precision components, in every grade you specify
              </p>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
              New Perfect Incorporation manufactures brass, copper, bronze, gunmetal, forged,
              cast, CNC turned, and custom-machined components for multiple industrial
              applications
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 text-xs font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors"
            >
              Send Product Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORY GRID ─────────────────────────── */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Product Portfolio"
            title="Product Categories"
            sub="Every Precision Components across 9 major product families"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="group bg-white border border-zinc-200 hover:border-accent-gold overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col"
              >
                {/* Image header */}
                <div className="relative h-44 bg-zinc-100 overflow-hidden shrink-0">
                  <Image
                    src={cat.img}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent" />
                  {/* Title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3
                      className="text-sm font-black uppercase tracking-wide text-white leading-snug"
                      style={{ fontFamily: "var(--font-serif-display)" }}
                    >
                      {cat.title}
                    </h3>
                  </div>
                  {/* Gold top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Items list */}
                <div className="p-5 flex flex-col flex-1">
                  <ul className="space-y-1.5 flex-1 mb-5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center text-[11px] text-zinc-500">
                        <span className="w-1 h-1 rounded-full bg-accent-gold mr-2.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={`/contact?product=${cat.id}`}
                    className="flex items-center justify-between border border-zinc-200 group-hover:border-accent-gold px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-accent-gold transition-all duration-300"
                  >
                    <span>Discuss This Product</span>
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES ──────────────────────────────────────── */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Manufacturing Services"
            title="Services We Provide"
            sub="End-to-end manufacturing services from raw stock to packaged, dispatch-ready components"
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10">
            {SERVICES.map((s) => (
              <div
                key={s.num}
                className="bg-primary-dark hover:bg-primary-light px-5 py-7 flex flex-col items-center text-center transition-colors duration-300 group cursor-default"
              >
                <span
                  className="text-[10px] font-black text-accent-gold/60 group-hover:text-accent-gold mb-2 transition-colors"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {s.num}
                </span>
                <p className="text-xs font-black uppercase tracking-wide text-zinc-300 group-hover:text-white transition-colors leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MATERIAL & FINISH SUPPORT ─────────────────────── */}
      <section className="py-20 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Material & Finish"
            title="Material & Finish Support"
            sub="All components manufactured to customer-specified grades. Surface finishes applied in-house"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Materials */}
            <div className="bg-white border border-zinc-200 p-8">
              <h3
                className="text-base font-black uppercase tracking-wide text-primary-dark mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                <span className="w-6 h-0.5 bg-accent-gold" />
                Base Materials
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {MATERIALS.map((m) => (
                  <div
                    key={m}
                    className="flex items-center gap-2.5 px-4 py-3 bg-bg-warm border border-zinc-200 hover:border-accent-gold group transition-colors cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-gold shrink-0" />
                    <span className="text-xs font-bold text-zinc-700 group-hover:text-primary-dark transition-colors">
                      {m}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-zinc-400 mt-5 leading-relaxed">
                Components can be manufactured in any customer-specified alloy grade or
                material equivalent. Share your drawing or MTC (Material Test Certificate)
                requirements and we will match them exactly
              </p>
            </div>

            {/* Finishes */}
            <div className="bg-white border border-zinc-200 p-8">
              <h3
                className="text-base font-black uppercase tracking-wide text-primary-dark mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                <span className="w-6 h-0.5 bg-accent-gold" />
                Surface Finishing Options
              </h3>
              <div className="flex flex-wrap gap-2.5 mb-5">
                {FINISHES.map((f) => (
                  <span
                    key={f}
                    className="px-3.5 py-2 text-[10px] font-black uppercase tracking-widest text-primary-dark bg-bg-warm border border-zinc-200 hover:border-accent-gold hover:text-accent-gold transition-colors cursor-default"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                All plating and surface treatment work is performed in-house using calibrated
                equipment. Thickness and adhesion are checked against customer or international
                standards before dispatch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOM MANUFACTURING CTA ──────────────────────── */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Tag>Custom Manufacturing</Tag>
              <h2
                className="mt-4 text-3xl sm:text-4xl font-black uppercase leading-tight tracking-tight text-primary-dark"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                Send Your Drawing{" "}
                <span className="text-accent-gold">We&apos;ll Manufacture</span>{" "}
                to Specification
              </h2>
              <div className="mt-4 w-14 h-1 bg-accent-gold mx-auto" />
            </div>

            {/* Upload-style visual placeholder */}
            <div className="border-2 border-dashed border-zinc-300 hover:border-accent-gold bg-bg-warm transition-colors duration-300 p-12 flex flex-col items-center text-center group cursor-pointer rounded-sm">
              {/* Upload icon */}
              <div className="w-16 h-16 rounded-full bg-white border-2 border-zinc-200 group-hover:border-accent-gold flex items-center justify-center mb-5 transition-colors duration-300">
                <svg
                  className="w-7 h-7 text-zinc-400 group-hover:text-accent-gold transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>

              <p className="text-sm font-black uppercase tracking-widest text-primary-dark group-hover:text-accent-gold transition-colors mb-2">
                Drop Your Drawing or Sample
              </p>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed max-w-sm">
                PDF, DWG, STEP, IGES, or JPG accepted. Include target material, quantity,
                grade, and finish requirement
              </p>

              {/* Info chips */}
              <div className="flex flex-wrap gap-2.5 justify-center mb-8">
                {[
                  "Technical Drawing",
                  "Target Material",
                  "Quantity Required",
                  "Surface Finish",
                  "Tolerance Class",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest border border-zinc-300 group-hover:border-accent-gold/40 text-zinc-500 group-hover:text-zinc-600 transition-colors"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <Link
                href="/contact?action=upload"
                className="px-10 py-3.5 text-xs font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors hover:shadow-lg hover:shadow-accent-gold/20"
              >
                Request a Quote
              </Link>

              <p className="text-[10px] text-zinc-400 mt-4">
                Or email us directly at{" "}
                <a
                  href="mailto:info@newperfectinc.com"
                  className="text-primary-dark hover:text-accent-gold transition-colors font-semibold"
                >
                  info@newperfectinc.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="relative py-20 bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/shop-floor.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary-dark/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Tag>Jamnagar Manufacturing</Tag>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Not Found What You Need?{" "}
            <span className="text-accent-gold">We Can Machine It</span>
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto">
            If your component is not listed, contact us directly. New Perfect Incorporation
            handles custom requirements — just share a drawing, sample, or specification
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 text-xs font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors"
            >
              Send Product Enquiry
            </Link>
            <Link
              href="/capabilities"
              className="px-8 py-3.5 text-xs font-black uppercase tracking-widest text-white border border-white/30 hover:border-accent-gold hover:text-accent-gold transition-colors"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
