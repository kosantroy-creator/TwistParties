import { serviceAreas } from "../lib/site";

export default function ServiceAreas({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const chip =
    variant === "dark"
      ? "border-white/20 text-white/90"
      : "border-hairline text-deepsea bg-white";
  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {serviceAreas.map((a) => (
        <span
          key={a}
          className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${chip}`}
        >
          {a}
        </span>
      ))}
    </div>
  );
}
