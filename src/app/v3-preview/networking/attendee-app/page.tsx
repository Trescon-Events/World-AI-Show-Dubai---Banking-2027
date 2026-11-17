import type { Metadata } from "next";
import { HeaderV3 } from "../../_components/HeaderV3";
import { FooterV3 } from "../../_components/FooterV3";
import { GradientText, V3_BASE } from "../../_components/SharedV3";

export const metadata: Metadata = {
  title: "Official Attendee App | Networking | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "Personalised 1-day agenda builder, clinical workshop selection, and UAE PDPL-consented badge-scan lead capture at World AI Show | BFSI | Dubai 2027.",
  robots: { index: false, follow: false },
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

const badgeFeatures = [
  { label: "1-Day Agenda", icon: "/banking/icons/attendee-app/calendar-lines-pen.webp" },
  { label: "Bilateral Meetings", icon: "/banking/icons/attendee-app/network-user.webp" },
  { label: "Faculty", icon: "/banking/icons/attendee-app/wais-speaker-icon-matched.webp" },
  { label: "9-Tier Sponsors", icon: "/banking/icons/attendee-app/money-check.webp" },
  { label: "Concourse", icon: "/banking/icons/attendee-app/exhibitor.webp" },
  { label: "Badge Scan", icon: "/banking/icons/attendee-app/qr-scan.webp" },
  { label: "Consented Directory", icon: "/banking/icons/attendee-app/personal-finance.webp" },
  { label: "Direct Chat", icon: "/banking/icons/attendee-app/comment-dots.webp" },
];

export default function AttendeeAppPageV3() {
  return (
    <main className="page-networking relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Networking" subNavItems={subNav} activeSubNavItem="Attendee APP" />

      <div className="relative w-full text-white font-sans">
        <section
          className="relative net-inner-hero pt-[220px] pb-24 overflow-hidden bg-[#08121E] border-b-2 border-[#0069B8]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(8,18,30,0.96) 0%, rgba(8,18,30,0.8) 52%, rgba(8,18,30,0.35) 100%), url('/banking/images/networking/attendee-app-hero-bg.webp')`,
            backgroundPosition: "right center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto relative z-10 text-left flex flex-col items-start">
            <div className="max-w-[640px] w-full">
              <span className="text-[#009EAD] text-[12px] uppercase tracking-[0.14em] font-bold block mb-3">
                Official Attendee App · Powered by KonfHub
              </span>
              <h1 className="font-heading font-bold text-white leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] m-0">
                Your Day, <br />
                <GradientText tone="teal">Fully in Hand</GradientText>
              </h1>
              <p className="m-0 mt-6 text-white/80 text-[18px] leading-relaxed max-sm:text-[15px]">
                The World AI Show | BFSI | Dubai 2027 Attendee App is your executive command centre in Dubai, UAE. Build your personalised 1-day agenda, select Workshop A or B, book bilateral meetings, and capture UAE PDPL-consented badge scans.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a href={`${V3_BASE}/sponsorship-enquiry/`} className="bb-btn-primary">
                  Enquire Now ➔
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-8 bg-[#0D1B2E] border-b border-[#0069B8]/35">
          <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-[10px]">
              {badgeFeatures.map((feat) => (
                <div
                  key={feat.label}
                  className="flex items-center h-[36px] px-[14px] gap-[9px] border border-[#0069B8]/45 rounded-full bg-[#08121E] text-white/90 text-[11.5px] font-bold uppercase tracking-[0.08em] select-none hover:border-[#F15928] transition-all duration-200"
                >
                  <img
                    src={feat.icon}
                    alt={`${feat.label} Icon`}
                    className="w-[14px] h-[14px] object-contain flex-none"
                  />
                  <span className="leading-none whitespace-nowrap">{feat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-[#F7F9FC]">
          <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
            <div className="text-center mb-16 max-w-[760px] mx-auto">
              <span className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] bg-white text-[#0069B8] border border-[#0069B8]/25 mb-5 inline-block">
                App Features
              </span>
              <h2 className="font-heading font-bold text-[#08121E] leading-tight tracking-[-0.02em] text-[clamp(32px,4vw,44px)] m-0">
                Built for Every <GradientText tone="blue">Role in the Room</GradientText>
              </h2>
              <p className="m-0 mt-5 text-[#334155] text-[16px] leading-relaxed max-sm:text-[14px]">
                Tailored workflows for institutional buy-side delegates, speaking sponsors, boardroom partners, and concourse exhibitors.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 max-[980px]:grid-cols-1 max-sm:gap-6">
              <div className="p-10 rounded-[24px] border border-[#0069B8]/52 border-t-4 border-t-[#F15928] bg-[#0D1B2E] shadow-[0_18px_40px_rgba(8,18,30,0.18)] max-sm:p-6">
                <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-bold bg-[#F15928] text-white mb-6">
                  <img
                    src="/banking/images/networking/Icon.webp"
                    alt="Attendees"
                    className="w-[14px] h-[14px] object-contain brightness-0 invert"
                  />
                  For Institutional Delegates
                </span>
                <h3 className="font-heading m-0 text-white font-bold text-[26px] tracking-tight mb-8">
                  Make every hour count
                </h3>

                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-start">
                    <img
                      src="/banking/icons/attendee-app/calendar-lines-pen.webp"
                      alt=""
                      className="w-[26px] h-[26px] object-contain flex-none"
                    />
                    <div>
                      <h4 className="font-heading m-0 text-white font-bold text-[16px] mb-1">
                        Personalised 1-Day Agenda
                      </h4>
                      <p className="m-0 text-white/75 text-[14px] leading-relaxed">
                        Bookmark plenaries across the 6 operational mandates, select Workshop A or B, and plan visits to the 7 Synthetic Experience Labs.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <img
                      src="/banking/icons/attendee-app/network-user.webp"
                      alt=""
                      className="w-[26px] h-[26px] object-contain flex-none"
                    />
                    <div>
                      <h4 className="font-heading m-0 text-white font-bold text-[16px] mb-1">
                        Pre-Scheduled Bilateral Meetings
                      </h4>
                      <p className="m-0 text-white/75 text-[14px] leading-relaxed">
                        Connect with peers and vetted banking, insurance, and sovereign cloud providers before arriving in Dubai.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <img
                      src="/banking/icons/attendee-app/real-time-notifications.webp"
                      alt=""
                      className="w-[26px] h-[26px] object-contain flex-none"
                    />
                    <div>
                      <h4 className="font-heading m-0 text-white font-bold text-[16px] mb-1">
                        UAE PDPL Consent Control
                      </h4>
                      <p className="m-0 text-white/75 text-[14px] leading-relaxed">
                        Full control over your contact visibility — details are shared only where explicit opt-in consent is provided under UAE PDPL.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 rounded-[24px] border border-[#0069B8]/52 border-t-4 border-t-[#009EAD] bg-[#0D1B2E] shadow-[0_18px_40px_rgba(8,18,30,0.18)] max-sm:p-6">
                <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-bold bg-[#0069B8] text-white mb-6">
                  <img
                    src="/banking/icons/attendee-app/exhibitor.webp"
                    alt="Sponsors & Exhibitors"
                    className="w-[14px] h-[14px] object-contain brightness-0 invert"
                  />
                  For Sponsors &amp; Exhibitors
                </span>
                <h3 className="font-heading m-0 text-white font-bold text-[26px] tracking-tight mb-8">
                  Turn visibility into pipeline
                </h3>

                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-start">
                    <img
                      src="/banking/icons/attendee-app/connect-with-high-intent-attendees.webp"
                      alt=""
                      className="w-[26px] h-[26px] object-contain flex-none"
                    />
                    <div>
                      <h4 className="font-heading m-0 text-white font-bold text-[16px] mb-1">
                        80%+ Buy-Side Audience Access
                      </h4>
                      <p className="m-0 text-white/75 text-[14px] leading-relaxed">
                        Engage consented decision-makers across 25+ UAE banks and insurers and 15+ GCC and African financial groups.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <img
                      src="/banking/icons/attendee-app/drive-booth-traffic.webp"
                      alt=""
                      className="w-[26px] h-[26px] object-contain flex-none"
                    />
                    <div>
                      <h4 className="font-heading m-0 text-white font-bold text-[16px] mb-1">
                        Drive Stand &amp; Boardroom Attendance
                      </h4>
                      <p className="m-0 text-white/75 text-[14px] leading-relaxed">
                        Direct high-intent buyers to your 9 sqm built stand, 4 sqm turnkey stand, 2 sqm Start Up pod, or CXO boardroom.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <img
                      src="/banking/icons/attendee-app/capture-meaningful-leads.webp"
                      alt=""
                      className="w-[26px] h-[26px] object-contain flex-none"
                    />
                    <div>
                      <h4 className="font-heading m-0 text-white font-bold text-[16px] mb-1">
                        WebApp Badge Scan &amp; Consented Directory
                      </h4>
                      <p className="m-0 text-white/75 text-[14px] leading-relaxed">
                        Instant QR badge-scan lead capture paired with UAE PDPL-consented institutional buyer context.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterV3 />
    </main>
  );
}
