import type { Locale } from "@/i18n/config";
import {
  products as baseProducts,
  getProduct as getBaseProduct,
  productCategories as baseCategories,
} from "@/content/products";
import {
  news as baseNews,
  getArticle as getBaseArticle,
  getRelatedArticles as getBaseRelated,
} from "@/content/news";
import {
  productTranslations,
  productCategoryTranslations,
} from "@/content/translations/products";
import {
  newsTranslations,
  newsCategoryTranslations,
} from "@/content/translations/news";
import type { NewsArticle, Product } from "@/types/content";

function localizeProduct(product: Product, locale: Locale): Product {
  if (locale === "en") return product;

  const translation = productTranslations[product.slug];
  if (!translation) return product;

  return {
    ...product,
    name: translation.name,
    category: translation.category as Product["category"],
    summary: translation.summary,
    description: translation.description,
    features: translation.features,
    applications: translation.applications,
    specifications: translation.specifications,
  };
}

function localizeArticle(article: NewsArticle, locale: Locale): NewsArticle {
  if (locale === "en") return article;

  const translation = newsTranslations[article.slug];
  if (!translation) return article;

  return {
    ...article,
    title: translation.title,
    excerpt: translation.excerpt,
    author: translation.author,
    category: translation.category as NewsArticle["category"],
    body: translation.body,
  };
}

export function getLocalizedProducts(locale: Locale): Product[] {
  return baseProducts.map((product) => localizeProduct(product, locale));
}

export function getLocalizedProduct(slug: string, locale: Locale): Product | undefined {
  const product = getBaseProduct(slug);
  if (!product) return undefined;
  return localizeProduct(product, locale);
}

export function getLocalizedProductCategories(locale: Locale): string[] {
  if (locale === "en") return [...baseCategories];
  return baseCategories.map(
    (category) => productCategoryTranslations[category] ?? category,
  );
}

export function getLocalizedNews(locale: Locale): NewsArticle[] {
  return baseNews.map((article) => localizeArticle(article, locale));
}

export function getLocalizedArticle(
  slug: string,
  locale: Locale,
): NewsArticle | undefined {
  const article = getBaseArticle(slug);
  if (!article) return undefined;
  return localizeArticle(article, locale);
}

export function getLocalizedRelatedArticles(
  slug: string,
  locale: Locale,
  limit = 2,
): NewsArticle[] {
  return getBaseRelated(slug, limit).map((article) =>
    localizeArticle(article, locale),
  );
}

export { productCategoryTranslations, newsCategoryTranslations };
