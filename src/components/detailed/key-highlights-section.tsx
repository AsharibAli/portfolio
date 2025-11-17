"use client";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { type ResumeDataWithIcons } from "@/lib/icons-mapper";

interface KeyHighlightsSectionProps {
  highlights: ResumeDataWithIcons["keyHighlights"];
}

export function KeyHighlightsSection({ highlights }: KeyHighlightsSectionProps) {
  return (
    <Section className="print-force-new-page scroll-mb-16">
      <h2 className="text-xl font-bold">Key Highlights</h2>
      <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 print:grid-cols-4 print:gap-2">
        {highlights.map((point) => (
          <Card key={point.title} className="flex flex-col items-start gap-2 p-4">
            <div className="text-2xl">{point.icon}</div>
            <div>
              <h3 className="font-semibold">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}


