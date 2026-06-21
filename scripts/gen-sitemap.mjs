// Generates public/sitemap.xml from the known routes.
// Run with: node scripts/gen-sitemap.mjs  (also runs automatically on prebuild)
import { writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ORIGIN = "https://www.twistparties.ca";

const staticRoutes = [
  "", "balloon-twisting", "balloon-decor", "party-add-ons",
  "pricing", "gallery", "contact", "service-areas", "blog", "privacy",
];

const cities = [
  "vancouver", "delta", "surrey", "tsawwassen", "burnaby", "langley",
  "abbotsford", "west-vancouver", "north-vancouver", "maple-ridge",
  "pitt-meadows", "port-coquitlam", "coquitlam", "new-westminster",
  "mission", "agassiz", "chilliwack", "squamish", "whistler", "pemberton",
];

const posts = [
  "how-much-does-a-balloon-twister-cost-vancouver",
  "how-many-balloons-per-hour",
  "balloon-twisting-vs-balloon-decor",
  "are-latex-balloons-biodegradable",
];

const urls = [
  ...staticRoutes.map((r) => `${ORIGIN}/${r}`),
  ...cities.map((c) => `${ORIGIN}/service-areas/${c}`),
  ...posts.map((p) => `${ORIGIN}/blog/${p}`),
];

const today = new Date().toISOString().slice(0, 10);
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map((u) => `  <url><loc>${u.replace(/\/$/, "/")}</loc><lastmod>${today}</lastmod></url>`)
    .join("\n") +
  `\n</urlset>\n`;

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "sitemap.xml");
await writeFile(out, xml, "utf8");
console.log(`Wrote sitemap with ${urls.length} URLs.`);
