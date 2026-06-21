import { trustPoints } from "../lib/site";

export default function TrustStrip() {
  return (
    <section className="bg-deepsea text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-7 text-center md:grid-cols-4">
        {trustPoints.map((p) => (
          <div key={p.text} className="flex flex-col items-center gap-1.5">
            <i className={`ti ${p.icon} text-2xl text-yellow`} aria-hidden="true" />
            <span className="text-sm font-medium leading-snug">{p.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
