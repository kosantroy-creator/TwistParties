import { stats } from "../lib/site";

export default function StatStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-2 gap-4 rounded-[var(--radius-card)] border border-hairline bg-white p-6 shadow-[var(--shadow-soft)] md:grid-cols-4 md:p-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-bold text-gradient-twist md:text-5xl">
              {s.value}
            </p>
            <p className="mx-auto mt-1.5 max-w-[14rem] text-sm text-slatey">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
