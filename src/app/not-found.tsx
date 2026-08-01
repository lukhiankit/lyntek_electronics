import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { en } from "@/i18n/dictionaries/en";
import { zhTW } from "@/i18n/dictionaries/zh-TW";

export default function NotFound() {
  const enCopy = en.notFound;
  const zhCopy = zhTW.notFound;

  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-slate-950 pb-20 pt-32 text-white">
      <div className="tech-grid absolute inset-0 opacity-35" />
      <Container className="relative text-center">
        <p className="font-mono text-sm text-cyan-300">{enCopy.code}</p>
        <h1 className="font-display mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
          {enCopy.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/55">{enCopy.description}</p>
        <p className="mx-auto mt-3 max-w-xl text-base text-white/40">{zhCopy.description}</p>
        <Button asChild variant="accent" className="mt-9">
          <Link href="/en">
            <ArrowLeft className="size-4" />
            {enCopy.cta} / {zhCopy.cta}
          </Link>
        </Button>
      </Container>
    </section>
  );
}
