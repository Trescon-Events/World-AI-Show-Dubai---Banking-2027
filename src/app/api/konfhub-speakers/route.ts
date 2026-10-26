import { NextResponse } from "next/server";
import archivedSpeakers from "../../../data/konfhub-archive/speakers.json";

export const dynamic = "force-static";

// Archive note: this used to be a live ISR route re-fetching KonfHub every
// 60 seconds, which would break on any rebuild after the event instance is
// deleted. Serves the frozen 2026-09-28 snapshot instead - see
// src/data/konfhub-archive/ and konfhub-snapshot/ at the repo root.
export async function GET() {
  return NextResponse.json(archivedSpeakers);
}
