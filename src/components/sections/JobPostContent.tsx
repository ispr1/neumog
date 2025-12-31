"use client";

import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, CheckCircle2, Clock, MapPin, Briefcase } from "lucide-react";
import { JobPost } from "@/lib/careers-db";

export function JobPostContent({ job }: { job: JobPost }) {
    const { theme } = useTheme();

    const applyLink = `mailto:hr@neumog.com?subject=Application for ${job.title} (${job.id})`;

    return (
        <div className={theme === "dark"
            ? "bg-[#0A0A0A] min-h-screen pt-24 pb-20 relative overflow-hidden"
            : "bg-[var(--sand-50)] min-h-screen pt-24 pb-20"
        }>
            {theme === "dark" && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-cyan-900/20 blur-[120px]" />
                    <div className="absolute bottom-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[120px]" />
                    <div className="absolute top-[40%] left-[20%] h-[300px] w-[300px] rounded-full bg-blue-900/10 blur-[100px]" />
                </div>
            )}

            <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb / Back */}
                <div className="mb-8">
                    <Link
                        href="/careers"
                        className={theme === "dark" ? "inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors" : "inline-flex items-center text-sm text-[var(--muted-600)] hover:text-[var(--ink-900)] transition-colors"}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Openings
                    </Link>
                </div>

                {/* Job Header */}
                <div className={theme === "dark"
                    ? "rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 mb-12 backdrop-blur-sm"
                    : "rounded-2xl border border-[var(--border-soft)] bg-gradient-to-br from-[#fff9f1] via-[#f2dfc3] to-[#f0cfa7] p-8 md:p-12 shadow-[0_24px_80px_rgba(36,20,8,0.12)] mb-12"
                }>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                        <div>
                            <h1 className={theme === "dark" ? "text-4xl font-bold text-white mb-3" : "text-4xl font-bold text-[var(--ink-900)] mb-3"}>
                                {job.title}
                            </h1>
                            <div className="mb-4">
                                <span className={theme === "dark"
                                    ? "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                    : "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"
                                }>
                                    {job.department}
                                </span>
                            </div>
                            {job.date && (
                                <p className={theme === "dark" ? "text-sm text-gray-500 mb-8" : "text-sm text-[var(--muted-500)] mb-8"}>
                                    Posted on {job.date}
                                </p>
                            )}
                            <div className="flex flex-wrap gap-6 text-sm font-medium">
                                <div className={theme === "dark" ? "flex items-center gap-2 text-gray-300" : "flex items-center gap-2 text-[var(--ink-700)]"}>
                                    <MapPin className="h-4 w-4 opacity-70" />
                                    {job.location}
                                </div>
                                <div className={theme === "dark" ? "flex items-center gap-2 text-gray-300" : "flex items-center gap-2 text-[var(--ink-700)]"}>
                                    <Clock className="h-4 w-4 opacity-70" />
                                    {job.type}
                                </div>
                                <div className={theme === "dark" ? "flex items-center gap-2 text-gray-300" : "flex items-center gap-2 text-[var(--ink-700)]"}>
                                    <Briefcase className="h-4 w-4 opacity-70" />
                                    {job.experience}
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 pt-2">
                            <Button href={applyLink} className="w-full md:w-auto px-8">
                                Apply for this Job
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-12">
                    <div className="space-y-12">
                        {/* Description */}
                        <section>
                            <h2 className={theme === "dark" ? "text-xl font-semibold text-white mb-4" : "text-xl font-semibold text-[var(--ink-900)] mb-4"}>About the Role</h2>
                            <p className={theme === "dark" ? "text-gray-300 leading-relaxed whitespace-pre-wrap" : "text-[var(--ink-700)] leading-relaxed whitespace-pre-wrap"}>
                                {job.description}
                            </p>
                        </section>

                        {/* Responsibilities */}
                        {job.responsibilities.length > 0 && (
                            <section>
                                <h2 className={theme === "dark" ? "text-xl font-semibold text-white mb-4" : "text-xl font-semibold text-[var(--ink-900)] mb-4"}>What You Will Do</h2>
                                <ul className="space-y-3">
                                    {job.responsibilities.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className={theme === "dark" ? "h-6 w-6 text-cyan-500/80 flex-shrink-0 mt-0.5" : "h-6 w-6 text-[var(--accent-500)] flex-shrink-0 mt-0.5"} />
                                            <span className={theme === "dark" ? "text-gray-300" : "text-[var(--ink-700)]"}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Requirements */}
                        {job.requirements.length > 0 && (
                            <section>
                                <h2 className={theme === "dark" ? "text-xl font-semibold text-white mb-4" : "text-xl font-semibold text-[var(--ink-900)] mb-4"}>What We Are Looking For</h2>
                                <ul className="space-y-3">
                                    {job.requirements.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className={theme === "dark" ? "h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0" : "h-1.5 w-1.5 rounded-full bg-[var(--accent-500)] mt-2.5 flex-shrink-0"} />
                                            <span className={theme === "dark" ? "text-gray-300" : "text-[var(--ink-700)]"}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Benefits */}
                        {job.benefits.length > 0 && (
                            <section>
                                <h2 className={theme === "dark" ? "text-xl font-semibold text-white mb-4" : "text-xl font-semibold text-[var(--ink-900)] mb-4"}>Perks & Benefits</h2>
                                <ul className="space-y-3">
                                    {job.benefits.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className={theme === "dark" ? "h-1.5 w-1.5 rounded-full bg-green-400 mt-2.5 flex-shrink-0" : "h-1.5 w-1.5 rounded-full bg-green-500 mt-2.5 flex-shrink-0"} />
                                            <span className={theme === "dark" ? "text-gray-300" : "text-[var(--ink-700)]"}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        <div className="pt-8 border-t border-gray-200 dark:border-white/10">
                            <Button href={applyLink} className="w-full sm:w-auto">
                                Apply Now
                            </Button>
                            <p className={theme === "dark" ? "text-xs text-gray-500 mt-4" : "text-xs text-[var(--muted-500)] mt-4"}>
                                Clicking "Apply Now" will open your email client to send your resume directly to our HR team.
                            </p>
                        </div>

                    </div>

                    {/* Sidebar / Context */}
                    <div className="space-y-8">
                        <div className={theme === "dark" ? "p-6 rounded-2xl bg-white/5 border border-white/10" : "p-6 rounded-2xl bg-white border border-[var(--border-soft)] shadow-sm"}>
                            <h3 className={theme === "dark" ? "font-semibold text-white mb-4" : "font-semibold text-[var(--ink-900)] mb-4"}>
                                About Neumog
                            </h3>
                            <p className={theme === "dark" ? "text-sm text-gray-400 leading-relaxed mb-4" : "text-sm text-[var(--ink-700)] leading-relaxed mb-4"}>
                                We are a hybrid product development company. We combine the best of agency service with the integration of an in-house team.
                            </p>
                            <Link href="/about" className={theme === "dark" ? "text-sm text-cyan-400 hover:text-cyan-300 block" : "text-sm text-[var(--accent-600)] hover:text-[var(--accent-700)] block"}>
                                Read our story &rarr;
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
