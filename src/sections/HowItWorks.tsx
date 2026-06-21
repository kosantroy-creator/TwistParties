import SectionHeading from "../components/SectionHeading";
import { howItWorks } from "../lib/site";

export default function HowItWorks() {
  return (
    <section className="gradient-cloud">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <SectionHeading
          kicker="easy as 1-2-3"
          title="Booking is easy — here's how it works"
          className="mb-10"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {howItWorks.map((step) => (
            <div
              key={step.n}
              className="rounded-[var(--radius-card)] border border-hairline bg-white p-7 text-center shadow-[var(--shadow-soft)]"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full gradient-sky-sun font-display text-xl font-bold text-white">
                {step.n}
              </div>
              <h3 className="mt-4 text-xl">{step.title}</h3>
              <p className="mt-2 text-slatey">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
