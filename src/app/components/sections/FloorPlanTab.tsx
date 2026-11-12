"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const PanoramaViewer = dynamic(() => import("./PanoramaViewer"), { ssr: false });

type SubTab = "top-view" | "exhibition" | "main-hall";

export function FloorPlanTab() {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("exhibition");
  
  // State and refs for Top View zooming and panning
  const [imgScale, setImgScale] = useState(1);
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });

  // Reset top view zoom/pan when switching tabs
  useEffect(() => {
    if (activeSubTab !== "top-view") {
      setImgScale(1);
      setImgPos({ x: 0, y: 0 });
    }
  }, [activeSubTab]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setImgScale((s) => Math.max(1, Math.min(5, s + delta)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (imgScale <= 1) return;
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    posStart.current = { ...imgPos };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setImgPos({ x: posStart.current.x + dx, y: posStart.current.y + dy });
  };

  const handleMouseUp = () => setDragging(false);

  const tabs: { key: SubTab; label: string }[] = [
    { key: "exhibition", label: "Exhibition Floor" },
    { key: "main-hall", label: "Main Hall" },
    { key: "top-view", label: "Top View" },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-4 animate-fadeIn">
      {/* Custom Sub-Tab Switcher */}
      <div className="flex justify-center mb-8 w-full">
        <div className="inline-flex p-1.5 bg-white border border-[#0069B8]/25 rounded-full shadow-[0_8px_24px_rgba(8,18,30,0.06)] w-full max-w-[600px]">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveSubTab(tab.key)}
              className={`flex-1 py-3.5 max-sm:py-3 rounded-full text-[14px] max-sm:text-[12px] font-bold transition-all duration-300 cursor-pointer ${
                activeSubTab === tab.key
                  ? "bg-[#F15928] text-white shadow-[0_8px_20px_rgba(241,89,40,0.28)]"
                  : "text-[#334155] hover:text-[#0069B8]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Top View - Interactive Static Image Viewer */}
      <div 
        className={`w-full aspect-video min-h-[500px] max-h-[750px] relative bg-[#08121E] rounded-2xl overflow-hidden border border-[#0069B8]/30 shadow-[0_20px_60px_rgba(8,18,30,0.18)] ${activeSubTab !== "top-view" ? "hidden" : ""}`}
        style={{ cursor: imgScale > 1 ? (dragging ? "grabbing" : "grab") : "zoom-in" }}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            transform: `translate(${imgPos.x}px, ${imgPos.y}px) scale(${imgScale})`,
            transformOrigin: "center center",
            transition: dragging ? "none" : "transform 0.2s ease-out",
          }}
        >
          <img
            src="https://pub-70eeb092c44c45ee83f856cfdd1a0fd9.r2.dev/images/360/top-view-floor-plan.png"
            alt="World AI Show | BFSI | Dubai 2027 Floor Plan - Top View"
            className="w-full h-full object-contain pointer-events-none select-none"
            draggable={false}
          />
        </div>
        
        {/* Label */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#08121E]/85 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#009EAD]/40 text-white text-[13px] font-medium tracking-wide flex items-center gap-3 pointer-events-none shadow-lg whitespace-nowrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#009EAD]">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          Top View — Floor Plan
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-6 right-6 flex gap-2 z-10">
          <button
            onClick={(e) => { e.stopPropagation(); setImgScale((s) => Math.min(5, s + 0.5)); }}
            className="w-10 h-10 rounded-full bg-[#08121E]/85 backdrop-blur-md border border-[#009EAD]/45 !text-white flex items-center justify-center hover:bg-[#F15928] hover:border-[#F15928] transition-all text-xl font-bold shadow-lg cursor-pointer"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setImgScale(1); setImgPos({ x: 0, y: 0 }); }}
            className="w-10 h-10 rounded-full bg-[#08121E]/85 backdrop-blur-md border border-[#009EAD]/45 !text-white flex items-center justify-center hover:bg-[#F15928] hover:border-[#F15928] transition-all text-sm font-bold shadow-lg cursor-pointer"
            aria-label="Reset zoom"
          >
            ⟲
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setImgScale((s) => Math.max(1, s - 0.5)); }}
            className="w-10 h-10 rounded-full bg-[#08121E]/85 backdrop-blur-md border border-[#009EAD]/45 !text-white flex items-center justify-center hover:bg-[#F15928] hover:border-[#F15928] transition-all text-xl font-bold shadow-lg cursor-pointer"
            aria-label="Zoom out"
          >
            −
          </button>
        </div>
      </div>

      {/* 360 Viewer Container */}
      <div className={`w-full aspect-video min-h-[500px] max-h-[750px] relative ${activeSubTab === "top-view" ? "hidden" : ""}`}>
        {activeSubTab === "exhibition" || activeSubTab === "top-view" ? (
          <PanoramaViewer imageUrl="https://pub-70eeb092c44c45ee83f856cfdd1a0fd9.r2.dev/images/360/exhibition.png" />
        ) : (
          <PanoramaViewer imageUrl="https://pub-70eeb092c44c45ee83f856cfdd1a0fd9.r2.dev/images/360/main-hall.png" />
        )}
      </div>
    </div>
  );
}
