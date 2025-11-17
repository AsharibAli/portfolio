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
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white sm:px-6">
      <div className="max-w-[90%] text-center sm:max-w-md">
        <h1 className="animate-fade-in mb-4 text-4xl font-bold text-white sm:text-5xl">
          {data.name}
        </h1>

        <p className="animate-fade-in-delayed mb-6 text-base text-gray-400 sm:text-lg">
          {data.about}
        </p>

        <p className="animate-fade-in-delayed mb-8 flex items-center justify-center text-xs text-gray-500">
          <GlobeIcon className="mr-1 h-3 w-3" />
          <a
            className="hover:text-gray-400 hover:underline"
            href={data.locationLink}
            target="_blank"
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
