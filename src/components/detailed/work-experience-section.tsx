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
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <a className="link-hover hover:underline" href={item.link}>
                  {item.company}
                </a>

                <span className="inline-flex gap-x-1">
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
                  <li key={`${item.company}-${index}`} className="flex items-start gap-x-2">
                    <ArrowRightIcon className="mt-1 h-3 w-3 flex-shrink-0 text-muted-foreground" />
                    <span className="flex items-center gap-x-1">
                      {point.text}

                      {"links" in point && point.links && point.links.length > 0 ? (
                        <span className="ml-1 flex items-center space-x-1">
                          {point.links.map((link, linkIndex) => (
                            <a
                              key={`${point.text}-${linkIndex}`}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-foreground"
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


