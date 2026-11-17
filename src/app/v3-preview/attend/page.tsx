import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FooterV3 } from "../_components/FooterV3";
import { HeaderV3 } from "../_components/HeaderV3";
import { GradientText, V3_BASE } from "../_components/SharedV3";
import { AttendStatsV3 } from "./AttendStatsV3";

export const metadata: Metadata = {
  title: "Attend | World AI Show | BFSI | Dubai 2027 (V3 Preview)",
  description:
    "How to attend World AI Show | BFSI | Dubai 2027 (24 March 2027 · Dubai, UAE). Explore complimentary Delegate Pass qualification, Business Pass access, and our revamped 9-tier Commercial Sponsorship inventory.",
  robots: { index: false, follow: false },
};

export const attendSubNavV3 = [
  "Overview",
  "Delegate",
  "Sponsor",
  "Media Partner",
  "Association Partner",
];

type CardItem = {
  title: string;
  text: string;
  icon?: string;
};

const valueCards: CardItem[] = [
  {
    title: "From AI Pilots to Proven Financial Performance",
    text: "A dedicated decision forum for senior banking, insurance, wealth, and regulatory leaders scaling from isolated pilots into core balance-sheet and policy operations under active CBUAE and DFSA governance.",
    icon: "/banking/images/Attend/enterprise-ai-in-action.svg",
  },
  {
    title: "80%+ Institutional Buy-Side Ratio",
    text: "Convenes 300–400 pre-qualified C-suite leaders across 25+ UAE banks and insurers and 15+ GCC and selected African financial groups holding active 2027 architecture and procurement mandates.",
    icon: "/banking/images/Attend/region-ai-decision-makers.svg",
  },
  {
    title: "Clinical Workshops, Boardrooms & Floor Labs",
    text: "Combines 15-minute buyer keynotes, two 75-minute clinical workshops, three 20-buyer Closed-Door CXO Boardrooms, and 7 Interactive Synthetic Experience Labs.",
    icon: "/banking/images/Attend/insights-drive-transformation.svg",
  },
];

const gatewayCards: CardItem[] = [
  {
    title: "Full 1-Day Plenary Access",
    text: "Complete access on Wednesday 24 March 2027 (08:00–17:15) across all six operational mandates, DFSA survey briefings, and 15-minute buyer evidence keynotes.",
    icon: "/banking/images/Attend/gateway/access-to-all-sessions.svg",
  },
  {
    title: "75-Minute Parallel Clinical Workshops",
    text: "Participate in Workshop A (Bank-Ready Deployment & Core Integration) or Workshop B (Intelligent Lending, Fraud & Insurance Operations).",
    icon: "/banking/images/Attend/gateway/high-value-networking.svg",
  },
  {
    title: "7 Interactive Synthetic Experience Labs",
    text: "Hands-on floor simulations spanning the Financial Crime Lab, Explain My Loan Decision, Autonomous Payment Challenge, AI Accountability Hearing, and Insurance Claim Triage.",
    icon: "/banking/images/Attend/gateway/enterprise-ai-showcases.svg",
  },
  {
    title: "Strict Buy-Side Qualification (80%+)",
    text: "Complimentary Delegate Passes are reserved by invitation and qualification for bank and insurance CEOs, CIOs, CTOs, CDAIOs, CROs, CCOs, MLROs, and Regulators.",
    icon: "/banking/images/Attend/gateway/speaker-materials-and-insights.svg",
  },
  {
    title: "50+ Pre-Scheduled Bilateral Meetings",
    text: "Algorithmic AI matchmaking facilitating curated 1-on-1 introductions between institutional buyers and vetted banking, cloud, and insurtech solution providers.",
    icon: "/banking/images/Attend/gateway/exclusive-vip-networking-experiences.svg",
  },
  {
    title: "Hosted Luncheon & Networking Reception",
    text: "Includes the Executive Networking Luncheon and Closing Networking Reception in Dubai, UAE concluding Day 1 of the March Dubai Cluster.",
    icon: "/banking/images/Attend/gateway/networking-lunch-and-business-meetings.svg",
  },
  {
    title: "UAE PDPL Explicit Opt-In Privacy",
    text: "Mandatory unbundled consent governance under the UAE Personal Data Protection Law (PDPL) — delegate contact details are shared only where explicit opt-in consent is provided.",
    icon: "/banking/images/Attend/gateway/event-platform-access.svg",
  },
];

