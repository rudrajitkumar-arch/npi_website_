import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Infrastructure & Facility",
  description:
    "Explore New Perfect Incorporation's 10,000 sq.m. manufacturing campus in Jamnagar, Gujarat. Equipped with 110+ advanced machines, QA inspection labs, tool rooms, and office setups.",
  keywords: [
    "brass component factory",
    "Jamnagar manufacturing unit",
    "industrial shop floor India",
    "screw machine infrastructure",
    "production capacity copper",
    "ISO 9001 factory tour",
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
const OVERVIEW_STATS = [
  { val: "10,000", label: "sq.m. Facility" },
  { val: "110+", label: "Machinery Fleet" },
  { val: "ISO 9001", label: "Quality certified" },
  { val: "End-to-End", label: "Production Flow" },
];

const GALLERY_ITEMS = [
  {
    img: "/images/factory-floor.jpg",
    title: "Automated Shop Floor",
    desc: "Machinery cells feeding high-volume brass extrusion rods and components.",
  },
  {
    img: "/images/team-office.jpg",
    title: "Modern Administration",
    desc: "Executive offices supporting sales, finance, accounts, and client relations.",
  },
  {
    img: "/images/raw-material.jpg",
    title: "Traceable Raw Material",
    desc: "Verified brass and copper stock with certified alloy verification.",
  },
  {
    img: "/images/cnc-machine.jpg",
    title: "CNC Machining Area",
    desc: "Precision turning centers processing complex components to specs.",
  },
  {
    img: "/images/cnc-machine.jpg",
    title: "Tool Making Area",
    desc: "Dedicated tool room fabricating specific fixtures, stamps, and tooling.",
  },
  {
    img: "/images/inspection.jpg",
    title: "Inspection Area",
    desc: "Quality labs verifying tolerances via digital projectors and gauging.",
  },
  {
    img: "/images/brass-components.jpg",
    title: "Packaging & Dispatch",
    desc: "Custom sorting, barcoded labelling, and sea-worthy logistics preparation.",
  },
];

const FEATURE_CARDS = [
  {
    title: "Automated Shop Floor",
    desc: "Mechanized lines from raw stock to finished parts, optimizing scaling throughput.",
  },
  {
    title: "Modern Administration",
    desc: "Professional offices supporting design, sales, finance, and client relations.",
  },
  {
    title: "Traceable Raw Material",
    desc: "Quality-sourced brass and copper material with certificates for controlled production.",
  },
  {
    title: "End-to-End Production",
    desc: "Machining, secondary operations, surface treatment, inspection, packaging, and dispatch.",
  },
];

const MACHINERY_HIGHLIGHTS = [
  { val: "35", label: "Automatic Traub Machines" },
  { val: "20", label: "Drilling & Milling Machines" },
  { val: "14", label: "CNC Turning Machines" },
  { val: "12", label: "Semi-Automated Machines" },
  { val: "8", label: "Automatic Threading Machines" },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function InfrastructurePage() {
  return (
    <>
      {/* 1. HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[68vh] flex items-center bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/shop-floor.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/97 via-primary-dark/88 to-primary-dark/55" />
        <div className="absolute inset-0 bg-primary-dark/25" />
        <div className="absolute inset-y-0 right-[20%] w-px bg-white/5 hidden xl:block" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
          <div className="max-w-2xl space-y-6">
            <Tag>Factory Tour</Tag>
            <h1
              className="text-4xl sm:text-6xl font-black uppercase leading-none tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Inside Our <span className="text-accent-gold">Facility</span>
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-accent-gold shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-white/90">
                Modern offices, automated shop floors, and quality-sourced raw material.
              </p>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
              New Perfect Incorporation operates from a 10,000 sq.m. ISO-certified facility
              in Jamnagar, Gujarat, equipped for end-to-end brass and copper component
              manufacturing.
            </p>
            <Link
              href="/capabilities"
              className="inline-flex px-8 py-3.5 text-xs font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors"
            >
              Explore Manufacturing Capability
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FACILITY OVERVIEW ─────────────────────────────── */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHead
                tag="Industrial Campus"
                title="10,000 sq.m. Manufacturing Campus"
                center={false}
              />
              <p className="text-sm text-zinc-600 leading-relaxed">
                Our Jamnagar facility supports machining, secondary operations, surface treatment
                coordination, inspection, packaging, dispatch, engineering, administration,
                sales, and client communication.
              </p>
              <p className="text-xs text-zinc-500 leading-relaxed">
                By housing our complete technical operations under a single roof, we ensure strict
                custody of raw metals, eliminate intermediate logistical delays, and apply quality
                oversight from custom metallurgy specs to final custom B2B packaging.
              </p>
            </div>

            {/* Stats Block */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {OVERVIEW_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-zinc-200 p-6 flex flex-col justify-center shadow-sm relative group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-gold" />
                  <span
                    className="text-xl sm:text-2xl font-black text-primary-dark leading-none mb-1.5"
                    style={{ fontFamily: "var(--font-serif-display)" }}
                  >
                    {stat.val}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMAGE GALLERY LAYOUT ─────────────────────────── */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Visual Tour"
            title="Infrastructure Gallery"
            sub="Step inside our Jamnagar facility — where metal is machined into precision OEM parts."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item, index) => (
              <div
                key={index}
                className="group relative h-72 overflow-hidden border border-zinc-200 bg-primary-dark"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                  <h3
                    className="text-base font-black uppercase text-white tracking-wide"
                    style={{ fontFamily: "var(--font-serif-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-zinc-300 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FACILITY FEATURE CARDS ───────────────────────── */}
      <section className="py-20 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Operations Pillars"
            title="Campus Features"
            sub="Engineered spaces layout prioritizing production speed and safety rules."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURE_CARDS.map((feat) => (
              <div
                key={feat.title}
                className="group bg-white border border-zinc-200 hover:border-accent-gold p-6 transition-all duration-300 hover:shadow-md relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-gold group-hover:w-full transition-all duration-500" />
                <h4
                  className="text-sm font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-3.5"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {feat.title}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MACHINERY HIGHLIGHT ───────────────────────────── */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4">
            <Tag>Fleet Capacity</Tag>
            <h2
              className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Machinery Core Fleet
            </h2>
            <div className="w-14 h-1 bg-accent-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-white/10 max-w-4xl mx-auto">
            {MACHINERY_HIGHLIGHTS.map((mach) => (
              <div
                key={mach.label}
                className="bg-primary-dark p-6 flex flex-col justify-center items-center text-center transition-colors duration-300 hover:bg-primary-light"
              >
                <span
                  className="text-3xl font-black text-accent-gold leading-none mb-1.5"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {mach.val}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 leading-snug">
                  {mach.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/capabilities"
            className="inline-flex px-8 py-3.5 border border-white/20 hover:border-accent-gold text-zinc-300 hover:text-accent-gold text-xs font-black uppercase tracking-widest transition-colors"
          >
            View Full Capabilities
          </Link>
        </div>
      </section>

      {/* 6. CTA SECTION ───────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Tag>Facility Inspection</Tag>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary-dark"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Visit Our Capability <span className="text-accent-gold">Before You Source</span>
          </h2>
          <div className="w-14 h-1 bg-accent-gold mx-auto" />
          <p className="text-sm text-zinc-500 leading-relaxed max-w-xl mx-auto">
            Speak with our team about production capacity, material handling, inspection, and
            long-term supply. We welcome client visits to our Jamnagar site.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-10 py-4 text-xs font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors hover:shadow-xl hover:shadow-accent-gold/20"
          >
            Schedule a Discussion
          </Link>
        </div>
      </section>
    </>
  );
}
