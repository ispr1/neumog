"use client";

import { FormEvent, useState } from "react";
import { contactInfo } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/contexts/ThemeContext";

export function ContactSupportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const form = event.currentTarget;

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'CONTACT', ...data }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        form.reset();
      } else {
        const error = await response.json().catch(() => ({}));
        const errorMsg = error.details || error.error || 'Failed to send message';
        alert('Error: ' + errorMsg);
      }
    } catch (err) {
      console.error(err);
      if (err instanceof TypeError && err.message === 'Failed to fetch') {
        alert('Network error. Please check your connection and try again.');
      } else {
        alert('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={theme === "dark" ? "bg-[var(--background)] py-24" : "bg-[var(--sand-50)] py-24"}>
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr,1fr] lg:items-start">
        <div className="space-y-5 lg:pt-2">
          <p className={theme === "dark" ? "text-sm uppercase tracking-[0.3em] text-cyan-200" : "text-sm uppercase tracking-[0.3em] text-[var(--accent-600)]"}>Contact</p>
          <h2 className={theme === "dark" ? "text-4xl font-semibold leading-tight text-white sm:text-[2.4rem]" : "text-4xl font-semibold leading-tight text-[var(--ink-900)] sm:text-[2.4rem]"}>Need help? Get in touch</h2>
          <p className={theme === "dark" ? "text-base text-gray-300 max-w-2xl" : "text-base text-[var(--muted-500)] max-w-2xl"}>
            Tell us about your product or ask how the hybrid model works. We reply within one business day.
          </p>
          <ul className={theme === "dark" ? "space-y-3 text-sm text-gray-300" : "space-y-3 text-sm text-[var(--ink-700)]"}>
            <li>
              Email: <a href={`mailto:${contactInfo.email}`} className={theme === "dark" ? "text-cyan-200 hover:text-cyan-100" : "text-[var(--accent-600)] hover:text-[var(--ink-900)]"}>{contactInfo.email}</a>
            </li>
            <li>
              Phone: <a href={`tel:${contactInfo.phone}`} className={theme === "dark" ? "text-cyan-200 hover:text-cyan-100" : "text-[var(--accent-600)] hover:text-[var(--ink-900)]"}>{contactInfo.phone}</a>
            </li>
            <li>Presence: {contactInfo.address}</li>
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          className={
            theme === "dark"
              ? "relative overflow-hidden space-y-4 rounded-[28px] border border-white/10 bg-black/50 p-8"
              : "relative overflow-hidden space-y-4 rounded-[28px] border border-[var(--border-soft)] bg-[var(--card-surface)] p-8 shadow-[0_22px_70px_rgba(36,20,8,0.12)]"
          }
        >
          {theme !== "dark" && (
            <div
              className="pointer-events-none absolute -inset-px rounded-[30px] bg-[radial-gradient(circle_at_20%_20%,rgba(240,206,170,0.16),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(224,138,81,0.12),transparent_55%)]"
              aria-hidden
            />
          )}
          <div className="relative space-y-4">
            <div>
              <label className={theme === "dark" ? "text-sm text-gray-300" : "text-sm text-[var(--ink-700)]"} htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                required
                className={
                  theme === "dark"
                    ? "mt-2 w-full rounded-2xl border border-white/20 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    : "mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-[var(--ink-900)] placeholder:text-[var(--muted-400)] focus:border-[var(--accent-600)] focus:outline-none focus:ring-2 focus:ring-[rgba(224,138,81,0.12)]"
                }
              />
            </div>
            <div>
              <label className={theme === "dark" ? "text-sm text-gray-300" : "text-sm text-[var(--ink-700)]"} htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={
                  theme === "dark"
                    ? "mt-2 w-full rounded-2xl border border-white/20 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    : "mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-[var(--ink-900)] placeholder:text-[var(--muted-400)] focus:border-[var(--accent-600)] focus:outline-none focus:ring-2 focus:ring-[rgba(224,138,81,0.12)]"
                }
              />
            </div>
            <div>
              <label className={theme === "dark" ? "text-sm text-gray-300" : "text-sm text-[var(--ink-700)]"} htmlFor="topic">Topic</label>
              <select
                id="topic"
                name="topic"
                className={
                  theme === "dark"
                    ? "mt-2 w-full rounded-2xl border border-white/20 bg-black/50 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    : "mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-[var(--ink-900)] focus:border-[var(--accent-600)] focus:outline-none focus:ring-2 focus:ring-[rgba(224,138,81,0.12)]"
                }
                defaultValue="project"
              >
                <option value="project">Start a project</option>
                <option value="support">General question</option>
                <option value="expert">Join the expert collective</option>
              </select>
            </div>
            <div>
              <label className={theme === "dark" ? "text-sm text-gray-300" : "text-sm text-[var(--ink-700)]"} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={
                  theme === "dark"
                    ? "mt-2 w-full rounded-2xl border border-white/20 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    : "mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-[var(--ink-900)] placeholder:text-[var(--muted-400)] focus:border-[var(--accent-600)] focus:outline-none focus:ring-2 focus:ring-[rgba(224,138,81,0.12)]"
                }
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send message'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
