import { ArrowRight, CheckCircle2, Globe2, Microscope, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/section";
import { Counter, Reveal } from "@/components/motion/reveal";
import { ProductVisual } from "@/components/product-visual";
import { capabilities, industries, siteConfig, technologies } from "@/content/site";
import { getLocalizedNews, getLocalizedProducts } from "@/content/localize";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/navigation";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ locale: string }> };

const industryKeys = [
  "industrial",
  "energy",
  "mobility",
  "healthcare",
  "buildings",
  "smartHome",
  "oem",
  "consumer",
  "infrastructure",
] as const;

const capabilityKeys = ["embedded", "connectivity", "edge", "power"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return createMetadata({
    title: siteConfig.name,
    description: dict.home.hero.description,
    path: "/",
    locale: raw,
  });
}

export default async function Home({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const home = dict.home;

  const featuredProducts = getLocalizedProducts(locale)
    .filter((product) => product.featured)
    .slice(0, 4);
  const articles = getLocalizedNews(locale);
  const faqItems = Object.values(home.faq.items);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <section className="relative min-h-[92svh] overflow-hidden bg-slate-950 pb-20 pt-36 text-white lg:flex lg:items-center lg:pt-28">
        <div className="tech-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-[15%] top-[8%] size-[48rem] rounded-full bg-cyan-500/12 blur-[120px]" />
        <div className="absolute -left-[10%] bottom-[-35%] size-[40rem] rounded-full bg-blue-600/12 blur-[130px]" />

        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div>
              <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]" />
                {home.hero.eyebrow}
              </p>
              <h1 className="font-display max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-balance sm:text-6xl lg:text-[5.4rem]">
                {home.hero.title}{" "}
                <span className="text-gradient">{home.hero.titleAccent}</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl">
                {home.hero.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild variant="accent" size="lg">
                  <Link href={localePath(locale, "/products")}>
                    {home.hero.ctaPrimary} <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  <Link href={localePath(locale, "/contact")}>{home.hero.ctaSecondary}</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
              <div className="animate-pulse-soft absolute inset-[8%] rounded-full border border-cyan-300/20" />
              <div className="absolute inset-[20%] rounded-full border border-dashed border-white/15" />
              <div className="glass-dark animate-float absolute inset-[18%] flex items-center justify-center rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,.45)]">
                <div className="absolute inset-5 rounded-[2.2rem] border border-white/10" />
                <svg
                  viewBox="0 0 180 180"
                  className="w-1/2"
                  aria-label={home.hero.illustrationAria}
                >
                  <path
                    d="M25 35h78l52 52v58H77l-52-52z"
                    fill="none"
                    stroke="#67e8f9"
                    strokeWidth="2"
                  />
                  <path
                    d="M54 65h55v50H54z"
                    fill="rgba(103,232,249,.12)"
                    stroke="rgba(255,255,255,.35)"
                  />
                  <circle cx="81" cy="90" r="11" fill="#67e8f9" />
                  <path
                    d="M81 42v23M81 115v28M31 90h23M109 90h38"
                    stroke="rgba(255,255,255,.5)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="glass-dark absolute right-0 top-[15%] rounded-2xl px-4 py-3 text-xs text-white/70">
                <span className="mb-1 block font-mono text-cyan-300">
                  {home.hero.cardEmbeddedLabel}
                </span>
                {home.hero.cardEmbeddedText}
              </div>
              <div className="glass-dark absolute bottom-[10%] left-0 rounded-2xl px-4 py-3 text-xs text-white/70">
                <span className="mb-1 block font-mono text-cyan-300">
                  {home.hero.cardConnectedLabel}
                </span>
                {home.hero.cardConnectedText}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-card">
        <Container className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {(
            [
              [20, "+", home.stats.platforms],
              [19, "", home.stats.technologies],
              [9, "", home.stats.industries],
              [2, "", home.stats.regions],
            ] as const
          ).map(([value, suffix, label]) => (
            <div key={label} className="px-5 py-8 text-center sm:py-10">
              <p className="font-display text-3xl font-semibold sm:text-4xl">
                <Counter value={value} suffix={suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <Section>
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <Eyebrow>{home.engineering.eyebrow}</Eyebrow>
              <Heading>{home.engineering.title}</Heading>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                {home.engineering.description}
              </p>
              <Button asChild variant="outline" className="mt-8">
                <Link href={localePath(locale, "/technologies")}>
                  {home.engineering.cta} <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
              {capabilityKeys.map((key, index) => {
                const capability = home.engineering.capabilities[key];
                const Icon = capabilities[index].icon;
                return (
                  <div key={key} className="bg-card p-7 transition hover:bg-muted">
                    <Icon className="size-6 text-cyan-500 dark:text-cyan-300" strokeWidth={1.5} />
                    <h3 className="mt-8 font-display text-xl font-semibold">{capability.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-2 border-t border-border pt-8">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground"
              >
                {technology}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container>
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>{home.featured.eyebrow}</Eyebrow>
              <Heading>{home.featured.title}</Heading>
            </div>
            <Button asChild variant="outline" className="border-white/20 bg-white/5 text-white">
              <Link href={localePath(locale, "/products")}>
                {home.featured.cta} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.06}>
                <Link
                  href={localePath(locale, `/products/${product.slug}`)}
                  className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
                >
                  <ProductVisual
                    product={product}
                    className="rounded-none border-0 border-b border-white/10"
                  />
                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      {product.category}
                    </p>
                    <div className="mt-3 flex items-start justify-between gap-5">
                      <div>
                        <h3 className="font-display text-2xl font-semibold">{product.name}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/55">{product.summary}</p>
                      </div>
                      <MoveUpRight className="mt-1 size-5 shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>{home.industries.eyebrow}</Eyebrow>
            <Heading>{home.industries.title}</Heading>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industryKeys.map((key, index) => {
              const item = dict.industries.items[key];
              const Icon = industries[index].icon;
              return (
                <Link
                  href={localePath(locale, "/industries")}
                  key={key}
                  className="group bg-card p-7 transition hover:bg-muted"
                >
                  <Icon className="size-6 text-cyan-500" strokeWidth={1.4} />
                  <h3 className="mt-8 font-display text-lg font-semibold">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="overflow-hidden bg-muted">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative min-h-[30rem] overflow-hidden rounded-3xl bg-slate-950 p-8 text-white">
            <div className="tech-grid absolute inset-0 opacity-30" />
            <div className="absolute inset-x-10 top-12 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            <div className="relative flex h-full min-h-[26rem] flex-col justify-between">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/50">
                <span>{home.manufacturing.label}</span>
                <Microscope className="size-5 text-cyan-300" />
              </div>
              <div>
                <p className="font-display text-6xl font-semibold tracking-tight text-cyan-300">
                  {home.manufacturing.stages}
                </p>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
                  {home.manufacturing.stagesCaption}
                </p>
              </div>
            </div>
          </div>
          <div>
            <Eyebrow>{home.manufacturing.eyebrow}</Eyebrow>
            <Heading>{home.manufacturing.title}</Heading>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {home.manufacturing.description}
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {Object.values(home.manufacturing.items).map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="size-4 text-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-9">
              <Link href={localePath(locale, "/manufacturing")}>
                {home.manufacturing.cta} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <Eyebrow>{home.global.eyebrow}</Eyebrow>
              <Heading>{home.global.title}</Heading>
              <Button asChild variant="outline" className="mt-8">
                <Link href={localePath(locale, "/global-presence")}>
                  {home.global.cta} <Globe2 className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="relative min-h-[24rem] overflow-hidden rounded-3xl border border-border bg-card p-8">
              <div className="tech-grid absolute inset-0 opacity-60" />
              <div className="absolute left-[72%] top-[44%] size-4 rounded-full bg-cyan-400 shadow-[0_0_0_8px_rgba(34,211,238,.14),0_0_35px_#22d3ee]" />
              <div className="absolute left-[71%] top-[52%] size-2 rounded-full bg-foreground/60" />
              <div className="absolute left-[56%] top-[37%] size-2 rounded-full bg-foreground/60" />
              <div className="absolute left-[48%] top-[33%] size-2 rounded-full bg-foreground/60" />
              <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-5">
                <p className="font-display text-xl font-semibold">{home.global.hqTitle}</p>
                <p className="mt-1 text-sm text-muted-foreground">{home.global.hqDescription}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>{home.latest.eyebrow}</Eyebrow>
              <Heading>{home.latest.title}</Heading>
            </div>
            <Link
              href={localePath(locale, "/news")}
              className="hidden text-sm font-semibold sm:block"
            >
              {home.latest.cta}
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <article key={article.slug} className="border-t border-border pt-5">
                <div className="flex gap-3 text-xs text-muted-foreground">
                  <span className="font-semibold text-cyan-600 dark:text-cyan-300">
                    {article.category}
                  </span>
                  <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug">
                  <Link
                    href={localePath(locale, `/news/${article.slug}`)}
                    className="hover:text-cyan-600"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <Eyebrow>{home.faq.eyebrow}</Eyebrow>
            <Heading>{home.faq.title}</Heading>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            {faqItems.map((faq) => (
              <details key={faq.question} className="group border-b border-border p-6 last:border-0">
                <summary className="cursor-pointer list-none pr-8 font-display text-lg font-semibold">
                  {faq.question}
                </summary>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-cyan-300 py-16 text-slate-950 sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em]">{home.partnership.eyebrow}</p>
            <h2 className="font-display mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {home.partnership.title}
            </h2>
          </div>
          <Button asChild size="lg" className="bg-slate-950 text-white hover:bg-slate-800">
            <Link href={localePath(locale, "/contact")}>
              {home.partnership.cta} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Container>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
