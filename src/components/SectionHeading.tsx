import type { ReactNode } from "react";

export default function SectionHeading({
  kicker,
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: {
  kicker?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {kicker && <p className="kicker mb-1">{kicker}</p>}
      {eyebrow && (
        <p className={`eyebrow mb-2 ${light ? "!text-tangerine" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`text-3xl sm:text-[2.4rem] leading-tight ${
          light ? "!text-white" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-lg leading-relaxed ${
            light ? "text-white/85" : "text-slatey"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
