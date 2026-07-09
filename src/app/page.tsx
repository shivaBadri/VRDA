import { site, stats, coreServices, products, reasons, credentials, approach } from "@/lib/content";
import {
  Container,
  Button,
  SectionHeading,
  StatBand,
  CompactServiceCard,
  ProductTile,
  ReasonCard,
  CTASection,
  GlobeMark,
  revealDelay,
} from "@/components/ui";
import { GlobalNetwork, Particles, FloatingCard } from "@/components/visuals";
import { Media } from "@/components/Media";
import { media } from "@/lib/media";
import { ScrollParallax } from "@/components/motion/ScrollParallax";
import KeywordMarquee from "@/components/KeywordMarquee";
import { Check, ArrowRight, Ship, Plane, Truck, Package } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        {/* Layer 0 — background cargo-ship / port image (priority = LCP) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Media
            slot={media.heroBackdrop}
            className="h-full w-full"
            rounded="rounded-none"
            overlay={false}
            priority
          />
        </div>

        {/* Layer 1 — dark overlay + connectivity grid, for text readability */}
        <div className="absolute inset-0 z-[1] bg-navy-950/60" aria-hidden="true" />
        <div className="hero-grid absolute inset-0 z-[1] opacity-[0.35]" aria-hidden="true" />

        {/* Layer 2 — animated global trade network + ambient glows */}
        <ScrollParallax className="pointer-events-none absolute inset-0 z-[2]" from={0} to={70}>
          <div
            className="absolute left-1/2 top-1/2 w-[135%] max-w-none -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.18]"
            aria-hidden="true"
          >
            <GlobalNetwork className="h-auto w-full" />
          </div>
        </ScrollParallax>
        <div className="pointer-events-none absolute -left-40 top-0 z-[2] h-[36rem] w-[36rem] rounded-full bg-aqua-500/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 bottom-0 z-[2] h-[30rem] w-[30rem] rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />

        {/* Layer 3 — particles + floating cargo icons */}
        <Particles count={40} className="z-[3]" />
        <div className="pointer-events-none absolute inset-0 z-[3] hidden lg:block" aria-hidden="true">
          <Ship className="animate-float absolute left-[7%] top-[24%] h-8 w-8 text-white/15" strokeWidth={1.5} />
          <Plane className="animate-float-slow absolute left-[16%] bottom-[16%] h-7 w-7 text-white/15" strokeWidth={1.5} style={{ animationDelay: "1.2s" }} />
          <Truck className="animate-float absolute right-[9%] top-[14%] h-7 w-7 text-white/12" strokeWidth={1.5} style={{ animationDelay: "0.6s" }} />
          <Package className="animate-drift absolute right-[15%] bottom-[20%] h-6 w-6 text-white/12" strokeWidth={1.5} />
        </div>

        {/* Layer 10 — hero content (floating cards + copy sit above all fx) */}
        <Container className="relative z-10 pb-10 pt-16 sm:pt-20 lg:pb-16 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Copy */}
            <div>
              <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400" style={{ animationDelay: "0ms" }}>
                <span className="node-pulse inline-block h-1.5 w-1.5 rounded-full bg-gold-400" />
                Global Trade &amp; Sourcing
              </p>
              <h1 className="animate-fade-up mt-5 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ animationDelay: "80ms" }}>
                {site.name}
              </h1>
              <p className="animate-fade-up mt-4 font-display text-xl font-semibold text-gold-400 sm:text-2xl" style={{ animationDelay: "160ms" }}>
                {site.tagline}
              </p>
              <p className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg" style={{ animationDelay: "240ms" }}>
                {site.intro}
              </p>
              <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "320ms" }}>
                <Button href="/services" variant="gold">
                  Our Services
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
                </Button>
                <Button href="/contact" variant="outline">Contact Us</Button>
              </div>

              {/* Real credentials strip */}
              <ul className="animate-fade-up mt-8 flex flex-wrap gap-x-5 gap-y-2" style={{ animationDelay: "400ms" }} aria-label="Certifications and memberships">
                {credentials.map((c) => (
                  <li key={c.label} className="flex items-center gap-1.5 text-xs font-semibold text-white/85">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gold-500/90 text-navy-950">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {c.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual: rotating globe + floating stats */}
            <ScrollParallax className="relative hidden aspect-square w-full max-w-lg justify-self-center lg:block" from={0} to={-64}>
              <div className="absolute inset-0 flex items-center justify-center">
                <GlobeMark className="animate-spin-slow h-[30rem] w-[30rem] text-white/20" />
              </div>
              <div className="absolute inset-8 rounded-full border border-white/10" aria-hidden="true" />
              <div className="absolute inset-20 rounded-full border border-white/5" aria-hidden="true" />
              <FloatingCard className="absolute left-0 top-10" delay={0.2}>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500 text-navy-950">
                    <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-white">FIEO Member</span>
                </div>
              </FloatingCard>
              <FloatingCard className="absolute right-0 top-1/3" delay={0.9} float="animate-float-slow">
                <div className="text-center">
                  <div className="font-display text-2xl font-extrabold text-white">50+</div>
                  <div className="text-[11px] uppercase tracking-wide text-white/70">Countries Served</div>
                </div>
              </FloatingCard>
              <FloatingCard className="absolute bottom-10 left-4" delay={1.4}>
                <div className="text-center">
                  <div className="font-display text-2xl font-extrabold text-white">500+</div>
                  <div className="text-[11px] uppercase tracking-wide text-white/70">Global Clients</div>
                </div>
              </FloatingCard>
              <FloatingCard className="absolute bottom-24 right-2" delay={2} float="animate-float-slow">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Ship className="h-4 w-4 text-aqua-400" strokeWidth={1.75} aria-hidden="true" />
                  Air · Sea · Land
                </div>
              </FloatingCard>
            </ScrollParallax>
          </div>

          {/* Stat band with animated counters */}
          <div data-reveal className="relative mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:mt-16 sm:p-6">
            <StatBand stats={stats} variant="onDark" />
          </div>
        </Container>
      </section>

      {/* ── Keyword marquee ── */}
      <KeywordMarquee />

      {/* ─────────────────────── Core services ─────────────────────── */}
      <section id="services">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Core Services"
            intro="A complete suite of global trade solutions — from sourcing and exports to logistics and consulting — built around reliability and reach."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, i) => (
              <CompactServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
          <div data-reveal className="mt-10 text-center">
            <Button href="/services" variant="navy">View All Services</Button>
          </div>
        </Container>
      </section>

      {/* ───────────────── How we work: 7-step sourcing ───────────────── */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative py-16 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
           <Media
             slot={media.approach}
              className="aspect-[4/3] w-full"
            />
            <div>
              <SectionHeading eyebrow={approach.eyebrow} title={approach.title} intro={approach.intro} tone="light" />
              <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                {approach.steps.map((step, i) => (
                  <li key={step.title} data-reveal style={revealDelay(i, 60)} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gold-500 font-display text-sm font-extrabold text-navy-950">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{step.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/70">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────── Featured products ─────────────────────── */}
      <section id="products" className="bg-mist-50">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What We Trade"
            title="Featured Products & Industries"
            intro="A diverse portfolio of quality goods sourced and supplied to meet varying global market demands."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
            {products.map((product, i) => (
              <ProductTile key={product.title} product={product} index={i} />
            ))}
          </div>
          <div data-reveal className="mt-10 text-center">
            <Button href="/products" variant="navy">View All Products</Button>
          </div>
        </Container>
      </section>

      {/* ─────────────────── Global reach (signature) ─────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 text-white">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative py-16 sm:py-20">
          <SectionHeading
            eyebrow="Global Reach"
            title="Connecting your business to markets worldwide"
            intro="From our base in Hyderabad, we move goods across air, sea and land to partners around the globe — coordinated end to end."
            align="center"
            tone="light"
          />
          <div data-reveal className="relative mt-10">
            <GlobalNetwork className="mx-auto h-auto w-full max-w-5xl text-white/70" showLabels />
          </div>
          <div data-reveal className="mx-auto mt-6 max-w-3xl">
            <StatBand stats={stats} variant="onDark" />
          </div>
        </Container>
      </section>

      {/* ───────────────────────── Why us ───────────────────────── */}
      <section id="why">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built on Trust, Delivered with Care"
            intro="We are driven by a commitment to excellence in international trade and consulting — and to exceeding expectations on every engagement."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {reasons.slice(0, 3).map((reason, i) => (
              <ReasonCard key={reason.title} reason={reason} index={i} />
            ))}
          </div>
          <div data-reveal className="mt-10">
            <Button href="/why-choose-us" variant="navy">See All Reasons</Button>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
