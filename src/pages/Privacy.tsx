import Seo from "../components/Seo";
import { business } from "../lib/site";

const sections = [
  {
    h: "Who we are",
    p: `Twist Parties is a Vancouver-area balloon twisting and party entertainment business. This policy explains what information we collect through our website and how we use it.`,
  },
  {
    h: "What we collect",
    p: `When you submit a booking inquiry or contact us, we collect the details you provide — such as your name, email, phone number, event date and location, guest count, and any notes or reference photos. If analytics are enabled, we also collect anonymous usage data (pages visited, device type) to improve the site.`,
  },
  {
    h: "How we use it",
    p: `We use your information only to respond to your inquiry, prepare a quote, coordinate your event, and provide our services. We may contact you by your preferred method (email, phone or WhatsApp) about your booking.`,
  },
  {
    h: "Sharing",
    p: `We do not sell your personal information. When you request add-ons such as face painting, mascots or extra performers, we may share the details needed to coordinate with trusted partner performers. Otherwise, we share information only as required to deliver your event or comply with the law.`,
  },
  {
    h: "Data retention & security",
    p: `We keep inquiry and booking details only as long as needed for your event and our records, and we take reasonable steps to protect that information.`,
  },
  {
    h: "Your choices",
    p: `You can ask us to access, correct, or delete the personal information we hold about you at any time by emailing us. You can also decline non-essential analytics in your browser settings.`,
  },
];

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Twist Parties"
        description="How Twist Parties collects, uses and protects the information you share when booking balloon twisting or party entertainment."
      />
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="kicker">Your privacy matters</p>
        <h1 className="mt-1 text-4xl">Privacy policy</h1>
        <p className="mt-3 text-slatey">Last updated: June 2026</p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl text-deepsea">{s.h}</h2>
              <p className="mt-2 text-slatey">{s.p}</p>
            </div>
          ))}
          <div>
            <h2 className="text-xl text-deepsea">Contact us</h2>
            <p className="mt-2 text-slatey">
              Questions about this policy? Email us at{" "}
              <a className="font-semibold text-twist underline" href={`mailto:${business.email}`}>
                {business.email}
              </a>
              .
            </p>
          </div>
        </div>

        <p className="mt-12 rounded-2xl border border-hairline bg-cloud p-4 text-sm text-slatey">
          This is a general starter policy — please review it (and add anything specific to how
          you handle data) before publishing.
        </p>
      </section>
    </>
  );
}
