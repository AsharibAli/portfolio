"use client";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import {
  GlobeIcon,
  MailIcon,
  PhoneIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import FlowiseChatbot from "@/components/chatbot";
import { ViewSwitch, ViewMode } from "@/components/view-switch";
import { SimpleView } from "@/components/simplified-view";
import { JsonDisplay } from "@/components/json-display";

export default function Page() {
  // State to track the current view mode
  const [viewMode, setViewMode] = useState<ViewMode>("initial");
  // State to handle smooth transitions
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to handle view mode change with smooth animation
  const handleViewModeChange = (mode: ViewMode) => {
    // If same mode is selected, do nothing
    if (mode === viewMode) return;

    // Start smooth transition
    setIsTransitioning(true);

    // Quick transition - change content after fade out
    setTimeout(() => {
      setViewMode(mode);
      setIsTransitioning(false);
    }, 150); // Very quick, smooth transition
  };

  // Save view preference to localStorage
  useEffect(() => {
    if (viewMode !== "initial") {
      localStorage.setItem("portfolioViewMode", viewMode);
    }
  }, [viewMode]);

  // Load saved preference on initial render
  useEffect(() => {
    const savedViewMode = localStorage.getItem(
      "portfolioViewMode",
    ) as ViewMode | null;
    if (
      savedViewMode &&
      ["simple", "detailed", "developer"].includes(savedViewMode)
    ) {
      setViewMode(savedViewMode);
    }
  }, []);

  // Initial view - just the switch button centered
  if (viewMode === "initial") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Select mode
          </h1>
          <p className="text-sm text-gray-400 sm:text-base">
            Choose a view mode to continue
          </p>
        </div>
        <ViewSwitch
          currentView="simple"
          onChange={handleViewModeChange}
          size="large"
        />
      </div>
    );
  }

  // Simplified view
  if (viewMode === "simple") {
    return (
      <div className={`smooth-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>
        <SimpleView />
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform sm:bottom-8">
          <ViewSwitch currentView={viewMode} onChange={handleViewModeChange} />
        </div>
        <div className="fixed bottom-6 right-4 z-50 sm:right-6">
          <FlowiseChatbot />
        </div>
      </div>
    );
  }

  // Developer view - display JSON data
  if (viewMode === "developer") {
    return (
      <div className={`smooth-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>
        <main className="container relative mx-auto min-h-screen scroll-my-12 overflow-auto bg-black p-2 sm:p-4 md:p-6 lg:p-8 print:p-12">
          <div className="mx-auto w-full max-w-6xl space-y-3 sm:space-y-4 text-white pt-2 sm:pt-4">
            {/* JSON Display Component */}
            <JsonDisplay data={RESUME_DATA} title="Portfolio API Data" />
          </div>
        </main>
        
        {/* Fixed elements */}
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform sm:bottom-8">
          <ViewSwitch currentView={viewMode} onChange={handleViewModeChange} />
        </div>
        <div className="fixed bottom-6 right-4 z-50 sm:right-6">
          <FlowiseChatbot />
        </div>
      </div>
    );
  }

  // Full view (original content)
  return (
    <div className={`smooth-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>
      <main className="container relative mx-auto min-h-screen scroll-my-12 overflow-auto bg-black p-4 sm:p-6 md:p-16 print:p-12">
        <section className="mx-auto w-full max-w-3xl space-y-10 rounded-2xl bg-black text-white print:bg-white print:text-black">
          <div className="flex items-center justify-between gap-8 rounded-xl border border-gray-800 p-4">
            <div className="flex-1 space-y-2.5">
              <h1 className="text-3xl font-bold tracking-tight">
                {RESUME_DATA.name}
              </h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
                {RESUME_DATA.about}
              </p>
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="h-3 w-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
                {/* {RESUME_DATA.contact.tel ? (
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${RESUME_DATA.contact.tel}`} target="_blank">
                      <PhoneIcon className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null} */}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url} target="_blank">
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
                  </a>
                ) : null}
                {/* {RESUME_DATA.contact.tel ? (
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                  </a>
                ) : null} */}
              </div>
            </div>

            <Avatar className="hidden h-32 w-32 rounded-xl border-2 border-gray-800 md:block">
              <AvatarImage
                alt={RESUME_DATA.name}
                src={RESUME_DATA.avatarUrl}
                className="rounded-xl"
              />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
          <Section>
            <h2 className="text-xl font-bold">About</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {" "}
              {RESUME_DATA.summary}
            </p>
          </Section>

          <Section className="print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold">Key Highlights</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 print:grid-cols-4 print:gap-2">
              {RESUME_DATA.keyHighlights.map((point) => (
                <Card
                  key={point.title}
                  className="flex flex-col items-start gap-2 p-4"
                >
                  <div className="text-2xl">{point.icon}</div>
                  <div>
                    <h3 className="font-semibold">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Work Experience</h2>
            {RESUME_DATA.work.map((work) => {
              return (
                <Card key={work.company}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>

                        <span className="inline-flex gap-x-1">
                          {work.badges.map((badge) => (
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
                      <div className="text-sm tabular-nums text-gray-500">
                        {work.start} - {work.end ?? "Present"}
                      </div>
                    </div>

                    <h4 className="font-mono text-sm leading-none print:text-[12px]">
                      {work.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="mt-2">
                    <p className="mb-2 text-xs print:text-[10px]">
                      {work.description}
                    </p>
                    {work.bulletPoints && work.bulletPoints.length > 0 && (
                      <ul className="mt-2 text-xs print:text-[10px]">
                        {work.bulletPoints.map((point: any, index: number) => (
                          <li
                            key={index}
                            className="mb-1 flex items-center gap-x-2"
                          >
                            <ArrowRightIcon className="h-3 w-3 flex-shrink-0 text-gray-500" />
                            <span className="flex items-center gap-x-1">
                              {point.text}
                              {point.link && (
                                <a
                                  href={point.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center hover:text-blue-500"
                                >
                                  <ExternalLinkIcon className="ml-1 h-3 w-3" />
                                </a>
                              )}
                              {point.links && point.links.length > 0 && (
                                <span className="ml-1 flex items-center space-x-1">
                                  {point.links.map(
                                    (
                                      link: { name: string; url: string },
                                      linkIndex: number,
                                    ) => (
                                      <a
                                        key={linkIndex}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center hover:text-blue-500"
                                        title={link.name}
                                      >
                                        <ExternalLinkIcon className="h-3 w-3" />
                                      </a>
                                    ),
                                  )}
                                </span>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
          <Section>
            <h2 className="text-xl font-bold">Education</h2>
            {RESUME_DATA.education.map((education) => {
              return (
                <Card key={education.school}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="font-semibold leading-none">
                        {education.school}
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2 print:text-[12px]">
                    {education.degree}
                  </CardContent>
                </Card>
              );
            })}
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.skills.map((skill) => {
                return (
                  <Badge className="print:text-[10px]" key={skill}>
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </Section>

          <Section className="print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold">Projects</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
              {RESUME_DATA.projects.map((project) => {
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.techStack}
                    link={"link" in project ? project.link.href : undefined}
                  />
                );
              })}
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">
              Achievements & Honourable Mentions
            </h2>
            {RESUME_DATA.achievements.map((achievement) => {
              return (
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
              );
            })}
          </Section>
        </section>

        <CommandMenu
          links={[
            {
              url: RESUME_DATA.personalWebsiteUrl,
              title: "Personal Website",
            },
            ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name,
            })),
          ]}
        />

        <div>
          <FlowiseChatbot />
        </div>

        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform sm:bottom-8">
          <ViewSwitch currentView={viewMode} onChange={handleViewModeChange} />
        </div>
      </main>
    </div>
  );
}
