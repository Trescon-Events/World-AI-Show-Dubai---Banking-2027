"use client";

export function FooterSection() {
  return (
    <footer className="relative py-[74px] pb-[38px] bg-[#08121E] border-t-2 border-[#0069B8] overflow-hidden" id="footer">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">

        {/* Footer Top Column Grid */}
        <div className="grid grid-cols-[1.65fr_0.7fr_0.78fr_0.7fr] gap-[72px] pb-[48px] border-b border-[#0069B8]/40 max-[980px]:grid-cols-1 max-[980px]:gap-[42px]">

          {/* Brand block */}
          <div className="flex flex-col">
            <img
              src="/banking/images/brand/logo-white.svg"
              alt="World AI Show | BFSI | Dubai 2027"
              width={220}
              height={62}
              className="w-[220px] max-w-full h-auto object-contain object-left mb-4 select-none"
            />
            <p className="max-w-[430px] m-0 mt-2 text-[#F7F9FC]/80 text-[16px] leading-[1.6]">
              The premier buyer-led executive forum dedicated to the operational realities of deploying artificial intelligence across regulated banking, insurance, asset management, and payment operations. Day 1 of the March Dubai Cluster · Dubai, UAE.
            </p>
          </div>

          {/* Column 1: Links */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="m-0 mb-2 text-[#009EAD] text-[12px] font-bold uppercase tracking-[0.2em] select-none">
              Event
            </h3>
            <a href="/banking/attend" className="inline-block text-white text-[15px] hover:text-[#009EAD] hover:translate-x-[3px] transition-all duration-150 py-0.5">
              Attend
            </a>
            <a href="/banking/agenda" className="inline-block text-white text-[15px] hover:text-[#009EAD] hover:translate-x-[3px] transition-all duration-150 py-0.5">
              Agenda
            </a>
            <a href="/banking/speakers" className="inline-block text-white text-[15px] hover:text-[#009EAD] hover:translate-x-[3px] transition-all duration-150 py-0.5">
              Speakers
            </a>
            <a href="/banking/partners" className="inline-block text-white text-[15px] hover:text-[#009EAD] hover:translate-x-[3px] transition-all duration-150 py-0.5">
              Partners
            </a>
          </div>

          {/* Column 2: Enquiries */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="m-0 mb-2 text-[#009EAD] text-[12px] font-bold uppercase tracking-[0.2em] select-none">
              Enquiries
            </h3>
            <a href="/banking/sponsorship-enquiry" className="inline-block text-white text-[15px] hover:text-[#009EAD] hover:translate-x-[3px] transition-all duration-150 py-0.5">
              Sponsorships
            </a>
            <a href="/banking/attend/delegate" className="inline-block text-white text-[15px] hover:text-[#009EAD] hover:translate-x-[3px] transition-all duration-150 py-0.5">
              Business Pass
            </a>
            <a href="/banking/media-enquiry" className="inline-block text-white text-[15px] hover:text-[#009EAD] hover:translate-x-[3px] transition-all duration-150 py-0.5">
              Media Partner
            </a>
            <a href="/banking/speaker-enquiry" className="inline-block text-white text-[15px] hover:text-[#009EAD] hover:translate-x-[3px] transition-all duration-150 py-0.5">
              Speaker Slot
            </a>
          </div>

          {/* Column 3: Organiser */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="m-0 mb-2 text-[#009EAD] text-[12px] font-bold uppercase tracking-[0.2em] select-none">
              Organiser
            </h3>
            <a
              href="https://www.tresconglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white text-[15px] hover:text-[#009EAD] hover:translate-x-[3px] transition-all duration-150 py-0.5"
            >
              Trescon
            </a>
            <a
              href="https://tresconglobal.com/about-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white text-[15px] hover:text-[#009EAD] hover:translate-x-[3px] transition-all duration-150 py-0.5"
            >
              About Us
            </a>
            <a href="/banking/general-enquiry" className="inline-block text-white text-[15px] hover:text-[#009EAD] hover:translate-x-[3px] transition-all duration-150 py-0.5">
              Contact Us
            </a>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="flex items-center justify-between gap-6 pt-[34px] max-sm:flex-col max-sm:items-start">
          <p className="m-0 text-[#F7F9FC]/65 text-[13px] leading-relaxed">
            © 2026–2027 World AI Show | BFSI | Dubai 2027. All rights reserved. Organised by Trescon.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/showcase/world-ai-show/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center w-[38px] h-[38px] bg-[#0D1B2E] border border-[#0069B8] rounded-full text-white hover:bg-[#F15928] hover:border-[#F15928] hover:-translate-y-[3px] hover:scale-[1.08] hover:shadow-[0_10px_22px_rgba(241,89,40,0.42)] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a
              href="https://x.com/WorldAIShow"
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center w-[38px] h-[38px] bg-[#0D1B2E] border border-[#0069B8] rounded-full text-white hover:bg-[#F15928] hover:border-[#F15928] hover:-translate-y-[3px] hover:scale-[1.08] hover:shadow-[0_10px_22px_rgba(241,89,40,0.42)] transition-all duration-200"
              aria-label="Twitter"
            >
              <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/world_ai_show?igsh=anRibHE4OHFlOHM%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center w-[38px] h-[38px] bg-[#0D1B2E] border border-[#0069B8] rounded-full text-white hover:bg-[#F15928] hover:border-[#F15928] hover:-translate-y-[3px] hover:scale-[1.08] hover:shadow-[0_10px_22px_rgba(241,89,40,0.42)] transition-all duration-200"
              aria-label="Instagram"
            >
              <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCrJB-EsWzCNPk34FO_N8Qew/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center w-[38px] h-[38px] bg-[#0D1B2E] border border-[#0069B8] rounded-full text-white hover:bg-[#F15928] hover:border-[#F15928] hover:-translate-y-[3px] hover:scale-[1.08] hover:shadow-[0_10px_22px_rgba(241,89,40,0.42)] transition-all duration-200"
              aria-label="YouTube"
            >
              <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.095-2.098C19.56 3.5 12 3.5 12 3.5s-7.56 0-9.403.565c-1.022.272-1.823 1.076-2.095 2.098C0 8.006 0 12 0 12s0 3.994.502 5.837c.272 1.022 1.073 1.826 2.095 2.098C4.44 20.5 12 20.5 12 20.5s7.56 0 9.403-.565c1.022-.272 1.823-1.076 2.095-2.098C24 15.994 24 12 24 12s0-3.994-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
