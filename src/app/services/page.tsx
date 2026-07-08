import type { Metadata } from "next";
import { services } from "@/lib/content";
import { Container, PageHeader, SectionHeading, ServiceCard, CTASection } from "@/components/ui";

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
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
