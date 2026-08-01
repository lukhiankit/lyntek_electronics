import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import {
  getLocalizedArticle,
  getLocalizedRelatedArticles,
} from "@/content/localize";
import { news } from "@/content/news";
import { siteConfig } from "@/content/site";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/navigation";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    news.map((article) => ({ locale, slug: article.slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const article = getLocalizedArticle(slug, raw);
  if (!article) return {};
  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${article.slug}`,
    locale: raw,
  });
}

export default async function NewsArticlePage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const article = getLocalizedArticle(slug, locale);
  if (!article) notFound();

  const related = getLocalizedRelatedArticles(article.slug, locale);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}${localePath(locale, `/news/${article.slug}`)}`,
  };

  return (
    <>
      <article>
        <section className="relative overflow-hidden border-b border-border bg-slate-950 pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
          <div className="tech-grid absolute inset-0 opacity-35" />
          <div className={`absolute inset-0 bg-gradient-to-br ${article.accent}`} />
          <Container className="relative">
            <Link
              href={localePath(locale, "/news")}
              className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
            >
              <ArrowLeft className="size-4" />
              {dict.news.backToNews}
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {article.category}
            </p>
            <h1 className="font-display mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/55">
              <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>{article.author}</span>
            </div>
          </Container>
        </section>

        <Section>
          <Container className="grid gap-14 lg:grid-cols-[minmax(0,42rem)_1fr] lg:gap-20">
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p className="text-xl font-medium leading-8 text-foreground">{article.excerpt}</p>
              {article.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              <div className="border-t border-border pt-8">
                <Button asChild>
                  <Link href={localePath(locale, "/contact")}>
                    {dict.common.salesInquiry}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <aside className="space-y-6 lg:pt-2">
              <div className="rounded-3xl border border-border bg-card p-6">
                <Eyebrow>{dict.news.meta.title}</Eyebrow>
                <dl className="mt-2 space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">{article.category}</dt>
                    <dd className="mt-1 font-semibold">
                      <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{article.readTime}</dt>
                    <dd className="mt-1 font-semibold">{article.author}</dd>
                  </div>
                </dl>
              </div>

              {related.length > 0 && (
                <div className="rounded-3xl border border-border bg-card p-6">
                  <Eyebrow>{dict.news.related}</Eyebrow>
                  <ul className="mt-2 space-y-5">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={localePath(locale, `/news/${item.slug}`)}
                          className="group block"
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-600 dark:text-cyan-300">
                            {item.category}
                          </p>
                          <p className="mt-2 font-display text-lg font-semibold leading-snug transition group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                            {item.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </Container>
        </Section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
