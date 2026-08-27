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
        <span className="inline-flex rounded-full border border-primary-400/35 bg-primary-400/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-300">Installation Guide</span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white uppercase drop-shadow-md">
          ZYMINEX IPTV INSTALLATION GUIDE
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-6 text-gray-400">Comprehensive step-by-step instructions to configure Zyminex IPTV on all your devices.</p>
        <p className="mx-auto mt-2 max-w-2xl text-base leading-6 text-gray-400">Zyminex IPTV works on Smart TVs, Firestick, Android, iOS, MAG, and more. New to Zyminex IPTV? Check <Link className="font-semibold text-primary-400 hover:text-primary-300" href="/pricing">Zyminex IPTV Pricing</Link>, or browse the <Link className="font-semibold text-primary-400 hover:text-primary-300" href="/channels">Zyminex IPTV Channel List</Link> before you start.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-x-9 gap-y-4 text-sm font-semibold text-gray-300">
          <span className="inline-flex items-center gap-2"><Monitor className="h-4 w-4 text-primary-400" />15+ Devices Supported</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary-300" />5–15 Minutes Setup</span>
          <span className="inline-flex items-center gap-2"><Headphones className="h-4 w-4 text-primary-400" />24/7 Support Available</span>
        </div>
      </header>

      <section className="mb-20 border-y border-black/[0.07] bg-[#141414]/[0.02] py-14 sm:mb-24 sm:py-16">
        <div className="mx-auto max-w-[1000px] px-5">
          <header className="mx-auto mb-10 max-w-[560px] text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Quick Start Guide</h2>
            <p className="mt-3 text-gray-400">Get started with Zyminex IPTV quickly and easily in three straightforward steps.</p>
          </header>
          <div className="grid gap-8 md:grid-cols-3">
            <QuickStartCard icon={Download} step="1" title="Download App">Download and install a suitable IPTV player app on your device from the app store or the official site.</QuickStartCard>
            <QuickStartCard icon={Link2} step="2" title="Add M3U URL">Input your Zyminex IPTV M3U playlist URL and EPG URL, which are included in your welcome email.</QuickStartCard>
            <QuickStartCard icon={PlayCircle} step="3" title="Start Streaming">Gain immediate access to live channels, movies and TV shows in stunning 4K quality.</QuickStartCard>
          </div>

          {/* Apps Platform Logos Banner */}
          <div className="mt-16 border-t border-black/[0.05] pt-12">
            <span className="block text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">Supported on all your favorite devices</span>
            <BrandMarquee 
              imagesFolder="devices" 
              images={[
                "Amazon-Fire-tv-stick-krooz-tv.webp",
                "Apple-TV-krooz-tv.webp",
                "hisense-krooz-tv.webp",
                "iptv-smarter-krooz-tv.webp",
                "LG-smart-krooz-tv.webp",
                "Shield-krooz-tv.webp",
                "Smart-android-tv-krooz-tv.webp",
                "sony-select-krooz-tv.webp",
                "Tv-media-boxs-krooz-tv.webp",
                "Windows-krooz-tv.webp",
                "xbox-live-krooz-tv.webp"
              ]}
              cardClassName="flex-shrink-0 w-[160px] h-[80px] md:w-[220px] md:h-[100px] relative bg-white border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#36a9ff] transition-all duration-300 shadow-md flex items-center justify-center"
              imageClassName="object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </section>

      <DeviceSetupGuide />

      <section className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-white">Need help with setup?</h2>
        <p className="mt-2 text-gray-400">Our support team is available 24/7 to assist you with installation.</p>
        <Link className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-400/40 bg-primary-500/10 px-7 py-3 font-semibold text-orange-200 transition-colors hover:bg-primary-500/20" href="/contact">
          Contact Support
        </Link>
      </section>
    </main>
  );
}

function QuickStartCard({ children, icon: Icon, step, title }: { children: React.ReactNode; icon: typeof Download; step: string; title: string }) {
  return (
    <article className="flex flex-col rounded-2xl border-2 border-primary-500 bg-[#141414] overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="p-7 text-center flex-1 flex flex-col items-center">
        <Icon className="h-10 w-10 text-primary-400 mb-5" strokeWidth={1.5} />
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#36a9ff] text-sm font-extrabold text-white shadow-md mb-3">{step}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">{children}</p>
      </div>
    </article>
  );
}
