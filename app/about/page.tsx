import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "New Perfect Incorporation — ISO 9001:2015 certified precision brass & copper components manufacturer in Jamnagar, Gujarat since 2007. Learn about our journey, leadership, and manufacturing capabilities.",
  keywords: [
    "about New Perfect Incorporation",
    "brass manufacturer Jamnagar",
    "copper components India",
    "ISO 9001 certified brass factory",
    "precision machining Gujarat",
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
const STATS = [
  { val: "2007", label: "Year Founded" },
  { val: "10,000", label: "sq.m. Facility" },
  { val: "ISO 9001:2015", label: "Certified" },
  { val: "110+", label: "Machines" },
  { val: "₹14.85 Cr", label: "Annual Turnover" },
  { val: "10+", label: "Industrial Sectors" },
];

const TIMELINE = [
  {
    year: "2007",
    title: "Foundation",
    desc: "Founded by Mr. Chimanbhai Patel. Brass component manufacturing begins with modest infrastructure and strong ambition.",
  },
  {
    year: "2015",
    title: "ISO Certified",
    desc: "Quality systems formalized; the factory earns ISO 9001:2015 accreditation.",
  },
  {
    year: "2020",
    title: "New Leadership",
    desc: "Mr. Meet Patel takes the reins, expanding capability and market reach.",
  },
  {
    year: "Today",
    title: "10,000 sq.m. Campus",
    desc: "Thousands of product variants delivered across aerospace, medical, electrical, automotive, and industrial sectors.",
  },
];

const DEPARTMENTS = [
  {
    head: "Chimanbhai Patel",
    role: "Founder & CEO",
    type: "founder",
    responsibilities: [],
  },
  {
    head: "Dipakbhai Ajudiya",
    role: "Production Head",
    type: "dept",
    responsibilities: [
      "Production Foreman",
      "Assembly & Quality",
      "Time Keeping",
      "Inventory Control",
    ],
  },
  {
    head: "Dipakbhai Ajudiya",
    role: "Finance Head",
    type: "dept",
    responsibilities: [
      "Financial Manager",
      "Accounts Receivable",
      "Payment Management",
    ],
  },
  {
    head: "Meet Patel",
    role: "Sales Head",
    type: "dept",
    responsibilities: [
      "Sales Manager",
      "Customer Billing",
      "Marketing & Cost Accounting",
    ],
  },
];

const WHY_CARDS = [
  {
    icon: "⚙️",
    title: "Precision Manufacturing",
    desc: "Tolerances down to ±0.01 mm across all CNC and VMC operations.",
  },
  {
    icon: "🔧",
    title: "Custom Component Development",
    desc: "From drawings or samples to production-ready parts, fully in-house.",
  },
  {
    icon: "📋",
    title: "Transparent Pricing",
    desc: "Clear, itemised quotations with no hidden costs or revision surprises.",
  },
  {
    icon: "🛠️",
    title: "In-House Tool Making",
    desc: "Dedicated tool room for jigs, fixtures, and custom tooling — zero delay.",
  },
  {
    icon: "✅",
    title: "Strict Quality Control",
    desc: "100% visual inspection and calibrated metrology at every production stage.",
  },
  {
    icon: "🌍",
    title: "Export-Ready Supply",
    desc: "Packaging, documentation, and compliance for international shipments.",
  },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      {/* 1. HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex items-center bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/factory-floor.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/96 via-primary-dark/85 to-primary-dark/50" />
        <div className="absolute inset-0 bg-primary-dark/30" />
        {/* Deco lines */}
        <div className="absolute inset-y-0 right-[20%] w-px bg-white/5 hidden xl:block" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
          <div className="max-w-2xl space-y-6">
            <Tag>About New Perfect Incorporation</Tag>
            <h1
              className="text-4xl sm:text-6xl font-black uppercase leading-none tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Brass City&apos;s Precision{" "}
              <span className="text-accent-gold">Component</span> Partner
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-accent-gold shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-white/90">
                Precision brass and copper-alloy manufacturing from Jamnagar, Gujarat since 2007.
              </p>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
              New Perfect Incorporation manufactures precision components for electrical,
              plumbing, automotive, aerospace, medical, sanitary, hardware, marine,
              fastener, and industrial supply chains.
            </p>
            <Link
              href="/capabilities"
              className="inline-flex px-8 py-3.5 text-xs font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW ──────────────────────────────── */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <SectionHead tag="Company Overview" title="Who We Are" center={false} />
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                <strong>New Perfect Incorporation</strong> manufactures precision brass and
                copper-alloy components from a 10,000&nbsp;sq.m. ISO-certified facility in
                Jamnagar — India&apos;s Brass City. Our alloying and machining expertise turns raw
                brass and copper into components trusted across industrial supply chains.
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                With over 110 machines across 11 specialised categories, a rigorous
                in-process inspection regime, and ISO 9001:2015 certified quality
                management, we deliver consistent precision to OEMs and buyers across
                the globe.
              </p>
              {/* Credential badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["ISO 9001:2015", "RoHS Compliant", "UDYAM Registered", "Est. 2007"].map(
                  (b) => (
                    <span
                      key={b}
                      className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider border border-zinc-300 text-zinc-600 bg-white"
                    >
                      {b}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3 h-[380px]">
              <div className="relative rounded-sm overflow-hidden row-span-2">
                <Image
                  src="/images/factory-floor.jpg"
                  alt="Factory floor"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary-dark/20" />
              </div>
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/images/brass-components.jpg"
                  alt="Brass components"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/images/raw-material.jpg"
                  alt="Raw material"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS ─────────────────────────────────────────── */}
      <section className="py-16 bg-primary-dark border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-primary-dark hover:bg-primary-light px-6 py-8 flex flex-col items-center text-center transition-colors duration-300 group"
              >
                <span
                  className="text-2xl sm:text-3xl font-black text-accent-gold leading-none"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {s.val}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-2 leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TIMELINE ──────────────────────────────────────── */}
      <section className="py-20 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Our Story"
            title="Our Journey"
            sub="From a small workshop in Jamnagar to a 10,000 sq.m. precision manufacturing campus."
          />

          {/* Desktop timeline: horizontal */}
          <div className="hidden md:block relative">
            {/* Connector line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-accent-gold/30" />
            <div className="grid grid-cols-4 gap-6">
              {TIMELINE.map((t, i) => (
                <div key={t.year} className="relative pt-16 group">
                  {/* Dot */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-accent-gold bg-bg-warm group-hover:bg-accent-gold transition-colors duration-300 z-10" />

                  {/* Card */}
                  <div className="bg-white border border-zinc-200 group-hover:border-accent-gold p-6 transition-all duration-300 group-hover:shadow-lg">
                    <span className="text-xs font-black uppercase tracking-widest text-accent-gold block mb-1">
                      {t.year}
                    </span>
                    <h3
                      className="text-base font-black uppercase text-primary-dark mb-3 group-hover:text-accent-gold transition-colors"
                      style={{ fontFamily: "var(--font-serif-display)" }}
                    >
                      {t.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile timeline: vertical */}
          <div className="md:hidden relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-accent-gold/30" />
            <div className="space-y-8">
              {TIMELINE.map((t) => (
                <div key={t.year} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full border-2 border-accent-gold bg-bg-warm group-hover:bg-accent-gold transition-colors duration-300" />
                  <div className="bg-white border border-zinc-200 group-hover:border-accent-gold p-5 transition-all duration-300">
                    <span className="text-xs font-black uppercase tracking-widest text-accent-gold block mb-1">
                      {t.year}
                    </span>
                    <h3
                      className="text-sm font-black uppercase text-primary-dark mb-2 group-hover:text-accent-gold transition-colors"
                      style={{ fontFamily: "var(--font-serif-display)" }}
                    >
                      {t.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP ────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Leadership"
            title="Team Structure"
            sub="Experienced leadership driving precision manufacturing and global supply."
          />

          {/* Founder card — centered, prominent */}
          <div className="flex justify-center mb-10">
            <div className="bg-primary-dark text-white border border-accent-gold/30 px-10 py-8 max-w-xs w-full text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gold" />
              <div className="w-14 h-14 rounded-full bg-accent-gold/20 border border-accent-gold/40 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-gold text-xl font-black">CP</span>
              </div>
              <h3
                className="text-lg font-black uppercase text-white"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                Chimanbhai Patel
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mt-1">
                Founder &amp; CEO
              </p>
            </div>
          </div>

          {/* Connector arrow down */}
          <div className="flex justify-center mb-10">
            <svg className="w-5 h-8 text-accent-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 32">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 0v24M5 17l7 7 7-7" />
            </svg>
          </div>

          {/* Department cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEPARTMENTS.filter((d) => d.type === "dept").map((d) => (
              <div
                key={d.role}
                className="group bg-bg-warm border border-zinc-200 hover:border-accent-gold p-7 transition-all duration-300 hover:shadow-lg"
              >
                {/* Avatar initials */}
                <div className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center mb-4 group-hover:bg-accent-gold transition-colors">
                  <span className="text-xs font-black text-white">
                    {d.head
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>

                <h3
                  className="text-sm font-black uppercase text-primary-dark group-hover:text-accent-gold transition-colors"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {d.head}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mt-0.5 mb-4">
                  {d.role}
                </p>

                <div className="border-t border-zinc-200 pt-4 space-y-1.5">
                  {d.responsibilities.map((r) => (
                    <div key={r} className="flex items-center text-[11px] text-zinc-500">
                      <span className="w-1 h-1 rounded-full bg-accent-gold mr-2 shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US ─────────────────────────────────── */}
      <section className="py-20 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Why Choose Us"
            title="Why New Perfect"
            sub="Six reasons manufacturing buyers and OEMs choose us as their long-term supply partner."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CARDS.map((c) => (
              <div
                key={c.title}
                className="group bg-white border border-zinc-200 hover:border-accent-gold p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
              >
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-gold group-hover:w-full transition-all duration-500" />

                <div className="text-3xl mb-4">{c.icon}</div>
                <h3
                  className="text-sm font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-3"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {c.title}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA ───────────────────────────────────────────── */}
      <section className="relative py-24 bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/cnc-machine.jpg')" }}
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
            Have a Component{" "}
            <span className="text-accent-gold">Requirement?</span>
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Send your drawing, sample, or specification and our team will respond with a
            clear manufacturing approach.
          </p>
          <Link
            href="/contact?action=upload"
            className="inline-flex px-10 py-4 text-xs font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors hover:shadow-xl hover:shadow-accent-gold/20"
          >
            Send Your Drawing
          </Link>
        </div>
      </section>
    </>
  );
}
