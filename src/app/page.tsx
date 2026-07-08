import { site, stats, coreServices, products, reasons } from "@/lib/content";
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
} from "@/components/ui";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950">
        <div className="hero-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 top-8 text-white/[0.07] lg:right-0" aria-hidden="true">
          <GlobeMark className="h-[34rem] w-[34rem]" />
        </div>

        <Container className="relative pb-8 pt-16 sm:pt-20 lg:pb-12 lg:pt-24">
          <div className="max-w-3xl">
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
              Welcome to
            </p>
            <h1 className="animate-fade-up mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {site.name}
            </h1>
            <p className="animate-fade-up mt-4 font-display text-xl font-semibold text-gold-400 sm:text-2xl">
              {site.tagline}
            </p>
            <p className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {site.intro}
            </p>
            <div className="animate-fade-up mt-8 flex flex-wrap gap-3">
              <Button href="/services" variant="gold">
                Our Services
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Stat band */}
          <div className="relative mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:mt-16 sm:p-6">
            <StatBand stats={stats} variant="onDark" />
          </div>
        </Container>
      </section>

      {/* Core services */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Core Services"
            intro="A complete suite of global trade solutions — from sourcing and exports to logistics and consulting — built around reliability and reach."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <CompactServiceCard key={service.title} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="navy">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Featured products */}
      <section className="bg-mist-50">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What We Trade"
            title="Featured Products & Industries"
            intro="A diverse portfolio of quality goods sourced and supplied to meet varying global market demands."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
            {products.map((product) => (
              <ProductTile key={product.title} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/products" variant="navy">
              View All Products
            </Button>
          </div>
        </Container>
      </section>

      {/* Why us preview */}
      <section>
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
          <div className="mt-10">
            <Button href="/why-choose-us" variant="navy">
              See All Reasons
            </Button>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
