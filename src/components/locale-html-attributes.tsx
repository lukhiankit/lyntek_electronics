"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

export function LocaleHtmlAttributes({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === "zh-TW" ? "zh-Hant-TW" : "en";
  }, [locale]);

  return null;
}
