"use client";

import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { JobPost } from "@/lib/careers-db";

export function CareersList({ initialJobs }: { initialJobs: JobPost[] }) {
    const { theme } = useTheme();

    return (
        <div className={theme === "dark" ? "bg-[var(--background)] min-h-screen pt-24 pb-20 relative overflow-hidden" : "bg-[var(--sand-50)] min-h-screen pt-24 pb-20"}>
            {theme === "dark" && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
                    <div className="absolute top-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
                </div>
            )}
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <p className={theme === "dark" ? "text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-4" : "text-sm font-semibold uppercase tracking-wider text-[var(--accent-600)] mb-4"}>
                        Careers at Neumog
                    </p>
                    <h1 className={theme === "dark" ? "text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6" : "text-4xl font-bold tracking-tight text-[var(--ink-900)] sm:text-5xl mb-6"}>
                        Build the future of <br /> hybrid software delivery.
                    </h1>
                    <p className={theme === "dark" ? "text-lg text-gray-400" : "text-lg text-[var(--muted-600)]"}>
                        We're a team of builders, designers, and thinkers. We value autonomy, mastery, and purpose. Join us in redefining how products are built.
                    </p>
                </div>

                {/* Job Listings */}
                <div className="grid gap-6 md:grid-cols-1 max-w-4xl mx-auto">
                    {initialJobs.map((job) => (
                        <Link
                            key={job.id}
                            href={`/careers/${job.id}`}
                            className={theme === "dark"
                                ? "group relative flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:border-cyan-500/30"
                                : "group relative flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl border border-[var(--border-soft)] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[var(--accent-200)]"
                            }
                        >
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <h3 className={theme === "dark" ? "text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors" : "text-xl font-semibold text-[var(--ink-900)] group-hover:text-[var(--accent-600)] transition-colors"}>
                                        {job.title}
                                    </h3>
                                    <span className={theme === "dark"
                                        ? "px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                        : "px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"
                                    }>
                                        {job.department}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm">
                                    <div className={theme === "dark" ? "flex items-center gap-1.5 text-gray-400" : "flex items-center gap-1.5 text-[var(--muted-500)]"}>
                                        <MapPin className="h-4 w-4" />
                                        {job.location}
                                    </div>
                                    <div className={theme === "dark" ? "flex items-center gap-1.5 text-gray-400" : "flex items-center gap-1.5 text-[var(--muted-500)]"}>
                                        <Clock className="h-4 w-4" />
                                        {job.type}
                                    </div>
                                </div>

                                <p className={theme === "dark" ? "text-gray-400 text-sm max-w-2xl mt-2" : "text-[var(--muted-600)] text-sm max-w-2xl mt-2"}>
                                    {job.shortDescription}
                                </p>
                            </div>

                            <div className="flex-shrink-0">
                                <span className={theme === "dark"
                                    ? "flex items-center gap-2 text-sm font-semibold text-cyan-400 opacity-0 transform translate-x-[-10px] transition-all group-hover:opacity-100 group-hover:translate-x-0"
                                    : "flex items-center gap-2 text-sm font-semibold text-[var(--accent-600)] opacity-0 transform translate-x-[-10px] transition-all group-hover:opacity-100 group-hover:translate-x-0"
                                }>
                                    View Role <ArrowRight className="h-4 w-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Empty State / CTA */}
                {initialJobs.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className={theme === "dark" ? "text-xl font-medium text-white" : "text-xl font-medium text-[var(--ink-900)]"}>
                            No open positions right now.
                        </h3>
                        <p className="mt-2 text-gray-500">Check back later or join our expert collective.</p>
                    </div>
                )}

                <div className="mt-20 text-center">
                    <p className={theme === "dark" ? "text-gray-400 mb-6" : "text-[var(--muted-600)] mb-6"}>
                        Don't see the right role? We are always looking for exceptional talent.
                    </p>
                    <Button href="/expert-collective" variant="secondary">
                        Join the Expert Collective
                    </Button>
                </div>
            </div>
        </div>
    );
}
