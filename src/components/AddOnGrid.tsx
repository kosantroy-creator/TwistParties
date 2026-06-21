import { addOns } from "../lib/site";

export default function AddOnGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {addOns.map((a) => (
        <div
          key={a.title}
          className="rounded-2xl border border-hairline bg-white p-6 text-center shadow-[var(--shadow-soft)]"
        >
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-cloud text-2xl text-grape">
            <i className={`ti ${a.icon}`} aria-hidden="true" />
          </div>
          <h4 className="mt-3 font-display text-lg text-deepsea">{a.title}</h4>
          <span className="mt-2 inline-block rounded-full bg-grape/10 px-3 py-1 text-xs font-semibold text-grape">
            {a.tag}
          </span>
        </div>
      ))}
    </div>
  );
}
