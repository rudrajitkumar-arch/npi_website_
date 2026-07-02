import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "New Perfect Incorporation manufactures precision brass & copper components for electrical, automotive, aerospace, medical, plumbing, sanitary, marine, fastener, and plastic molding industries.",
  keywords: [
    "electrical brass parts",
    "automotive components Jamnagar",
    "aerospace metal parts",
    "medical brass components",
    "marine fasteners copper",
    "B2B component manufacturing",
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
const INDUSTRIES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Electrical & Electronics",
    desc: "Precision brass and copper components for electrical assemblies, connectors, transformer parts, cable accessories, earthing, and lightning protection.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1v-1a3 3 0 016 0v1h2a1 1 0 001-1h1v-1a3 3 0 016 0v1h1a1 1 0 001-1v-4a5 5 0 00-5-5h-3" />
      </svg>
    ),
    title: "Automobiles",
    desc: "Custom-machined brass and metal parts for automotive systems, fittings, fasteners, and engineered assemblies.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: "Aerospace",
    desc: "Precision components manufactured with strict dimensional consistency and controlled production processes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1-1h-2a2 2 0 00-1 1v2a2 2 0 001 1h2a2 2 0 001-1v-2zM4.572 15.428a2 2 0 011-1h2a2 2 0 011 1v2a2 2 0 01-1 1h-2a2 2 0 01-1-1v-2zM12 3a9 9 0 00-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Medical",
    desc: "Brass and engineered components for medical equipment and precision application needs.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: "Plastic & Rubber Molding",
    desc: "Brass inserts, compression limiters, threaded inserts, and molding-related components.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Sanitary & Hardware",
    desc: "Brass fittings, plumbing fittings, CP fittings, hardware parts, pipe fittings, and related components.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.985A7.953 7.953 0 0020 12a8 8 0 00-8-8a8 8 0 00-8 8a7.953 7.953 0 002.343 5.985M12 15a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
    title: "Gas, CNG & LPG",
    desc: "Brass LPG gas fittings, gas application components, and custom machined fittings.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
      </svg>
    ),
    title: "Marine",
    desc: "Corrosion-conscious brass, bronze, and copper-alloy components for marine applications.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Fasteners",
    desc: "Brass anchors, bolts, nuts, screws, studs, washers, and custom fastener solutions.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "General Industrial",
    desc: "Custom precision components for machines, assemblies, industrial products, and OEM requirements.",
  },
];

const CAPABILITIES = [
  {
    title: "Custom Machining",
    desc: "Machining parts exactly as per technical drawings, CAD data, or master samples.",
  },
  {
    title: "High-Volume Production",
    desc: "Robust scaling infrastructure with 110+ machines handling big contract orders.",
  },
  {
    title: "Secondary Operations",
    desc: "In-house tapping, slotting, drilling, milling, and deburring to streamline supply.",
  },
  {
    title: "Surface Treatment",
    desc: "Nickel, tin, chrome, copper, silver, and gold plating options processed in-house.",
  },
  {
    title: "100% Visual Inspection",
    desc: "Critical manual inspection processes on every component batch before export.",
  },
  {
    title: "Packaging & Labelling",
    desc: "Custom barcoding, sea-worthy packaging, and shipping configurations for export routes.",
  },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function IndustriesPage() {
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
            <Tag>Markets We Serve</Tag>
            <h1
              className="text-4xl sm:text-6xl font-black uppercase leading-none tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Industries We <span className="text-accent-gold">Serve</span>
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-accent-gold shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-white/90">
                One alloying capability. Ten industries trust the result.
              </p>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
              New Perfect Incorporation supplies precision brass, copper, bronze, gunmetal,
              CNC turned, forged, cast, and custom-machined components across demanding
              industrial sectors.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 text-xs font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors"
            >
              Discuss Your Industry Requirement
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRY GRID ─────────────────────────────────── */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Industrial Sectors"
            title="Industries We Supply"
            sub="Our precision metalworking supports diverse B2B supply lines."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.title}
                className="group bg-white border border-zinc-200 hover:border-accent-gold p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top decorative line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-gold group-hover:w-full transition-all duration-500" />
                
                <div>
                  <div className="w-12 h-12 rounded bg-primary-dark/5 text-primary-dark group-hover:bg-accent-gold group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                    {ind.icon}
                  </div>

                  <h3
                    className="text-base font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-3"
                    style={{ fontFamily: "var(--font-serif-display)" }}
                  >
                    {ind.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <Link
                  href={`/contact?industry=${ind.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-accent-gold hover:text-primary-dark transition-colors"
                >
                  Discuss Requirement →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CRITICAL APPLICATION SECTION ───────────────────── */}
      <section className="relative py-24 bg-primary-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/factory-floor.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary-dark/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Tag>Repeatable Tolerances</Tag>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Built for Precision-Critical <span className="text-accent-gold">Supply Chains</span>
          </h2>
          <div className="w-14 h-1 bg-accent-gold mx-auto" />
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mx-auto font-sans">
            From electrical connectors and cable accessories to automotive, plumbing, medical,
            and industrial components, New Perfect Incorporation manufactures custom brass and
            copper parts where dimensional consistency, material quality, finishing, and
            repeatability matter.
          </p>
        </div>
      </section>

      {/* 4. CROSS-INDUSTRY CAPABILITIES ───────────────────── */}
      <section className="py-20 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Manufacturing Breadth"
            title="Cross-Industry Capabilities"
            sub="Universal operational strengths that support all industrial client sectors."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="bg-white border border-zinc-200 hover:border-accent-gold p-6 transition-all duration-300 hover:shadow-md group"
              >
                <div className="w-8 h-8 rounded bg-bg-warm text-accent-gold flex items-center justify-center mb-4 font-bold text-sm">
                  ✓
                </div>
                <h4
                  className="text-sm font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-2"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {cap.title}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION ───────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Tag>Evaluate Blueprint</Tag>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary-dark"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Looking for Components for{" "}
            <span className="text-accent-gold">Your Industry?</span>
          </h2>
          <div className="w-14 h-1 bg-accent-gold mx-auto" />
          <p className="text-sm text-zinc-500 leading-relaxed max-w-xl mx-auto">
            Share your component type, material, quantity, drawing, or sample details. Our
            team will evaluate the requirement and respond with a clear manufacturing route.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-10 py-4 text-xs font-black uppercase tracking-widest text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors hover:shadow-xl hover:shadow-accent-gold/20"
          >
            Discuss Your Requirement
          </Link>
        </div>
      </section>
    </>
  );
}
