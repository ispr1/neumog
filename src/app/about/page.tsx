"use client";

import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
    const { theme } = useTheme();

    return (
        <div className={theme === "dark" ? "bg-[var(--background)] min-h-screen pt-24 pb-20 overflow-hidden" : "bg-[var(--sand-50)] min-h-screen pt-24 pb-20"}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">

                {/* Background Gradients for Dark Mode */}
                {theme === "dark" && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-[10%] -right-[20%] h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
                        <div className="absolute bottom-[10%] -left-[20%] h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[100px]" />
                    </div>
                )}

                {/* Hero Section */}
                <div className="relative z-10 mx-auto max-w-3xl text-center mb-24">
                    <p className={theme === "dark" ? "text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-4" : "text-sm font-semibold uppercase tracking-wider text-[var(--accent-600)] mb-4"}>
                        Our Story
                    </p>
                    <h1 className={theme === "dark" ? "text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8" : "text-4xl font-bold tracking-tight text-[var(--ink-900)] sm:text-6xl mb-8"}>
                        We exist to fix the broke state of software delivery.
                    </h1>
                    <p className={theme === "dark" ? "text-xl text-gray-400 leading-relaxed" : "text-xl text-[var(--muted-600)] leading-relaxed"}>
                        The old agency model is too slow. The freelance marketplace model is too risky. Neumog was built to give product leaders the best of both worlds: managed squads, on-demand.
                    </p>
                </div>

                {/* Hero Image */}
                <div className="relative z-10 mb-32 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
                        alt="Neumog team collaborating in a modern office"
                        width={2000}
                        height={1000}
                        className="w-full object-cover h-[400px] sm:h-[600px]"
                        priority
                    />
                    <div className={theme === "dark" ? "absolute inset-0 bg-black/30 mix-blend-multiply" : "absolute inset-0 bg-[var(--ink-900)]/10 mix-blend-multiply"} />
                </div>

                {/* The Problem Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 relative z-10">
                    <div>
                        <h2 className={theme === "dark" ? "text-3xl font-bold text-white mb-6" : "text-3xl font-bold text-[var(--ink-900)] mb-6"}>
                            The "Talent Paradox"
                        </h2>
                        <div className="space-y-6">
                            <p className={theme === "dark" ? "text-lg text-gray-300" : "text-lg text-[var(--ink-700)]"}>
                                In 2018, we noticed a massive gap. Companies were desperate for high-quality engineering talent to build complex digital products.
                            </p>
                            <p className={theme === "dark" ? "text-lg text-gray-300" : "text-lg text-[var(--ink-700)]"}>
                                They had two bad options:
                            </p>
                            <ul className={theme === "dark" ? "space-y-4 text-gray-300" : "space-y-4 text-[var(--ink-700)]"}>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">✕</span>
                                    <span><strong>Big Agencies:</strong> Slow to start, incredibly expensive, and often staffed with junior talent behind a senior partner's pitch.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">✕</span>
                                    <span><strong>Freelance Marketplaces:</strong> A chaotic mix of unvetted developers, zero accountability, and project management nightmares.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                            alt="Frustrated team looking at code"
                            width={1000}
                            height={800}
                            className="rounded-2xl shadow-xl object-cover h-full"
                        />
                    </div>
                </div>

                {/* The Solution Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 relative z-10">
                    <div className="order-2 lg:order-1 relative">
                        <Image
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                            alt="Neumog squad delivering success"
                            width={1000}
                            height={800}
                            className="rounded-2xl shadow-xl object-cover h-full"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className={theme === "dark" ? "text-3xl font-bold text-white mb-6" : "text-3xl font-bold text-[var(--ink-900)] mb-6"}>
                            The Neumog Way
                        </h2>
                        <div className="space-y-6">
                            <p className={theme === "dark" ? "text-lg text-gray-300" : "text-lg text-[var(--ink-700)]"}>
                                We built Neumog to solve this. We are not a marketplace; we are a modern product studio.
                            </p>
                            <p className={theme === "dark" ? "text-lg text-gray-300" : "text-lg text-[var(--ink-700)]"}>
                                Our "Hybrid Squad" model combines:
                            </p>
                            <ul className={theme === "dark" ? "space-y-4 text-gray-300" : "space-y-4 text-[var(--ink-700)]"}>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span><strong>Managed Delivery:</strong> Our internal Directors of Product and Engineering lead every project. We own the outcome.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span><strong>Elastic Experts:</strong> We plug in vetted senior specialists (from our Expert Collective) only when needed, keeping your costs low and quality high.</span>
                                </li>
                            </ul>
                            <p className={theme === "dark" ? "text-lg text-gray-300 pt-4" : "text-lg text-[var(--ink-700)] pt-4"}>
                                The result? Enterprise-grade software delivered faster than you can hire, for a fraction of the cost of a big agency.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Culture/Values Section */}
                <div className={theme === "dark" ? "bg-white/5 rounded-3xl p-12 mb-32 border border-white/10" : "bg-white rounded-3xl p-12 mb-32 shadow-lg border border-[var(--border-soft)]"}>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className={theme === "dark" ? "text-3xl font-bold text-white mb-4" : "text-3xl font-bold text-[var(--ink-900)] mb-4"}>
                            Built on Trust & Transparency
                        </h2>
                        <p className={theme === "dark" ? "text-gray-400" : "text-[var(--muted-600)]"}>
                            We believe great products are built by happy, autonomous teams who have skin in the game.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className={theme === "dark" ? "bg-cyan-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl" : "bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl"}>
                                🚀
                            </div>
                            <h3 className={theme === "dark" ? "text-xl font-semibold text-white mb-2" : "text-xl font-semibold text-[var(--ink-900)] mb-2"}>
                                Ship to Learn
                            </h3>
                            <p className={theme === "dark" ? "text-sm text-gray-400" : "text-sm text-[var(--muted-600)]"}>
                                We prioritize shipping working software over perfect documentation. Value is only created when users are using your product.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className={theme === "dark" ? "bg-purple-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl" : "bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl"}>
                                🤝
                            </div>
                            <h3 className={theme === "dark" ? "text-xl font-semibold text-white mb-2" : "text-xl font-semibold text-[var(--ink-900)] mb-2"}>
                                Radical Candidor
                            </h3>
                            <p className={theme === "dark" ? "text-sm text-gray-400" : "text-sm text-[var(--muted-600)]"}>
                                We tell clients what they need to hear, not what they want to hear. We push back on bad requirements to build better products.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className={theme === "dark" ? "bg-pink-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl" : "bg-pink-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl"}>
                                🌍
                            </div>
                            <h3 className={theme === "dark" ? "text-xl font-semibold text-white mb-2" : "text-xl font-semibold text-[var(--ink-900)] mb-2"}>
                                Global Mindset
                            </h3>
                            <p className={theme === "dark" ? "text-sm text-gray-400" : "text-sm text-[var(--muted-600)]"}>
                                Talent is equally distributed; opportunity is not. We bridge that gap by connecting the world's best engineers with the best projects.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h2 className={theme === "dark" ? "text-3xl font-bold text-white mb-6" : "text-3xl font-bold text-[var(--ink-900)] mb-6"}>
                        Ready to change how you build?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/start-project">
                            Start a Project
                        </Button>
                        <Button href="/contact" variant="secondary">
                            Talk to our team
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}
