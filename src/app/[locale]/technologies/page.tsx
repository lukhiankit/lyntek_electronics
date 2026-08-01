import { notFound } from "next/navigation";
import { capabilities, technologies } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/section";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

const capabilityKeys = [
  "embedded",
  "connectivity",
  "edge",
  "power",
  "verification",
  "lifecycle",
] as const;

const layerKeys = ["device", "connectivity", "edge", "cloud"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return createMetadata({
    title: dict.technologies.meta.title,
    description: dict.technologies.meta.description,
    path: "/technologies",
    locale: raw,
  });
}

export default async function TechnologiesPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const { technologies: tech } = dict;

  return (
    <>
      <PageHero
        eyebrow={tech.hero.eyebrow}
        title={tech.hero.title}
        description={tech.hero.description}
      />
      <Section>
        <Container>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {capabilityKeys.map((key, index) => {
              const item = tech.capabilities[key];
              const Icon = capabilities[index].icon;
              return (
                <article key={key} className="bg-card p-8">
                  <Icon className="size-7 text-cyan-500" strokeWidth={1.4} />
                  <h2 className="font-display mt-10 text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
      <Section className="bg-slate-950 text-white">
        <Container>
          <Eyebrow>{tech.architecture.eyebrow}</Eyebrow>
          <Heading>{tech.architecture.title}</Heading>
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {layerKeys.map((key) => {
              const layer = tech.architecture.layers[key];
              return (
                <article
                  key={key}
                  className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <span className="font-mono text-xs text-cyan-300">{layer.label}</span>
                  <h2 className="font-display mt-10 text-2xl font-semibold">{layer.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/55">{layer.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Eyebrow>{tech.core.eyebrow}</Eyebrow>
          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold"
              >
                {technology}
              </span>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
