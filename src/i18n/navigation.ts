import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { NavGroup } from "@/types/content";

export function getNavigation(locale: Locale, dictionary: Dictionary): NavGroup[] {
  const prefix = `/${locale}`;
  const { nav } = dictionary;

  return [
    {
      label: nav.company.label,
      href: `${prefix}/about`,
      items: [
        {
          label: nav.company.items.about.label,
          href: `${prefix}/about`,
          description: nav.company.items.about.description,
        },
        {
          label: nav.company.items.vision.label,
          href: `${prefix}/vision`,
          description: nav.company.items.vision.description,
        },
        {
          label: nav.company.items.quality.label,
          href: `${prefix}/quality`,
          description: nav.company.items.quality.description,
        },
        {
          label: nav.company.items.globalPresence.label,
          href: `${prefix}/global-presence`,
          description: nav.company.items.globalPresence.description,
        },
        {
          label: nav.company.items.careers.label,
          href: `${prefix}/careers`,
          description: nav.company.items.careers.description,
        },
      ],
    },
    {
      label: nav.solutions.label,
      href: `${prefix}/products`,
      items: [
        {
          label: nav.solutions.items.products.label,
          href: `${prefix}/products`,
          description: nav.solutions.items.products.description,
        },
        {
          label: nav.solutions.items.technologies.label,
          href: `${prefix}/technologies`,
          description: nav.solutions.items.technologies.description,
        },
        {
          label: nav.solutions.items.industries.label,
          href: `${prefix}/industries`,
          description: nav.solutions.items.industries.description,
        },
        {
          label: nav.solutions.items.manufacturing.label,
          href: `${prefix}/manufacturing`,
          description: nav.solutions.items.manufacturing.description,
        },
      ],
    },
    {
      label: nav.resources.label,
      href: `${prefix}/news`,
      items: [
        {
          label: nav.resources.items.news.label,
          href: `${prefix}/news`,
          description: nav.resources.items.news.description,
        },
        {
          label: nav.resources.items.downloads.label,
          href: `${prefix}/downloads`,
          description: nav.resources.items.downloads.description,
        },
        {
          label: nav.resources.items.partnership.label,
          href: `${prefix}/partnership`,
          description: nav.resources.items.partnership.description,
        },
      ],
    },
    {
      label: nav.contact.label,
      href: `${prefix}/contact`,
    },
  ];
}

export function localePath(locale: Locale, path = "/") {
  if (!path || path === "/") return `/${locale}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}
