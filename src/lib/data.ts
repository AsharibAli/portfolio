import resumeDataJSON from "@/data/resume-data.json";

/**
 * Server-side data fetching function
 * This function runs on the server and fetches the resume data
 * In a real-world scenario, this could fetch from a database or external API
 */
export async function getResumeData() {
  // Simulate a slight delay to demonstrate server-side processing
  // In production, this would be replaced with actual API/database calls
  await new Promise((resolve) => setTimeout(resolve, 0));

  return resumeDataJSON;
}

/**
 * Type for the resume data
 * Export this type so it can be used in components
 */
export type ResumeData = typeof resumeDataJSON;
