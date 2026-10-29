import type { Metadata } from "next";
import { FooterSection } from "../components/sections/FooterSection";
import { Header } from "../components/sections/Header";
import { AttendStats } from "./AttendStats";
import { GradientText } from "../components/Shared";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Attend | World AI Show | BFSI | Dubai 2027",
  description:
    "How to attend World AI Show | BFSI | Dubai 2027 (24 March 2027 · DIFC District, Dubai, UAE). Explore the Delegate Pass (complimentary, strictly by invitation and qualification), Business Pass, and Commercial Sponsorship packages.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

type CardItem = {
  title: string;
  text: string;
  icon?: string;
};

const valueCards: CardItem[] = [
  {
    title: "Controlled AI Deployment for Regulated Finance",
    text: "A 1-Day Executive Decision Forum for 300+ pre-qualified C-suite banking, insurance, asset management, and payment leaders transitioning from speculative pilots into core balance-sheet production.",
    icon: "/banking/images/Attend/enterprise-ai-in-action.svg",
  },
  {
    title: "Five Governed Institutional Constituencies",
    text: "Maintaining a minimum 70% buy-side enterprise ratio across commercial & retail banks, risk & financial crime leadership, insurers & wealth managers, onshore CBUAE & DIFC DFSA regulators, and global AI providers.",
    icon: "/banking/images/Attend/region-ai-decision-makers.svg",
  },
  {
    title: "Hands-On Use-Case Clinics & Peer Evidence",
    text: "Drive decision-makers through practical deployment post-mortems, closed-door breakout clinics, and roundtables to resolve legacy core integration, establish audit-ready model governance, and define actionable 2027 procurement roadmaps.",
    icon: "/banking/images/Attend/insights-drive-transformation.svg",
  },
];

const gatewayCards: CardItem[] = [
  {
    title: "Full 1-Day Plenary Access",
    text: "Full access on Wednesday 24 March 2027 to Block 1 (Sector Priority Brief), Block 2 (Buyer Evidence), Block 3 (Risk & Trust Plenary), and Block 5 (Applied Case Studies).",
    icon: "/banking/images/Attend/gateway/access-to-all-sessions.svg",
  },
  {
    title: "Choice of 75-Min Breakout Clinic",
    text: "Select either Clinic A (Real-Time Fraud, AML & Financial Crime) or Clinic B (Agentic Banking & Core Modernisation) during Block 4.",
    icon: "/banking/images/Attend/gateway/high-value-networking.svg",
  },
  {
    title: "Block 6 Outcome Roundtables",
    text: "Participate in structured peer-to-peer outcome roundtables capturing recorded procurement criteria and 2027 implementation roadmaps.",
    icon: "/banking/images/Attend/gateway/curated-roundtable-discussions.svg",
  },
  {
    title: "Strict Buy-Side Qualification",
    text: "Reserved for CIOs, CTOs, CROs, CCOs, CDAIOs, Heads of Fraud, MLROs, and Regulators holding an active operational budget or deployment mandate.",
    icon: "/banking/images/Attend/gateway/speaker-materials-and-insights.svg",
  },
  {
    title: "Hosted Luncheon & Closing Reception",
    text: "Includes the Executive Networking Luncheon and the Closing Executive Reception in DIFC District concluding Day 1 of the March Dubai Cluster.",
    icon: "/banking/images/Attend/gateway/networking-lunch-and-business-meetings.svg",
  },
  {
    title: "1-on-1 Bilateral Buyer-Sponsor Meetings",
    text: "AI-powered matchmaking facilitating pre-scheduled 1-on-1 bilateral introductions with vetted technology and core banking providers.",
    icon: "/banking/images/Attend/gateway/enterprise-ai-showcases.svg",
  },
  {
    title: "Technology Concourse Access",
    text: "Explore standardised 6 sqm, 9 sqm, and 12 sqm concourse booths demonstrating production-ready fraud, AML, agentic, and core platforms.",
    icon: "/banking/images/Attend/gateway/exclusive-vip-networking-experiences.svg",
  },
  {
    title: "UAE PDPL Unbundled Data Privacy",
    text: "Mandatory separate unbundled consent checkboxes under the UAE Personal Data Protection Law (PDPL) — delegate contact details are shared only where explicit consent is provided.",
    icon: "/banking/images/Attend/gateway/event-platform-access.svg",
  },
];

