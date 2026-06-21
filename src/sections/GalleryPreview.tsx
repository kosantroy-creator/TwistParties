import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import GalleryGrid from "../components/GalleryGrid";
import { business } from "../lib/site";

export default function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <SectionHeading
        title="A little colour from our recent parties"
        subtitle={<>See more day-to-day magic on Instagram <strong className="text-ink">{business.instagramHandle}</strong>.</>}
        className="mb-10"
      />
      <GalleryGrid />
      <div className="mt-9 text-center">
        <Button href={business.instagram} variant="outline" icon="ti-brand-instagram">
          Follow on Instagram
        </Button>
      </div>
    </section>
  );
}
