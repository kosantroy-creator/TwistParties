export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-hairline rounded-[var(--radius-card)] border border-hairline bg-white px-6 shadow-[var(--shadow-soft)]">
      {items.map((item) => (
        <details key={item.q} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-ink">
            {item.q}
            <i className="ti ti-chevron-down text-xl text-sky transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="mt-3 text-slatey">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
