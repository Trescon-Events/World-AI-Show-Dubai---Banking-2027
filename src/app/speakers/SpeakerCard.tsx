"use client";

import type { CSSProperties } from "react";

type SpeakerCardProps = {
  name: string;
  role: string;
  company: string;
  image: string;
  index: number;
  bio?: string;
};

function stripHtml(html?: string) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
}

function CompanyLabel({ company }: { company: string }) {
  const sep = company.lastIndexOf(" · ");
  if (sep === -1) return <>{company}</>;
  const org = company.slice(0, sep);
  const country = company.slice(sep + 3);
  return (
    <>
      {org} · <span className="speaker-country text-[#F15928] font-bold">{country}</span>
    </>
  );
}

export function SpeakerCard({ name, role, company, image, index, bio }: SpeakerCardProps) {
  const cleanBio = stripHtml(bio);

  return (
    <div className="w-full h-[380px] cursor-pointer group">
      <div className="speaker-card-inner relative w-full h-full overflow-hidden border border-[#248fff]/24 rounded-[16px] bg-[#050b16] transition-all duration-300 after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/95 after:via-black/30 after:to-transparent">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-top opacity-80 transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute z-10 left-5 right-5 bottom-5 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
          <h3 className="m-0 text-white font-[850] text-[22px] mb-1 leading-tight">{name}</h3>
          <p className="m-0 text-white/70 text-[14px] font-medium leading-tight">{role}</p>
          <span className="block mt-1.5 text-[#18d4ff] font-mono text-[12.5px] leading-snug font-semibold">
            <CompanyLabel company={company} />
          </span>
          <div className="speaker-line block w-8 h-[2px] mt-3.5 bg-cyan transition-all duration-300" />
        </div>

        {cleanBio && (
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-5 pt-8 bg-[#050b16]/95 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border border-[#248fff]/40 rounded-[16px] backdrop-blur-[4px]">
            <h4 className="m-0 text-white font-[850] text-[20px] mb-0.5 leading-tight">{name}</h4>
            <span className="block text-white/60 text-[13px] font-medium leading-tight mb-1.5">{role}</span>
            <span className="block text-[#18d4ff] font-mono text-[12px] leading-snug font-semibold mb-3">
              <CompanyLabel company={company} />
            </span>
            <p className="m-0 text-white/80 text-[13px] leading-relaxed overflow-y-auto max-h-[200px] pr-1.5 scrollbar-thin">
              {cleanBio}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