const sponsorBenefits: CardItem[] = [
  {
    title: "Speaking Sponsor (12 sqm Booth)",
    text: "20-Minute Plenary Keynote or Fireside Chat + 12 sqm Premium Island Concourse Booth + 12 Executive Passes.",
    icon: "/banking/images/Attend/sponsor/speaking-opportunities.webp",
  },
  {
    title: "Engagement Partner (9 sqm Booth)",
    text: "Exclusive Leadership of a 75-Minute Workshop Clinic (Clinic A: Fraud & AML or Clinic B: Agentic Banking) + 9 sqm Prominent Booth + 8 Passes.",
    icon: "/banking/images/Attend/sponsor/brand-visibility-at-scale.webp",
  },
  {
    title: "CXO Closed-Door Boardroom",
    text: "60-Minute Curated Private Session with 15 Pre-Qualified Wishlist Banking CXOs + 5-Minute Sponsor Opening Address under Chatham House Rule.",
    icon: "/banking/images/Attend/sponsor/hosted-meetings.webp",
  },
  {
    title: "Industry Partner (9 sqm Booth)",
    text: "Plenary Panel Speaking Seat (Block 3 or Block 5) + 9 sqm Prominent Concourse Booth + 6 Executive Passes.",
    icon: "/banking/images/Attend/sponsor/qualified-lead-generation.webp",
  },
  {
    title: "Exhibitor (6 sqm Turnkey Booth)",
    text: "6 sqm Standard Turnkey Concourse Booth in the high-traffic networking and technology demonstration arena + 4 Passes.",
    icon: "/banking/images/Attend/sponsor/product-showcase-floor.webp",
  },
  {
    title: "Curated 1-on-1 Bilateral Meetings",
    text: "Pre-scheduled bilateral introductions with pre-qualified banking CIOs, CTOs, CROs, CCOs, and procurement heads.",
    icon: "/banking/images/Attend/partner/networking-access.webp",
  },
  {
    title: "Minimum 70% Buy-Side Guarantee",
    text: "Strict room governance ensuring at least 70% of the 300+ attendees represent buy-side financial institutions and regulators.",
    icon: "/banking/images/Attend/sponsor/exclusive-sponsorship-branding.webp",
  },
  {
    title: "UAE PDPL Consent-Governed Leads",
    text: "Compliant post-forum executive engagement reporting; delegate contact details are shared strictly where explicit consent is provided under UAE PDPL.",
    icon: "/banking/images/Attend/sponsor/post-event-lead-report.webp",
  },
];

const mediaBenefits: CardItem[] = [
  {
    title: "Press Credentials & Plenary Access",
    text: "Full media accreditation on 24 March 2027 across all plenary blocks, buyer evidence case studies, and risk panels.",
    icon: "/banking/images/Attend/media/full-event-access.webp",
  },
  {
    title: "Executive Interview Room Access",
    text: "Dedicated press workspace and private interview suites in DIFC District for 1-on-1 briefings with banking CXOs and global faculty.",
    icon: "/banking/images/Attend/media/dedicated-media-facilities.webp",
  },
  {
    title: "Editorial Distribution & Amplification",
    text: "Syndicate official GCC banking AI research benchmarks, regulatory insights, and forum announcements to your financial readership.",
    icon: "/banking/images/Attend/media/speaker-interview-access.webp",
  },
  {
    title: "Official Financial Press Kit",
    text: "Receive embargoed releases, faculty biographies, and verified sector briefs ahead of Day 1 of the March Dubai Cluster.",
    icon: "/banking/images/Attend/media/official-media-kit.webp",
  },
  {
    title: "Supporting Financial Media Recognition",
    text: "Featured placement in the Institutional Regulators & Supporting Financial Media showcase across the website and DIFC venue.",
    icon: "/banking/images/Attend/media/amplified-media-visibility.webp",
  },
  {
    title: "March Dubai Cluster Coverage",
    text: "Editorial access across the March Dubai Cluster in DIFC District (Day 1: Banking & Financial Services on 24 March; Day 2: Healthcare & Life Sciences on 25 March).",
    icon: "/banking/images/Attend/media/brand-and-media-recognition.webp",
  },
  {
    title: "Exclusive Banking Case Studies",
    text: "Capture unvarnished production post-mortems, APP fraud mitigation metrics, and core modernisation stories directly from GCC banks.",
    icon: "/banking/images/Attend/media/exclusive-story-opportunities.webp",
  },
  {
    title: "VIP Concourse & Reception Access",
    text: "Connect directly with 300+ pre-qualified C-suite banking leaders and 35–45 expert faculty speakers in Dubai.",
    icon: "/banking/images/Attend/media/networking-access.webp",
  },
];

