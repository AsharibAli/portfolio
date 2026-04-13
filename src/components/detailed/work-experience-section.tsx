"use client";

import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { type ResumeDataWithIcons } from "@/lib/icons-mapper";

interface WorkExperienceSectionProps {
  work: ResumeDataWithIcons["work"];
}

export function WorkExperienceSection({ work }: WorkExperienceSectionProps) {
  return (
    <Section>
      <h2 className="text-2xl font-semibold">Experience</h2>
      {work.map((item) => (
        <Card key={item.company} className="p-5 sm:p-6">
          <CardHeader>
            <div className="flex flex-col items-start gap-y-2 text-base sm:flex-row sm:items-start sm:justify-between sm:gap-x-2">
              <h3 className="inline-flex min-w-0 flex-wrap items-center gap-x-1 gap-y-1 font-semibold leading-snug">
                <a className="link-hover hover:underline" href={item.link}>
                  {item.company}
                </a>

                <span className="inline-flex flex-wrap gap-1">
                  {item.badges.map((badge) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                      key={badge}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              </h3>
              <div className="text-sm tabular-nums text-muted-foreground">
                {item.start} - {item.end ?? "Present"}
              </div>
            </div>

            <h4 className="text-sm leading-none text-muted-foreground print:text-[12px]">
              {item.title}
            </h4>
          </CardHeader>
          <CardContent className="mt-2">
            <p className="mb-2 text-sm leading-relaxed print:text-[10px]">{item.description}</p>
            {item.bulletPoints && item.bulletPoints.length > 0 ? (
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground print:text-[10px]">
                {item.bulletPoints.map((point, index) => (
                  <li
                    key={`${item.company}-${index}`}
                    className="flex items-center gap-x-2 leading-relaxed"
                  >
                    <ArrowRightIcon className="h-3 w-3 flex-shrink-0 text-muted-foreground" />
                    <span className="min-w-0 leading-relaxed">
                      {point.text}

                      {"links" in point && point.links && point.links.length > 0 ? (
                        <span className="inline-flex items-center gap-0 whitespace-nowrap align-middle [&>a+a]:-ml-0.5 sm:ml-0.5 sm:[&>a+a]:-ml-0.5">
                          {point.links.map((link, linkIndex) => (
                            <a
                              key={`${point.text}-${linkIndex}`}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex h-5 w-5 items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-accent/50 hover:text-foreground sm:h-7 sm:w-7"
                              title={link.name}
                            >
                              <ExternalLinkIcon className="h-3 w-3" />
                            </a>
                          ))}
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </Section>
  );
}


