"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, CircleHelp, CreditCard, Mail, MessageCircle, Send, Settings2, UserRound, Clock3 } from "lucide-react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: "What is StrimoIPTV?",
    answer: (
      <>
        StrimoIPTV is a premium IPTV streaming service providing live TV channels, VOD movies, TV series, and sports events in 4K &amp; FHD quality over the internet.
      </>
    ),
  },
  {
    question: "Is StrimoIPTV authorized and legal?",
    answer: (
      <>
        StrimoIPTV operates in compliance with digital streaming protocols. Please ensure that your local network usage accords with streaming regulations in your region.
      </>
    ),
  },
  {
    question: "What channels and content are included with StrimoIPTV?",
    answer: (
      <>
        StrimoIPTV includes over 50,000 live channels across sports, news, entertainment, and kids programming, alongside 200,000+ VOD movies and daily updated series.
      </>
    ),
  },
  {
    question: "Can I watch live sports and PPV events on StrimoIPTV?",
    answer: (
      <>
        Yes! StrimoIPTV includes all premium pay-per-view sports networks (NFL, NBA, MLB, NHL, UFC, Boxing, F1, and Champions League) with zero extra fees.
      </>
    ),
  },
  {
    question: "Which devices can I use with StrimoIPTV?",
    answer: (
      <>
        StrimoIPTV works seamlessly on Smart TVs (Samsung, LG, Sony), Amazon Firestick, Android TV boxes, Apple TV, iOS, Android devices, MAG boxes, and PC/Mac browsers.
      </>
    ),
  },
  {
    question: "How fast is activation after ordering?",
    answer: (
      <>
        Activation is instant and fully automated. Your StrimoIPTV login credentials and M3U playlist details are sent to your email and WhatsApp immediately after payment.
      </>
    ),
  },
  {
    question: "Do I need a VPN to stream StrimoIPTV?",
    answer: (
      <>
        A VPN is not strictly required because our servers use encrypted stream tunnels. However, a VPN can be used if your local ISP throttles streaming connections.
      </>
    ),
  },
  {
    question: "Are there any hidden fees or contracts with StrimoIPTV?",
    answer: (
      <>
        No contracts and no hidden fees. You only pay for the StrimoIPTV plan duration you choose (1, 3, 6, 12, or 24 months).
      </>
    ),
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  function sendSupportMessage(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "General support").trim();
    const message = String(formData.get("message") || "").trim();
    const text = encodeURIComponent(`Hello StrimoIPTV support,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`);
    window.open(`https://wa.me/447882781998?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="flex-grow px-4 sm:px-6 pb-20 pt-28">
      <div className="mx-auto max-w-[1140px]">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-cyan-500/10 text-cyan-400 font-bold text-xs tracking-widest uppercase mb-4 border border-cyan-500/20">
            STRIMOIPTV HELP CENTER
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F8FAFC] tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#A7B0C0]">
            Find answers to common questions about StrimoIPTV setups, channel lineups, device compatibility, and subscription plans.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const contentId = `faq-item-${index}`;

            return (
              <div 
                key={index} 
                className="strimo-card rounded-xl overflow-hidden"
              >
                <button
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-white focus:outline-none hover:text-cyan-400 transition-colors"
                >
                  <span className="text-sm md:text-base">{faq.question}</span>
                  <span className={`text-cyan-400 shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                
                {isOpen && (
                  <div 
                    id={contentId}
                    className="p-5 pt-0 text-xs sm:text-sm leading-relaxed text-[#A7B0C0] border-t border-white/5 pt-3"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <section className="mt-20 border-t border-white/10 pt-16 sm:pt-20">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-[#F8FAFC]">Get in Touch with StrimoIPTV Support</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#A7B0C0]">We&apos;re here 24/7 to assist with playlist setup and technical questions.</p>
          </header>
          
          <div className="mt-10 grid gap-8 xl:grid-cols-[278px_minmax(0,1fr)] xl:gap-10">
            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <a className="strimo-card p-5 text-center flex flex-col items-center justify-center rounded-2xl" href="mailto:support@strimoiptv4k.shop">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="block text-sm font-bold text-white">Email Us</span>
                <span className="mt-1 block text-xs text-[#A7B0C0]">support@strimoiptv4k.shop</span>
              </a>

              <a className="strimo-card p-5 text-center flex flex-col items-center justify-center rounded-2xl" href="https://wa.me/447882781998" target="_blank" rel="noreferrer">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <span className="block text-sm font-bold text-white">WhatsApp</span>
                <span className="mt-1 block text-xs text-[#25D366] font-bold">Start Live Chat</span>
              </a>

              <div className="strimo-card p-5 text-center flex flex-col items-center justify-center rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                  <Clock3 className="h-5 w-5" />
                </div>
                <span className="block text-sm font-bold text-white">Response Time</span>
                <span className="mt-1 block text-xs text-[#A7B0C0]">Under 15 minutes</span>
              </div>
            </div>

            <div className="strimo-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>
              <form action={sendSupportMessage} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="w-full rounded-xl border border-white/10 bg-[#080B14] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-cyan-400" name="name" placeholder="John Doe" required />
                  <input className="w-full rounded-xl border border-white/10 bg-[#080B14] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-cyan-400" name="email" placeholder="john@example.com" required type="email" />
                </div>
                <input className="w-full rounded-xl border border-white/10 bg-[#080B14] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-cyan-400" name="subject" placeholder="How can we help?" />
                <textarea className="min-h-32 w-full resize-y rounded-xl border border-white/10 bg-[#080B14] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-cyan-400" name="message" placeholder="Describe your question..." required />
                <button className="btn-primary-strimo w-full py-3.5 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2" type="submit">
                  <Send className="h-4 w-4" /> Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
