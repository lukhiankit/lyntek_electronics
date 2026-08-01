import { ClipboardCheck, FlaskConical, RefreshCcw, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/section";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

const practiceIcons = {
  traceability: ClipboardCheck,
  testing: FlaskConical,
  production: ShieldCheck,
  learning: RefreshCcw,
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return createMetadata({
    title: dict.quality.meta.title,
    description: dict.quality.meta.description,
    path: "/quality",
    locale: raw,
  });
}

export default async function QualityPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const { quality } = dict;

  return (
    <>
      <PageHero
        eyebrow={quality.hero.eyebrow}
        title={quality.hero.title}
        description={quality.hero.description}
      />
      <Section>
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>{quality.philosophy.eyebrow}</Eyebrow>
            <Heading>{quality.philosophy.title}</Heading>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {quality.philosophy.description}
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {(Object.keys(practiceIcons) as (keyof typeof practiceIcons)[]).map((key) => {
              const Icon = practiceIcons[key];
              const item = quality.philosophy.practices[key];
              return (
                <article key={key} className="rounded-3xl border border-border bg-card p-8">
                  <Icon className="size-7 text-cyan-500" strokeWidth={1.4} />
                  <h2 className="font-display mt-8 text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
      <Section className="bg-muted">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{quality.reliability.eyebrow}</Eyebrow>
            <Heading>{quality.reliability.title}</Heading>
            <p className="mt-5 leading-7 text-muted-foreground">{quality.reliability.description}</p>
          </div>
          <div>
            <Eyebrow>{quality.compliance.eyebrow}</Eyebrow>
            <Heading>{quality.compliance.title}</Heading>
            <p className="mt-5 leading-7 text-muted-foreground">{quality.compliance.description}</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
