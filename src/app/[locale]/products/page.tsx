import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ProductVisual } from "@/components/product-visual";
import { Container, Section } from "@/components/ui/section";
import {
  getLocalizedProductCategories,
  getLocalizedProducts,
} from "@/content/localize";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/navigation";
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
    title: dict.products.meta.title,
    description: dict.products.meta.description,
    path: "/products",
    locale: raw,
  });
}

export default async function ProductsPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const products = getLocalizedProducts(locale);
  const categories = getLocalizedProductCategories(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.products.hero.eyebrow}
        title={dict.products.hero.title}
        description={dict.products.hero.description}
      />
      {categories.map((category) => {
        const categoryProducts = products.filter((product) => product.category === category);
        return (
          <Section key={category} className="border-b border-border">
            <Container>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">
                    {String(categoryProducts.length).padStart(2, "0")} {dict.products.platformsCount}
                  </p>
                  <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
                    {category}
                  </h2>
                </div>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={localePath(locale, `/products/${product.slug}`)}
                    className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <ProductVisual
                      product={product}
                      className="min-h-56 rounded-none border-0 border-b border-white/10"
                    />
                    <div className="p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display text-xl font-semibold">{product.name}</h3>
                          <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            {product.summary}
                          </p>
                        </div>
                        <ArrowRight className="mt-1 size-4 shrink-0 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}
    </>
  );
}
