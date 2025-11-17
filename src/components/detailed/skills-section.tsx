"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { type ResumeDataWithIcons } from "@/lib/icons-mapper";

interface SkillsSectionProps {
  skills: ResumeDataWithIcons["skills"];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) => (
          <Badge className="print:text-[10px]" key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </Section>
  );
}


