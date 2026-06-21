import { useParams, Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { PhotoTile } from "../components/Decorations";
import Faq from "../components/Faq";
import CTABand from "../components/CTABand";
import Button from "../components/Button";
import NotFound from "./NotFound";
import { areaBySlug } from "../lib/serviceAreas";
import { galleryTiles } from "../lib/site";

const offerings = [
  { icon: "ti-balloon", title: "Balloon twisting", body: "Guests choose from our balloon menu — from $200 + travel, best for up to 15 kids." },
  { icon: "ti-sparkles", title: "Balloon decor", body: "Custom walls, arches, columns and organic garlands — by quote, biodegradable latex." },
  { icon: "ti-confetti", title: "Party add-ons", body: "Face painting, mascots and party favours through our partner network, by request." },
];

export default function ServiceArea() {
  const { slug = "" } = useParams();
  const area = areaBySlug(slug);
  if (!area) return <NotFound />;

  const faqs = [
    { q: `How much is a balloon twister in ${area.name}?`, a: `Balloon twisting in ${area.name} starts at $200 for one hour plus a travel fee, best for up to 15 children. Public events, schools and corporate picnics have a 2-hour minimum.` },
    { q: `Do you travel to ${area.name}?`, a: `Yes — ${area.name} is one of our regular service areas. A travel fee may apply depending on the exact location and is confirmed in your quote.` },
    { q: "Can you do balloon decor too?", a: `Absolutely. We create custom balloon walls, arches, columns and organic garlands for ${area.name} events — priced by quote.` },
  ];

  return (
    <>
      <Seo
        title={`Balloon Twisting in ${area.name}, BC | Twist Parties`}
        description={`Professional balloon twisting & balloon decor in ${area.name}. ${area.blurb} Birthdays, schools, festivals & corporate events. From $200 + travel.`}
      />
      <PageHero
        eyebrow={`Serving ${area.name}, BC`}
        title={`Balloon twisting in ${area.name}`}
        subtitle={area.blurb}
        ctaLabel="Book Balloon Twisting"
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          title={`Balloon fun for every ${area.name} event`}
          className="mb-10"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {offerings.map((o) => (
            <div key={o.title} className="rounded-[var(--radius-card)] border border-hairline bg-white p-7 shadow-[var(--shadow-soft)]">
              <i className={`ti ${o.icon} text-3xl text-twist`} />
              <h3 className="mt-3 text-xl">{o.title}</h3>
              <p className="mt-2 text-slatey">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gradient-cloud">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionHeading title={`Recent balloon creations near ${area.name}`} className="mb-8" />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryTiles.slice(0, 4).map((p) => (
              <PhotoTile key={p.label} photo={p} minHeight={150} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading title={`Balloon twisting in ${area.name}: FAQ`} className="mb-10" />
        <Faq items={faqs} />
      </section>

      {area.nearby.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-slatey">Nearby areas we serve</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {area.nearby.map((s) => {
              const n = areaBySlug(s);
              if (!n) return null;
              return (
                <Link key={s} to={`/service-areas/${s}`} className="rounded-full border border-hairline bg-white px-4 py-2 text-sm font-semibold text-deepsea hover:border-sky">
                  {n.name}
                </Link>
              );
            })}
            <Link to="/service-areas" className="rounded-full border border-hairline bg-white px-4 py-2 text-sm font-semibold text-twist hover:border-twist">
              All areas →
            </Link>
          </div>
        </section>
      )}

      <div className="mt-4">
        <CTABand
          title={`Book balloon twisting in ${area.name}`}
          subtitle="Tell us your date, location and guest count — we'll confirm availability and travel."
          primaryLabel="Get Your Quote"
        />
      </div>
      <div className="py-6 text-center">
        <Button to="/contact" variant="outline" size="sm">Contact us</Button>
      </div>
    </>
  );
}
