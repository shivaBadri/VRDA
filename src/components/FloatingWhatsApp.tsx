"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";

/* ════════════════════════════════════════════════════════════════
   FloatingWhatsApp
   The desktop position is anchored to the site's content grid
   (max-w-7xl = 1280px, matching `.container-x`) rather than the
   browser edge, so the button reads as part of the layout:

     • Wide / ultra-wide (≥ ~1464px): sits just OUTSIDE the container's
       right edge with a ~20px gap, hugging the content — never glued
       to the screen edge, no matter how wide the monitor.
     • Narrower desktops/laptops where there isn't room outside:
       automatically moves INSIDE the container with a 24px margin.
     • Mobile & tablet (< 1024px): fixed 20px / 20px.

   It also lifts above the footer so it never overlaps it, fades in on
   load, and hides while the mobile nav drawer is open (via a body
   class toggled by the Header).
   ════════════════════════════════════════════════════════════════ */

const CONTAINER_MAX = 1280; // matches Tailwind max-w-7xl / .container-x
const GAP_OUTSIDE = 20; // gap between container edge and button (16–24px)
const MARGIN_INSIDE = 24; // margin when button must sit inside the container
const BTN_DESKTOP = 64; // desktop button diameter
const EDGE_BUFFER = 8; // min breathing room from the screen edge when outside
const DESKTOP_MIN = 1024; // below this → mobile/tablet behaviour
const FOOTER_GAP = 16; // gap kept above the footer

const phone = (site.phones?.[0] ?? "").replace(/[^\d]/g, "");
const waHref = `https://wa.me/${phone}?text=${encodeURIComponent(
  "Hello VRDA Prime, I'd like to know more about your services.",
)}`;

export default function FloatingWhatsApp() {
  const [pos, setPos] = useState({ right: 24, bottom: 32, desktop: true });
  const [mounted, setMounted] = useState(false);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    setMounted(true);

    const compute = () => {
      const W = window.innerWidth;
      const vh = window.innerHeight;
      const desktop = W >= DESKTOP_MIN;
      const baseBottom = desktop ? 32 : 20;

      let right: number;
      if (desktop) {
        // Right edge of the centered content container, in viewport px.
        const containerRight = (W + Math.min(W, CONTAINER_MAX)) / 2;
        const spaceOutside = W - containerRight; // room to the right of the container
        if (spaceOutside >= GAP_OUTSIDE + BTN_DESKTOP + EDGE_BUFFER) {
          // Enough room: park just outside the container, hugging content.
          right = spaceOutside - GAP_OUTSIDE - BTN_DESKTOP;
        } else {
          // Not enough room: tuck inside the container with a 24px margin.
          right = spaceOutside + MARGIN_INSIDE;
        }
      } else {
        right = 20;
      }

      // Lift above the footer so the button never overlaps it.
      let bottom = baseBottom;
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        bottom = Math.max(baseBottom, vh - footerTop + FOOTER_GAP);
      }

      setPos({ right: Math.round(right), bottom: Math.round(bottom), desktop });
    };

    const schedule = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = undefined;
        compute();
      });
    };

    compute();
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("resize", schedule);
      window.removeEventListener("scroll", schedule);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`floating-whatsapp group ${mounted ? "is-in" : ""} ${pos.desktop ? "is-desktop" : ""}`}
      style={{ right: pos.right, bottom: pos.bottom }}
    >
      <span className="fw-tooltip">Chat with us</span>
      <span className="fw-btn">
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.36.101 11.945c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.933 11.933 0 005.71 1.454h.006c6.585 0 11.946-5.36 11.949-11.945a11.86 11.86 0 00-3.48-8.408" />
        </svg>
      </span>
    </a>
  );
}
