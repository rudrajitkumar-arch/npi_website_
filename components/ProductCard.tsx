import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  materials: string[];
  image: string;
}

export default function ProductCard({
  id,
  title,
  category,
  description,
  features,
  materials,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white border border-[#D9DEE0] hover:border-[#1E6D95] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      {/* Product Image Section */}
      <div className="relative h-56 bg-[#F5F6F4] overflow-hidden shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-w-7xl) 33vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-[#252A2D]/90 backdrop-blur-sm text-[#EAF3F7] border border-[#1E6D95]/40 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 font-mono">
          {category}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-display font-bold text-[#252A2D] uppercase tracking-wide mb-3 group-hover:text-[#1E6D95] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-[#667177] leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Technical features list */}
        <div className="mb-4">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">
            Specifications:
          </h4>
          <ul className="space-y-1">
            {features.slice(0, 3).map((feat, index) => (
              <li key={index} className="flex items-center text-xs text-[#3F474B]">
                <span className="w-1.5 h-1.5 bg-[#B9793F] mr-2 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Materials support */}
        <div className="border-t border-[#D9DEE0]/60 pt-4 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-2 font-mono">
            Available Alloys:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {materials.map((mat, index) => (
              <span
                key={index}
                className="bg-[#F5F6F4] text-[#252A2D] text-[10px] font-semibold px-2 py-0.5 border border-[#D9DEE0] font-mono"
              >
                {mat}
              </span>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Link
            href={`/contact?product=${id}`}
            className="flex items-center justify-center bg-[#1E6D95] hover:bg-[#15516F] text-white text-xs font-bold uppercase tracking-wider py-2.5 transition-colors duration-300 font-mono shadow-sm"
          >
            Inquire Now
          </Link>
          <Link
            href={`/products`}
            className="flex items-center justify-center border border-[#D9DEE0] hover:border-[#1E6D95] text-[#252A2D] hover:text-[#1E6D95] text-xs font-bold uppercase tracking-wider py-2.5 transition-colors duration-300 font-mono"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
