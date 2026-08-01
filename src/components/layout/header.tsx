"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe2, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { getLocalizedProducts } from "@/content/localize";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { getNavigation, localePath } from "@/i18n/navigation";
import { localizePath, stripLocaleFromPathname } from "@/i18n/config";

export function Header({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const navigation = getNavigation(locale, dictionary);
  const products = getLocalizedProducts(locale);
  const otherLocale: Locale = locale === "en" ? "zh-TW" : "en";
  const switchedPath = localizePath(stripLocaleFromPathname(pathname), otherLocale);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mobileOpen && !searchOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen, searchOpen]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return products
      .filter((product) =>
        [product.name, product.category, product.summary].some((value) =>
          value.toLowerCase().includes(normalized),
        ),
      )
      .slice(0, 6);
  }, [products, query]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
          <Logo locale={locale} />

          <nav className="hidden items-stretch self-stretch lg:flex" aria-label={dictionary.common.mainNav}>
            {navigation.map((group) => (
              <div key={group.label} className="group relative flex items-center">
                <Link
                  href={group.href ?? group.items?.[0]?.href ?? localePath(locale)}
                  className="flex h-full items-center gap-1 px-4 text-sm font-medium text-muted-foreground transition hover:text-foreground"
                >
                  {group.label}
                  {group.items && <ChevronDown className="size-3.5 transition group-hover:rotate-180" />}
                </Link>
                {group.items && (
                  <div className="pointer-events-none absolute left-1/2 top-[calc(100%-1px)] w-[38rem] -translate-x-1/2 translate-y-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-background/95 p-3 shadow-2xl backdrop-blur-xl">
                      {group.items.map((item) => (
                        <Link key={item.href} href={item.href} className="rounded-xl p-4 transition hover:bg-muted">
                          <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                          <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{item.description}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} aria-label={dictionary.common.search}>
              <Search className="size-4.5" />
            </Button>
            <div className="hidden items-center sm:flex">
              <Link
                href={switchedPath}
                className="flex min-h-11 items-center gap-1.5 px-3 text-xs font-semibold text-muted-foreground hover:text-foreground"
                aria-label={dictionary.common.language}
              >
                <Globe2 className="size-4" />
                {locale === "en" ? "繁中" : "EN"}
              </Link>
              <Button
                variant="ghost"
                size="icon"
                aria-label={dictionary.common.theme}
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              >
                <span className="relative size-4.5">
                  <Sun className={`absolute inset-0 size-4.5 transition-opacity ${mounted && resolvedTheme === "dark" ? "opacity-100" : "opacity-0"}`} />
                  <Moon className={`absolute inset-0 size-4.5 transition-opacity ${mounted && resolvedTheme === "dark" ? "opacity-0" : "opacity-100"}`} />
                </span>
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label={dictionary.common.openMenu}>
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={dictionary.common.siteMenu}
            className="fixed inset-0 z-[70] overflow-y-auto bg-background p-5 lg:hidden"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
          >
            <div className="flex items-center justify-between">
              <Logo locale={locale} />
              <Button variant="ghost" size="icon" autoFocus onClick={() => setMobileOpen(false)} aria-label={dictionary.common.closeMenu}>
                <X className="size-5" />
              </Button>
            </div>
            <nav className="mt-12" aria-label={dictionary.common.mobileNav}>
              {navigation.map((group) => (
                <div key={group.label} className="border-b border-border py-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{group.label}</p>
                  <div className="grid gap-1">
                    {(group.items ?? [{ label: group.label, href: group.href ?? localePath(locale) }]).map((item) => (
                      <Link key={item.href} href={item.href} className="py-2 text-lg font-semibold" onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex gap-3 py-6">
                <Link href={switchedPath} className="rounded-full border border-border px-4 py-2 text-sm font-semibold" onClick={() => setMobileOpen(false)}>
                  {locale === "en" ? "繁體中文" : "English"}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}

        {searchOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={dictionary.common.search}
            className="fixed inset-0 z-[80] bg-slate-950/70 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              className="mx-auto mt-[8vh] max-w-3xl rounded-3xl border border-border bg-background p-5 shadow-2xl sm:p-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <Search className="size-5 text-muted-foreground" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={dictionary.common.searchPlaceholder}
                  className="min-w-0 flex-1 bg-transparent py-3 text-lg outline-none placeholder:text-muted-foreground"
                />
                <Button variant="ghost" size="icon" onClick={() => setSearchOpen(false)} aria-label={dictionary.common.closeSearch}>
                  <X className="size-5" />
                </Button>
              </div>
              <div className="mt-5 border-t border-border pt-5">
                {results.length > 0 ? (
                  <div className="grid gap-2">
                    {results.map((product) => (
                      <Link
                        key={product.slug}
                        href={localePath(locale, `/products/${product.slug}`)}
                        onClick={() => setSearchOpen(false)}
                        className="rounded-xl p-4 hover:bg-muted"
                      >
                        <span className="font-semibold">{product.name}</span>
                        <span className="ml-3 text-xs text-muted-foreground">{product.category}</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {query ? dictionary.common.searchNoResults : dictionary.common.searchEmpty}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
