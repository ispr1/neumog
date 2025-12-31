"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/contexts/ThemeContext";

export function CtaGlowForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default browser form submission
    if (isSubmitting) return;

    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const form = event.currentTarget; // Capture reference for reset

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'START_PROJECT', ...data }),
      });

      if (response.ok) {
        alert('Project brief submitted successfully!');
        form.reset();
      } else {
        const error = await response.json().catch(() => ({})); // Prevent parse error
        const errorMsg = error.details || error.error || 'Submission failed';
        alert('Form submission error: ' + errorMsg);
        console.error('Server Error:', error);
      }
    } catch (err) {
      console.error('Submission Error:', err);
      if (err instanceof TypeError && err.message === 'Failed to fetch') {
        alert('Network error. Please check your connection and try again.');
      } else {
        alert('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { label: "Full name", name: "name" },
    { label: "Company", name: "company" },
    { label: "Email", name: "email", type: "email" },
    { label: "Project type", name: "projectType" },
    { label: "Timeline", name: "timeline" },
    { label: "Budget range", name: "budget" },
  ];

  return (
    <section className={theme === "dark" ? "bg-[var(--background)] py-24" : "bg-[var(--sand-50)] py-24"}>
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-5 lg:pt-2">
          <p className={theme === "dark" ? "text-sm uppercase tracking-[0.3em] text-cyan-200" : "text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]"}>Start project</p>
          <h1 className={theme === "dark" ? "text-4xl font-semibold leading-tight text-white sm:text-[2.6rem]" : "text-4xl font-semibold leading-tight text-[var(--ink-900)] sm:text-[2.6rem]"}>
            Have a product in mind? We assemble the squad.
          </h1>
          <p className={theme === "dark" ? "text-base text-gray-300 max-w-2xl" : "text-base text-[var(--muted-500)] max-w-2xl"}>
            Share a few signals. We respond within 24 hours with a staffing POV and kickoff window.
          </p>
          <ul className={theme === "dark" ? "space-y-3 text-sm text-gray-300" : "space-y-3 text-sm text-[var(--ink-700)]"}>
            <li>- Discovery call within 48 hours</li>
            <li>- Team proposal + budget band within a week</li>
            <li>- Hybrid delivery rituals and dashboards for transparency</li>
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          className={
            theme === "dark"
              ? "relative overflow-hidden space-y-4 rounded-[32px] border border-white/10 bg-black/50 p-8"
              : "relative overflow-hidden space-y-4 rounded-[32px] border border-[var(--border-soft)] bg-[var(--card-surface)] p-8 shadow-[0_24px_70px_rgba(36,20,8,0.12)]"
          }
        >
          {theme !== "dark" && (
            <div
              className="pointer-events-none absolute -inset-px rounded-[34px] bg-[radial-gradient(circle_at_20%_20%,rgba(240,206,170,0.16),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(224,138,81,0.12),transparent_55%)]"
              aria-hidden
            />
          )}
          <div className="relative space-y-4">
            {fields.map((field) => (
              <div key={field.name}>
                <label className={theme === "dark" ? "text-sm text-gray-300" : "text-sm text-[var(--ink-700)]"} htmlFor={field.name}>
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type ?? "text"}
                  required
                  className={
                    theme === "dark"
                      ? "mt-2 w-full rounded-2xl border border-white/20 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      : "mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-[var(--ink-900)] placeholder:text-[var(--muted-400)] focus:border-[var(--accent-600)] focus:outline-none focus:ring-2 focus:ring-[rgba(224,138,81,0.12)]"
                  }
                />
              </div>
            ))}
            <div>
              <label className={theme === "dark" ? "text-sm text-gray-300" : "text-sm text-[var(--ink-700)]"} htmlFor="notes">
                What should we know?
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className={
                  theme === "dark"
                    ? "mt-2 w-full rounded-2xl border border-white/20 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    : "mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-[var(--ink-900)] placeholder:text-[var(--muted-400)] focus:border-[var(--accent-600)] focus:outline-none focus:ring-2 focus:ring-[rgba(224,138,81,0.12)]"
                }
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit brief'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
