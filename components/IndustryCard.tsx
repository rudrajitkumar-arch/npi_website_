import Image from "next/image";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export default function IndustryCard({
  title,
  description,
  icon,
  image,
}: IndustryCardProps) {
  // SVG Icon mapping
  const renderIcon = (type: string) => {
    switch (type) {
      case "electrical":
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "automotive":
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case "plumbing":
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case "gas":
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.985A7.953 7.953 0 0020 12a8 8 0 00-8-8a8 8 0 00-8 8a7.953 7.953 0 002.343 5.985M12 15a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
        );
      case "marine":
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        );
      case "medical":
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      default:
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-white border border-zinc-200 hover:border-accent-gold shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      {/* Visual Section */}
      <div className="relative h-48 w-full overflow-hidden bg-primary-dark">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-w-7xl) 33vw, 100vw"
          className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-85" />
        
        {/* Floating Icon */}
        <div className="absolute bottom-4 left-4 p-2 bg-accent-gold text-white rounded shadow-md group-hover:bg-white group-hover:text-accent-gold transition-colors duration-300">
          {renderIcon(icon)}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-serif font-bold text-primary-dark uppercase tracking-wide mb-3 group-hover:text-accent-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-zinc-500 leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}
