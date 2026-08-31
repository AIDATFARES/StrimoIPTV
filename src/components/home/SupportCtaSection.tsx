import { Mail, MessageSquare } from "lucide-react";

export default function SupportCtaSection() {
  return (
    <section className="border-t border-black/10 bg-transparent px-5 py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#36a9ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div
        className="relative z-10 mx-auto flex max-w-[565px] flex-col gap-8 rounded-[22px] border border-[#36a9ff]/20 bg-gray-50/80 backdrop-blur-sm p-8 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:p-8 hover:border-[#36a9ff]/50 hover:shadow-[0_0_30px_rgba(54,169,255,0.15)] transition-all duration-300"
      >
        <div className="max-w-[310px]">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#36a9ff]/35 bg-[#36a9ff]/10 text-[#36a9ff]">
            <MessageSquare className="h-5 w-5" />
          </span>
          <h2 className="mt-5 text-3xl font-black uppercase italic leading-[0.9] tracking-tight text-black sm:text-4xl">
            <span className="block">Still have a</span>
            <span className="block text-[#36a9ff]">question?</span>
          </h2>
          <p className="mt-4 text-sm leading-5 text-gray-600">
            The RealMIPTV support team is online 24/7 and responds in under 5 minutes on WhatsApp. No bots — just real humans ready to help you set up your IPTV service right now.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2.5 sm:w-40">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all hover:bg-[#20bd5a] hover:scale-105"
            href="https://wa.me/213552069874?text=Hello%2C%20I%20have%20a%20question%20about%20realmiptv%20IPTV."
            rel="noreferrer"
            target="_blank"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Ask on WhatsApp
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wide text-gray-700 transition-all hover:border-[#36a9ff]/50 hover:bg-[#36a9ff]/10 hover:text-[#36a9ff] hover:scale-105"
            href="mailto:support@realmiptv4k.shop"
          >
            <Mail className="h-3.5 w-3.5" />
            Send email
          </a>
        </div>
      </div>
    </section>
  );
}
