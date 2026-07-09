import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
<<<<<<< HEAD
import { site, nav, services, benefits, credentials } from "@/lib/content";
=======
import { site, nav, services, benefits } from "@/lib/content";
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
import { Container, Icon, Logo, SocialLinks } from "@/components/ui";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-white">
      {/* Benefits strip */}
      <div className="border-b border-white/10 bg-navy-900">
        <Container className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.text} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold-400">
                <Icon name={b.icon} className="h-5 w-5" />
              </span>
              <p className="text-sm leading-snug text-white/85">{b.text}</p>
            </div>
          ))}
        </Container>
      </div>

      {/* Main footer */}
      <Container className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{site.intro}</p>
<<<<<<< HEAD
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Certifications">
            {credentials.map((c) => (
              <li key={c.label} className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-white/80">
                {c.label}
              </li>
            ))}
          </ul>
=======
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
          <SocialLinks socials={site.socials} className="mt-5" />
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/70 transition-colors hover:text-gold-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <Link href="/services" className="text-white/70 transition-colors hover:text-gold-400">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Get in Touch</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span className="text-white/70">
                {site.address.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span className="text-white/70">
                {site.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block transition-colors hover:text-gold-400">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span className="text-white/70">
                {site.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="block transition-colors hover:text-gold-400">
                    {e}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span className="text-white/70">
                <span className="block">{site.hours.line1}</span>
                <span className="block">{site.hours.line2}</span>
              </span>
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            &copy; {year} {site.name} All rights reserved.
          </p>
          <p>Trade Beyond Borders, Beyond Limits.</p>
        </Container>
      </div>
    </footer>
  );
}