const associationBenefits: CardItem[] = [
  {
    title: "Banking Federations & FinTech Bodies",
    text: "Official institutional partnership recognition for regional banking federations, fintech associations, and risk & compliance institutes.",
    icon: "/banking/images/Attend/partner/co-branding-opportunities.webp",
  },
  {
    title: "Member Delegate Pass Pathway",
    text: "Priority nomination pathway for senior member CIOs, CTOs, CROs, CCOs, CDAIOs, and MLROs to apply for complimentary Delegate Passes.",
    icon: "/banking/images/Attend/partner/complimentary-delegate-passes.webp",
  },
  {
    title: "Co-Branded GCC Ecosystem Outreach",
    text: "Joint executive communications, regulatory briefings, and institutional visibility across World AI Show | BFSI | Dubai 2027.",
    icon: "/banking/images/Attend/partner/joint-marketing-campaigns.webp",
  },
  {
    title: "Digital & Social Amplification",
    text: "Collaborative promotion across Trescon's global executive network (48 editions across 4 continents) and official channels.",
    icon: "/banking/images/Attend/partner/social-media-amplification.webp",
  },
  {
    title: "Faculty & Roundtable Nominations",
    text: "Nominate qualified banking and regulatory practitioners with live production evidence for plenary panels and Block 6 Outcome Roundtables.",
    icon: "/banking/images/Attend/partner/speaking-opportunities.webp",
  },
  {
    title: "VIP Bilateral Networking Access",
    text: "Connect association leadership with 300+ pre-qualified C-suite banking decision-makers in DIFC District, Dubai.",
    icon: "/banking/images/Attend/partner/networking-access.webp",
  },
  {
    title: "Post-Forum Outcome Synthesis",
    text: "Share recorded procurement criteria and 2027 implementation roadmaps from the four sector content pillars with your members.",
    icon: "/banking/images/Attend/partner/access-to-post-event-insights.webp",
  },
  {
    title: "Global World AI Show Series Alliance",
    text: "Extend institutional collaboration across the World AI Show Industry Series and regional GCC executive forums.",
    icon: "/banking/images/Attend/partner/long-term-partnership-opportunities.webp",
  },
];

