"use client";

import React from "react";
import { GlobeIcon } from "lucide-react";

import { type ResumeData } from "@/lib/data";
import { useResumeDataWithIcons } from "@/hooks/use-resume-data-with-icons";
import { ContactActions } from "@/components/contact-actions";

interface SimpleViewProps {
  data: ResumeData;
}

export function SimpleView({ data: rawData }: SimpleViewProps) {
  const data = useResumeDataWithIcons(rawData);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 sm:px-6">
      <div className="card surface-panel max-w-[92%] p-6 text-center sm:max-w-lg sm:p-10">
        <h1 className="animate-fade-in mb-4 text-4xl font-semibold text-foreground sm:text-5xl">
          {data.name}
        </h1>

        <p className="animate-fade-in-delayed mx-auto mb-6 text-base text-muted-foreground sm:text-lg">
          {data.about}
        </p>

        <p className="animate-fade-in-delayed mb-8 flex items-center justify-center text-xs text-muted-foreground">
          <GlobeIcon className="mr-1 h-3 w-3" />
          <a
            className="link-hover underline-offset-4 hover:underline"
            href={data.locationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.location}
          </a>
        </p>

        <ContactActions
          contact={data.contact}
          size="md"
          className="animate-fade-in-delayed-more mx-auto justify-center gap-1.5 sm:max-w-none sm:gap-2"
        />
      </div>
    </div>
  );
}
