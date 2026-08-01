import { ArrowRight, Handshake } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/section";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/navigation";
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
    title: dict.partnership.meta.title,
    description: dict.partnership.meta.description,
    path: "/partnership",
    locale: raw,
  });
}

export default async function PartnershipPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const { partnership } = dict;

  return (
    <>
      <PageHero
        eyebrow={partnership.hero.eyebrow}
        title={partnership.hero.title}
        description={partnership.hero.description}
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Handshake className="size-12 text-cyan-500" strokeWidth={1.2} />
            <Heading className="mt-8">{partnership.body.title}</Heading>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted-foreground">
            {Object.values(partnership.body.paragraphs).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-muted">
        <Container>
          <Eyebrow>{partnership.model.eyebrow}</Eyebrow>
          <div className="grid gap-5 md:grid-cols-3">
            {Object.values(partnership.model.items).map((item) => (
              <article key={item.title} className="rounded-3xl border border-border bg-card p-8">
                <h2 className="font-display text-2xl font-semibold">{item.title}</h2>
                <p className="mt-4 leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
          <Button asChild className="mt-10">
            <Link href={localePath(locale, "/contact")}>
              {partnership.model.cta} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Container>
      </Section>
    </>
  );
}
