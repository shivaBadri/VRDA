import type { Metadata } from "next";
<<<<<<< HEAD
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/content";
import { Container, PageHeader, SectionHeading, ServiceCard, Button, CTASection } from "@/components/ui";
import { Media } from "@/components/Media";
import { media } from "@/lib/media";
=======
import { services } from "@/lib/content";
import { Container, PageHeader, SectionHeading, ServiceCard, CTASection } from "@/components/ui";
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d

export const metadata: Metadata = {
  title: "Services",
  description:
    "Export, import, merchant exporting, sourcing, freight & logistics, supply chain, trade consulting and more — end-to-end global trade services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our Services" crumb="Services" />

      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What We Offer"
            title="End-to-end trade solutions"
            intro="From sourcing the right products to delivering them across borders, our services cover every step of the global trade journey."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<<<<<<< HEAD
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
=======
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
            ))}
          </div>
        </Container>
      </section>

<<<<<<< HEAD
      {/* Logistics capability band */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative py-16 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div data-reveal="left">
              <Media
              slot={media.servicesBanner}
              className="aspect-[4/3] w-full"
            />
            </div>
            <div data-reveal="right">
              <SectionHeading
                eyebrow="Freight & Logistics"
                title="Logistics that move with your business"
                intro="We coordinate every leg of the journey so your goods arrive on time, in full and fully documented."
                tone="light"
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Air, sea & land freight coordination",
                  "Export documentation & compliance",
                  "Customs clearance support",
                  "Reliable door-to-door delivery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-950">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant="gold">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

=======
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
      <CTASection />
    </>
  );
}
