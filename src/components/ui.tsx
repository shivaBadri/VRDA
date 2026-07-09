import Link from "next/link";
import type { ReactNode, CSSProperties } from "react";
import {
  Upload,
  Download,
  Handshake,
  PackageSearch,
  Truck,
  Workflow,
  LineChart,
  Code2,
  Briefcase,
  Monitor,
  Wheat,
  Soup,
  Sprout,
  Droplets,
  Stethoscope,
  Shirt,
  Award,
  ShieldCheck,
  Globe2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { Stat, Service, Product, Reason } from "@/lib/content";
import { productImages } from "@/lib/media";
import { Particles } from "@/components/visuals";
import Counter from "@/components/Counter";

// Brand logo lives in visuals.tsx; re-exported here so existing imports keep working
export { Logo } from "@/components/visuals";

const iconMap: Record<string, LucideIcon> = {
  upload: Upload,
  download: Download,
  handshake: Handshake,
  sourcing: PackageSearch,
  truck: Truck,
  workflow: Workflow,
  consulting: LineChart,
  code: Code2,
  briefcase: Briefcase,
  monitor: Monitor,
  rice: Wheat,
  spices: Soup,
  agri: Sprout,
  oils: Droplets,
  medical: Stethoscope,
  textiles: Shirt,
  award: Award,
  shield: ShieldCheck,
  globe: Globe2,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name] ?? PackageSearch;
  return <Cmp className={className} strokeWidth={1.75} aria-hidden="true" />;
}

/** Stagger delay for scroll-reveal grids (consumed by CSS var --reveal-delay) */
export function revealDelay(index = 0, step = 70): CSSProperties {
  return { ["--reveal-delay" as string]: `${index * step}ms` } as CSSProperties;
}

/* ---------- Layout primitives ---------- */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const centered = align === "center";
  return (
    <div data-reveal className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow ? (
        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone === "light" ? "text-gold-400" : "text-gold-600"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${tone === "light" ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      <span className={`gold-rule mt-4 ${centered ? "mx-auto" : ""}`} />
      {intro ? (
        <p className={`mt-5 text-base leading-relaxed ${tone === "light" ? "text-white/80" : "text-steel"}`}>{intro}</p>
      ) : null}
    </div>
  );
}

/* ---------- Buttons ---------- */

type BtnProps = { href: string; children: ReactNode; variant?: "gold" | "navy" | "outline"; className?: string };

export function Button({ href, children, variant = "gold", className = "" }: BtnProps) {
  const base = "btn";
  const styles =
    variant === "gold" ? "btn-gold" : variant === "navy" ? "btn-navy" : "btn-outline";
  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

/* ---------- Decorative globe watermark for the hero ---------- */

export function GlobeMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="200" cy="200" r="150" />
        <ellipse cx="200" cy="200" rx="60" ry="150" />
        <ellipse cx="200" cy="200" rx="115" ry="150" />
        <ellipse cx="200" cy="200" rx="150" ry="60" />
        <ellipse cx="200" cy="200" rx="150" ry="115" />
        <line x1="50" y1="200" x2="350" y2="200" />
        <line x1="200" y1="50" x2="200" y2="350" />
      </g>
      <path d="M70 150 C 160 80, 240 320, 330 250" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
      <circle cx="70" cy="150" r="4" fill="currentColor" />
      <circle cx="330" cy="250" r="4" fill="currentColor" />
    </svg>
  );
}

/* ---------- Feature icon tile ---------- */

