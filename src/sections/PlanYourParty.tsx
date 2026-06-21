import SectionHeading from "../components/SectionHeading";
import PartyQuiz from "../components/PartyQuiz";

export default function PlanYourParty() {
  return (
    <section id="plan" className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <SectionHeading
        kicker="quick & easy"
        title="Plan your party in under a minute"
        subtitle="Answer a few quick questions and we'll come back with availability, travel and the best package — no long forms."
        className="mb-10"
      />
      <PartyQuiz />
    </section>
  );
}
