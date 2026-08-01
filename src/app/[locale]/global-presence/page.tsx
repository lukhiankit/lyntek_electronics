import { MapPin } from "lucide-react";
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
    title: dict.globalPresence.meta.title,
    description: dict.globalPresence.meta.description,
    path: "/global-presence",
    locale: raw,
  });
}

export default async function GlobalPresencePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const { globalPresence } = dict;
  const locations = Object.values(globalPresence.network.locations);

  return (
    <>
      <PageHero
        eyebrow={globalPresence.hero.eyebrow}
        title={globalPresence.hero.title}
        description={globalPresence.hero.description}
      />
      <Section className="bg-slate-950 text-white">
        <Container>
          <div className="relative min-h-[34rem] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="tech-grid absolute inset-0 opacity-30" />
            <svg
              viewBox="0 0 1000 500"
              className="absolute inset-0 h-full w-full opacity-50"
              aria-label={globalPresence.map.aria}
            >
              <path
                d="M80 155l90-55 135 30 55 70-65 45-130-5-80-35zm315 10 85-45 65 35 5 85-70 35-55-40zm190-20 75-55 165 20 105 100-45 120-120 45-70-70-95-35-35-65z"
                fill="rgba(255,255,255,.06)"
                stroke="rgba(255,255,255,.16)"
              />
              <path
                d="M770 198C650 100 520 130 330 185M770 198C700 235 720 285 675 325"
                fill="none"
                stroke="#67e8f9"
                strokeDasharray="4 7"
              />
              <circle cx="770" cy="198" r="8" fill="#67e8f9" />
              <circle cx="330" cy="185" r="4" fill="#fff" />
              <circle cx="675" cy="325" r="5" fill="#fff" />
            </svg>
            <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                {globalPresence.map.noteTitle}
              </p>
              <p className="mt-2 max-w-2xl text-sm text-white/60">
                {globalPresence.map.noteDescription}
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Eyebrow>{globalPresence.network.eyebrow}</Eyebrow>
          <Heading>{globalPresence.network.title}</Heading>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {locations.map((location) => (
              <article key={location.name} className="rounded-3xl border border-border bg-card p-7">
                <div className="flex items-center justify-between gap-5">
                  <MapPin className="size-5 text-cyan-500" />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    {location.role}
                  </span>
                </div>
                <h2 className="font-display mt-8 text-2xl font-semibold">{location.name}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{location.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
