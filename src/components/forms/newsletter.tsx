"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Newsletter({ dictionary }: { dictionary: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="flex w-full max-w-md"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        {dictionary.common.newsletterPlaceholder}
      </label>
      <input
        id="newsletter-email"
        required
        type="email"
        autoComplete="email"
        placeholder={submitted ? dictionary.common.newsletterSuccess : dictionary.common.newsletterPlaceholder}
        disabled={submitted}
        className="min-w-0 flex-1 rounded-l-full border border-r-0 border-white/20 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-white/45 focus:border-cyan-300"
      />
      <button
        type="submit"
        className="flex size-12 shrink-0 items-center justify-center rounded-r-full bg-cyan-400 text-slate-950 transition hover:bg-cyan-300"
        aria-label={dictionary.common.newsletterAria}
      >
        {submitted ? <Check className="size-4" /> : <ArrowRight className="size-4" />}
      </button>
    </form>
  );
}
