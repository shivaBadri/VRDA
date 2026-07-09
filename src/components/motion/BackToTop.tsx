"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import type Lenis from "lenis";

/**
 * Back-to-top control. Fades in after the reader scrolls down, and uses
 * Lenis for a smooth programmatic scroll when available (falls back to
 * native smooth scroll otherwise). Positioned bottom-left so it never
 * collides with the WhatsApp button on the right.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setVisible(window.scrollY > 600);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.25} aria-hidden="true" />
    </button>
  );
}
