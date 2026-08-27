"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, CheckCircle2, X, CreditCard, Headphones, HelpCircle, MonitorSmartphone, ShieldCheck, Sparkles, Tv, Zap, Bitcoin, Wallet } from "lucide-react";

type PlanFeature = {
  text: string;
  included: boolean;
};

type Plan = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  durationLabel: string;
  period: string;
  saving?: string;
  popular?: boolean;
  features: PlanFeature[];
  buttonText: string;
};

const defaultFeatures: PlanFeature[] = [
  { text: "4K, HD & SD Quality", included: true },
  { text: "+30,000 Live TV Channels", included: true },
  { text: "All Live Sports", included: true },
  { text: "+150,000 Movies & Series (VOD)", included: true },
  { text: "Anti-Freezing (No Buffering)", included: true },
  { text: "Up to 4 Days Catch-Up", included: true },
  { text: "TV Guide (EPG)", included: true },
  { text: "Free Pay-Per-View (PPV)", included: true },
  { text: "Built-in VPN Protection", included: true },
  { text: "Adult Channels (Optional)", included: true },
  { text: "3-Day Money-Back Guarantee", included: true },
  { text: "24/7 Technical Support", included: true },
];

const plans: Plan[] = [
  {
    id: "3-months",
    name: "3 Months",
    subtitle: "Perfect for trying out our premium service.",
    price: 35,
    durationLabel: "3 Months",
    period: "/ 3 months",
    saving: "Save 22%",
    features: defaultFeatures,
    buttonText: "Select Pro",
  },
  {
    id: "12-months",
    name: "12 Months",
    subtitle: "The ultimate entertainment experience for a full year.",
    price: 69.99,
    oldPrice: 80,
    durationLabel: "12 Months",
    period: "/ year",
    saving: "Save 61%",
    popular: true,
    features: defaultFeatures,
    buttonText: "Get Ultimate Pass",
  },
  {
    id: "6-months",
    name: "6 Months",
    subtitle: "A solid choice for half a year of uninterrupted joy.",
    price: 49.99,
    durationLabel: "6 Months",
    period: "/ 6 months",
    saving: "Save 44%",
    features: defaultFeatures,
    buttonText: "Select Basic",
  },
];

const includedFeatures = [
  { icon: Tv, title: "+50,000 Channels", text: "Explore live channels from around the world, including sports, news and entertainment." },
  { icon: MonitorSmartphone, title: "200,000+ VODs", text: "Enjoy +120,000 Films & Series and a massive, regularly refreshed video-on-demand library." },
  { icon: Zap, title: "Anti-freeze Technology", text: "Optimized streaming technology helps deliver a smoother experience at busy times." },
  { icon: Headphones, title: "24/7 Support", text: "The Zyminex IPTV support team is here to help with setup and streaming questions." },
  { icon: Sparkles, title: "Fast Setup", text: "Your Zyminex IPTV details are sent after payment so you can start setting up quickly." },
  { icon: CreditCard, title: "TV Guide (EPG)", text: "Browse your channel schedule more easily with an electronic programme guide." },
];

const billingQuestions = [
  { question: "1. Which payment methods can I use?", answer: <>Available payment options are shown when you place your order. <Link className="font-semibold text-primary-500 hover:text-primary-600 transition-colors" href="/contact">Contact Zyminex IPTV support</Link> if you need help before purchasing.</> },
  { question: "2. Is my payment protected?", answer: "Please use the official Zyminex IPTV payment process and never share payment details through an unverified link or message." },
  { question: "3. Will my subscription renew automatically?", answer: <>Renewal details are provided when you order. If you have any questions about your subscription period or renewal, <Link className="font-semibold text-primary-500 hover:text-primary-600 transition-colors" href="/contact">contact support</Link> before your plan expires.</> },
  { question: "4. Can I change my plan or number of connections?", answer: <>Yes. <Link className="font-semibold text-primary-500 hover:text-primary-600 transition-colors" href="/contact">Contact the support team</Link> with your order email and the plan or connection change you need, and they will advise on the available options.</> },
];

