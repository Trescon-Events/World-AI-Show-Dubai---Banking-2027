"use client";

export function OrganizerSection() {
  return (
    <section
      className="relative isolate overflow-hidden py-[104px] bg-[#004A88] border-y-2 border-[#0069B8] surface-blue max-sm:py-[72px]"
      id="organizer"
    >
      {/* Clean Auditorium Background Photo + Sovereign Blue Tint */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/banking/images/brand/organizer-bg.webp)",
          filter: "brightness(1.22) contrast(1.06) saturate(0.75)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(125deg, rgba(0, 72, 138, 0.84) 0%, rgba(0, 105, 184, 0.74) 52%, rgba(8, 18, 30, 0.84) 100%)",
        }}
      />

      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
        <div
          data-aos="zoom-in-up"
          className="grid grid-cols-[220px_minmax(0,1fr)] gap-10 items-center max-[980px]:grid-cols-1 max-[980px]:gap-6"
        >
          <div className="flex flex-col">
            <span className="text-[#F7F9FC]/88 text-[12px] font-bold uppercase tracking-[0.18em] select-none">
              Organised by
            </span>
            <img
              className="block mt-3 w-[212px] max-w-full h-auto object-contain brightness-0 invert select-none"
              src="/banking/logos/Trescon-org.svg"
              alt="Trescon"
              width={212}
              height={64}
            />
          </div>

          <div className="flex flex-col">
            <p className="m-0 text-[#F7F9FC]/94 text-[17px] leading-[1.68]">
              Powered by Trescon’s decade-long track record of convening over 42,000 C-suite executives and 2,600+ expert speakers across four continents, World AI Show | BFSI leads the March Dubai Cluster. Held back-to-back with the Healthcare and Life Sciences edition, this dedicated decision forum connects institutional buyers, fintech innovators, and regulators under a single, focused fiduciary agenda.
            </p>

            <a
              href="https://www.tresconglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bb-btn-primary inline-flex items-center gap-2 w-fit h-[48px] px-7 mt-[26px] text-[14.5px] font-bold"
            >
              <span>Learn more about Trescon</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 object-contain"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
