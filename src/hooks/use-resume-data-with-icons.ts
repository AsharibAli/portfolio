"use client";

import { useMemo } from "react";

import { addIconsToResumeData, type ResumeDataWithIcons } from "@/lib/icons-mapper";
import { type ResumeData } from "@/lib/data";

/**
 * Reusable hook that augments resume data with social icon components.
 * Keeping the transformation behind a hook prevents accidental serialization
 * of React components across the server → client boundary.
 */
export function useResumeDataWithIcons(data: ResumeData): ResumeDataWithIcons {
  return useMemo(() => addIconsToResumeData(data), [data]);
}


