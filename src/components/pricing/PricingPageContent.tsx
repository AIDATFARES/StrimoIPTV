"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Gift, Tv, Headphones, HelpCircle, MonitorSmartphone, ShieldCheck, Sparkles, Zap, CreditCard, Bitcoin, Wallet, ArrowRight } from "lucide-react";

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

const commonFeatures = [
  "StrimoIPTV subscription for {devices} Device{s}",
  "Uncompressed Ultra HD & 4K Streaming",
  "50,000+ Premium Live International Channels",
  "200,000+ VOD Movies & Series (Daily Updates)",
  "All Premium Sports Passes & PPV Events",
  "Full Electronic Program Guide (EPG)",
  "Advanced Anti-Freeze Cloud Server Infrastructure",
  "Free VPN Compatibility Built-in",
  "Direct 24/7 WhatsApp VIP Technical Support",
];

const plans: Plan[] = [
  {
    id: "3-months",
    name: "3 MONTHS",
    badge: "STARTER",
    price: 29.99,
    durationLabel: "3 Months",
    months: 3,
    buttonText: "SELECT 3 MONTHS",
  },
  {
    id: "12-months",
    name: "12 MONTHS",
    badge: "MOST POPULAR",
    price: 64.99,
    durationLabel: "12 Months",
    months: 12,
    popular: true,
    buttonText: "GET 12 MONTHS",
  },
  {
    id: "6-months",
    name: "6 MONTHS",
    badge: "VALUE",
    price: 44.99,
    durationLabel: "6 Months",
    months: 6,
    buttonText: "SELECT 6 MONTHS",
  },
];

const includedFeatures = [
  { icon: Tv, title: "+50,000 Live Channels", text: "Explore global channels across sports, news, documentaries, and premium entertainment." },
  { icon: MonitorSmartphone, title: "200,000+ VODs", text: "Enjoy cinema blockbusters, daily updated TV series, and multi-audio tracks." },
  { icon: Zap, title: "Anti-Freeze Technology", text: "Cloud server load balancing ensures 99.9% uptime and zero buffering during peak hours." },
  { icon: Headphones, title: "24/7 Support", text: "Dedicated technical assistance available on WhatsApp around the clock." },
  { icon: Sparkles, title: "Instant Activation", text: "Login credentials and setup guides dispatched immediately upon payment." },
  { icon: CreditCard, title: "TV Guide (EPG)", text: "Complete electronic program guide with 7-day catchup and event reminders." },
];

const billingQuestions = [
  { question: "1. Which payment methods can I use?", answer: "We support Credit/Debit Cards, PayPal, Bitcoin, and Crypto (USDT). Contact support if you need assistance during checkout." },
  { question: "2. Is my payment protected?", answer: "Yes, all transactions are processed through encrypted 256-bit SSL gateways for maximum security." },
  { question: "3. Will my subscription renew automatically?", answer: "No automatic charges. We will send you a renewal reminder before your plan expires so you remain in total control." },
  { question: "4. Can I change my plan or number of connections?", answer: "Yes! Simply contact our support team on WhatsApp with your account details to add connections or upgrade your plan." },
];

export default function PricingPageContent() {
  const [devices, setDevices] = useState(1);
  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);
  const monthlyPrice = (plan: Plan) => ((plan.price * devices) / plan.months).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the StrimoIPTV ${plan.name} plan with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Page Header */}
        <header className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-cyan-500/20 px-4 py-1 mb-6">
            <Gift className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
              TRANSPARENT PLANS & PRICING
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F8FAFC]">
            STRIMOIPTV <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">SUBSCRIPTION PLANS</span>
          </h1>
          <p className="mx-auto mt-6 text-base sm:text-lg text-[#A7B0C0] font-normal leading-relaxed max-w-2xl">
            Choose your subscription duration. Enjoy larger discounts on longer plans, and stream simultaneously across multiple devices.
          </p>
        </header>

        {/* Device Selector */}
        <div className="mx-auto mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <Tv className="h-4 w-4 text-cyan-400" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#A7B0C0]">Select Number of Devices</p>
          </div>
          <div className="inline-flex rounded-full border border-white/10 p-1.5 bg-[#0D111B]">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  key={count}
                  onClick={() => setDevices(count)}
                  className={`rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold transition-all uppercase tracking-wide ${
                    selected
                      ? "btn-primary-strimo"
                      : "text-[#A7B0C0] hover:text-white"
                  }`}
                >
                  {count} Device{count > 1 ? "s" : ""}
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
              className={`relative flex flex-col rounded-2xl p-8 text-left transition-all duration-300 ${
                plan.popular
                  ? "strimo-featured-card md:scale-105 z-10"
                  : "strimo-card"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="block text-cyan-400 font-extrabold uppercase tracking-widest text-xs">
                  {plan.badge}
                </span>
                {plan.popular && (
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                    MOST POPULAR
                  </span>
                )}
              </div>

              <div className="pb-6">
                <h3 className="text-2xl font-black text-[#F8FAFC] uppercase mb-4">{plan.name}</h3>
                
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-5xl font-black tracking-tight text-white">${priceFor(plan)}</span>
                </div>

                <div className="inline-flex rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1">
                  <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
                    JUST ${monthlyPrice(plan)} / MONTH
                  </span>
                </div>
              </div>

              <div className="my-4 border-t border-white/10" />

              <ul className="my-4 flex-grow space-y-3">
                {commonFeatures.map((featureText, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A7B0C0]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                    <span>
                      {featureText.replace('{devices}', devices.toString()).replace('{s}', devices > 1 ? 's' : '')}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => handleOrder(plan)}
                  className={`w-full py-4 text-xs font-extrabold uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "btn-primary-strimo"
                      : "btn-secondary-strimo"
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Free Trial Banner */}
        <div className="mx-auto mt-16 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-[#0D111B] p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <Gift className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white uppercase">Want to test StrimoIPTV first?</h3>
              <p className="text-xs text-[#A7B0C0]">Request a free trial pass to evaluate our 4K servers on your device.</p>
            </div>
          </div>
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20pass."
            target="_blank"
            rel="noreferrer"
            className="btn-primary-strimo px-8 py-3 text-xs uppercase tracking-wider whitespace-nowrap font-extrabold"
          >
            GET FREE TRIAL
          </a>
        </div>

        {/* Features Grid */}
        <section className="mt-28">
          <div className="text-center mb-14">
            <span className="inline-block py-1 px-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
              INCLUDED WITH ALL PLANS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#F8FAFC]">
              Everything You Need for <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Ultimate Streaming</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedFeatures.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="strimo-card p-6 rounded-2xl flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-base">{title}</h3>
                <p className="text-[#A7B0C0] text-xs leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Billing FAQ */}
        <section className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-3xl font-black text-white uppercase">Billing FAQ</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {billingQuestions.map((item) => (
              <div className="strimo-card p-6 rounded-xl space-y-2" key={item.question}>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  {item.question}
                </h3>
                <p className="text-xs text-[#A7B0C0] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
}
