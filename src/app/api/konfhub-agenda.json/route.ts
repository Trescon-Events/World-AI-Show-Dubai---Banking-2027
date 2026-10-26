import { NextResponse } from "next/server";
import archivedFilters from "../../../data/konfhub-archive/agenda-filters.json";
import archivedSessions from "../../../data/konfhub-archive/agenda-sessions.json";

export const dynamic = "force-static";

const EVENT_ID = "8f07cbab-ebca-4b02-80e3-48c281f1fa8d";

type KonfHubSpeaker = {
  designation?: string;
  image_url?: string;
  name?: string;
  organisation?: string;
  tags?: KonfHubTag[];
};

type KonfHubTag = {
  id?: string | number;
  name?: string;
};

type KonfHubFilter = {
  name?: string;
  tags?: KonfHubTag[];
};

type KonfHubSession = {
  end_timestamp?: string;
  session_description?: string;
  session_id: number;
  session_location?: string;
  session_order?: number;
  session_speakers?: KonfHubSpeaker[];
  session_title?: string;
  session_type?: number;
  start_timestamp?: string;
  tags?: KonfHubTag[];
  track_assigned?: boolean;
  track_id?: string | number;
  track_title?: string;
};

function tagId(tag?: KonfHubTag) {
  return tag?.id === undefined || tag.id === null ? "" : String(tag.id);
}

function isNamedFilter(filter: KonfHubFilter, name: string) {
  return filter.name?.trim().toLowerCase() === name.toLowerCase();
}

function sortedOptions(options: Map<string, string>) {
  return Array.from(options.entries())
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(([id, title]) => ({ id, title }));
}

function toIso(timestamp?: string) {
  if (!timestamp) {
    return "";
  }
  return `${timestamp.replace(" ", "T")}Z`;
}

function getDayKey(timestamp?: string) {
  if (!timestamp) {
    return "";
  }
  const parts = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Kuala_Lumpur",
    year: "numeric"
  }).formatToParts(new Date(toIso(timestamp)));

  const year = parts.find((part) => part.type === "year")?.value || "";
  const month = parts.find((part) => part.type === "month")?.value || "";
  const day = parts.find((part) => part.type === "day")?.value || "";

  return `${year}-${month}-${day}`;
}

function formatDayLabel(dayKey: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    timeZone: "Asia/Kuala_Lumpur",
    weekday: "long"
  }).format(new Date(`${dayKey}T00:00:00+08:00`));
}

function formatTime(timestamp?: string) {
  if (!timestamp) {
    return "";
  }
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Kuala_Lumpur"
  }).format(new Date(toIso(timestamp)));
}

