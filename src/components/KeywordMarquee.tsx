"use client";

import Marquee from "react-fast-marquee";

const KEYWORDS = [
  "EXPORT",
  "IMPORT",
  "GLOBAL SOURCING",
  "LOGISTICS",
  "SUPPLY CHAIN",
  "MERCHANT EXPORTING",
  "INTERNATIONAL TRADE",
];

/**
 * Continuous, seamless keyword marquee. Uses react-fast-marquee with
 * `autoFill` so the loop never shows a visible jump. The band is marked
 * aria-hidden (decorative); the same terms exist as real page content.
 */
export default function KeywordMarquee() {
  return (
    <section className="min-h-[70px] overflow-hidden border-y border-white/10 bg-navy-950 py-5 sm:min-h-[84px] sm:py-6" aria-hidden="true">
      <Marquee autoFill speed={45} gradient={false}>
        {KEYWORDS.map((word) => (
          <span key={word} className="mx-6 inline-flex items-center gap-6 sm:mx-8 sm:gap-8">
            <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-white/90 sm:text-3xl">
              {word}
            </span>
            <span className="h-2 w-2 rounded-full bg-gold-500" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
