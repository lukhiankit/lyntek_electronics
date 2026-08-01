import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/navigation";

export function createMetadata({
  title,
  description,
  path = "/",
  locale = "en",
}: {
  title: string;
  description: string;
  path?: string;
  locale?: Locale;
}): Metadata {
  const localizedPath = localePath(locale, path);
  const url = `${siteConfig.url}${localizedPath}`;
  const otherLocale = locale === "en" ? "zh-TW" : "en";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}${localePath("en", path)}`,
        "zh-TW": `${siteConfig.url}${localePath("zh-TW", path)}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: locale === "zh-TW" ? "zh_TW" : "en_US",
      alternateLocale: otherLocale === "zh-TW" ? ["zh_TW"] : ["en_US"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