// Archive note: this used to live-fetch KonfHub's filters + sessions
// endpoints, which would break on any rebuild after the event instance is
// deleted. Serves the frozen 2026-09-28 snapshot instead - see
// src/data/konfhub-archive/ and konfhub-snapshot/ at the repo root.
export async function GET() {
  try {
    const filters = archivedFilters as unknown as KonfHubFilter[];
    const sessions = archivedSessions as unknown as KonfHubSession[];

    const sessionTypeFilter = filters.find((filter) => isNamedFilter(filter, "Session Type"));
    const stageFilter = filters.find((filter) => isNamedFilter(filter, "Stage"));

    const sessionTypeIds = new Set((sessionTypeFilter?.tags || []).map(tagId).filter(Boolean));
    const stageIds = new Set((stageFilter?.tags || []).map(tagId).filter(Boolean));

    const shouldDeriveSessionTypesFromTags = sessionTypeIds.size === 0 && stageIds.size === 0;

    const sessionTypeMap = new Map<string, string>();
    const stageMap = new Map<string, string>();
    const themeMap = new Map<string, string>();

    for (const tag of sessionTypeFilter?.tags || []) {
      const id = tagId(tag);
      if (id) {
        sessionTypeMap.set(id, tag.name || "Session");
      }
    }

    for (const tag of stageFilter?.tags || []) {
      const id = tagId(tag);
      if (id) {
        stageMap.set(id, tag.name || "Stage");
      }
    }

    for (const session of sessions) {
      for (const tag of session.tags || []) {
        const id = tagId(tag);
        if (!id) {
          continue;
        }

        if (shouldDeriveSessionTypesFromTags) {
          sessionTypeIds.add(id);
          sessionTypeMap.set(id, tag.name || "Session");
          continue;
        }

        if (sessionTypeIds.has(id) || stageIds.has(id)) {
          continue;
        }

        themeMap.set(id, tag.name || "Theme");
      }

      if (session.track_assigned && session.track_id && session.track_title) {
        const id = String(session.track_id);
        stageMap.set(id, session.track_title);
      }
    }

    const normalized = sessions
      .map((session) => {
        const dayKey = getDayKey(session.start_timestamp);
        const allTags = session.tags || [];
        const stage = allTags.find((tag) => stageIds.has(tagId(tag)));
        const sessionType = allTags.find((tag) => sessionTypeIds.has(tagId(tag)));
        const themeTags = allTags.filter((tag) => themeMap.has(tagId(tag)));

        const fallbackStageId = session.track_assigned && session.track_id ? String(session.track_id) : "";
        const fallbackStageTitle = session.track_assigned && session.track_title ? session.track_title : "";

        const orderedSpeakers = [...(session.session_speakers || [])].sort((a, b) => {
          const aModerator = (a.tags || []).some((tag) => tag.name?.trim().toLowerCase() === "moderator");
          const bModerator = (b.tags || []).some((tag) => tag.name?.trim().toLowerCase() === "moderator");
          return Number(aModerator) - Number(bModerator);
        });

        return {
          dayKey,
          dayLabel: dayKey ? formatDayLabel(dayKey) : "Agenda",
          description: session.session_description || "",
          endTime: (session.session_title || "").includes("Registration & Welcome Coffee") ? "9:00 AM" : formatTime(session.end_timestamp),
          id: session.session_id,
          location: stage?.name || fallbackStageTitle || session.session_location || "",
          order: session.session_order || 0,
          searchText: [
            session.session_title,
            ...(session.session_speakers || []).map((speaker) => speaker.name)
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase(),
          speakers: orderedSpeakers.map((speaker) => {
            const role = (speaker.tags || []).some((tag) => tag.name?.trim().toLowerCase() === "moderator")
              ? "MODERATOR"
              : "SPEAKER";

            return {
              designation: speaker.designation || "",
              imageUrl: speaker.image_url || "",
              name: speaker.name || "",
              organisation: speaker.organisation || "",
              role
            };
          }),
          startTime: (session.session_title || "").includes("Registration & Welcome Coffee") ? "8:00 AM" : formatTime(session.start_timestamp),
          tagIds: allTags.map(tagId).filter(Boolean),
          tags: [...themeTags, sessionType]
            .map((item) => item?.name)
            .filter((name): name is string => Boolean(name)),
          title: session.session_title || "Session",
          trackId: stage ? tagId(stage) : fallbackStageId || "main",
          trackTitle: stage?.name || fallbackStageTitle || "Main Stage",
          typeId: sessionType ? tagId(sessionType) : "",
          typeTitle: sessionType?.name || "Session"
        };
      })
      .sort((a, b) => a.dayKey.localeCompare(b.dayKey) || a.order - b.order || a.startTime.localeCompare(b.startTime));

    const days = Array.from(
      new Map(normalized.map((session) => [session.dayKey, session.dayLabel])).entries()
    ).map(([key, label]) => ({ key, label }));

    const tracks = stageMap.size
      ? sortedOptions(stageMap)
      : Array.from(new Map(normalized.filter((session) => session.trackId !== "main").map((session) => [session.trackId, session.trackTitle])).entries())
          .map(([id, title]) => ({ id, title }));

    return NextResponse.json({
      eventId: EVENT_ID,
      filters: {
        sessionTypes: sortedOptions(sessionTypeMap),
        stages: sortedOptions(stageMap),
        themes: sortedOptions(themeMap)
      },
      source: "konfhub",
      days,
      tracks,
      sessions: normalized
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to load KonfHub agenda" },
      { status: 500 }
    );
  }
}
