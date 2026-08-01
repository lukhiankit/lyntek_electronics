import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { industries } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/section";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/navigation";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

const industryKeys = [
  "industrial",
  "energy",
  "mobility",
  "healthcare",
  "buildings",
  "smartHome",
  "oem",
  "consumer",
  "infrastructure",
] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return createMetadata({
    title: dict.industries.meta.title,
    description: dict.industries.meta.description,
    path: "/industries",
    locale: raw,
  });
}

export default async function IndustriesPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const { industries: copy } = dict;

  return (
    <>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        description={copy.hero.description}
      />
      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industryKeys.map((key, index) => {
              const item = copy.items[key];
              const Icon = industries[index].icon;
              return (
                <article
                  key={key}
                  className="group rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="size-7 text-cyan-500" strokeWidth={1.4} />
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h2 className="font-display mt-14 text-2xl font-semibold">{item.name}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
      <Section className="bg-muted">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Eyebrow>{copy.oemCta.eyebrow}</Eyebrow>
            <Heading>{copy.oemCta.title}</Heading>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{copy.oemCta.description}</p>
          </div>
          <Button asChild size="lg">
            <Link href={localePath(locale, "/contact")}>
              {copy.oemCta.cta} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Container>
      </Section>
    </>
  );
}
