import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import AddOnGrid from "../components/AddOnGrid";

export default function Collective() {
  return (
    <section className="gradient-cloud">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="The Twist Parties collective"
          title="More ways to make it special"
          subtitle="Balloon twisting is what we do best — when you want more, our network of partners & trusted performers helps you build the whole party. Availability & pricing vary, so just ask us what's available."
          className="mb-10"
        />
        <AddOnGrid />
        <div className="mt-9 text-center">
          <Button to="/contact" variant="blue">Ask About Add-ons</Button>
        </div>
      </div>
    </section>
  );
}
