import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

/**
 * Scroll-reveal wrapper. Fades/slides content in when it enters the viewport.
 * Safe by design:
 *  - Skips during prerender (navigator.webdriver) so static HTML ships visible.
 *  - Skips under prefers-reduced-motion (content stays visible).
 * With `stagger`, the element's direct children animate in sequence — pass the
 * grid classes via `className` so this element IS the grid.
 */
export default function Reveal({
  children,
  className = "",
  stagger = false,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (navigator.webdriver) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = stagger ? Array.from(el.children) : [el];
    gsap.set(targets, { opacity: 0, y });

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            gsap.to(targets, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: stagger ? 0.08 : 0,
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stagger, y]);

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
