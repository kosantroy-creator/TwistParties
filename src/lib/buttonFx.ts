import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Premium button micro-interaction:
 *  - magnetic pull toward the cursor while hovering
 *  - springy scale-up on hover, snappy press on click
 * Honours prefers-reduced-motion (no-op).
 */
export function useButtonFx<T extends HTMLElement = HTMLElement>(
  magnetic = true,
  strength = 0.3
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const enter = () => gsap.to(el, { scale: 1.06, duration: 0.3, ease: "back.out(3)" });
    const leave = () => {
      gsap.to(el, { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" });
      xTo(0);
      yTo(0);
    };
    const down = () => gsap.to(el, { scale: 0.93, duration: 0.12, ease: "power2.out" });
    const up = () => gsap.to(el, { scale: 1.06, duration: 0.2, ease: "back.out(4)" });
    const move = (e: MouseEvent) => {
      if (!magnetic) return;
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * strength);
      yTo((e.clientY - (r.top + r.height / 2)) * strength);
    };

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    el.addEventListener("mousedown", down);
    el.addEventListener("mouseup", up);
    el.addEventListener("mousemove", move);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
      el.removeEventListener("mousedown", down);
      el.removeEventListener("mouseup", up);
      el.removeEventListener("mousemove", move);
      gsap.killTweensOf(el);
    };
  }, [magnetic, strength]);

  return ref;
}
