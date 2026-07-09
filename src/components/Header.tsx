"use client";

<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState } from "react";
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import { Logo, SocialLinks } from "@/components/ui";

<<<<<<< HEAD
// Homepage section ids that some nav items correspond to
const HREF_TO_SECTION: Record<string, string> = {
  "/": "home",
  "/services": "services",
  "/products": "products",
  "/why-choose-us": "why",
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Signal the open mobile drawer to the rest of the page (e.g. the
  // floating WhatsApp button hides while the drawer is open).
  useEffect(() => {
    document.body.classList.toggle("drawer-open", open);
    return () => document.body.classList.remove("drawer-open");
  }, [open]);

  // Elevate the bar once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav item for the homepage section in view
  useEffect(() => {
    if (pathname !== "/" || !("IntersectionObserver" in window)) {
      setActive(null);
      return;
    }
    const ids = ["home", "services", "products", "why"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    if (pathname === "/") {
      const id = HREF_TO_SECTION[href];
      if (!id) return false;
      return active ? active === id : href === "/";
    }
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };
=======
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d

  return (
    <header className="sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="hidden bg-navy-950 text-white md:block">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
<<<<<<< HEAD
            <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-2 text-white/80 transition-colors hover:text-gold-400">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {site.phones[0]}
            </a>
            <a href={`mailto:${site.emails[0]}`} className="flex items-center gap-2 text-white/80 transition-colors hover:text-gold-400">
=======
            <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {site.phones[0]}
            </a>
            <a href={`mailto:${site.emails[0]}`} className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
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
<<<<<<< HEAD
      <div
        className={`border-b bg-white/90 backdrop-blur transition-shadow duration-300 supports-[backdrop-filter]:bg-white/80 ${
          scrolled ? "border-line shadow-[0_8px_30px_-12px_rgba(10,30,63,0.18)]" : "border-line/70"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
          <Link href="/" aria-label={site.name} className="transition-opacity hover:opacity-90">
=======
      <div className="border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
          <Link href="/" aria-label={site.name}>
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
<<<<<<< HEAD
            {nav.map((item) => {
              const activeItem = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={activeItem ? "page" : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    activeItem ? "text-gold-600" : "text-navy-800 hover:text-gold-600"
                  }`}
                >
                  {item.label}
                  <span
                    className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-500 transition-transform duration-300 ${
                      activeItem ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
=======
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
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="btn btn-gold hidden sm:inline-flex">
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
<<<<<<< HEAD
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-navy-800 transition-colors hover:border-gold-500 hover:text-gold-600 lg:hidden"
=======
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-navy-800 lg:hidden"
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
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
