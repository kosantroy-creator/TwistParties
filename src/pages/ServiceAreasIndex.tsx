import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import CTABand from "../components/CTABand";
import { serviceAreasData } from "../lib/serviceAreas";

export default function ServiceAreasIndex() {
  return (
    <>
      <Seo
        title="Service Areas — Balloon Twisting Across Metro Vancouver & the Fraser Valley | Twist Parties"
        description="Twist Parties brings balloon twisting and balloon decor to 20+ communities across Metro Vancouver and the Fraser Valley — find your city."
      />
      <PageHero
        eyebrow="Where we go"
        title="Service areas"
        subtitle="We bring balloon twisting and custom decor to 20+ communities across Metro Vancouver and the Fraser Valley. Find your city below."
        ctaLabel="Book Your Party"
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreasData.map((a) => (
            <Link
              key={a.slug}
              to={`/service-areas/${a.slug}`}
              className="group flex items-start gap-3 rounded-2xl border border-hairline bg-white p-5 shadow-[var(--shadow-soft)] transition hover:border-sky"
            >
              <i className="ti ti-map-pin mt-0.5 text-xl text-twist" aria-hidden="true" />
              <span>
                <span className="block font-display text-lg font-semibold text-ink group-hover:text-twist">
                  {a.name}
                </span>
                <span className="mt-0.5 block text-sm text-slatey">{a.blurb}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
