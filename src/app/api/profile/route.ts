import { NextResponse } from "next/server";
import { RESUME_DATA } from "@/data/resume-data.tsx";

export async function GET() {
  return NextResponse.json(RESUME_DATA);
}