export function ArrowButton({
  children,
  href = "/banking/sponsorship-enquiry/",
  variant = "solid",
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-3.5 min-w-[178px] h-[49px] px-[25px] rounded-full text-[15px] font-extrabold transition-all duration-180 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(185,248,45,0.24)] cursor-pointer";
  const styles = {
    solid: "bg-[#C0F43C] !text-black [color:#06111f!important] shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)]",
    outline: "text-white border border-[#4eb9ff]/80 bg-[#030a18]/30 shadow-[inset_0_0_24px_rgba(46,172,255,0.08)] hover:border-cyan/100 hover:bg-[#030a18]/50",
  };

  return (
    <a className={`${baseClasses} ${styles[variant]}`} href={href}>
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[15px] h-[15px] object-contain"
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

export function NumberedCard({ item, index }: { item: CardItem; index: number }) {
  return (
    <article className="group relative min-h-[235px] p-7 border border-white/[0.17] rounded-[13px] bg-gradient-to-br from-[#00ceff]/12 to-[#996cff]/14 bg-[#050c1c]/80 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_20px_60px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#18d4ff]/50 hover:shadow-[0_12px_36px_rgba(0,206,255,0.12),inset_0_0_24px_rgba(24,212,255,0.04)]">
      <span className="grid place-items-center w-11 h-11 mb-7 border border-white/8 rounded-[14px] text-cyan bg-[#030914]/72 text-[11px] font-extrabold select-none group-hover:text-[#06111f] group-hover:bg-[#C0F43C] group-hover:border-[#C0F43C] group-hover:shadow-[0_0_15px_rgba(192,244,60,0.35)] transition-all duration-300">
        {item.icon ? (
          <img src={item.icon} alt="" className="w-5 h-5 object-contain group-hover:brightness-0 transition-all duration-300" loading="lazy" />
        ) : index + 1 < 10 ? (
          `0${index + 1}`
        ) : (
          index + 1
        )}
      </span>
      <span className="absolute right-[25px] top-[30px] px-[9px] py-1 rounded-full text-cyan bg-[#12d7ff]/9 text-[11px] font-extrabold tracking-[1px] select-none group-hover:text-black group-hover:bg-[#C0F43C] transition-all duration-300">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </span>
      <h3 className="m-0 mb-2.5 text-white font-[850] text-[18px] leading-tight transition-colors duration-200 group-hover:text-[#C0F43C]">{item.title}</h3>
      <p className="m-0 text-white/62 text-[15px] leading-relaxed transition-colors duration-200 group-hover:text-white/80">{item.text}</p>
    </article>
  );
}

export function BenefitGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-4 gap-4 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
      {items.map((item, index) => (
        <NumberedCard item={item} index={index} key={item.title} />
      ))}
    </div>
  );
}

