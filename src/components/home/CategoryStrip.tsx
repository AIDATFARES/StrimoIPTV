"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoryStrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: "SPORTS 4K", color: "bg-blue-500" },
    { name: "CINEMA & VOD", color: "bg-purple-500" },
    { name: "NEWS LIVE", color: "bg-cyan-500" },
    { name: "DOCUMENTARIES", color: "bg-blue-400" },
    { name: "KIDS & FAMILY", color: "bg-purple-400" },
    { name: "MUSIC CHANNELS", color: "bg-cyan-400" },
    { name: "INTERNATIONAL TV", color: "bg-blue-600" },
    { name: "LIFESTYLE", color: "bg-purple-600" },
    { name: "PPV EVENTS", color: "bg-red-500" },
    { name: "4K ULTRA HD", color: "bg-[#06B6D4]" },
    { name: "SERIES & SHOWS", color: "bg-indigo-500" },
  ];

  // Duplicate categories to create a seamless infinite marquee scroll
  const duplicatedCategories = [...categories, ...categories, ...categories];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-6 border-y border-white/[0.08] bg-[#080B14]/80 backdrop-blur-md relative group">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative flex items-center">
        
        {/* Left Arrow Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 z-20 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#0D111B]/90 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all shadow-lg backdrop-blur-sm opacity-80 hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scrollable Container with Marquee Animation */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto no-scrollbar py-1 scroll-smooth"
        >
          <div className="flex items-center gap-3 w-max animate-marquee-infinite hover:[animation-play-state:paused]">
            {duplicatedCategories.map((cat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-black tracking-wider text-[#A7B0C0] hover:text-white hover:border-cyan-400/50 hover:bg-white/5 transition-all cursor-pointer whitespace-nowrap shrink-0 border border-white/10 bg-[#0D111B]/80 shadow-sm"
              >
                <span className={`w-2 h-2 rounded-full ${cat.color} shadow-[0_0_8px_rgba(6,182,212,0.6)]`} />
                <span>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 z-20 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#0D111B]/90 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all shadow-lg backdrop-blur-sm opacity-80 hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
