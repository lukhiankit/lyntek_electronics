import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/ui/section";
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
    title: dict.privacy.meta.title,
    description: dict.privacy.meta.description,
    path: "/privacy",
    locale: raw,
  });
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const { privacy } = dict;

  return (
    <>
      <PageHero
        eyebrow={privacy.hero.eyebrow}
        title={privacy.hero.title}
        description={privacy.hero.description}
      />
      <Section>
        <Container className="max-w-4xl space-y-10 leading-7 text-muted-foreground">
          <p>
            <strong className="text-foreground">{privacy.lastUpdated}</strong>
          </p>
          {Object.values(privacy.sections).map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                {section.title}
              </h2>
              <p className="mt-3">{section.body}</p>
            </section>
          ))}
        </Container>
      </Section>
    </>
  );
}
