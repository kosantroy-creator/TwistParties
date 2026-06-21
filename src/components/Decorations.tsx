import type { CSSProperties } from "react";
import type { Photo } from "../lib/site";
import SmartImage from "./SmartImage";

/** Decorative floating balloon. */
export function Balloon({
  size = 60,
  color = "#FFC93C",
  className = "",
  style,
}: {
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className={`balloon block ${className}`}
      style={{
        width: size,
        height: size * 1.22,
        background: color,
        ...style,
      }}
    />
  );
}

/** Small confetti chip — square, round, or rect. */
export function Confetti({
  color = "#FF5DA2",
  shape = "rect",
  className = "",
  style,
}: {
  color?: string;
  shape?: "rect" | "round";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className={`block ${className}`}
      style={{
        width: 12,
        height: shape === "rect" ? 16 : 12,
        background: color,
        borderRadius: shape === "round" ? "50%" : 3,
        ...style,
      }}
    />
  );
}

function isLight(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
}

/**
 * Photo tile — renders a real image when `photo.src` is set, otherwise a
 * coloured placeholder panel. The label doubles as the image alt text.
 */
export function PhotoTile({
  photo,
  className = "",
  minHeight = 130,
}: {
  photo: Photo;
  className?: string;
  minHeight?: number;
}) {
  if (photo.src) {
    return (
      <SmartImage
        src={photo.src}
        alt={photo.label}
        className={`h-full w-full rounded-2xl object-cover shadow-[var(--shadow-soft)] ${className}`}
        style={{ minHeight, background: photo.color }}
      />
    );
  }
  const dark = isLight(photo.color);
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl p-3 text-center font-semibold shadow-[var(--shadow-soft)] ${className}`}
      style={{
        background: photo.color,
        minHeight,
        color: dark ? "#16233D" : "#ffffff",
      }}
    >
      <span className="text-sm leading-tight">{photo.label}</span>
      {photo.sub && (
        <span className="mt-1 text-xs font-medium opacity-80">{photo.sub}</span>
      )}
    </div>
  );
}
