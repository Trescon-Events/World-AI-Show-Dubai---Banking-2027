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

export function SpeakersList() {
  const [searchQuery, setSearchQuery] = useState("");

  const baseList = useMemo(() => {
    return pastSpeakers.map((s) => ({
      id: s.id,
      name: s.name,
      designation: s.designation,
      company: s.company,
      image: s.image,
      bio: s.bio,
    }));
  }, []);

  const filteredSpeakers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return baseList.filter((s) => {
      return (
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.designation.toLowerCase().includes(q) ||
        s.company.toLowerCase().includes(q)
      );
    });
  }, [baseList, searchQuery]);

  return (
    <section className="relative py-[88px] bg-[#F7F9FC] max-sm:py-[60px]" id="lineup">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">

        {/* Search Controls */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#0069B8]/20 pb-6">
          <h2 className="font-heading font-bold text-[#08121E] leading-tight tracking-[-0.02em] text-[clamp(28px,3.6vw,42px)] m-0">
            Global Series <GradientText tone="blue">Past Speakers</GradientText>
          </h2>

          {/* Search by name, designation, or company */}
          <div className="relative w-full max-w-[360px]">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, designation, or company"
              className="w-full h-[44px] px-4 rounded-full bg-white border border-[#0069B8]/25 text-[#08121E] text-[14px] placeholder:text-[#52657A] focus:outline-none focus:border-[#009EAD] shadow-[0_6px_18px_rgba(8,18,30,0.04)] transition-colors"
            />
          </div>
        </div>

        {filteredSpeakers.length === 0 ? (
          <p className="text-[#52657A] text-lg">No speakers match your current search criteria.</p>
        ) : (
          <div className="speaker-grid grid grid-cols-4 gap-[20px] max-[980px]:grid-cols-2 max-sm:grid-cols-1">
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
