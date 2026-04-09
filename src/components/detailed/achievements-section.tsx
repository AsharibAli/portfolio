"use client";

import { ExternalLinkIcon } from "lucide-react";

import { Card, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { type ResumeDataWithIcons } from "@/lib/icons-mapper";

interface AchievementsSectionProps {
  achievements: ResumeDataWithIcons["achievements"];
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <Section>
      <h2 className="text-2xl font-semibold">Achievements & Recognition</h2>
      {achievements.map((achievement) => (
        <Card key={achievement.title} className="p-5 sm:p-6">
          <CardHeader>
            <div className="flex items-start justify-between gap-x-2 text-base">
              <h3 className="flex items-center gap-x-2 font-semibold leading-snug">
                {achievement.title}
                {achievement.reference.map((ref) => (
                  <a
                    key={ref.url}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    aria-label={`Open reference for ${achievement.title}`}
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                ))}
              </h3>
            </div>
          </CardHeader>
        </Card>
      ))}
    </Section>
  );
}


