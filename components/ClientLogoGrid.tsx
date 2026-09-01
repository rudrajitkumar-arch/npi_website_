import Image from "next/image";
import { clientLogos } from "@/lib/data";

export default function ClientLogoGrid() {
  return (
    <div className="bg-white border border-zinc-200 shadow-sm">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 divide-y divide-x divide-zinc-200">
        {clientLogos.map((client, idx) => (
          <div
            key={idx}
            className="p-6 flex flex-col items-center justify-center text-center group hover:bg-bg-warm transition-colors duration-300 min-h-[140px]"
          >
            {client.logo ? (
              <div className="relative w-full h-14 flex items-center justify-center p-2 mb-2 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={56}
                  className="max-h-12 w-auto object-contain object-center"
                />
              </div>
            ) : (
              <div className="text-base font-black font-serif text-zinc-700 uppercase tracking-wider mb-2">
                {client.name}
              </div>
            )}
            
            <div className="text-[12px] font-bold text-zinc-800 uppercase tracking-tight font-sans">
              {client.name}
            </div>
            <div className="text-[9px] uppercase tracking-wider text-zinc-500 mt-1 font-mono font-medium">
              {client.industry}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
