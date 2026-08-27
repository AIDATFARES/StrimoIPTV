import Link from "next/link";

export default function ComparisonSection() {
  const rows = [
    { feature: "Monthly Cost", fiesta: "From $4.2/mo", cable: "$80-$200/mo", other: "$10-$30/mo (unreliable)" },
    { feature: "Live Channels", fiesta: "+50,000 Channels", cable: "200-500", other: "5,000-15,000" },
    { feature: "4K Streaming", fiesta: "✓ Native 4K", cable: "Limited", other: "Rarely stable" },
    { feature: "VOD Library", fiesta: "+120,000 Films", cable: "Add-on cost", other: "Varies wildly" },
    { feature: "Server Uptime", fiesta: "99.9% Guaranteed", cable: "99%", other: "60-85%" },
    { feature: "Buffering", fiesta: "Zero — Ever", cable: "Rare", other: "Common at peak" },
    { feature: "Setup Time", fiesta: "5 minutes", cable: "Technician visit", other: "Varies" },
    { feature: "Contract", fiesta: "No", cable: "12-24 months", other: "Sometimes" },
    { feature: "Multi-Screen", fiesta: "✓ Included", cable: "Extra cost", other: "Limited" },
    { feature: "Free Trial", fiesta: "✓ Available", cable: "No", other: "Rare" },
  ];

  return (
    <section className="bg-[#141414] text-white relative z-10 border-b border-white/10 overflow-hidden py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#E50914]/10 text-[#E50914] font-bold text-xs tracking-widest uppercase mb-6 border border-[#E50914]/20">
            IPTV vs Cable TV
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Why Zyminex IPTV is the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-[#B3000B]">
              Best Cable Alternative
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-6 leading-relaxed max-w-2xl mx-auto">
            Discover why thousands of users are cutting the cord. Our premium IPTV service offers <Link href="/channels" className="font-semibold text-[#E50914] hover:text-[#B3000B] hover:underline transition-colors">more channels</Link>, better 4K quality, and reliable anti-freeze technology at a fraction of the cost.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="bg-[#141414] rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(112,0,255,0.15)] border border-white/5 p-8 pb-10 relative overflow-hidden">
            
            {/* Highlight Background for Zyminex IPTV Column */}
            <div className="absolute top-0 bottom-0 left-[25%] w-[25%] bg-gradient-to-b from-[#E50914]/5 to-[#B3000B]/5 border-x border-[#E50914]/20 shadow-[0_0_50px_rgba(112,0,255,0.05)]"></div>

            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-6 relative z-10">
              <div className="text-left font-bold text-slate-400 uppercase tracking-widest text-sm flex items-end pb-4">Features</div>
              
              <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#E50914] to-[#B3000B] text-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(112,0,255,0.3)] transform -translate-y-4 scale-105 border-2 border-white">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-1">Premium Choice</span>
                <span className="text-2xl font-black tracking-tight">Zyminex IPTV</span>
              </div>
              
              <div className="text-center font-bold text-slate-400 uppercase tracking-widest text-sm flex items-end justify-center pb-4">Cable / Satellite</div>
              <div className="text-center font-bold text-slate-400 uppercase tracking-widest text-sm flex items-end justify-center pb-4">Other IPTV</div>
            </div>

            {/* Table Rows */}
            <div className="relative z-10">
              {rows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-4 gap-4 py-5 border-b border-white/5 last:border-0 items-center group hover:bg-[#141414]/50 transition-colors rounded-xl px-2 -mx-2">
                  <div className="font-bold text-gray-300 text-sm sm:text-base">{row.feature}</div>
                  <div className="font-black text-[#E50914] text-center text-base sm:text-lg group-hover:scale-105 transition-transform">{row.fiesta}</div>
                  <div className="font-medium text-gray-400 text-center text-sm">{row.cable}</div>
                  <div className="font-medium text-gray-400 text-center text-sm">{row.other}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Comparison (Cards) */}
        <div className="md:hidden space-y-8">
          <div className="bg-gradient-to-br from-[#E50914] to-[#B3000B] rounded-3xl p-1 relative shadow-xl">
            <div className="bg-black/20 text-white rounded-[1.35rem] p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-black mb-6 text-center">Zyminex IPTV</h3>
              <div className="space-y-4">
                {rows.map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-white/70 text-sm">{row.feature}</span>
                    <span className="font-bold text-white text-right">{row.fiesta}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#141414] rounded-3xl shadow-lg border border-white/10 p-6">
            <h3 className="text-xl font-bold mb-6 text-center text-slate-400">Cable / Satellite</h3>
            <div className="space-y-4">
              {rows.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-gray-400 text-sm">{row.feature}</span>
                  <span className="font-medium text-gray-300 text-right">{row.cable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center bg-black text-white font-bold px-10 py-5 rounded-xl hover:bg-[#E50914] shadow-lg hover:shadow-[0_10px_30px_rgba(112,0,255,0.3)] transition-all hover:-translate-y-1 gap-2"
          >
            View Plans & Pricing <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
