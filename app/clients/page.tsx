import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "Trusted by global leaders in electrical, automotive, sanitary, and gas fittings sectors. Discover why leading OEMs choose New Perfect Incorporation for brass and copper component machining.",
  keywords: [
    "brass component clients",
    "B2B metal supplier clients",
    "industrial contract partners",
    "Panasonic Godrej supplier",
    "export customer portfolio",
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
const CLIENTS = [
  { name: "Godrej", logo: "/images/clients/godrej.png", sector: "Appliances & Security" },
  { name: "Panasonic", logo: "/images/clients/panasonic.png", sector: "Consumer Electronics & Systems" },
  { name: "GreatWhite", logo: "/images/clients/greatwhite.png", sector: "Electrical & Switchgear" },
  { name: "Imperial Auto", logo: "/images/clients/imperial-auto.png", sector: "Automotive Transmission & Fluid" },
  { name: "ELCOM", logo: "/images/clients/elcom.png", sector: "Electronics & Electromechanical" },
  { name: "Supreme", logo: "/images/clients/supreme.png", sector: "Piping & Polymer Systems" },
  { name: "Bentlay", logo: "/images/clients/bentlay.png", sector: "Plumbing & Sanitary Solutions" },
  { name: "APTIV", logo: "/images/clients/aptiv.png", sector: "Automotive & Mobility Architecture" },
  { name: "Georg Fischer (+GF+)", logo: "/images/clients/georg-fischer.png", sector: "Flow Solutions & Industrial Piping" },
  { name: "CAHORS", logo: "/images/clients/cahors.png", sector: "Energy & Telecommunication Networks" },
  { name: "Dhoot Automotive Systems", logo: "/images/clients/dhoot.png", sector: "Automotive Wiring & Electronics" },
  { name: "Alwasail", logo: "/images/clients/alwasail.png", sector: "Industrial & Agricultural Piping" },
  { name: "Brothers Plast Tech", logo: "/images/clients/brothers.png", sector: "Plastic Moulding & Technical Parts" },
];

const TRUST_STATS = [
  { val: "2007", label: "Established" },
  { val: "ISO 9001", label: "2015 Certified" },
  { val: "110+", label: "Machinery Fleet" },
  { val: "50,000", label: "Sq Ft Facility" },
  { val: "Multi-Sector", label: "Coverage" },
  { val: "Export-Ready", label: "Global supply" },
];

const WHY_CARDS = [
  {
    title: "Consistent Quality",
    desc: "Controlled inspection pipelines and 100% manual visual checking on every single dispatch",
  },
  {
    title: "Custom Specifications",
    desc: "Components manufactured exactly to custom drawings, samples, grades, and finishing codes",
  },
  {
    title: "Transparent Quotations",
    desc: "Rapid-response pricing with clear item descriptions and no hidden revision charges.",
  },
  {
    title: "Scalable Production",
    desc: "110+ specialised machines operating from our 50,000 sq. ft. Jamnagar facility to support high-volume OEM requirements.",
  },
  {
    title: "Inspection Discipline",
    desc: "Calibrated digital metrology, vision measuring systems, and rigorous PPAP Level III support.",
  },
  {
    title: "Responsive Communication",
    desc: "Direct access to production engineering and sales specialists for prompt responses.",
  },
];

const SECTORS = [
  "Electrical & Electronics",
  "Automotive",
  "Plastic & Rubber Molding",
  "Sanitary & Hardware",
  "Gas / CNG / LPG",
  "General Industrial",
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function ClientsPage() {
  return (
    <>
      {/* 1. HERO ──────────────────────────────────────────── */}
      <section className="relative h-[760px] flex items-center bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/factory-floor.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/97 via-primary-dark/88 to-primary-dark/55" />
        <div className="absolute inset-0 bg-primary-dark/25" />
        <div className="absolute inset-y-0 right-[20%] w-px bg-white/5 hidden xl:block" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-2xl space-y-6">
            <Tag>Global Client Base</Tag>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.08] tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Trusted by <span className="text-accent-gold">Industry Leaders</span>
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-accent-gold shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-white/95 leading-relaxed">
                A growing roster of valued clients across sectors
              </p>
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
              New Perfect Incorporation supplies precision components to
              companies across electrical, automotive, plastics, hardware, industrial, and
              related manufacturing sectors.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors"
            >
              Become a Manufacturing Partner
            </Link>
          </div>
        </div>
      </section>

      {/* 2. LOGO GRID ─────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Corporate Roster"
            title="Valued Partnerships"
            sub="OEM brands and manufacturers that trust New Perfect Incorporation for precision supply."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="group bg-white border border-zinc-200 hover:border-accent-gold p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md relative overflow-hidden min-h-[160px]"
              >
                {/* Accent line reveal on card bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-gold opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative w-full h-14 flex items-center justify-center p-2 mb-2 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={150}
                    height={56}
                    className="max-h-12 w-auto object-contain object-center"
                  />
                </div>

                <span
                  className="text-xs font-bold uppercase tracking-wider text-zinc-800 group-hover:text-primary-dark transition-colors font-sans mt-1"
                >
                  {c.name}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-zinc-400 mt-1 font-mono font-medium leading-tight">
                  {c.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRUST METRICS ─────────────────────────────────── */}
      <section className="py-14 lg:py-16 bg-primary-dark border-y border-white/5">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
            {TRUST_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-primary-dark hover:bg-primary-light px-3 sm:px-4 py-8 flex flex-col items-center justify-center text-center transition-colors duration-300 group"
              >
                <span
                  className="text-xl sm:text-2xl font-black text-accent-gold leading-none whitespace-nowrap"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {stat.val}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-2 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CLIENTS WORK WITH US ─────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Supplier Credibility"
            title="Why Clients Work With Us"
            sub="The attributes that position us as a reliable long-term supply partner."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {WHY_CARDS.map((item) => (
              <div
                key={item.title}
                className="group bg-bg-warm border border-zinc-200 hover:border-accent-gold p-7 lg:p-8 transition-all duration-300 hover:shadow-md relative overflow-hidden flex flex-col justify-between"
              >
                {/* Accent top gold line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-gold group-hover:w-full transition-all duration-500" />

                <div>
                  <div className="w-8 h-8 rounded bg-primary-dark/5 text-accent-gold flex items-center justify-center mb-5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4
                    className="text-base font-black uppercase tracking-wide text-primary-dark group-hover:text-accent-gold transition-colors mb-2.5 font-display"
                  >
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTOR TRUST STRIP ────────────────────────────── */}
      <section className="py-12 lg:py-14 bg-bg-warm border-b border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
            Sectors Covered Under Contract Supply
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {SECTORS.map((sec) => (
              <span
                key={sec}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-dark bg-white border border-zinc-200 hover:border-accent-gold hover:text-accent-gold transition-colors cursor-default"
              >
                {sec}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION ───────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Tag>Contract Manufacturing</Tag>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-primary-dark leading-[1.15]"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Become Our Next <span className="text-accent-gold">Long-Term Partner</span>
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto" />
          <p className="text-sm sm:text-base text-zinc-500 leading-relaxed max-w-xl mx-auto">
            Send us your requirement and our team will help convert it into a precise,
            production-ready component.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors hover:shadow-xl hover:shadow-accent-gold/20"
            >
              Start an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
