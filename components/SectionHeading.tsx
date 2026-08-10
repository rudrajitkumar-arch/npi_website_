interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignmentClass}`}>
      {subtitle && (
        <span
          className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-3 font-mono ${
            dark ? "text-accent-gold" : "text-accent-gold"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-4xl font-display font-bold uppercase tracking-wide leading-tight ${
          dark ? "text-white" : "text-primary-dark"
        }`}
      >
        {title}
      </h2>
      <div className="w-16 h-1 bg-accent-gold mt-4" />
    </div>
  );
}
