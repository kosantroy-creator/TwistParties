import { stats } from "../lib/site";

export default function StatStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-2 gap-y-6 rounded-[var(--radius-card)] border border-hairline bg-white p-7 clay md:grid-cols-4 md:gap-y-0 md:p-9">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center text-center md:px-4 ${
              i > 0 ? "md:border-l md:border-hairline" : ""
            }`}
          >
            <p className="font-display text-4xl font-bold text-deepsea md:text-5xl">{s.value}</p>
            <p className="mx-auto mt-1.5 max-w-[14rem] text-sm leading-snug text-slatey">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
