import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities",
  description:
    "New Perfect Incorporation's full manufacturing capability — CNC turning, secondary operations, surface plating, in-house tooling, and engineering support for precision brass and copper components.",
  keywords: [
    "CNC turning brass",
    "precision machining Jamnagar",
    "brass surface plating",
    "secondary operations manufacturer",
    "custom screw machining India",
    "PPAP Level III documentation",
  ],
};

/* ─── PRIMITIVES ─────────────────────────────────────────── */
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
          className={`mt-3.5 text-sm sm:text-base max-w-2xl leading-relaxed ${light ? "text-zinc-400" : "text-zinc-500"
            } ${center ? "mx-auto" : ""}`}
        >
          {sub}
        </p>
      )}
      <div className={`mt-4 w-12 h-1 bg-accent-gold ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

/* ─── DATA ───────────────────────────────────────────────── */
const CAP_CARDS = [
  {
    num: "01",
    title: "High-Volume Precision Machining",
    desc: "Economical, high-quality CNC-machined metal components at any volume — from prototype batches to multi-million-piece runs",
    items: [
      "Multi-axis CNC & VMC turning centres",
      "Automatic bar-fed multi-spindle lathes",
      "Tolerance control down to ±0.01 mm",
      "Traub, sliding-head & semi-auto lathes",
    ],
    icon: (
      <svg className="w-8 h-8 text-primary-dark group-hover:text-accent-gold transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Full Secondary Operations",
    desc: "Complete in-house secondary work eliminating subcontracting delays and quality gaps",
    items: [
      "Drilling, tapping & threading",
      "Slotting & broaching",
      "Light milling operations",
      "Deburring & edge finishing",
    ],
    icon: (
      <svg className="w-8 h-8 text-primary-dark group-hover:text-accent-gold transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Surface Treatment & Plating",
    desc: "Wide spectrum of functional and decorative surface finishes applied in-house",
    items: [
      "Silver, gold, nickel, chrome, tin plating",
      "Zinc, copper plating",
      "Black nickel & anodizing",
      "Buffing & mirror polishing",
    ],
    icon: (
      <svg className="w-8 h-8 text-primary-dark group-hover:text-accent-gold transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Engineering Support",
    desc: "Technical expertise built into every project — from DFM review to final PPAP documentation",
    items: [
      "AutoCAD 3D design software",
      "Master sample maintenance",
      "Redesign for cost efficiency",
      "PPAP Level III documentation",
    ],
    icon: (
      <svg className="w-8 h-8 text-primary-dark group-hover:text-accent-gold transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const SERVICES = [
  "Precision Machining",
  "Custom Screw Machining",
  "CNC Turning & Milling",
  "Forging + Machining",
  "Stamping & Marking",
  "Brazing & Welding",
  "Annealing & Heat Treatment",
  "Surface Cleaning & Plating",
  "Light Assembly",
  "Packaging & Labelling",
];

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

const ALSO_EQUIPPED = [
  "Automatic Profile Drawing Machine",
  "In-House Tool Making",
  "Vibrator Slot Units",
];

const PRODUCTION_STEPS = [
  {
    step: "01",
    title: "Enquiry",
    subtitle: "Drawing & Specification Review",
    desc: "Detailed evaluation of customer 2D/3D CAD drawings, material alloy grade, tolerance criteria, batch volume, and delivery schedules to prepare a precise quotation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Design & Sampling",
    subtitle: "Tooling & Prototype Approval",
    desc: "Engineering feasibility analysis, 3D modelling, custom tool preparation, and production of master prototype samples for formal client validation prior to mass manufacturing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Raw Material",
    subtitle: "Alloy Sourcing & Testing",
    desc: "Procurement and verification of certified virgin brass, copper, bronze, or gunmetal stock, tested for chemical composition and backed by Material Test Certificates (MTC).",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Manufacturing",
    subtitle: "CNC Machining & Finishing",
    desc: "High-speed multi-axis CNC turning, sliding-head machining, automated Traub operations, threading, forging, secondary milling, and in-house surface plating.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Quality Inspection",
    subtitle: "100% Visual & Metrology QA",
    desc: "Comprehensive in-process checks, 100% visual defect screening, thread gauge testing, optical coordinate measurement, and PPAP Level III documentation generation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "Dispatch",
    subtitle: "Protective Packaging & Logistics",
    desc: "Anti-corrosion VCI packaging, custom protective boxed sorting, lot-number barcoding, and coordinated worldwide logistics via air or ocean freight.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

const ENG_LEFT = [
  "AutoCAD 3D design software",
  "PPAP Level III documentation",
  "Cost, strength & manufacturability benchmarking",
  "Product master sample maintenance",
];

const ENG_RIGHT = [
  "Fast, transparent quotations",
  "Special pricing for long-term contracts",
  "Volume-based mass manufacturing rates",
  "No hidden costs or surprise revisions",
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function CapabilitiesPage() {
  return (
    <>
      {/* 1. HERO ──────────────────────────────────────────── */}
      <section className="relative h-[760px] flex items-center bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/header_images/capabalities.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/97 via-primary-dark/88 to-primary-dark/55" />
        <div className="absolute inset-0 bg-primary-dark/25" />
        <div className="absolute inset-y-0 right-[18%] w-px bg-white/5 hidden xl:block" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-2xl space-y-6">
            <Tag>Manufacturing Capability</Tag>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.08] tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Manufacturing{" "}
              <span className="text-accent-gold">Capability</span>
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-accent-gold shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-white/95 leading-relaxed">
                Anything in precision components — to your exact specification
              </p>
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
              From CNC turning and custom screw machining to secondary operations, plating,
              assembly, and packaging — New Perfect Incorporation is equipped for end-to-end
              precision component production.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors"
            >
              Request Manufacturing Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITY CARDS ──────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Core Capabilities"
            title="What We Do"
            sub="Four end-to-end capability pillars covering every stage of component production."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {CAP_CARDS.map((c) => (
              <div
                key={c.num}
                className="group bg-white border border-zinc-200 hover:border-accent-gold p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
              >
                {/* Watermark number */}
                <span
                  className="absolute -top-3 -right-1 text-8xl font-black text-zinc-100 group-hover:text-accent-gold/10 select-none transition-colors pointer-events-none"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {c.num}
                </span>
                {/* Gold top line on hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-gold group-hover:w-full transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-5">
                    {c.icon}
                    <div>
                      <div className="w-6 h-0.5 bg-accent-gold mb-2" />
                      <h3
                        className="text-lg sm:text-xl font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors"
                        style={{ fontFamily: "var(--font-serif-display)" }}
                      >
                        {c.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-5">{c.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {c.items.map((item) => (
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
        </div>
      </section>

      {/* 3. SERVICES GRID ─────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Services"
            title="Services We Provide"
            sub="Comprehensive manufacturing services from raw bar stock to finished, dispatched components."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-zinc-100">
            {SERVICES.map((s, i) => (
              <div
                key={s}
                className="bg-white hover:bg-bg-warm border-0 px-5 py-7 flex flex-col items-center justify-center text-center group transition-colors duration-300 cursor-default"
              >
                <span
                  className="text-[10px] font-black text-zinc-400 mb-3 group-hover:text-accent-gold transition-colors"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xs font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors leading-snug">
                  {s}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MACHINERY FLEET ───────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-primary-dark">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Infrastructure"
            title="Our Machinery Fleet"
            sub="110+ machines across specialised production categories."
            light
          />

          {/* Machine stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 mb-8">
            {MACHINES.map((m) => (
              <div
                key={m.label}
                className="bg-primary-dark hover:bg-primary-light px-6 py-8 flex flex-col items-center text-center transition-colors duration-300 group"
              >
                <span
                  className="text-3xl sm:text-4xl font-black text-accent-gold leading-none"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {m.val}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-2 leading-snug text-center">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Also equipped */}
          <div className="border border-white/10 p-6 bg-white/5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-4 text-center">
              Also Equipped With
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {ALSO_EQUIPPED.map((e) => (
                <span
                  key={e}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300 border border-white/15 hover:border-accent-gold/50 hover:text-accent-gold transition-colors cursor-default"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/infrastructure"
              className="inline-flex px-8 py-3.5 border border-white/20 hover:border-accent-gold text-zinc-300 hover:text-accent-gold text-xs font-mono font-bold uppercase tracking-[0.2em] transition-colors"
            >
              View Full Infrastructure →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. ENGINEERING THAT PAYS FOR ITSELF ─────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Engineering & Pricing"
            title="Engineering That Pays For Itself"
            sub="Technical expertise and transparent pricing — built into every project."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Proficient Engineering */}
            <div className="bg-white border border-zinc-200 hover:border-accent-gold p-8 lg:p-10 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-accent-gold group-hover:h-full transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-primary-dark flex items-center justify-center mb-5 group-hover:bg-accent-gold transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3
                  className="text-xl font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-3"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  Proficient Engineering
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  Our engineers drive continuous improvement, maintain master samples of every
                  product, and redesign customer parts for greater cost efficiency.
                </p>
                <ul className="space-y-2">
                  {ENG_LEFT.map((item) => (
                    <li key={item} className="flex items-start text-xs text-zinc-600">
                      <span className="w-1 h-1 rounded-full bg-accent-gold mr-2 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Wise Pricing */}
            <div className="bg-primary-dark border border-white/10 hover:border-accent-gold/50 p-8 lg:p-10 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-0 bg-accent-gold group-hover:h-full transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-accent-gold/20 border border-accent-gold/30 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3
                  className="text-xl font-black uppercase tracking-wide text-white group-hover:text-accent-gold transition-colors mb-3"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  Wise Pricing
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  A transparent, straightforward pricing structure with rapid responses to every
                  enquiry. Quotes remain competitive without compromising on quality.
                </p>
                <ul className="space-y-2">
                  {ENG_RIGHT.map((item) => (
                    <li key={item} className="flex items-start text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      <span className="w-1 h-1 rounded-full bg-accent-gold mr-2 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRODUCTION PROCESS (6 STEPS) ───────────────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Production Lifecycle"
            title="Six-Step Manufacturing Process"
            sub="From initial engineering drawings to global dispatch — a disciplined, repeatable manufacturing lifecycle."
          />

          {/* Stepper Progression Bar (Desktop) */}
          <div className="hidden lg:flex items-center justify-between mb-14 relative px-4">
            <div className="absolute top-4 left-10 right-10 h-0.5 bg-zinc-200 z-0" />
            <div className="absolute top-4 left-10 right-10 h-0.5 bg-accent-gold/40 z-0" />
            {PRODUCTION_STEPS.map((s) => (
              <div key={s.step} className="relative z-10 flex flex-col items-center bg-white px-3">
                <span className="w-8 h-8 rounded-full bg-primary-dark text-accent-gold border-2 border-accent-gold flex items-center justify-center text-xs font-mono font-bold shadow-sm">
                  {s.step}
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary-dark mt-2.5 text-center">
                  {s.title}
                </span>
              </div>
            ))}
          </div>

          {/* 6 Process Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PRODUCTION_STEPS.map((s, idx) => (
              <div
                key={s.step}
                className="group bg-bg-warm border border-zinc-200 hover:border-accent-gold p-7 lg:p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Gold top accent reveal on hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-gold group-hover:w-full transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-primary-dark text-white group-hover:bg-accent-gold group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                      {s.icon}
                    </div>
                    <span className="text-2xl font-black text-zinc-300 group-hover:text-accent-gold font-mono transition-colors">
                      {s.step}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-gold block mb-1">
                      Step {s.step} · {s.subtitle}
                    </span>
                    <h3
                      className="text-lg sm:text-xl font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors font-display"
                    >
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mt-3">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-200/80 flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 group-hover:text-primary-dark transition-colors">
                  <span>{idx === 5 ? "Final Dispatch" : `Next: ${PRODUCTION_STEPS[idx + 1].title}`}</span>
                  <span className="text-accent-gold group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA ───────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-24 bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/factory-floor.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary-dark/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Tag>Manufacturing Enquiry</Tag>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.15]"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Need Production-Ready{" "}
            <span className="text-accent-gold">Brass or Copper</span> Components?
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto" />
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl mx-auto">
            Share your drawing, target material, quantity, and finishing requirement.
            Our team will provide a practical manufacturing response.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors hover:shadow-xl hover:shadow-accent-gold/20"
            >
              Request Manufacturing Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
