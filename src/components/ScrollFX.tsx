"use client";

import { useEffect } from "react";

/**
 * One lightweight controller for all scroll-driven motion:
 *  - [data-reveal] / [data-img-reveal]  → add `.is-visible` when in view
 *  - [data-parallax="0.15"]             → subtle translate on scroll
 *
 * All effects are gated by `prefers-reduced-motion`. The `.js` class is
 * added in the document <head> before paint (see layout) so there is no
 * flash; this effect only wires up behaviour.
 */
export default function ScrollFX() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.add("js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // ── Reveal on scroll ─────────────────────────────────────────
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-img-reveal]"),
    );

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
      );
      revealTargets.forEach((el) => observer!.observe(el));
    } else {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
    }

    // ── Parallax ────────────────────────────────────────────────
    const parallaxTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    ).map((el) => ({ el, speed: parseFloat(el.dataset.parallax || "0.12") }));

    let ticking = false;
    const applyParallax = () => {
      const y = window.scrollY;
      for (const { el, speed } of parallaxTargets) {
        el.style.transform = `translate3d(0, ${(y * speed).toFixed(2)}px, 0)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(applyParallax);
      }
    };

    if (parallaxTargets.length > 0) {
      applyParallax();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
