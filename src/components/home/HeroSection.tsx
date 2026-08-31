import Link from "next/link";
import { Monitor, Laptop, Smartphone, Tablet, Play } from "lucide-react";
import Image from "next/image";
import TopFeatureBar from "./TopFeatureBar";

export default function HeroSection() {
  return (
    <>
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-28 pb-20">

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg-stadium.jfif"
          alt="Realm IPTV Cinematic Background"
          priority
          fill
          quality={100}
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        {/* White Fog Gradient to seamlessly blend into TopFeatureBar */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">

        {/* Top Badge */}
        <div className="inline-flex items-center rounded-full px-5 py-1.5 bg-[#36a9ff] mb-8">
          <span className="text-[11px] sm:text-[13px] font-bold text-black tracking-widest uppercase flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            TOP RATED 4K STREAMING NETWORK
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-[80px] lg:text-[100px] font-black tracking-tighter leading-[1] drop-shadow-2xl max-w-5xl">
          <span className="text-[#00dfff]">Real</span><span className="text-[#00f2da]">MIPTV</span>
          <span className="text-[#f9ebc7] uppercase"> - PREMIUM</span><br />
          <span className="text-[#36a9ff] uppercase">4K STREAMING</span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="text-base sm:text-xl md:text-[22px] text-white/90 font-medium max-w-[850px] mt-8 drop-shadow-lg leading-relaxed">
          Unlock the ultimate entertainment experience with RealMIPTV. Enjoy over 50,000 live TV channels, 200,000 VOD movies, and exclusive pay-per-view sports events. Powered by ultra-stable, anti-freeze servers for seamless 4K viewing on any device.
        </p>

        {/* Secondary Subtitle */}
        <p className="text-sm sm:text-base font-bold text-white max-w-[700px] mt-6 leading-relaxed">
          Join thousands of satisfied cord-cutters who trust the RealMIPTV service for zero-buffering, 60 FPS live sports, and affordable IPTV subscription plans.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12 w-full sm:w-auto">
          <a
            href="#pricing"
            className="animate-gentle-bounce group bg-[#00e5ff] text-black py-4 px-10 text-sm sm:text-base font-extrabold flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:bg-[#00b8cc] hover:scale-105 rounded-full uppercase tracking-wider"
          >
            VIEW PLANS & PRICING
          </a>
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20realmiptv%20IPTV."
            target="_blank"
            rel="noreferrer"
            style={{ animationDelay: '1.5s' }}
            className="animate-gentle-bounce group py-4 px-10 text-sm sm:text-base font-extrabold text-white bg-[#25D366] transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#20bd5a] shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-105 rounded-full"
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
    
    {/* Full-width white section for TopFeatureBar to connect with the content below */}
    <section className="w-full bg-white relative z-20 py-8 border-b border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <TopFeatureBar />
      </div>
    </section>
    </>
  );
}
