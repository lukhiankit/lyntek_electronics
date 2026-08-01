import { ArrowRight } from "lucide-react";
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
    title: dict.vision.meta.title,
    description: dict.vision.meta.description,
    path: "/vision",
    locale: raw,
  });
}

export default async function VisionPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const { vision } = dict;
  const commitments = Object.values(vision.commitments.items);

  return (
    <>
      <PageHero
        eyebrow={vision.hero.eyebrow}
        title={vision.hero.title}
        description={vision.hero.description}
      />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-cyan-300 p-8 text-slate-950 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em]">{vision.cards.vision.title}</p>
            <h2 className="font-display mt-8 text-3xl font-semibold leading-tight sm:text-4xl">
              {vision.cards.vision.description}
            </h2>
          </article>
          <article className="rounded-3xl bg-slate-950 p-8 text-white sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              {vision.cards.mission.title}
            </p>
            <h2 className="font-display mt-8 text-3xl font-semibold leading-tight sm:text-4xl">
              {vision.cards.mission.description}
            </h2>
          </article>
        </Container>
      </Section>
      <Section className="bg-muted">
        <Container>
          <Eyebrow>{vision.commitments.eyebrow}</Eyebrow>
          <Heading>{vision.commitments.title}</Heading>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {commitments.map((item, index) => (
              <article key={item.title} className="rounded-3xl border border-border bg-card p-8">
                <span className="font-mono text-sm text-cyan-600">0{index + 1}</span>
                <h2 className="font-display mt-10 text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
          <Button asChild className="mt-10">
            <Link href={localePath(locale, "/contact")}>
              {vision.commitments.cta} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Container>
      </Section>
    </>
  );
}
