"use client";

import { Section } from "@/components/ui/section";

interface AboutSectionProps {
  summary: string;
}

export function AboutSection({ summary }: AboutSectionProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold">About</h2>
      <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
        {summary}
      </p>
    </Section>
  );
}


