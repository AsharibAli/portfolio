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
              <h3 className="min-w-0 font-semibold leading-snug">
                <span>{achievement.title}</span>
                <span className="ml-1 inline-flex items-center gap-1 whitespace-nowrap align-middle">
                  {achievement.reference.map((ref) => (
                    <a
                      key={ref.url}
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-accent/50 hover:text-foreground sm:h-8 sm:w-8"
                      aria-label={`Open reference for ${achievement.title}`}
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  ))}
                </span>
              </h3>
            </div>
          </CardHeader>
        </Card>
      ))}
    </Section>
  );
}


