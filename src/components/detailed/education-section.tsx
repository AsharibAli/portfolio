"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { type ResumeDataWithIcons } from "@/lib/icons-mapper";

interface EducationSectionProps {
  education: ResumeDataWithIcons["education"];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <Section>
      <h2 className="text-2xl font-semibold">Education</h2>
      {education.map((school) => (
        <Card key={school.school} className="p-5 sm:p-6">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="font-semibold leading-none">{school.school}</h3>
              <div className="text-sm tabular-nums text-muted-foreground">
                {school.start} - {school.end}
              </div>
            </div>
          </CardHeader>
          <CardContent className="mt-2 text-sm text-muted-foreground print:text-[12px]">
            {school.degree}
          </CardContent>
        </Card>
      ))}
    </Section>
  );
}


