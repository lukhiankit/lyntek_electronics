import { Download, FileText } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/ui/section";
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
    title: dict.downloads.meta.title,
    description: dict.downloads.meta.description,
    path: "/downloads",
    locale: raw,
  });
}

export default async function DownloadsPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const { downloads } = dict;
  const resources = Object.values(downloads.resources);

  return (
    <>
      <PageHero
        eyebrow={downloads.hero.eyebrow}
        title={downloads.hero.title}
        description={downloads.hero.description}
      />
      <Section>
        <Container>
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            {resources.map((resource) => (
              <div
                key={resource.name}
                className="flex flex-col gap-5 border-b border-border p-6 last:border-0 sm:flex-row sm:items-center"
              >
                <FileText className="size-6 shrink-0 text-cyan-500" />
                <div className="flex-1">
                  <h2 className="font-display text-lg font-semibold">{resource.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{resource.detail}</p>
                </div>
                <a
                  href={`mailto:${siteConfig.salesEmail}?subject=${encodeURIComponent(`Request: ${resource.name}`)}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                >
                  {downloads.requestDocument} <Download className="size-4" />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
