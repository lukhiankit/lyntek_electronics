"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/navigation";

const key = "lyntek-cookie-consent";

export function CookieConsent({
  dictionary,
  locale = "en",
}: {
  dictionary: Dictionary;
  locale?: Locale;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(!window.localStorage.getItem(key)), []);

  if (!visible) return null;

  const choose = (value: "essential" | "all") => {
    window.localStorage.setItem(key, value);
    setVisible(false);
  };

  return (
    <aside
      className="fixed bottom-4 left-4 right-4 z-[90] mx-auto max-w-3xl rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-xl sm:flex sm:items-center sm:gap-6"
      aria-label="Cookie preferences"
    >
      <p className="flex-1 text-sm leading-6 text-muted-foreground">
        {dictionary.common.cookieText}{" "}
        <Link
          href={localePath(locale, "/privacy")}
          className="font-semibold text-foreground underline underline-offset-4"
        >
          {dictionary.common.privacyPolicyLink}
        </Link>
      </p>
      <div className="mt-4 flex shrink-0 gap-2 sm:mt-0">
        <Button variant="ghost" onClick={() => choose("essential")}>
          {dictionary.common.essentialOnly}
        </Button>
        <Button variant="accent" onClick={() => choose("all")}>
          {dictionary.common.acceptAll}
        </Button>
      </div>
    </aside>
  );
}
