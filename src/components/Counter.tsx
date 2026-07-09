"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated count-up for stat values like "10+", "500+", "24/7".
 * Only the numeric portion animates; any prefix/suffix (+, /7, %, etc.)
 * is preserved. Values without a leading number (or containing "/")
 * render verbatim. Respects prefers-reduced-motion.
 */
export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^(\D*)(\d[\d,]*)(.*)$/);
  const countable = !!match && !value.includes("/");
  const prefix = match?.[1] ?? "";
  const target = countable ? parseInt((match?.[2] ?? "0").replace(/,/g, ""), 10) : 0;
  const suffix = match?.[3] ?? "";

  const [display, setDisplay] = useState(countable ? 0 : null);

  useEffect(() => {
    if (!countable || !ref.current) return;
    const el = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setDisplay(target);
      return;
    }

    let raf = 0;
    let started = false;
    const run = () => {
      const duration = 1500;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setDisplay(Math.round(eased * target));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            run();
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [countable, target]);

  if (!countable) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
