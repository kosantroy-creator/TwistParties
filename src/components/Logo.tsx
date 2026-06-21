type LogoProps = {
  className?: string;
  /** "color" = gradient wordmark (default), "light" = white for dark backgrounds */
  variant?: "color" | "light";
};

export default function Logo({ className = "", variant = "color" }: LogoProps) {
  const light = variant === "light";
  return (
    <span
      className={`inline-flex items-baseline gap-1 font-display font-bold tracking-tight leading-none ${className}`}
    >
      <span className={light ? "text-white" : "text-gradient-twist"}>
        twist
        <span
          className="ml-[-2px] inline-block h-[0.42em] w-[0.42em] rotate-45 align-baseline"
          style={{
            borderRadius: "50% 50% 50% 0",
            background: light ? "#FF9E45" : "#FF7A1F",
          }}
          aria-hidden="true"
        />
      </span>
      <span
        className={`font-body font-semibold lowercase tracking-wide ${
          light ? "text-tangerine" : "text-deepsea"
        }`}
        style={{ fontSize: "0.42em" }}
      >
        parties
      </span>
    </span>
  );
}
