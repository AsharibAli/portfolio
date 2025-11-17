"use client";

import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { MailIcon, GlobeIcon } from "lucide-react";
import { type ResumeData } from "@/lib/data";
import { addIconsToResumeData } from "@/lib/icons-mapper";

interface SimpleViewProps {
  data: ResumeData;
}

export function SimpleView({ data: rawData }: SimpleViewProps) {
  // Add icons to the data on the client side
  const data = useMemo(() => addIconsToResumeData(rawData), [rawData]);
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

        <div className="animate-fade-in-delayed-more mx-auto flex justify-center gap-1.5 sm:gap-2 sm:max-w-none">
          {/* Email button */}
          {data.contact.email && (
            <Button
              className="h-8 w-8 sm:h-8 sm:w-8"
              variant="outline"
              size="icon"
              asChild
            >
              <a href={`mailto:${data.contact.email}`} aria-label="Email">
                <MailIcon className="h-4 w-4 sm:h-4 sm:w-4" />
              </a>
            </Button>
          )}

          {/* Social media buttons */}
          {data.contact.social.map((social) => (
            <Button
              key={social.name}
              className="h-8 w-8 sm:h-8 sm:w-8"
              variant="outline"
              size="icon"
              asChild
            >
              <a href={social.url} target="_blank" aria-label={social.name}>
                <social.icon className="h-4 w-4 sm:h-4 sm:w-4" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
