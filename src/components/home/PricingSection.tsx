"use client";

import { useState } from "react";
import { CheckCircle2, Gift, Tv } from "lucide-react";
import Image from "next/image";

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
  { text: "StrimoIPTV for {devices} Device{s}", included: true },
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

export default function PricingSection() {
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
    <section id="pricing" className="relative bg-transparent py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <header className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#36a9ff] px-4 py-1 mb-6">
            <Gift className="h-4 w-4 text-black" />
            <span className="text-[10px] font-bold text-black tracking-widest uppercase">
              BEST VALUE PLANS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-[54px] font-black tracking-tight leading-[1.1] uppercase drop-shadow-lg">
            <span className="text-black">CHOOSE YOUR </span>
            <span className="text-[#36a9ff]">STRIMOIPTV PLAN</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-black/90 font-medium leading-relaxed max-w-2xl mx-auto">
            Select your StrimoIPTV subscription duration. Enjoy larger discounts on longer plans, and share the ultimate premium IPTV streaming experience across multiple devices simultaneously.
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
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 items-stretch">
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

      </div>
    </section>
  );
}
