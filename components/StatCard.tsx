interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

export default function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="bg-white border border-[#D8DEDC] hover:border-[#075E62] p-8 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden">
      {/* Accent corner border */}
      <div className="absolute top-0 left-0 w-2 h-0.5 bg-[#075E62] group-hover:w-full transition-all duration-300" />
      <div className="absolute top-0 left-0 w-0.5 h-2 bg-[#075E62] group-hover:h-full transition-all duration-300" />

      <div className="text-4xl sm:text-5xl font-display font-black text-[#202A2E] tracking-tight mb-2 group-hover:text-[#075E62] transition-colors duration-300">
        {value}
      </div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-[#30383C] mb-3 font-mono">
        {label}
      </h3>
      <p className="text-sm text-[#68757A] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
