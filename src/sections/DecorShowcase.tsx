import Button from "../components/Button";
import { PhotoTile } from "../components/Decorations";
import { decorPhotos } from "../lib/site";

export default function DecorShowcase() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <div className="grid grid-cols-2 gap-3">
          {decorPhotos.map((p) => (
            <PhotoTile key={p.label} photo={p} minHeight={140} />
          ))}
        </div>
        <div>
          <p className="eyebrow !text-tangerine">Premium custom decor</p>
          <h2 className="mt-2 text-3xl !text-white sm:text-[2.3rem]">
            Balloon decor that turns heads
          </h2>
          <p className="mt-4 text-lg text-[#c7d3e6]">
            Statement walls, columns, arches, photo frames &amp; organic garlands — plus
            foil balloons, balloon flowers, pool floaties, beach balls and playful
            textures, designed around your colours and theme. Made with{" "}
            <strong className="text-white">biodegradable latex</strong> wherever possible.
          </p>
          <div className="mt-5 rounded-2xl border border-dashed border-white/35 bg-white/10 p-4 font-medium">
            <i className="ti ti-camera mr-2 text-tangerine" />
            Send us your inspiration photos and we'll build a custom quote around your
            vision.
          </div>
          <p className="mt-4 text-sm text-[#9fb0c9]">
            Every piece is custom, so pricing is by quote and subject to availability.
          </p>
          <div className="mt-7">
            <Button to="/contact" icon="ti-sparkles">Request a Decor Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
