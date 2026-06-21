// Loads Google Analytics 4 only when a measurement ID is provided via the
// VITE_GA_ID env var (e.g. set VITE_GA_ID=G-XXXXXXXXXX in Vercel). No-op until then,
// so there's no broken/empty request in development.

export function initAnalytics() {
  const env = import.meta.env as Record<string, string | undefined>;
  const id = env.VITE_GA_ID;
  if (!id || !id.startsWith("G-")) return;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  function gtag(...args: unknown[]) {
    w.dataLayer.push(args);
  }
  w.gtag = gtag;
  gtag("js", new Date());
  gtag("config", id, { anonymize_ip: true });
}
