"use client";

import { ctaStrip } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/contexts/ThemeContext";

export function CtaStrip() {
  const { theme } = useTheme();

  return (
    <section className="py-0">
      <div
        className={
          theme === "dark"
            ? "w-full border-y border-white/10 bg-gradient-to-r from-cyan-950/40 via-[#0a0a0a] to-purple-950/40 px-6 py-20 md:py-32 text-center"
            : "w-full border-y border-[#dcc5a7] bg-gradient-to-r from-[#f1cfa6] to-[#ead6bd] px-6 py-20 md:py-32 text-center"
        }
      >
        <p className={theme === "dark" ? "text-sm uppercase tracking-[0.3em] font-semibold text-cyan-400" : "text-sm uppercase tracking-[0.3em] font-semibold text-[var(--accent-600)]"}>
          Ready?
        </p>
        <h2 className={theme === "dark" ? "mt-6 text-4xl font-bold text-white sm:text-6xl" : "mt-6 text-4xl font-bold text-[var(--ink-900)] sm:text-6xl"}>
          {ctaStrip.heading}
        </h2>
        <p className={theme === "dark" ? "mx-auto mt-8 max-w-2xl text-lg text-gray-400 sm:text-xl" : "mx-auto mt-8 max-w-2xl text-lg text-[var(--muted-600)] sm:text-xl"}>{ctaStrip.body}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href={ctaStrip.primaryCta.href}>{ctaStrip.primaryCta.label}</Button>
          <Button href={ctaStrip.secondaryCta.href} variant="secondary">
            {ctaStrip.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
