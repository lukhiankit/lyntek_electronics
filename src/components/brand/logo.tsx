import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/navigation";

export function Logo({
  className,
  locale = "en",
}: {
  className?: string;
  locale?: Locale;
}) {
  return (
    <Link
      href={localePath(locale)}
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Lyntek Electronics home"
    >
      <svg viewBox="0 0 40 40" className="size-9" aria-hidden="true">
        <path
          d="M6 5v30h28"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="square"
        />
        <path
          d="M14 13h13l7 7-7 7H14z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="26.5" cy="20" r="3" className="fill-cyan-400" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-semibold tracking-[0.14em]">
          LYNTEK
        </span>
        <span className="mt-1 text-[0.5rem] font-semibold tracking-[0.27em] text-muted-foreground">
          ELECTRONICS
        </span>
      </span>
    </Link>
  );
}
