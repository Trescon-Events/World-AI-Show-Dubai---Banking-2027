"use client";

import { useEffect, useMemo, useState } from "react";
import { SpeakerCard } from "./SpeakerCard";
import { GradientText } from "../components/Shared";
import { speakers as pastSpeakers } from "./data";

interface KonfHubSpeaker {
  speaker_id: number;
  name: string;
  designation: string;
  organisation: string;
  image_url: string;
  speaker_order?: number;
  about?: string;
  tags?: { name: string }[];
}

const FILTER_PILLS = [
  "All",
  "Retail Banking CXOs",
  "Risk & Compliance (CRO/CCO)",
  "Financial Crime & AML",
  "Data & AI Architects",
  "Regulators",
] as const;

type FilterPill = (typeof FILTER_PILLS)[number];

function matchesFilter(designation: string, filter: FilterPill): boolean {
  if (filter === "All") return true;
  const d = designation.toLowerCase();
  if (filter === "Retail Banking CXOs") {
    return d.includes("cio") || d.includes("cto") || d.includes("ceo") || d.includes("chief") || d.includes("banking") || d.includes("digital") || d.includes("managing director");
  }
  if (filter === "Risk & Compliance (CRO/CCO)") {
    return d.includes("risk") || d.includes("cro") || d.includes("cco") || d.includes("compliance") || d.includes("governance") || d.includes("ciso") || d.includes("security");
  }
  if (filter === "Financial Crime & AML") {
    return d.includes("fraud") || d.includes("aml") || d.includes("crime") || d.includes("cyber") || d.includes("security") || d.includes("risk") || d.includes("payment");
  }
  if (filter === "Data & AI Architects") {
    return d.includes("ai") || d.includes("data") || d.includes("architect") || d.includes("analytics") || d.includes("cloud") || d.includes("technology") || d.includes("innovation");
  }
  if (filter === "Regulators") {
    return d.includes("regulator") || d.includes("policy") || d.includes("government") || d.includes("ministry") || d.includes("authority") || d.includes("director") || d.includes("governor");
  }
  return true;
}

export function SpeakersList() {
  const [liveSpeakers, setLiveSpeakers] = useState<KonfHubSpeaker[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterPill>("All");

  useEffect(() => {
    fetch("/banking/api/konfhub-speakers")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch speakers");
        return res.json();
      })
      .then((data) => {
        const list: KonfHubSpeaker[] = [];
        if (data.categorized && Array.isArray(data.categorized)) {
          for (const cat of data.categorized) {
            const entities = cat.entity || cat.speakers || [];
            if (Array.isArray(entities)) {
              list.push(...entities);
            }
          }
        }
        if (data.uncategorized && Array.isArray(data.uncategorized)) {
          list.push(...data.uncategorized);
        }

        const uniqueMap = new Map();
        for (const s of list) {
          const key = s.name.trim().toLowerCase();
          if (!uniqueMap.has(key)) {
            uniqueMap.set(key, s);
          }
        }
        const uniqueList = Array.from(uniqueMap.values());
        uniqueList.sort((a, b) => (a.speaker_order ?? 999) - (b.speaker_order ?? 999));
        setLiveSpeakers(uniqueList);
      })
      .catch((err) => {
        console.error("Failed to load live speakers:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const baseList = useMemo(() => {
    if (liveSpeakers.length > 0) {
      return liveSpeakers.map((s, idx) => ({
        id: String(s.speaker_id || idx),
        name: s.name || "",
        designation: s.designation || "",
        company: s.organisation || "",
        image: s.image_url || "/banking/images/speakers/default.png",
        bio: s.about,
      }));
    }
    return pastSpeakers.map((s) => ({
      id: s.id,
      name: s.name,
      designation: s.designation,
      company: s.company,
      image: s.image,
      bio: s.bio,
    }));
  }, [liveSpeakers]);

  const filteredSpeakers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return baseList.filter((s) => {
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.designation.toLowerCase().includes(q) ||
        s.company.toLowerCase().includes(q);
      const matchesPill = matchesFilter(s.designation, activeFilter);
      return matchesQuery && matchesPill;
    });
  }, [baseList, searchQuery, activeFilter]);

  return (
    <section className="relative py-[92px] bg-[#020b1c] max-sm:py-[62px]" id="lineup">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">

        {/* Faculty Intake Banner (Section 09) */}
        <div className="mb-12 p-7 rounded-[20px] border border-[#C0F43C]/35 bg-gradient-to-r from-[#C0F43C]/10 via-[#041022] to-[#18D4FF]/10 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-[700px]">
            <span className="inline-block font-mono text-[11px] uppercase tracking-[1.8px] text-[#C0F43C] mb-2">
              Dubai 2027 Banking Faculty Intake · Unannounced Slots Open
            </span>
            <h3 className="text-white font-extrabold text-[22px] leading-snug m-0 mb-1.5">
              If you have deployed AI into core regulated banking, we want you on stage
            </h3>
            <p className="text-white/75 text-[15px] leading-relaxed m-0">
              Dubai 2027 banking faculty announcements release in waves following steering committee review. Apply to join the 35–45 expert speakers below, or browse past speakers from the global World AI Show series.
            </p>
          </div>
          <a
            href="/banking/agenda/call-for-speakers/"
            className="inline-flex items-center justify-center gap-2 h-[48px] px-7 rounded-full font-extrabold text-[14px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.35)] transition-all duration-200 shrink-0"
          >
            Apply to Speak →
          </a>
        </div>

        {/* Search & Filter Controls (Section 09) */}
        <div className="mb-10 flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(28px,3.6vw,42px)] m-0">
              Global Series <GradientText>Past Speakers</GradientText>
            </h2>

            {/* Search by name, designation, or company */}
            <div className="relative w-full max-w-[360px]">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, designation, or company"
                className="w-full h-[44px] px-4 rounded-full bg-[#051024] border border-white/15 text-white text-[14px] placeholder:text-white/45 focus:outline-none focus:border-cyan transition-colors"
              />
            </div>
          </div>

          {/* Filter Pills: All · Chief AI Officers · CIOs & CTOs · Data & Architecture · CISOs & Risk */}
          <div className="flex flex-wrap items-center gap-2.5">
            {FILTER_PILLS.map((pill) => {
              const isActive = activeFilter === pill;
              return (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActiveFilter(pill)}
                  className={`px-4 py-2 rounded-full font-mono text-[12px] uppercase tracking-[1.2px] font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#C0F43C] text-[#06111F] [color:#06111F!important] border border-[#C0F43C]"
                      : "bg-white/5 text-white/70 border border-white/10 hover:border-cyan/40 hover:text-white"
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>
        </div>

        {isLoading ? (
          <p className="text-white/60 text-lg">Loading speaker directory...</p>
        ) : filteredSpeakers.length === 0 ? (
          <p className="text-white/60 text-lg">No speakers match your current search or filter criteria.</p>
        ) : (
          <div className="speaker-grid grid grid-cols-3 gap-[22px] max-[980px]:grid-cols-2 max-sm:grid-cols-1">
            {filteredSpeakers.map((speaker, index) => (
              <SpeakerCard
                key={speaker.id}
                name={speaker.name}
                role={speaker.designation}
                company={speaker.company}
                image={speaker.image}
                bio={speaker.bio}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
