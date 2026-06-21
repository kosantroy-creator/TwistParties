import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Button from "./Button";
import { eventTypes, interestedServices, contactMethods, whatsappLink, business } from "../lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const steps = ["Your event", "When & who", "What you'd love", "Where to reach you"];

export default function PartyQuiz() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [a, setA] = useState({
    eventType: "",
    date: "",
    guests: "",
    services: [] as string[],
    name: "",
    email: "",
    phone: "",
    contactMethod: "Email" as (typeof contactMethods)[number],
  });
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, x: 24 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }
    );
  }, [step, status]);

  const set = <K extends keyof typeof a>(k: K, v: (typeof a)[K]) =>
    setA((p) => ({ ...p, [k]: v }));
  const toggleService = (s: string) =>
    setA((p) => ({
      ...p,
      services: p.services.includes(s)
        ? p.services.filter((x) => x !== s)
        : [...p.services, s],
    }));

  const canNext =
    (step === 0 && a.eventType) ||
    (step === 1) ||
    (step === 2) ||
    (step === 3 && a.name && a.email);

  async function submit() {
    setStatus("submitting");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...a, source: "Party quiz" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const chip = (active: boolean) =>
    `focus-ring inline-flex min-h-[44px] items-center rounded-full border px-4 py-2.5 text-sm font-medium transition active:scale-95 ${
      active ? "border-twist bg-twist/10 text-twist" : "border-hairline text-slatey hover:border-sky"
    }`;
  const input =
    "w-full rounded-xl border border-hairline bg-[#fbfdff] px-3.5 py-3 text-[0.95rem] outline-none focus:border-sky focus:ring-4 focus:ring-sky/15";

  if (status === "success") {
    return (
      <div ref={panelRef} className="rounded-[var(--radius-card)] border border-hairline bg-white p-8 text-center shadow-[var(--shadow-pop)]">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full gradient-twist text-white">
          <i className="ti ti-confetti text-3xl" />
        </div>
        <h3 className="mt-4 text-2xl">You're all set!</h3>
        <p className="mx-auto mt-2 max-w-md text-slatey">
          Thanks {a.name?.split(" ")[0] || "so much"} — we've got your details and we'll reply with
          availability, travel and the best package, usually within 24 hours.
        </p>
        <div className="mt-5">
          <Button href={whatsappLink} variant="whatsapp" icon="ti-brand-whatsapp">Chat on WhatsApp</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-hairline bg-white p-6 shadow-[var(--shadow-pop)] sm:p-8">
      {/* progress */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-cloud">
          <div
            className="h-full gradient-twist transition-[width] duration-500"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-slatey">
          {step + 1} / {steps.length}
        </span>
      </div>

      <div ref={panelRef} className="min-h-[220px]">
        <p className="eyebrow mb-1">Step {step + 1}</p>
        <h3 className="mb-4 text-2xl">{steps[step]}</h3>

        {step === 0 && (
          <div className="flex flex-wrap gap-2.5">
            {eventTypes.map((t) => (
              <button key={t} type="button" onClick={() => { set("eventType", t); }} className={chip(a.eventType === t)}>
                {t}
              </button>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-ink">Event date</label>
              <input type="date" className={input} value={a.date} onChange={(e) => set("date", e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-ink">How many kids / guests?</label>
              <input inputMode="numeric" className={input} placeholder="e.g. 12" value={a.guests} onChange={(e) => set("guests", e.target.value)} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-wrap gap-2.5">
            {interestedServices.map((s) => (
              <button key={s} type="button" onClick={() => toggleService(s)} className={chip(a.services.includes(s))}>
                {a.services.includes(s) && <i className="ti ti-check mr-1 text-xs" />}
                {s}
              </button>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-ink">Name *</label>
              <input className={input} value={a.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-ink">Email *</label>
              <input type="email" className={input} value={a.email} onChange={(e) => set("email", e.target.value)} placeholder="you@email.com" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-ink">Phone</label>
              <input type="tel" className={input} value={a.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(604) 000-0000" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-ink">Preferred contact</label>
              <div className="flex flex-wrap gap-2">
                {contactMethods.map((m) => (
                  <button key={m} type="button" onClick={() => set("contactMethod", m)} className={chip(a.contactMethod === m)}>
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {status === "error" && (
          <p className="mt-4 text-sm text-pink">
            Something went wrong — please email{" "}
            <a className="font-semibold underline" href={`mailto:${business.email}`}>{business.email}</a> or use WhatsApp.
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        {step > 0 ? (
          <Button variant="outline" size="sm" onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
        ) : <span />}
        {step < steps.length - 1 ? (
          <Button size="sm" onClick={() => canNext && setStep((s) => s + 1)} icon="ti-arrow-right">
            Continue
          </Button>
        ) : (
          <Button size="sm" onClick={() => canNext && status !== "submitting" && submit()} icon="ti-send">
            {status === "submitting" ? "Sending…" : "Send my inquiry"}
          </Button>
        )}
      </div>
    </div>
  );
}
