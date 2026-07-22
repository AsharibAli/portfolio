import { NextResponse } from "next/server";
import { getResumeData } from "@/lib/data";
import { generateProfileMarkdown } from "@/lib/profile-markdown";

export const runtime = "edge";

/**
 * Serves the resume as clean Markdown at /api/profile.md — the format
 * LLMs (ChatGPT, Claude, Grok, etc.) parse most reliably.
 * JSON equivalent lives at /api/profile.
 */
export async function GET() {
  const data = await getResumeData();
  const markdown = generateProfileMarkdown(data);

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
