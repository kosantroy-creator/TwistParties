import type { CSSProperties } from "react";

/**
 * Renders a <picture> serving AVIF → WebP → original, given a /photos/x.jpg src.
 * The .webp/.avif siblings are produced by scripts/optimize-images.mjs.
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  style,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  loading?: "lazy" | "eager";
}) {
  const base = src.replace(/\.(jpe?g|png)$/i, "");
  const isPhoto = /\/photos\//.test(src) && /\.(jpe?g|png)$/i.test(src);

  if (!isPhoto) {
    return <img src={src} alt={alt} loading={loading} className={className} style={style} />;
  }

  return (
    <picture>
      <source srcSet={`${base}.avif`} type="image/avif" />
      <source srcSet={`${base}.webp`} type="image/webp" />
      <img src={src} alt={alt} loading={loading} className={className} style={style} />
    </picture>
  );
}
