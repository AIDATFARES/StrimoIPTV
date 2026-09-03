import Link from "next/link";
import Image from "next/image";
import DeviceSetupGuide from "@/components/installation/DeviceSetupGuide";
import BrandMarquee from "@/components/home/BrandMarquee";
import { Clock3, Download, Headphones, Link2, Monitor, PlayCircle } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/installation",
  },
};


export default function Installation() {
  return (
    <main className="mx-auto w-full max-w-[1440px] flex-grow px-5 pb-20 pt-12 sm:px-8 md:px-12 text-format-technical">
      <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
        <span className="inline-flex rounded-full border border-[#36a9ff]/35 bg-[#36a9ff]/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#36a9ff]">Installation Guide</span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-black uppercase drop-shadow-md">
          STRIMO IPTV INSTALLATION GUIDE
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-6 text-gray-600">Comprehensive step-by-step instructions to configure Strimo IPTV on all your devices.</p>
        <p className="mx-auto mt-2 max-w-2xl text-base leading-6 text-gray-600">Strimo IPTV works on Smart TVs, Firestick, Android, iOS, MAG, and more. New to Strimo IPTV? Check <Link className="font-semibold text-[#36a9ff] hover:text-[#36a9ff]" href="/pricing">Strimo IPTV Pricing</Link>, or browse the <Link className="font-semibold text-[#36a9ff] hover:text-[#36a9ff]" href="/channels">Strimo IPTV Channel List</Link> before you start.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-x-9 gap-y-4 text-sm font-semibold text-gray-700">
          <span className="inline-flex items-center gap-2"><Monitor className="h-4 w-4 text-[#36a9ff]" />15+ Devices Supported</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#36a9ff]" />5–15 Minutes Setup</span>
          <span className="inline-flex items-center gap-2"><Headphones className="h-4 w-4 text-[#36a9ff]" />24/7 Support Available</span>
        </div>
      </header>

      <section className="mb-20 py-14 sm:mb-24 sm:py-16">
        <div className="mx-auto max-w-[1000px] px-5">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="inline-block py-1 px-4 rounded-full bg-[#36a9ff]/10 border border-[#36a9ff]/30 text-[#36a9ff] text-xs font-bold tracking-widest uppercase mb-5">
              Premium Features
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
              Everything You Need for the{" "}
              <span className="block text-[#36a9ff]">Ultimate Viewing Experience.</span>
            </h2>
          </div>

          {/* Quick Start Cards — 3 large navy cards */}
          <div className="grid gap-5 md:grid-cols-3">
            <QuickStartCard icon={Download} step="1" title="Download App">Download and install a suitable IPTV player app on your device from the app store or the official site.</QuickStartCard>
            <QuickStartCard icon={Link2} step="2" title="Add M3U URL">Input your Strimo IPTV M3U playlist URL and EPG URL, which are included in your welcome email.</QuickStartCard>
            <QuickStartCard icon={PlayCircle} step="3" title="Start Streaming">Gain immediate access to live channels, movies and TV shows in stunning 4K quality.</QuickStartCard>
          </div>

          {/* Apps Platform Logos Banner */}
          <div className="mt-16 border-t border-black/[0.05] pt-12 flex justify-center px-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Devices-1-1024x350.webp"
              alt="Supported on all your favorite devices"
              className="max-w-full h-auto w-full md:w-[1024px] object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </section>

      <DeviceSetupGuide />

      <section className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-black">Need help with setup?</h2>
        <p className="mt-2 text-gray-600">Our support team is available 24/7 to assist you with installation.</p>
        <Link className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#145082] hover:bg-[#1a6098] px-7 py-3 font-semibold text-white shadow-[0_0_20px_rgba(54,169,255,0.3)] transition-all hover:scale-105" href="/contact">
          Contact Support
        </Link>
      </section>
    </main>
  );
}

function QuickStartCard({ children, icon: Icon, step, title }: { children: React.ReactNode; icon: typeof Download; step: string; title: string }) {
  return (
    <div className="bg-[#145082] rounded-2xl p-8 flex flex-col gap-4 hover:bg-[#1a6098] transition-colors duration-300 group shadow-lg">
      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
      </div>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#36a9ff] text-xs font-extrabold text-white shadow-md">
        {step}
      </span>
      <h3 className="text-white font-extrabold text-base tracking-wide uppercase">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
