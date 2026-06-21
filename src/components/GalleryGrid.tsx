import { PhotoTile } from "./Decorations";
import Reveal from "./Reveal";
import { galleryTiles } from "../lib/site";

export default function GalleryGrid() {
  return (
    <Reveal stagger className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {galleryTiles.map((p, i) => (
        <PhotoTile
          key={p.label}
          photo={p}
          minHeight={i === 0 ? 250 : 120}
          className={i === 0 ? "row-span-2" : i === 5 ? "col-span-2" : ""}
        />
      ))}
    </Reveal>
  );
}
