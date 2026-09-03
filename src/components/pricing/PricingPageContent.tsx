"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Gift, Tv, Headphones, HelpCircle, MonitorSmartphone, ShieldCheck, Sparkles, Zap, CreditCard, Bitcoin, Wallet } from "lucide-react";

type PlanFeature = {
  text: string;
  included: boolean;
};

type Plan = {
  id: string;
  name: string;
  badge: string;
  price: number;
  durationLabel: string;
  months: number;
  popular?: boolean;
  buttonText: string;
};

const commonFeatures: PlanFeature[] = [
  { text: "strimo subscription for {devices} Device{s}", included: true },
  { text: "Uncompressed Ultra HD & 4K", included: true },
  { text: "25,000+ Premium Channels", included: true },
  { text: "100,000+ VODs (Daily Update)", included: true },
  { text: "Premium Sports & PPV Pass", included: true },
  { text: "Full EPG & 7-Day Catch-up", included: true },
  { text: "Advanced Anti-Freeze VIP", included: true },
  { text: "VPN Included Free", included: true },
  { text: "Direct WhatsApp VIP Support", included: true },
];

const plans: Plan[] = [
  {
    id: "3-months",
    name: "3 MONTHS",
    badge: "STARTER",
    price: 35,
    durationLabel: "3 Months",
    months: 3,
    buttonText: "SELECT 3 MONTHS",
  },
  {
    id: "12-months",
    name: "12 MONTHS",
    badge: "ULTIMATE",
    price: 69.99,
    durationLabel: "12 Months",
    months: 12,
    popular: true,
    buttonText: "GET 12 MONTHS",
  },
  {
    id: "6-months",
    name: "6 MONTHS",
    badge: "VALUE",
    price: 49.99,
    durationLabel: "6 Months",
    months: 6,
    buttonText: "SELECT 6 MONTHS",
  },
];

const includedFeatures = [
  { icon: Tv, title: "+50,000 Channels", text: "Explore live channels from around the world, including sports, news and entertainment." },
  { icon: MonitorSmartphone, title: "200,000+ VODs", text: "Enjoy +120,000 Films & Series and a massive, regularly refreshed video-on-demand library." },
  { icon: Zap, title: "Anti-freeze Technology", text: "Optimized streaming technology helps deliver a smoother experience at busy times." },
  { icon: Headphones, title: "24/7 Support", text: "The Strimo IPTV support team is here to help with setup and streaming questions." },
  { icon: Sparkles, title: "Fast Setup", text: "Your Strimo IPTV details are sent after payment so you can start setting up quickly." },
  { icon: CreditCard, title: "TV Guide (EPG)", text: "Browse your channel schedule more easily with an electronic programme guide." },
];

const billingQuestions = [
  { question: "1. Which payment methods can I use?", answer: <>Available payment options are shown when you place your order. <Link className="font-semibold text-[#36a9ff] hover:text-[#2196f3] transition-colors" href="/contact">Contact Strimo IPTV support</Link> if you need help before purchasing.</> },
  { question: "2. Is my payment protected?", answer: "Please use the official Strimo IPTV payment process and never share payment details through an unverified link or message." },
  { question: "3. Will my subscription renew automatically?", answer: <>Renewal details are provided when you order. If you have any questions about your subscription period or renewal, <Link className="font-semibold text-[#36a9ff] hover:text-[#2196f3] transition-colors" href="/contact">contact support</Link> before your plan expires.</> },
  { question: "4. Can I change my plan or number of connections?", answer: <>Yes. <Link className="font-semibold text-[#36a9ff] hover:text-[#2196f3] transition-colors" href="/contact">Contact the support team</Link> with your order email and the plan or connection change you need, and they will advise on the available options.</> },
];

