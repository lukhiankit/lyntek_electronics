import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/ui/section";
import { getLocalizedNews } from "@/content/localize";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/navigation";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return createMetadata({
    title: dict.news.meta.title,
    description: dict.news.meta.description,
    path: "/news",
    locale: raw,
  });
}

export default async function NewsPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const articles = getLocalizedNews(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.news.hero.eyebrow}
        title={dict.news.hero.title}
        description={dict.news.hero.description}
      />
      <Section>
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Link
                href={localePath(locale, `/news/${article.slug}`)}
                className="block h-full"
              >
                <div className={`tech-grid h-48 bg-gradient-to-br ${article.accent}`} />
                <div className="flex h-[calc(100%-12rem)] flex-col p-7">
                  <div className="flex gap-3 text-xs">
                    <span className="font-semibold text-cyan-600 dark:text-cyan-300">
                      {article.category}
                    </span>
                    <time className="text-muted-foreground" dateTime={article.date}>
                      {formatDate(article.date, locale)}
                    </time>
                  </div>
                  <h2 className="font-display mt-5 text-2xl font-semibold leading-snug transition group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                    {article.title}
                  </h2>
                  <p className="mt-4 flex-1 leading-7 text-muted-foreground">{article.excerpt}</p>
                  <div className="mt-7 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    <span>{article.readTime}</span>
                    <span className="inline-flex items-center gap-1 text-foreground normal-case tracking-normal">
                      {dict.news.readArticle}
                      <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}
