import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReactDOM from "react-dom";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "New Perfect Incorporation | Precision Components Manufacturer – Jamnagar, India",
  description:
    "ISO 9001:2015 certified manufacturer, exporter and supplier of precision brass, copper, and alloy components. CNC turned parts, fittings, fasteners, inserts, and custom components from Jamnagar, Gujarat.",
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
    <span className="inline-flex items-center gap-2 border border-accent-gold/40 bg-accent-gold/10 px-4 py-1.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-accent-gold">
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
    <div className={`mb-12 lg:mb-16 ${center ? "text-center" : ""}`}>
      {tag && <Tag>{tag}</Tag>}
      <h2
        className={`mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.15] tracking-tight ${light ? "text-white" : "text-primary-dark"
          }`}
        style={{ fontFamily: "var(--font-serif-display)" }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-3.5 text-sm sm:text-base ${light ? "text-zinc-400" : "text-zinc-500"
            } max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`}
        >
          {sub}
        </p>
      )}
      <div className={`mt-4 w-12 h-1 bg-accent-gold ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

/* ─── Industry data ─────────────────────────────────────── */
const INDUSTRIES = [
  {
    icon: (
      <svg className="w-6 h-6 text-primary-dark group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Electrical & Electronics",
    desc: "Terminal blocks, pins, socket contacts, neutral links, earthing components",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-dark group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 17a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0zM3 11l1.5-4.5A2 2 0 016.4 5h11.2a2 2 0 011.9 1.5L21 11M3 11h18v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
    title: "Automobiles",
    desc: "Sensor housings, fuel connectors, fasteners, structural brass components",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-dark group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L9 9H2l5.5 4-2 7 6.5-4.5 6.5 4.5-2-7L22 9h-7L12 2z" />
      </svg>
    ),
    title: "Aerospace",
    desc: "High-tolerance components built to stringent aerospace material specs",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-dark group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
      </svg>
    ),
    title: "Medical",
    desc: "Micro-machined brass parts with precision finishes for medical devices",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-dark group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Plastic & Rubber Molding",
    desc: "Threaded inserts, knurled fittings, and mold-in components for polymers",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-dark group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0zM19 11V7a2 2 0 00-2-2H7a2 2 0 00-2 2v4m14 0H5m14 0v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6" />
      </svg>
    ),
    title: "Sanitary & Hardware",
    desc: "Lead-free compression fittings, angles, adapters, valves, and couplings",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-dark group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343a8 8 0 010 11.314z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
    title: "Gas, CNG & LPG",
    desc: "Zero-leak forged valve bodies, injectors, and high-pressure brass fittings",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-dark group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 3H6a2 2 0 00-2 2v14a2 2 0 002 2h4m4-18h4a2 2 0 012 2v14a2 2 0 01-2 2h-4m-4-9h4" />
      </svg>
    ),
    title: "Fittings",
    desc: "Custom brass, copper, and alloy pipe fittings, unions, nipples, and adapters",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-dark group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    title: "Fasteners",
    desc: "Precision screws, bolts, studs, nuts, washers, and specialty fixings",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-dark group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "General Industrial",
    desc: "Custom-machined precision components for general engineering applications",
  },
];