export default function PricingPageContent() {
  const [devices, setDevices] = useState(1);
  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the ${plan.name} plan (${plan.durationLabel}) with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden bg-[#141414] py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-600">Zyminex IPTV</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="block text-white uppercase">Choose Your Exclusive</span>
            <span className="mt-1 block text-primary-500 uppercase">Subscription Plans.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">Choose the Zyminex IPTV plan that fits you, with secure checkout and helpful 24/7 support.</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-400">Need help getting started? Visit our <Link className="font-semibold text-primary-500 hover:text-primary-600" href="/installation">installation guide</Link> or browse the <Link className="font-semibold text-primary-500 hover:text-primary-600" href="/channels">channel list</Link> before you order.</p>
        </header>

        {/* Device Selector */}
        <div className="mx-auto mb-14 max-w-2xl" role="radiogroup" aria-label="Number of device connections">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-gray-400">Choose your connections</p>
          <div className="grid grid-cols-3 rounded-md border border-white/10 bg-[#1e1e1e] p-1.5 shadow-sm">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  aria-checked={selected}
                  className={`rounded px-3 py-3 text-sm font-bold transition-all ${selected ? "bg-[#E50914] text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                  key={count}
                  onClick={() => setDevices(count)}
                  role="radio"
                  type="button"
                >
                  {count} Device{count > 1 ? "s" : ""}
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
              className={`relative flex flex-col rounded-md bg-[#262626] p-8 text-left transition-transform duration-300 hover:-translate-y-1 ${plan.popular
                  ? "border-t-[3px] border-t-[#E50914] md:scale-105 z-10 shadow-2xl"
                  : "border border-white/5"
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#E50914] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  MOST POPULAR
                </div>
              )}

              <div className="pb-6 border-b border-white/10">
                <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 min-h-[40px]">{plan.subtitle}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight text-white">${priceFor(plan)}</span>
                  <span className="text-sm font-medium text-gray-400">{plan.period}</span>
                </div>

                <div className="min-h-[20px] mt-2 flex items-center gap-2">
                  {plan.saving && (
                    <p className="text-xs font-bold text-[#E50914]">{plan.saving}</p>
                  )}
                  {plan.oldPrice && (
                    <p className="text-xs font-medium text-gray-500 line-through">${(plan.oldPrice * devices).toFixed(2)}</p>
                  )}
                </div>
              </div>

              <ul className="mt-8 flex-grow space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 shrink-0 text-[#E50914]" strokeWidth={3} />
                    ) : (
                      <X className="h-5 w-5 shrink-0 text-gray-500" strokeWidth={3} />
                    )}
                    <span className={`text-sm ${feature.included ? "text-gray-200" : "text-gray-500"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={() => handleOrder(plan)}
                  className={`w-full py-4 text-sm font-bold text-white transition-all duration-300 rounded-sm transform active:scale-95 hover:-translate-y-1 hover:shadow-lg ${plan.popular
                      ? "bg-[#E50914] hover:bg-[#B3000B] hover:shadow-[#E50914]/40"
                      : "bg-transparent border border-gray-600 hover:border-gray-400 hover:bg-white/5 hover:shadow-white/5"
                    }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Security Banner */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-[#141414] p-6 shadow-sm border border-white/5 border-l-4 border-l-orange-500">
            <div>
              <h4 className="text-lg font-bold text-white">Secure Payments & Instant Access</h4>
              <p className="mt-1 text-sm text-gray-400 font-medium">Pay safely using Crypto, Credit Card, or PayPal. Your details are encrypted instantly.</p>
            </div>
            <div className="flex shrink-0 items-center gap-4 text-gray-400">
              <CreditCard className="h-7 w-7" strokeWidth={1.5} />
              <Bitcoin className="h-7 w-7" strokeWidth={1.5} />
              <Wallet className="h-7 w-7" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold text-white uppercase">Every plan includes</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map(({ icon: Icon, title, text }) => (
              <article className="rounded-2xl border border-white/5 bg-[#141414] p-6 text-center shadow-sm" key={title}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-primary-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-3xl font-black text-white uppercase">Billing &amp; Subscription FAQ</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {billingQuestions.map((item) => (
              <div className="flex flex-col rounded-xl overflow-hidden border border-white/10 bg-[#141414] shadow-sm hover:border-orange-200 transition-colors" key={item.question}>
                <div className="bg-[#141414] border-b border-white/5 px-5 py-4 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.question}
                  </h3>
                </div>
                <div className="p-5 text-sm text-gray-400 leading-relaxed bg-[#141414] flex-1">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-gray-400">
          <ShieldCheck className="h-5 w-5 text-primary-500" />
          <span className="font-semibold text-white">Secure ordering</span> and friendly Zyminex IPTV support.
        </div>
      </div>
    </section>
  );
}
