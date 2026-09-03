import Link from "next/link";
import { Tv, Flame, Smartphone, Laptop, Monitor, Tablet, HardDrive, Globe, Check, ArrowRight } from "lucide-react";

export default function DeviceSupport() {
  const devices = [
    { name: "Smart TV", desc: "Samsung Tizen, LG webOS, Sony Android TV", icon: Tv, tag: "Native App Support" },
    { name: "Amazon Firestick", desc: "Fire TV Stick 4K Max, Cube, All Generations", icon: Flame, tag: "1-Click Sideload" },
    { name: "Android TV / Box", desc: "NVIDIA Shield, Chromecast, Android 8+", icon: Monitor, tag: "TiviMate Compatible" },
    { name: "Apple TV & iOS", desc: "Apple TV 4K, iPhone, iPad (IPTVX, GSE)", icon: Smartphone, tag: "AirPlay 2 Supported" },
    { name: "Windows PC & Mac", desc: "Browser Web Player, VLC, IPTV Smarters Pro", icon: Laptop, tag: "Browser Native" },
    { name: "MAG & Formuler", desc: "MAG 322/424/524, Z10/Z11 Stalker Portal", icon: HardDrive, tag: "MAC Address Portal" },
  ];

  return (
    <section id="devices" className="py-24 relative z-10 border-t border-white/[0.06] bg-[#080B14]/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            <span>UNIVERSAL IPTV COMPATIBILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC]">
            Watch StrimoIPTV on <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Any Device</span>
          </h2>
          <p className="text-[#A7B0C0] text-base sm:text-lg mt-4">
            StrimoIPTV works seamlessly across all major operating systems, smart televisions, Firestick, and third-party IPTV player apps. View our detailed <Link href="/installation" className="text-cyan-400 hover:underline font-semibold">IPTV Installation Tutorials</Link>.
          </p>
        </div>

        {/* 6 Device Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((dev, idx) => {
            const IconComponent = dev.icon;
            return (
              <div
                key={idx}
                className="strimo-card p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold bg-blue-500/10 text-[#60A5FA] border border-blue-500/20 px-2.5 py-1 rounded-full">
                      {dev.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-cyan-400 transition-colors">
                    {dev.name}
                  </h3>

                  <p className="text-sm text-[#A7B0C0] leading-relaxed">
                    {dev.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-emerald-400">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Tested 100% Buffer-Free</span>
                  </div>
                  <Link
                    href="/installation"
                    className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
                  >
                    Setup Guide →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/installation"
            className="btn-primary-strimo px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Open All Installation Tutorials</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
