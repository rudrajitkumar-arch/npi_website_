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
    <div className="bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
      {/* Visual Image Section */}
      <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full overflow-hidden bg-primary-dark">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-w-7xl) 100vw, 50vw"
          className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Text Section */}
      <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark uppercase tracking-wide mb-4">
          {title}
        </h3>
        <p className="text-sm text-zinc-600 leading-relaxed mb-6">
          {description}
        </p>

        <div className="border-t border-zinc-100 pt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-accent-gold mb-3">
            Specifications / Capacity
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start text-xs text-zinc-500">
                <svg
                  className="h-4.5 w-4.5 text-accent-gold mr-2 shrink-0"
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