export function FeatureIcon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-white ${className}`}>
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}

/* ---------- Cards ---------- */

export function ServiceCard({ service, readMore = true, index = 0 }: { service: Service; readMore?: boolean; index?: number }) {
  return (
    <article
      data-reveal
      style={revealDelay(index)}
      className="card group/card flex h-full flex-col"
    >
      <FeatureIcon name={service.icon} className="transition-transform duration-300 group-hover/card:scale-105 group-hover/card:bg-navy-800" />
      <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{service.description}</p>
      {readMore ? (
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors hover:text-gold-600"
        >
          Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : null}
    </article>
  );
}

export function CompactServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <article data-reveal style={revealDelay(index)} className="card group/card flex h-full flex-col items-start text-left">
      <FeatureIcon name={service.icon} className="transition-transform duration-300 group-hover/card:scale-105 group-hover/card:bg-navy-800" />
      <h3 className="mt-4 font-display text-base font-bold text-navy-900">{service.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-steel">{service.description}</p>
    </article>
  );
}

export function ProductTile({ product, index = 0 }: { product: Product; index?: number }) {
  const image = productImages[product.title] ?? "/images/58z3TYyfnXyMf2UTH7kLDDAXE.png";
  return (
    <article
      data-reveal
      style={revealDelay(index)}
      className="group overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(10,30,63,0.3)]"
    >
      <div className="relative h-44 overflow-hidden">
        <img src={image} alt={product.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <span className="font-display text-sm font-bold text-white">{product.title}</span>
        </div>
      </div>
      <div className="p-5">
        <p className="mt-1.5 text-sm leading-relaxed text-steel">{product.blurb}</p>
      </div>
    </article>
  );
}

export function ReasonCard({ reason, index }: { reason: Reason; index: number }) {
  return (
    <article data-reveal style={revealDelay(index)} className="card group/card h-full">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500 font-display text-lg font-extrabold text-navy-950 transition-transform duration-300 group-hover/card:scale-105">
          {index + 1}
        </span>
        <h3 className="font-display text-lg font-bold text-navy-900">{reason.title}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-steel">{reason.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {reason.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-mist-100 px-3 py-1 text-xs font-medium text-navy-800">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

/* ---------- Stat band ---------- */

export function StatBand({ stats, variant = "onDark" }: { stats: Stat[]; variant?: "onDark" | "card" }) {
  if (variant === "card") {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} data-reveal style={revealDelay(i)} className="rounded-xl border border-line bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(10,30,63,0.25)]">
            <div className="font-display text-3xl font-extrabold text-navy-900">
              <Counter value={s.value} />
            </div>
            <div className="mt-1 text-sm font-medium text-steel">{s.label}</div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 divide-white/10 sm:grid-cols-4 sm:divide-x">
      {stats.map((s, i) => (
        <div key={s.label} data-reveal style={revealDelay(i)} className="px-2 py-4 text-center sm:py-2">
          <div className="font-display text-3xl font-extrabold text-white">
            <Counter value={s.value} />
          </div>
          <div className="mt-1 text-xs font-medium uppercase tracking-wide text-white/70">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Social links (inline SVG for brand-safe rendering) ---------- */

const socialPaths: Record<string, string> = {
  facebook:
    "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  linkedin:
    "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  instagram:
    "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z",
  x: "M18.9 3H22l-6.6 7.55L23.5 21h-5.8l-4.54-5.94L7.7 21H5.6l7.1-8.12L1.5 3h5.95l4.1 5.43L18.9 3Z",
  whatsapp: "M12 2a10 10 0 0 0-8.66 15.11L2 22l5.03-1.33A10 10 0 1 0 12 2Zm5.18 13.83c-.22.61-1.3 1.17-1.8 1.24-.45.06-.99.09-1.6-.08-.37-.1-.84-.23-1.44-.46-.2-.08-.42-.17-.63-.27-.84-.35-1.72-.87-2.42-1.49a7 7 0 0 1-1.08-1.35 4 4 0 0 1-.42-1.04c-.07-.22-.01-.43.2-.57.18-.13.4-.32.6-.48.12-.1.25-.2.38-.3.12-.1.26-.2.38-.32.11-.11.18-.24.24-.37.06-.13.03-.27-.05-.4-.08-.13-.18-.26-.3-.4-.12-.14-.24-.29-.35-.43-.11-.14-.21-.28-.31-.43-.1-.15-.09-.28-.01-.44l.08-.16c.08-.14.17-.29.24-.43.08-.14.16-.29.2-.44.05-.15.05-.3-.01-.46-.05-.15-.1-.3-.15-.45-.06-.15-.12-.29-.18-.44a2.1 2.1 0 0 0-.33-.57c-.14-.17-.3-.32-.48-.43-.17-.11-.36-.15-.55-.17-.2-.01-.39.01-.58.04-.18.03-.38.08-.53.16-.15.08-.29.16-.43.25-.15.1-.28.22-.39.35-.11.12-.23.25-.32.39-.09.15-.16.31-.2.48-.03.14-.05.28-.02.42.05.22.16.43.31.62.16.2.32.39.47.56.15.17.3.34.45.51.14.16.28.31.42.48.13.15.26.31.39.47.12.15.24.32.37.49.13.16.25.34.48.47.33.41.33.75.6 1.03.74.27.14.54.24.78.28.24.04.49.06.74.07.28.01.56-.01.84-.07.24-.05.47-.12.68-.22.2-.1.38-.22.53-.34.15-.12.27-.27.36-.43.09-.16.15-.33.16-.51.01-.18-.01-.34-.05-.48-.06-.15-.13-.28-.22-.41-.06-.1-.13-.19-.21-.28-.07-.08-.14-.15-.21-.22-.07-.07-.13-.14-.2-.2-.06-.06-.13-.11-.2-.14-.07-.03-.12-.04-.17-.04-.05 0-.1 0-.14.01-.04.01-.08.03-.12.06-.04.03-.08.07-.11.12-.04.05-.07.1-.1.15-.04.05-.06.1-.08.15-.03.05-.05.1-.09.15-.04.06-.09.12-.14.18-.04.07-.09.14-.14.2-.05.06-.1.12-.15.18-.04.06-.08.11-.12.15-.04.05-.07.09-.09.11-.03.02-.04.04-.05.05l-.16.17c-.13.14-.26.28-.38.42-.11.14-.21.29-.31.43-.1.14-.2.28-.28.43-.08.15-.13.3-.16.44-.03.14-.04.28-.03.4.01.14.05.28.13.42.25.14.12.3.26.47.4.16.13.35.24.56.35.2 0 .4-.01.61-.02.2-.02.4-.05.57-.1.17-.05.35-.12.53-.23.17-.1.34-.21.5-.37.16-.16.31-.3.44-.45.13-.14.24-.27.34-.39.09-.12.16-.24.22-.37.04-.09.08-.18.1-.27.02-.1.03-.18.03-.24.01-.06.01-.11.01-.14l.01-.02Z",
};

export function SocialLinks({
  socials,
  className = "",
  size = "md",
}: {
  socials: Record<string, string>;
  className?: string;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {Object.entries(socials).map(([key, url]) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={key}
          className={`inline-flex ${dim} items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold-500 hover:text-navy-950`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d={socialPaths[key] ?? socialPaths.linkedin} />
          </svg>
        </a>
      ))}
    </div>
  );
}

/* ---------- Page header banner ---------- */

export function PageHeader({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950">
      <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <Particles count={14} />
      <div className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 text-white/[0.06] md:block" aria-hidden="true">
        <GlobeMark className="animate-spin-slow h-72 w-72" />
      </div>
      <Container className="relative py-16 sm:py-20">
        <h1 className="animate-fade-up font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
        <nav className="animate-fade-up mt-4 flex items-center gap-2 text-sm text-white/70" style={{ animationDelay: "80ms" }} aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-gold-400">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-white">{crumb}</span>
        </nav>
      </Container>
    </section>
  );
}

/* ---------- CTA band ---------- */

export function CTASection() {
  return (
    <section className="bg-mist-50">
      <Container className="py-14 sm:py-16">
        <div data-reveal className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 px-6 py-12 sm:px-12">
          <div className="hero-grid absolute inset-0 opacity-50" aria-hidden="true" />
          <Particles count={12} />
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold-500/10 blur-2xl" aria-hidden="true" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Ready to trade beyond borders?
              </h2>
              <p className="mt-3 text-white/80">
                Tell us what you need to import, export or source. Our team will get back to you quickly with a tailored solution.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="gold">
                Get a Quote
              </Button>
              <Button href="/services" variant="outline">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
