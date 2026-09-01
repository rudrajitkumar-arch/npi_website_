import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Quality & Certifications",
  description:
    "ISO 9001:2015 certified quality management at New Perfect Incorporation — 100% visual inspection, calibrated metrology, PPAP Level III documentation, RoHS compliance, and controlled production processes.",
  keywords: [
    "ISO 9001:2015 brass manufacturer",
    "RoHS compliant components",
    "PPAP Level III documentation",
    "brass quality inspection Jamnagar",
    "precision component metrology",
    "zero defect manufacturing India",
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
const QUALITY_CARDS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "In-Process Inspection",
    desc: "Cross-checks at every production stage — raw material intake, semi-finished, and pre-dispatch — to catch deviation before it becomes defect",
    stat: "100%",
    statLabel: "Stage Coverage",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "100% Visual Inspection",
    desc: "Every component is individually reviewed before dispatch under disciplined defect prevention and controlled inspection protocols",
    stat: "Zero-Defect",
    statLabel: "Quality Target",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Calibrated Instruments",
    desc: "All measurement equipment is maintained and calibrated on strict schedules. Instrument records are available for customer review",
    stat: "Scheduled",
    statLabel: "Calibration Cycle",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Advanced Metrology",
    desc: "Continuously upgraded checking technology including vision measuring, profile projection, and digital gauging across all production lines",
    stat: "Upgraded",
    statLabel: "Continuously",
  },
];

const METROLOGY = [
  "Micrometers",
  "Vernier Calipers",
  "Pin & Plug Gauges",
  "Profile Projector",
  "Vision Measuring System",
  "Hardness Testers",
  "Digital Vernier",
  "Digital Micrometers",
  "Thread & Pin Gauges",
  "Radius Gauges",
  "Degree Protractors",
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Enquiry & Order",
    desc: "Customer enquiry reviewed, drawings evaluated, and order confirmed with agreed specs",
  },
  {
    num: "02",
    title: "Design & Sampling",
    desc: "Engineering review, tool design, master sample production, and customer approval",
  },
  {
    num: "03",
    title: "Raw Material Procurement",
    desc: "Verified alloy grades sourced from approved suppliers with material test certificates",
  },
  {
    num: "04",
    title: "Manufacturing Process",
    desc: "CNC/automatic machining, secondary operations, and plating under in-process controls",
  },
  {
    num: "05",
    title: "Quality Testing",
    desc: "Dimensional checks, visual inspection, calibrated metrology, and PPAP records compiled",
  },
  {
    num: "06",
    title: "Dispatch to Customer",
    desc: "Packed, labelled, and documented to customer requirements. Export-ready by default",
  },
];

