import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "../components/Button";
import SmartImage from "../components/SmartImage";
import { Balloon, Confetti } from "../components/Decorations";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (navigator.webdriver) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 26,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.05,
      });
      gsap.from(".hero-art", {
        opacity: 0,
        scale: 0.92,
        y: 20,
        duration: 0.8,
        ease: "back.out(1.6)",
        delay: 0.25,
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden gradient-twist text-white">
      <Balloon size={70} color="#FFC93C" className="absolute right-[8%] top-12 animate-floaty opacity-90" />
      <Balloon size={48} color="#36D6A0" className="absolute bottom-16 left-[5%] animate-floaty opacity-90" style={{ animationDelay: "1.2s" }} />
      <Confetti color="#ffffff" shape="round" className="absolute left-[22%] top-28 opacity-80" />
      <Confetti color="#FFC93C" className="absolute right-[28%] top-20 rotate-12 opacity-80" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div>
          <p className="hero-reveal font-accent text-3xl font-bold text-white/95">
            Vancouver's balloon twisting specialists
          </p>
          <h1 className="hero-reveal mt-2 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
            Vancouver Balloon Twisting &amp; Party Entertainment
          </h1>
          <p className="hero-reveal mt-5 max-w-xl text-lg text-white/95">
            Colourful balloon creations, party add-ons, and custom entertainment options
            for birthdays, schools, festivals, and family events.
          </p>
          <div className="hero-reveal mt-7 flex flex-wrap gap-3.5">
            <Button to="/contact" variant="orange" size="lg" icon="ti-balloon" className="!bg-white !text-twist">
              Book Balloon Twisting
            </Button>
            <Button to="/party-add-ons" variant="ghost" size="lg">
              Explore Party Add-ons
            </Button>
          </div>
        </div>

        {/* One decisive feature photo + an overlapping accent + a trust badge */}
        <div className="hero-art relative mx-auto w-full max-w-md">
          <SmartImage
            src="/photos/twisting-1.jpg"
            alt="A guest holding a bright balloon flower and smiley creation at a Vancouver party"
            loading="eager"
            className="w-full rounded-[28px] object-cover shadow-[var(--shadow-clay)]"
            style={{ aspectRatio: "4 / 5" }}
          />
          <SmartImage
            src="/photos/chameleons.jpg"
            alt="Twisted balloon chameleons"
            loading="eager"
            className="absolute -bottom-6 -left-6 hidden w-40 rounded-2xl border-4 border-white object-cover shadow-[var(--shadow-pop)] sm:block"
            style={{ aspectRatio: "1 / 1" }}
          />
          <div className="absolute -right-3 top-6 rounded-2xl border border-white/40 bg-white px-4 py-3 text-center shadow-[var(--shadow-pop)]">
            <div className="text-lg leading-none text-yellow">★★★★★</div>
            <div className="mt-1 text-xs font-bold text-ink">Insured &amp; background-checked</div>
          </div>
        </div>
      </div>
    </section>
  );
}
