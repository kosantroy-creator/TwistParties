import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { howItWorks } from "../lib/site";

export default function HowItWorks() {
  return (
    <section className="gradient-cloud">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <SectionHeading
          kicker="easy as 1, 2, 3"
          title="Booking is easy: here's how it works"
          className="mb-12"
        />
        <div className="relative">
          {/* connecting path behind the steps (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-7 hidden border-t-2 border-dashed border-sky/40 md:block"
          />
          <Reveal stagger className="relative grid gap-10 md:grid-cols-3 md:gap-6">
            {howItWorks.map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full gradient-sky-sun font-display text-2xl font-bold text-white shadow-[var(--shadow-clay)]">
                  {step.n}
                </div>
                <h3 className="mt-5 text-xl">{step.title}</h3>
                <p className="mt-2 max-w-xs text-slatey">{step.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
