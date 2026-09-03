import { Laptop, Play, CheckCircle2, ArrowRight } from "lucide-react";
import WebPlayerMockup from "./WebPlayerMockup";

export default function WebPlayerSection() {
  return (
    <section className="py-24 relative z-10 border-t border-white/[0.06] bg-[#080B14]/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Copy */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
              <Laptop className="w-3.5 h-3.5" />
              <span>WEB PLAYER</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC] leading-tight">
              Watch Anywhere directly from your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Browser</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A7B0C0] mt-5 leading-relaxed">
              No downloads or app installations required. Simply log into our browser-based web player to access all 50,000+ live channels, EPG guide, and VOD cinema library instantly on any PC or Mac.
            </p>

            <div className="space-y-3 mt-7 text-sm text-[#F8FAFC] font-medium">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Zero app installation required</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Integrated EPG program schedule & channel search</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Adaptive HLS/HEVC 4K video player</span>
              </div>
            </div>

            <div className="mt-9">
              <a
                href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20test%20the%20StrimoIPTV%20Web%20Player."
                target="_blank"
                rel="noreferrer"
                className="btn-primary-strimo px-8 py-3.5 text-xs uppercase tracking-wider font-extrabold flex items-center gap-2"
              >
                <span>Launch Web Player</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Web Player Mockup */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <WebPlayerMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
