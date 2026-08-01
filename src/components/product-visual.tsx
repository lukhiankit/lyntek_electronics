import type { Product } from "@/types/content";
import { cn } from "@/lib/utils";

export function ProductVisual({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const Icon = product.icon;
  return (
    <div className={cn("relative isolate overflow-hidden rounded-3xl border border-white/10 bg-slate-950", className)}>
      <div className={cn("absolute inset-0 bg-gradient-to-br", product.accent)} />
      <div className="tech-grid absolute inset-0 opacity-25" />
      <div className="absolute left-[12%] top-[15%] h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative flex min-h-64 items-center justify-center p-10">
        <div className="animate-float relative flex aspect-square w-[48%] max-w-44 items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.07] shadow-2xl backdrop-blur">
          <div className="absolute inset-3 rounded-[1.4rem] border border-white/10" />
          {Icon && <Icon className="size-16 text-cyan-300" strokeWidth={1.2} />}
          <span className="absolute bottom-5 h-1 w-10 rounded-full bg-cyan-300 shadow-[0_0_18px_#67e8f9]" />
        </div>
      </div>
      <div className="animate-beam absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </div>
  );
}
