import Image from "next/image";

interface CertificationCardProps {
  title: string;
  authority: string;
  number: string;
  description: string;
  image: string;
}

export default function CertificationCard({
  title,
  authority,
  number,
  description,
  image,
}: CertificationCardProps) {
  return (
    <div className="bg-white border border-zinc-200 hover:border-accent-gold p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-center md:items-start group">
      {/* Icon Badge Section */}
      <div className="relative w-20 h-20 bg-zinc-50 border border-zinc-200 p-2 shrink-0 flex items-center justify-center rounded-full group-hover:bg-bg-warm transition-colors duration-300">
        <svg className="w-10 h-10 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      </div>

      {/* Info Section */}
      <div className="flex-grow text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
          <h3 className="text-lg font-serif font-bold text-primary-dark uppercase tracking-wide group-hover:text-accent-gold transition-colors duration-300">
            {title}
          </h3>
          <span className="text-[11px] font-bold tracking-wider text-accent-gold uppercase mt-1 md:mt-0">
            {authority}
          </span>
        </div>
        
        <div className="inline-block bg-bg-warm border border-zinc-200 text-primary-dark font-mono text-[10px] uppercase px-2.5 py-1 mb-4">
          {number}
        </div>
        
        <p className="text-sm text-zinc-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
