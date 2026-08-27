"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";

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
    question: "What is Zyminex IPTV?",
    answer: (
      <>
        Zyminex IPTV is a premium IPTV service that offers live TV, VOD movies, TV series, and sports channels in high-quality streaming, including 4K. Check out our{" "}
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
    question: "Do I need a subscription to use Zyminex IPTV?",
    answer: (
      <>
        Yes, a subscription is required. However, we offer a{" "}
        <a
          href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20zyminexiptv%20IPTV."
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
    question: "What devices are compatible with Zyminex IPTV?",
    answer: (
      <>
        Zyminex IPTV works on Android TV, Firestick, Smart TVs, Android phones, tablets, and apps like Tivimate. Follow our step-by-step{" "}
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
    question: "Can I watch sports on Zyminex IPTV?",
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
          href="/blog"
          className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
        >
          IPTV articles & guides
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
  const [activeCategory, setActiveCategory] = useState("General");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 bg-transparent text-white relative z-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#36a9ff]/10 text-[#36a9ff] font-bold text-xs tracking-widest uppercase mb-6 border border-[#36a9ff]/20 animate-fade-up">
            SUPPORT & HELP
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] animate-fade-up">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36a9ff] to-[#2196f3]">
              Questions (FAQ)
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-5 leading-relaxed max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Find answers to common questions about our IPTV service. If you need further help, our{" "}
            <Link
              href="/contact"
              className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
            >
              Contact Support
            </Link>{" "}
            team is available 24/7.
          </p>
        </div>

        {/* Tabbed FAQ Layout */}
        <div className="flex flex-col md:flex-row gap-8 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          
          {/* Left Column: Categories */}
          <div className="w-full md:w-64 shrink-0 bg-[#051f33]/80 backdrop-blur-sm rounded-xl p-6 h-fit border border-[#36a9ff]/20 shadow-[0_0_20px_rgba(54,169,255,0.05)]">
            <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setExpandedId(null);
                    }}
                    className={`text-left px-4 py-3 rounded-md text-sm font-bold transition-all flex items-center ${
                      isActive 
                        ? "bg-[#36a9ff]/10 border-l-2 border-[#36a9ff] text-[#36a9ff]" 
                        : "text-gray-300 hover:bg-[#36a9ff]/5 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Questions */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              {activeCategory} Questions
            </h3>
            
            <div className="flex flex-col gap-3">
              {filteredFaqs.map((faq) => {
                const isExpanded = expandedId === faq.id;
                
                return (
                  <div 
                    key={faq.id} 
                    className="bg-[#051f33]/80 backdrop-blur-sm rounded-md border border-[#36a9ff]/20 overflow-hidden transition-all duration-300 hover:border-[#36a9ff]/50 shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex justify-between items-center p-5 text-left font-semibold text-white focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <span className="text-gray-400 shrink-0 ml-4">
                        {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-5 pt-0 text-sm leading-relaxed text-gray-400">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {filteredFaqs.length === 0 && (
                <div className="text-gray-400 text-sm p-4 text-center">
                  No questions found for this category.
                </div>
              )}
            </div>
          </div>
          
        </div>

        {/* Bottom CTA to Knowledge Base */}
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
