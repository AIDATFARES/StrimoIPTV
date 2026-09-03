import Link from "next/link";
import DeviceSetupGuide from "@/components/installation/DeviceSetupGuide";
import { Clock3, Download, Headphones, Link2, Monitor, PlayCircle, Sparkles } from "lucide-react";

export const metadata = {
  title: "StrimoIPTV Installation Guide | Smart TV, Firestick & Android Setup",
  description: "Comprehensive step-by-step instructions to configure StrimoIPTV on Smart TVs, Firestick, Android, iOS, MAG, and Windows.",
  alternates: {
    canonical: "/installation",
  },
};

export default function Installation() {
  return (
    <main className="mx-auto w-full max-w-[1440px] flex-grow px-5 pb-20 pt-28 sm:px-8 md:px-12">
      {/* Header Banner */}
      <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          INSTALLATION GUIDE
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#F8FAFC]">
          StrimoIPTV <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Installation Guide</span>
        </h1>
        
        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#A7B0C0]">
          Comprehensive step-by-step instructions to configure StrimoIPTV on all your devices.
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#A7B0C0]">
          StrimoIPTV works on Smart TVs, Firestick, Android, iOS, MAG, and PC. New to StrimoIPTV? View our{" "}
          <Link className="font-bold text-cyan-400 hover:underline" href="/pricing">Pricing Plans</Link> or browse the{" "}
          <Link className="font-bold text-cyan-400 hover:underline" href="/channels">Channel List</Link> first.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-bold text-[#A7B0C0]">
          <span className="inline-flex items-center gap-2"><Monitor className="h-4 w-4 text-cyan-400" />15+ Devices Supported</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-cyan-400" />5–15 Minutes Setup</span>
          <span className="inline-flex items-center gap-2"><Headphones className="h-4 w-4 text-cyan-400" />24/7 Support Available</span>
        </div>
      </header>

      {/* Quick Start Steps */}
      <section className="mb-20">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
              QUICK START
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#F8FAFC] leading-tight tracking-tight">
              Everything You Need for the{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ultimate Viewing Experience</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <QuickStartCard icon={Download} step="1" title="DOWNLOAD APP">
              Download and install a compatible IPTV player app (such as IPTV Smarters or TiviMate) on your device.
            </QuickStartCard>
            <QuickStartCard icon={Link2} step="2" title="ADD M3U URL">
              Input your StrimoIPTV M3U playlist URL and Xtream Codes credentials supplied in your welcome email.
            </QuickStartCard>
            <QuickStartCard icon={PlayCircle} step="3" title="START STREAMING">
              Enjoy immediate access to over 50,000+ live channels, 4K movies, and sports streams with zero buffering.
            </QuickStartCard>
          </div>
        </div>
      </section>

      {/* Interactive Device Setup Guide */}
      <DeviceSetupGuide />

      {/* Help Section */}
      <section className="strimo-card p-10 max-w-2xl mx-auto text-center rounded-3xl mt-16">
        <h2 className="text-2xl font-black text-[#F8FAFC]">Need help with setup?</h2>
        <p className="mt-2 text-sm text-[#A7B0C0]">Our technical support team is available 24/7 on WhatsApp to assist with your installation.</p>
        <a 
          className="mt-6 btn-primary-strimo px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2"
          href="https://wa.me/213552069874?text=Hello,%20I%20need%20help%20setting%20up%20StrimoIPTV."
          target="_blank"
          rel="noreferrer"
        >
          Get Setup Help on WhatsApp
        </a>
      </section>
    </main>
  );
}

function QuickStartCard({ children, icon: Icon, step, title }: { children: React.ReactNode; icon: typeof Download; step: string; title: string }) {
  return (
    <div className="strimo-card p-8 rounded-2xl flex flex-col gap-4">
      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
        <Icon className="w-6 h-6" />
      </div>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-xs font-black text-black">
        {step}
      </span>
      <h3 className="text-white font-extrabold text-sm tracking-wider uppercase">{title}</h3>
      <p className="text-[#A7B0C0] text-xs leading-relaxed">{children}</p>
    </div>
  );
}
