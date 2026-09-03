import HeroSection from "@/components/home/HeroSection";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

import BrandMarquee from "@/components/home/BrandMarquee";
import MovieStrips from "@/components/home/MovieStrips";
import ChannelCategories from "@/components/home/ChannelCategories";
import DeviceSupport from "@/components/home/DeviceSupport";
import ComparisonSection from "@/components/home/ComparisonSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";

export default function Home() {
  return (
    <main className="flex-col flex min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* 50,000+ Premium Live Channels Tape */}
      <div className="w-full bg-transparent pt-12 relative z-20">
        <span className="block text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">50,000+ Premium Live Channels</span>
        <BrandMarquee />
      </div>

      <ChannelCategories />

      <PricingSection />
      <MovieStrips />

      {/* Sports Tape */}
      <div className="w-full bg-transparent pt-12 pb-2 relative z-20">
        <span className="block text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">All Major Sports & Leagues Live</span>
      </div>
      <BrandMarquee
        imagesFolder="chn"
        images={[
          "imggt1.webp",
          "imggt1 (1).webp",
          "imggt1 (2).webp",
          "imggt1 (3).webp",
          "imggt1 (4).webp",
          "imggt1 (5).webp",
          "imggt1 (6).webp",
          "imggt1 (7).webp",
          "imggt1 (8).webp",
          "imggt1 (9).webp",
          "imggt1 (10).webp",
          "imggt1 (11).webp",
          "imggt1 (12).webp"
        ]}
        cardClassName="flex-shrink-0 w-[140px] h-[200px] md:w-[200px] md:h-[280px] relative rounded-xl overflow-hidden shadow-2xl border border-[#36a9ff]/20 bg-white hover:border-[#36a9ff]/50 hover:shadow-[0_0_20px_rgba(54,169,255,0.2)] transition-all duration-300 group p-4"
        imageClassName="object-contain rounded-xl drop-shadow-md"
      />

      {/* Channel & Installation Quick Links */}
      <div className="w-full bg-transparent py-6 px-4 text-center border-t border-[#36a9ff]/10 relative z-20">
        <p className="text-center text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
          Explore the complete <Link prefetch={false} className="font-semibold text-[#36a9ff] hover:text-[#2196f3] transition-colors" href="/channels">StrimoIPTV Channel List</Link> or check out our <Link prefetch={false} className="font-semibold text-[#36a9ff] hover:text-[#2196f3] transition-colors" href="/installation">StrimoIPTV Installation Guide</Link> to get your IPTV service running in minutes.
        </p>
      </div>

      {/* Device Support & How It Works */}
      <ComparisonSection />
      <DeviceSupport />

      {/* Supported Devices Banner */}
      <div className="w-full bg-transparent pt-12 pb-6 relative z-10 flex justify-center px-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Devices-1-1024x350.webp"
          alt="Supported on all your favorite devices"
          className="max-w-full h-auto w-full md:w-[1024px] object-contain drop-shadow-sm"
        />
      </div>

      <HowItWorksSection />

      {/* Info & Articles */}
      <FAQSection />

      {/* Social Proof & Conversion */}
      <SupportCtaSection />
    </main>
  );
}
