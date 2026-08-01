import type { Locale } from "@/i18n/config";
import { en, type Dictionary } from "./dictionaries/en";
import { zhTW } from "./dictionaries/zh-TW";

export type { Dictionary };

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return locale === "zh-TW" ? zhTW : en;
}
