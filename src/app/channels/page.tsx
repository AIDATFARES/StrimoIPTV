"use client";

import { 
  Baby, 
  Check, 
  Film, 
  Globe2, 
  Layers3, 
  Monitor, 
  Newspaper, 
  Trophy, 
  Radio,
  CirclePlay
} from "lucide-react";
import Link from "next/link";
import BrandMarquee from "@/components/home/BrandMarquee";
import ChannelListExplorer from "@/components/channels/ChannelListExplorer";

const categoryCards = [
  {
    icon: Trophy,
    title: "Sports Channels",
    items: [
      "Football, basketball, UFC, boxing, F1, and more",
      "HD/FHD and 4K 60FPS streams available",
      "Sky Sports, TNT, BeIN, ESPN, DAZN & PPV"
    ],
    count: "12,500+ Channels",
    tag: "MOST POPULAR"
  },
  {
    icon: Film,
    title: "Movie & VOD Content",
    items: [
      "Premium movie networks & cinema channels",
      "Curated 4K VOD library updated daily",
      "HBO, Cinemax, Sky Cinema, Starz & VOD"
    ],
    count: "200,000+ VODs"
  },
  {
    icon: Newspaper,
    title: "News Channels",
    items: [
      "Global, national and regional news networks",
      "24/7 breaking news and special live coverage",
      "BBC News, CNN, Sky News, Fox, CNBC, Bloomberg"
    ],
    count: "3,200+ Channels"
  },
  {
    icon: Baby,
    title: "Kids & Family",
    items: [
      "Cartoons, learning & family entertainment",
      "Dedicated child-friendly programming",
      "Disney, Cartoon Network, Nickelodeon, Boomerang"
    ],
    count: "2,800+ Channels"
  },
  {
    icon: Monitor,
    title: "Entertainment",
    items: [
      "Reality TV, variety, music, lifestyle & drama",
      "Popular everyday cable and satellite networks",
      "US, UK, Canadian & European top entertainment"
    ],
    count: "15,000+ Channels"
  },
  {
    icon: Globe2,
    title: "International",
    items: [
      "150+ country packages & regional channels",
      "Local sports, news, culture & native audio",
      "Europe, Americas, MENA, Asia & Africa"
    ],
    count: "+50,000 Channels"
  },
  {
    icon: Layers3,
    title: "Series & Shows",
    items: [
      "Latest released seasons with daily updates",
      "Complete boxsets, timeless classics & VOD",
      "Netflix, Amazon, Apple TV+, HBO Max & Disney+"
    ],
    count: "+120,000 Films & Series"
  }
];

export default function ChannelsPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Header Banner */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-6">
            <Radio className="w-3.5 h-3.5 mr-2 text-cyan-400 animate-pulse inline" />
            <span>50,000+ LIVE CHANNELS · 200,000+ VOD MOVIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#F8FAFC]">
            StrimoIPTV <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Live Channels &amp; VOD Lineup</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-[#A7B0C0] leading-relaxed">
            Browse our complete channel lineup featuring live sports, movies, news, entertainment, and on-demand series in 4K &amp; HD quality from over 150+ countries.
          </p>
        </div>

        {/* Category Cards Grid */}
        <section className="mb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="strimo-card p-6 rounded-2xl flex flex-col justify-between relative group"
                >
                  {category.tag && (
                    <span className="absolute right-4 top-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-cyan-400">
                      {category.tag}
                    </span>
                  )}

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h2 className="text-xl font-bold text-[#F8FAFC] tracking-wide mb-4">
                      {category.title}
                    </h2>

                    <ul className="w-full space-y-2.5 mb-6">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#A7B0C0] leading-tight">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#667085]">Total Available</span>
                    <span className="text-xs font-bold text-cyan-400">{category.count}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Interactive Channel Explorer */}
        <ChannelListExplorer />

        {/* Marquee Strip */}
        <section className="mb-16 rounded-2xl overflow-hidden border border-white/5">
          <BrandMarquee />
        </section>

        {/* Bottom CTA */}
        <section className="strimo-card p-8 sm:p-12 text-center rounded-3xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <CirclePlay className="w-10 h-10 text-cyan-400 mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-black text-[#F8FAFC]">Ready to start watching?</h2>
            <p className="mt-3 text-[#A7B0C0] text-sm sm:text-base leading-relaxed">
              Choose your subscription plan to receive instant activation credentials via email and WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="btn-primary-strimo px-8 py-3.5 text-xs uppercase tracking-wider font-extrabold"
              >
                View Subscription Plans
              </Link>
              <a
                href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20StrimoIPTV."
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-strimo px-8 py-3.5 text-xs uppercase tracking-wider font-semibold"
              >
                Get Free Trial via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
