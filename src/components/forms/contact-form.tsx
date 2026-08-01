"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function ContactForm({ dictionary }: { dictionary: Dictionary }) {
  const [sent, setSent] = useState(false);
  const form = dictionary.contact.form;

  if (sent) {
    return (
      <div className="flex min-h-96 flex-col items-center justify-center rounded-3xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="size-10 text-cyan-500" />
        <h2 className="font-display mt-5 text-2xl font-semibold">{form.successTitle}</h2>
        <p className="mt-3 max-w-md text-muted-foreground">{form.successBody}</p>
        <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
          {form.sendAnother}
        </Button>
      </div>
    );
  }

  const input =
    "min-h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15";

  return (
    <form
      className="rounded-3xl border border-border bg-card p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          {form.name}
          <input className={input} name="name" autoComplete="name" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          {form.email}
          <input className={input} name="email" type="email" autoComplete="email" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          {form.company}
          <input className={input} name="company" autoComplete="organization" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          {form.inquiryType}
          <select className={input} name="type" defaultValue="sales">
            <option value="sales">{form.types.sales}</option>
            <option value="general">{form.types.general}</option>
            <option value="career">{form.types.career}</option>
            <option value="media">{form.types.media}</option>
          </select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold">
        {form.message}
        <textarea className={`${input} min-h-36 resize-y py-3`} name="message" required />
      </label>
      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-muted-foreground">
        <input type="checkbox" required className="mt-1" />
        {form.consent}
      </label>
      <Button type="submit" className="mt-7">
        {form.submit}
      </Button>
    </form>
  );
}
