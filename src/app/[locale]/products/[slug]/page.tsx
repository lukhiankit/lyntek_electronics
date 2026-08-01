import { ArrowLeft, ArrowRight, Check, Download } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductVisual } from "@/components/product-visual";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/section";
import { getLocalizedProduct, getLocalizedProducts } from "@/content/localize";
import { products } from "@/content/products";
import { siteConfig } from "@/content/site";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/navigation";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const product = getLocalizedProduct(slug, raw);
  if (!product) return {};
  return createMetadata({
    title: product.name,
    description: product.summary,
    path: `/products/${product.slug}`,
    locale: raw,
  });
}

export default async function ProductPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const product = getLocalizedProduct(slug, locale);
  if (!product) notFound();

  const related = getLocalizedProducts(locale)
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    brand: { "@type": "Brand", name: siteConfig.name },
    manufacturer: { "@type": "Organization", name: siteConfig.legalName },
    url: `${siteConfig.url}${localePath(locale, `/products/${product.slug}`)}`,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteConfig.url}${localePath(locale)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.products.meta.title,
        item: `${siteConfig.url}${localePath(locale, "/products")}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${siteConfig.url}${localePath(locale, `/products/${product.slug}`)}`,
      },
    ],
  };

  return (
    <>
      <section className="bg-slate-950 pb-20 pt-32 text-white sm:pt-40">
        <Container>
          <Link
            href={localePath(locale, "/products")}
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/55 hover:text-white"
          >
            <ArrowLeft className="size-4" />
            {dict.products.backToProducts}
          </Link>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                {product.category}
              </p>
              <h1 className="font-display mt-5 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
                {product.name}
              </h1>
              <p className="mt-7 text-xl leading-8 text-white/60">{product.description}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="accent">
                  <Link href={`${localePath(locale, "/contact")}?product=${product.slug}`}>
                    {dict.products.inquire} <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white"
                  disabled
                >
                  <Download className="size-4" />
                  {dict.common.downloads}
                </Button>
              </div>
            </div>
            <ProductVisual product={product} className="min-h-[28rem]" />
          </div>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow>{dict.products.features}</Eyebrow>
            <ul className="grid gap-4">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
                >
                  <Check className="size-4 text-cyan-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>{dict.products.applications}</Eyebrow>
            <div className="flex flex-wrap gap-3">
              {product.applications.map((application) => (
                <span
                  key={application}
                  className="rounded-full border border-border bg-muted px-5 py-3 text-sm font-semibold"
                >
                  {application}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted">
        <Container>
          <Eyebrow>{dict.products.specifications}</Eyebrow>
          <Heading>{product.name}</Heading>
          <dl className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div
                key={key}
                className="grid gap-2 border-b border-border px-6 py-5 last:border-b-0 sm:grid-cols-[14rem_1fr]"
              >
                <dt className="text-sm font-semibold">{key}</dt>
                <dd className="text-sm text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section>
          <Container>
            <Eyebrow>{dict.products.related}</Eyebrow>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={localePath(locale, `/products/${item.slug}`)}
                  className="group overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <ProductVisual
                    product={item}
                    className="min-h-48 rounded-none border-0 border-b border-border"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold group-hover:text-cyan-600">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
