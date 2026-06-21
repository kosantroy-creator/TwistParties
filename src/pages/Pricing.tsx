import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import PricingCards from "../components/PricingCards";
import Faq from "../components/Faq";
import CTABand from "../components/CTABand";

const notes = [
  { icon: "ti-cash", h: "Balloon twisting from $200", p: "One hour + a travel fee pending your location. Best for up to 15 children." },
  { icon: "ti-school", h: "2-hour minimum for events", p: "Public events, schools and corporate picnics start at a 2-hour booking." },
  { icon: "ti-users-group", h: "More than 15 kids?", p: "Contact us to discuss extra time, multiple artists or a custom package." },
  { icon: "ti-clock-hour-4", h: "Multi-hour bookings", p: "Planning a longer event? Inquire for multi-hour and full-day rates." },
];

const faqs = [
  { q: "Is the travel fee included?", a: "Travel is added on top of the booking and depends on your location — it's confirmed in your quote before you commit." },
  { q: "What add-ons can I include?", a: "Extra balloon twisting (15, 30 or 60 min), mini balloon-twisting lessons, face painting, characters, mascots and party favours. These are priced on request." },
  { q: "How do I get an exact price?", a: "Send a quick inquiry with your date, location, hours and guest count and we'll reply with a clear quote — usually within 24 hours." },
];

export default function Pricing() {
  return (
    <>
      <Seo
        title="Balloon Twisting Pricing | Twist Parties"
        description="Transparent balloon twisting pricing in Vancouver. From $200 + travel for one hour (up to 15 children). 2-hour minimum for public events, schools & corporate picnics. Balloon decor by custom quote."
      />
      <PageHero
        eyebrow="Transparent pricing"
        title="Simple, transparent pricing"
        subtitle="Clear starting points with no surprises. Your final quote depends on location, hours and any add-ons."
        ctaLabel="Get Your Quote"
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <PricingCards />
      </section>

      <section className="gradient-cloud">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {notes.map((n) => (
              <div key={n.h} className="rounded-[var(--radius-card)] border border-hairline bg-white p-6 shadow-[var(--shadow-soft)]">
                <i className={`ti ${n.icon} text-3xl text-twist`} />
                <h3 className="mt-3 text-lg">{n.h}</h3>
                <p className="mt-2 text-sm text-slatey">{n.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Faq items={faqs} />
      </section>

      <CTABand primaryLabel="Get Your Quote" />
    </>
  );
}
