import { NextResponse } from "next/server";
import { projects } from "@/lib/content";

export async function GET() {
  return NextResponse.json(projects);
}
