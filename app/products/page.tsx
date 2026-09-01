import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Precision brass inserts, fittings, fasteners, cable glands, CNC turned parts, copper, bronze, and gunmetal components from New Perfect Incorporation — Jamnagar, India. Custom alloy grades and surface finishes available.",
  keywords: [
    "brass inserts manufacturer",
    "brass fittings exporter",
    "brass fasteners India",
    "CNC turned brass parts",
    "brass cable glands",
    "copper bronze components Jamnagar",
    "custom brass components manufacturer",
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

/* ─── PRODUCT DATA ───────────────────────────────────────── */
const CATEGORIES = [
  {
    id: "brass-inserts",
    title: "Brass Inserts",
    badge: "Moulding & Threaded",
    img: "/images/product_images/brass_inserts.jpg",
    desc: "Precision-machined threaded and knurled brass inserts designed for high pull-out resistance and torque retention in plastics, CPVC/PPR mouldings, and composite assemblies.",
    items: [
      "Brass knurled inserts (straight, diamond & helical)",
      "Brass threaded inserts & blind inserts",
      "Brass CPVC / PPR fitting inserts",
      "Brass hex & square inserts",
      "Brass compression limiters",
    ],
    applications: [
      "Plastic Moulding",
      "CPVC / PPR Piping",
      "Automotive Assemblies",
      "Electronics Enclosures",
    ],
  },
  {
    id: "brass-fittings",
    title: "Brass Fittings",
    badge: "Fluid & Gas Control",
    img: "/images/product_images/brass_fitting.jpg",
    desc: "High-integrity sanitary, plumbing, and pipe fittings machined to exact thread standards for leak-proof fluid, air, and gas distribution systems.",
    items: [
      "Brass sanitary & plumbing fittings",
      "Brass pipe fittings, adapters & elbows",
      "Brass nipples & hose barbs",
      "Brass fitting nuts & unions",
      "Chrome-plated (CP) brass fittings",
    ],
    applications: [
      "Sanitary & Plumbing",
      "Water Supply Networks",
      "Pneumatic Systems",
      "Gas & Fluid Lines",
    ],
  },
  {
    id: "brass-forging",
    title: "Brass Forging & Casting Components",
    badge: "High-Pressure Duty",
    img: "/images/product_images/brass_forging_casting_components.jpg",
    desc: "Hot-forged and precision-cast components engineered for superior structural density, high burst resistance, and heavy-duty mechanical reliability.",
    items: [
      "Bronze pipe fittings & heavy flanges",
      "Brass forged valve bodies & fittings",
      "Custom brass forging components",
      "Gunmetal casting parts",
    ],
    applications: [
      "High-Pressure Valves",
      "Firefighting Equipment",
      "Marine Hardware",
      "Heavy Machinery",
    ],
  },
  {
    id: "brass-engineering",
    title: "Brass Engineering Components",
    badge: "Custom Engineered",
    img: "/images/product_images/brass_inserts.jpg",
    desc: "Custom-engineered brass components manufactured strictly to client blueprints, technical drawings, and OEM specifications for specialized machinery.",
    items: [
      "Brass heater & geyser parts",
      "Precision medical device components",
      "Brass radiator keys & valves",
      "Cable grippers & suspension fittings",
      "Brass LPG gas fittings",
    ],
    applications: [
      "Thermal Appliances",
      "Medical Devices",
      "Lighting & Grippers",
      "LPG Gas Systems",
    ],
  },
  {
    id: "earthing-lightning",
    title: "Earthing & Lightning Protection",
    badge: "High Conductivity",
    img: "/images/product_images/earthing_lightning_protection.png",
    desc: "High-conductivity grounding components and electrical hardware built to safeguard substations, transmission networks, and industrial electrical installations.",
    items: [
      "Earth clamps & rod accessories",
      "Lightning protection conductors & air terminals",
      "Brass transformer parts & busbar studs",
      "Grounding connectors & tape clips",
    ],
    applications: [
      "Power Distribution",
      "Electrical Substations",
      "Transformer Stations",
      "Building Grounding",
    ],
  },
  {
    id: "brass-fasteners",
    title: "Brass Fasteners & Fixings",
    badge: "Corrosion-Resistant",
    img: "/images/product_images/brass_fasteners_fixings.jpg",
    desc: "Corrosion-resistant precision standard and custom threaded fasteners engineered for dependable mechanical joining in critical B2B equipment.",
    items: [
      "Brass anchors (drop-in, wedge, expansion)",
      "Brass bolts & machine screws",
      "Brass hex, lock & square nuts",
      "Brass studs & threaded rods",
      "Precision plain & spring washers",
    ],
    applications: [
      "Electrical Switchgear",
      "Marine Assemblies",
      "Construction Fixing",
      "HVAC Fabrication",
    ],
  },
  {
    id: "cable-glands",
    title: "Brass Cable Glands & Accessories",
    badge: "Ingress & Retention",
    img: "/images/product_images/brass_cable_glands_accessories.jpg",
    desc: "Industrial and commercial cable glands designed to provide mechanical cable retention, earth continuity, and environmental ingress sealing.",
    items: [
      "Industrial cable glands (armoured & unarmoured)",
      "Brass cable accessories & locknuts",
      "Earth tags, adaptors & reducers",
      "PVC shrouds & stoppers",
    ],
    applications: [
      "Industrial Enclosures",
      "Marine & Offshore Cabling",
      "Power Plants",
      "Control Panels",
    ],
  },
  {
    id: "cnc-turned",
    title: "CNC Turned Parts",
    badge: "Close Tolerances",
    img: "/images/product_images/cnc-turned-components.jpg",
    desc: "High-precision multi-axis CNC turned and milled components manufactured with tight dimensional tolerances, controlled concentricity, and fine surface finishes.",
    items: [
      "Brass CNC turned parts & shafts",
      "Multi-axis CNC milled components",
      "Precision turned pins, bushes & sleeves",
      "Custom CNC turned brass hardware",
    ],
    applications: [
      "Aerospace & Defense",
      "Automotive Sensors",
      "Precision Instruments",
      "Optical Assemblies",
    ],
  },
  {
    id: "copper-bronze",
    title: "Copper / Bronze / Gunmetal Components",
    badge: "Thermal & Wear Duty",
    img: "/images/product_images/copper_bronze_gunmetal.jpg",
    desc: "Non-ferrous specialty alloy parts offering high electrical conductivity, thermal dissipation, wear resistance, and seawater corrosion resistance.",
    items: [
      "Pure copper electrical & contact components",
      "Bronze pipe fittings & heavy bushings",
      "Bronze & gunmetal casting parts",
      "Copper connectors & terminals",
    ],
    applications: [
      "Electrical Contacts",
      "Marine Seawater Systems",
      "Wear Bushings",
      "Pump & Valve Bodies",
    ],
  },
];

const SERVICES = [
  { num: "01", label: "Precision Machining" },
  { num: "02", label: "Custom Screw Machining" },
  { num: "03", label: "CNC Turning & Milling" },
  { num: "04", label: "Forging + Machining" },
  { num: "05", label: "Stamping & Marking" },
  { num: "06", label: "Brazing & Welding" },
  { num: "07", label: "Annealing & Heat Treatment" },
  { num: "08", label: "Surface Cleaning & Plating" },
  { num: "09", label: "Light Assembly" },
  { num: "10", label: "Packaging & Labelling" },
];

const MATERIALS = [
  "Brass",
  "Copper",
  "Bronze",
  "Gunmetal",
  "Customer-Specified Grades",
  "Plated & Surface-Treated Finishes",
];

const FINISHES = [
  "Silver",
  "Zinc",
  "Copper",
  "Tin",
  "Nickel",
  "Chrome",
  "Gold",
  "Black Nickel",
  "Buffing",
  "Anodizing",
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function ProductsPage() {
  return (
    <>
      {/* 1. HERO ──────────────────────────────────────────── */}
      <section className="relative h-[760px] flex items-center bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/header_images/products.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/97 via-primary-dark/88 to-primary-dark/55" />
        <div className="absolute inset-0 bg-primary-dark/25" />
        <div className="absolute inset-y-0 right-[20%] w-px bg-white/5 hidden xl:block" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-2xl space-y-6">
            <Tag>Products &amp; Services</Tag>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.08] tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Range of Products{" "}
              <span className="text-accent-gold">&amp; Services</span>
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-accent-gold shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-white/95 leading-relaxed">
                Custom precision components, manufactured to the grade you specify.
              </p>
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
              New Perfect Incorporation manufactures brass, copper, bronze, gunmetal, forged,
              cast, CNC turned, and custom-machined components for a broad range of industrial
              applications.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors"
            >
              Send Product Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORY GRID ─────────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Product Portfolio"
            title="Product Categories"
            sub="Precision components across nine major product families."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                id={cat.id}
                className="group bg-white border border-zinc-200 hover:border-accent-gold transition-all duration-300 hover:shadow-2xl flex flex-col justify-between relative overflow-hidden"
              >
                {/* Gold top accent reveal */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-gold group-hover:w-full transition-all duration-500 z-20" />

                <div>
                  {/* Product Image Header */}
                  <div className="relative h-56 sm:h-64 w-full bg-primary-dark overflow-hidden shrink-0">
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/35 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="px-3 py-1 bg-primary-dark/90 backdrop-blur-sm border border-accent-gold/40 text-[10px] font-mono font-bold uppercase tracking-wider text-accent-gold shadow-sm">
                        {cat.badge}
                      </span>
                    </div>

                    {/* Title overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <h3
                        className="text-lg sm:text-xl font-black uppercase tracking-wide text-white leading-tight"
                        style={{ fontFamily: "var(--font-serif-display)" }}
                      >
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-5">
                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {cat.desc}
                    </p>

                    {/* Manufactured Component Types */}
                    <div className="border-t border-zinc-100 pt-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-2.5">
                        Key Components
                      </span>
                      <ul className="space-y-2">
                        {cat.items.map((item) => (
                          <li key={item} className="flex items-start text-xs text-zinc-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-2.5 mt-1.5 shrink-0" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Applications */}
                    <div className="border-t border-zinc-100 pt-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-2.5">
                        Relevant Applications
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.applications.map((app) => (
                          <span
                            key={app}
                            className="px-2.5 py-1 bg-bg-warm border border-zinc-200 text-[10px] font-semibold text-zinc-600 tracking-wide"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="border-t border-zinc-100 pt-5">
                    <Link
                      href={`/contact?product=${cat.id}&action=quote`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-primary-dark hover:bg-accent-gold text-white text-xs font-mono font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/20 group/btn"
                    >
                      <span>Request a Quote</span>
                      <svg
                        className="w-3.5 h-3.5 text-accent-gold group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES ──────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-primary-dark">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Manufacturing Services"
            title="Services We Provide"
            sub="End-to-end manufacturing services from raw stock to packaged, dispatch-ready components."
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10">
            {SERVICES.map((s) => (
              <div
                key={s.num}
                className="bg-primary-dark hover:bg-primary-light px-5 py-7 flex flex-col items-center text-center transition-colors duration-300 group cursor-default"
              >
                <span
                  className="text-[10px] font-black text-accent-gold/60 group-hover:text-accent-gold mb-2 transition-colors"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  {s.num}
                </span>
                <p className="text-xs font-black uppercase tracking-wide text-zinc-300 group-hover:text-white transition-colors leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MATERIAL & FINISH SUPPORT ─────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Material & Finish"
            title="Material & Finish Support"
            sub="All components manufactured to customer-specified alloy grades. Surface finishes applied in-house."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Materials */}
            <div className="bg-white border border-zinc-200 p-7 lg:p-8">
              <h3
                className="text-base font-black uppercase tracking-wide text-primary-dark mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                <span className="w-6 h-0.5 bg-accent-gold" />
                Base Materials
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {MATERIALS.map((m) => (
                  <div
                    key={m}
                    className="flex items-center gap-2.5 px-4 py-3 bg-bg-warm border border-zinc-200 hover:border-accent-gold group transition-colors cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-gold shrink-0" />
                    <span className="text-xs font-bold text-zinc-700 group-hover:text-primary-dark transition-colors">
                      {m}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-zinc-400 mt-5 leading-relaxed">
                Components can be manufactured in any customer-specified alloy grade or
                material equivalent. Share your drawing or MTC (Material Test Certificate)
                requirements and we will match them exactly.
              </p>
            </div>

            {/* Finishes */}
            <div className="bg-white border border-zinc-200 p-7 lg:p-8">
              <h3
                className="text-base font-black uppercase tracking-wide text-primary-dark mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                <span className="w-6 h-0.5 bg-accent-gold" />
                Surface Finishing Options
              </h3>
              <div className="flex flex-wrap gap-2.5 mb-5">
                {FINISHES.map((f) => (
                  <span
                    key={f}
                    className="px-3.5 py-2 text-[10px] font-black uppercase tracking-widest text-primary-dark bg-bg-warm border border-zinc-200 hover:border-accent-gold hover:text-accent-gold transition-colors cursor-default"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                All plating and surface treatment work is performed in-house using calibrated
                equipment. Thickness and adhesion are verified against customer or international
                standards before dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOM MANUFACTURING CTA ──────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Tag>Custom Manufacturing</Tag>
              <h2
                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.15] tracking-tight text-primary-dark"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                Send Your Drawing{" "}
                <span className="text-accent-gold">We&apos;ll Manufacture</span>{" "}
                to Specification
              </h2>
              <div className="mt-4 w-12 h-1 bg-accent-gold mx-auto" />
            </div>

            {/* Upload-style visual placeholder */}
            <div className="border-2 border-dashed border-zinc-300 hover:border-accent-gold bg-bg-warm transition-colors duration-300 p-8 lg:p-12 flex flex-col items-center text-center group cursor-pointer rounded-sm">
              {/* Upload icon */}
              <div className="w-16 h-16 rounded-full bg-white border-2 border-zinc-200 group-hover:border-accent-gold flex items-center justify-center mb-5 transition-colors duration-300">
                <svg
                  className="w-7 h-7 text-zinc-400 group-hover:text-accent-gold transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>

              <p className="text-sm font-black uppercase tracking-widest text-primary-dark group-hover:text-accent-gold transition-colors mb-2">
                Drop Your Drawing or Sample
              </p>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed max-w-sm">
                PDF, DWG, STEP, IGES, or JPG accepted. Include target material, quantity,
                grade, and finish requirement
              </p>

              {/* Info chips */}
              <div className="flex flex-wrap gap-2.5 justify-center mb-8">
                {[
                  "Technical Drawing",
                  "Target Material",
                  "Quantity Required",
                  "Surface Finish",
                  "Tolerance Class",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest border border-zinc-300 group-hover:border-accent-gold/40 text-zinc-500 group-hover:text-zinc-600 transition-colors"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <Link
                href="/contact?action=upload"
                className="px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors hover:shadow-lg hover:shadow-accent-gold/20"
              >
                Request a Quote
              </Link>

              <div className="text-[10px] text-zinc-400 mt-4 space-y-1">
                <p>Or email our sales team directly:</p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 font-semibold">
                  <a
                    href="mailto:info@newperfectinc.com"
                    className="text-primary-dark hover:text-accent-gold transition-colors"
                  >
                    info@newperfectinc.com
                  </a>
                  <span className="text-zinc-300">·</span>
                  <a
                    href="mailto:newperfectinc@gmail.com"
                    className="text-primary-dark hover:text-accent-gold transition-colors"
                  >
                    newperfectinc@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="relative py-20 lg:py-24 bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/shop-floor.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary-dark/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Tag>Jamnagar Manufacturing</Tag>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.15]"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Not Found What You Need?{" "}
            <span className="text-accent-gold">We Can Machine It</span>
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto" />
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl mx-auto">
            If your component is not listed, contact us directly. New Perfect Incorporation
            handles custom requirements — simply share a drawing, sample, or specification.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              href="/contact"
              className="px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors"
            >
              Send Product Enquiry
            </Link>
            <Link
              href="/capabilities"
              className="px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white border border-white/30 hover:border-accent-gold hover:text-accent-gold transition-colors"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