const planComparison = [
  { feature: "LIVE CHANNELS", m3: "15,000+", m12: "25,000+", m6: "18,000+" },
  { feature: "VOD LIBRARY", m3: "60,000+", m12: "100,000+", m6: "80,000+" },
  { feature: "4K STREAMING", m3: "Yes", m12: "Yes", m6: "Yes" },
  { feature: "SPORTS PPV", m3: "Basic", m12: "All Included", m6: "Premium" },
  { feature: "EPG GUIDE", m3: "Standard", m12: "Full 7-Day", m6: "Full" },
  { feature: "ANTI-FREEZE TECH", m3: "Standard", m12: "VIP Advanced", m6: "Pro" },
  { feature: "VPN INCLUDED", m3: "No", m12: "Yes", m6: "No" },
  { feature: "MULTI-SCREEN", m3: "1 Device ($35)", m12: "3 Devices ($150)", m6: "2 Devices ($80)" },
  { feature: "SUPPORT", m3: "Standard", m12: "VIP Priority", m6: "Priority" },
];

export default function PricingPageContent() {
  const [devices, setDevices] = useState(1);
  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);
  const monthlyPrice = (plan: Plan) => ((plan.price * devices) / plan.months).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the ${plan.name} plan with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#36a9ff] px-4 py-1 mb-6">
            <Gift className="h-4 w-4 text-black" />
            <span className="text-[10px] font-bold text-black tracking-widest uppercase">
              BEST VALUE PLANS
            </span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-[54px] font-black tracking-tight leading-[1.1] uppercase drop-shadow-lg">
            <span className="block text-black">STRIMO IPTV</span>
            <span className="mt-1 block text-[#36a9ff]">SUBSCRIPTION PLANS</span>
          </h1>
          <p className="mx-auto mt-6 text-base sm:text-lg text-black/90 font-medium leading-relaxed max-w-2xl">
            Select your subscription duration. Enjoy larger discounts on longer plans, and share the ultimate entertainment experience across multiple devices simultaneously with Strimo.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-600">
            Need help getting started? Visit our <Link className="font-semibold text-[#36a9ff] hover:text-[#2196f3]" href="/installation">installation guide</Link> or browse the <Link className="font-semibold text-[#36a9ff] hover:text-[#2196f3]" href="/channels">channel list</Link> before you order.
          </p>
        </header>

        {/* Device Selector */}
        <div className="mx-auto mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <Tv className="h-4 w-4 text-[#36a9ff]" />
            <p className="text-[11px] font-bold uppercase tracking-widest text-black">Select Number of Devices</p>
          </div>
          <div className="inline-flex rounded-full border border-[#36a9ff] p-1.5 bg-transparent shadow-[0_0_15px_rgba(54,169,255,0.2)]">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  key={count}
                  onClick={() => setDevices(count)}
                  className={`rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold transition-all uppercase tracking-wide ${
                    selected
                      ? "bg-[#36a9ff] text-white shadow-md"
                      : "text-black hover:text-[#36a9ff]"
                  }`}
                >
                  {count} Device{count > 1 ? "S" : ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 items-stretch pt-4">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-2xl bg-[#fdf1c3] p-8 text-left transition-transform duration-300 border-[6px] border-[#36a9ff] ${
                plan.popular ? "md:scale-105 z-10 shadow-[0_0_40px_rgba(54,169,255,0.6)]" : "hover:-translate-y-2 shadow-xl"
              }`}
            >
              {/* Card Header Row */}
              <div className="flex items-center justify-between mb-4">
                <span className="block text-[#36a9ff] font-black uppercase tracking-widest text-sm">
                  {plan.badge}
                </span>
                <div className="flex items-center gap-2">
                  {plan.popular && (
                    <span className="bg-[#36a9ff] text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                      MOST POPULAR
                    </span>
                  )}
                  <Tv className="h-5 w-5 text-[#36a9ff]" />
                </div>
              </div>

              <div className="pb-6">
                <h3 className="text-[28px] font-black text-[#051f33] uppercase leading-none mb-4">{plan.name}</h3>
                
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-[46px] font-black tracking-tighter text-[#051f33] leading-none">${priceFor(plan)}</span>
                </div>

                <div className="inline-flex rounded-full bg-[#36a9ff] px-4 py-1.5">
                  <span className="text-[10px] font-bold text-black uppercase tracking-wider">
                    JUST ${monthlyPrice(plan)} / MONTH
                  </span>
                </div>
              </div>

              <ul className="mt-6 mb-8 flex-grow space-y-3.5">
                {commonFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-[#36a9ff] fill-white" />
                    <span className="text-xs sm:text-[13px] font-bold text-[#051f33]">
                      {feature.text.replace('{devices}', devices.toString()).replace('{s}', devices > 1 ? 's' : '')}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4">
                <button
                  type="button"
                  onClick={() => handleOrder(plan)}
                  className={`w-full py-4 text-sm font-black uppercase tracking-wide transition-all duration-300 rounded-full transform hover:scale-105 shadow-md ${
                    plan.popular
                      ? "bg-[#051f33] text-white hover:bg-[#0a365e] hover:shadow-xl"
                      : "bg-[#36a9ff] text-white hover:bg-[#2196f3] hover:shadow-[#36a9ff]/50"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Free Trial Banner */}
        <div className="mx-auto mt-16 max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-4 rounded-full bg-[#fdf1c3] p-2 pl-6 sm:pl-8 shadow-xl border-4 border-[#36a9ff]/30">
          <div className="flex items-center gap-3">
            <div className="bg-[#36a9ff] p-2 rounded-full">
              <Gift className="h-5 w-5 text-black" />
            </div>
            <h3 className="text-sm sm:text-base font-black text-[#051f33] uppercase">
              NEED FREE TRIAL 24H?
            </h3>
          </div>
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%2024H%20trial."
            target="_blank"
            rel="noreferrer"
            className="bg-[#36a9ff] hover:bg-[#2196f3] text-white text-sm font-black px-10 py-3.5 rounded-full uppercase transition-all shadow-md hover:scale-105 whitespace-nowrap"
          >
            TRY NOW
          </a>
        </div>

        {/* Added Image Banner */}
        <div className="mx-auto mt-12 max-w-5xl flex justify-center px-4">
          <Image 
            src="/imggt1_3.webp" 
            alt="Supported Apps and Devices" 
            width={1200} 
            height={300} 
            className="w-full h-auto object-contain drop-shadow-md rounded-xl"
          />
        </div>

        {/* Bottom Security Banner */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-gray-50 p-6 shadow-sm border border-[#36a9ff]/20 border-l-4 border-l-[#36a9ff]">
            <div>
              <h3 className="text-lg font-bold text-black">Secure Payments & Instant Access</h3>
              <p className="mt-1 text-sm text-gray-600 font-medium">Pay safely using Crypto, Credit Card, or PayPal. Your details are encrypted instantly.</p>
            </div>
            <div className="flex shrink-0 items-center gap-4 text-gray-600">
              <CreditCard className="h-7 w-7" strokeWidth={1.5} />
              <Bitcoin className="h-7 w-7" strokeWidth={1.5} />
              <Wallet className="h-7 w-7" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Plan Comparison Table */}
        <div className="mt-32 max-w-5xl mx-auto">
          <div className="text-center mb-10">
             <h2 className="text-3xl md:text-[42px] font-black uppercase tracking-tight text-black mb-4">
               COMPARE <span className="text-[#36a9ff]">STRIMO PLANS</span>
             </h2>
             <p className="text-[#ffc107] font-bold text-sm tracking-widest uppercase">FIND THE PERFECT PLAN FOR YOUR STREAMING NEEDS</p>
          </div>

          <div className="bg-[#fdf1c3] rounded-[2rem] border-[4px] border-[#36a9ff] p-4 sm:p-8 relative overflow-hidden shadow-[0_0_40px_rgba(54,169,255,0.2)]">
            
            {/* Desktop Center Column Dark Background */}
            <div className="absolute top-0 bottom-0 left-[50%] w-[25%] bg-gray-50 shadow-2xl rounded-2xl z-0 hidden md:block" />
            
            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left min-w-[700px] border-collapse relative">
                <thead>
                  <tr>
                    <th className="py-6 px-4 text-[#051f33] font-black uppercase text-sm tracking-widest w-1/4 border-b border-[#051f33]/10">FEATURE</th>
                    <th className="py-6 px-4 text-[#36a9ff] font-black uppercase text-sm tracking-widest text-center w-1/4 border-b border-[#051f33]/10">3 MONTHS</th>
                    <th className="py-6 px-4 text-[#ffc107] font-black uppercase text-sm tracking-widest text-center w-1/4 border-b border-[#051f33]/10 md:border-b md:border-black/10 md:bg-transparent bg-gray-50 md:rounded-t-2xl rounded-t-2xl">12 MONTHS</th>
                    <th className="py-6 px-4 text-[#36a9ff] font-black uppercase text-sm tracking-widest text-center w-1/4 border-b border-[#051f33]/10">6 MONTHS</th>
                  </tr>
                </thead>
                <tbody>
                  {planComparison.map((row, idx) => (
                    <tr key={idx}>
                      <td className={`py-5 px-4 font-bold text-[#051f33] text-[13px] uppercase ${idx !== planComparison.length - 1 ? 'border-b border-[#051f33]/10' : ''}`}>
                        {row.feature}
                      </td>
                      <td className={`py-5 px-4 text-center font-bold text-[#051f33]/80 text-[13px] ${idx !== planComparison.length - 1 ? 'border-b border-[#051f33]/10' : ''}`}>
                        {row.m3}
                      </td>
                      <td className={`py-5 px-4 text-center font-bold text-[#ffc107] text-[13px] md:bg-transparent bg-gray-50 
                        ${idx !== planComparison.length - 1 ? 'border-b border-[#051f33]/10 md:border-b md:border-black/10' : 'md:border-b-0 rounded-b-2xl'}`}>
                        {row.m12}
                      </td>
                      <td className={`py-5 px-4 text-center font-bold text-[#051f33]/80 text-[13px] ${idx !== planComparison.length - 1 ? 'border-b border-[#051f33]/10' : ''}`}>
                        {row.m6}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <section className="mt-32">
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

          {/* Top Row — first 3 features as large cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {includedFeatures.slice(0, 3).map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-[#145082] rounded-2xl p-8 flex flex-col gap-4 hover:bg-[#1a6098] transition-colors duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-extrabold text-base tracking-wide uppercase">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row — remaining features as smaller cards */}
          <div className={`grid grid-cols-2 gap-5 ${includedFeatures.slice(3).length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
            {includedFeatures.slice(3).map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-[#145082] rounded-2xl p-6 flex flex-col gap-3 hover:bg-[#1a6098] transition-colors duration-300 group shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-sm tracking-wide uppercase">{title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-3xl font-black text-black uppercase drop-shadow-sm">Billing &amp; Subscription FAQ</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {billingQuestions.map((item) => (
              <div className="flex flex-col rounded-xl overflow-hidden border border-black/10 bg-gray-50/80 backdrop-blur-sm shadow-sm hover:border-[#36a9ff]/50 transition-colors" key={item.question}>
                <div className="border-b border-black/5 px-5 py-4 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#36a9ff] shrink-0 mt-0.5" />
                  <h3 className="text-base sm:text-lg font-bold text-black leading-snug">
                    {item.question}
                  </h3>
                </div>
                <div className="p-5 text-sm text-gray-600 leading-relaxed flex-1 font-medium">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-gray-600">
          <ShieldCheck className="h-5 w-5 text-[#36a9ff]" />
          <span className="font-semibold text-black">Secure ordering</span> and friendly Strimo IPTV support.
        </div>
      </div>
    </section>
  );
}
