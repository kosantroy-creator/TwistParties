// Build-time prerender: renders the real app in headless Chromium and writes
// static HTML per route into dist/. Crawlers + AI get full HTML; the app still
// hydrates client-side. Non-fatal — if Chromium can't launch, the SPA build ships as-is.
import { mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "vite";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = 4488;

const staticRoutes = [
  "/", "/balloon-twisting", "/balloon-decor", "/party-add-ons",
  "/pricing", "/gallery", "/contact", "/service-areas", "/blog", "/privacy",
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

const routes = [
  ...staticRoutes,
  ...cities.map((c) => `/service-areas/${c}`),
  ...posts.map((p) => `/blog/${p}`),
];

async function run() {
  const puppeteer = (await import("puppeteer")).default;

  const server = await preview({
    root,
    preview: { port: PORT, strictPort: true },
  });
  const base = `http://localhost:${PORT}`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let ok = 0;
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.goto(base + route, { waitUntil: "networkidle0", timeout: 30000 });
      await page.waitForFunction(
        () => {
          const r = document.getElementById("root");
          return r && r.children.length > 0 && document.title.length > 0;
        },
        { timeout: 15000 }
      );
      await new Promise((r) => setTimeout(r, 250));

      const html = "<!doctype html>\n" + (await page.evaluate(() => document.documentElement.outerHTML));
      const outPath =
        route === "/"
          ? join(root, "dist", "index.html")
          : join(root, "dist", route.replace(/^\//, ""), "index.html");
      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf8");
      ok++;
      console.log(`  ✓ ${route}`);
    } catch (e) {
      console.warn(`  ⚠ ${route} — ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  await server.httpServer.close();
  console.log(`Prerendered ${ok}/${routes.length} routes.`);
}

run().catch((e) => {
  console.warn("Prerender skipped (non-fatal):", e.message);
  process.exit(0);
});
