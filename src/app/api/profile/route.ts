import { NextResponse } from "next/server";
import { getResumeData } from "@/lib/data";

export const runtime = 'edge';

/**
 * API Route to fetch resume data
 * This endpoint provides the resume data in JSON format
 * Runs on the Edge Runtime for optimal performance
 */
export async function GET() {
  const data = await getResumeData();
  return NextResponse.json(data);
}
