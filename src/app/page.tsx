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
        imagesFolder="sports_new"
        images={[
          "Realm-sports-01.webp",
          "Realm-sports-02.webp",
          "imggt1 (1).webp",
          "imggt1 (2).webp",
          "imggt1 (3).webp",
          "imggt1 (4).webp",
          "imggt1 (5).webp",
          "imggt1 (6).webp",
          "imggt1 (7).webp",
          "imggt1 (8).webp",
          "imggt1.webp"
        ]}
        cardClassName="flex-shrink-0 w-[140px] h-[200px] md:w-[200px] md:h-[280px] relative rounded-xl overflow-hidden shadow-2xl border border-[#36a9ff]/20 bg-[#051f33]/80 hover:border-[#36a9ff]/50 hover:shadow-[0_0_20px_rgba(54,169,255,0.2)] transition-all duration-300 group"
        imageClassName="object-cover rounded-xl"
      />

      {/* Channel & Installation Quick Links */}
      <div className="w-full bg-transparent py-6 px-4 text-center border-t border-[#36a9ff]/10 relative z-20">
        <p className="text-center text-sm md:text-base text-gray-400 max-w-3xl mx-auto">
          Find the comprehensive <Link prefetch={false} className="font-semibold text-[#36a9ff] hover:text-[#2196f3] transition-colors" href="/channels">Realm IPTV Channel List</Link> or navigate to our <Link prefetch={false} className="font-semibold text-[#36a9ff] hover:text-[#2196f3] transition-colors" href="/installation">Realm IPTV Installation Guide</Link> for a quick start.
        </p>
      </div>

      {/* Device Support & How It Works */}
      <ComparisonSection />
      <DeviceSupport />

      {/* Device Logos Marquee */}
      <div className="w-full bg-transparent border-t border-[#36a9ff]/10 pt-12 pb-6 relative z-10">
        <span className="block text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">Supported on all your favorite devices</span>
        <BrandMarquee
          imagesFolder="devices"
          images={[
            "Amazon-Fire-tv-stick-krooz-tv.webp",
            "Apple-TV-krooz-tv.webp",
            "hisense-krooz-tv.webp",
            "iptv-smarter-krooz-tv.webp",
            "LG-smart-krooz-tv.webp",
            "Shield-krooz-tv.webp",
            "Smart-android-tv-krooz-tv.webp",
            "sony-select-krooz-tv.webp",
            "Tv-media-boxs-krooz-tv.webp",
            "Windows-krooz-tv.webp",
            "xbox-live-krooz-tv.webp"
          ]}
          cardClassName="flex-shrink-0 w-[160px] h-[80px] md:w-[220px] md:h-[100px] relative bg-white border border-[#36a9ff]/20 rounded-2xl p-4 md:p-6 hover:border-[#36a9ff]/50 hover:shadow-[0_0_20px_rgba(54,169,255,0.2)] transition-all duration-300 shadow-sm flex items-center justify-center"
          imageClassName="object-contain drop-shadow-sm"
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
