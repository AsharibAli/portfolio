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
      <h2 className="text-xl font-bold">Achievements & Honourable Mentions</h2>
      {achievements.map((achievement) => (
        <Card key={achievement.title}>
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="flex items-center gap-x-2 font-semibold leading-none">
                {achievement.title}
                {achievement.reference.map((ref) => (
                  <a
                    key={ref.url}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center transition-colors duration-200 hover:text-blue-400"
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


