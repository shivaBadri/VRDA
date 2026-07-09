"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { USE_OFFICIAL_LOGO, OFFICIAL_LOGO_SRC } from "@/lib/brand";

/**
 * Renders the official VRDA Prime logo image. If it fails to load
 * (or official logo is disabled), it falls back to the vector emblem
 * passed as `fallback` — so the mark is never broken.
 */
export function OfficialMark({
  className = "",
  fallback,
}: {
  className?: string;
  fallback: ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (!USE_OFFICIAL_LOGO || failed) return <>{fallback}</>;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={OFFICIAL_LOGO_SRC}
      alt="VRDA Prime logo"
      className={`${className} object-contain`}
      onError={() => setFailed(true)}
      loading="eager"
      decoding="async"
    />
  );
}
