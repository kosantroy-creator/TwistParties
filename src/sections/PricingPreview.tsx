import SectionHeading from "../components/SectionHeading";
import PricingCards from "../components/PricingCards";

export default function PricingPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <SectionHeading
        title="Simple, transparent pricing"
        subtitle="Clear starting points. Your final quote depends on location, hours and any add-ons."
        className="mb-12"
      />
      <PricingCards />
    </section>
  );
}
