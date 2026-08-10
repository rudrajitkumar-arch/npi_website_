interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

export default function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="bg-white border border-zinc-200 hover:border-accent-gold p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
      {/* Accent corner border */}
      <div className="absolute top-0 left-0 w-2 h-0.5 bg-accent-gold group-hover:w-full transition-all duration-300" />
      <div className="absolute top-0 left-0 w-0.5 h-2 bg-accent-gold group-hover:h-full transition-all duration-300" />

      <div className="text-4xl sm:text-5xl font-display font-black text-primary-dark tracking-tight mb-2 group-hover:text-accent-gold transition-colors duration-300">
        {value}
      </div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800 mb-3 font-mono">
        {label}
      </h3>
      <p className="text-sm text-zinc-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
