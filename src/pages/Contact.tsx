import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import ContactSection from "../sections/ContactSection";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact & Book | Twist Parties — Vancouver Balloon Twisting"
        description="Book balloon twisting, request a balloon decor quote, or ask about party add-ons. Tell us your event details and we'll confirm availability, travel & the best package — usually within 24 hours."
      />
      <PageHero
        eyebrow="Let's celebrate"
        title="Contact & book"
        subtitle="Tell us about your event and we'll get right back to you with availability, travel and the best package. Prefer to chat? Message us on WhatsApp."
      />
      <ContactSection />
    </>
  );
}
