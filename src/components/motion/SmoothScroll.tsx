"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Initialises Lenis smooth scrolling. Lenis drives the *native* scroll
 * position, so existing scroll listeners (progress bar, scroll-spy,
 * parallax, footer-lift) keep working unchanged.
 *
 * - Disabled entirely under prefers-reduced-motion.
 * - The instance is exposed on `window.__lenis` so the back-to-top
 *   button can trigger a smooth programmatic scroll.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // expose for programmatic scrolls (back-to-top, anchors)
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    document.documentElement.classList.add("lenis");

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
