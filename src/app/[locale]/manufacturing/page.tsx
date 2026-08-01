import { CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/section";
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
    title: dict.manufacturing.meta.title,
    description: dict.manufacturing.meta.description,
    path: "/manufacturing",
    locale: raw,
  });
}

export default async function ManufacturingPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const { manufacturing } = dict;
  const stages = Object.values(manufacturing.taipei.stages);
  const indiaItems = Object.values(manufacturing.india.items);

  return (
    <>
      <PageHero
        eyebrow={manufacturing.hero.eyebrow}
        title={manufacturing.hero.title}
        description={manufacturing.hero.description}
      />
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>{manufacturing.taipei.eyebrow}</Eyebrow>
            <Heading>{manufacturing.taipei.title}</Heading>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {manufacturing.taipei.description}
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage, index) => (
              <article key={stage.title} className="rounded-3xl border border-border bg-card p-7">
                <span className="font-mono text-xs text-cyan-600">0{index + 1}</span>
                <h2 className="font-display mt-8 text-xl font-semibold">{stage.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{stage.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-slate-950 text-white">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <Eyebrow>{manufacturing.india.eyebrow}</Eyebrow>
            <Heading>{manufacturing.india.title}</Heading>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/65">{manufacturing.india.description}</p>
            <p className="mt-5 leading-7 text-white/50">{manufacturing.india.clarifier}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {indiaItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/75">
                  <CheckCircle2 className="size-4 text-cyan-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Eyebrow>{manufacturing.strategy.eyebrow}</Eyebrow>
          <Heading className="max-w-4xl">{manufacturing.strategy.title}</Heading>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {manufacturing.strategy.description}
          </p>
        </Container>
      </Section>
    </>
  );
}
