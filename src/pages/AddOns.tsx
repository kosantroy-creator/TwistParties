import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import AddOnGrid from "../components/AddOnGrid";
import Faq from "../components/Faq";
import CTABand from "../components/CTABand";

const faqs = [
  { q: "How does pricing work for add-ons?", a: "Add-on pricing and availability vary by performer, so we don't list set prices. Tell us what you're after and we'll get options and a quote for you." },
  { q: "Do you perform all of these yourselves?", a: "Balloon twisting is our specialty and what we're known for. Mascots, costume characters, face painting and other entertainment are arranged through our network of partners and trusted performers." },
  { q: "Can I bundle add-ons with balloon twisting?", a: "Absolutely — that's the easiest way to plan. Book twisting as your base, then add the extras you want and we'll coordinate the details." },
  { q: "What if I want something not listed?", a: "Just ask! If we can't provide it directly, we'll often know someone who can. Tell us your idea and we'll see what's available." },
];

export default function AddOns() {
  return (
    <>
      <Seo
        title="Party Add-ons: Mascots, Face Painting & More | Twist Parties"
        description="Build the whole party with Twist Parties. Through our partner network we help arrange face painting, mascot & costume characters, extra balloon artists, candy cups, mini twisting lessons & party favours across Metro Vancouver."
      />
      <PageHero
        eyebrow="The Twist Parties collective"
        title="Party add-ons & entertainment"
        subtitle="Balloon twisting is what we do best — and when you want more, we help connect you with trusted performers to round out your event."
        ctaLabel="Ask What's Available"
        ctaIcon="ti-confetti"
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Ask us what's available"
          title="More ways to make it special"
          subtitle="Availability and pricing vary by performer, so we keep it simple: tell us what you'd love, and we'll help connect you and pull together a quote."
          className="mb-10"
        />
        <AddOnGrid />
      </section>

      <section className="gradient-cloud">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <i className="ti ti-friends text-4xl text-grape" />
          <h2 className="mt-3 text-3xl">A curated collective, not a one-person show</h2>
          <p className="mt-4 text-lg text-slatey">
            Twist Parties brings together balloon artistry and a network of party
            professionals so you get the right people for your event — coordinated through
            one friendly point of contact.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="Good to know" title="Party add-ons FAQ" className="mb-10" />
        <Faq items={faqs} />
      </section>

      <CTABand
        title="Want to build the whole party?"
        subtitle="Tell us your wishlist and we'll find out what's available for your date."
        primaryLabel="Ask About Add-ons"
      />
    </>
  );
}
