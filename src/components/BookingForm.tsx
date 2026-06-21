import { useState } from "react";
import {
  business,
  contactMethods,
  eventTypes,
  interestedServices,
  serviceAreas,
  whatsappLink,
} from "../lib/site";
import { useButtonFx } from "../lib/buttonFx";

const labelCls = "block text-xs font-semibold text-ink mb-1.5";
const inputCls =
  "w-full rounded-xl border border-hairline bg-[#fbfdff] px-3.5 py-3 text-[0.95rem] font-body text-ink outline-none transition focus:border-sky focus:ring-4 focus:ring-sky/15";

type Status = "idle" | "submitting" | "success" | "error";

const initial = {
  name: "",
  email: "",
  phone: "",
  date: "",
  startTime: "",
  endTime: "",
  duration: "",
  address: "",
  city: "",
  postal: "",
  eventType: "",
  guests: "",
  theme: "",
  additional: "",
  contactMethod: "Email" as (typeof contactMethods)[number],
};

export default function BookingForm() {
  const submitFx = useButtonFx<HTMLButtonElement>(false);
  const waFx = useButtonFx<HTMLAnchorElement>(false);
  const [form, setForm] = useState(initial);
  const [services, setServices] = useState<string[]>([]);
  const [photos, setPhotos] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const decorSelected = services.includes("Balloon decor");

  const update =
    (key: keyof typeof initial) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleService = (s: string) =>
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, services, referencePhotos: photos }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Something went wrong sending your inquiry."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-card)] border border-hairline bg-white p-8 text-center shadow-[var(--shadow-soft)]">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full gradient-twist text-white">
          <i className="ti ti-check text-3xl" />
        </div>
        <h3 className="mt-4 text-2xl">Thanks — your inquiry is on its way! 🎈</h3>
        <p className="mx-auto mt-2 max-w-md text-slatey">
          We'll review your event and get back to you with availability, travel and the
          best package — usually within 24 hours. Want a faster reply?
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white"
        >
          <i className="ti ti-brand-whatsapp text-lg" /> Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-card)] border border-hairline bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      {/* Your details */}
      <p className="eyebrow mb-3">Your details</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">Name *</label>
          <input id="name" required className={inputCls} value={form.name} onChange={update("name")} placeholder="Your name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">Email *</label>
          <input id="email" type="email" required className={inputCls} value={form.email} onChange={update("email")} placeholder="you@email.com" />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Phone</label>
          <input id="phone" type="tel" className={inputCls} value={form.phone} onChange={update("phone")} placeholder="(604) 000-0000" />
        </div>
        <div>
          <span className={labelCls}>Preferred contact method</span>
          <div className="flex flex-wrap gap-2">
            {contactMethods.map((m) => (
              <label
                key={m}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition ${
                  form.contactMethod === m
                    ? "border-twist bg-twist/10 text-twist"
                    : "border-hairline text-slatey"
                }`}
              >
                <input
                  type="radio"
                  name="contactMethod"
                  className="sr-only"
                  checked={form.contactMethod === m}
                  onChange={() => setForm((f) => ({ ...f, contactMethod: m }))}
                />
                {m}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Event details */}
      <p className="eyebrow mb-3 mt-7">Event details</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="date">Event date</label>
          <input id="date" type="date" className={inputCls} value={form.date} onChange={update("date")} />
        </div>
        <div>
          <label className={labelCls} htmlFor="eventType">Event type</label>
          <select id="eventType" className={inputCls} value={form.eventType} onChange={update("eventType")}>
            <option value="">Select…</option>
            {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="startTime">Start time</label>
          <input id="startTime" type="time" className={inputCls} value={form.startTime} onChange={update("startTime")} />
        </div>
        <div>
          <label className={labelCls} htmlFor="endTime">End time</label>
          <input id="endTime" type="time" className={inputCls} value={form.endTime} onChange={update("endTime")} />
        </div>
        <div>
          <label className={labelCls} htmlFor="duration">Or duration</label>
          <input id="duration" className={inputCls} value={form.duration} onChange={update("duration")} placeholder="e.g. 2 hours" />
        </div>
        <div>
          <label className={labelCls} htmlFor="guests">Number of children / guests</label>
          <input id="guests" inputMode="numeric" className={inputCls} value={form.guests} onChange={update("guests")} placeholder="e.g. 12" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="address">Event address</label>
          <input id="address" className={inputCls} value={form.address} onChange={update("address")} placeholder="Street address" />
        </div>
        <div>
          <label className={labelCls} htmlFor="city">City</label>
          <select id="city" className={inputCls} value={form.city} onChange={update("city")}>
            <option value="">Select…</option>
            {serviceAreas.map((c) => <option key={c} value={c}>{c}</option>)}
            <option value="Other">Other…</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="postal">Postal code</label>
          <input id="postal" className={inputCls} value={form.postal} onChange={update("postal")} placeholder="V0V 0V0" />
        </div>
      </div>

      {/* Interested services */}
      <p className="eyebrow mb-3 mt-7">What you're interested in</p>
      <div className="flex flex-wrap gap-2">
        {interestedServices.map((s) => {
          const active = services.includes(s);
          return (
            <button
              type="button"
              key={s}
              onClick={() => toggleService(s)}
              className={`rounded-full border px-3.5 py-2 text-sm font-medium transition ${
                active
                  ? "border-deepsea bg-deepsea/10 text-deepsea"
                  : "border-hairline text-slatey hover:border-sky"
              }`}
            >
              {active && <i className="ti ti-check mr-1 text-xs" />}
              {s}
            </button>
          );
        })}
      </div>

      {/* Tell us more */}
      <p className="eyebrow mb-3 mt-7">Tell us more</p>
      <div className="grid gap-4">
        <div>
          <label className={labelCls} htmlFor="theme">Theme or special requests</label>
          <textarea id="theme" rows={2} className={inputCls} value={form.theme} onChange={update("theme")} placeholder="Colours, theme, favourite characters…" />
        </div>

        {decorSelected && (
          <div className="rounded-xl border border-dashed border-sky/50 bg-sky/5 p-4">
            <label className={labelCls} htmlFor="photos">
              <i className="ti ti-photo mr-1" /> Reference photos for decor
            </label>
            <input
              id="photos"
              type="file"
              accept="image/*"
              multiple
              className="block w-full text-sm text-slatey file:mr-3 file:rounded-full file:border-0 file:bg-twist file:px-4 file:py-2 file:font-semibold file:text-white"
              onChange={(e) =>
                setPhotos(Array.from(e.target.files ?? []).map((f) => f.name))
              }
            />
            {photos.length > 0 && (
              <p className="mt-2 text-xs text-slatey">
                Selected: {photos.join(", ")}. We'll follow up so you can send the full-res
                images (or share them on WhatsApp).
              </p>
            )}
          </div>
        )}

        <div>
          <label className={labelCls} htmlFor="additional">Additional info</label>
          <textarea id="additional" rows={2} className={inputCls} value={form.additional} onChange={update("additional")} placeholder="Anything else we should know?" />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-pink/10 px-4 py-3 text-sm text-pink">
          {error} You can also reach us directly at{" "}
          <a className="font-semibold underline" href={`mailto:${business.email}`}>
            {business.email}
          </a>{" "}
          or on WhatsApp.
        </p>
      )}

      <div className="mt-6 grid gap-3 sm:grid-cols-[1.5fr_1fr]">
        <button
          ref={submitFx}
          type="submit"
          disabled={status === "submitting"}
          className="btn-shine relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-twist px-7 py-4 font-body font-semibold text-white shadow-[0_10px_22px_-8px_rgba(255,122,31,0.6)] disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send Booking Inquiry"}
        </button>
        <a
          ref={waFx}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 font-body font-semibold text-white"
        >
          <i className="ti ti-brand-whatsapp text-lg" /> WhatsApp
        </a>
      </div>
      <p className="mt-3 text-center text-xs text-slatey">
        We'll confirm availability, travel &amp; the best package — usually within 24 hours.
      </p>
    </form>
  );
}
