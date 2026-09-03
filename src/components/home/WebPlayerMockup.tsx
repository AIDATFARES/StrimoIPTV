"use client";

import { useState } from "react";
import { Search, Star, Play, Volume2, Sliders } from "lucide-react";

export default function WebPlayerMockup() {
  const [selectedCategory, setSelectedCategory] = useState("Sports 4K");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Sports 4K", "Cinema", "News", "Kids"];

  const channels = [
    { id: 1, name: "Sky Sports Main Event 4K", category: "Sports 4K", nowPlaying: "Premier League Live", isFav: true, status: "4K 60FPS" },
    { id: 2, name: "TNT Sports 1 HD", category: "Sports 4K", nowPlaying: "UEFA Champions League", isFav: true, status: "FHD" },
    { id: 3, name: "BeIN Sports 1 Premium", category: "Sports 4K", nowPlaying: "La Liga Matchday", isFav: false, status: "4K" },
    { id: 4, name: "HBO Ultra Movies", category: "Cinema", nowPlaying: "Oppenheimer (2023)", isFav: false, status: "4K HDR" },
    { id: 5, name: "Discovery Science HD", category: "News", nowPlaying: "How It's Made 2026", isFav: true, status: "FHD" },
  ];

  return (
    <div className="relative w-full max-w-[720px] mx-auto group">
      {/* Outer Neon Cyan & Purple Ambient Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-600/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* Browser Player Outer Frame */}
      <div className="relative bg-[#0D111B] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Browser Top Navigation Bar */}
        <div className="bg-[#080B14] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3 w-full max-w-[340px]">
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            {/* Fake URL Bar */}
            <div className="w-full bg-[#111621] px-3 py-1 rounded-md text-[11px] font-mono text-[#667085] flex items-center gap-1.5 border border-white/5 truncate">
              <span className="text-emerald-400 text-[10px]">https://</span>web.strimoiptv.com/player
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              WEB APP v3.0
            </span>
          </div>
        </div>

        {/* Browser Player Grid Layout */}
        <div className="grid grid-cols-12 min-h-[360px] bg-[#060810]">
          
          {/* Left Channel & Category Sidebar */}
          <div className="col-span-5 border-r border-white/[0.08] p-3 bg-[#080B14] flex flex-col justify-between">
            <div>
              {/* Search Bar */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#667085]" />
                <input
                  type="text"
                  placeholder="Search 50,000+ channels..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#111621] text-xs text-white placeholder-[#667085] pl-8 pr-2 py-1.5 rounded-md border border-white/5 focus:outline-none focus:border-cyan-500/40"
                />
              </div>

              {/* Categories Pills */}
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar mb-3 pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap transition-colors shrink-0 ${
                      selectedCategory === cat
                        ? "bg-cyan-500 text-black font-black"
                        : "bg-[#111621] text-[#A7B0C0] hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Channel List */}
              <div className="space-y-1.5">
                {channels.map((ch) => (
                  <div
                    key={ch.id}
                    className={`p-2 rounded-lg text-left transition-all border flex items-center justify-between cursor-pointer ${
                      ch.id === 1
                        ? "bg-[#111621] border-cyan-500/40 text-white shadow-sm"
                        : "bg-[#0D111B]/40 border-white/[0.03] text-[#A7B0C0] hover:border-white/10"
                    }`}
                  >
                    <div className="truncate pr-1">
                      <div className="text-[11px] font-bold text-white flex items-center gap-1 truncate">
                        {ch.isFav && <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400 shrink-0" />}
                        {ch.name}
                      </div>
                      <div className="text-[9px] text-[#667085] truncate">{ch.nowPlaying}</div>
                    </div>
                    <span className="text-[8px] font-extrabold bg-cyan-500/10 text-cyan-400 px-1.5 py-0.5 rounded shrink-0">
                      {ch.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-[#667085]">
              <span>EPG Connected</span>
              <span className="text-emerald-400 font-bold">0ms Delay</span>
            </div>
          </div>

          {/* Right Main Video Viewport */}
          <div className="col-span-7 p-3 flex flex-col justify-between bg-[#0D111B] relative">
            {/* Screen Header */}
            <div className="flex items-center justify-between text-xs mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="font-extrabold text-white text-xs">Sky Sports Main Event 4K</span>
              </div>
              <span className="text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded font-bold">
                HEVC H.265
              </span>
            </div>

            {/* Video Canvas Area */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-white/10 flex items-center justify-center group/screen">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-10" />
              
              <div className="relative z-20 text-center">
                <div className="w-10 h-10 rounded-full bg-cyan-400 text-black flex items-center justify-center mx-auto mb-2 shadow-[0_0_15px_rgba(6,182,212,0.6)] cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-black translate-x-[1px]" />
                </div>
                <div className="text-xs font-black text-white">Stream Active · 4K 60FPS</div>
                <div className="text-[10px] text-cyan-400 font-medium">Bitrate: 25.4 Mbps (Zero Lag)</div>
              </div>

              {/* Bottom Video Controls Overlay */}
              <div className="absolute bottom-2 left-2 right-2 z-20 flex items-center justify-between text-[10px] text-gray-300">
                <div className="flex items-center gap-2">
                  <Play className="w-3 h-3 fill-current text-cyan-400" />
                  <span>02:14:45 / LIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-3.5 h-3.5 text-gray-400" />
                  <Sliders className="w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* EPG Timeline Footer */}
            <div className="mt-3 bg-[#080B14] p-2 rounded-lg border border-white/5 text-[10px]">
              <div className="text-[#667085] font-semibold mb-1">PROGRAM GUIDE (EPG)</div>
              <div className="flex items-center justify-between text-white font-medium">
                <span>15:00 - Premier League Build-up</span>
                <span className="text-cyan-400 font-bold">NOW</span>
              </div>
              <div className="w-full bg-[#111621] h-1.5 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[65%]" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
