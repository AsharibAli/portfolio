"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { type ResumeDataWithIcons } from "@/lib/icons-mapper";

interface SkillsSectionProps {
  skills: ResumeDataWithIcons["skills"];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section className="surface-panel p-5 sm:p-6">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge className="print:text-[10px]" variant="secondary" key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </Section>
  );
}


