import { Headphones, ShieldCheck, Clock, Wrench, MessageSquare, ArrowRight } from "lucide-react";

export default function SupportCtaSection() {
  return (
    <section className="py-20 relative z-10 border-t border-white/[0.06] bg-[#080B14]/60">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="strimo-card p-8 lg:p-12 rounded-3xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>24/7 DEDICATED ASSISTANCE</span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-black text-[#F8FAFC] tracking-tight">
              Need Help with <span className="text-cyan-400">StrimoIPTV Setup</span> or Technical Diagnostics?
            </h3>

            <p className="text-[#A7B0C0] text-base mt-3 leading-relaxed">
              Our expert technical support team is available 24/7 on WhatsApp to assist with playlist installation, app configuration, device synchronization, and StrimoIPTV channel troubleshooting.
            </p>

            <div className="grid grid-cols-2 sm:flex items-center gap-6 mt-6 text-xs text-white font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Fast Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>Remote Installation Help</span>
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="https://wa.me/447882781998?text=Hello,%20I%20need%20technical%20assistance%20with%20StrimoIPTV."
              target="_blank"
              rel="noreferrer"
              className="btn-primary-strimo px-8 py-4 text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 shadow-xl"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Support Now</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
