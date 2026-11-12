"use client";

import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import * as htmlToImage from "html-to-image";

type Speaker = {
  name: string;
  designation: string;
  organisation: string;
  role: string;
};

type Session = {
  id: number;
  dayKey: string;
  startTime: string;
  endTime: string;
  title: string;
  typeTitle: string;
  speakers: Speaker[];
};

export default function AgendaDisplayPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [days, setDays] = useState<{ key: string; label: string }[]>([]);
  const [activeDayKey, setActiveDayKey] = useState<string>("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [columns, setColumns] = useState<Session[][]>([[], [], [], []]);
  const [isMeasured, setIsMeasured] = useState(false);
  const [scale, setScale] = useState(1);
  const measureRef = useRef<HTMLDivElement>(null);

  const activeSessions = sessions.filter(s => s.dayKey === activeDayKey);
  const dayIndex = days.findIndex(d => d.key === activeDayKey) + 1;

  useEffect(() => {
    if (!sessions.length) return;
    setIsMeasured(false); 
  }, [activeDayKey, sessions.length]);

  useEffect(() => {
    const handleResize = () => {
      const availableW = window.innerWidth;
      const availableH = isFullscreen ? window.innerHeight : window.innerHeight - 80;
      
      const scaleW = availableW / 1920;
      const scaleH = availableH / 1080;
      setScale(Math.min(scaleW, scaleH));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isFullscreen]);

  useEffect(() => {
    if (!isMeasured && measureRef.current && activeSessions.length > 0) {
      document.fonts.ready.then(() => {
        if (!measureRef.current) return;
        const children = Array.from(measureRef.current.children) as HTMLElement[];
        const heights = children.map(c => c.offsetHeight);
        
        const cols: Session[][] = [[], [], [], []];
        let currentHeight = 0;
        let colIndex = 0;
        
        const numCols = 4;
        const MAX_PHYSICAL_HEIGHT = 810;
        const totalH = heights.reduce((a, b) => a + b, 0);
        
        // Add a strong padding to the total to intentionally over-weigh the target height,
        // which forces the engine to pack the left columns tighter and fill empty gaps
        const TARGET_HEIGHT = Math.min(Math.ceil((totalH + 400) / numCols), MAX_PHYSICAL_HEIGHT);
        
        activeSessions.forEach((session, i) => {
          const h = heights[i];
          
          if (dayIndex === 1) {
            // Perfect manual chunking for Day 1
            if (session.startTime === "10:55 AM") colIndex = 1;
            if (session.startTime === "12:40 PM") colIndex = 2;
            if (session.startTime === "2:40 PM") colIndex = 3;
          } else if (dayIndex === 2) {
            // Perfect manual chunking for Day 2
            if (session.startTime === "11:30 AM") colIndex = 1;
            if (session.startTime === "1:10 PM") colIndex = 2;
            if (session.startTime === "3:10 PM") colIndex = 3;
          } else {
            // For other days, just use the math heuristic
            if (colIndex < 3 && cols[colIndex].length > 0 && 
               (currentHeight + (h * 0.5) >= TARGET_HEIGHT || currentHeight + h > MAX_PHYSICAL_HEIGHT)) {
              colIndex++;
              currentHeight = 0;
            }
          }
          
          cols[colIndex].push(session);
          currentHeight += h;
        });
        
        setColumns(cols);
        setIsMeasured(true);
      });
    }
  }, [isMeasured, activeDayKey, sessions.length]);

  useEffect(() => {
    const fetchAgenda = () => {
      fetch("/banking/api/konfhub-agenda.json")
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => {
          if (data.sessions) {
            setSessions(data.sessions);
            if (data.days && data.days.length > 0) {
              setDays(data.days);
              setActiveDayKey(prev => prev || data.days[0].key);
            }
          }
        })
        .catch((err) => console.error("Error fetching agenda:", err));
    };

    // Initial fetch
    fetchAgenda();

    // Auto-refresh every 5 minutes for unattended TV displays
    const interval = setInterval(fetchAgenda, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleDownload8K = async () => {
    const element = document.getElementById("agenda-display-container");
    if (!element) return;
    
    setIsDownloading(true);
    await new Promise(r => setTimeout(r, 100));
    
    try {
      const dataUrl = await htmlToImage.toJpeg(element, { 
        quality: 1.0, 
        width: 7680, 
        height: 4320,
        style: {
          transform: 'scale(4)',
          transformOrigin: 'top left',
          position: 'fixed',
          top: '0',
          left: '0',
          width: '1920px',
          height: '1080px',
          margin: '0',
          padding: '0'
        }
      });
      const link = document.createElement("a");
      link.download = "Agenda-8K-" + activeDayKey + ".jpg";
      link.href = dataUrl;
      link.click();
    } catch (err: any) {
      alert("Download Error: " + (err.message || err));
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownload16K = async () => {
    const element = document.getElementById("agenda-display-container");
    if (!element) return;
    
    setIsDownloading(true);
    await new Promise(r => setTimeout(r, 100));
    
    try {
      const dataUrl = await htmlToImage.toJpeg(element, { 
        quality: 1.0, 
        width: 15360, 
        height: 8640, 
        style: {
          transform: 'scale(8)',
          transformOrigin: 'top left',
          position: 'fixed',
          top: '0',
          left: '0',
          width: '1920px',
          height: '1080px',
          margin: '0',
          padding: '0'
        }
      });
      const link = document.createElement("a");
      link.download = "Agenda-16K-" + activeDayKey + ".jpg";
      link.href = dataUrl;
      link.click();
    } catch (err: any) {
      alert("Download Error: " + (err.message || err));
    } finally {
      setIsDownloading(false);
    }
  };

  const renderSession = (session: Session) => (
    <div key={session.id} className="border-b border-gray-200 flex flex-col w-full break-inside-avoid" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
      <div className="flex items-center flex-wrap gap-2 mb-1">
        <div className="text-[16px] font-extrabold text-[#334155] uppercase tracking-tight">
          {session.startTime} – {session.endTime}
        </div>
        {session.typeTitle && (
          <div className="text-[14px] font-bold text-[#0069B8] uppercase tracking-wider ml-1">
            • {session.typeTitle}
          </div>
        )}
      </div>
      <div className="text-[18px] font-extrabold text-[#08121E] leading-tight mb-1 pr-2">
        {session.title}
      </div>
      {session.speakers && session.speakers.length > 0 && (
        <div className="flex flex-col gap-1">
          {session.speakers.map((spk, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="flex flex-col">
                {spk.role === "MODERATOR" && (
                  <div className="text-[12px] font-extrabold text-[#F15928] uppercase tracking-wider mb-0.5 leading-none">
                    MODERATOR
                  </div>
                )}
                <div className="text-[16px] font-bold text-[#08121E] leading-none mb-0.5">{spk.name}</div>
                <div className="text-[14px] font-medium text-[#52657A] leading-tight">
                  {spk.designation}{spk.designation && spk.organisation ? ", " : ""}{spk.organisation}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div 
      className={`min-h-screen bg-[#08121E] font-sans flex flex-col ${!isFullscreen && !isDownloading ? 'pt-[80px]' : ''}`}
    >
      <Head>
        <title>Agenda TV Display</title>
      </Head>

      {!isFullscreen && !isDownloading && (
        <div className="fixed top-0 left-0 right-0 p-4 bg-[#08121E]/92 border-b border-[#0069B8]/40 backdrop-blur-md z-50 flex items-center justify-center gap-6 text-white shadow-xl">
          <div className="flex gap-2">
            {days.map((day, idx) => (
              <button
                key={day.key}
                onClick={() => setActiveDayKey(day.key)}
                className={`px-5 py-2 rounded-full font-bold transition-all cursor-pointer ${
                  activeDayKey === day.key
                    ? "bg-[#0069B8] text-white shadow-lg"
                    : "bg-[#0D1B2E] border border-[#0069B8]/30 hover:border-[#009EAD]"
                }`}
              >
                Day {idx + 1}
              </button>
            ))}
          </div>

          <div className="h-8 w-px bg-[#0069B8]/40 mx-2"></div>

          <button onClick={handleDownload8K} className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold bg-[#009EAD] hover:bg-[#007f8b] text-white transition-all cursor-pointer">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download 8K
          </button>
          <button onClick={handleDownload16K} className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold bg-[#F15928] hover:bg-[#D94B1E] text-white transition-all cursor-pointer">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download 16K
          </button>
          
          <button 
            onClick={() => document.documentElement.requestFullscreen()} 
            className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold bg-[#0D1B2E] border border-[#0069B8]/50 hover:border-[#009EAD] transition-all ml-4 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
            TV Fullscreen
          </button>
        </div>
      )}

      <div className="flex-1 w-full flex items-center justify-center bg-[#08121E] overflow-hidden relative">
        <div
          id="agenda-display-container"
          style={isDownloading ? undefined : {
            width: '1920px',
            height: '1080px',
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            position: 'absolute'
          }}
          className={`bg-white text-[#08121E] flex flex-col shrink-0 ${isDownloading ? 'fixed top-0 left-0 w-[1920px] h-[1080px] z-[-9999]' : ''}`}
        >
          <div className="w-[1920px] h-[140px] bg-[#08121E] flex items-center justify-between px-10 border-b-4 border-[#0069B8] shrink-0">
            <img src="/banking/images/brand/logo-white.svg" alt="World AI Show — Dubai 2027" className="h-[75px]" />
            <div className="font-heading absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[44px] font-bold text-white tracking-tight">
              Conference Agenda – Day {dayIndex || 1}
            </div>
            <img src="/banking/logos/Trescon-org.svg" alt="Trescon" className="h-[60px] opacity-90" />
          </div>

          <div className="w-[1920px] h-[940px] bg-[#F7F9FC] px-[60px] pt-[30px] pb-[80px] overflow-hidden relative">
            {!isMeasured && (
              <div ref={measureRef} className="absolute opacity-0 pointer-events-none" style={{ width: '420px' }}>
                {activeSessions.map(renderSession)}
              </div>
            )}

            {isMeasured && (
              <div className="flex gap-[40px] w-full h-full">
                {columns.map((col, i) => {
                  if (col.length === 0) return null;
                  const isLast = i === columns.findIndex(c => c.length === 0) - 1 || (i === 3);
                  return (
                    <div key={i} className={`flex-1 flex flex-col relative ${!isLast ? 'pr-4 border-r border-gray-100' : ''}`}>
                      {col.map(renderSession)}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