const CERTS = [
  {
    code: "ISO",
    title: "ISO 9001:2015",
    sub: "Quality Management System",
    desc: "Certified quality management across all production, inspection, and customer satisfaction processes",
    color: "border-accent-gold/40 bg-accent-gold/5",
    badge: "text-accent-gold",
    logo: "/images/certificate_images/iso.png",
  },
  {
    code: "RoHS",
    title: "RoHS Compliant",
    sub: "Restriction of Hazardous Substances",
    desc: "All brass, copper, and steel components manufactured within EU Directive 2011/65/EU hazardous substance limits.",
    color: "border-green-500/30 bg-green-500/5",
    badge: "text-green-400",
    logo: "/images/certificate_images/rohs.png",
  },
  {
    code: "UDYAM",
    title: "UDYAM Registered",
    sub: "Govt. of India — Ministry of MSME",
    desc: "Registered MSME enterprise under the Government of India's Udyam Recognition Framework",
    color: "border-blue-400/30 bg-blue-400/5",
    badge: "text-blue-400",
    logo: "/images/certificate_images/msme.png",
  },
  {
    code: "H&S",
    title: "Health & Environmental",
    sub: "Floor-Level Policy & Training",
    desc: "Employee awareness programmes, hazard training, and environmental compliance maintained at production floor level",
    color: "border-zinc-400/30 bg-zinc-400/5",
    badge: "text-zinc-400",
    logo: "/images/certificate_images/hse.png",
  },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function QualityPage() {
  return (
    <>
      {/* 1. HERO ──────────────────────────────────────────── */}
      <section className="relative h-[760px] flex items-center bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/header_images/quality.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/97 via-primary-dark/88 to-primary-dark/55" />
        <div className="absolute inset-0 bg-primary-dark/25" />
        <div className="absolute inset-y-0 right-[20%] w-px bg-white/5 hidden xl:block" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-2xl space-y-6">
            <Tag>Quality Assurance</Tag>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.08] tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Quality You{" "}
              <span className="text-accent-gold">Can Measure</span>
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-accent-gold shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-white/95 leading-relaxed">
                100% visual inspection. Zero compromise on defects
              </p>
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
              Every component moves through controlled checks from raw material to dispatch,
              supported by calibrated instruments, upgraded metrology systems, and
              ISO-certified quality management
            </p>
            <a
              href="#certifications"
              className="inline-flex px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors"
            >
              View Certifications
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUALITY SYSTEM CARDS ──────────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Quality System"
            title="Our Quality Standards"
            sub="Four pillars of measurable, repeatable quality — built into every production run."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_CARDS.map((q) => (
              <div
                key={q.title}
                className="group bg-white border border-zinc-200 hover:border-accent-gold p-7 lg:p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Gold top slide */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-gold group-hover:w-full transition-all duration-500" />

                {/* Icon */}
                <div className="w-12 h-12 bg-primary-dark group-hover:bg-accent-gold flex items-center justify-center mb-5 text-white transition-colors duration-300 shrink-0">
                  {q.icon}
                </div>

                <h3
                  className="text-sm font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-3"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {q.title}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed flex-1">{q.desc}</p>

                {/* Stat pill */}
                <div className="mt-5 pt-4 border-t border-zinc-100 flex items-baseline gap-2">
                  <span
                    className="text-lg font-black text-accent-gold leading-none"
                    style={{ fontFamily: "var(--font-serif-display)" }}
                  >
                    {q.stat}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                    {q.statLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. METROLOGY TOOLKIT ─────────────────────────────── */}
      <section className="py-14 lg:py-16 bg-primary-dark border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Tag>Measurement Equipment</Tag>
            <h2
              className="mt-4 text-2xl sm:text-3xl font-black uppercase text-white tracking-tight"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Metrology Toolkit
            </h2>
            <div className="mt-4 w-12 h-1 bg-accent-gold mx-auto" />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {METROLOGY.map((tool) => (
              <span
                key={tool}
                className="group px-4 py-2.5 text-[10px] font-mono font-bold uppercase tracking-widest border border-white/15 hover:border-accent-gold text-zinc-400 hover:text-accent-gold transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BUSINESS PROCESS ──────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Production Control"
            title="Business Process"
            sub="Every order moves through the same disciplined sequence — consistency is what makes production repeatable at scale."
          />

          {/* Desktop: card row */}
          <div className="hidden md:grid grid-cols-6 gap-0 relative">
            {/* Connector line behind cards */}
            <div className="absolute top-8 left-[8%] right-[8%] h-px bg-accent-gold/25 pointer-events-none" />

            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center group px-2">
                {/* Node */}
                <div className="w-16 h-16 rounded-full bg-primary-dark group-hover:bg-accent-gold border-2 border-accent-gold/30 group-hover:border-accent-gold flex flex-col items-center justify-center transition-all duration-300 z-10 mb-4 shrink-0">
                  <span className="text-[9px] font-black uppercase tracking-widest text-accent-gold group-hover:text-white transition-colors">
                    Step
                  </span>
                  <span
                    className="text-lg font-black text-white leading-none"
                    style={{ fontFamily: "var(--font-serif-display)" }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Card */}
                <div className="bg-white border border-zinc-200 group-hover:border-accent-gold p-4 transition-all duration-300 group-hover:shadow-lg w-full">
                  <h3
                    className="text-[10px] font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-serif-display)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[10px] text-zinc-400 leading-snug">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-accent-gold/30" />
            <div className="space-y-6">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.num} className="relative group">
                  <div className="absolute -left-[21px] top-3 w-5 h-5 rounded-full bg-primary-dark border-2 border-accent-gold flex items-center justify-center group-hover:bg-accent-gold transition-colors">
                    <span className="text-[8px] font-black text-white">{i + 1}</span>
                  </div>
                  <div className="bg-white border border-zinc-200 group-hover:border-accent-gold p-5 transition-all duration-300">
                    <span className="text-[9px] font-black text-accent-gold uppercase tracking-widest block mb-1">
                      {step.num}
                    </span>
                    <h3
                      className="text-sm font-black uppercase text-primary-dark group-hover:text-accent-gold transition-colors mb-2"
                      style={{ fontFamily: "var(--font-serif-display)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS ────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-100" id="certifications">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Certified & Compliant"
            title="Certifications & Compliance"
            sub="Independently verified standards and government-recognised registrations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTS.map((c) => (
              <div
                key={c.title}
                className={`group border ${c.color} hover:border-accent-gold/60 p-7 lg:p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between`}
              >
                <div>
                  {/* Badge */}
                  <div className="mb-5">
                    <span
                      className={`inline-block text-xs font-black uppercase tracking-widest ${c.badge} border border-current px-2.5 py-1`}
                    >
                      {c.code}
                    </span>
                  </div>

                  {/* Certificate Logo */}
                  <div className="h-16 flex items-center mb-4">
                    <Image
                      src={c.logo}
                      alt={c.title}
                      width={100}
                      height={64}
                      style={{ width: "auto", height: "auto" }}
                      className="max-h-14 max-w-[120px] object-contain object-left group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3
                    className="text-sm font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-1"
                    style={{ fontFamily: "var(--font-serif-display)" }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-3">
                    {c.sub}
                  </p>
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PPAP / DOCUMENTATION ──────────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div>
              <Tag>PPAP &amp; Documentation</Tag>
              <h2
                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.15] tracking-tight text-primary-dark mb-5"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                Documentation for{" "}
                <span className="text-accent-gold">Reliable Supply</span>
              </h2>
              <div className="w-12 h-1 bg-accent-gold mb-6" />
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                New Perfect Incorporation supports{" "}
                <strong>PPAP Level III documentation</strong> and maintains master samples of
                every product to improve repeatability, production control, and customer
                confidence.
              </p>
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                Our documentation capability means customers receive full traceability from
                raw material through manufacturing to final dispatch — with records available
                for audit at any point in the supply chain.
              </p>
            </div>

            {/* Right: doc capability cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {[
                {
                  title: "PPAP Level III",
                  desc: "Full Production Part Approval Process documentation package",
                },
                {
                  title: "Master Samples",
                  desc: "Reference samples maintained for every product in production",
                },
                {
                  title: "Material Traceability",
                  desc: "Alloy grade, heat number, and MTC records retained per batch",
                },
                {
                  title: "Inspection Records",
                  desc: "Dimensional and visual inspection logs available per shipment",
                },
              ].map((d) => (
                <div
                  key={d.title}
                  className="group bg-white border border-zinc-200 hover:border-accent-gold p-5 lg:p-6 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    {/* Folder icon */}
                    <svg
                      className="w-5 h-5 text-accent-gold mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                      />
                    </svg>
                    <h4
                      className="text-xs sm:text-sm font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-1.5"
                      style={{ fontFamily: "var(--font-serif-display)" }}
                    >
                      {d.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed mt-2">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA ───────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-24 bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/inspection.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary-dark/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Tag>Quality Consultation</Tag>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.15]"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Need Certified Component{" "}
            <span className="text-accent-gold">Manufacturing?</span>
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto" />
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl mx-auto">
            Speak with our team about quality requirements, drawings, inspection needs,
            and production documentation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?subject=quality"
              className="inline-flex px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors hover:shadow-xl hover:shadow-accent-gold/20"
            >
              Talk to Quality Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
