"use client";

import { type ReactNode, useEffect, useState } from "react";
import { GradientText } from "../Shared";
import { SpeakerCard } from "../../speakers/SpeakerCard";
import { speakers as fallbackSpeakers } from "../../speakers/data";

interface KonfHubSpeaker {
  speaker_id: number;
  name: string;
  designation: string;
  organisation: string;
  image_url: string;
  speaker_order?: number;
  about?: string;
}

export function SpeakersSection({
  heading = (
    <>
      Enterprise <GradientText>Faculty</GradientText>
    </>
  ),
}: {
  heading?: ReactNode;
} = {}) {
  const [displaySpeakers, setDisplaySpeakers] = useState<Array<{
    id: string | number;
    name: string;
    designation: string;
    company: string;
    image: string;
    bio?: string;
  }>>(() =>
    fallbackSpeakers.slice(0, 8).map((speaker) => ({
      id: speaker.id,
      name: speaker.name,
      designation: speaker.designation,
      company: speaker.company,
      image: speaker.image,
      bio: speaker.bio || "",
    }))
  );

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
            if (cat.name && cat.name.toLowerCase().includes("moderator")) continue;

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

        uniqueList.sort((a, b) => (a.speaker_order || 999) - (b.speaker_order || 999));

        if (uniqueList.length > 0) {
          const mapped = uniqueList.slice(0, 8).map((speaker) => ({
            id: speaker.speaker_id,
            name: speaker.name || "",
            designation: speaker.designation || "",
            company: speaker.organisation || "",
            image: speaker.image_url || "/banking/images/speakers/default.png",
            bio: speaker.about || "",
          }));
          setDisplaySpeakers(mapped);
        } else {
          useFallback();
        }
      })
      .catch((err) => {
        console.error("Failed to load live speakers for homepage:", err);
        useFallback();
      });

    function useFallback() {
      const mapped = fallbackSpeakers.slice(0, 8).map((speaker) => ({
        id: speaker.id,
        name: speaker.name,
        designation: speaker.designation,
        company: speaker.company,
        image: speaker.image,
        bio: speaker.bio || "",
      }));
      setDisplaySpeakers(mapped);
    }
  }, []);

  return (
    <section className="relative py-[104px] bg-gradient-to-b from-[#051224]/70 to-[#020a18]/96 max-sm:py-[72px]" id="speakers">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* Title and Header Block */}
        <div className="flex flex-col items-center text-center mb-[54px]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono uppercase tracking-[2px] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
            Series Faculty &amp; Past Speakers
          </div>
          <h2 className="text-center font-[850] text-white leading-[1.08] tracking-[-1.8px] text-[clamp(34px,4.5vw,56px)] max-w-[920px]">
            {heading}
          </h2>
        </div>

        {/* Speakers Grid Container */}
        <div className="speaker-grid grid grid-cols-4 gap-[22px] max-[1080px]:grid-cols-3 max-[768px]:grid-cols-2 max-sm:grid-cols-1">
          {displaySpeakers.map((speaker, index) => (
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

        {/* View All Speakers CTA Button */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-4">
          <a
            href="/banking/speakers/"
            className="inline-flex items-center justify-center h-[52px] px-8 rounded-full font-extrabold text-[15px] text-black [color:#06111f!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.3)] transition-all duration-200 cursor-pointer"
          >
            Explore Speakers Hub ➔
          </a>
          <a
            href="/banking/agenda/call-for-speakers/"
            className="inline-flex items-center justify-center h-[52px] px-8 rounded-full font-extrabold text-[15px] text-white border border-white/25 bg-white/5 hover:border-cyan hover:text-cyan transition-all duration-200 cursor-pointer"
          >
            Apply to Speak →
          </a>
        </div>

        {/* S12 · Faculty Call Card */}
        <div className="mt-16 p-9 max-sm:p-6 rounded-[24px] border border-[#C0F43C]/35 bg-gradient-to-r from-[#06152d]/95 via-[#081d38]/95 to-[#06152d]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)] flex items-center justify-between gap-8 max-lg:flex-col max-lg:text-center">
          <div className="max-w-[720px]">
            <span className="inline-block text-[#C0F43C] font-mono text-[11px] font-bold uppercase tracking-[2.2px] mb-2">
              Faculty
            </span>
            <h3 className="m-0 mb-3 text-white font-[850] text-[clamp(24px,3vw,34px)] leading-[1.15] tracking-[-0.8px]">
              If you have deployed AI into core regulated banking, we want you on stage
            </h3>
            <p className="m-0 text-white/75 text-[16px] leading-[1.6]">
              We are seeking enterprise banking leaders with unvarnished case studies: real-world architecture hurdles, pilot post-mortems, model risk mitigation, and verified balance-sheet outcomes.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="/banking/agenda/call-for-speakers/"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-full font-extrabold text-[15px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.4)] transition-all duration-200"
            >
              Apply to Speak →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
