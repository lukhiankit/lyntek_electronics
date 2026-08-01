import type { MetadataRoute } from "next";
import { news } from "@/content/news";
import { products } from "@/content/products";
import { siteConfig } from "@/content/site";
import { locales } from "@/i18n/config";
import { localePath } from "@/i18n/navigation";

const routes = [
  "/",
  "/about",
  "/vision",
  "/technologies",
  "/products",
  "/industries",
  "/manufacturing",
  "/global-presence",
  "/partnership",
  "/downloads",
  "/news",
  "/careers",
  "/quality",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteConfig.url}${localePath(locale, route)}`,
      lastModified: now,
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : route === "/products" ? 0.9 : 0.7,
    })),
  );

  const productEntries = locales.flatMap((locale) =>
    products.map((product) => ({
      url: `${siteConfig.url}${localePath(locale, `/products/${product.slug}`)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  const newsEntries = locales.flatMap((locale) =>
    news.map((article) => ({
      url: `${siteConfig.url}${localePath(locale, `/news/${article.slug}`)}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...staticEntries, ...productEntries, ...newsEntries];
}
