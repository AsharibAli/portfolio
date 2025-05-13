"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { MailIcon, GlobeIcon } from "lucide-react";

export function SimpleView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-6 text-white">
      <div className="max-w-md text-center">
        <h1 className="animate-fade-in mb-4 text-5xl font-bold text-white">
          {RESUME_DATA.name}
        </h1>

        <p className="animate-fade-in-delayed mb-4 text-lg text-gray-400">
          {RESUME_DATA.about}
        </p>

        <p className="animate-fade-in-delayed mb-6 text-sm text-gray-500">
          {RESUME_DATA.summary}
        </p>

        <div className="animate-fade-in-delayed-more flex flex-wrap justify-center gap-3">
          {RESUME_DATA.contact.email && (
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-gray-800 transition-all hover:scale-110 hover:border-gray-600 hover:bg-gray-900"
              asChild
            >
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                aria-label="Email"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </Button>
          )}

          {RESUME_DATA.contact.social.map((social) => (
            <Button
              key={social.name}
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-gray-800 transition-all hover:scale-110 hover:border-gray-600 hover:bg-gray-900"
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
