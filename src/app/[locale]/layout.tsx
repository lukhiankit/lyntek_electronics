import { notFound } from "next/navigation";
import { CookieConsent } from "@/components/cookie-consent";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LocaleHtmlAttributes } from "@/components/locale-html-attributes";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <>
      <LocaleHtmlAttributes locale={locale} />
      <a
        href="#main-content"
        className="sr-only z-[100] rounded bg-cyan-400 px-4 py-2 text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {dictionary.common.skipToContent}
      </a>
      <Header locale={locale} dictionary={dictionary} />
      <main id="main-content">{children}</main>
      <Footer locale={locale} dictionary={dictionary} />
      <CookieConsent locale={locale} dictionary={dictionary} />
    </>
  );
}
