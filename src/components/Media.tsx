"use client";

import type { MediaSlot } from "@/lib/media";

export function Media({
  slot,
  className = "",
  rounded = "rounded-2xl",
  overlay = true,
  priority = false,
}: {
  slot: MediaSlot;
  className?: string;
  rounded?: string;
  overlay?: boolean;
  priority?: boolean;
}) {
  const [from, to] = slot.tint ?? ["#12294F", "#081733"];

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }} />
      {slot.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={slot.photo}
          alt={slot.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      {overlay ? (
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/45 to-transparent" />
      ) : null}
    </div>
  );
}
