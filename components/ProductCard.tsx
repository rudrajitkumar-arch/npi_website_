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
    <div className="bg-white border border-zinc-200 hover:border-accent-gold shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      {/* Product Image Section */}
      <div className="relative h-56 bg-zinc-100 overflow-hidden shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-w-7xl) 33vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-primary-dark/90 backdrop-blur-sm text-accent-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 font-mono">
          {category}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-display font-bold text-primary-dark uppercase tracking-wide mb-3 group-hover:text-accent-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Technical features list */}
        <div className="mb-4">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">
            Specifications:
          </h4>
          <ul className="space-y-1">
            {features.slice(0, 3).map((feat, index) => (
              <li key={index} className="flex items-center text-xs text-zinc-600">
                <span className="w-1.5 h-1.5 bg-accent-gold mr-2 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Materials support */}
        <div className="border-t border-zinc-100 pt-4 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-2 font-mono">
            Available Alloys:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {materials.map((mat, index) => (
              <span
                key={index}
                className="bg-bg-warm text-primary-dark text-[10px] font-semibold px-2 py-0.5 border border-zinc-200 font-mono"
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
            className="flex items-center justify-center bg-primary-dark hover:bg-primary-light text-white text-xs font-bold uppercase tracking-wider py-2.5 transition-colors duration-300 font-mono"
          >
            Inquire Now
          </Link>
          <Link
            href={`/products`}
            className="flex items-center justify-center border border-zinc-300 hover:border-accent-gold text-zinc-700 hover:text-accent-gold text-xs font-bold uppercase tracking-wider py-2.5 transition-colors duration-300 font-mono"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
