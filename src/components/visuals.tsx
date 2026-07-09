import type { CSSProperties, ReactNode } from "react";
import type { Scene as SceneKey } from "@/lib/media";
import { OfficialMark } from "@/components/BrandLogo";

/* ════════════════════════════════════════════════════════════════
   BRAND LOGO
   A refined circular "global trade" emblem in the VRDA palette
   (navy / aqua ocean / gold trade-route). To use an official logo
   file instead, drop it at /public/brand/logo.svg (or .png) and set
   USE_CUSTOM_LOGO = true — the wordmark stays intact either way.
   ════════════════════════════════════════════════════════════════ */

const USE_CUSTOM_LOGO = false;
const CUSTOM_LOGO_SRC = "/brand/logo.svg";

export function BrandMark({ className = "" }: { className?: string }) {
  if (USE_CUSTOM_LOGO) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={CUSTOM_LOGO_SRC} alt="VRDA Prime logo" className={className} />;
  }
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="VRDA Prime logo">
      <defs>
        <linearGradient id="vrda-globe" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1B3A6B" />
          <stop offset="1" stopColor="#081733" />
        </linearGradient>
        <clipPath id="vrda-clip"><circle cx="24" cy="24" r="21" /></clipPath>
      </defs>
      <g clipPath="url(#vrda-clip)">
        <rect x="0" y="0" width="48" height="48" fill="url(#vrda-globe)" />
        {/* ocean */}
        <path d="M-2 30 Q 24 22 50 30 L50 50 L-2 50 Z" fill="#1E9AD6" opacity="0.9" />
        <path d="M-2 34 Q 24 27 50 34 L50 50 L-2 50 Z" fill="#35B0E8" opacity="0.55" />
        {/* meridians / parallels */}
        <g fill="none" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.28">
          <ellipse cx="24" cy="24" rx="9" ry="21" />
          <ellipse cx="24" cy="24" rx="18" ry="21" />
          <line x1="3" y1="24" x2="45" y2="24" />
          <line x1="24" y1="3" x2="24" y2="45" />
        </g>
        {/* gold trade route */}
        <path d="M9 33 Q 24 8 39 18" fill="none" stroke="#F2B53D" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="33" r="2.4" fill="#F2B53D" />
        <circle cx="39" cy="18" r="2.4" fill="#E9A413" />
      </g>
      <circle cx="24" cy="24" r="21" fill="none" stroke="#E9A413" strokeWidth="1.6" />
    </svg>
  );
}

