"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { ContactActions } from "@/components/contact-actions";
import { type ResumeDataWithIcons } from "@/lib/icons-mapper";
import { GlobeIcon } from "lucide-react";

interface ProfileHeroProps {
  data: ResumeDataWithIcons;
}

export function ProfileHero({ data }: ProfileHeroProps) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-800 p-3 sm:gap-6 sm:p-4 md:gap-8">
      <div className="flex-1 space-y-1.5 sm:space-y-2.5">
        <h1 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
          {data.name}
        </h1>
        <p className="max-w-md text-pretty font-mono text-xs text-muted-foreground sm:text-sm print:text-[12px]">
          {data.about}
        </p>
        <p className="max-w-md items-center text-pretty font-mono text-[10px] text-muted-foreground sm:text-xs">
          <a
            className="inline-flex gap-x-1 align-baseline leading-none hover:underline sm:gap-x-1.5"
            href={data.locationLink}
            target="_blank"
          >
            <GlobeIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            {data.location}
          </a>
        </p>

        <ContactActions
          contact={data.contact}
          className="max-w-[140px] gap-1 pt-1 sm:max-w-none print:hidden"
        />

        <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
          {data.contact.email ? (
            <a href={`mailto:${data.contact.email}`}>
              <span className="underline">{data.contact.email}</span>
            </a>
          ) : null}
        </div>
      </div>

      <Avatar className="h-32 w-32 flex-shrink-0 rounded-xl border-2 border-gray-800 sm:h-28 sm:w-28 md:h-32 md:w-32">
        <AvatarImage alt={data.name} src={data.avatarUrl} className="rounded-xl" />
        <AvatarFallback>{data.initials}</AvatarFallback>
      </Avatar>
    </div>
  );
}


