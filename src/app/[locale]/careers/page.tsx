import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/section";
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
    title: dict.careers.meta.title,
    description: dict.careers.meta.description,
    path: "/careers",
    locale: raw,
  });
}

export default async function CareersPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const { careers } = dict;
  const teams = Object.values(careers.life.teams);

  return (
    <>
      <PageHero
        eyebrow={careers.hero.eyebrow}
        title={careers.hero.title}
        description={careers.hero.description}
      />
      <Section>
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Eyebrow>{careers.life.eyebrow}</Eyebrow>
            <Heading>{careers.life.title}</Heading>
            <p className="mt-5 leading-7 text-muted-foreground">{careers.life.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {teams.map((team) => (
              <a
                key={team}
                href={`mailto:${siteConfig.careersEmail}?subject=${encodeURIComponent(`Career interest: ${team}`)}`}
                className="group flex min-h-32 flex-col justify-between rounded-3xl border border-border bg-card p-6 transition hover:border-cyan-500"
              >
                <BriefcaseBusiness className="size-5 text-cyan-500" />
                <span className="flex items-center justify-between font-display text-lg font-semibold">
                  {team}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-muted">
        <Container>
          <Eyebrow>{careers.open.eyebrow}</Eyebrow>
          <Heading>{careers.open.title}</Heading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            {careers.open.description}
          </p>
          <a
            href={`mailto:${siteConfig.careersEmail}`}
            className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600"
          >
            {siteConfig.careersEmail}
            <ArrowRight className="size-4" />
          </a>
        </Container>
      </Section>
    </>
  );
}
