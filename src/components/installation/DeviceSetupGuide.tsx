"use client";

import { Apple, Box, ChevronDown, Download, HelpCircle, Monitor, Satellite, Smartphone, Tv } from "lucide-react";
import { useState } from "react";

const devices = [
  { id: "smart-tv", label: "Smart TV", icon: Monitor, title: "Smart TV Setup (Samsung, LG, Sony, etc.)", app: "Smart IPTV or IPTV Smarters", note: "Samsung TVs commonly use Smart IPTV, while LG TVs can use IPTV Smarters or SS IPTV." },
  { id: "firestick", label: "Firestick", icon: Tv, title: "Firestick Setup", app: "IPTV Smarters Pro or TiviMate", note: "Install your preferred IPTV player from the Amazon Appstore, then sign in with the details from your welcome email." },
  { id: "android", label: "Android", icon: Smartphone, title: "Android Setup", app: "IPTV Smarters Pro or TiviMate", note: "Download your player from Google Play and use your supplied playlist details to sign in." },
  { id: "ios", label: "iOS", icon: Apple, title: "iPhone & iPad Setup", app: "IPTV Smarters Player", note: "Install a compatible player from the App Store and enter the credentials from your welcome email." },
  { id: "mag", label: "MAG Box", icon: Box, title: "MAG Box Setup", app: "Portal URL", note: "Send your MAG device MAC address to support so we can activate your portal before setup." },
  { id: "enigma", label: "Enigma2", icon: Satellite, title: "Enigma2 Setup", app: "XtreamTV or E-Channelizer", note: "Use a compatible Enigma2 plugin and add the playlist details supplied with your subscription." },
];

const faqs = [
  { question: "1. How do I install IPTV on a Smart TV?", answer: "Install a compatible player such as Smart IPTV or IPTV Smarters from your TV's app store, then add the M3U URL or Xtream credentials from your welcome email." },
  { question: "2. Where do I find my M3U URL?", answer: "Your M3U URL is included in the welcome email sent after activation. Contact support on WhatsApp if you need it resent." },
  { question: "3. How can I reduce buffering?", answer: "Use a stable internet connection, restart your device and router, and select an appropriate quality setting for your connection." },
  { question: "4. How do I set up StrimoIPTV using Xtream Codes API?", answer: "Choose Xtream Codes API in your player and enter the server URL, username, and password from your welcome email." },
  { question: "5. Can I connect using a MAC address (Portal URL)?", answer: "Yes. MAG and compatible portal devices can be activated using their MAC address. Send it to our support team for assistance." },
];

export default function DeviceSetupGuide() {
  const [activeDevice, setActiveDevice] = useState("smart-tv");
  const device = devices.find((item) => item.id === activeDevice) ?? devices[0];
  const DeviceIcon = device.icon;

  return (
    <section className="mb-16 md:mb-24 pt-28">
      <header className="mx-auto mb-10 max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
          <span>SETUP & INSTALLATION</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-[#F8FAFC] sm:text-5xl">
          Device Setup <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Instructions</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#A7B0C0]">Select your device below for step-by-step StrimoIPTV installation instructions.</p>
      </header>

      {/* Device Selector Buttons */}
      <div className="mb-10 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-4">
        {devices.map((item) => {
          const Icon = item.icon;
          const active = item.id === activeDevice;
          return (
            <button 
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold tracking-wider transition-all uppercase ${
                active 
                  ? "btn-primary-strimo" 
                  : "border-white/10 bg-[#0D111B] text-[#A7B0C0] hover:text-white hover:border-cyan-500/40"
              }`} 
              key={item.id} 
              onClick={() => setActiveDevice(item.id)} 
              type="button"
            >
              <Icon className="h-4 w-4" />{item.label}
            </button>
          );
        })}
      </div>

      {/* Guide Content Card */}
      <article className="mx-auto max-w-[1000px] rounded-3xl border border-white/10 bg-[#0D111B] p-6 sm:p-10 shadow-2xl overflow-hidden">
        
        {/* Device Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-b border-white/10 pb-6 mb-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
            <DeviceIcon className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#F8FAFC] sm:text-3xl">{device.title}</h2>
            <p className="mt-1 text-[#A7B0C0] text-sm">Follow these steps to configure your {device.label} for StrimoIPTV.</p>
          </div>
        </div>
        
        {/* Important Note */}
        {device.note && (
          <div className="mb-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5 flex items-start gap-4 text-cyan-200">
            <HelpCircle className="h-6 w-6 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-white mb-1">Important Note</h3>
              <p className="text-xs leading-relaxed text-[#A7B0C0]">{device.note}</p>
            </div>
          </div>
        )}

        {/* Steps Grid */}
        <div className="space-y-6">
          <SetupStep number="1" title="Install IPTV App">
            Navigate to your device's official app store, search for <strong className="text-white">{device.app}</strong>, and download the app to your device.
          </SetupStep>
          
          <SetupStep number="2" title="Configure Playlist">
            Launch the app, open its Settings menu, and enter the M3U URL or Xtream Codes credentials supplied in your welcome email.
            <div className="mt-4">
              <CodeLine label="M3U URL" text="Use the secure playlist URL from your welcome email" />
            </div>
          </SetupStep>
          
          <SetupStep number="3" title="Start Watching">
            Save settings and allow a few seconds for the EPG guide and channel list to populate. Enjoy 4K HDR live television streaming!
          </SetupStep>
        </div>
      </article>

      {/* Installation FAQ */}
      <div className="mx-auto mt-20 max-w-[1000px] px-4">
        <h2 className="mb-8 text-center text-3xl font-black tracking-tight text-[#F8FAFC]">Installation FAQ</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <div className="strimo-card p-6 rounded-xl space-y-2" key={faq.question}>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                {faq.question}
              </h3>
              <p className="text-xs text-[#A7B0C0] leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SetupStep({ children, number, title }: { children: React.ReactNode; number: string; title: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 bg-[#080B14] border border-white/5 p-6 sm:p-8 rounded-2xl">
      <div className="flex flex-1 gap-5 items-start">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-sm font-black text-black">
          {number}
        </span>
        <div className="flex-1 mt-0.5">
          <h3 className="text-lg font-bold text-[#F8FAFC]">{title}</h3>
          <div className="mt-2 text-xs leading-relaxed text-[#A7B0C0]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeLine({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl bg-[#0D111B] border border-white/10 px-4 py-3 font-mono text-xs text-[#A7B0C0] break-all">
      <span className="font-bold text-cyan-400 mr-2">{label}:</span> 
      {text}
    </div>
  );
}
