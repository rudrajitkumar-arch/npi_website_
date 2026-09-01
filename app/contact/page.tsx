import type { Metadata } from "next";
import Link from "next/link";
import ContactFormWrapper from "./ContactFormWrapper";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Request a manufacturing quote from New Perfect Incorporation. Submit your technical drawings, material grades, and specifications for custom precision brass and copper components.",
  keywords: [
    "contact New Perfect Incorporation",
    "RFQ brass components",
    "submit blueprint Jamnagar",
    "Jamnagar brass factory contact",
    "custom manufacturing enquiry",
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
const CONTACTS = [
  { name: "Meet Patel", label: "Sales & Technical Enquiries", phone: "+91 78179 42727" },
];

const HELPER_LIST = [
  {
    title: "Drawing or Sample Reference",
    desc: "2D/3D CAD files (PDF, STEP, DWG) or physical sample parts",
  },
  {
    title: "Material Grade & Composition",
    desc: "IS 319, CZ 121, Free Cutting Brass, Copper, or custom alloy spec",
  },
  {
    title: "Target Batch & Monthly Volume",
    desc: "Initial sample run quantity vs. estimated annual production batch",
  },
  {
    title: "Dimensions & Tolerance Limits",
    desc: "Critical dimensional parameters (e.g. ±0.01 mm) & thread specs",
  },
  {
    title: "Surface Finish & Plating Specs",
    desc: "Nickel, tin, chrome, silver, gold, deburring, or mirror polish",
  },
  {
    title: "Custom Packaging Configuration",
    desc: "Export polybagging, barcode labelling, or sea-worthy wooden boxes",
  },
  {
    title: "Target Delivery Timeline",
    desc: "Required dispatch schedule, port of delivery, or incoterms",
  },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function ContactPage() {
  return (
    <>
      {/* 1. HERO ──────────────────────────────────────────── */}
      <section className="relative h-[760px] flex items-center bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/header_images/contact.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/97 via-primary-dark/88 to-primary-dark/55" />
        <div className="absolute inset-0 bg-primary-dark/25" />
        <div className="absolute inset-y-0 right-[20%] w-px bg-white/5 hidden xl:block" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-2xl space-y-6">
            <Tag>Get Quotation</Tag>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.08] tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Let&apos;s Build Something <span className="text-accent-gold">Precise,</span> Together
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-accent-gold shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-white/95 leading-relaxed">
                Share your drawing, sample, or requirement. Our team will respond with a fast and transparent quotation
              </p>
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
              For brass, copper, bronze, gunmetal, CNC turned, forged, cast, plated,
              assembled, or custom precision components, contact New Perfect Incorporation
            </p>
            <a
              href="#rfq-section"
              className="inline-flex px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION CARDS ────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            tag="Corporate Contacts"
            title="Contact Information"
            sub="Get in touch directly with our sales and engineering team."
          />

          <div className="w-full mb-6">
            {CONTACTS.map((person) => (
              <div
                key={person.name}
                className="bg-white border border-zinc-200 hover:border-accent-gold p-6 sm:p-8 transition-all duration-300 relative group overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent-gold group-hover:w-full transition-all duration-500" />
                <div>
                  <h3
                    className="text-lg sm:text-xl font-black uppercase text-primary-dark group-hover:text-accent-gold transition-colors mb-1"
                    style={{ fontFamily: "var(--font-serif-display)" }}
                  >
                    {person.name}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                    {person.label}
                  </span>
                </div>
                <a
                  href={`tel:${person.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-bg-warm group-hover:bg-primary-dark text-primary-dark group-hover:text-accent-gold border border-zinc-200 group-hover:border-primary-dark transition-all text-sm font-bold shrink-0 self-start sm:self-auto"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {person.phone}
                </a>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Emails */}
            <div className="bg-white border border-zinc-200 p-6 flex flex-col justify-center">
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                Email Addresses
              </span>
              <div className="space-y-1">
                <a href="mailto:info@newperfectinc.com" className="text-sm font-bold text-primary-dark hover:text-accent-gold transition-colors block">
                  info@newperfectinc.com
                </a>
                <a href="mailto:newperfectinc@gmail.com" className="text-sm font-bold text-primary-dark hover:text-accent-gold transition-colors block">
                  newperfectinc@gmail.com
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="bg-white border border-zinc-200 p-6 flex flex-col justify-center">
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                Corporate Site
              </span>
              <a href="https://www.newperfectinc.com" className="text-sm font-bold text-primary-dark hover:text-accent-gold transition-colors block">
                www.newperfectinc.com
              </a>
            </div>

            {/* Registered Address */}
            <div className="bg-white border border-zinc-200 p-6 flex flex-col justify-center">
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                Registered Office Address
              </span>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Plot No. 4145, GIDC Phase 3, Dared, Jamnagar, Gujarat, India – 361004
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RFQ & HELPER PANEL SECTION ────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-100" id="rfq-section">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Form Column */}
            <div className="lg:col-span-8 flex flex-col">
              <ContactFormWrapper />
            </div>

            {/* Helper Column */}
            <div className="lg:col-span-4 bg-white border border-zinc-200/90 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden hover:border-accent-gold/40 transition-all duration-300 flex flex-col justify-between h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gold" />

              <div>
                <div className="border-b border-zinc-100 pb-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent-gold block mb-1">
                    Engineering Guidelines
                  </span>
                  <h4
                    className="text-xl font-black uppercase text-primary-dark tracking-tight"
                    style={{ fontFamily: "var(--font-serif-display)" }}
                  >
                    What to Include
                  </h4>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed font-sans mb-4">
                  To ensure an accurate assessment and the fastest possible turnaround, please
                  provide as much detail as possible:
                </p>

                <div className="space-y-3">
                  {HELPER_LIST.map((item) => (
                    <div
                      key={item.title}
                      className="p-3 bg-bg-warm/50 border border-zinc-200/70 rounded-xl flex items-start gap-3 hover:border-accent-gold/50 transition-colors group"
                    >
                      <div className="w-5 h-5 rounded-full bg-accent-gold/15 text-accent-gold flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-gold group-hover:text-white transition-colors">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-[11px] font-black uppercase text-primary-dark tracking-wide">
                          {item.title}
                        </h5>
                        <p className="text-[11px] text-zinc-500 mt-0.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-100">
                <div className="bg-primary-dark text-white p-4 sm:p-5 rounded-xl border border-accent-gold/30 shadow-md space-y-1.5">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent-gold">
                      Quote Turnaround
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-relaxed font-sans">
                    Standard drawing enquiries are processed within 24 hours. Custom alloy forging designs or multi-part bills of materials may require up to 48 hours.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FIND US MAP SECTION ───────────────────────────── */}
      <section className="py-20 lg:py-24 bg-bg-warm border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header styled with vertical bar */}
          <div className="flex items-center justify-center gap-3 mb-10 text-center">
            <span className="w-1.5 h-8 bg-primary-dark rounded-full inline-block" />
            <h2
              className="text-2xl sm:text-3xl font-black uppercase text-primary-dark tracking-wide"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              FIND US
            </h2>
          </div>

          {/* Map Card */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/80 bg-white h-[480px] sm:h-[540px] w-full">
            {/* Google Map iframe */}
            <iframe
              title="New Perfect Incorporation Location"
              src="https://maps.google.com/maps?q=Plot%20No.%204145,%20GIDC%20Phase%203,%20Dared,%20Jamnagar,%20Gujarat%20361004&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Info Box */}
            <div className="absolute top-0 left-0 max-w-xs sm:max-w-sm w-full bg-white p-5 sm:p-7 rounded-br-2xl rounded-tl-2xl sm:rounded-tl-3xl shadow-2xl border-r border-b border-zinc-200 z-20 space-y-3">
              <div>
                <h3
                  className="text-base sm:text-lg font-black uppercase text-primary-dark leading-snug"
                  style={{ fontFamily: "var(--font-serif-display)" }}
                >
                  New Perfect Incorporation
                </h3>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                  Plot No. 4145, GIDC Phase 3, Dared, Jamnagar, Gujarat, India – 361004
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-amber-600 font-bold">
                <span>5.0</span>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-zinc-400 font-normal text-[11px]">(7 Reviews on Google)</span>
              </div>

              <div className="pt-1 flex items-center gap-2">
                <a
                  href="https://maps.app.goo.gl/vSrZ6MaU2pysBcNQ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-dark hover:bg-accent-gold text-white text-xs font-black uppercase tracking-widest rounded-lg shadow transition-all hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA ─────────────────────────────────────── */}
      <section className="relative py-20 lg:py-24 bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary-dark/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Tag>Fast Response Team</Tag>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.15]"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            Precision Starts With the <span className="text-accent-gold">Right Conversation</span>
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto" />
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl mx-auto">
            Whether you need a single custom part or ongoing production supply, our team is ready to review your requirement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <a
              href="mailto:info@newperfectinc.com"
              className="px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white bg-accent-gold hover:bg-accent-gold-hover border border-accent-gold transition-colors hover:shadow-xl hover:shadow-accent-gold/20"
            >
              Email Us
            </a>
            <a
              href="tel:+917817942727"
              className="px-9 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white border border-white/30 hover:border-accent-gold hover:text-accent-gold transition-colors"
            >
              Call Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
