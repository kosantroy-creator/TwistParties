import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { PhotoTile } from "../components/Decorations";
import Faq from "../components/Faq";
import CTABand from "../components/CTABand";
import { decorPhotos } from "../lib/site";

const textures = [
  "Balloon walls", "Columns", "Arches", "Photo frames", "Organic garlands",
  "Foil balloons", "Balloon flowers", "Pool floaties", "Beach balls", "Custom textures",
];

const faqs = [
  { q: "How does pricing work for decor?", a: "Every decor piece is custom, so it's priced by quote and subject to availability. Send your inspiration photos, colours and theme and we'll build a quote around your vision." },
  { q: "Can I send reference photos?", a: "Please do! Reference photos are the best way to start. Use the upload on our contact form (or send them on WhatsApp) and we'll match the look." },
  { q: "Are the balloons eco-friendly?", a: "We use biodegradable latex balloons wherever possible, and build with care so your decor looks incredible and cleans up responsibly." },
  { q: "How far in advance should I book?", a: "Earlier is better for custom decor, especially in busy party seasons. Reach out as soon as you have a date and we'll check availability." },
];

export default function Decor() {
  return (
    <>
      <Seo
        title="Custom Balloon Decor, Arches & Garlands in Vancouver | Twist Parties"
        description="Premium custom balloon decor across Metro Vancouver — balloon walls, arches, columns, organic garlands, photo frames, foils & flowers. Biodegradable latex. Custom quotes — send your inspiration photos."
      />
      <PageHero
        eyebrow="Premium custom decor"
        title="Balloon decor that turns heads"
        subtitle="Statement balloon installations designed around your colours and theme — custom, photo-worthy, and built with biodegradable latex wherever possible."
        ctaLabel="Request a Decor Quote"
        ctaIcon="ti-sparkles"
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            {decorPhotos.map((p) => (
              <PhotoTile key={p.label} photo={p} minHeight={150} />
            ))}
          </div>
          <div>
            <p className="eyebrow">What we create</p>
            <h2 className="mt-2 text-3xl">From subtle accents to showpieces</h2>
            <p className="mt-4 text-lg text-slatey">
              Walls, columns, arches, photo frames and organic garlands — plus foils,
              balloon flowers, pool floaties, beach balls and playful textures.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {textures.map((t) => (
                <span key={t} className="rounded-full border border-hairline bg-white px-3.5 py-1.5 text-sm font-semibold text-deepsea">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-sky/50 bg-sky/5 p-4 font-medium text-ink">
              <i className="ti ti-camera mr-2 text-sky" />
              Send us your inspiration photos and we'll build a custom quote — pricing is by
              quote and subject to availability.
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-cloud">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionHeading eyebrow="Good to know" title="Balloon decor FAQ" className="mb-10" />
          <Faq items={faqs} />
        </div>
      </section>

      <CTABand
        title="Got a vision? Let's quote it"
        subtitle="Share your theme, colours and inspiration photos — we'll design decor that wows."
        primaryLabel="Request a Decor Quote"
      />
    </>
  );
}
