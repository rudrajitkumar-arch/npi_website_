import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "New Perfect Incorporation | Precision Brass & Copper Components – Jamnagar, India",
  description:
    "ISO 9001:2015 certified manufacturer, exporter & supplier of precision brass and copper components. CNC turned parts, fittings, fasteners, inserts, and custom components from Jamnagar, Gujarat.",
  keywords: [
    "brass components manufacturer",
    "copper components",
    "CNC turned parts",
    "precision machining Jamnagar",
    "brass fittings exporter India",
    "ISO 9001 brass manufacturer",
  ],
};

/* ─── reusable tiny primitives ─────────────────────────── */

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
          className={`mt-3 text-sm ${
            light ? "text-zinc-400" : "text-zinc-500"
          } max-w-2xl ${center ? "mx-auto" : ""}`}
        >
          {sub}
        </p>
      )}
      <div className={`mt-4 w-14 h-1 bg-accent-gold ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

/* ─── Industry data ─────────────────────────────────────── */
const INDUSTRIES = [
  {
    icon: "⚡",
    title: "Electrical & Electronics",
    desc: "Terminal blocks, pins, socket contacts, neutral links, earthing components.",
  },
  {
    icon: "🚗",
    title: "Automobiles",
    desc: "Sensor housings, fuel connectors, fasteners, structural brass components.",
  },
  {
    icon: "✈️",
    title: "Aerospace",
    desc: "High-tolerance components built to stringent aerospace material specs.",
  },
  {
    icon: "🏥",
    title: "Medical",
    desc: "Micro-machined brass parts with precision finishes for medical devices.",
  },
  {
    icon: "🧩",
    title: "Plastic & Rubber Molding",
    desc: "Threaded inserts, knurled fittings, and mold-in components for polymers.",
  },
  {
    icon: "🚿",
    title: "Sanitary & Hardware",
    desc: "Lead-free compression fittings, angles, adapters, valves, and couplings.",
  },
  {
    icon: "🔥",
    title: "Gas, CNG & LPG",
    desc: "Zero-leak forged valve bodies, injectors, and high-pressure brass fittings.",
  },
  {
    icon: "⚓",
    title: "Marine",
    desc: "Naval brass fasteners and fittings resistant to saltwater corrosion.",
  },
  {
    icon: "🔩",
    title: "Fasteners",
    desc: "Precision brass bolts, studs, nuts, washers, and specialty fixings.",
  },
  {
    icon: "🏭",
    title: "General Industrial",
    desc: "Custom-machined brass and copper parts for general engineering.",
  },
];

/* ─── Capabilities ──────────────────────────────────────── */
const CAPABILITIES = [
  {
    num: "01",
    title: "High-Volume Precision Machining",
    desc: "Economical, high-quality CNC-machined metal components at any volume — from prototype batches to multi-million-piece runs.",
    items: [
      "CNC & VMC turning centres",
      "Auto bar-fed multi-spindle",
      "±0.01 mm tolerance",
      "Traub, sliding-head lathes",
    ],
  },
  {
    num: "02",
    title: "Full Secondary Operations",
    desc: "Complete in-house secondary work eliminating subcontracting delays and quality gaps.",
    items: [
      "Drilling, tapping, threading",
      "Slotting & broaching",
      "Light milling",
      "Deburring & edge finishing",
    ],
  },
  {
    num: "03",
    title: "Surface Treatment & Plating",
    desc: "Wide spectrum of surface finishes applied in-house for functional and decorative requirements.",
    items: [
      "Silver, gold, nickel, chrome, tin",
      "Zinc, copper plating",
      "Black nickel, anodizing",
      "Buffing & mirror polishing",
    ],
  },
];

/* ─── Machinery ─────────────────────────────────────────── */
const MACHINES = [
  { val: "35", label: "Automatic Traub Machines" },
  { val: "20", label: "Drilling & Milling Machines" },
  { val: "14", label: "CNC Turning Machines" },
  { val: "12", label: "Semi-Automated Machines" },
  { val: "10", label: "Secondary Operations Units" },
  { val: "8", label: "Automatic Threading Machines" },
  { val: "5", label: "Sliding Head Machines" },
  { val: "3", label: "Tool Grinders" },
];

/* ─── Products ──────────────────────────────────────────── */
const PRODUCTS = [
  {
    img: "/images/brass-components.jpg",
    title: "Brass Inserts",
    desc: "Heat-set, ultrasonic & moulded inserts for polymer applications with precision knurling.",
  },
  {
    img: "/images/product-portfolio.jpg",
    title: "Brass Fittings",
    desc: "Compression, push-fit, and threaded fittings for plumbing, gas, and hydraulic lines.",
  },
  {
    img: "/images/shop-floor.jpg",
    title: "Brass Fasteners & Fixings",
    desc: "Hex bolts, studs, nuts, washers, and specialty screws in all thread standards.",
  },
  {
    img: "/images/factory-floor.jpg",
    title: "Brass Cable Glands",
    desc: "EMC, metric, NPT, and armoured cable gland assemblies with accessories.",
  },
  {
    img: "/images/cnc-machine.jpg",
    title: "CNC Turned Parts",
    desc: "Complex custom components from drawings — prototype to high-volume production.",
  },
  {
    img: "/images/raw-material.jpg",
    title: "Copper / Bronze / Gunmetal",
    desc: "Precision-machined copper and bronze alloy components for electrical & marine uses.",
  },
  {
    img: "/images/inspection.jpg",
    title: "Earthing & Lightning Protection",
    desc: "Earth rods, clamps, bonding conductors, and lightning protection hardware.",
  },
  {
    img: "/images/team-office.jpg",
    title: "Brass Forging & Casting",
    desc: "High-density forged and cast brass components for structural and valve applications.",
  },
];

/* ─── Quality ───────────────────────────────────────────── */
const QUALITY_CARDS = [
  {
    icon: "🔍",
    title: "In-Process Inspection",
    desc: "Cross-checks at every stage, from raw material intake to final dispatch.",
  },
  {
    icon: "✅",
    title: "100% Visual Inspection",
    desc: "Every component individually checked — defect-free is the only standard.",
  },
  {
    icon: "📐",
    title: "Calibrated Instruments",
    desc: "Strict calibration schedules for all measurement equipment and gauges.",
  },
  {
    icon: "🔬",
    title: "Advanced Metrology",
    desc: "Continuously upgraded checking technology and precision measurement systems.",
  },
];

const TOOLKIT = [
  "Micrometers",
  "Vernier Calipers",
  "Pin & Plug Gauges",
  "Profile Projector",
  "Vision Measuring System",
  "Hardness Testers",
];

/* ─── Certifications ────────────────────────────────────── */
const CERTS = [
  { label: "ISO 9001:2015", note: "Quality Management System" },
  { label: "RoHS Compliant", note: "Hazardous Substance Directive" },
  { label: "UDYAM Registered", note: "Ministry of MSME, Govt. of India" },
  { label: "PPAP Level III", note: "Production Part Approval Process" },
];

/* ─── Clients ───────────────────────────────────────────── */
const CLIENTS = [
  "Godrej",
  "Panasonic",
  "GreatWhite",
  "Imperial Auto",
  "Elcom",
  "Supreme",
  "Bentlay",
  "Aptiv",
  "GF",
  "Cahors",
  "Dhoot Automotive",
  "Alwasail",
  "Brothers Plast Tech",
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. ABOUT PREVIEW ─────────────────────────────────── */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <SectionHead
                tag="About Us"
                title={"Brass City's Precision\nComponent Partner"}
                center={false}
              />
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                <strong>New Perfect Incorporation</strong> manufactures precision brass and
                copper-alloy components from a 10,000&nbsp;sq.m. ISO-certified facility in
                Jamnagar, Gujarat — India's Brass City. Established in 2007, the company
                supplies custom-engineered parts for electrical, plumbing, automotive,
                aerospace, medical, sanitary, hardware, marine, fastener, and general
                industrial applications.
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed mb-8">
                With 110+ machines across 11 specialised categories, rigorous in-process
                inspection, and ISO 9001:2015 certified systems, we deliver consistent
                quality to international buyers and OEMs across the globe.
              </p>
              <Link
                href="/about"
                className="inline-flex px-7 py-3 bg-primary-dark text-white text-xs font-black uppercase tracking-widest hover:bg-accent-gold transition-colors"
              >
                About New Perfect
              </Link>
            </div>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3 h-[420px]">
              <div className="relative rounded-sm overflow-hidden row-span-2">
                <Image
                  src="/images/factory-floor.jpg"
                  alt="Factory floor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary-dark/20" />
              </div>
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/images/brass-components.jpg"
                  alt="Brass components"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary-dark/10" />
              </div>
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/images/raw-material.jpg"
                  alt="Raw material"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary-dark/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES ─────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Sectors"
            title="Industries We Serve"
            sub="One alloying capability. Ten industries trust the result."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.title}
                className="group border border-zinc-200 hover:border-accent-gold bg-bg-warm hover:bg-white p-5 transition-all duration-300 cursor-default"
              >
                <div className="text-2xl mb-3">{ind.icon}</div>
                <h3 className="text-xs font-black uppercase tracking-wider text-primary-dark group-hover:text-accent-gold transition-colors mb-2">
                  {ind.title}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-snug">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES ───────────────────────────────────── */}
      <section className="py-20 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Manufacturing"
            title="Manufacturing Capability"
            sub="Anything in precision components — to your exact specification."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.num}
                className="group bg-white border border-zinc-200 hover:border-accent-gold p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
              >
                {/* Large number watermark */}
                <span
                  className="absolute -top-4 -right-2 text-8xl font-black text-zinc-100 group-hover:text-accent-gold/10 select-none transition-colors"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {cap.num}
                </span>
                <div className="relative z-10">
                  <div className="w-8 h-1 bg-accent-gold mb-5" />
                  <h3
                    className="text-lg font-black uppercase tracking-wide text-primary-dark mb-3"
                    style={{ fontFamily: "var(--font-serif-display)" }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-5">{cap.desc}</p>
                  <ul className="space-y-1.5">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-center text-xs text-zinc-600">
                        <span className="w-1 h-1 rounded-full bg-accent-gold mr-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/capabilities"
              className="inline-flex px-8 py-3.5 border border-zinc-300 hover:border-accent-gold text-zinc-700 hover:text-accent-gold text-xs font-black uppercase tracking-widest transition-colors"
            >
              Full Capabilities →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. MACHINERY SNAPSHOT ─────────────────────────────── */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Infrastructure"
            title="Our Machinery Fleet"
            sub="110+ machines across 11 specialised categories."
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10">
            {MACHINES.map((m) => (
              <div
                key={m.label}
                className="bg-primary-dark hover:bg-primary-light p-8 flex flex-col items-center text-center transition-colors duration-300"
              >
                <span
                  className="text-4xl font-black text-accent-gold leading-none"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {m.val}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-2 leading-snug">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Plus automatic profile drawing, in-house tool making, and vibrator slot
            units — fully equipped for end-to-end production.
          </p>
          <div className="mt-8 text-center">
            <Link
              href="/infrastructure"
              className="inline-flex px-8 py-3.5 border border-white/20 hover:border-accent-gold text-zinc-300 hover:text-accent-gold text-xs font-black uppercase tracking-widest transition-colors"
            >
              View Infrastructure →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PRODUCT PORTFOLIO ──────────────────────────────── */}
      <section className="py-20 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Products"
            title="Our Product Portfolio"
            sub="Turned components, fittings, fasteners, electricals, and custom brass/copper parts."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map((p) => (
              <div
                key={p.title}
                className="group bg-white border border-zinc-200 hover:border-accent-gold overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col"
              >
                <div className="relative h-44 bg-zinc-100 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/5 transition-colors" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="text-sm font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-2"
                    style={{ fontFamily: "var(--font-serif-display)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 leading-snug flex-1">{p.desc}</p>
                  <Link
                    href="/products"
                    className="mt-4 text-[10px] font-black uppercase tracking-widest text-accent-gold hover:text-primary-dark transition-colors"
                  >
                    View Products →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex px-8 py-3.5 bg-primary-dark hover:bg-accent-gold text-white text-xs font-black uppercase tracking-widest transition-colors"
            >
              Full Product Catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. QUALITY ────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Quality Assurance"
            title="Quality You Can Measure"
            sub="100% visual inspection. Zero compromise on defects."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {QUALITY_CARDS.map((q) => (
              <div
                key={q.title}
                className="group border border-zinc-200 hover:border-accent-gold bg-bg-warm hover:bg-white p-7 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{q.icon}</div>
                <h3 className="text-sm font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-2">
                  {q.title}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-snug">{q.desc}</p>
              </div>
            ))}
          </div>

          {/* Toolkit chips */}
          <div className="border-t border-zinc-100 pt-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4 text-center">
              Measurement &amp; Testing Toolkit
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {TOOLKIT.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary-dark bg-bg-warm border border-zinc-200 hover:border-accent-gold hover:text-accent-gold transition-colors cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/quality"
              className="inline-flex px-8 py-3.5 border border-zinc-300 hover:border-accent-gold text-zinc-700 hover:text-accent-gold text-xs font-black uppercase tracking-widest transition-colors"
            >
              Our Quality System →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CERTIFICATIONS ─────────────────────────────────── */}
      <section className="py-14 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 text-center mb-8">
            Certifications &amp; Compliance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CERTS.map((c) => (
              <div
                key={c.label}
                className="group bg-white border border-zinc-200 hover:border-accent-gold p-6 flex flex-col items-center text-center transition-all duration-300"
              >
                {/* Badge icon */}
                <svg
                  className="w-8 h-8 text-accent-gold mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span className="text-sm font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors">
                  {c.label}
                </span>
                <span className="text-[10px] text-zinc-400 mt-1">{c.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CLIENTS ────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Clients"
            title="Trusted by Industry Leaders"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-zinc-100">
            {CLIENTS.map((name) => (
              <div
                key={name}
                className="bg-white hover:bg-bg-warm border-0 px-6 py-7 flex items-center justify-center transition-colors duration-300 group"
              >
                <span
                  className="text-sm font-black uppercase tracking-widest text-zinc-400 group-hover:text-primary-dark transition-colors text-center"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA ─────────────────────────────────────── */}
      <section className="relative py-28 bg-primary-dark overflow-hidden">
        {/* bg texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/cnc-machine.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/70" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Tag>Custom Manufacturing Enquiry</Tag>
          <h2
            className="mt-6 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Let&apos;s Build Something{" "}
            <span className="text-accent-gold">Precise,</span> Together.
          </h2>
          <p className="mt-5 text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Share your drawing, sample, or technical requirement. Our team will respond
            with a fast, transparent quotation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 text-xs font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors hover:shadow-xl hover:shadow-accent-gold/20"
            >
              Get Quote
            </Link>
            <Link
              href="/contact#sales"
              className="px-10 py-4 text-xs font-black uppercase tracking-widest text-white border border-white/30 hover:border-accent-gold hover:text-accent-gold transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
