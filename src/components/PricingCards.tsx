import Button from "./Button";
import Reveal from "./Reveal";
import { pricingTiers } from "../lib/site";

export default function PricingCards() {
  return (
    <div>
      <Reveal stagger className="grid items-stretch gap-5 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col rounded-[var(--radius-card)] bg-white p-7 clay ${
              tier.featured ? "border-2 border-twist" : "border border-hairline"
            }`}
          >
            {tier.featured && "badge" in tier && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-twist px-4 py-1 text-xs font-bold text-white">
                {tier.badge}
              </span>
            )}
            <h3 className="text-xl text-deepsea">{tier.name}</h3>
            <p className="mt-3">
              <span className="font-display text-[2.6rem] font-bold leading-none text-ink">
                {tier.amount}
              </span>{" "}
              <span className="text-sm font-medium text-slatey">{tier.unit}</span>
            </p>
            <ul className="mt-5 flex-1 space-y-2.5">
              {tier.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 border-b border-dashed border-hairline pb-2.5 text-sm text-slatey"
                >
                  <i className="ti ti-check mt-0.5 text-mint" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button
                to={tier.cta.to}
                variant={tier.featured ? "blue" : "outline"}
                className="w-full"
              >
                {tier.cta.label}
              </Button>
            </div>
          </div>
        ))}
      </Reveal>
      <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slatey">
        Add-ons: extra twisting (15, 30 or 60 min), mini twisting lessons, face painting,
        characters, mascots and party favours, priced on request. Travel fee depends on
        location.
      </p>
    </div>
  );
}
