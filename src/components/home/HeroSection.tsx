import Link from "next/link";
import { Monitor, Laptop, Smartphone, Tablet, Play } from "lucide-react";
import Image from "next/image";
import TopFeatureBar from "./TopFeatureBar";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden pt-20">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-custom-astronaut.webp"
          alt="Zyminex IPTV Cinematic Space Background"
          priority
          fill
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay gradient to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-start justify-center">

        {/* Top Tag */}
        <div className="inline-flex items-center border border-[#E50914] rounded-full px-4 py-1.5 bg-black/60 backdrop-blur-md mb-6">
          <span className="text-[10px] sm:text-xs font-bold text-[#E50914] tracking-widest uppercase">
            +7,500 Satisfied customers
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-[72px] lg:text-[84px] font-black tracking-tight leading-[1.05] text-white drop-shadow-2xl max-w-5xl">
          <span className="text-[#E50914]">Zyminex IPTV</span> The Best IPTV<br />
          Service Provider for<br />
          2026
        </h1>

        {/* Pricing Subheadline */}
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-white mt-8 drop-shadow-md tracking-tight">
          Get High-Quality Streaming for Just <span className="text-[#FFC107]">$4.2/Month!</span>
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium max-w-[800px] mt-6 drop-shadow-lg leading-relaxed">
          Choose from <span className="text-[#E50914] font-bold">50,000+ Live Channels</span>, +120,000 Films & Series, and 200,000+ VODs.<br className="hidden md:block" />
          Enjoy your time with excellent image quality up to 4K on <span className="text-[#E50914] font-bold">any device of your choice</span><br className="hidden md:block" />
          including Smart TV, Android Box, PC, tablet, and smartphone—anytime and anywhere.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-10 w-full sm:w-auto">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20zyminexiptv%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="group bg-[#E50914] text-white py-4 px-8 text-sm sm:text-base font-bold flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-[#B3000B] hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#E50914]/50 active:scale-95 animate-button-pulse rounded-xl"
          >
            GET 12 MONTHS — 2 MONTHS FREE <span className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
          </a>
          <a
            href="#pricing"
            className="group py-4 px-8 text-sm sm:text-base font-bold text-white bg-transparent border border-white/50 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 active:scale-95 animate-button-pulse-white rounded-xl"
          >
            <Play className="w-5 h-5 fill-current group-hover:scale-125 transition-transform duration-300" /> View Plans
          </a>
        </div>
        
        {/* Bottom Icons - spread across width */}
        <div className="flex w-full flex-wrap items-center justify-between sm:justify-around text-white/80 mt-14 mb-4">
          <div className="flex flex-col items-center gap-2 group hover:text-white transition-colors cursor-pointer">
            <Monitor className="h-6 w-6 sm:h-7 sm:w-7 stroke-[1.5]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Smart TV</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-white transition-colors cursor-pointer">
            <Laptop className="h-6 w-6 sm:h-7 sm:w-7 stroke-[1.5]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Laptop / PC</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-white transition-colors cursor-pointer">
            <Smartphone className="h-6 w-6 sm:h-7 sm:w-7 stroke-[1.5]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Android</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-white transition-colors cursor-pointer">
            <Tablet className="h-6 w-6 sm:h-7 sm:w-7 stroke-[1.5]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">IOS</span>
          </div>
        </div>

        {/* Embedded Features */}
        <TopFeatureBar />

      </div>
    </section>
  );
}
