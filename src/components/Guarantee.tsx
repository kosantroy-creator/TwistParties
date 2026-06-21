import { guarantee } from "../lib/site";
import CredentialBadges from "./CredentialBadges";

export default function Guarantee() {
  return (
    <section className="gradient-sky-sun">
      <div className="mx-auto max-w-4xl px-6 py-12 text-center text-white">
        <i className="ti ti-rosette-discount-check text-4xl" aria-hidden="true" />
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
          {guarantee.title}
        </p>
        <p className="mx-auto mt-2 max-w-2xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
          {guarantee.line}
        </p>
      </div>
      <div className="bg-white/0 pb-12">
        <CredentialBadges />
      </div>
    </section>
  );
}
