import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/content";
import { Container, PageHeader, SocialLinks } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.name}. Call, email or send us a message and our team will get back to you as soon as possible.`,
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapQuery)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" crumb="Contact Us" />

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Info */}
            <div data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">Get in Touch</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                We are here to help your business
              </h2>
              <span className="gold-rule mt-4" />
              <p className="mt-5 text-base leading-relaxed text-steel">
                Feel free to reach out to us. Our team will get back to you as soon as possible with the
                information or quote you need.
              </p>

              <ul className="mt-8 space-y-6">
                <InfoRow icon={<Phone className="h-5 w-5" />} label="Phone">
                  {site.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block transition-colors hover:text-gold-600">
                      {p}
                    </a>
                  ))}
                </InfoRow>
                <InfoRow icon={<Mail className="h-5 w-5" />} label="Email">
                  {site.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block transition-colors hover:text-gold-600">
                      {e}
                    </a>
                  ))}
                </InfoRow>
                <InfoRow icon={<MapPin className="h-5 w-5" />} label="Address">
                  {site.address.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </InfoRow>
                <InfoRow icon={<Clock className="h-5 w-5" />} label="Working Hours">
                  <span className="block">{site.hours.line1}</span>
                  <span className="block">{site.hours.line2}</span>
                </InfoRow>
              </ul>

              <div className="mt-8">
                <p className="text-sm font-medium text-navy-900">Follow us</p>
                <div className="mt-3 rounded-lg bg-navy-900 p-2 inline-block">
                  <SocialLinks socials={site.socials} />
                </div>
              </div>
            </div>

            {/* Form */}
            <div data-reveal="right">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="bg-mist-50">
        <Container className="pb-16 sm:pb-20">
          <div className="overflow-hidden rounded-2xl border border-line shadow-sm">
            <iframe
              title={`Map showing ${site.name} location`}
              src={mapSrc}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[420px] w-full border-0"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-mist-100 text-navy-800">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-navy-900">{label}</p>
        <div className="mt-1 text-sm leading-relaxed text-steel">{children}</div>
      </div>
    </li>
  );
}
