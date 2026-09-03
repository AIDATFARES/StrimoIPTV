import Link from "next/link";
import { ShieldCheck, Zap, Tv, Play, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import IPTVHeroMockup from "./IPTVHeroMockup";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-cyan-400 border border-cyan-500/20 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="uppercase tracking-widest text-[11px]">STRIMOIPTV NEXT-GEN STREAMING NETWORK</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.05] text-[#F8FAFC]">
              Premium IPTV Streaming{" "}
              <span className="bg-gradient-to-r from-[#60A5FA] via-cyan-400 to-[#A78BFA] bg-clip-text text-transparent">
                Built for Live TV
              </span>
              , Sports & Entertainment
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-[#A7B0C0] font-normal mt-6 max-w-[620px] leading-relaxed">
              Stream over 50,000 live international channels, 200,000 VOD movies, and high-bitrate live sports in ultra-crisp 4K HDR. Enjoy anti-buffer stability and instant multi-device setup.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-9 w-full sm:w-auto">
              <a
                href="#pricing"
                className="btn-primary-strimo px-8 py-4 text-sm uppercase tracking-wider font-extrabold flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Start Your IPTV Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#devices"
                className="btn-secondary-strimo px-8 py-4 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Tv className="w-4 h-4 text-[#60A5FA]" />
                <span>Supported Devices</span>
              </a>
            </div>

            {/* Trust / Benefit Points */}
            <div className="grid grid-cols-2 sm:flex items-center gap-5 mt-10 pt-8 border-t border-white/[0.08] w-full text-xs font-semibold text-[#A7B0C0]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>4K Ultra HD</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Multi-Device</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Fast Activation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>24/7 Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: Original IPTV Interface Mockup */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <IPTVHeroMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
