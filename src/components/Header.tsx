"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import { Logo, SocialLinks } from "@/components/ui";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="hidden bg-navy-950 text-white md:block">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {site.phones[0]}
            </a>
            <a href={`mailto:${site.emails[0]}`} className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {site.emails[0]}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">Follow us</span>
            <SocialLinks socials={site.socials} size="sm" />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
          <Link href="/" aria-label={site.name}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive(item.href) ? "text-gold-600" : "text-navy-800 hover:text-gold-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="btn btn-gold hidden sm:inline-flex">
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-navy-800 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open ? (
          <div className="border-t border-line bg-white lg:hidden">
            <nav className="container-x flex flex-col py-3" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isActive(item.href) ? "bg-mist-50 text-gold-600" : "text-navy-800 hover:bg-mist-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-gold mt-2">
                Get a Quote
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
