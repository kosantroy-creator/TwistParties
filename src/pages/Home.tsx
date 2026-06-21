import Seo from "../components/Seo";
import Hero from "../sections/Hero";
import TrustStrip from "../sections/TrustStrip";
import StatStrip from "../components/StatStrip";
import Guarantee from "../components/Guarantee";
import TwistingSection from "../sections/TwistingSection";
import HowItWorks from "../sections/HowItWorks";
import PlanYourParty from "../sections/PlanYourParty";
import PricingPreview from "../sections/PricingPreview";
import DecorShowcase from "../sections/DecorShowcase";
import Collective from "../sections/Collective";
import About from "../sections/About";
import GalleryPreview from "../sections/GalleryPreview";
import Testimonials from "../sections/Testimonials";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <>
      <Seo
        title="Twist Parties | Vancouver Balloon Twisting & Party Entertainment"
        description="Vancouver-area balloon twisting specialists & a colourful party entertainment collective. Balloon creations, custom decor & party add-ons for birthdays, schools, festivals & family events. Twisting from $200 + travel."
      />
      <Hero />
      <TrustStrip />
      <StatStrip />
      <TwistingSection />
      <HowItWorks />
      <PlanYourParty />
      <PricingPreview />
      <DecorShowcase />
      <Collective />
      <About />
      <GalleryPreview />
      <Testimonials />
      <Guarantee />
      <ContactSection />
    </>
  );
}
