import { Container, Eyebrow } from "@/components/ui/section";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-slate-950 pb-20 pt-36 text-white sm:pb-24 sm:pt-44">
      <div className="tech-grid absolute inset-0 opacity-35" />
      <div className="absolute -right-20 top-10 size-96 rounded-full bg-cyan-500/10 blur-[100px]" />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-0.05em] text-balance sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 sm:text-xl">{description}</p>
      </Container>
    </section>
  );
}
