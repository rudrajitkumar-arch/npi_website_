import Link from "next/link";
import Image from "next/image";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

export default function CTASection({
  title = "SUBMIT YOUR TECHNICAL DRAWINGS & RECEIVE A QUOTE",
  subtitle = "CUSTOM PRECISION MACHINING SOLUTIONS",
  description = "Our engineering team reviews standard blueprints, CAD models, and technical drawings to deliver optimized quotes matching international quality tolerances.",
  backgroundImage = "/images/contact-bg.jpg",
}: CTASectionProps) {
  return (
    <section className="relative bg-primary-dark py-24 text-white overflow-hidden">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 z-10 opacity-30">
        <Image
          src={backgroundImage}
          alt="Contact Background"
          fill
          sizes="100vw"
          className="object-cover filter brightness-50 contrast-125"
        />
      </div>
      <div className="absolute inset-0 bg-primary-dark/85 z-10" />

      {/* Grid structure decorative borders */}
      <div className="absolute inset-y-0 left-[15%] w-[1px] bg-white/5 pointer-events-none hidden lg:block z-15" />
      <div className="absolute inset-y-0 right-[15%] w-[1px] bg-white/5 pointer-events-none hidden lg:block z-15" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent-gold block">
          {subtitle}
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase tracking-wide leading-tight max-w-4xl mx-auto">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto font-sans">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link
            href="/contact?action=upload"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-accent-gold bg-accent-gold hover:bg-accent-gold-hover text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/20"
          >
            Upload Technical Specifications
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-white hover:border-accent-gold hover:bg-accent-gold text-white text-xs font-bold uppercase tracking-wider transition-all duration-300"
          >
            Contact Jamnagar Office
          </Link>
        </div>
      </div>
    </section>
  );
}
