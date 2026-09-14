interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

export default function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="bg-white border border-[#D9DEE0] hover:border-[#1E6D95] p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
      {/* Accent corner border */}
      <div className="absolute top-0 left-0 w-2 h-0.5 bg-[#1E6D95] group-hover:w-full transition-all duration-300" />
      <div className="absolute top-0 left-0 w-0.5 h-2 bg-[#1E6D95] group-hover:h-full transition-all duration-300" />

      <div className="text-4xl sm:text-5xl font-display font-black text-[#252A2D] tracking-tight mb-2 group-hover:text-[#1E6D95] transition-colors duration-300">
        {value}
      </div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-[#3F474B] mb-3 font-mono">
        {label}
      </h3>
      <p className="text-sm text-[#667177] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
