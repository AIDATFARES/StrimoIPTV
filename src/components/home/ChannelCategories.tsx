import { Monitor, Layers, Film, Zap, Smartphone, Globe2, ShieldCheck } from "lucide-react";

export default function ChannelCategories() {
  const topFeatures = [
    {
      icon: Monitor,
      title: "4K ULTRA HD STREAMING",
      desc: "Watch every channel and live event in crisp 4K, Full HD, and HD quality. Our anti-freeze technology ensures smooth streaming on every device.",
      tags: ["4K UHD", "FULL HD", "ANTI-FREEZE"],
    },
    {
      icon: Layers,
      title: "50,000+ LIVE CHANNELS",
      desc: "Access 50,000+ live channels from sports, news, entertainment, kids, and more. Every broadcast is delivered in crystal-clear quality.",
      tags: ["160+ COUNTRIES", "SPORTS", "NEWS", "KIDS"],
    },
    {
      icon: Film,
      title: "200,000+ VODS",
      desc: "Enjoy an on-demand library with movies, series, replays, highlights, and documentaries available any time, on any device.",
      tags: ["MOVIES", "SERIES", "REPLAYS", "UPDATED DAILY"],
    },
  ];

  const bottomFeatures = [
    {
      icon: Zap,
      title: "Instant Activation",
      desc: "Your subscription is activated within minutes.",
    },
    {
      icon: Smartphone,
      title: "All Devices Supported",
      desc: "Smart TV, Android, iOS, Mac, Fire Stick, PC, and more.",
    },
    {
      icon: Globe2,
      title: "Works Worldwide",
      desc: "Enjoy Zyminex IPTV wherever you are, on any connection.",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Uptime",
      desc: "Reliable servers with stable, buffer-free streaming.",
    },
  ];

  return (
    <section className="relative z-10 bg-transparent py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#36a9ff]/10 text-[#36a9ff] font-bold text-xs tracking-widest uppercase mb-6 border border-[#36a9ff]/20">
            Premium Features
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] animate-fade-up">
            Everything You Need for the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36a9ff] to-[#2196f3]">
              Ultimate Viewing Experience.
            </span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="flex flex-col gap-6 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          
          {/* Top Row: 3 Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col rounded-2xl border border-[#36a9ff]/20 bg-[#051f33]/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#36a9ff]/50 hover:shadow-[0_0_30px_rgba(54,169,255,0.15)]"
                >
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#36a9ff]/10 text-[#36a9ff] ring-1 ring-[#36a9ff]/20">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <h3 className="mb-3 text-xl font-black uppercase text-white">{feature.title}</h3>
                  <p className="mb-8 flex-grow text-[15px] leading-relaxed text-gray-400 font-medium">
                    {feature.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className="rounded-full border border-white/10 bg-[#051f33] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 4 Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bottomFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col rounded-2xl border border-[#36a9ff]/20 bg-[#051f33]/80 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#36a9ff]/50 hover:shadow-[0_0_30px_rgba(54,169,255,0.15)]"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#36a9ff]/10 text-[#36a9ff] ring-1 ring-[#36a9ff]/20">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h4 className="mb-2 text-[17px] font-bold text-white">{feature.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-400 font-medium">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