const sponsorBenefits: CardItem[] = [
  {
    title: "Revamped 9-Tier Commercial Inventory",
    text: "Tailored market-entry tiers spanning Powered By, Diamond, Platinum, Gold, Boardroom Partner, Silver, Bronze, Concourse Exhibitor, and Start Up Pod.",
    icon: "/banking/images/Attend/sponsor/exclusive-sponsorship-branding.webp",
  },
  {
    title: "15-Minute Plenary Keynotes & Panels",
    text: "Deliver authoritative main-stage thought leadership alongside commercial bank, insurance, and risk CXOs across six core operational pillars.",
    icon: "/banking/images/Attend/sponsor/speaking-opportunities.webp",
  },
  {
    title: "60-Minute CXO Boardrooms (20 Buyers)",
    text: "Host curated off-the-record executive boardrooms with 20 pre-qualified buy-side banking, insurance, and risk decision-makers under Chatham House Rule.",
    icon: "/banking/images/Attend/sponsor/hosted-meetings.webp",
  },
  {
    title: "Standardised 9 sqm, 4 sqm & 2 sqm Stands",
    text: "Showcase production platforms across 9 sqm built stands (Powered By–Gold), 4 sqm built stands (Silver–Exhibitor), and 2 sqm Start Up innovation pods.",
    icon: "/banking/images/Attend/sponsor/product-showcase-floor.webp",
  },
  {
    title: "50+ Bilateral Matchmaking Meetings",
    text: "Engage target accounts across 25+ UAE banks and insurers and 15+ GCC and African financial groups via pre-scheduled 1-on-1 meetings.",
    icon: "/banking/images/Attend/partner/networking-access.webp",
  },
  {
    title: "80%+ Institutional Buy-Side Ratio",
    text: "Strict audience composition governance ensuring over 80% of the 300–400 executives represent institutional buyers and supervisory authorities.",
    icon: "/banking/images/Attend/sponsor/qualified-lead-generation.webp",
  },
  {
    title: "Multi-Channel Brand Amplification",
    text: "High-visibility brand placement across the Dubai venue, digital backdrops, official Attendee App, and regional executive outreach campaigns.",
    icon: "/banking/images/Attend/sponsor/brand-visibility-at-scale.webp",
  },
  {
    title: "UAE PDPL Consented Lead Capture",
    text: "Seamless WebApp badge scanning and consented directory access; delegate contact details are shared strictly where explicit opt-in consent is provided under UAE PDPL.",
    icon: "/banking/images/Attend/sponsor/post-event-lead-report.webp",
  },
];

const mediaBenefits: CardItem[] = [
  {
    title: "Press Credentials & Plenary Access",
    text: "Full media accreditation on 24 March 2027 across all six operational mandates, 15-minute buyer keynotes, and regulatory panels.",
    icon: "/banking/images/Attend/media/full-event-access.webp",
  },
  {
    title: "Executive Interview Suite Access",
    text: "Dedicated press workspace and private interview suites in Dubai, UAE for 1-on-1 briefings with banking and insurance CXOs and 30–40 faculty speakers.",
    icon: "/banking/images/Attend/media/dedicated-media-facilities.webp",
  },
  {
    title: "DFSA & Regional Benchmark Coverage",
    text: "Report on regional BFSI AI adoption insights, fraud defence architectures, insurance FNOL transformation, and open-finance security.",
    icon: "/banking/images/Attend/media/speaker-interview-access.webp",
  },
  {
    title: "Official Financial Press Kit",
    text: "Receive embargoed releases, verified case-study status briefs, and faculty biographies ahead of Day 1 of the March Dubai Cluster.",
    icon: "/banking/images/Attend/media/official-media-kit.webp",
  },
  {
    title: "Supporting Financial Media Recognition",
    text: "Featured placement across the website, Attendee App, and concourse media showcase in Dubai, UAE.",
    icon: "/banking/images/Attend/media/amplified-media-visibility.webp",
  },
  {
    title: "March Dubai Cluster Coverage",
    text: "Editorial accreditation across the March Dubai Cluster (Day 1: BFSI on 24 March 2027; Day 2: Healthcare and Life Sciences on 25 March 2027).",
    icon: "/banking/images/Attend/media/brand-and-media-recognition.webp",
  },
  {
    title: "Synthetic Experience Lab Walkthroughs",
    text: "Witness live floor simulations across the 7 Interactive Synthetic Experience Labs including Financial Crime, Loan Explainability, and Autonomous Payments.",
    icon: "/banking/images/Attend/media/exclusive-story-opportunities.webp",
  },
  {
    title: "Concourse & Networking Reception Access",
    text: "Connect directly with 300–400 pre-qualified C-suite banking, insurance, and risk executives in Dubai, UAE.",
    icon: "/banking/images/Attend/media/networking-access.webp",
  },
];

