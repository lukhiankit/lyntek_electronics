import { Mail, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/page-hero";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { siteConfig } from "@/content/site";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return createMetadata({
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
    path: "/contact",
    locale: raw,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const { contact } = dict;

  return (
    <>
      <PageHero
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        description={contact.hero.description}
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <Eyebrow>{contact.office.eyebrow}</Eyebrow>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-cyan-500" />
                <div>
                  <h2 className="font-semibold">{contact.office.headquarters}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {contact.office.location}
                    <br />
                    {contact.office.address}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-cyan-500" />
                <div>
                  <h2 className="font-semibold">{contact.office.inquiries}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {contact.office.general}:{" "}
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                    <br />
                    {contact.office.sales}:{" "}
                    <a href={`mailto:${siteConfig.salesEmail}`}>{siteConfig.salesEmail}</a>
                    <br />
                    {contact.office.careers}:{" "}
                    <a href={`mailto:${siteConfig.careersEmail}`}>{siteConfig.careersEmail}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm dictionary={dict} />
        </Container>
      </Section>
    </>
  );
}
