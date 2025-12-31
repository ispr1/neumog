"use client";

import Image from "next/image";
import { heroMain } from "@/content/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/contexts/ThemeContext";

export function HeroMain() {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "relative overflow-hidden bg-black py-24" : "relative overflow-hidden bg-[var(--sand-50)] py-24"}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="noise-overlay absolute inset-0" aria-hidden />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl">
          <div
            className={
              theme === "dark"
                ? "h-80 w-[600px] rounded-full bg-gradient-to-r from-cyan-500/40 to-purple-500/40"
                : "h-80 w-[620px] rounded-full bg-gradient-to-r from-[#f6d6ae]/70 via-[#f2b77a]/55 to-[#e08a51]/45"
            }
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <Badge>{heroMain.eyebrow}</Badge>

        <h1 className={theme === "dark" ? "mt-8 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl" : "mt-8 text-4xl font-semibold text-[var(--ink-900)] sm:text-5xl lg:text-6xl"}>
          {heroMain.title}
        </h1>

        <p className={theme === "dark" ? "mt-6 max-w-3xl text-lg text-gray-300" : "mt-6 max-w-3xl text-lg text-[var(--muted-500)]"}>{heroMain.description}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href={heroMain.primaryCta.href}>{heroMain.primaryCta.label}</Button>

          <Button href={heroMain.secondaryCta.href} variant="secondary">
            {heroMain.secondaryCta.label}
          </Button>
        </div>

        {/* HERO IMAGE */}
        <div className="max-w-5xl w-full mx-auto mt-12">
          <div
            className={
              theme === "dark"
                ? "rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-6 relative overflow-hidden"
                : "rounded-[28px] bg-white/40 backdrop-blur-2xl border border-[rgba(120,120,120,0.25)] shadow-[0_25px_80px_rgba(0,0,0,0.12)] p-5 sm:p-6 relative overflow-hidden"
            }
          >
            {theme !== "dark" && <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white/10" />}

            <Image
              src={heroMain.image}
              alt="Hybrid dev network collaboration"
              width={1400}
              height={900}
              priority
              quality={80}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
              className="relative z-10 w-full rounded-2xl object-cover aspect-[16/9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}