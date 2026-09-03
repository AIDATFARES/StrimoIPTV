"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Headphones,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Zap,
  ArrowRight,
} from "lucide-react";

type CreditPlan = {
  id: string;
  credits: number;
  price: number;
  popular?: boolean;
  bestValue?: boolean;
};

const creditPlans: CreditPlan[] = [
  {
    id: "100-credits",
    credits: 100,
    price: 399,
  },
  {
    id: "200-credits",
    credits: 200,
    price: 799,
    popular: true,
  },
  {
    id: "300-credits",
    credits: 300,
    price: 1199,
    bestValue: true,
  },
  {
    id: "400-credits",
    credits: 400,
    price: 1599,
  },
  {
    id: "500-credits",
    credits: 500,
    price: 1999,
  },
];

const planFeatures = [
  "1 Credit = 1 Month IPTV Subscription",
  "Free Trial Creation Everyday",
  "Custom Channel Category Groups",
  "Pay-As-You-Go Credit System",
  "Credits Never Expire",
  "24/7 Dedicated Reseller Support",
  "Create Unlimited Sub-Resellers",
];

const advantages = [
  {
    icon: ShoppingCart,
    title: "UNIVERSAL COMPATIBILITY",
    description:
      "StrimoIPTV reseller streams work seamlessly on Smart TVs, Firestick, Android Box, MAG, Apple TV, iOS, and PC.",
  },
  {
    icon: Server,
    title: "HIGH-CAPACITY SERVERS",
    description:
      "Anti-freeze load balanced servers across North America and Europe guaranteeing 99.9% uptime for your clients.",
  },
  {
    icon: Headphones,
    title: "24/7 VIP SUPPORT",
    description:
      "Direct technical help for line migration, portal setup, and client troubleshooting on WhatsApp 7 days a week.",
  },
  {
    icon: Zap,
    title: "FULL CONTROL PANEL",
    description:
      "Effortlessly manage customer lines, edit bouquet channels, issue free test trials, and track sub-reseller balances.",
  },
];

const resellerFaqs = [
  {
    question: "DOES THE CONTROL PANEL EXPIRE?",
    answer:
      "No, your StrimoIPTV reseller control panel access remains active permanently, and your credit balance never expires.",
  },
  {
    question: "CAN I RENEW A CLIENT SUBSCRIPTION?",
    answer:
      "Yes! You can extend or renew any client subscription directly from your reseller dashboard with a single click.",
  },
  {
    question: "CAN I MODIFY CLIENT LINES OR PLAYLIST FORMATS?",
    answer:
      "Absolutely. You can change lines from M3U to Xtream Codes API, update MAC address portals, or edit channel groups anytime.",
  },
  {
    question: "HOW DO I SELL IPTV SUBSCRIPTIONS?",
    answer:
      "You can sell subscriptions through your website, social media pages, local contacts, or online store. You set your own prices and keep 100% of your profits.",
  },
  {
    question: "HOW DO I CREATE A SUB-RESELLER PANEL?",
    answer:
      "Inside your master dashboard, navigate to Sub-Reseller Management, set up a username and password, and transfer credits from your balance.",
  },
  {
    question: "CAN I PAUSE OR DISABLE A CLIENT LINE?",
    answer:
      "Yes, you have total administrative control to pause, disable, edit, or extend client access lines whenever necessary.",
  },
];

export default function ResellerPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOrderPanel = (plan?: CreditPlan) => {
    const message = plan
      ? `Hello! I would like to order the StrimoIPTV Reseller Panel with ${plan.credits} Credits for $${plan.price}.`
      : `Hello! I am interested in becoming a StrimoIPTV Reseller and would like to request panel access.`;
    window.open(
      `https://wa.me/213552069874?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleFreeTrial = () => {
    const message = `Hello! I am interested in testing a StrimoIPTV Reseller Panel demo account.`;
    window.open(
      `https://wa.me/213552069874?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 text-format-marketing">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* HERO SECTION */}
        <header className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            IPTV RESELLER PROGRAM
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#F8FAFC]">
            STRIMOIPTV <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              RESELLER PANEL
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#A7B0C0]">
            Launch your own profitable IPTV business today. Get access to our high-margin Xtream Codes reseller control panel, zero-buffer 4K servers, and 24/7 technical support.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handleFreeTrial}
              className="btn-primary-strimo px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider flex items-center gap-2"
            >
              <span>Test Demo Panel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* RESELLER CREDIT PLANS */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight text-[#F8FAFC]">
              Reseller <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Credit Packages</span>
            </h2>
            <p className="mt-3 text-base text-[#A7B0C0]">
              High profit margins with non-expiring credits and automated panel activation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch">
            {creditPlans.map((plan) => (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ${
                  plan.popular
                    ? "strimo-featured-card scale-105 z-10"
                    : "strimo-card"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-lg whitespace-nowrap">
                    MOST POPULAR
                  </span>
                )}
                {plan.bestValue && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500/20 border border-cyan-500/40 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-cyan-300 whitespace-nowrap">
                    BEST VALUE
                  </span>
                )}

                <div className="text-center">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">
                    RESELLER CREDIT
                  </span>
                  <h3 className="mt-1 text-2xl font-black text-[#F8FAFC]">
                    {plan.credits} Credits
                  </h3>
                </div>

                <div className="my-5 rounded-xl bg-[#080B14] border border-white/10 py-4 text-center">
                  <span className="text-4xl font-black text-white">
                    ${plan.price}
                  </span>
                </div>

                <ul className="flex-grow space-y-3 border-t border-white/5 pt-4 text-xs text-[#A7B0C0]">
                  {planFeatures.map((feature) => (
                    <li className="flex items-start gap-2" key={feature}>
                      <Check className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleOrderPanel(plan)}
                  className={`mt-6 w-full py-3.5 text-xs font-extrabold uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "btn-primary-strimo"
                      : "btn-secondary-strimo"
                  }`}
                >
                  <span>Order Panel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* ADVANTAGES OF IPTV RESELLER */}
        <div className="mt-28">
          <h2 className="text-center text-3xl sm:text-5xl font-black leading-tight tracking-tight text-[#F8FAFC]">
            Why Partner with <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">StrimoIPTV?</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="strimo-card p-6 rounded-2xl flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#A7B0C0]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RESELLER FAQ */}
        <div className="mx-auto mt-28 max-w-4xl">
          <h2 className="text-center text-3xl sm:text-4xl font-black leading-tight tracking-tight text-[#F8FAFC]">
            Reseller <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">FAQ</span>
          </h2>

          <div className="mt-10 space-y-3">
            {resellerFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="strimo-card rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 text-left font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    <span className="text-xs sm:text-sm tracking-wide uppercase font-extrabold">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-cyan-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-cyan-400" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/5 p-5 text-xs text-[#A7B0C0] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => handleOrderPanel()}
              className="btn-primary-strimo px-10 py-4 text-xs font-extrabold uppercase tracking-wider flex items-center gap-2"
            >
              <span>Become StrimoIPTV Reseller</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* TRUST BADGE */}
        <div className="mt-16 flex items-center justify-center gap-2 text-xs font-semibold text-[#A7B0C0]">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>Official Xtream Codes Reseller Panel - 99.9% Uptime Guarantee</span>
        </div>
      </div>
    </section>
  );
}
