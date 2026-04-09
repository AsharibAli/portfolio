"use client";

import { CommandMenu } from "@/components/command-menu";
import { type ResumeData } from "@/lib/data";
import { useResumeDataWithIcons } from "@/hooks/use-resume-data-with-icons";
import { ProfileHero } from "@/components/detailed/profile-hero";
import { AboutSection } from "@/components/detailed/about-section";
import { KeyHighlightsSection } from "@/components/detailed/key-highlights-section";
import { WorkExperienceSection } from "@/components/detailed/work-experience-section";
import { EducationSection } from "@/components/detailed/education-section";
import { SkillsSection } from "@/components/detailed/skills-section";
import { ProjectsSection } from "@/components/detailed/projects-section";
import { AchievementsSection } from "@/components/detailed/achievements-section";

interface DetailedViewProps {
  data: ResumeData;
}

/**
 * Client Component for rendering the detailed portfolio view
 * Data is fetched on the server and passed as props
 */
export function DetailedView({ data: rawData }: DetailedViewProps) {
  const data = useResumeDataWithIcons(rawData);
  return (
    <main className="container relative mx-auto min-h-screen scroll-my-12 overflow-auto bg-background p-4 sm:p-6 md:p-12 print:p-12">
      <section className="mx-auto w-full max-w-4xl space-y-8 rounded-3xl bg-transparent text-foreground md:space-y-10 print:bg-white print:text-black">
        <ProfileHero data={data} />
        <AboutSection summary={data.summary} />
        <KeyHighlightsSection highlights={data.keyHighlights} />
        <WorkExperienceSection work={data.work} />
        <EducationSection education={data.education} />
        <SkillsSection skills={data.skills} />
        <ProjectsSection projects={data.projects} />
        <AchievementsSection achievements={data.achievements} />
      </section>

      <CommandMenu
        links={[
          {
            url: data.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...data.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
