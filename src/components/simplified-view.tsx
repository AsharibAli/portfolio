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
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4 text-white sm:p-6">
      <div className="max-w-[90%] text-center sm:max-w-md">
        <h1 className="animate-fade-in mb-4 text-4xl font-bold text-white sm:text-5xl">
          {data.name}
        </h1>

        <p className="animate-fade-in-delayed mb-4 text-base text-gray-400 sm:text-lg">
          {data.about}
        </p>

        <p className="animate-fade-in-delayed mb-6 text-xs text-gray-500 sm:text-sm">
          {data.summary}
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

        <div className="animate-fade-in-delayed-more flex flex-wrap justify-center gap-3">
          {/* Email button */}
          {data.contact.email && (
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 touch-manipulation rounded-full border-gray-800 transition-all hover:scale-110 hover:border-gray-600 hover:bg-gray-900 active:scale-95"
              asChild
            >
              <a
                href={`mailto:${data.contact.email}`}
                aria-label="Email"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </Button>
          )}

          {/* Social media buttons */}
          {data.contact.social.map((social) => (
            <Button
              key={social.name}
              variant="outline"
              size="icon"
              className="h-10 w-10 touch-manipulation rounded-full border-gray-800 transition-all hover:scale-110 hover:border-gray-600 hover:bg-gray-900 active:scale-95"
              asChild
            >
              <a href={social.url} target="_blank" aria-label={social.name}>
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
