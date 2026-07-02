import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "New Perfect Incorporation's full manufacturing capability — CNC turning, secondary operations, surface plating, in-house tooling, and engineering support for precision brass & copper components.",
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

/* ─── DATA ───────────────────────────────────────────────── */
const CAP_CARDS = [
  {
    num: "01",
    title: "High-Volume Precision Machining",
    desc: "Economical, high-quality CNC-machined metal components at any volume — from prototype batches to multi-million-piece runs.",
    items: [
      "Multi-axis CNC & VMC turning centres",
      "Automatic bar-fed multi-spindle lathes",
      "Tolerance control down to ±0.01 mm",
      "Traub, sliding-head & semi-auto lathes",
    ],
    icon: "⚙️",
  },
  {
    num: "02",
    title: "Full Secondary Operations",
    desc: "Complete in-house secondary work eliminating subcontracting delays and quality gaps.",
    items: [
      "Drilling, tapping & threading",
      "Slotting & broaching",
      "Light milling operations",
      "Deburring & edge finishing",
    ],
    icon: "🔧",
  },
  {
    num: "03",
    title: "Surface Treatment & Plating",
    desc: "Wide spectrum of functional and decorative surface finishes applied in-house.",
    items: [
      "Silver, gold, nickel, chrome, tin plating",
      "Zinc, copper plating",
      "Black nickel & anodizing",
      "Buffing & mirror polishing",
    ],
    icon: "✨",
  },
  {
    num: "04",
    title: "Engineering Support",
    desc: "Technical expertise built into every project — from DFM review to final PPAP documentation.",
    items: [
      "AutoCAD 3D design software",
      "Master sample maintenance",
      "Redesign for cost efficiency",
      "PPAP Level III documentation",
    ],
    icon: "📐",
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
  { val: "35", label: "Automatic Traub Machines", icon: "⚙️" },
  { val: "20", label: "Drilling & Milling Machines", icon: "🔩" },
  { val: "14", label: "CNC Turning Machines", icon: "🔄" },
  { val: "12", label: "Semi-Automated Machines", icon: "🏭" },
  { val: "10", label: "Secondary Operations Units", icon: "🛠️" },
  { val: "8", label: "Automatic Threading Machines", icon: "🔧" },
  { val: "5", label: "Sliding Head Machines", icon: "📏" },
  { val: "3", label: "Tool Grinders", icon: "⚡" },
];

const ALSO_EQUIPPED = [
  "Automatic Profile Drawing Machine",
  "In-House Tool Making",
  "Vibrator Slot Units",
];

const PROCESS_STEPS = [
  "Enquiry",
  "Design",
  "Sampling",
  "Manufacturing",
  "Inspection",
  "Dispatch",
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
      <section className="relative min-h-[72vh] flex items-center bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cnc-machine.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/97 via-primary-dark/88 to-primary-dark/55" />
        <div className="absolute inset-0 bg-primary-dark/25" />
        <div className="absolute inset-y-0 right-[18%] w-px bg-white/5 hidden xl:block" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
          <div className="max-w-2xl space-y-6">
            <Tag>Manufacturing Capability</Tag>
            <h1
              className="text-4xl sm:text-6xl font-black uppercase leading-none tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Manufacturing{" "}
              <span className="text-accent-gold">Capability</span>
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-accent-gold shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-white/90">
                Anything in precision components — to your exact specification.
              </p>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
              From CNC turning and custom screw machining to secondary operations, plating,
              assembly, and packaging — New Perfect Incorporation is equipped for end-to-end
              brass and copper component production.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 text-xs font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors"
            >
              Request Manufacturing Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITY CARDS ──────────────────────────────── */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Core Capabilities"
            title="What We Do"
            sub="Four end-to-end capability pillars covering every stage of component production."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <span className="text-3xl">{c.icon}</span>
                    <div>
                      <div className="w-6 h-0.5 bg-accent-gold mb-2" />
                      <h3
                        className="text-lg font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors"
                        style={{ fontFamily: "var(--font-serif-display)" }}
                      >
                        {c.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-5">{c.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {c.items.map((item) => (
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
        </div>
      </section>

      {/* 3. SERVICES GRID ─────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-zinc-100">
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
      <section className="py-20 bg-primary-dark">
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
                <span className="text-2xl mb-2">{m.icon}</span>
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
              className="inline-flex px-8 py-3.5 border border-white/20 hover:border-accent-gold text-zinc-300 hover:text-accent-gold text-xs font-black uppercase tracking-widest transition-colors"
            >
              View Full Infrastructure →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. ENGINEERING THAT PAYS FOR ITSELF ─────────────── */}
      <section className="py-20 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Engineering & Pricing"
            title="Engineering That Pays For Itself"
            sub="Technical expertise and transparent pricing — built into every project."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Proficient Engineering */}
            <div className="bg-white border border-zinc-200 hover:border-accent-gold p-10 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-accent-gold group-hover:h-full transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-primary-dark flex items-center justify-center mb-5 group-hover:bg-accent-gold transition-colors">
                  <span className="text-white text-lg">📐</span>
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
            <div className="bg-primary-dark border border-white/10 hover:border-accent-gold/50 p-10 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-0 bg-accent-gold group-hover:h-full transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-accent-gold/20 border border-accent-gold/30 flex items-center justify-center mb-5">
                  <span className="text-accent-gold text-lg">📋</span>
                </div>
                <h3
                  className="text-xl font-black uppercase tracking-wide text-white group-hover:text-accent-gold transition-colors mb-3"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  Wise Pricing
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  A transparent, uncomplicated price structure with rapid responses to every
                  enquiry. Quotes stay competitive without compromising quality.
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

      {/* 6. PRODUCTION FLOW ───────────────────────────────── */}
      <section className="py-16 bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 text-center mb-10">
            Production Process Flow
          </p>

          {/* Desktop: horizontal strip */}
          <div className="hidden sm:flex items-center justify-between gap-0">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step} className="flex items-center flex-1">
                {/* Step */}
                <div className="group flex flex-col items-center flex-1 cursor-default">
                  <div className="w-10 h-10 rounded-full bg-primary-dark group-hover:bg-accent-gold border-2 border-accent-gold/30 group-hover:border-accent-gold flex items-center justify-center transition-all duration-300 mb-3">
                    <span className="text-[10px] font-black text-white">{i + 1}</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-dark group-hover:text-accent-gold transition-colors text-center">
                    {step}
                  </span>
                </div>
                {/* Connector */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="w-8 h-px bg-accent-gold/30 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="sm:hidden relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-accent-gold/30" />
            <div className="space-y-6">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step} className="relative flex items-center gap-4">
                  <div className="absolute -left-[21px] w-4 h-4 rounded-full bg-primary-dark border-2 border-accent-gold flex items-center justify-center">
                    <span className="text-[8px] font-black text-white">{i + 1}</span>
                  </div>
                  <span className="text-sm font-black uppercase tracking-wide text-primary-dark">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA ───────────────────────────────────────────── */}
      <section className="relative py-24 bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/factory-floor.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary-dark/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Tag>Manufacturing Enquiry</Tag>
          <h2
            className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Need Production-Ready{" "}
            <span className="text-accent-gold">Brass or Copper</span> Components?
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Share your drawing, target material, quantity, and finishing requirement.
            Our team will provide a practical manufacturing response.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-10 py-4 text-xs font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors hover:shadow-xl hover:shadow-accent-gold/20"
          >
            Request Manufacturing Quote
          </Link>
        </div>
      </section>
    </>
  );
}
