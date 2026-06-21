import type { ReactNode } from "react";
import Button from "./Button";
import { Balloon } from "./Decorations";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaTo = "/contact",
  ctaIcon = "ti-balloon",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  ctaLabel?: string;
  ctaTo?: string;
  ctaIcon?: string;
}) {
  return (
    <section className="relative overflow-hidden gradient-twist text-white">
      <Balloon size={56} color="#FFC93C" className="absolute right-[8%] top-10 animate-floaty opacity-80" />
      <Balloon size={40} color="#36D6A0" className="absolute bottom-8 left-[6%] animate-floaty opacity-80" style={{ animationDelay: "1s" }} />
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
        <p className="font-semibold uppercase tracking-[0.12em] text-white/85 text-[0.8rem]">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/95">{subtitle}</p>
        {ctaLabel && (
          <div className="mt-7 flex justify-center">
            <Button to={ctaTo} size="lg" icon={ctaIcon} className="!bg-white !text-twist">
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
