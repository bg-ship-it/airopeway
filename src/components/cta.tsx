import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { BOOK_URL } from "@/lib/content";

// Legacy in-app anchor every “book a call / free audit” CTA used to point at.
// The on-page audit form was retired in favour of Calendly booking, so we map
// it to the external booking URL in one place — every <Cta> call site updates.
const BOOK_ANCHOR = "/#audit";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
};

export function Cta({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  showArrow = true,
}: Props) {
  const target = href === BOOK_ANCHOR ? BOOK_URL : href;
  const external = target.startsWith("http");

  const classes = cn(
    "focus-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium",
    size === "lg" ? "px-7 py-3.5 text-[15px]" : "px-5 py-2.5 text-sm",
    variant === "primary" ? "btn-primary" : "btn-ghost",
    className,
  );

  const inner = (
    <>
      {children}
      {showArrow && <ArrowRight className="size-4" />}
    </>
  );

  if (external) {
    return (
      <a
        href={target}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={target} className={classes}>
      {inner}
    </Link>
  );
}
