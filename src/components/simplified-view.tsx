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
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 pb-[calc(8rem+env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-6 sm:pb-16 sm:pt-8">
      <div className="card surface-panel w-full max-w-lg p-5 text-center sm:p-10">
        <h1 className="animate-fade-in mb-3 break-words text-3xl font-semibold text-foreground sm:mb-4 sm:text-5xl">
          {data.name}
        </h1>

        <p className="animate-fade-in-delayed mx-auto mb-5 break-words text-sm text-muted-foreground sm:mb-6 sm:text-lg">
          {data.about}
        </p>

        <p className="animate-fade-in-delayed mb-6 flex items-center justify-center text-sm text-muted-foreground sm:mb-8">
          <GlobeIcon className="mr-1.5 h-4 w-4" />
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
          className="animate-fade-in-delayed-more mx-auto justify-center gap-2 sm:max-w-none"
        />
      </div>
    </div>
  );
}
