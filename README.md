# Twist Parties — Website

Vancouver balloon twisting & party entertainment. Built with **Vite + React + TypeScript + Tailwind v4**, deployable to Vercel with a serverless booking endpoint.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # type-check + Vite build + prerender every route to static HTML
npm run preview  # preview the production build
```

## SEO: static prerendering (SSG)

Although the app is a React SPA, `npm run build` runs a **prerender step**
(`scripts/prerender.mjs`) that renders every route in headless Chromium and writes
static HTML into `dist/<route>/index.html`. Crawlers and AI get full HTML with the
correct per-page `<title>`, meta description and schema; the app still hydrates and
stays fully interactive on load.

- Routes prerendered: all pages + the 20 `/service-areas/:city` pages + every blog post.
- `npm run build:spa` builds without prerendering (faster, SPA only).
- Puppeteer downloads Chromium into a project-local `.cache/puppeteer` (see
  `.puppeteerrc.cjs`) so the same browser is available during `npm install` and the
  build on Vercel/CI. The prerender step is **non-fatal** — if Chromium can't launch,
  the SPA build still ships.
- On Vercel, `vercel.json` serves the prerendered static files first and falls back to
  `index.html` (client routing) only for non-prerendered paths.

## Project structure

```
api/inquiry.ts            Vercel serverless function — booking form → email (Resend)
src/
  lib/site.ts             ★ All content: business info, nav, services, pricing, areas, testimonials
  index.css               Brand design tokens (colours, fonts, gradients) via Tailwind @theme
  components/             Reusable UI (Navbar, Footer, Button, BookingForm, PricingCards, …)
  sections/               Homepage sections (Hero, TwistingSection, DecorShowcase, …)
  pages/                  Routed pages (Home, Twisting, Decor, AddOns, Pricing, Gallery, Contact)
```

## Editing content

Almost everything is in **`src/lib/site.ts`** — update the business email, phone, WhatsApp
number, service areas, pricing tiers and testimonials there.

- **WhatsApp:** set `business.whatsapp` to the real number in international format, digits
  only (e.g. `16041234567`).
- **Email/phone:** update `business.email` and `business.phone`.

## Photos

Photo placeholders are coloured tiles rendered by `PhotoTile` (`src/components/Decorations.tsx`).
Swap them for real `<img>` tags using photos from the current site & Instagram. Update the
arrays in `src/lib/site.ts` (`twistingPhotos`, `decorPhotos`, `galleryTiles`, and the hero
photos in `src/sections/Hero.tsx`).

## Booking form email (Resend)

The form posts to `/api/inquiry`. Until you add a key it runs in **simulated mode** (logs +
returns success), so the form is testable immediately.

To send real emails:
1. Create a [Resend](https://resend.com) account and verify a sending domain.
2. In Vercel → Project → Settings → Environment Variables, set the values from `.env.example`
   (`RESEND_API_KEY`, `BOOKING_TO`, `BOOKING_FROM`).

> Reference-photo uploads currently capture file names and prompt the client to send full-res
> images via WhatsApp. To email actual attachments, extend `api/inquiry.ts` to accept
> base64/multipart and pass `attachments` to Resend, or wire up a storage bucket.

## Deploy to Vercel

1. Push this folder to a Git repo.
2. Import it in Vercel — it auto-detects Vite (build `npm run build`, output `dist`).
3. Add the environment variables above.
4. `vercel.json` handles SPA routing so deep links (e.g. `/pricing`) work on refresh.

## Routes

`/` · `/balloon-twisting` · `/balloon-decor` · `/party-add-ons` · `/pricing` · `/gallery` · `/contact`
