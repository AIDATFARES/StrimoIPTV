import { ArrowRight, Sparkles, Tv } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="py-28 relative z-10 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl p-10 lg:p-20 text-center overflow-hidden bg-gradient-to-b from-[#0D111B] via-[#080B14] to-[#060810] border border-white/10 shadow-2xl">
          
          {/* Subtle Accent Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-purple-600/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold bg-blue-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>UNLIMITED 4K IPTV ENTERTAINMENT</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#F8FAFC] leading-tight">
              Ready to Upgrade Your <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">IPTV Experience?</span>
            </h2>

            <p className="text-base sm:text-xl text-[#A7B0C0] mt-6 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied StrimoIPTV subscribers watching live sports, movies, and TV shows in 4K HDR. Instant account activation in under 3 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
              <a
                href="#pricing"
                className="btn-primary-strimo px-9 py-4 text-sm font-extrabold uppercase tracking-wider flex items-center gap-2"
              >
                <span>Get StrimoIPTV Access</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </a>

              <a
                href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20StrimoIPTV."
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-strimo px-9 py-4 text-sm font-semibold flex items-center gap-2"
              >
                <Tv className="w-4 h-4 text-cyan-400" />
                <span>Request Trial Pass</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
