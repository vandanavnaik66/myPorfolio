import { NextResponse } from "next/server";
import { profile } from "@/lib/content";

export async function GET() {
  return NextResponse.json(profile);
}
