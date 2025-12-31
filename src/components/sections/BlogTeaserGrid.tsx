"use client";

import Link from "next/link";
import { blogPosts } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTheme } from "@/contexts/ThemeContext";
import { GradientCard } from "@/components/ui/GradientCard";

import { ArrowRight } from "lucide-react";

export function BlogTeaserGrid() {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "bg-[var(--background)] py-24" : "bg-[var(--sand-50)] py-24"}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Insights"
          title="Some tips from our blog"
          description="Playbooks on hybrid product delivery, domain insights, and our RLHF roadmap."
          alignment="left"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {blogPosts.slice(0, 3).map((post) => (
            <GradientCard key={post.href}>
              <p className={theme === "dark" ? "text-xs uppercase tracking-[0.2em] text-cyan-200" : "text-xs uppercase tracking-[0.2em] text-[var(--muted-400)]"}>
                {post.tag}
              </p>
              <h3 className={theme === "dark" ? "mt-4 text-2xl text-white" : "mt-4 text-2xl text-[var(--ink-900)]"}>
                {post.title}
              </h3>
              <p className={theme === "dark" ? "mt-2 text-sm text-gray-300" : "mt-2 text-sm text-[var(--muted-500)]"}>
                {post.excerpt}
              </p>
              <Link
                href={post.href}
                className={theme === "dark"
                  ? "mt-4 inline-flex text-sm text-cyan-400 hover:text-white"
                  : "mt-4 inline-flex text-sm text-[var(--accent-600)] hover:text-[var(--ink-900)]"
                }
              >
                Read article →
              </Link>
            </GradientCard>
          ))}

          {/* CTA Card for More Blogs */}
          <Link href="/blog" className={theme === "dark"
            ? "group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 border border-white/10 hover:scale-[1.01]"
            : "group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl p-8 shadow-xl transition-all hover:shadow-2xl border border-white/40 ring-1 ring-white/40 hover:scale-[1.01]"
          }>
            <div>
              <p className={theme === "dark" ? "text-xs uppercase tracking-[0.2em] text-cyan-200" : "text-xs uppercase tracking-[0.2em] text-[var(--accent-600)]"}>
                Archive
              </p>
              <h3 className={theme === "dark" ? "mt-4 text-3xl font-light text-white" : "mt-4 text-3xl font-light text-[var(--ink-900)]"}>
                Explore more insights
              </h3>
              <p className={theme === "dark" ? "mt-4 text-gray-400 max-w-sm" : "mt-4 text-[var(--muted-600)] max-w-sm"}>
                Deep dives into engineering, product strategy, and future tech.
              </p>
            </div>
            <div className={theme === "dark"
              ? "flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-white"
              : "flex h-12 w-12 items-center justify-center rounded-full bg-[var(--sand-200)] text-[var(--ink-900)] transition-colors group-hover:bg-[var(--accent-500)] group-hover:text-white"
            }>
              <ArrowRight className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
