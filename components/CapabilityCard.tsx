import Image from "next/image";

interface CapabilityCardProps {
  title: string;
  description: string;
  details: string[];
  image: string;
}

export default function CapabilityCard({
  title,
  description,
  details,
  image,
}: CapabilityCardProps) {
  return (
    <div className="bg-white border border-[#D8DEDC] hover:border-[#075E62] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
      {/* Visual Image Section */}
      <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full overflow-hidden bg-[#202A2E]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-w-7xl) 100vw, 50vw"
          className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#202A2E] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Text Section */}
      <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl font-display font-bold text-[#202A2E] uppercase tracking-wide mb-4">
          {title}
        </h3>
        <p className="text-sm text-[#30383C] leading-relaxed mb-6">
          {description}
        </p>

        <div className="border-t border-[#D8DEDC] pt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#075E62] mb-3 font-mono">
            Specifications / Capacity
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start text-xs text-[#68757A]">
                <svg
                  className="h-4.5 w-4.5 text-[#075E62] mr-2 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
