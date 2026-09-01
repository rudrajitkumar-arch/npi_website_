import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "New Perfect Incorporation — ISO 9001:2015 certified precision components manufacturer in Jamnagar, Gujarat, since 2007. Learn about our history, leadership, and manufacturing capabilities.",
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
        className={`mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.15] tracking-tight ${
          light ? "text-white" : "text-primary-dark"
        }`}
        style={{ fontFamily: "var(--font-serif-display)" }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-3.5 text-sm sm:text-base max-w-2xl leading-relaxed ${
            light ? "text-zinc-400" : "text-zinc-500"
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
const STATS = [
  { val: "2007", label: "Year Founded" },
  { val: "50,000", label: "Sq Ft Facility" },
  { val: "ISO 9001", label: "2015 Certified" },
  { val: "110+", label: "Machines" },
  { val: "₹50 Cr+", label: "Annual Turnover" },
  { val: "10+", label: "Industrial Sectors" },
];

const TIMELINE = [
  {
    year: "2007",
    title: "Foundation",
    desc: "Founded by Mr. Chimanbhai Patel. Brass component manufacturing begins with modest infrastructure and strong ambition",
  },
  {
    year: "2015",
    title: "ISO Certified",
    desc: "Quality systems formalized; the factory earns ISO 9001:2015 accreditation",
  },
  {
    year: "2020",
    title: "New Leadership",
    desc: "Mr. Meet Patel takes the reins, expanding capability and market reach",
  },
  {
    year: "Today",
    title: "50,000 Sq Ft Campus",
    desc: "Thousands of product variants delivered across aerospace, medical, electrical, automotive, and industrial sectors",
  },
];

const DEPARTMENTS = [
  {
    head: "Chimanbhai Patel",
    role: "Finance Head, Founder & CEO",
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
    head: "Jeet Ajudiya",
    role: "Quality Head",
    type: "dept",
    responsibilities: [
      "Quality Control & Metrology",
      "100% Visual Inspection",
      "ISO & Compliance Audits",
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
    icon: (
      <svg className="w-7 h-7 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Precision Manufacturing",
    desc: "Tolerances down to ±0.01 mm across all CNC and VMC operations",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "Custom Component Development",
    desc: "From drawings or samples to production-ready parts, fully in-house",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Transparent Pricing",
    desc: "Clear, itemised quotations with no hidden costs or revision surprises",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "In-House Tool Making",
    desc: "Dedicated tool room for jigs, fixtures, and custom tooling — zero delay",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Strict Quality Control",
    desc: "100% visual inspection and calibrated metrology at every production stage",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Export-Ready Supply",
    desc: "Packaging, documentation, and compliance for international shipments",
  },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      {/* 1. HERO ──────────────────────────────────────────── */}
      <section className="relative h-[760px] flex items-center bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/header_images/about.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/96 via-primary-dark/85 to-primary-dark/50" />
        <div className="absolute inset-0 bg-primary-dark/30" />
        {/* Deco lines */}
        <div className="absolute inset-y-0 right-[20%] w-px bg-white/5 hidden xl:block" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-2xl space-y-6">
            <Tag>About New Perfect Incorporation</Tag>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.08] tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Brass City&apos;s Precision{" "}
              <span className="text-accent-gold">Component</span> Partner
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-accent-gold shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-white/95 leading-relaxed">
                Precision component manufacturing from Jamnagar, Gujarat, since 2007.
              </p>
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
              New Perfect Incorporation manufactures precision components for electrical,
              plumbing, automotive, aerospace, medical, sanitary, hardware, marine,
              fastener, and industrial supply chains.
            </p>
            <Link
              href="/capabilities"
              className="inline-flex px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW ──────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <SectionHead tag="Company Overview" title="Who We Are" center={false} />
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-4">
                <strong>New Perfect Incorporation</strong>{" "}
                manufactures precision components from a 50,000 sq. ft. ISO-certified facility in
                Jamnagar, Gujarat — India&apos;s Brass City. Established in 2007, the company
                supplies custom-engineered parts for electrical, fittings, plumbing, automotive,
                aerospace, medical, sanitary, hardware, marine, fastener, and general
                industrial applications.
              </p>
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed mb-6">
                With 110+ machines across all categories, rigorous in-process
                inspection, and ISO 9001:2015 certified systems, we deliver consistent
                quality to international buyers and OEMs across the globe.
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

            {/* Single Image */}
            <div className="relative h-[380px] lg:h-[440px] w-full rounded-sm overflow-hidden border border-zinc-200/80 shadow-md">
              <Image
                src="/images/factory_images/factory-indoor.png"
                alt="New Perfect Incorporation Precision Brass Manufacturing Facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 via-transparent to-transparent pointer-events-none" />
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
                className="bg-primary-dark hover:bg-primary-light px-3 sm:px-4 py-8 flex flex-col items-center justify-center text-center transition-colors duration-300 group"
              >
                <span
                  className="text-2xl sm:text-3xl font-black text-accent-gold leading-none whitespace-nowrap"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {s.val}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-2.5 leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TIMELINE ──────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Our Story"
            title="Our Journey"
            sub="From a small workshop in Jamnagar to a 50,000 Sq Ft precision manufacturing campus"
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
                  <div className="bg-white border border-zinc-200 group-hover:border-accent-gold p-6 lg:p-7 transition-all duration-300 group-hover:shadow-lg">
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
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-100">
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
                Finance Head, Founder &amp; CEO
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {DEPARTMENTS.filter((d) => d.type === "dept").map((d) => (
              <div
                key={d.role}
                className="group bg-bg-warm border border-zinc-200 hover:border-accent-gold p-7 lg:p-8 transition-all duration-300 hover:shadow-lg"
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
      <section className="py-20 lg:py-24 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Why Choose Us"
            title="Why New Perfect"
            sub="Six reasons manufacturing buyers and OEMs choose us as their preferred long-term supply partner."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CARDS.map((c) => (
              <div
                key={c.title}
                className="group bg-white border border-zinc-200 hover:border-accent-gold p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
              >
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-gold group-hover:w-full transition-all duration-500" />

                <div className="mb-4">{c.icon}</div>
                <h3
                  className="text-base font-bold uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-2.5 font-display"
                >
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA ───────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-24 bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/cnc-machine.jpg')" }}
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
            Have a Component{" "}
            <span className="text-accent-gold">Requirement?</span>
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto" />
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl mx-auto">
            Send your drawing, sample, or specification and our team will respond with a
            clear manufacturing proposal.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?action=upload"
              className="inline-flex px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors hover:shadow-xl hover:shadow-accent-gold/20"
            >
              Send Your Drawing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