const associationBenefits: CardItem[] = [
  {
    title: "Banking, Insurance & FinTech Bodies",
    text: "Official institutional alliance recognition for banking federations, insurance councils, fintech associations, and risk & compliance institutes.",
    icon: "/banking/images/Attend/partner/co-branding-opportunities.webp",
  },
  {
    title: "Member Delegate Pass Nomination",
    text: "Priority nomination pathway for qualified buy-side member CEOs, CIOs, CTOs, CROs, CCOs, CDAIOs, and MLROs to apply for complimentary Delegate Passes.",
    icon: "/banking/images/Attend/partner/complimentary-delegate-passes.webp",
  },
  {
    title: "Co-Branded UAE, GCC & African Outreach",
    text: "Joint executive communications, regulatory roundtables, and institutional visibility across World AI Show | BFSI | Dubai 2027.",
    icon: "/banking/images/Attend/partner/joint-marketing-campaigns.webp",
  },
  {
    title: "Global Series Amplification",
    text: "Collaborative promotion across Trescon’s global executive network of 48 completed World AI Show editions across four continents.",
    icon: "/banking/images/Attend/partner/social-media-amplification.webp",
  },
  {
    title: "Faculty & Boardroom Nominations",
    text: "Nominate senior banking, insurance, and regulatory practitioners with verified case studies for plenary panels and clinical workshops.",
    icon: "/banking/images/Attend/partner/speaking-opportunities.webp",
  },
  {
    title: "VIP Bilateral Networking Access",
    text: "Connect association leadership with 300–400 pre-qualified C-suite BFSI decision-makers in Dubai, UAE.",
    icon: "/banking/images/Attend/partner/networking-access.webp",
  },
  {
    title: "Post-Forum Procurement Synthesis",
    text: "Share actionable takeaways across the six core operational mandates and CBUAE / DFSA governance discussions with your membership.",
    icon: "/banking/images/Attend/partner/access-to-post-event-insights.webp",
  },
  {
    title: "Long-Term World AI Show Alliance",
    text: "Extend institutional collaboration across the World AI Show Industry Series and the March Dubai Cluster.",
    icon: "/banking/images/Attend/partner/long-term-partnership-opportunities.webp",
  },
];

export function ArrowButtonV3({
  children,
  href = `${V3_BASE}/sponsorship-enquiry/`,
  variant = "solid",
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "outline-dark";
}) {
  const btnStyles = {
    solid: "bb-btn-primary max-sm:w-full",
    outline: "bb-btn-outline-light max-sm:w-full",
    "outline-dark": "bb-btn-outline-dark max-sm:w-full",
  };

  return (
    <a className={btnStyles[variant]} href={href}>
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bb-btn-arrow w-[15px] h-[15px] object-contain"
        aria-hidden="true"
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
  );
}

export function NumberedCardV3({ item, index }: { item: CardItem; index: number }) {
  return (
    <article className="group relative min-h-[235px] p-7 border border-[#0069B8]/22 border-t-4 border-t-[#0069B8] rounded-[16px] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0069B8] hover:border-t-[#F15928] hover:shadow-[0_18px_40px_rgba(8,18,30,0.11)] text-left">
      <span className="grid place-items-center w-11 h-11 mb-7 rounded-[12px] text-white bg-[#0069B8] text-[11px] font-extrabold select-none group-hover:bg-[#F15928] transition-all duration-300">
        {item.icon ? (
          <img
            src={item.icon}
            alt=""
            className="w-5 h-5 object-contain brightness-0 invert transition-all duration-300"
            loading="lazy"
          />
        ) : index + 1 < 10 ? (
          `0${index + 1}`
        ) : (
          index + 1
        )}
      </span>
      <span className="absolute right-[25px] top-[30px] px-[9px] py-1 rounded-full text-[#0069B8] bg-[#0069B8]/10 text-[11px] font-extrabold tracking-[1px] select-none group-hover:text-white group-hover:bg-[#F15928] transition-all duration-300">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </span>
      <h3 className="font-heading m-0 mb-2.5 text-[#08121E] font-bold text-[18px] leading-tight transition-colors duration-200 group-hover:text-[#0069B8]">
        {item.title}
      </h3>
      <p className="m-0 text-[#334155] text-[15px] leading-relaxed">{item.text}</p>
    </article>
  );
}

export function BenefitGridV3({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
      {items.map((item, index) => (
        <NumberedCardV3 item={item} index={index} key={item.title} />
      ))}
    </div>
  );
}

