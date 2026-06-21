import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { PhotoTile } from "../components/Decorations";
import Faq from "../components/Faq";
import CTABand from "../components/CTABand";
import Button from "../components/Button";
import { twistingPhotos } from "../lib/site";

const menu = [
  "Balloon dogs & animals", "Swords & flowers", "Wearable hats & crowns",
  "Princess wands & bracelets", "Superhero & character builds", "Custom requests on the spot",
];

const faqs = [
  { q: "How many balloons can you make per hour?", a: "Roughly 15 detailed balloons per hour, or 20–30 simpler designs. For bigger crowds we can bring multiple balloon artists so no one waits long." },
  { q: "How many kids does one hour cover?", a: "One hour is best for up to about 15 children. More than 15? Contact us and we'll suggest extra time or a second artist." },
  { q: "What kinds of events do you do?", a: "Birthdays, schools, corporate picnics, city events, festivals and private parties. Public events, schools and corporate picnics have a 2-hour minimum." },
  { q: "Do you travel to us?", a: "Yes — we serve Vancouver, the Fraser Valley and beyond. A travel fee may apply depending on your location and is confirmed in your quote." },
  { q: "What does the artist wear?", a: "Your balloon artist arrives in a colourful or festive outfit to suit the season — and no clown make-up." },
];

export default function Twisting() {
  return (
    <>
      <Seo
        title="Balloon Twisting in Vancouver | Twist Parties"
        description="Professional balloon twisting for birthdays, schools, festivals & corporate events across Metro Vancouver. ~15 detailed balloons per hour, guest balloon menu, multiple artists for big events. From $200 + travel."
      />
      <PageHero
        eyebrow="Our specialty"
        title="Balloon twisting in Vancouver"
        subtitle="Creating custom balloons for all your events. Guests choose from our balloon menu and watch their favourites come to life on the spot."
        ctaLabel="Book Balloon Twisting"
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">The balloon menu</p>
            <h2 className="mt-2 text-3xl">Guests pick, we twist</h2>
            <p className="mt-4 text-lg text-slatey">
              Every guest chooses what they want from our balloon menu — quick classics or
              show-stopping characters. It keeps the line moving and every kid leaves with
              something they love.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {menu.map((m) => (
                <div key={m} className="flex items-start gap-2 text-sm text-slatey">
                  <i className="ti ti-check mt-0.5 text-mint" /> {m}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {twistingPhotos.map((p) => (
              <PhotoTile key={p.label} photo={p} minHeight={150} />
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-cloud">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { icon: "ti-clock", h: "~15 / hour", p: "Detailed balloons per hour, or 20–30 simpler designs." },
              { icon: "ti-users", h: "Multiple artists", p: "Scale up for festivals, schools and large corporate events." },
              { icon: "ti-confetti", h: "Any event", p: "Birthdays, schools, picnics, city events, festivals & private parties." },
            ].map((c) => (
              <div key={c.h} className="rounded-[var(--radius-card)] border border-hairline bg-white p-7 text-center shadow-[var(--shadow-soft)]">
                <i className={`ti ${c.icon} text-3xl text-twist`} />
                <h3 className="mt-3 text-xl">{c.h}</h3>
                <p className="mt-2 text-slatey">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading title="Balloon twisting FAQ" className="mb-10" />
        <Faq items={faqs} />
        <p className="mt-8 text-center">
          <Button to="/pricing" variant="outline">See pricing</Button>
        </p>
      </section>

      <CTABand
        title="Ready to book balloon twisting?"
        subtitle="Tell us your date, location and guest count — we'll confirm availability and travel."
        primaryLabel="Book Balloon Twisting"
      />
    </>
  );
}
