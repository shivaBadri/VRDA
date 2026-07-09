"use client";

import { useEffect, useState } from "react";

/**
 * A thin scroll-progress bar pinned to the very top of the viewport.
 * Reflects how far the reader has scrolled through the page. It's a
 * functional indicator (not decorative motion), updated on a rAF loop
 * with passive listeners so it stays smooth and cheap.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0);
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
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden="true">
      <div
        className="h-full origin-left bg-gradient-to-r from-gold-500 via-gold-400 to-aqua-400 shadow-[0_0_8px_rgba(233,164,19,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
