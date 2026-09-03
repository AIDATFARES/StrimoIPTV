import Link from "next/link";
import { Monitor, Laptop, Smartphone, Tablet, Play, Zap, Shield, Tv } from "lucide-react";
import Image from "next/image";
import TopFeatureBar from "./TopFeatureBar";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex items-center bg-[#050b14] overflow-hidden pt-28 pb-20">

        {/* Dynamic Glowing Background Effects */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg-stadium.jpg"
            alt="Strimo IPTV Cinematic Background"
            priority
            fill
            quality={100}
            sizes="100vw"
            className="object-cover opacity-40 mix-blend-luminosity"
          />
          {/* Radial Neon Gradient Overlays */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-indigo-600/20 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[#050b14]/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-gradient-to-r from-cyan-500/15 via-sky-500/15 to-indigo-500/15 border border-cyan-400/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-[11px] sm:text-[13px] font-extrabold text-cyan-300 tracking-widest uppercase">
              STRIMOIPTV NEXT-GEN 4K STREAMING NETWORK 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-[84px] lg:text-[104px] font-black tracking-tighter leading-[0.95] drop-shadow-2xl max-w-5xl">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">STRIMO</span>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">IPTV</span>
            <br />
            <span className="text-white/90 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mt-2 block">
              ULTRA 4K ENTERTAINMENT
            </span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-base sm:text-xl md:text-[22px] text-gray-300 font-medium max-w-[880px] mt-8 drop-shadow-lg leading-relaxed">
            Unlock the ultimate entertainment experience with <strong className="text-cyan-400 font-bold">StrimoIPTV</strong>. Stream over 50,000 live international TV channels, 200,000 VOD movies, and high-bitrate live sports in 60 FPS with zero buffering.
          </p>

          {/* Secondary Subtitle */}
          <p className="text-sm sm:text-base font-semibold text-gray-400 max-w-[720px] mt-5 leading-relaxed">
            Trusted by thousands worldwide for ultra-stable servers, instant multi-device activation, and 24/7 dedicated customer support.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12 w-full sm:w-auto">
            <a
              href="#pricing"
              className="group bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white font-extrabold py-4 px-10 text-sm sm:text-base flex items-center justify-center transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-105 rounded-full uppercase tracking-wider gap-2"
            >
              <Tv className="w-5 h-5 text-cyan-200" />
              VIEW PLANS & PRICING
            </a>
            <a
              href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20StrimoIPTV."
              target="_blank"
              rel="noreferrer"
              className="group py-4 px-10 text-sm sm:text-base font-extrabold text-white bg-[#25D366] transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#20bd5a] shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] hover:scale-105 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.19 1.87 5.82L3 22l4.28-.86A9.957 9.957 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.46 14.5c-.24.68-1.4 1.25-1.93 1.32-.48.06-1.12.13-3.19-.73-2.49-1.03-4.1-3.6-4.26-3.81-.16-.21-1.02-1.36-1.02-2.59 0-1.23.64-1.84.87-2.09.21-.24.47-.3.62-.3.16 0 .31 0 .44.02.15.02.35-.06.54.4.24.58.68 1.66.74 1.78.06.12.11.26.03.41-.08.15-.12.24-.24.38-.11.13-.24.29-.33.4-.11.11-.23.24-.1.46.12.21.54.89 1.15 1.44.78.71 1.45.93 1.66 1.03.21.11.34.09.47-.06.13-.15.56-.65.71-.88.16-.22.31-.19.5-.12.19.07 1.2.56 1.41.67.21.11.35.16.4.25.06.1.06.56-.18 1.24z" clipRule="evenodd" />
              </svg>
              Get Your Free Trial Now
            </a>
          </div>

        </div>
      </section>
      
      {/* TopFeatureBar section */}
      <section className="w-full bg-white relative z-20 py-8 border-b border-black/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <TopFeatureBar />
        </div>
      </section>
    </>
  );
}
