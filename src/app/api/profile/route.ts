import { NextResponse } from "next/server";
import data from "@/data/resume-data.json";

export async function GET() {
  return NextResponse.json(data);
}
