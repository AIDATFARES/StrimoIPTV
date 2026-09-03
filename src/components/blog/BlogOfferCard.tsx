import { Gift, ArrowRight, CheckCircle2 } from "lucide-react";

export default function BlogOfferCard() {
  return (
    <div className="w-full bg-gradient-to-br from-[#0D111B] via-[#111625] to-[#0D111B] rounded-2xl p-6 md:p-8 my-10 border border-[#25D366]/30 relative overflow-hidden group shadow-[0_0_30px_rgba(37,211,102,0.1)] hover:shadow-[0_0_40px_rgba(37,211,102,0.2)] transition-all duration-300">
      {/* Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/10 via-transparent to-[#38BDF8]/10 opacity-60 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#25D366]/20 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-[#38BDF8]/15 blur-[90px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex-1">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#25D366]/15 text-[#25D366] text-xs font-extrabold uppercase tracking-wider border border-[#25D366]/40 shadow-[0_0_15px_rgba(37,211,102,0.25)]">
              <Gift className="w-3.5 h-3.5" />
              24-Hour Free Trial
            </span>
          </div>
          
          {/* Headline */}
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
            Get Your Strimo IPTV <span className="bg-gradient-to-r from-[#25D366] via-[#34D399] to-[#38BDF8] bg-clip-text text-transparent">Free Trial</span>
          </h3>
          
          {/* Subtitle / Description */}
          <p className="text-[#A7B0C0] text-sm md:text-base mb-4 max-w-2xl leading-relaxed">
            Test our premium anti-freeze 4K IPTV service for 24 hours with zero commitment. Instant setup to watch over 50,000+ live channels, sports, and 200,000+ VODs on any device!
          </p>

          {/* Quick Perks */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Instant WhatsApp Setup
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> No Credit Card Needed
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> All 4K Channels Included
            </span>
          </div>
        </div>
        
        {/* Action Button */}
        <div className="shrink-0 w-full sm:w-auto mt-2 lg:mt-0">
          <a
            href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%20free%2024-hour%20trial%20for%20StrimoIPTV."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] text-white font-extrabold text-sm rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] group/btn whitespace-nowrap"
          >
            <span>Get Free Trial Now</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
