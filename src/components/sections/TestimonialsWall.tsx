"use client";

import { testimonials } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTheme } from "@/contexts/ThemeContext";
import { GradientCard } from "@/components/ui/GradientCard";

export function TestimonialsWall() {
  const { theme } = useTheme();

  // Double the quotes for the infinite loop
  const infiniteQuotes = [...testimonials.quotes, ...testimonials.quotes];

  return (
    <section className={theme === "dark" ? "py-24 overflow-hidden" : "bg-[var(--sand-50)] py-24 overflow-hidden"}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <SectionHeading
            title={testimonials.wallHeading}
            description="Client sponsors and experts tell the story until case studies go live."
            alignment="left"
          />
        </div>

        {/* Slider Container - Now Aligned inside max-w-7xl, not touching screen edges */}
        <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-nowrap gap-6 animate-marquee w-max py-4">
            {infiniteQuotes.map((quote, idx) => (
              <div key={`${quote.author}-${idx}`} className="w-[300px] md:w-[400px] flex-shrink-0">
                <GradientCard className="h-full">
                  <p className={theme === "dark" ? "text-sm text-gray-300" : "text-sm text-[var(--ink-700)]"}>
                    “{quote.quote}”
                  </p>
                  <p className={theme === "dark" ? "mt-4 text-sm font-semibold text-white" : "mt-4 text-sm font-semibold text-[var(--ink-900)]"}>
                    {quote.author}
                  </p>
                  <p className={theme === "dark" ? "text-xs uppercase tracking-[0.2em] text-gray-400" : "text-xs uppercase tracking-[0.2em] text-[var(--muted-400)]"}>
                    {quote.role}
                  </p>
                </GradientCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
