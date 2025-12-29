import { SectionHeading } from "@/components/ui/SectionHeading";

export default function PressPage() {
  return (
    <div className="bg-[var(--sand-50)] py-24 text-[var(--ink-900)]">
      <div className="mx-auto max-w-5xl px-6 space-y-12">
        <SectionHeading
          eyebrow="Press"
          title="Press & media kit"
          description="Need a quote, logo pack, or background on Neumog's hybrid model? Use the details below or drop us a note."
          alignment="center"
        />
        <div className="grid gap-6 rounded-[32px] border border-[var(--border-soft)] bg-[var(--card-surface)] p-10 shadow-[0_18px_60px_rgba(36,20,8,0.1)] md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-500)]">Fast facts</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted-600)]">
              <li>- Founded: 2023</li>
              <li>- Headquarters: Distributed (NA/EU/APAC)</li>
              <li>- Focus: Commerce, hospitality, delivery, Gen AI/ML, data science, RLHF</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-500)]">Media contact</p>
            <p className="mt-3 text-base text-[var(--ink-900)]">press@neumog.com</p>
            <p className="text-sm text-[var(--muted-500)]">+1 (312) 555-0146</p>
          </div>
        </div>
        <div className="space-y-4 text-[var(--muted-600)]">
          <h2 className="text-2xl text-[var(--ink-900)]">What to know</h2>
          <p>
            Neumog orchestrates hybrid delivery teams: a core internal leadership pod plus experts from MNCs/product companies. We currently deliver e-commerce, hospitality, delivery, and local services platforms with RLHF/data-annotation lines launching soon.
          </p>
        </div>
      </div>
    </div>
  );
}
