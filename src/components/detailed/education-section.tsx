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
      <h2 className="text-xl font-bold">Education</h2>
      {education.map((school) => (
        <Card key={school.school}>
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="font-semibold leading-none">{school.school}</h3>
              <div className="text-sm tabular-nums text-gray-500">
                {school.start} - {school.end}
              </div>
            </div>
          </CardHeader>
          <CardContent className="mt-2 print:text-[12px]">{school.degree}</CardContent>
        </Card>
      ))}
    </Section>
  );
}


