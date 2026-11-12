"use client";

import { type ReactNode } from "react";
import { GradientText } from "../Shared";
import { SpeakerCard } from "../../speakers/SpeakerCard";
import { speakers as fallbackSpeakers } from "../../speakers/data";

export function SpeakersSection({
  heading = (
    <>
      Past Faculty at <GradientText tone="white-orange">World AI Show</GradientText>
    </>
  ),
}: {
  heading?: ReactNode;
} = {}) {
  const displaySpeakers = fallbackSpeakers.slice(0, 8).map((speaker) => ({
    id: speaker.id,
    name: speaker.name,
    designation: speaker.designation,
    company: speaker.company,
    image: speaker.image,
    bio: speaker.bio || "",
  }));

  return (
    <section className="relative py-[104px] bg-[#0069B8] surface-blue max-sm:py-[72px]" id="speakers">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        {/* Title and Header Block */}
        <div className="flex flex-col items-center text-center mb-[54px]">
          <h2 className="text-center font-semibold text-white leading-[1.2] tracking-[-0.01em] text-[clamp(30px,3.8vw,48px)] max-w-[920px]">
            {heading}
          </h2>
        </div>

        {/* Speakers Grid Container */}
        <div className="speaker-grid grid grid-cols-4 gap-6 max-[1080px]:grid-cols-3 max-[768px]:grid-cols-2 max-sm:grid-cols-1">
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
            className="bb-btn-primary inline-flex items-center justify-center h-[52px] px-8 font-bold text-[15px]"
          >
            Explore Speakers Hub ➔
          </a>
        </div>

        {/* S12 · Faculty Call Card (Centered White Brand-Accented Card) */}
        <div
          data-aos="zoom-in-up"
          className="mt-16 p-10 max-sm:p-6 rounded-[24px] border border-[#0069B8]/22 border-t-4 border-t-[#F15928] bg-white shadow-[0_16px_40px_rgba(8,18,30,0.16)] flex flex-col items-center justify-center text-center gap-7"
        >
          <div className="max-w-[780px] mx-auto text-center">
            <span className="inline-block text-[#08121E] text-[12px] font-bold uppercase tracking-[0.14em] mb-2">
              Faculty
            </span>
            <h3 className="m-0 mb-3 text-[#08121E] font-semibold text-[clamp(24px,3vw,36px)] leading-[1.2] tracking-[-0.01em] text-center">
              If you have deployed AI into core regulated banking, we want you on stage
            </h3>
            <p className="m-0 text-[#334155] text-[16px] leading-[1.6] text-center">
              We are seeking enterprise banking leaders with unvarnished case studies: real-world architecture hurdles, pilot post-mortems, model risk mitigation, and verified balance-sheet outcomes.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="/banking/agenda/call-for-speakers/"
              className="bb-btn-primary inline-flex items-center justify-center gap-2 h-[52px] px-8 font-bold text-[15px]"
            >
              Apply to Speak →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
