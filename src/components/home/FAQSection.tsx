"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

type FAQ = {
  id: number;
  category: string;
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    id: 1,
    category: "General",
    question: "What is RealMIPTV?",
    answer: (
      <>
        RealMIPTV is a premium IPTV service providing live TV channels, VOD movies, TV series, and sports in stunning 4K streaming quality. Explore our{" "}
        <Link
          href="/channels-list"
          className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
        >
          live TV channels
        </Link>{" "}
        and{" "}
        <a
          href="#pricing"
          className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
        >
          IPTV subscription plans
        </a>
        .
      </>
    ),
  },
  {
    id: 2,
    category: "General",
    question: "Do I need a subscription to use RealMIPTV?",
    answer: (
      <>
        Yes, a subscription is required. However, we offer a{" "}
        <a
          href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20realmiptv%20IPTV."
          target="_blank"
          rel="noreferrer"
          className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
        >
          free trial
        </a>{" "}
        so you can test the service before committing to our{" "}
        <a
          href="#pricing"
          className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
        >
          subscription plans
        </a>
        .
      </>
    ),
  },
  {
    id: 3,
    category: "Technical",
    question: "What devices are compatible with RealMIPTV?",
    answer: (
      <>
        RealMIPTV works seamlessly on Android TV, Firestick, Smart TVs, smartphones, tablets, and apps like Tivimate. Check our{" "}
        <Link
          href="/installation"
          className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
        >
          installation guides
        </Link>{" "}
        to get started.
      </>
    ),
  },
  {
    id: 4,
    category: "Technical",
    question: "Can I watch on multiple devices at the same time?",
    answer: (
      <>
        Yes, we offer multi-device support. You can choose an{" "}
        <a
          href="#pricing"
          className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
        >
          IPTV subscription plan
        </a>{" "}
        that allows streaming on more than one device simultaneously. Perfect for families or shared accounts.
      </>
    ),
  },
  {
    id: 5,
    category: "General",
    question: "Can I watch live sports on RealMIPTV?",
    answer: (
      <>
        Absolutely. We offer a wide selection of live sports channels, including major leagues and international events. Explore our full{" "}
        <Link
          href="/channels-list"
          className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
        >
          channels catalog
        </Link>
        .
      </>
    ),
  },
  {
    id: 6,
    category: "Billing",
    question: "What payment methods do you accept?",
    answer: (
      <>
        We accept PayPal, cryptocurrency (such as Bitcoin), credit cards, and instant bank transfers for quick and secure payments. Contact our{" "}
        <Link
          href="/contact"
          className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
        >
          support team
        </Link>{" "}
        for any payment inquiries.
      </>
    ),
  },
  {
    id: 7,
    category: "General",
    question: "What kind of content is included?",
    answer: (
      <>
        The service includes live TV channels, sports, movies, TV series, kids&apos; content, international channels, and more – all in HD or 4K quality. Learn more in our{" "}
        <Link
          href="/channels"
          className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
        >
          channels catalog
        </Link>
        .
      </>
    ),
  },
  {
    id: 8,
    category: "Technical",
    question: "Do I need a VPN?",
    answer: (
      <>
        A VPN is not required but is recommended in some regions to ensure unrestricted access and added privacy. Read our{" "}
        <Link
          href="/faq"
          className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
        >
          FAQ knowledge base
        </Link>{" "}
        for further setup details.
      </>
    ),
  },
];

const categories = ["General", "Technical", "Billing"];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 bg-transparent text-black relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#36a9ff]/10 text-[#36a9ff] font-bold text-xs tracking-widest uppercase mb-6 border border-[#36a9ff]/20 animate-fade-up">
            SUPPORT & HELP
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.1] animate-fade-up">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36a9ff] to-[#2196f3]">
              Questions (FAQ)
            </span>
          </h2>
        </div>

        {/* 2-Column FAQ Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          {faqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            
            return (
              <div 
                key={faq.id} 
                className="bg-gradient-to-b from-[#497598] to-[#8fb0c9] rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-white focus:outline-none"
                >
                  <span className="text-sm md:text-base">{faq.question}</span>
                  <span className={`text-white shrink-0 ml-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 pt-0 text-sm leading-relaxed text-white/90 border-t border-white/20">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#36a9ff] text-white font-bold text-xs sm:text-sm hover:bg-[#2196f3] transition-all duration-300 shadow-lg"
          >
            <span>View Complete FAQ Knowledge Base</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