/* ─── Capabilities ──────────────────────────────────────── */
const CAPABILITIES = [
  {
    num: "01",
    title: "High-Volume Precision Machining",
    desc: "Economical, high-quality CNC-machined metal components at any volume — from prototype batches to multi-million-piece runs",
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
    desc: "Complete in-house secondary work eliminating subcontracting delays and quality gaps",
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
    desc: "Wide spectrum of surface finishes applied in-house for functional and decorative requirements",
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
  { val: "3", label: "Power Press" },
];

/* ─── Products ──────────────────────────────────────────── */
const PRODUCTS = [
  {
    img: "/images/brass-inserts.jpg?v=2",
    title: "Brass Inserts",
    desc: "Heat-set, ultrasonic & moulded inserts for polymer applications with precision knurling",
  },
  {
    img: "/images/brass-fittings.jpg?v=2",
    title: "Brass Fittings",
    desc: "Compression, push-fit, and threaded fittings for plumbing, gas, and hydraulic lines",
  },
  {
    img: "/images/brass-fasteners.jpg?v=2",
    title: "Brass Fasteners & Fixings",
    desc: "Hex bolts, studs, nuts, washers, and specialty screws in all thread standards",
  },
  {
    img: "/images/brass-cable-glands.jpg?v=2",
    title: "Brass Cable Glands",
    desc: "EMC, metric, NPT, and armoured cable gland assemblies with accessories",
  },
  {
    img: "/images/cnc-turned-parts.jpg?v=2",
    title: "CNC Turned Parts",
    desc: "Complex custom components from drawings — prototype to high-volume production",
  },
  {
    img: "/images/copper-bronze.jpg?v=2",
    title: "Copper / Bronze / Gunmetal",
    desc: "Precision-machined copper and bronze alloy components for electrical & marine uses",
  },
  {
    img: "/images/earthing-lightning.jpg?v=2",
    title: "Earthing & Lightning Protection",
    desc: "Earth rods, clamps, bonding conductors, and lightning protection hardware",
  },
  {
    img: "/images/brass-forging.jpg?v=2",
    title: "Brass Forging & Casting",
    desc: "High-density forged and cast brass components for structural and valve applications",
  },
];

/* ─── Quality ───────────────────────────────────────────── */
const QUALITY_CARDS = [
  {
    icon: (
      <svg className="w-7 h-7 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "In-Process Inspection",
    desc: "Cross-checks at every stage, from raw material intake to final dispatch",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "100% Visual Inspection",
    desc: "Every component individually checked with defect prevention & controlled inspection protocols",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Calibrated Instruments",
    desc: "Strict calibration schedules for all measurement equipment and gauges",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Advanced Metrology",
    desc: "Continuously upgraded checking technology and precision measurement systems",
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
  { label: "ISO 9001:2015", note: "Quality Management System", logo: "/images/certificate_images/iso.png" },
  { label: "RoHS Compliant", note: "Hazardous Substance Directive", logo: "/images/certificate_images/rohs.png" },
  { label: "UDYAM Registered", note: "Ministry of MSME, Govt. of India", logo: "/images/certificate_images/msme.png" },
  { label: "PPAP / HSE", note: "Quality & Safety Standards", logo: "/images/certificate_images/hse.png" },
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
  // Preload high-fidelity 3D assets immediately in the HTML head
  ReactDOM.preload("/models/brass_component_1.glb", { as: "fetch", crossOrigin: "anonymous" });
  ReactDOM.preload("/models/bolt_and_nut.glb", { as: "fetch", crossOrigin: "anonymous" });
  ReactDOM.preload("/models/copper_component.glb", { as: "fetch", crossOrigin: "anonymous" });
  ReactDOM.preload("/hdr/studio.exr", { as: "fetch", crossOrigin: "anonymous" });

  return (
    <>
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. ABOUT PREVIEW ─────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <SectionHead
                tag="About Us"
                title={"Brass City's Precision\nComponent Partner"}
                center={false}
              />
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-4">
                <strong>New Perfect Incorporation</strong>{" "}
                manufactures precision components from a 50,000 sq. ft. ISO-certified facility in
                Jamnagar, Gujarat — India&apos;s Brass City. Established in 2007, the company
                supplies custom-engineered parts for electrical, fittings, plumbing, automotive,
                aerospace, medical, sanitary, hardware, marine, fastener, and general
                industrial applications.
              </p>
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed mb-8">
                With 110+ machines across all categories, rigorous in-process
                inspection, and ISO 9001:2015 certified systems, we deliver consistent
                quality to international buyers and OEMs across the globe.
              </p>
              <Link
                href="/about"
                className="inline-flex px-8 py-3.5 bg-primary-dark text-white text-xs font-mono font-bold uppercase tracking-[0.2em] hover:bg-accent-gold transition-colors"
              >
                About New Perfect
              </Link>
            </div>

            {/* Single Image */}
            <div className="relative h-[380px] lg:h-[440px] w-full rounded-sm overflow-hidden border border-zinc-200/80 shadow-md">
              <Image
                src="/images/factory_images/factory-outdoor.png"
                alt="New Perfect Incorporation Facility & Precision Manufacturing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES ─────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Sectors"
            title="Industries We Serve"
            sub="One precision capability. Ten industries that trust the result."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.title}
                className="group border border-zinc-200 hover:border-accent-gold bg-bg-warm hover:bg-white p-5 lg:p-6 transition-all duration-300 cursor-default flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3">{ind.icon}</div>
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-2 font-display">
                    {ind.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES ───────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Manufacturing"
            title="Manufacturing Capability"
            sub="Any precision component — manufactured to your exact specification."
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
                    className="text-lg sm:text-xl font-black uppercase tracking-wide text-primary-dark mb-3"
                    style={{ fontFamily: "var(--font-serif-display)" }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-5">{cap.desc}</p>
                  <ul className="space-y-2">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-center text-xs sm:text-sm text-zinc-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-2.5 shrink-0" />
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
              className="inline-flex px-8 py-3.5 border border-zinc-300 hover:border-accent-gold text-zinc-700 hover:text-accent-gold text-xs font-mono font-bold uppercase tracking-[0.2em] transition-colors"
            >
              Full Capabilities →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. MACHINERY SNAPSHOT ─────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-primary-dark">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Infrastructure"
            title="Our Machinery Fleet"
            sub="110+ machines across all production categories."
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10">
            {MACHINES.map((m) => (
              <div
                key={m.label}
                className="bg-primary-dark hover:bg-primary-light p-8 flex flex-col items-center text-center transition-colors duration-300"
              >
                <span
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent-gold leading-none"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {m.val}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400 mt-2.5 leading-snug">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Also equipped with automatic profile drawing machines, an in-house tool room, and vibrator slot
            units — fully prepared for end-to-end component production.
          </p>
          <div className="mt-10 text-center">
            <Link
              href="/infrastructure"
              className="inline-flex px-8 py-3.5 border border-white/20 hover:border-accent-gold text-zinc-300 hover:text-accent-gold text-xs font-mono font-bold uppercase tracking-[0.2em] transition-colors"
            >
              View Infrastructure →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PRODUCT PORTFOLIO ──────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Products"
            title="Our Product Portfolio"
            sub="Turned components, fittings, fasteners, electrical parts, and custom brass and copper components."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-base font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-2 font-display"
                  >
                    {p.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed flex-1">{p.desc}</p>
                  <Link
                    href="/products"
                    className="mt-4 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-accent-gold hover:text-primary-dark transition-colors"
                  >
                    View Products →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex px-8 py-3.5 bg-primary-dark hover:bg-accent-gold text-white text-xs font-mono font-bold uppercase tracking-[0.2em] transition-colors"
            >
              Full Product Catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. QUALITY ────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Quality Assurance"
            title="Quality You Can Measure"
            sub="100% visual inspection. Zero compromise on defects."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {QUALITY_CARDS.map((q) => (
              <div
                key={q.title}
                className="group border border-zinc-200 hover:border-accent-gold bg-bg-warm hover:bg-white p-7 lg:p-8 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">{q.icon}</div>
                  <h3 className="text-base font-bold uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-2 font-display">
                    {q.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>

          {/* Toolkit chips */}
          <div className="border-t border-zinc-100 pt-10">
            <p className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-zinc-400 mb-5 text-center">
              Measurement &amp; Testing Toolkit
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {TOOLKIT.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-primary-dark bg-bg-warm border border-zinc-200 hover:border-accent-gold hover:text-accent-gold transition-colors cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/quality"
              className="inline-flex px-8 py-3.5 border border-zinc-300 hover:border-accent-gold text-zinc-700 hover:text-accent-gold text-xs font-mono font-bold uppercase tracking-[0.2em] transition-colors"
            >
              Our Quality System →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CERTIFICATIONS ─────────────────────────────────── */}
      <section className="py-14 lg:py-16 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-zinc-400 text-center mb-8">
            Certifications &amp; Compliance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {CERTS.map((c) => (
              <div
                key={c.label}
                className="group bg-white border border-zinc-200 hover:border-accent-gold p-6 lg:p-7 flex flex-col items-center text-center transition-all duration-300"
              >
                {/* Badge logo */}
                <div className="h-12 flex items-center justify-center mb-3">
                  <Image
                    src={c.logo}
                    alt={c.label}
                    width={48}
                    height={40}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-11 max-w-[90px] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors">
                  {c.label}
                </span>
                <span className="text-[10px] sm:text-[11px] text-zinc-400 mt-1">{c.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CLIENTS ────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-100">
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
      <section className="relative py-20 lg:py-24 bg-primary-dark overflow-hidden">
        {/* bg texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/cnc-machine.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/70" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Tag>Custom Manufacturing Enquiry</Tag>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.15]"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Let&apos;s Build Something{" "}
            <span className="text-accent-gold">Precise,</span> Together
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto" />
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Share your drawing, sample, or technical requirement. Our team will respond
            with a prompt, transparent quotation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              href="/contact"
              className="px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors hover:shadow-xl hover:shadow-accent-gold/20"
            >
              Get Quote
            </Link>
            <Link
              href="/contact#sales"
              className="px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white border border-white/30 hover:border-accent-gold hover:text-accent-gold transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
