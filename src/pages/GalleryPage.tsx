import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import GalleryGrid from "../components/GalleryGrid";
import Button from "../components/Button";
import CTABand from "../components/CTABand";
import { business } from "../lib/site";

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery — Balloon Creations & Party Decor | Twist Parties"
        description="A colourful look at recent Twist Parties balloon twisting and decor across Vancouver — character balloons, garlands, arches and party moments. See more on Instagram @twistparties."
      />
      <PageHero
        eyebrow="Our work"
        title="Gallery"
        subtitle="A little colour from our recent parties — balloon creations, decor installs and happy guests."
        ctaLabel="Book Your Party"
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <GalleryGrid />
        <p className="mt-6 text-center text-slatey">
          These placeholders are ready for your real photos from the site &amp; Instagram.
        </p>
        <div className="mt-6 text-center">
          <Button href={business.instagram} variant="outline" icon="ti-brand-instagram">
            See more on Instagram
          </Button>
        </div>
      </section>

      <CTABand />
    </>
  );
}