export function SplitSection({
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
    <section className="py-[92px] bg-[#020b1c] max-sm:py-[66px]" id={id}>
      <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
        <div className="mb-10">
          {eyebrow && (
            <p className="m-0 mb-[16px] text-white/78 text-[13px] font-[650] tracking-[4px] uppercase select-none font-mono">
              {eyebrow}
            </p>
          )}
          <h2 className="m-0 text-white font-[850] leading-[1.1] tracking-[-1.6px] text-[clamp(30px,3.6vw,46px)] max-sm:text-[30px] max-sm:tracking-[-1px]">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-[1fr_minmax(360px,47%)] items-center gap-[64px] max-[980px]:grid-cols-1 max-sm:gap-[34px]">
          <div className={`flex flex-col ${reverse ? "max-[980px]:order-none order-2" : "order-none"}`}>
            <p className="m-0 mb-9 text-white/75 text-[18px] leading-[1.7] max-sm:text-base">
              {text}
            </p>
            <div className="flex">
              <ArrowButton href={buttonHref || `#${id}`}>{button}</ArrowButton>
            </div>
          </div>
          <div className="relative overflow-hidden border border-[#55cfff]/22 rounded-[24px] bg-[#071426]/72 shadow-[0_0_44px_rgba(0,206,255,0.12)]">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#020b2c]/18 pointer-events-none" />
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover filter saturate-[0.96] brightness-[0.95]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttendCTASection() {
  return (
    <section className="py-[86px] pt-[86px] bg-gradient-to-b from-transparent to-[#020a2c]/18 max-sm:py-[62px]">
      <div className="w-[min(980px,calc(100%-48px))] mx-auto p-[66px_48px] border border-[#c0f43c]/35 rounded-[36px] text-center bg-[#050c1c]/82 shadow-[0_0_60px_rgba(192,244,60,0.12),inset_0_0_34px_rgba(0,206,255,0.03)] max-sm:p-[42px_22px] max-sm:w-[min(100%-28px,1120px)] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(192,244,60,0.04),transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#2E3C4D]/45" />

        <div className="relative z-10">
          <span className="inline-flex items-center mb-[27px] px-[15px] py-2 border border-white/10 rounded-full text-white/72 text-[12px] tracking-[2px] uppercase select-none before:content-[''] before:w-[7px] before:h-[7px] before:mr-2.5 before:rounded-full before:bg-cyan font-mono">
            Dubai · 24 March 2027 · 1-Day Forum · 300+ Senior Banking Leaders
          </span>
          <h2 className="max-w-[780px] mx-auto mb-8 text-[#f7f9ff] font-[850] leading-[1.08] tracking-[-1.8px] text-[clamp(36px,5vw,56px)] max-sm:text-[32px] max-sm:tracking-[-1px]">
            Be in the room where <span className="bg-gradient-to-r from-[#C0F43C] to-[#18d4ff] bg-clip-text text-transparent">2027s banking AI architecture</span> gets finalised.
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 mb-12 max-sm:flex-col max-sm:w-full">
            <a
              href="/banking/attend/delegate/"
              className="inline-flex items-center justify-center gap-2 min-w-[178px] h-[49px] px-[32px] py-[15px] rounded-full text-[15px] font-extrabold text-[#06111f] [color:#06111f!important] bg-[#C0F43C] shadow-[0_8px_24px_rgba(192,244,60,0.25)] hover:shadow-[0_12px_32px_rgba(192,244,60,0.4)] hover:scale-[1.03] transition-all duration-200 cursor-pointer max-sm:w-full"
            >
              Apply for a Delegate Pass
              <span className="font-mono text-[16px] font-bold">→</span>
            </a>
            <a
              href="/banking/sponsorship-enquiry/"
              className="inline-flex items-center justify-center min-w-[178px] h-[49px] px-[32px] py-[15px] rounded-full text-[15px] font-extrabold text-white bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] transition-all duration-200 cursor-pointer max-sm:w-full"
            >
              Enquire about sponsorship
            </a>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8" />

          <div className="grid grid-cols-3 w-full gap-8 max-sm:grid-cols-1 max-sm:gap-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                Date
              </span>
              <strong className="text-[17px] font-extrabold text-white tracking-wide font-mono">
                24 March 2027 · 1-Day Forum
              </strong>
            </div>

            <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-1">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                Location
              </span>
              <strong className="text-[17px] font-extrabold text-white tracking-wide text-center">
                DIFC District, Dubai, UAE
              </strong>
            </div>

            <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-1">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                Organiser
              </span>
              <strong className="text-[17px] font-extrabold text-white tracking-wide">
                Organised by Trescon
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttendOverviewSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[700px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:center_top] bg-no-repeat max-sm:min-h-[600px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(2, 7, 19, 0.92) 0%, rgba(2, 7, 19, 0.56) 45%, rgba(2, 7, 19, 0.1) 100%), url("/banking/images/Attend/Overview-banner.webp")',
        }}
        id="overview"
      >
        <div className="heroBackdrop absolute bottom-0 right-[-3%] w-[58%] h-[84%] opacity-0 pointer-events-none" />
        <div className="relative z-10 max-w-[860px]">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.06] tracking-[-1.8px] text-[clamp(42px,5.4vw,68px)] max-sm:text-[36px]">
            Focusing on controlled AI deployment for <GradientText>regulated financial operations.</GradientText>
          </h1>
          <div className="flex flex-wrap gap-3.5 mt-10 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/banking/attend/delegate/" variant="solid">
              Apply for a Delegate Pass
            </ArrowButton>
            <ArrowButton href="/banking/sponsorship-enquiry/" variant="outline">
              Enquire about sponsorship
            </ArrowButton>
          </div>
        </div>
      </section>

      {/* Controlled Execution Over Financial Hype Split Section (Pages 12-13) */}
      <section className="py-[92px] bg-[#020b1c] max-sm:py-[66px]">
        <div className="grid grid-cols-[1.08fr_0.92fr] items-center gap-[68px] w-[min(1120px,calc(100%-48px))] mx-auto max-[980px]:grid-cols-1 max-sm:gap-[34px]">
          <div className="flex flex-col">
            <h2 className="m-0 text-white font-[850] leading-[1.08] tracking-[-1.6px] text-[clamp(36px,4.4vw,52px)] max-sm:text-[32px]">
              Controlled execution over <GradientText>financial hype.</GradientText>
            </h2>
            <p className="mt-6 mb-4 text-white/75 text-[17px] leading-[1.65]">
              World AI Show | BFSI is an executive decision forum convening commercial bank CXOs, Chief Risk Officers, Chief Compliance Officers, Chief Data &amp; AI Officers, and financial regulators moving AI from experimental sandboxes into core transactional workflows. As part of the World AI Show Industry Series, the forum addresses the architectural hurdles, model auditability standards, and fiduciary risk controls required under active oversight from the Central Bank of the UAE (CBUAE) and DFSA.
            </p>
            <p className="m-0 text-white/75 text-[17px] leading-[1.65]">
              It is structured around four critical operational mandates every financial buying committee must resolve: real-time fraud and AML defense, agentic servicing automation, algorithmic credit underwriting, and sovereign model risk governance.
            </p>
          </div>
          <div className="relative overflow-hidden border border-[#55cfff]/25 rounded-[24px] bg-[#071426]/72 shadow-[0_0_44px_rgba(0,206,255,0.14)]">
            <img
              src="/banking/images/agenda/About.webp"
              alt="Controlled execution over financial hype"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-[86px] pt-[74px] bg-gradient-to-b from-[#020c21] to-[#031127] text-center max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
          <h2 className="max-w-[820px] mx-auto text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            The <GradientText>Room Composition</GradientText>
          </h2>
          <AttendStats />
        </div>
      </section>

      {/* Two-Door Pass Matrix Section (Section 08: /banking/attend/) */}
      <section className="py-[86px] bg-[#020c21] max-sm:py-[62px]" id="pass-matrix">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
          <div className="text-center mb-12">
            <h2 className="max-w-[820px] mx-auto text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(36px,4.6vw,54px)]">
              How You Can be <GradientText>Part of This Event</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
            {/* Door 1 */}
            <div className="flex flex-col justify-between p-9 rounded-[24px] border border-[#C0F43C]/45 bg-gradient-to-br from-[#C0F43C]/10 via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div>
                <h3 className="text-white font-extrabold text-[25px] leading-[1.2] mb-3">
                  Delegate Pass — complimentary, strictly by invitation and qualification
                </h3>
                <p className="text-white/80 text-[16px] leading-[1.6] mb-5">
                  Senior banking, insurance, and financial services executives attend by invitation on a complimentary Delegate Pass, subject to qualification against an active operational budget or deployment mandate.
                </p>
                <ul className="space-y-2.5 mb-8 text-white/75 text-[15px] list-none p-0">
                  <li className="flex items-start gap-2.5"><span className="text-[#C0F43C] font-bold">✓</span> Target Audience: CIOs, CTOs, CROs, CCOs, CDAIOs, Heads of Fraud, MLROs, Regulators</li>
                  <li className="flex items-start gap-2.5"><span className="text-[#C0F43C] font-bold">✓</span> Inclusions: Plenary access, choice of Parallel Breakout Clinic (Fraud or Agentic), Outcome Roundtables, Hosted Reception</li>
                  <li className="flex items-start gap-2.5"><span className="text-[#C0F43C] font-bold">✓</span> Privacy: Mandatory separate unbundled consent checkboxes under UAE Personal Data Protection Law (PDPL)</li>
                </ul>
              </div>
              <div>
                <ArrowButton href="/banking/attend/delegate/" variant="solid">
                  Apply for a Delegate Pass
                </ArrowButton>
              </div>
            </div>

            {/* Door 2 */}
            <div className="flex flex-col justify-between p-9 rounded-[24px] border border-cyan/40 bg-gradient-to-br from-cyan/10 via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div>
                <h3 className="text-white font-extrabold text-[25px] leading-[1.2] mb-3">
                  Business Pass — paid commercial access with strictly capped quota
                </h3>
                <p className="text-white/80 text-[16px] leading-[1.6] mb-5">
                  Business Passes provide commercial access for technology solution providers, software vendors, and consultancies outside the invitation criteria, with ticket numbers strictly capped to protect room composition.
                </p>
                <ul className="space-y-2.5 mb-8 text-white/75 text-[15px] list-none p-0">
                  <li className="flex items-start gap-2.5"><span className="text-cyan font-bold">✓</span> Paid commercial access for enterprise AI, cloud, fraud/AML, and core banking vendors</li>
                  <li className="flex items-start gap-2.5"><span className="text-cyan font-bold">✓</span> Strictly capped quota to protect the minimum 70% buy-side enterprise ratio</li>
                  <li className="flex items-start gap-2.5"><span className="text-cyan font-bold">✓</span> Full 1-day access to plenary blocks, concourse showcase, and Closing Executive Reception</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <ArrowButton href="/banking/general-enquiry/" variant="outline">
                  Purchase a Business Pass
                </ArrowButton>
                <ArrowButton href="/banking/attend/sponsor/" variant="solid">
                  Explore Sponsorship Tiers
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-[86px] bg-gradient-to-b from-[#031127] to-[#020b1c] text-center max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h3 className="max-w-[820px] mx-auto mt-0 mb-10 text-white font-[850] leading-[1.08] tracking-[-1.5px] text-[clamp(32px,4vw,46px)] max-sm:text-[30px]">
            Why Banking Leaders Convene in <GradientText>DIFC District, Dubai</GradientText>
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-9 max-[980px]:grid-cols-[repeat(3,310px)] max-sm:grid-cols-1">
            {valueCards.map((card, index) => (
              <NumberedCard item={card} index={index} key={card.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function AttendDelegateSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:center_top] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/banking/images/Attend/Delegates-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[840px]">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(42px,5.4vw,66px)] max-sm:text-[36px]">
            Built for Pre-Qualified <GradientText>Banking &amp; Financial Services CXOs.</GradientText>
          </h1>
          <p className="max-w-[740px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Complimentary Delegate Passes are reserved for senior banking, insurance, and financial services leaders, including CIOs, CTOs, CROs, CCOs, CDAIOs, Heads of Fraud, MLROs, and regulators attending by invitation and subject to qualification against an active operational budget or deployment mandate.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="#delegate-qualification">Apply for a Delegate Pass</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Submit Delegate Qualification Application"
        buttonHref="/banking/general-enquiry/"
        id="delegate-qualification"
        eyebrow="Qualification & UAE PDPL Consent Governance"
        imageAlt="Invited Banking CXOs at World AI Show Dubai"
        imageSrc="/banking/images/Attend/AI-decision-maker.webp"
        title={<>Plenary Access, Parallel Clinics &amp; <GradientText>Outcome Roundtables</GradientText></>}
        text={
          <>
            <strong>Target Audience:</strong> CIOs, CTOs, CROs, CCOs, CDAIOs, Heads of Fraud, MLROs, Regulators.
            <br />
            <br />
            <strong>Inclusions:</strong> Plenary access, choice of Parallel Breakout Clinic (Fraud or Agentic), Outcome Roundtables, Hosted Reception.
            <br />
            <br />
            <strong>Privacy &amp; Consent Qualifier:</strong> Mandatory separate unbundled consent checkboxes under UAE Personal Data Protection Law (PDPL). Delegate contact details are shared only where explicit consent is provided.
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="m-0 mb-[42px] text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-center text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            Delegate Pass <GradientText>Inclusions &amp; Standards</GradientText>
          </h2>
          <BenefitGrid items={gatewayCards} />
        </div>
      </section>
    </>
  );
}

export function AttendSponsorSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/banking/images/Attend/Sponsor-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[840px]">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(42px,5.4vw,66px)] max-sm:text-[36px]">
            Where Middle East banking leaders specify, procure, and <GradientText>deploy production AI.</GradientText>
          </h1>
          <p className="max-w-[760px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Explore commercial partnerships structured around plenary keynotes, workshop clinics, concourse booths, and private buyer CXO closed-door boardrooms.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/banking/sponsorship-enquiry/">Enquire About Sponsorship</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Request Sponsorship Rate Card & Prospectus"
        buttonHref="/banking/sponsorship-enquiry/"
        id="sponsor"
        eyebrow="Standardised Speaking & Concourse Booth Framework"
        imageAlt="Standardised Speaking and Booth Framework at World AI Show Dubai"
        imageSrc="/banking/images/Attend/brand-center-innovation.webp"
        reverse={false}
        title={
          <>
            Put Your Enterprise Solution Before{" "}
            <br className="max-md:hidden" />
            <GradientText>Qualified Banking Procurement Committees</GradientText>
          </>
        }
        text={
          <>
            • <strong>Speaking Sponsor:</strong> 20-Min Plenary Keynote/Fireside + 12 sqm Concourse Booth + 12 Passes
            <br />
            • <strong>Engagement Partner:</strong> Exclusive Leadership of 75-Min Workshop Clinic + 9 sqm Booth + 8 Passes
            <br />
            • <strong>CXO Closed-Door Boardroom:</strong> 60-Min Curated Session with 15 Wishlist CXOs + 5-Min Opening Address
            <br />
            • <strong>Industry Partner:</strong> Plenary Panel Speaking Seat + 9 sqm Booth + 6 Passes
            <br />
            • <strong>Exhibitor:</strong> 6 sqm Standard Turnkey Concourse Booth + 4 Passes
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="m-0 mb-[42px] text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-center text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            Standardised Partnership <GradientText>Tiers &amp; Deliverables</GradientText>
          </h2>
          <BenefitGrid items={sponsorBenefits} />
        </div>
      </section>
    </>
  );
}

export function AttendMediaSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/banking/images/Attend/Media-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[820px]">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Cover the Premier <GradientText>Middle East Banking AI Forum</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Secure accredited press credentials, dedicated broadcast suite access, and 1-on-1 briefings with commercial bank CXOs, financial crime heads, and regulators setting the Middle East&apos;s 2027 AI agenda.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/banking/media-enquiry/">Apply for Media Accreditation</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Apply for Media Accreditation"
        buttonHref="/banking/media-enquiry/"
        id="media-partner"
        imageAlt="Financial media interview coverage at World AI Show Dubai"
        imageSrc="/banking/images/Attend/cover-southeast.webp"
        title={<>Financial Press Credentials &amp; <GradientText>Executive Interview Access</GradientText></>}
        text={
          <>
            World AI Show | BFSI convenes 300+ pre-qualified C-suite banking, insurance, and risk leaders alongside 35–45 expert faculty speakers in DIFC District, Dubai.
            <br />
            <br />
            Accredited financial journalists, editors, and industry analysts receive press credentials, dedicated interview suite access, and official research syndication opportunities across the entire day of the event.
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <BenefitGrid items={mediaBenefits} />
        </div>
      </section>
    </>
  );
}

export function AttendAssociationSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/banking/images/Attend/Association-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[820px]">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Institutional <GradientText>Partnership Application</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Collaborate with regional fintech associations, banking federations, and regulatory bodies to steer national AI adoption, foster bilateral delegations, and champion audited financial innovation across the Middle East.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/banking/association-enquiry/">Apply for Institutional Partnership</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Submit Institutional Partnership Application"
        buttonHref="/banking/association-enquiry/"
        id="association-partner"
        imageAlt="Strengthening the Middle East Banking AI Ecosystem Together"
        imageSrc="/banking/images/Attend/strengthening-ai-ecosystem.webp"
        reverse={false}
        title={<>Banking Federations, FinTech Councils &amp; <GradientText>Risk Institutes</GradientText></>}
        text={
          <>
            World AI Show | BFSI | Dubai 2027 welcomes regional banking federations, fintech associations, and professional risk and compliance bodies as official institutional partners.
            <br />
            <br />
            Connect your senior banking and financial services members with 300+ pre-qualified C-suite peers, nominate faculty speakers with verified production case studies, and shape the regional regulatory and procurement dialogue in DIFC District, Dubai.
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <BenefitGrid items={associationBenefits} />
        </div>
      </section>
    </>
  );
}

export default function AttendPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Overview" />
      <AttendOverviewSection />
      <FooterSection />
    </main>
  );
}
