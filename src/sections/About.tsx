import { about } from "../lib/site";
import SmartImage from "../components/SmartImage";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-full w-full rounded-[var(--radius-card)] gradient-twist opacity-20" aria-hidden="true" />
          <SmartImage
            src={about.photo}
            alt="Lauren, founder of Twist Parties, with balloon creations"
            className="relative w-full rounded-[var(--radius-card)] object-cover shadow-[var(--shadow-pop)]"
          />
        </div>
        <div>
          <p className="kicker">meet twist parties</p>
          <h2 className="mt-1 text-3xl sm:text-[2.3rem]">From farmers'-market poodles to show-stopping designs</h2>
          {about.story.map((p, i) => (
            <p key={i} className="mt-4 text-lg text-slatey">{p}</p>
          ))}
          <div className="mt-6 rounded-2xl border border-hairline bg-cloud p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-deepsea">
              Our balloon artists
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {about.artists.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-ink shadow-[var(--shadow-soft)]"
                >
                  <i className="ti ti-balloon text-twist" aria-hidden="true" /> {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