export function SplitSectionV3({
  id,
  eyebrow,
  title,
  text,
  button,
  buttonHref,
  imageAlt,
  imageSrc,
  reverse = false,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  text: ReactNode;
  button: string;
  buttonHref?: string;
  imageAlt: string;
  imageSrc: string;
  reverse?: boolean;
}) {
  return (
    <section className="py-[92px] bg-[#F7F9FC] max-sm:py-[66px]" id={id}>
      <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
        <div className="mb-10">
          {eyebrow && (
            <p className="m-0 mb-[14px] text-[#0069B8] text-[12px] font-bold tracking-[0.14em] uppercase select-none">
              {eyebrow}
            </p>
          )}
          <h2 className="font-heading m-0 text-[#08121E] font-bold leading-[1.1] tracking-[-0.02em] text-[clamp(30px,3.6vw,46px)] max-sm:text-[28px]">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-[1fr_minmax(360px,47%)] items-center gap-[64px] max-[980px]:grid-cols-1 max-sm:gap-[34px]">
          <div className={`flex flex-col ${reverse ? "max-[980px]:order-none order-2" : "order-none"}`}>
            <div className="m-0 mb-9 text-[#334155] text-[17.5px] leading-[1.7] max-sm:text-base">
              {text}
            </div>
            <div className="flex">
              <ArrowButtonV3 href={buttonHref || `#${id}`}>{button}</ArrowButtonV3>
            </div>
          </div>
          <div className="relative overflow-hidden border border-[#0069B8]/25 rounded-[20px] bg-white shadow-[0_18px_40px_rgba(8,18,30,0.1)]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover filter saturate-[0.98]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttendOverviewSectionV3() {
  return (
    <>
      <section
        className="relative min-h-[560px] flex items-end px-[max(24px,calc((100vw-1172px)/2))] pt-[190px] pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:center_top] bg-no-repeat border-b-2 border-[#0069B8] max-[1200px]:pt-[150px] max-sm:min-h-[460px] max-sm:px-[16px] max-sm:pt-[126px] max-sm:pb-[56px]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(8, 18, 30, 0.94) 0%, rgba(8, 18, 30, 0.68) 45%, rgba(8, 18, 30, 0.18) 100%), url("/banking/images/Attend/Overview-banner.webp")',
        }}
        id="overview"
      >
        <div className="relative z-10 max-w-[880px]">
          <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] max-sm:text-[36px]">
            From AI pilots to <GradientText tone="teal">proven financial performance.</GradientText>
          </h1>
          <p className="max-w-[740px] mt-6 mb-0 text-white/86 text-[18px] leading-relaxed max-sm:text-base">
            Building intelligent, trusted and resilient financial institutions across the UAE, GCC, and selected African markets — governed by an 80%+ institutional buy-side ratio.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-10 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButtonV3 href={`${V3_BASE}/attend/delegate/`} variant="solid">
              Apply for Delegate Pass
            </ArrowButtonV3>
            <ArrowButtonV3 href={`${V3_BASE}/sponsorship-enquiry/`} variant="outline-dark">
              Enquire about sponsorship
            </ArrowButtonV3>
          </div>
        </div>
      </section>

      <section className="py-[92px] bg-[#F7F9FC] max-sm:py-[66px]">
        <div className="grid grid-cols-[1.08fr_0.92fr] items-center gap-[68px] w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto max-[980px]:grid-cols-1 max-sm:gap-[34px]">
          <div className="flex flex-col">
            <h2 className="font-heading m-0 text-[#08121E] font-bold leading-[1.08] tracking-[-0.02em] text-[clamp(34px,4.4vw,50px)] max-sm:text-[30px]">
              Audited execution over <GradientText tone="blue">experimental pilots.</GradientText>
            </h2>
            <p className="mt-6 mb-4 text-[#334155] text-[17px] leading-[1.65]">
              World AI Show | BFSI is a 1-Day Executive Decision Forum convening 300–400 commercial bank CXOs, insurance leaders, CROs, CCOs, CDAIOs, and financial regulators in Dubai, UAE (Day 1 of the March Dubai Cluster). The programme addresses real-world architectural hurdles, model explainability, and fiduciary risk controls across federal onshore Central Bank of the UAE (CBUAE) and offshore DIFC DFSA frameworks.
            </p>
            <p className="m-0 text-[#334155] text-[17px] leading-[1.65]">
              It is structured around six operational mandates: fighting financial crime, responsible AI and regulatory confidence, intelligent banking operations, smarter lending, insurance and claims transformation, and future payments &amp; sovereign infrastructure.
            </p>
          </div>
          <div className="relative overflow-hidden border border-[#0069B8]/25 rounded-[20px] bg-white shadow-[0_18px_40px_rgba(8,18,30,0.1)]">
            <img
              src="/banking/images/agenda/About.webp"
              alt="BFSI leaders convening at World AI Show Dubai"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-[86px] pt-[74px] bg-[#08121E] border-y-2 border-[#0069B8] text-center max-sm:py-[62px]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <h2 className="font-heading max-w-[820px] mx-auto text-white font-bold leading-[1.08] tracking-[-0.02em] text-[clamp(36px,4.8vw,54px)] max-sm:text-[32px]">
            The <GradientText tone="teal">Room Composition</GradientText>
          </h2>
          <AttendStatsV3 />
        </div>
      </section>

      {/* Two-Door Attendance Model */}
      <section className="py-[86px] bg-[#F7F9FC] max-sm:py-[62px]" id="pass-matrix">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading max-w-[820px] mx-auto text-[#08121E] font-bold leading-[1.08] tracking-[-0.02em] text-[clamp(34px,4.4vw,52px)]">
              Two-Door <GradientText tone="blue">Attendance Pathways</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
            {/* Door 1 */}
            <div className="flex flex-col justify-between p-9 rounded-[20px] border border-[#0069B8]/25 border-t-4 border-t-[#F15928] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)]">
              <div>
                <span className="inline-block text-[11.5px] font-mono font-bold uppercase tracking-[0.1em] text-[#F15928] mb-2">
                  Door 1 · Buy-Side Institutional Ratio 80%+
                </span>
                <h3 className="font-heading text-[#08121E] font-bold text-[24px] leading-[1.25] mb-3">
                  Delegate Pass — complimentary by invitation &amp; qualification
                </h3>
                <p className="text-[#334155] text-[15.5px] leading-[1.6] mb-5">
                  Complimentary Delegate Passes are reserved by invitation and qualification for senior buy-side banking, insurance, wealth, risk, compliance, and regulatory decision-makers.
                </p>
                <ul className="space-y-2.5 mb-8 text-[#334155] text-[14.5px] list-none p-0">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#F15928] font-bold">✓</span>
                    <span>Target Audience: Bank &amp; Insurance CEOs, CIOs, CTOs, CDAIOs, CROs, CCOs, MLROs, Heads of Claims/Underwriting &amp; Regulators</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#F15928] font-bold">✓</span>
                    <span>Inclusions: Plenary access, 75-min Workshop A or B, 7 Synthetic Experience Labs, Luncheon &amp; Networking Reception</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#F15928] font-bold">✓</span>
                    <span>UAE PDPL Governance: Delegate contact details are shared only where explicit opt-in consent is provided</span>
                  </li>
                </ul>
              </div>
              <div>
                <ArrowButtonV3 href={`${V3_BASE}/attend/delegate/`} variant="solid">
                  Apply for Delegate Pass
                </ArrowButtonV3>
              </div>
            </div>

            {/* Door 2 */}
            <div className="flex flex-col justify-between p-9 rounded-[20px] border border-[#0069B8]/25 border-t-4 border-t-[#0069B8] bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)]">
              <div>
                <span className="inline-block text-[11.5px] font-mono font-bold uppercase tracking-[0.1em] text-[#0069B8] mb-2">
                  Door 2 · Strictly Capped Commercial Quota
                </span>
                <h3 className="font-heading text-[#08121E] font-bold text-[24px] leading-[1.25] mb-3">
                  Business Pass — paid commercial vendor access with strictly capped quota
                </h3>
                <p className="text-[#334155] text-[15.5px] leading-[1.6] mb-5">
                  Paid Business Passes provide commercial access for specialist technology providers, cloud platforms, software vendors, and consultancies, strictly capped to protect room composition.
                </p>
                <ul className="space-y-2.5 mb-8 text-[#334155] text-[14.5px] list-none p-0">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#009EAD] font-bold">✓</span>
                    <span>Paid commercial access for fraud/AML, governance, cloud, core banking, and insurtech vendors</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#009EAD] font-bold">✓</span>
                    <span>Strictly capped quota to safeguard the 80%+ institutional buy-side ratio</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#009EAD] font-bold">✓</span>
                    <span>Upgrade pathway available across our revamped 9-tier Commercial Sponsorship inventory</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <ArrowButtonV3 href={`${V3_BASE}/general-enquiry/`} variant="outline">
                  Enquire for Business Pass
                </ArrowButtonV3>
                <ArrowButtonV3 href={`${V3_BASE}/attend/sponsor/`} variant="solid">
                  Explore 9 Sponsorship Tiers
                </ArrowButtonV3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[86px] bg-[#08121E] border-t-2 border-[#0069B8] text-center max-sm:py-[62px]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <h3 className="font-heading max-w-[820px] mx-auto mt-0 mb-10 text-white font-bold leading-[1.08] tracking-[-0.02em] text-[clamp(32px,4vw,46px)] max-sm:text-[30px]">
            Why BFSI Leaders Convene at <GradientText tone="teal">World AI Show</GradientText>
          </h3>
          <div className="grid grid-cols-3 gap-5 mb-9 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
            {valueCards.map((card, index) => (
              <NumberedCardV3 item={card} index={index} key={card.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function AttendDelegateSectionV3() {
  return (
    <>
      <section
        className="relative min-h-[560px] flex items-end px-[max(24px,calc((100vw-1172px)/2))] pt-[190px] pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:center_top] bg-no-repeat border-b-2 border-[#0069B8] max-[1200px]:pt-[150px] max-sm:min-h-[460px] max-sm:px-[16px] max-sm:pt-[126px] max-sm:pb-[56px]"
        style={{ backgroundImage: 'url("/banking/images/Attend/Delegates-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#08121E]/92 via-[#08121E]/62 to-[#08121E]/18 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[860px]">
          <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] max-sm:text-[36px]">
            Delegate Pass for Invited <GradientText tone="teal">Banking, Insurance &amp; Regulatory Leaders.</GradientText>
          </h1>
          <p className="max-w-[760px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal max-sm:text-base">
            Complimentary Delegate Passes are reserved by invitation and qualification (80%+ buy-side institutional ratio) for senior C-suite leaders across commercial and Islamic banks, insurers, wealth and asset managers, and financial regulators.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButtonV3 href="#delegate-qualification">Apply for Delegate Pass</ArrowButtonV3>
          </div>
        </div>
      </section>

      <SplitSectionV3
        button="Submit Delegate Pass Application"
        buttonHref={`${V3_BASE}/general-enquiry/`}
        id="delegate-qualification"
        eyebrow="Buy-Side Qualification & UAE PDPL Consent Governance"
        imageAlt="Invited BFSI CXOs at World AI Show Dubai"
        imageSrc="/banking/images/Attend/AI-decision-maker.webp"
        title={
          <>
            Plenaries, 75-Min Clinical Workshops &amp;{" "}
            <GradientText tone="blue">7 Synthetic Experience Labs</GradientText>
          </>
        }
        text={
          <>
            <strong>Target Buy-Side Audience:</strong> Group CEOs, CIOs, CTOs, CDAIOs, CROs, CCOs, MLROs, Insurance CEOs/COOs, Chief Claims &amp; Underwriting Officers, Chief Investment Officers, and Supervisory Regulators across the UAE, GCC, and selected African markets.
            <br />
            <br />
            <strong>Inclusions:</strong> Full 1-day plenary access across all 6 operational mandates, choice of 75-minute Workshop A (Bank-Ready Deployment) or Workshop B (Intelligent Lending, Fraud &amp; Insurance Operations), hands-on floor simulations across 7 Synthetic Experience Labs, Networking Luncheon, and Closing Reception.
            <br />
            <br />
            <strong>UAE PDPL Consent Qualifier:</strong> Mandatory unbundled consent checkboxes under the UAE Personal Data Protection Law (PDPL) — delegate contact details are shared only where explicit opt-in consent is provided.
          </>
        }
      />

      <section className="py-[86px] bg-[#08121E] border-t-2 border-[#0069B8] max-sm:py-[62px]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <h2 className="font-heading m-0 mb-[42px] text-white font-bold leading-[1.08] tracking-[-0.02em] text-center text-[clamp(36px,4.6vw,54px)] max-sm:text-[32px]">
            Delegate Pass <GradientText tone="teal">Inclusions &amp; Standards</GradientText>
          </h2>
          <BenefitGridV3 items={gatewayCards} />
        </div>
      </section>
    </>
  );
}

const nineCommercialTiers = [
  ["Tier 1 · Powered By:", "Exclusive Headline Partner · 15-min Plenary Keynote + Panel Seat, 60-min CXO Boardroom (20 Pre-Qualified Buyers), 9 sqm Built Stand"],
  ["Tier 2 · Diamond Sponsor:", "15-min Plenary Keynote, 60-min CXO Boardroom (20 Pre-Qualified Buyers), 9 sqm Built Stand, 3× Branding"],
  ["Tier 3 · Platinum Sponsor:", "15-min Plenary Keynote + Panel Seat, 9 sqm Built Stand, 2× Branding"],
  ["Tier 4 · Gold Sponsor:", "15-min Plenary Keynote, 9 sqm Built Stand, 50-Account Target Wishlist"],
  ["Tier 5 · Boardroom Partner:", "Exclusive 60-min Closed-Door CXO Boardroom for 20 Pre-Qualified Buyers under Chatham House Rule"],
  ["Tier 6 · Silver Sponsor:", "Plenary Panel Speaking Seat + 4 sqm Built Stand"],
  ["Tier 7 · Bronze Sponsor:", "4 sqm Built Stand + WebApp Badge Scan & UAE PDPL Consented Directory"],
  ["Tier 8 · Concourse Exhibitor:", "4 sqm Turnkey Showcase Stand in the high-traffic concourse arena"],
  ["Tier 9 · Start Up Pod:", "2 sqm Turnkey Innovation Pod for emerging Fintech, Insurtech & AI Innovators"],
];

export function AttendSponsorSectionV3() {
  return (
    <>
      <section
        className="relative min-h-[560px] flex items-end px-[max(24px,calc((100vw-1172px)/2))] pt-[190px] pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:right_center] bg-no-repeat border-b-2 border-[#0069B8] max-[1200px]:pt-[150px] max-sm:min-h-[460px] max-sm:px-[16px] max-sm:pt-[126px] max-sm:pb-[56px]"
        style={{ backgroundImage: 'url("/banking/images/Attend/Sponsor-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#08121E]/92 via-[#08121E]/62 to-[#08121E]/18 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[860px]">
          <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] max-sm:text-[36px]">
            Commercial Sponsorship Prospectus:{" "}
            <GradientText tone="teal">Revamped 9-Tier Inventory.</GradientText>
          </h1>
          <p className="max-w-[760px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Engage 300–400 pre-qualified C-suite decision-makers across 25+ UAE banks and insurers and 15+ GCC and African financial groups through 15-minute keynotes, 60-minute CXO boardrooms (20 buyers), 75-minute workshops, and 9 sqm, 4 sqm &amp; 2 sqm stands.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButtonV3 href={`${V3_BASE}/sponsorship-enquiry/`}>
              Enquire About Sponsorship
            </ArrowButtonV3>
          </div>
        </div>
      </section>

      <SplitSectionV3
        button="Request Private Commercial Infopack"
        buttonHref={`${V3_BASE}/sponsorship-enquiry/`}
        id="sponsor"
        eyebrow="9-Tier Commercial Inventory · Powered By to Start Up Pod"
        imageAlt="Commercial Sponsorship Inventory at World AI Show Dubai"
        imageSrc="/banking/images/Attend/brand-center-innovation.webp"
        reverse={false}
        title={
          <>
            Put Your Enterprise Solution Inside{" "}
            <br className="max-md:hidden" />
            <GradientText>2027 BFSI Procurement Shortlists</GradientText>
          </>
        }
        text={
          <div className="flex flex-col gap-2.5">
            {nineCommercialTiers.map(([label, desc]) => (
              <div
                key={label}
                className="px-4 py-3 border border-[#0069B8]/22 border-l-4 border-l-[#0069B8] rounded-[12px] bg-white text-[14.5px] leading-[1.5] text-[#334155] shadow-[0_6px_18px_rgba(8,18,30,0.05)]"
              >
                <strong className="text-[#08121E]">{label}</strong> {desc}
              </div>
            ))}
          </div>
        }
      />

      <section className="py-[86px] bg-[#08121E] border-t-2 border-[#0069B8] max-sm:py-[62px]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <h2 className="font-heading m-0 mb-[42px] text-white font-bold leading-[1.08] tracking-[-0.02em] text-center text-[clamp(36px,4.6vw,54px)] max-sm:text-[32px]">
            Commercial Partnership <GradientText tone="teal">Deliverables &amp; Governance</GradientText>
          </h2>
          <BenefitGridV3 items={sponsorBenefits} />
        </div>
      </section>
    </>
  );
}

export function AttendMediaSectionV3() {
  return (
    <>
      <section
        className="relative min-h-[560px] flex items-end px-[max(24px,calc((100vw-1172px)/2))] pt-[190px] pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:right_center] bg-no-repeat border-b-2 border-[#0069B8] max-[1200px]:pt-[150px] max-sm:min-h-[460px] max-sm:px-[16px] max-sm:pt-[126px] max-sm:pb-[56px]"
        style={{ backgroundImage: 'url("/banking/images/Attend/Media-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#08121E]/92 via-[#08121E]/62 to-[#08121E]/18 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[820px]">
          <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] max-sm:text-[36px]">
            Cover the Premier <GradientText tone="teal">BFSI AI Decision Forum in Dubai</GradientText>
          </h1>
          <p className="max-w-[720px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal max-sm:text-base">
            Secure accredited press credentials, private interview suite access, and 1-on-1 briefings with commercial bank, insurance, and risk CXOs setting the 2027 AI agenda across the UAE, GCC, and selected African markets.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButtonV3 href={`${V3_BASE}/media-enquiry/`}>
              Apply for Media Accreditation
            </ArrowButtonV3>
          </div>
        </div>
      </section>

      <SplitSectionV3
        button="Apply for Media Accreditation"
        buttonHref={`${V3_BASE}/media-enquiry/`}
        id="media-partner"
        imageAlt="Financial media interview coverage at World AI Show Dubai"
        imageSrc="/banking/images/Attend/cover-southeast.webp"
        title={
          <>
            Financial Press Credentials &amp;{" "}
            <GradientText>Executive Interview Access</GradientText>
          </>
        }
        text={
          <>
            World AI Show | BFSI convenes 300–400 pre-qualified C-suite banking, insurance, and risk leaders alongside 30–40 expert faculty speakers in Dubai, UAE on 24 March 2027.
            <br />
            <br />
            Accredited financial journalists, editors, and industry analysts receive press credentials, dedicated interview suite access, and official research syndication privileges across Day 1 of the March Dubai Cluster.
          </>
        }
      />

      <section className="py-[86px] bg-[#08121E] border-t-2 border-[#0069B8] max-sm:py-[62px]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <BenefitGridV3 items={mediaBenefits} />
        </div>
      </section>
    </>
  );
}

export function AttendAssociationSectionV3() {
  return (
    <>
      <section
        className="relative min-h-[560px] flex items-end px-[max(24px,calc((100vw-1172px)/2))] pt-[190px] pb-[76px] overflow-hidden bg-[#08121E] bg-cover bg-[position:right_center] bg-no-repeat border-b-2 border-[#0069B8] max-[1200px]:pt-[150px] max-sm:min-h-[460px] max-sm:px-[16px] max-sm:pt-[126px] max-sm:pb-[56px]"
        style={{ backgroundImage: 'url("/banking/images/Attend/Association-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#08121E]/92 via-[#08121E]/62 to-[#08121E]/18 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[820px]">
          <h1 className="font-heading m-0 text-white font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5.2vw,64px)] max-sm:text-[36px]">
            Association &amp; <GradientText tone="teal">Institutional Alliances</GradientText>
          </h1>
          <p className="max-w-[720px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal max-sm:text-base">
            Collaborate with fintech federations, banking and insurance associations, and risk &amp; compliance councils to steer audited financial AI adoption across the UAE, GCC, and selected African markets.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButtonV3 href={`${V3_BASE}/association-enquiry/`}>
              Apply for Institutional Partnership
            </ArrowButtonV3>
          </div>
        </div>
      </section>

      <SplitSectionV3
        button="Submit Institutional Partnership Application"
        buttonHref={`${V3_BASE}/association-enquiry/`}
        id="association-partner"
        imageAlt="Strengthening the Regional BFSI AI Ecosystem Together"
        imageSrc="/banking/images/Attend/strengthening-ai-ecosystem.webp"
        reverse={false}
        title={
          <>
            Banking Federations, Insurance Councils &amp;{" "}
            <GradientText>FinTech Associations</GradientText>
          </>
        }
        text={
          <>
            World AI Show | BFSI | Dubai 2027 welcomes regional banking federations, insurance associations, fintech alliances, and professional risk and compliance bodies as official institutional partners.
            <br />
            <br />
            Connect your senior members with 300–400 pre-qualified C-suite peers, nominate faculty speakers with verified production case studies, and shape the regional regulatory and procurement dialogue in Dubai, UAE.
          </>
        }
      />

      <section className="py-[86px] bg-[#08121E] border-t-2 border-[#0069B8] max-sm:py-[62px]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
          <BenefitGridV3 items={associationBenefits} />
        </div>
      </section>
    </>
  );
}

export default function AttendPageV3() {
  return (
    <main className="relative min-h-screen bg-[#F7F9FC] text-[#334155] font-sans overflow-x-hidden">
      <HeaderV3 activeItem="Attend" subNavItems={attendSubNavV3} activeSubNavItem="Overview" />
      <AttendOverviewSectionV3 />
      <FooterV3 />
    </main>
  );
}