export function Logo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const nameColor = tone === "light" ? "text-white" : "text-navy-900";
  const subColor = tone === "light" ? "text-white/70" : "text-steel";
  return (
    <span className={`group flex items-center gap-3 ${className}`}>
      <OfficialMark
        className="h-11 w-11 shrink-0 transition-transform duration-500 group-hover:scale-105"
        fallback={<BrandMark className="h-11 w-11 shrink-0 transition-transform duration-500 group-hover:rotate-[8deg]" />}
      />
      <span className="leading-tight">
        <span className={`block font-display text-lg font-extrabold tracking-tight ${nameColor}`}>VRDA PRIME</span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.16em] ${subColor}`}>Overseas Pvt. Ltd.</span>
      </span>
    </span>
  );
}

/* ════════════════════════════════════════════════════════════════
   PARTICLES  —  deterministic (SSR-safe) floating dots
   ════════════════════════════════════════════════════════════════ */

export function Particles({ count = 18, className = "" }: { count?: number; className?: string }) {
  const dots = Array.from({ length: count }, (_, i) => {
    // deterministic pseudo-random so server & client markup match
    const r1 = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
    const r2 = Math.abs(Math.sin(i * 78.233) * 12543.877) % 1;
    const r3 = Math.abs(Math.sin(i * 3.111) * 9999.77) % 1;
    const size = 2 + Math.round(r3 * 4);
    const style: CSSProperties = {
      left: `${(r1 * 100).toFixed(2)}%`,
      top: `${(r2 * 100).toFixed(2)}%`,
      width: size,
      height: size,
      background: i % 3 === 0 ? "#F2B53D" : "#35B0E8",
      opacity: 0.25 + r3 * 0.4,
      // custom props consumed by the .particle keyframes
      ["--pDur" as string]: `${(10 + r1 * 12).toFixed(1)}s`,
      ["--pDelay" as string]: `${(r2 * 6).toFixed(1)}s`,
    };
    return <span key={i} className="particle" style={style} aria-hidden="true" />;
  });
  return <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">{dots}</div>;
}

/* ════════════════════════════════════════════════════════════════
   GLOBAL TRADE NETWORK  —  the signature animated world map
   ════════════════════════════════════════════════════════════════ */

const HUB = { x: 640, y: 275, label: "Hyderabad" };
const NODES: { x: number; y: number; label: string }[] = [
  { x: 215, y: 205, label: "Americas" },
  { x: 300, y: 375, label: "South America" },
  { x: 505, y: 172, label: "Europe" },
  { x: 520, y: 320, label: "Africa" },
  { x: 770, y: 300, label: "SE Asia" },
  { x: 805, y: 205, label: "East Asia" },
  { x: 862, y: 398, label: "Oceania" },
];

function arc(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const lift = Math.min(140, Math.hypot(b.x - a.x, b.y - a.y) * 0.32);
  return `M ${a.x} ${a.y} Q ${mx} ${my - lift} ${b.x} ${b.y}`;
}

function packetStyle(path: string, delay: number): CSSProperties {
  const s: CSSProperties = { animationDelay: `${delay.toFixed(2)}s` };
  // offset-path isn't in the CSSProperties type but is valid CSS
  (s as Record<string, string>).offsetPath = `path('${path}')`;
  return s;
}

export function GlobalNetwork({ className = "", showLabels = false }: { className?: string; showLabels?: boolean }) {
  return (
    <svg viewBox="0 0 1000 500" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {/* faint dotted graticule for a world-map texture */}
      <defs>
        <pattern id="net-dots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="currentColor" opacity="0.13" />
        </pattern>
        <radialGradient id="net-fade" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="net-mask"><rect width="1000" height="500" fill="url(#net-fade)" /></mask>
      </defs>
      <g mask="url(#net-mask)">
        <rect width="1000" height="500" fill="url(#net-dots)" />
        {/* longitude/latitude sweep */}
        <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.12">
          <ellipse cx="500" cy="250" rx="470" ry="230" />
          <ellipse cx="500" cy="250" rx="330" ry="230" />
          <ellipse cx="500" cy="250" rx="180" ry="230" />
          <line x1="30" y1="250" x2="970" y2="250" />
        </g>
      </g>

      {/* routes hub → nodes */}
      {NODES.map((n, i) => (
        <g key={`route-${i}`}>
          <path d={arc(HUB, n)} fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.22" />
          <path
            d={arc(HUB, n)}
            fill="none"
            stroke="#F2B53D"
            strokeWidth="1.6"
            className="route-line"
            style={{ animationDelay: `${(i * 0.28).toFixed(2)}s` }}
          />
          {/* travelling packet */}
          <circle r="3" fill="#F2B53D" className="packet" style={packetStyle(arc(HUB, n), i * 0.8)} />
        </g>
      ))}

      {/* destination nodes */}
      {NODES.map((n, i) => (
        <g key={`node-${i}`}>
          <circle cx={n.x} cy={n.y} r="9" fill="#35B0E8" opacity="0.25" className="node-pulse" style={{ animationDelay: `${(i * 0.3).toFixed(2)}s` }} />
          <circle cx={n.x} cy={n.y} r="3.4" fill="#35B0E8" />
          {showLabels ? (
            <text x={n.x} y={n.y - 14} textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.6" className="font-sans">{n.label}</text>
          ) : null}
        </g>
      ))}

      {/* hub */}
      <g>
        <circle cx={HUB.x} cy={HUB.y} r="16" fill="#F2B53D" opacity="0.22" className="node-pulse" />
        <circle cx={HUB.x} cy={HUB.y} r="6" fill="#F2B53D" />
        <circle cx={HUB.x} cy={HUB.y} r="6" fill="none" stroke="#fff" strokeWidth="1.4" opacity="0.7" />
        {showLabels ? (
          <text x={HUB.x} y={HUB.y + 30} textAnchor="middle" fontSize="13" fontWeight="700" fill="#F2B53D">{HUB.label}</text>
        ) : null}
      </g>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════
   FLOATING CARD  —  small glass badge for the hero
   ════════════════════════════════════════════════════════════════ */

export function FloatingCard({
  children,
  className = "",
  delay = 0,
  float = "animate-float",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  float?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur ${float} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   SCENES  —  bespoke, royalty-free line-art illustrations
   ════════════════════════════════════════════════════════════════ */

export function SceneArt({ scene }: { scene: SceneKey }) {
  const stroke = { fill: "none", stroke: "#FFFFFF", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const gold = "#F2B53D";
  const aqua = "#35B0E8";
  switch (scene) {
    case "port":
      return (
        <g>
          <line x1="20" y1="150" x2="280" y2="150" {...stroke} opacity="0.5" />
          {/* crane */}
          <path d="M70 150 V60 H190" {...stroke} />
          <line x1="70" y1="78" x2="150" y2="78" {...stroke} />
          <line x1="150" y1="60" x2="150" y2="100" stroke={gold} strokeWidth="2" />
          <rect x="138" y="100" width="24" height="16" fill={gold} rx="2" />
          {/* stacked containers */}
          <g opacity="0.95">
            <rect x="40" y="120" width="46" height="26" rx="2" stroke={aqua} strokeWidth="2" fill="none" />
            <rect x="92" y="120" width="46" height="26" rx="2" {...stroke} />
            <rect x="66" y="92" width="46" height="26" rx="2" fill={gold} opacity="0.85" />
          </g>
          {/* ship hull */}
          <path d="M170 150 h96 l-14 22 h-68 z" stroke={aqua} strokeWidth="2" fill="none" />
        </g>
      );
    case "cargoShip":
      return (
        <g>
          <path d="M30 150 Q 150 168 270 150" {...stroke} opacity="0.5" />
          <path d="M60 118 h150 l-16 30 h-118 z" {...stroke} />
          <g>
            <rect x="80" y="96" width="26" height="22" rx="2" fill={aqua} opacity="0.85" />
            <rect x="110" y="96" width="26" height="22" rx="2" fill={gold} opacity="0.85" />
            <rect x="140" y="96" width="26" height="22" rx="2" stroke="#fff" strokeWidth="2" fill="none" />
            <rect x="95" y="74" width="26" height="22" rx="2" stroke="#fff" strokeWidth="2" fill="none" />
            <rect x="125" y="74" width="26" height="22" rx="2" fill={aqua} opacity="0.6" />
          </g>
          <line x1="205" y1="118" x2="230" y2="82" {...stroke} />
        </g>
      );
    case "airFreight":
      return (
        <g>
          <path d="M40 170 Q 150 150 260 120" stroke={gold} strokeWidth="2" strokeDasharray="4 7" fill="none" />
          <g transform="translate(150 96) rotate(-18)">
            <path d="M-58 0 L46 0 L64 8 L46 10 L-40 10 Z" {...stroke} />
            <path d="M-18 0 L-4 -30 L8 -30 L0 0 Z" {...stroke} />
            <path d="M-18 10 L-6 34 L4 34 L0 10 Z" fill={aqua} opacity="0.7" />
            <path d="M40 0 L52 -14 L60 -14 L52 2 Z" {...stroke} />
          </g>
          <circle cx="40" cy="170" r="3.5" fill={gold} />
          <circle cx="260" cy="120" r="3.5" fill={aqua} />
        </g>
      );
    case "warehouse":
      return (
        <g>
          <path d="M40 60 L150 30 L260 60" {...stroke} />
          <line x1="40" y1="60" x2="40" y2="160" {...stroke} />
          <line x1="260" y1="60" x2="260" y2="160" {...stroke} />
          <line x1="40" y1="160" x2="260" y2="160" {...stroke} opacity="0.6" />
          {/* racks */}
          <g stroke="#fff" strokeWidth="2" opacity="0.85">
            <line x1="90" y1="80" x2="90" y2="160" />
            <line x1="150" y1="70" x2="150" y2="160" />
            <line x1="210" y1="80" x2="210" y2="160" />
            <line x1="70" y1="110" x2="230" y2="110" opacity="0.5" />
            <line x1="70" y1="136" x2="230" y2="136" opacity="0.5" />
          </g>
          <rect x="98" y="116" width="18" height="16" fill={gold} opacity="0.85" rx="1" />
          <rect x="158" y="142" width="18" height="14" fill={aqua} opacity="0.85" rx="1" />
          <rect x="118" y="142" width="18" height="14" stroke="#fff" strokeWidth="2" fill="none" rx="1" />
        </g>
      );
    case "containers":
      return (
        <g>
          <g>
            <rect x="60" y="110" width="60" height="34" rx="2" fill={aqua} opacity="0.85" />
            <rect x="124" y="110" width="60" height="34" rx="2" stroke="#fff" strokeWidth="2" fill="none" />
            <rect x="90" y="72" width="60" height="34" rx="2" fill={gold} opacity="0.85" />
            <rect x="154" y="72" width="60" height="34" rx="2" stroke="#fff" strokeWidth="2" fill="none" />
          </g>
          <g stroke="#fff" strokeWidth="1" opacity="0.4">
            <line x1="70" y1="110" x2="70" y2="144" /><line x1="110" y1="110" x2="110" y2="144" />
            <line x1="134" y1="110" x2="134" y2="144" /><line x1="174" y1="110" x2="174" y2="144" />
          </g>
          <line x1="40" y1="150" x2="240" y2="150" {...stroke} opacity="0.5" />
        </g>
      );
    case "meeting":
      return (
        <g>
          <circle cx="110" cy="80" r="18" {...stroke} />
          <path d="M80 150 v-16 a30 30 0 0 1 60 0 v16" {...stroke} />
          <circle cx="190" cy="80" r="18" fill={aqua} opacity="0.7" />
          <path d="M160 150 v-16 a30 30 0 0 1 60 0 v16" stroke={gold} strokeWidth="2" fill="none" />
          {/* handshake spark */}
          <path d="M140 116 l10 8 l10 -8" stroke={gold} strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <circle cx="150" cy="128" r="2.5" fill={gold} />
        </g>
      );
    case "network":
    default:
      return (
        <g transform="translate(50 20) scale(0.6)">
          <GlobalNetwork className="text-white" />
        </g>
      );
  }
}

