// Generates WebP + AVIF siblings for every JPG/PNG in public/photos.
// Run with: node scripts/optimize-images.mjs
import { readdir } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "photos");

const files = (await readdir(dir)).filter((f) => /\.(jpe?g|png)$/i.test(f));
let made = 0;
for (const f of files) {
  const stem = basename(f, extname(f));
  const input = join(dir, f);
  await sharp(input).webp({ quality: 80 }).toFile(join(dir, `${stem}.webp`));
  await sharp(input).avif({ quality: 58 }).toFile(join(dir, `${stem}.avif`));
  made += 2;
  console.log(`✓ ${stem} → .webp + .avif`);
}
console.log(`Done — ${made} files from ${files.length} source images.`);
