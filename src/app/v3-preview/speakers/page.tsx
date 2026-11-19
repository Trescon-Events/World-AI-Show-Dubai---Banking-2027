import type { Metadata } from "next";
import { HeaderV3 } from "../_components/HeaderV3";
import { FooterV3 } from "../_components/FooterV3";
import { GradientText, V3_BASE } from "../_components/SharedV3";
import { SpeakersList } from "../../speakers/SpeakersList";

export const metadata: Metadata = {
  title: "Speakers Hub | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "Meet the AI Architects of Banking, Financial Services & Insurance. Explore 30–40 Expert Faculty Speakers and past global series leaders at World AI Show | BFSI | Dubai 2027.",
  robots: { index: false, follow: false },
};

export default function SpeakersPageV3() {
  return (
    <main className="page-speakers relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Speakers" />

      {/* Speakers Hero — V3 Headline */}
      <section
        className="relative min-h-[520px] flex items-center page-hero-top pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:right_center] bg-no-repeat border-b-2 border-[#0069B8] max-sm:min-h-[420px] max-sm:pb-[52px]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(8, 18, 30, 0.94) 0%, rgba(8, 18, 30, 0.72) 46%, rgba(8, 18, 30, 0.2) 100%), url("/banking/images/speakers/Speaker-banner.webp")',
        }}
      >
        <div className="relative z-10 w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <h1 className="font-heading m-0 text-white font-bold leading-[1.08] tracking-[-0.02em] text-[clamp(34px,4.5vw,58px)] max-w-[960px] uppercase">
            MEET THE <GradientText tone="teal">AI ARCHITECTS</GradientText> OF BANKING, FINANCIAL SERVICES &amp; INSURANCE
          </h1>
          <div className="mt-8">
            <a href={`${V3_BASE}/agenda/call-for-speakers/`} className="bb-btn-primary">
              Apply for Unannounced Speaking Slots →
            </a>
          </div>
        </div>
      </section>

      {/* 4-Column Responsive Grid + Real-Time Search */}
      <SpeakersList />

      {/* Dual Executive CTA Section */}
      <section
        className="relative py-[104px] max-sm:py-[72px] bg-[#08121E] overflow-hidden border-t-2 border-[#0069B8]"
        id="cta"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 158, 173, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 158, 173, 0.16) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-7 items-stretch">
            {/* Card 1: Delegate Pass */}
            <article className="group relative p-10 max-sm:p-7 rounded-[24px] border border-[#0069B8]/52 border-t-4 border-t-[#F15928] bg-[#0D1B2E] shadow-[0_24px_64px_rgba(0,0,0,0.4)] hover:border-[#F15928] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl border border-[#0069B8]/35 bg-[#08121E]/80 max-sm:grid-cols-1">
                  <div className="flex flex-col pr-2 border-r border-[#0069B8]/35 max-sm:border-r-0 max-sm:border-b max-sm:pb-3">
                    <strong className="font-heading text-[22px] xl:text-[24px] font-bold leading-none text-[#F15928] tracking-tight tabular-nums">
                      300–400
                    </strong>
                    <span className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/70 leading-snug">
                      C-Suite Leaders
                    </span>
                  </div>

                  <div className="flex flex-col px-1 border-r border-[#0069B8]/35 max-sm:border-r-0 max-sm:border-b max-sm:pb-3 max-sm:px-0">
                    <strong className="font-heading text-[22px] xl:text-[24px] font-bold leading-none text-[#009EAD] tracking-tight tabular-nums">
                      30–40
                    </strong>
                    <span className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/70 leading-snug">
                      Faculty Speakers
                    </span>
                  </div>

                  <div className="flex flex-col pl-1 max-sm:pl-0">
                    <strong className="font-heading text-[22px] xl:text-[24px] font-bold leading-none text-white tracking-tight">
                      1-Day
                    </strong>
                    <span className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/70 leading-snug">
                      24 Mar 2027
                    </span>
                  </div>
                </div>

                <h2 className="font-heading m-0 text-white font-bold leading-[1.12] tracking-[-0.02em] text-[clamp(26px,3.1vw,36px)]">
                  Be in the room where{" "}
                  <GradientText tone="teal">
                    the decisions get made.
                  </GradientText>
                </h2>

                <p className="m-0 mt-4 text-white/80 text-[15.5px] leading-[1.65]">
                  Delegate Pass — by invitation and qualification (80%+ buy-side institutional ratio) for senior banking, insurance, and regulatory executives.
                </p>
              </div>

              <div className="mt-9 pt-6 border-t border-[#0069B8]/30">
                <a href={`${V3_BASE}/attend/delegate/`} className="bb-btn-primary max-sm:w-full">
                  Buy Tickets
                  <svg
                    className="bb-btn-arrow w-4 h-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.8"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Card 2: Commercial Partnerships */}
            <article className="group relative p-10 max-sm:p-7 rounded-[24px] border border-[#0069B8]/52 border-t-4 border-t-[#009EAD] bg-[#0D1B2E] shadow-[0_24px_64px_rgba(0,0,0,0.4)] hover:border-[#009EAD] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="grid grid-cols-[1fr_1.15fr] gap-4 mb-8 p-4 rounded-2xl border border-[#0069B8]/35 bg-[#08121E]/80 max-sm:grid-cols-1">
                  <div className="flex flex-col pr-3 border-r border-[#0069B8]/35 max-sm:border-r-0 max-sm:border-b max-sm:pb-3">
                    <strong className="font-heading text-[22px] xl:text-[24px] font-bold leading-none text-[#009EAD] tracking-tight tabular-nums">
                      15 &amp; 75 Min
                    </strong>
                    <span className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/70 leading-snug">
                      Keynotes &amp; Workshops
                    </span>
                  </div>

                  <div className="flex flex-col pl-1 max-sm:pl-0">
                    <strong className="font-heading text-[22px] xl:text-[24px] font-bold leading-none text-[#F15928] tracking-tight">
                      9, 4 &amp; 2 sqm
                    </strong>
                    <span className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/70 leading-snug">
                      Built Stands &amp; Start Up Pods
                    </span>
                  </div>
                </div>

                <h2 className="font-heading m-0 text-white font-bold leading-[1.12] tracking-[-0.02em] text-[clamp(26px,3.1vw,36px)]">
                  Put your enterprise solution directly before{" "}
                  <GradientText tone="teal">
                    qualified BFSI procurement committees
                  </GradientText>
                </h2>

                <p className="m-0 mt-4 text-white/80 text-[15.5px] leading-[1.65]">
                  Explore our 7-tier commercial inventory spanning 15-minute plenary speaking slots, 60-minute CXO boardrooms (20 delegates), 75-minute workshops, and 9 sqm, 4 sqm &amp; 2 sqm stands.
                </p>
              </div>

              <div className="mt-9 pt-6 border-t border-[#0069B8]/30">
                <a
                  href={`${V3_BASE}/sponsorship-enquiry/`}
                  className="bb-btn-outline-dark max-sm:w-full"
                >
                  Enquire About Sponsorship
                  <svg
                    className="bb-btn-arrow w-4 h-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.8"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <FooterV3 />
    </main>
  );
}
