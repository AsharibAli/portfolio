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
    <div className="card surface-panel flex flex-col-reverse gap-6 p-4 sm:p-5 md:flex-row md:items-center md:justify-between md:gap-8 md:p-7">
      <div className="flex-1 space-y-2.5">
        <h1 className="break-words text-3xl font-semibold sm:text-4xl md:text-5xl">
          {data.name}
        </h1>
        <p className="max-w-2xl break-words text-sm text-muted-foreground sm:text-base print:text-[12px]">
          {data.about}
        </p>
        <p className="max-w-md items-center text-xs text-muted-foreground sm:text-sm">
          <a
            className="inline-flex items-center gap-x-1.5 align-baseline leading-none hover:underline"
            href={data.locationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobeIcon className="h-3 w-3" />
            {data.location}
          </a>
        </p>

        <ContactActions
          contact={data.contact}
          className="max-w-[320px] gap-2 pt-2 sm:max-w-none print:hidden"
        />

        <div className="hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex print:text-[12px]">
          {data.contact.email ? (
            <a href={`mailto:${data.contact.email}`}>
              <span className="underline">{data.contact.email}</span>
            </a>
          ) : null}
        </div>
      </div>

      <Avatar className="h-24 w-24 flex-shrink-0 rounded-2xl border border-border sm:h-28 sm:w-28 md:h-32 md:w-32">
        <AvatarImage alt={data.name} src={data.avatarUrl} className="rounded-xl" />
        <AvatarFallback>{data.initials}</AvatarFallback>
      </Avatar>
    </div>
  );
}


