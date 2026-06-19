import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

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
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium",
        size === "lg" ? "px-7 py-3.5 text-[15px]" : "px-5 py-2.5 text-sm",
        variant === "primary" ? "btn-primary" : "btn-ghost",
        className,
      )}
    >
      {children}
      {showArrow && <ArrowRight className="size-4" />}
    </Link>
  );
}
