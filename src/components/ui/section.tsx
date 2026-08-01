import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}>{children}</div>;
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24 lg:py-32", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-500 dark:text-cyan-300", className)}>
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

export function Heading({
  as: Component = "h2",
  children,
  className,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Component className={cn("font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl", className)}>
      {children}
    </Component>
  );
}
