import { clientLogos } from "@/lib/data";

export default function ClientLogoGrid() {
  return (
    <div className="bg-white border border-zinc-200">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y divide-x divide-zinc-200 md:divide-y-0 lg:divide-y-0">
        {clientLogos.map((client, idx) => (
          <div
            key={idx}
            className="p-8 flex flex-col items-center justify-center text-center group hover:bg-bg-warm transition-colors duration-300 min-h-[140px]"
          >
            {/* Minimalist Industrial Logo Placeholder */}
            <div className="flex items-center gap-1.5 mb-2 text-zinc-400 group-hover:text-accent-gold transition-colors duration-300">
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="font-serif font-black text-sm uppercase tracking-wider">
                {client.name.split(" ")[0]}
              </span>
            </div>
            
            <div className="text-[14px] font-bold text-zinc-800 uppercase tracking-tight font-sans">
              {client.name}
            </div>
            <div className="text-[9px] uppercase tracking-wider text-zinc-400 mt-1 font-semibold">
              {client.industry}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
