"use client";

import { Section } from "@/components/ui/section";

interface AboutSectionProps {
  summary: string;
}

export function AboutSection({ summary }: AboutSectionProps) {
  return (
    <Section className="card surface-panel p-5 sm:p-6">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base print:text-[12px]">
        {summary}
      </p>
    </Section>
  );
}


