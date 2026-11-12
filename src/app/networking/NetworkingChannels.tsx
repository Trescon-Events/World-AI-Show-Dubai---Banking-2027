"use client";

import { GradientText } from "../components/Shared";

type ChannelItem = {
  title: string;
  tag: string;
  desc: string;
  benefits: string[];
  image: string;
  reverse?: boolean;
};

const channels: ChannelItem[] = [
  {
    title: "CXO Closed-Door Boardroom Discussions",
    tag: "High-Focus Formats",
    desc: "Move past generic panels. World AI Show | BFSI | Dubai 2027 features closed-door boardroom discussions limited to 15 pre-selected buy-side banking leaders per session. Focus on CBUAE and DFSA regulatory compliance, model risk governance, AML supervision, and core banking scaling.",
    benefits: [
      "Closed-door, Chatham House Rule guidelines",
      "Direct peer-to-peer insights exchange",
      "Strict executive alignment & curation"
    ],
    image: "/banking/images/Attend/AI-decision-maker.webp",
  },
  {
    title: "1:1 Business Matchmaking Meetings",
    tag: "Business Driven ROI",
    desc: "Time is your most expensive asset. Our dedicated matchmaking managers align your financial AI portfolio with buy-side banking leaders actively evaluating production deployment, building high-value procurement pipelines in private suites.",
    benefits: [
      "Buy-side profile custom curation & scouting",
      "Dedicated meeting assistants on-ground",
      "Direct institutional pipeline development"
    ],
    image: "/banking/images/Attend/partner-with.webp",
    reverse: true,
  },
  {
    title: "VIP Executive Lounge & Bilateral Meeting Concourse",
    tag: "Premium Access",
    desc: "Build long-term relationships in executive suites in Dubai, UAE. Engage with sovereign wealth CIOs, retail and corporate banking CXOs, and regulatory supervisors during structured networking breaks.",
    benefits: [
      "Restricted executive lounge access",
      "Sovereign wealth & Tier-1 bank buyer hubs",
      "High-trust networking in regulated settings"
    ],
    image: "/banking/images/Attend/cover-southeast.webp"
  }
];

export function NetworkingChannels() {
  return (
    <section className="relative py-[92px] bg-[#F7F9FC]" id="channels">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center mb-5 px-4 py-1.5 border border-[#0069B8]/25 rounded-full text-[#0069B8] text-[12px] font-bold uppercase tracking-[0.14em] bg-white">
            Networking Platforms
          </span>
          <h2 className="font-heading font-bold text-[#08121E] leading-tight tracking-[-0.02em] text-[clamp(34px,4.4vw,52px)]">
            A working summit. <br />
            <GradientText tone="blue">Built to forge partnerships.</GradientText>
          </h2>
        </div>

        {/* Channels Split list */}
        <div className="flex flex-col gap-[84px] max-sm:gap-14">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className={`grid grid-cols-[1fr_0.94fr] items-center gap-[64px] max-[980px]:grid-cols-1 max-[980px]:gap-[36px]`}
            >
              {/* Info Column */}
              <div className={`${channel.reverse ? "order-2 max-[980px]:order-none" : "order-none"}`}>
                <span className="text-[#0069B8] text-[12px] uppercase tracking-[0.14em] font-bold block mb-3">
                  {channel.tag}
                </span>
                <h3 className="font-heading m-0 text-[#08121E] font-bold text-[32px] leading-tight mb-5 max-sm:text-[26px]">
                  {channel.title}
                </h3>
                <p className="m-0 text-[#334155] text-[16.5px] leading-relaxed mb-6">
                  {channel.desc}
                </p>
                <ul className="m-0 pl-0 list-none flex flex-col gap-3">
                  {channel.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-[#08121E] font-medium text-[15px]">
                      <span className="grid place-items-center w-[20px] h-[20px] rounded-full bg-[#0069B8] text-white text-[10px] font-extrabold select-none shrink-0">
                        ✓
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graphic Column */}
              <div className="relative min-h-[340px] overflow-hidden border border-[#0069B8]/25 rounded-[20px] bg-white shadow-[0_18px_40px_rgba(8,18,30,0.1)]">
                <img
                  src={channel.image}
                  alt={channel.title}
                  className="absolute inset-0 w-full h-full object-cover filter saturate-[0.95] brightness-[0.92] hover:scale-[1.025] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
