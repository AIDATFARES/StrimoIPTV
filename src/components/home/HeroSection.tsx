import Link from "next/link";
import { Monitor, Laptop, Smartphone, Tablet, Play } from "lucide-react";
import Image from "next/image";
import TopFeatureBar from "./TopFeatureBar";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-28 pb-20">

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/step_2_generated.png"
          alt="Zyminex IPTV Cinematic Background"
          priority
          fill
          quality={85}
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#031726]/50" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">

        {/* Top Badge */}
        <div className="inline-flex items-center rounded-full px-5 py-1.5 bg-[#36a9ff] mb-8">
          <span className="text-[11px] sm:text-[13px] font-bold text-white tracking-widest uppercase flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            TOP RATED 4K STREAMING NETWORK
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-[80px] lg:text-[100px] font-black tracking-tighter leading-[1] drop-shadow-2xl max-w-5xl uppercase">
          <span className="text-[#f9ebc7]">ZYMINEX IPTV - PREMIUM</span><br />
          <span className="text-[#36a9ff]">4K STREAMING</span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="text-base sm:text-xl md:text-[22px] text-white/90 font-medium max-w-[850px] mt-8 drop-shadow-lg leading-relaxed">
          Unlock the ultimate entertainment experience with Zyminex IPTV. Stream over 50,000 live international channels, 200,000 movies on demand, and major pay-per-view sports events with ultra-stable anti-freeze server technology and instant multi-device activation.
        </p>

        {/* Secondary Subtitle */}
        <p className="text-sm sm:text-base font-bold text-[#ffc107] max-w-[700px] mt-6 leading-relaxed">
          Join thousands of cord-cutters who trust Zyminex IPTV for zero-buffering 60 FPS sports playback and affordable, multi-device subscription plans.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12 w-full sm:w-auto">
          <a
            href="#pricing"
            className="group bg-[#36a9ff] text-white py-4 px-10 text-sm sm:text-base font-bold flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-[#2196f3] hover:scale-105 rounded-full uppercase"
          >
            VIEW ZYMINEX IPTV PLANS
          </a>
          <a
            href="/channels"
            className="group py-4 px-10 text-sm sm:text-base font-bold text-[#051f33] bg-[#f9ebc7] transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#ffe39f] hover:scale-105 rounded-full uppercase"
          >
            <Play className="w-5 h-5 fill-transparent stroke-[#36a9ff] stroke-2" /> 
            <span className="text-[#36a9ff]">EXPLORE CHANNEL LINEUP</span>
          </a>
        </div>
        
        {/* Bottom Feature Bar */}
        <div className="mt-16 w-full">
          <TopFeatureBar />
        </div>

      </div>
    </section>
  );
}
