"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogPostDetail } from "@/content/blog-details";

import Image from "next/image";

interface BlogPostContentProps {
    post: BlogPostDetail;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
    const { theme } = useTheme();

    return (
        <div className="mx-auto max-w-3xl px-6 -mt-10 relative z-10">
            <div className={theme === "dark"
                ? "bg-white/5 rounded-3xl p-8 md:p-12 shadow-xl border border-white/10 backdrop-blur-md"
                : "bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/40 ring-1 ring-white/40"
            }>

                <div className={theme === "dark"
                    ? "prose prose-lg prose-invert max-w-none"
                    : "prose prose-lg prose-stone max-w-none"
                }>
                    {post.content.map((block, idx) => {
                        switch (block.type) {
                            case 'heading':
                                return <h2 key={idx} className={theme === "dark" ? "text-2xl font-bold text-white mt-12 mb-6" : "text-2xl font-bold text-[var(--ink-900)] mt-12 mb-6"}>{block.text}</h2>;
                            case 'paragraph':
                                return <p key={idx} className={theme === "dark" ? "text-gray-300 leading-relaxed mb-6" : "text-[var(--ink-700)] leading-relaxed mb-6"}>{block.text}</p>;
                            case 'list':
                                return (
                                    <ul key={idx} className={theme === "dark"
                                        ? "list-disc pl-6 space-y-2 mb-8 text-gray-300 marker:text-cyan-400"
                                        : "list-disc pl-6 space-y-2 mb-8 text-[var(--ink-700)] marker:text-[var(--accent-500)]"
                                    }>
                                        {block.items?.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                );
                            case 'quote':
                                return (
                                    <blockquote key={idx} className={theme === "dark"
                                        ? "my-8 border-l-4 border-cyan-500 bg-white/5 p-6 italic text-gray-200 rounded-r-lg"
                                        : "my-8 border-l-4 border-[var(--accent-500)] bg-[var(--sand-100)] p-6 italic text-[var(--ink-900)] rounded-r-lg"
                                    }>
                                        "{block.text}"
                                    </blockquote>
                                );
                            case 'image':
                                return (
                                    <div key={idx} className="my-10">
                                        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 shadow-lg">
                                            <Image
                                                src={block.src || ""}
                                                alt={block.alt || "Article visualization"}
                                                fill
                                                className="object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                        {block.caption && (
                                            <p className={theme === "dark"
                                                ? "mt-3 text-center text-sm text-gray-500 italic"
                                                : "mt-3 text-center text-sm text-[var(--muted-500)] italic"
                                            }>
                                                {block.caption}
                                            </p>
                                        )}
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </div>

                <div className={theme === "dark"
                    ? "mt-16 pt-8 border-t border-white/10 flex justify-between items-center"
                    : "mt-16 pt-8 border-t border-[var(--border-soft)] flex justify-between items-center"
                }>
                    <Link href="/blog" className={theme === "dark"
                        ? "inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        : "inline-flex items-center text-sm font-semibold text-[var(--accent-600)] hover:text-[var(--accent-700)] transition-colors"
                    }>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Articles
                    </Link>
                </div>

            </div>
        </div>
    );
}
