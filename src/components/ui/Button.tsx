"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const { theme } = useTheme();

  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-full text-base font-semibold transition-all duration-200",
    theme === "dark"
      ? {
        primary:
          "bg-gradient-to-r from-cyan-400/90 via-blue-500/90 to-purple-500/90 p-[1.5px] text-white shadow-[0_0_40px_rgba(58,196,255,0.25)] hover:from-cyan-300 hover:to-purple-400",
        secondary:
          "border border-white/30 bg-white/5 px-6 py-3 text-white hover:border-white/60",
        ghost: "px-6 py-3 text-gray-300 hover:text-white",
      }[variant]
      : {
        primary:
          "border border-[var(--accent-500)] bg-[var(--sand-50)] px-6 py-3 text-[var(--ink-900)] shadow-[0_10px_28px_rgba(36,20,8,0.08)] hover:bg-[var(--accent-200)] hover:shadow-[0_16px_36px_rgba(36,20,8,0.12)] hover:-translate-y-[1px] active:translate-y-0",
        secondary:
          "pill-border px-6 py-3 text-[var(--ink-900)] hover:shadow-[0_18px_40px_rgba(44,27,14,0.08)]",
        ghost: "px-6 py-3 text-[var(--muted-500)] hover:text-[var(--ink-900)]",
      }[variant],
    className,
  );

  const content =
    variant === "primary" && theme === "dark" ? (
      <span className="inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-white">
        {children}
      </span>
    ) : (
      children
    );

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
