import Button from "./Button";
import { whatsappLink } from "../lib/site";

export default function CTABand({
  title = "Let's bring your party to life",
  subtitle = "Tell us about your event and we'll get right back to you.",
  primaryLabel = "Book Now",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="gradient-twist text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-14 text-center">
        <h2 className="text-3xl !text-white sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-lg text-white/90">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Button to="/contact" size="lg" icon="ti-balloon" className="!bg-white !text-twist">
            {primaryLabel}
          </Button>
          <Button href={whatsappLink} variant="whatsapp" size="lg" icon="ti-brand-whatsapp">
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}
