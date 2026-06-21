import Reveal from "./Reveal";
import { addOns } from "../lib/site";

export default function AddOnGrid() {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-white clay">
      <Reveal stagger className="grid sm:grid-cols-2">
        {addOns.map((a, i) => (
          <div
            key={a.title}
            className={`flex items-center gap-4 p-5 ${
              i % 2 === 0 ? "sm:border-r sm:border-hairline" : ""
            } ${i >= 2 ? "border-t border-hairline" : ""}`}
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-grape/10 text-2xl text-grape">
              <i className={`ti ${a.icon}`} aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-display text-lg text-ink">{a.title}</h4>
            </div>
            <span className="shrink-0 rounded-full bg-cloud px-3 py-1 text-xs font-bold text-deepsea">
              {a.tag}
            </span>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
