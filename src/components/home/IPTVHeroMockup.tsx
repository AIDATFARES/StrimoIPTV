"use client";

import Image from "next/image";
import { Play, Tv, Shield, Zap, Search, Radio, Film, Trophy, Circle, Volume2, Maximize2, Settings } from "lucide-react";
import { useState } from "react";

export default function IPTVHeroMockup() {
  const [activeCategory, setActiveCategory] = useState("Sports 4K");

  const channels = [
    { name: "ESPN 1 Ultra 4K", category: "Sports 4K", epg: "Live: Premier League Matchday", quality: "4K 60FPS", icon: "⚽" },
    { name: "Sky Sports Main Event", category: "Sports 4K", epg: "Live: Champions League Night", quality: "UHD", icon: "🏆" },
    { name: "TNT Sports 1 HD", category: "Sports 4K", epg: "Live: UEFA Europa Matchday", quality: "1080p", icon: "🥊" },
    { name: "HBO Cinema 4K", category: "Movies", epg: "Movie: Dune - Part Two (2024)", quality: "4K HDR", icon: "🎬" },
    { name: "Canal+ Sport FR", category: "Sports 4K", epg: "Direct: Ligue 1 Uber Eats", quality: "4K", icon: "⚽" },
  ];

  return (
    <div className="relative w-full max-w-[620px] mx-auto group">
      {/* Outer Glow Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/40 via-cyan-500/30 to-purple-600/40 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none" />

      {/* Main Interface Window */}
      <div className="relative bg-[#0D111B] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Top Window Header Bar */}
        <div className="bg-[#080B14] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-[#667085]">STRIMO-TV-PLAYER v4.2</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Circle className="w-1.5 h-1.5 fill-emerald-400 animate-pulse" /> LIVE 4K SERVER
            </span>
            <div className="text-xs font-semibold text-cyan-400">99.9% UPTIME</div>
          </div>
        </div>

        {/* Video Player Display Screen */}
        <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
          {/* Real Screen Image */}
          <Image
            src="/hero-player-screen.webp"
            alt="StrimoIPTV Live Broadcast Stream"
            fill
            className="object-cover object-center brightness-95 group-hover:scale-105 transition-transform duration-700"
            priority
          />

          {/* Simulated Video Frame Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D111B] via-transparent to-black/30 z-10 pointer-events-none" />
          
          {/* Screen Content Badge */}
          <div className="absolute top-3 left-3 z-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-md uppercase tracking-wider shadow-lg">
              <Circle className="w-2 h-2 fill-white animate-ping" /> LIVE MATCH 60FPS
            </div>
          </div>

          {/* On-Screen EPG Bar */}
          <div className="absolute bottom-3 left-3 right-3 z-20 bg-[#0D111B]/90 backdrop-blur-md p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-400 font-bold text-xs">
                ⚽
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  ESPN 1 ULTRA 4K
                  <span className="text-[9px] bg-blue-500/20 text-blue-300 border border-blue-400/20 px-1.5 rounded">60 FPS</span>
                </div>
                <div className="text-[11px] text-[#A7B0C0] truncate max-w-[200px] sm:max-w-[280px]">
                  Next: Post-Match Analysis &amp; Highlights
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Volume2 className="w-4 h-4 text-cyan-400" />
              <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* EPG / Channel Selector List */}
        <div className="p-3 bg-[#080B14]">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7B0C0]">EPG TV GUIDE &amp; LIVE CHANNELS</span>
            <span className="text-[11px] text-cyan-400 font-semibold cursor-pointer">View All 50,000+</span>
          </div>

          <div className="space-y-1.5">
            {channels.slice(0, 3).map((ch, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-lg border transition-all flex items-center justify-between text-xs ${
                  idx === 0
                    ? "bg-[#111621] border-cyan-500/30 text-white"
                    : "bg-[#0D111B]/60 border-white/[0.04] text-[#A7B0C0] hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{ch.icon}</span>
                  <div>
                    <div className="font-bold text-white text-xs">{ch.name}</div>
                    <div className="text-[10px] text-[#667085]">{ch.epg}</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {ch.quality}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
