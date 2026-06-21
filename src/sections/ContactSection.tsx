import SectionHeading from "../components/SectionHeading";
import BookingForm from "../components/BookingForm";
import ServiceAreas from "../components/ServiceAreas";
import { business, whatsappLink } from "../lib/site";

export default function ContactSection() {
  return (
    <section id="book" className="gradient-cloud">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <SectionHeading
          kicker="let's celebrate"
          title="Let's bring your party to life"
          subtitle="Tell us about your event and we'll get right back to you. Prefer to chat? Message us on WhatsApp."
          className="mb-10"
        />
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <BookingForm />

          <aside className="space-y-5">
            <div className="grid min-h-40 place-items-center rounded-2xl gradient-sky-sun p-6 text-center font-semibold text-white shadow-[var(--shadow-soft)]">
              <span>
                <i className="ti ti-map-2 mb-2 block text-3xl" />
                Serving 20+ communities across Metro Vancouver &amp; the Fraser Valley
              </span>
            </div>

            <div className="rounded-2xl border border-hairline bg-white p-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border-b border-hairline py-3 font-medium hover:text-twist">
                <i className="ti ti-brand-whatsapp text-xl text-[#25D366]" /> WhatsApp — fastest reply
              </a>
              <a href={`mailto:${business.email}`} className="flex items-center gap-3 border-b border-hairline py-3 font-medium hover:text-twist">
                <i className="ti ti-mail text-xl text-sky" /> {business.email}
              </a>
              <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-3 font-medium hover:text-twist">
                <i className="ti ti-brand-instagram text-xl text-grape" /> {business.instagramHandle}
              </a>
            </div>

            <div className="rounded-2xl border border-hairline bg-white p-5">
              <p className="text-sm font-semibold text-ink">We come to you across:</p>
              <ServiceAreas className="mt-3 !justify-start" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
