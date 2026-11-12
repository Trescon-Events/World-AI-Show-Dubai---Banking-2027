"use client";

import { GradientText } from "../../components/Shared";

export function PhotoGalleryContent() {
  const steps = [
    {
      num: "Step 1",
      title: "Scan Your Face",
      desc: "Simply capture a quick selfie or upload a photo directly to the secure gallery portal.",
      color: "text-[#F15928]",
      bgColor: "bg-[#F15928]/15",
      borderColor: "border-[#F15928]/35",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#F15928]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    },
    {
      num: "Step 2",
      title: "Get Your Photos",
      desc: "Our AI immediately scans the entire event repository to find every photo featuring you.",
      color: "text-[#009EAD]",
      bgColor: "bg-[#009EAD]/15",
      borderColor: "border-[#009EAD]/35",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#009EAD]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1.75 0Z" />
        </svg>
      )
    },
    {
      num: "Step 3",
      title: "Share Your Photos",
      desc: "Instantly view, download in high resolution, or share directly to your social media channels.",
      color: "text-[#0069B8]",
      bgColor: "bg-[#0069B8]/20",
      borderColor: "border-[#0069B8]/40",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186l.09.034m-.09-.034a2.25 2.25 0 0 0 2.247 1.107m0 0l.09-.034m-.09.034L18 8.25m0 0a2.25 2.25 0 1 0 0-3.3m0 3.3a2.25 2.25 0 1 0 0 3.3m0-3.3l-.09.034m.09-.034a2.25 2.25 0 0 0-2.247-1.107m0 0L7.25 10.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full text-white font-sans bg-[#F7F9FC]">
      <section 
        className="relative net-inner-hero pt-[220px] pb-20 overflow-hidden flex items-center bg-[#08121E] border-b-2 border-[#0069B8] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#08121E]/92 before:via-[#08121E]/86 before:to-[#08121E] before:z-0"
        style={{ backgroundImage: 'url("/banking/images/agenda/Agenda-bg.webp")' }}
      >
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto relative z-10 grid grid-cols-[1.15fr_0.85fr] gap-[74px] items-center max-lg:grid-cols-1 max-lg:gap-14">
          <div>
            <span className="inline-flex items-center mb-5 px-4 py-1.5 border border-[#009EAD]/45 rounded-full text-[#009EAD] text-[12px] font-bold uppercase tracking-[0.14em] bg-[#0D1B2E]">
              AI Photo Gallery
            </span>
            <h1 className="font-heading font-bold text-white leading-[1.06] tracking-[-0.02em] text-[clamp(40px,5vw,62px)] m-0">
              Find Your Event <br />
              <GradientText tone="teal">Photos Instantly</GradientText>
            </h1>
            <p className="m-0 mt-5 text-white/80 text-[18px] leading-relaxed max-w-[560px] max-sm:text-[15px]">
              Upload a photo or take a selfie. Our AI scans the full event library and finds every moment featuring you — no scrolling, no searching.
            </p>
            <div className="mt-8 flex flex-col gap-3 max-w-[500px]">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex items-center gap-4 p-4 border border-[#0069B8]/40 rounded-[14px] bg-[#0D1B2E] hover:border-[#009EAD] transition-all duration-250"
                >
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${step.bgColor} border ${step.borderColor}`}>
                    {step.icon}
                  </span>
                  <div>
                    <span className={`text-[10.5px] font-bold tracking-[0.14em] block uppercase ${step.color} mb-0.5`}>
                      {step.num}
                    </span>
                    <h3 className="font-heading m-0 text-white font-bold text-[15px] tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="relative flex justify-center items-center w-full max-lg:max-w-[340px] max-lg:mx-auto">
            <div className="absolute inset-0 bg-[#009EAD]/12 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="net-phone large net-phone-standalone">
              {/* Notch */}
              <div className="net-phone-notch">
                <div className="net-phone-notch-pill"></div>
              </div>

              {/* Status bar */}
              <div className="net-phone-status">
                <span>9:41</span>
                <div style={{ width: 18, height: 8, border: '1px solid rgb(209,213,219)', borderRadius: 2, padding: '1px 2px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '75%', height: '100%', background: '#009EAD', borderRadius: 1 }}></div>
                </div>
              </div>

              {/* Screen */}
              <div className="net-phone-screen">
                {/* Badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 7, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0069B8', border: '1px solid rgba(0,105,184,0.35)', background: 'rgba(0,105,184,0.08)', padding: '3px 8px', borderRadius: 20, marginBottom: 10 }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  AI Photo Gallery
                </div>

                <div style={{ fontSize: 12, fontWeight: 900, color: '#08121E', marginBottom: 4, lineHeight: 1.3 }}>Find Your Photos</div>
                <div style={{ fontSize: 8, color: '#52657A', marginBottom: 10, lineHeight: 1.5 }}>Upload a selfie to instantly find your event moments</div>

                {/* Face scan widget */}
                <div className="net-scan-wrap">
                  <div className="net-scan-corner tl"></div>
                  <div className="net-scan-corner tr"></div>
                  <div className="net-scan-corner bl"></div>
                  <div className="net-scan-corner br"></div>
                  <div className="net-scan-line"></div>
                  <svg className="net-scan-face" width="60" height="72" viewBox="0 0 60 72" fill="none">
                    <ellipse cx="30" cy="26" rx="18" ry="22" stroke="currentColor" strokeWidth="1.5"></ellipse>
                    <path d="M12 60c0-10 8-16 18-16s18 6 18 16" stroke="currentColor" strokeWidth="1.5"></path>
                    <circle cx="22" cy="24" r="3" fill="currentColor" opacity="0.5"></circle>
                    <circle cx="38" cy="24" r="3" fill="currentColor" opacity="0.5"></circle>
                    <path d="M24 32c1.5 2 4.5 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  </svg>
                </div>

                {/* CTA button */}
                <div style={{ background: '#F15928', borderRadius: 20, padding: '9px 0', textAlign: 'center', fontSize: 10, fontWeight: 800, color: '#fff', marginTop: 8, letterSpacing: '0.06em' }}>
                  Find My Photos
                </div>

                {/* Gallery grid */}
                <div style={{ marginTop: 12 }}>
                  <div style={{ fontSize: 8, fontWeight: 700, color: '#52657A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Your Gallery</div>
                  <div className="net-photo-grid">
                    {[
                      'linear-gradient(135deg, rgba(0,158,173,0.22), rgba(0,105,184,0.08))',
                      'linear-gradient(135deg, rgba(0,105,184,0.16), rgba(0,158,173,0.06))',
                      'linear-gradient(135deg, rgba(0,158,173,0.18), rgba(0,105,184,0.08))',
                      'linear-gradient(135deg, rgba(0,158,173,0.22), rgba(0,105,184,0.08))',
                      'linear-gradient(135deg, rgba(0,105,184,0.16), rgba(0,158,173,0.06))',
                      'linear-gradient(135deg, rgba(0,158,173,0.18), rgba(0,105,184,0.08))',
                    ].map((bg, i) => (
                      <div key={i} className="net-photo-cell" style={{ background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0069B8" strokeWidth="1.5" style={{ opacity: 0.6 }}>
                          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Home indicator */}
              <div className="net-phone-home"></div>
            </div>
          </div>


        </div>
      </section>

      {/* ── Section 2: Smart AI. Seamless Experience. (Side-by-Side Cards) ── */}
      <section className="relative py-24 bg-[#F7F9FC]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-[760px] mx-auto">
            <h2 className="font-heading font-bold text-[#08121E] leading-tight tracking-[-0.02em] text-[clamp(36px,4.8vw,54px)] m-0">
              Smart AI.<br />
              <GradientText tone="blue">Seamless Experience.</GradientText>
            </h2>
            <p className="m-0 mt-4 text-[#334155] text-[16px] md:text-[18px] font-medium">
              Your photos, instantly yours · KonfHub
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
                Your photos, instantly yours
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Find your photos instantly with AI face recognition</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">No more scrolling through hundreds of images</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Get a personalised gallery of your moments</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">View, download, and share in real-time</p>
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
                Stay visible beyond the event
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Branded photo experiences with logos and frames</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Drive social visibility through attendee sharing</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Stay visible beyond the event</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/banking/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Turn photos into a subtle lead engagement channel</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}