import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Newsletter } from "@/components/forms/newsletter";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/section";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { getNavigation, localePath } from "@/i18n/navigation";

export function Footer({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const navigation = getNavigation(locale, dictionary);

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1.5fr]">
          <div>
            <Logo className="text-white" locale={locale} />
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">{dictionary.common.footerTagline}</p>
            <p className="mt-8 text-sm font-semibold">{dictionary.common.newsletterTitle}</p>
            <p className="mb-4 mt-1 text-xs text-white/50">{dictionary.common.newsletterHint}</p>
            <Newsletter dictionary={dictionary} />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {navigation.slice(0, 3).map((group) => (
              <div key={group.label}>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">{group.label}</p>
                <ul className="space-y-3">
                  {group.items?.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-white/70 transition hover:text-cyan-300">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">{dictionary.common.connect}</p>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <Link href={localePath(locale, "/contact")} className="hover:text-cyan-300">
                    {dictionary.common.contactCta}
                  </Link>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.salesEmail}`} className="hover:text-cyan-300">
                    {dictionary.common.salesInquiry}
                  </a>
                </li>
                <li>
                  <Link href={localePath(locale, "/careers")} className="hover:text-cyan-300">
                    {dictionary.common.careers}
                  </Link>
                </li>
                <li>
                  <Link href={localePath(locale, "/downloads")} className="hover:text-cyan-300">
                    {dictionary.common.downloads}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. {dictionary.common.rightsReserved}
          </p>
          <div className="flex gap-5">
            <Link href={localePath(locale, "/privacy")}>{dictionary.common.privacy}</Link>
            <Link href={localePath(locale, "/terms")}>{dictionary.common.terms}</Link>
            <Link href="/sitemap.xml">{dictionary.common.sitemap}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
