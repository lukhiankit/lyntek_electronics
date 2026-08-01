import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  items?: NavItem[];
};

export type ProductCategory =
  | "Industrial Computing"
  | "Industrial Communication"
  | "Power & Energy"
  | "Smart Home"
  | "Interfaces & Sensing";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory | string;
  summary: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
  accent: string;
  icon?: LucideIcon;
  featured?: boolean;
};

/** Translatable overlay fields for a product (English source remains in products.ts). */
export type ProductTranslation = {
  name: string;
  category: string;
  summary: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
};

export type NewsCategory = "Corporate" | "Engineering" | "Events";

export type NewsArticle = {
  slug: string;
  category: NewsCategory | string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  accent: string;
  body: string[];
};

/** Translatable overlay fields for a news article (English source remains in news.ts). */
export type NewsTranslation = {
  title: string;
  excerpt: string;
  author: string;
  category: string;
  body: string[];
};
