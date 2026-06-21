import Button from "../components/Button";
import { PhotoTile } from "../components/Decorations";
import { twistingPhotos } from "../lib/site";

const points = [
  "~15 detailed balloons per hour, or 20–30 simpler designs",
  "Multiple balloon artists available for large events",
  "Great for birthdays, schools, picnics, festivals & private parties",
];

const eventChips = ["Birthdays", "Schools", "Corporate picnics", "City events", "Festivals"];

export default function TwistingSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="font-accent text-2xl font-bold text-burntorange">Our specialty</p>
          <h2 className="mt-1 text-3xl sm:text-[2.3rem]">
            Balloon twisting that brings parties to life
          </h2>
          <p className="mt-4 text-lg text-slatey">
            Creating custom balloons for all your events. Guests pick their favourites
            from our <strong className="text-ink">balloon menu</strong> (swords, flowers,
            hats, wearables and show-stopping characters) and watch them come to life on
            the spot.
          </p>
          <ul className="mt-5 space-y-2.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-slatey">
                <span className="mt-1.5 h-3 w-3 shrink-0 rotate-45 rounded-[50%_50%_50%_0] bg-twist" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {eventChips.map((c) => (
              <span key={c} className="rounded-full border border-hairline bg-white px-3.5 py-1.5 text-sm font-semibold text-deepsea">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-7">
            <Button to="/contact" icon="ti-balloon">Book Balloon Twisting</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {twistingPhotos.map((p) => (
            <PhotoTile key={p.label} photo={p} minHeight={150} />
          ))}
        </div>
      </div>
    </section>
  );
}
