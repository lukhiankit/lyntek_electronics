import { Lightbulb, Microscope, Network, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/section";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

const cultureIcons = {
  evidence: Microscope,
  purpose: Lightbulb,
  team: Users,
  collaboration: Network,
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return createMetadata({
    title: dict.about.meta.title,
    description: dict.about.meta.description,
    path: "/about",
    locale: raw,
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const { about } = dict;

  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        description={about.hero.description}
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Eyebrow>{about.overview.eyebrow}</Eyebrow>
            <Heading>{about.overview.title}</Heading>
          </div>
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            {Object.values(about.overview.paragraphs).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-muted">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>{about.culture.eyebrow}</Eyebrow>
            <Heading>{about.culture.title}</Heading>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {(Object.keys(cultureIcons) as (keyof typeof cultureIcons)[]).map((key) => {
              const Icon = cultureIcons[key];
              const item = about.culture.items[key];
              return (
                <article key={key} className="rounded-3xl border border-border bg-card p-8">
                  <Icon className="size-6 text-cyan-500" strokeWidth={1.5} />
                  <h2 className="font-display mt-8 text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Eyebrow>{about.values.eyebrow}</Eyebrow>
          <div className="mt-8 grid border-y border-border sm:grid-cols-2">
            {Object.values(about.values.items).map((item, index) => (
              <div
                key={item.title}
                className={`p-8 sm:p-10 ${index % 2 === 0 ? "sm:border-r sm:border-border" : ""} ${index < 2 ? "border-b border-border" : ""}`}
              >
                <p className="font-mono text-xs text-cyan-600">0{index + 1}</p>
                <h2 className="font-display mt-5 text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
