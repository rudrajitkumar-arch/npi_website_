import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t-4 border-accent-gold shrink-0">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <span
                className="text-2xl font-black uppercase tracking-wider text-white block leading-none"
                style={{ fontFamily: "var(--font-serif-display)" }}
              >
                New Perfect
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-accent-gold mt-1 block font-mono">
                Incorporation
              </span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed mb-5">
              ISO 9001:2015 certified Every Precision Components manufacturer,
              exporter &amp; supplier. Established 2007 · Jamnagar, India
            </p>
            <div className="flex flex-wrap gap-2">
              {["ISO 9001:2015", "RoHS", "UDYAM"].map((b) => (
                <span
                  key={b}
                  className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider border border-accent-gold/30 text-accent-gold font-mono"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Address & Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-5 border-b border-white/10 pb-2 font-mono">
              Registered Office
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <p>
                Plot No. 4145, GIDC Phase 3,
                <br />
                Dared, Jamnagar, Gujarat,
                <br />
                India – 361004
              </p>
              <div className="pt-1 space-y-1">
                <p>
                  <span className="text-zinc-500">W:</span>{" "}
                  <a
                    href="https://www.newperfectinc.com"
                    className="hover:text-white transition-colors"
                  >
                    www.newperfectinc.com
                  </a>
                </p>
                <p>
                  <span className="text-zinc-500">E:</span>{" "}
                  <a
                    href="mailto:info@newperfectinc.com"
                    className="hover:text-white transition-colors"
                  >
                    info@newperfectinc.com
                  </a>
                </p>
                <p>
                  <span className="text-zinc-500">E:</span>{" "}
                  <a
                    href="mailto:newperfectinc@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    newperfectinc@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Phone contacts */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-5 border-b border-white/10 pb-2 font-mono">
              Contact Persons
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              {[
                { name: "Meet Patel", phone: "+91 78179 42727" },
              ].map((p) => (
                <div key={p.name}>
                  <span className="block text-zinc-300 font-semibold">{p.name}</span>
                  <a href={`tel:${p.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                    {p.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-5 border-b border-white/10 pb-2 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Capabilities", href: "/capabilities" },
                { label: "Products", href: "/products" },
                { label: "Quality", href: "/quality" },
                { label: "Industries", href: "/industries" },
                { label: "Infrastructure", href: "/infrastructure" },
                { label: "Clients", href: "/clients" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs text-zinc-400 hover:text-white hover:translate-x-1 inline-block transition-all font-mono"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-zinc-500">
          <p>© {new Date().getFullYear()} New Perfect Incorporation. All Rights Reserved</p>
          <p className="flex gap-4">
            <Link href="/quality" className="hover:text-zinc-300 transition-colors font-mono">
              ISO 9001:2015
            </Link>
            <span>·</span>
            <Link href="/quality" className="hover:text-zinc-300 transition-colors font-mono">
              RoHS Compliant
            </Link>
            <span>·</span>
            <Link href="/about" className="hover:text-zinc-300 transition-colors font-mono">
              UDYAM Registered
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
