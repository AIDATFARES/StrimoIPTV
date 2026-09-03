import { Tv, Zap, Monitor, Sparkles, Shield, Clock, Globe, Settings, Award } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Tv,
      title: "Large Channel Selection",
      description: "Access over 50,000 live international TV channels and 200,000 VOD movies updated daily.",
      accent: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "4K / UHD Quality",
      description: "Stream premium sports and cinema content in true 4K HDR and high-frame-rate 60 FPS clarity.",
      accent: "from-cyan-500 to-purple-500",
    },
    {
      icon: Zap,
      title: "Fast Anti-Freeze Streaming",
      description: "Powered by 99.9% uptime cloud architecture and anti-buffering load balancing servers.",
      accent: "from-purple-500 to-blue-500",
    },
    {
      icon: Monitor,
      title: "Multi-Device Support",
      description: "Watch effortlessly on Smart TVs, Firestick, Android, iOS, Windows, Mac, and MAG boxes.",
      accent: "from-blue-500 to-indigo-500",
    },
    {
      icon: Sparkles,
      title: "Instant Activation",
      description: "Get your automated login credentials delivered instantly via email & WhatsApp within seconds.",
      accent: "from-cyan-400 to-blue-500",
    },
    {
      icon: Clock,
      title: "24/7 Dedicated Support",
      description: "Our technical team is available around the clock to assist you with setup and diagnostics.",
      accent: "from-purple-400 to-pink-500",
    },
    {
      icon: Globe,
      title: "Worldwide Access",
      description: "Stream your favorite sports and shows anywhere in the world without geo-restrictions.",
      accent: "from-indigo-500 to-cyan-400",
    },
    {
      icon: Settings,
      title: "Easy Setup Process",
      description: "Simple step-by-step guides for IPTV Smarters, TiviMate, XCIPTV, and IBO Player.",
      accent: "from-blue-400 to-purple-500",
    },
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            <span>WHY STRIMOIPTV</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC]">
            Engineered for <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Ultimate Entertainment</span>
          </h2>
          <p className="text-[#A7B0C0] text-base sm:text-lg mt-4">
            Discover why thousands of users trust StrimoIPTV for high-speed, buffer-free global television streaming.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="strimo-card p-7 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} p-[1px] mb-6 shadow-md`}>
                    <div className="w-full h-full bg-[#080B14] rounded-[11px] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#60A5FA] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#A7B0C0] mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
