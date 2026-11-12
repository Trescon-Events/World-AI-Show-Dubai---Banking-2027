"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { GradientText } from "../Shared";

const PanoramaViewer = dynamic(() => import("./PanoramaViewer"), { ssr: false });

export function VirtualTourSection() {
  const [activeTab, setActiveTab] = useState<"exhibition" | "main-hall">("exhibition");

  return (
    <section className="relative py-20 pb-28 bg-[#F7F9FC] min-h-screen">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)] flex flex-col items-center">
        
        <div className="text-center mb-10">
          <span className="inline-flex items-center mb-5 px-4 py-1.5 border border-[#0069B8]/25 rounded-full text-[#0069B8] text-[12px] font-bold uppercase tracking-[0.14em] bg-white">
            Interactive Experience
          </span>
          <h2 className="font-heading font-bold text-[#08121E] leading-tight tracking-[-0.02em] text-[clamp(34px,4.4vw,52px)] max-w-[800px] mx-auto mb-4">
            Virtual <GradientText tone="blue">Tour</GradientText>
          </h2>
          <p className="max-w-[620px] mx-auto text-[#334155] text-[16px] leading-relaxed">
            Immerse yourself in the world-class venue of World AI Show | BFSI | Dubai 2027. Explore our exhibition floor and main networking halls in fully interactive 360 degrees.
          </p>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex justify-center mb-10 w-full">
          <div className="inline-flex p-1.5 bg-white border border-[#0069B8]/25 rounded-full shadow-[0_8px_24px_rgba(8,18,30,0.06)] w-full max-w-[500px]">
            <button
              onClick={() => setActiveTab("exhibition")}
              className={`flex-1 py-3.5 max-sm:py-3 rounded-full text-[14px] max-sm:text-[13px] font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "exhibition"
                  ? "bg-[#F15928] text-white shadow-[0_8px_20px_rgba(241,89,40,0.28)]"
                  : "text-[#334155] hover:text-[#0069B8]"
              }`}
            >
              Exhibition Floor
            </button>
            <button
              onClick={() => setActiveTab("main-hall")}
              className={`flex-1 py-3.5 max-sm:py-3 rounded-full text-[14px] max-sm:text-[13px] font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "main-hall"
                  ? "bg-[#F15928] text-white shadow-[0_8px_20px_rgba(241,89,40,0.28)]"
                  : "text-[#334155] hover:text-[#0069B8]"
              }`}
            >
              Main Hall
            </button>
          </div>
        </div>

        {/* 360 Viewer Container */}
        <div className="w-full aspect-video min-h-[500px] max-h-[750px] relative">
          {activeTab === "exhibition" ? (
            <PanoramaViewer imageUrl="https://pub-70eeb092c44c45ee83f856cfdd1a0fd9.r2.dev/images/360/exhibition.png" />
          ) : (
            <PanoramaViewer imageUrl="https://pub-70eeb092c44c45ee83f856cfdd1a0fd9.r2.dev/images/360/main-hall.png" />
          )}
        </div>

      </div>
    </section>
  );
}
