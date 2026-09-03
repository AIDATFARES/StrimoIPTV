import HowItWorksSection from "@/components/home/HowItWorksSection";
import Link from "next/link";
import { PlayCircle, ShieldCheck, Zap, Phone, MonitorSmartphone, Globe2, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "How It Works | Strimo IPTV",
  description: "Learn how easy it is to set up and start streaming with Strimo IPTV. Our 3-step process gets you watching premium live TV and VOD in minutes.",
};

export default function HowItWorksPage() {
  return (
    <main className="flex-col flex min-h-screen bg-black">
      
      {/* Page Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#36a9ff]/15 to-transparent z-0"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#36a9ff]/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#36a9ff]/20 text-[#2196f3] font-bold text-xs tracking-widest uppercase mb-6 border border-[#2196f3]/30">
            Simple Setup Guide
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-black tracking-tight leading-[1.1] mb-6">
            Start Streaming in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36a9ff] to-[#2196f3]">
              Under 5 Minutes
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We've made cutting the cord as simple as possible. No technical skills required, no hardware to install, and absolutely zero hidden fees. Just choose a plan, connect your app, and dive into infinite entertainment.
          </p>
        </div>
      </section>

      {/* The Core Timeline Section (Reused from Homepage) */}
      <div className="bg-white">
        <HowItWorksSection />
      </div>

      {/* Why Choose Strimo IPTV - Pill Grid */}
      <section className="py-20 bg-white text-black relative z-10 border-t border-black/10">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-10 uppercase">
            Why Choose <span className="text-[#36a9ff]">Strimo IPTV</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            
            {/* Pill 1 */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-black/10 hover:border-[#36a9ff]/40 hover:shadow-md transition-all bg-white">
              <ShieldCheck className="text-[#36a9ff] shrink-0" size={20} />
              <span className="text-sm font-bold text-gray-700">Secure & encrypted payments</span>
            </div>

            {/* Pill 2 */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-black/10 hover:border-[#36a9ff]/40 hover:shadow-md transition-all bg-white">
              <Zap className="text-[#36a9ff] shrink-0" size={20} />
              <span className="text-sm font-bold text-gray-700">Instant delivery within 5 mins</span>
            </div>

            {/* Pill 3 */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-black/10 hover:border-[#36a9ff]/40 hover:shadow-md transition-all bg-white">
              <Phone className="text-[#36a9ff] shrink-0" size={20} />
              <span className="text-sm font-bold text-gray-700">24/7 dedicated support</span>
            </div>

            {/* Pill 4 */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-black/10 hover:border-[#36a9ff]/40 hover:shadow-md transition-all bg-white">
              <MonitorSmartphone className="text-[#36a9ff] shrink-0" size={20} />
              <span className="text-sm font-bold text-gray-700">Works on all devices</span>
            </div>

            {/* Pill 5 */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-black/10 hover:border-[#36a9ff]/40 hover:shadow-md transition-all bg-white">
              <Globe2 className="text-[#36a9ff] shrink-0" size={20} />
              <span className="text-sm font-bold text-gray-700">150+ countries covered</span>
            </div>

            {/* Pill 6 */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-black/10 hover:border-[#36a9ff]/40 hover:shadow-md transition-all bg-white">
              <CheckCircle2 className="text-[#36a9ff] shrink-0" size={20} />
              <span className="text-sm font-bold text-gray-700">No contracts or hidden fees</span>
            </div>

          </div>
        </div>
      </section>

      {/* Large Solid CTA Block */}
      <section className="py-24 bg-gradient-to-r from-[#36a9ff] to-[#2196f3] text-center relative z-10 shadow-[0_-10px_40px_rgba(112,0,255,0.2)]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tight drop-shadow-lg">
            Ready to Start Streaming?
          </h2>
          <p className="text-black/90 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto drop-shadow-md">
            Join thousands of satisfied customers. Get instant access to +50,000 live channels, +120,000 films & series, and reliable VIP sports coverage.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20strimoiptv%20IPTV." 
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#36a9ff] bg-white rounded-xl shadow-xl hover:scale-105 hover:bg-white transition-all duration-300"
            >
              Get Free Trial &rarr;
            </Link>
            <Link 
              href="/#pricing" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-transparent border-2 border-white rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
