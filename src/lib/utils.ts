import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(value: string, locale = "en") {
  return new Intl.DateTimeFormat(locale === "zh-TW" ? "zh-TW" : "en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
}
