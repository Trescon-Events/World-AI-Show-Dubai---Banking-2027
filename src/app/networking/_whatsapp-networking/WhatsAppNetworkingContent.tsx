"use client";

import { GradientText } from "../../components/Shared";

export function WhatsAppNetworkingContent() {
  const groups = [
    "AI Leaders",
    "AI & Digital",
    "BFSI",
    "Retail & E-commerce",
    "Healthcare AI",
    "Contact Centres",
    "AI Technology",
    "Founders & CEOs"
  ];

  return (
    <div className="relative w-full text-white font-sans">
      <section 
        className="relative net-inner-hero pt-[220px] pb-24 overflow-hidden bg-[#08121E] border-b-2 border-[#0069B8]"
        style={{ 
          backgroundImage: `linear-gradient(90deg, rgba(8,18,30,0.95) 0%, rgba(8,18,30,0.8) 52%, rgba(8,18,30,0.35) 100%), url('/banking/images/networking/networking-bg.png')`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto relative z-10 text-left flex flex-col items-start">
          <div className="max-w-[620px] w-full">
            <span className="block text-[12px] uppercase tracking-[0.14em] font-bold text-[#009EAD] mb-3.5">
              WhatsApp Community
            </span>
            <h1 className="font-heading font-bold text-white leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] m-0">
              Walk in <br />
              <GradientText tone="teal">Already Connected.</GradientText>
            </h1>
            <p className="m-0 mt-5 text-white/80 text-[18px] leading-relaxed max-w-[560px] max-sm:text-[15px]">
              Registered delegates get exclusive entry to a curated WhatsApp community 2 weeks before the summit. Identify the right people, start the right conversations, and arrive with momentum – not a blank slate.
            </p>
            <div className="mt-9">
              <span className="block text-[11.5px] uppercase tracking-[0.14em] font-bold text-white/60 mb-4">
                Peer networking groups
              </span>
              <div className="flex flex-wrap gap-2.5 max-w-[560px]">
                {groups.map((group) => (
                  <div
                    key={group}
                    className="flex items-center h-[36px] px-[14px] border border-[#0069B8]/45 rounded-full bg-[#0D1B2E] text-white/90 text-[11.5px] font-bold uppercase tracking-[0.08em] select-none whitespace-nowrap hover:border-[#F15928] transition-all duration-200"
                  >
                    {group}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Comparison Grid Section ── */}
      <section className="relative py-24 bg-[#F7F9FC]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-[660px] mx-auto">
            <span className="text-[#0069B8] text-[12px] uppercase tracking-[0.14em] font-bold block mb-3">
              2 Weeks Early.
            </span>
            <h2 className="font-heading font-bold text-[#08121E] leading-tight tracking-[-0.02em] text-[clamp(36px,4.8vw,54px)] m-0">
              Zero<br />
              <GradientText tone="blue">Cold Introductions.</GradientText>
            </h2>
            <p className="m-0 mt-4 text-[#334155] text-[16px] md:text-[18px] font-medium">
              Community access unlocks the moment you register
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:gap-6">
            
            {/* Card 1: For Attendees */}
            <div className="p-10 rounded-[24px] border border-[#0069B8]/52 border-t-4 border-t-[#F15928] bg-[#0D1B2E] shadow-[0_18px_40px_rgba(8,18,30,0.18)] transition-all duration-300 relative group overflow-hidden max-sm:p-6">
              <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-bold bg-[#F15928] text-white mb-6">
                <img 
                  src="/banking/images/networking/Icon.webp" 
                  alt="Attendees" 
                  className="w-[14px] h-[14px] object-contain brightness-0 invert" 
                />
                For Attendees
              </span>
              <h3 className="font-heading m-0 text-white font-bold text-[26px] tracking-tight mb-8">
                Day one starts two weeks early
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Exclusive pre-event community access 2 weeks before the summit</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Join role-specific groups — AI Leaders, BFSI, AI & Digital, and more</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Identify and request 1:1 meetings with the people you want to meet</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Get event day alerts, session reminders, and real-time updates</p>
                </div>
              </div>
            </div>

            {/* Card 2: For Sponsors & Exhibitors */}
            <div className="p-10 rounded-[24px] border border-[#0069B8]/52 border-t-4 border-t-[#009EAD] bg-[#0D1B2E] shadow-[0_18px_40px_rgba(8,18,30,0.18)] transition-all duration-300 relative group overflow-hidden max-sm:p-6">
              <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-bold bg-[#0069B8] text-white mb-6">
                <img 
                  src="/banking/icons/attendee-app/exhibitor.webp" 
                  alt="Sponsors & Exhibitors" 
                  className="w-[14px] h-[14px] object-contain brightness-0 invert" 
                />
                For Sponsors &amp; Exhibitors
              </span>
              <h3 className="font-heading m-0 text-white font-bold text-[26px] tracking-tight mb-8">
                Warm up your audience early
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Set featured visibility in the pre-event WhatsApp community</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Share product teasers and thought leadership before the event</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Direct WhatsApp access to engaged, opted-in delegates</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Post-event follow-up channel to continue the conversation</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 3: Call to Action ── */}
      <section className="relative py-24 bg-[#0069B8] overflow-hidden">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto relative z-10 text-center">
          <h2 className="font-heading font-bold text-white leading-tight tracking-[-0.02em] text-[clamp(36px,4.8vw,52px)] m-0">
            Your community is waiting.
          </h2>
          <p className="m-0 mt-4 text-[clamp(18px,2.2vw,24px)] font-bold text-white/90 leading-normal max-w-[700px] mx-auto">
            Register and get <GradientText tone="white-orange">WhatsApp access instantly.</GradientText>
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="/banking/sponsorship-enquiry/"
              className="bb-btn-primary"
            >
              Enquire Now
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 object-contain"
              >
                <path
                  d="M3.33334 8H12.6667"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.66666 4L12.6667 8L8.66666 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}