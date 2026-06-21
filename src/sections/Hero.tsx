import Button from "../components/Button";
import { Balloon, Confetti, PhotoTile } from "../components/Decorations";

const heroPhotos = [
  { label: "Custom balloon creation", color: "#15ABE0", src: "/photos/twisting-1.jpg" },
  { label: "Balloon chameleons", color: "#FF5DA2", src: "/photos/chameleons.jpg" },
  { label: "Custom balloon decor", color: "#7C4DFF", src: "/photos/decor-1.jpg" },
  { label: "Colourful balloon designs", color: "#FF9E45", src: "/photos/twisting-2.jpg" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-twist text-white">
      <Balloon size={70} color="#FFC93C" className="absolute right-[8%] top-12 animate-floaty opacity-90" />
      <Balloon size={48} color="#36D6A0" className="absolute bottom-16 left-[5%] animate-floaty opacity-90" style={{ animationDelay: "1.2s" }} />
      <Confetti color="#ffffff" shape="round" className="absolute left-[22%] top-28 opacity-80" />
      <Confetti color="#FFC93C" className="absolute right-[28%] top-20 rotate-12 opacity-80" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <p className="font-semibold uppercase tracking-[0.12em] text-white/85 text-[0.8rem]">
            Vancouver-area balloon artistry &amp; party fun
          </p>
          <h1 className="mt-3 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
            Vancouver Balloon Twisting &amp; Party Entertainment
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/95">
            Colourful balloon creations, party add-ons, and custom entertainment options
            for birthdays, schools, festivals, and family events.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <Button to="/contact" variant="orange" size="lg" icon="ti-balloon"
              className="!bg-white !text-twist hover:!bg-white">
              Book Balloon Twisting
            </Button>
            <Button to="/party-add-ons" variant="ghost" size="lg">
              Explore Party Add-ons
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3.5">
          {heroPhotos.map((p) => (
            <PhotoTile key={p.label} photo={p} minHeight={118} />
          ))}
        </div>
      </div>
    </section>
  );
}
