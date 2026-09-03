"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, CircleHelp, Clock3, CreditCard, HelpCircle, Mail, MessageCircle, MonitorPlay, Send, Settings2, UserRound } from "lucide-react";

type Category = "About strimoiptv" | "Setup & streaming" | "Plans & access" | "Payments & support";

type FAQItem = {
  category: Category;
  question: string;
  answer: React.ReactNode;
};

const categories: { label: Category; icon: typeof CircleHelp }[] = [
  { label: "About strimoiptv", icon: CircleHelp },
  { label: "Setup & streaming", icon: Settings2 },
  { label: "Plans & access", icon: UserRound },
  { label: "Payments & support", icon: CreditCard },
];

const faqs: FAQItem[] = [
  {
    category: "About strimoiptv",
    question: "1. What is Strimo IPTV?",
    answer: (
      <>
        Strimo IPTV is a premium IPTV service that offers live TV, VOD movies, TV series, and sports channels in high-quality streaming, including 4K. Check out our{" "}
        <Link href="/channels" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">live TV channels</Link> and{" "}
        <Link href="/pricing" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">IPTV subscription plans</Link>.
      </>
    ),
  },
  {
    category: "About strimoiptv",
    question: "2. Is Strimo IPTV authorized?",
    answer: (
      <>
        Strimo IPTV is intended to be used in accordance with applicable laws, local regulations, and our service terms. Please ensure that the content you access and the way you use the service are permitted in your location.
      </>
    ),
  },
  {
    category: "About strimoiptv",
    question: "3. What channels and content are included with Strimo IPTV?",
    answer: (
      <>
        Strimo IPTV includes a broad selection of live channels covering sports, news, and entertainment, along with a regularly updated on-demand library of movies and TV series. Check our <Link href="/channels" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">full channels catalog</Link>.
      </>
    ),
  },
  {
    category: "About strimoiptv",
    question: "4. Can I watch live sports and PPV events on Strimo IPTV?",
    answer: (
      <>
        Strimo IPTV includes a range of live sports channels and events. Coverage can include football, NFL, NBA, UFC, and pay-per-view events. Explore our <Link href="/channels" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">live sports section</Link>.
      </>
    ),
  },
  {
    category: "About strimoiptv",
    question: "5. Which devices can I use?",
    answer: (
      <>
        Strimo IPTV works with compatible IPTV apps on Smart TVs, Android TV, Firestick, Apple TV, smartphones, tablets, and computers. Follow our <Link href="/installation" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">installation guides</Link> to get started.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "1. How do I install Strimo IPTV on my device?",
    answer: (
      <>
        Start by installing a compatible IPTV player on your device. Enter the Strimo IPTV credentials from your email. View our step-by-step <Link href="/installation" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">installation guides</Link> for detailed instructions.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "2. Can I use Strimo IPTV on a Smart TV?",
    answer: (
      <>
        Yes, Strimo IPTV can be used on Smart TVs including Samsung, LG, and Android TV models using compatible IPTV players like Tivimate or Smarters.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "3. What internet speed do I need for smooth Strimo IPTV streaming?",
    answer: (
      <>
        For reliable playback, allow at least 10 Mbps per stream for HD and 25 Mbps per stream for 4K. Ethernet or 5 GHz Wi-Fi is recommended.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "4. Why is Strimo IPTV buffering or freezing?",
    answer: (
      <>
        Restart your IPTV app and router. If buffering persists, check your Wi-Fi signal or <Link href="/contact" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">contact support</Link> for quick assistance.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "5. Do I need a VPN to use Strimo IPTV?",
    answer: (
      <>
        A VPN is not required but is recommended in some regions to ensure unrestricted access and added privacy. Contact our <Link href="/contact" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">support team</Link> for VPN setup recommendations.
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "1. Are there any hidden fees or contracts with Strimo IPTV?",
    answer: (
      <>
        No contracts and no hidden fees. Choose an <Link href="/pricing" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">IPTV subscription plan</Link> with transparent pricing and instant delivery.
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "2. Can I use Strimo IPTV on multiple devices?",
    answer: (
      <>
        Yes! We offer multi-device subscription plans. Select the 1, 2, or 3 device option on our <Link href="/pricing" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">pricing page</Link>.
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "3. What are Strimo IPTV M3U and Xtream Codes details?",
    answer: (
      <>
        Your welcome email includes both M3U playlist URLs and Xtream Codes credentials for fast setup in any IPTV app.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "1. Does Strimo IPTV offer a free trial?",
    answer: (
      <>
        Yes, we offer a <a href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20strimoiptv%20IPTV." target="_blank" rel="noreferrer" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">free trial</a> so you can test our service before subscribing.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "2. Which payment methods does Strimo IPTV accept?",
    answer: (
      <>
        We accept PayPal, Crypto (Bitcoin), Credit Cards, and Instant Bank Transfers. For help with payments, reach out to our <Link href="/contact" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">support team</Link>.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "3. How long does activation take after I purchase a plan?",
    answer: (
      <>
        Activation is instant! Your login details are generated and sent straight to your email immediately after payment confirmation.
      </>
    ),
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function sendSupportMessage(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "General support").trim();
    const message = String(formData.get("message") || "").trim();
    const text = encodeURIComponent(`Hello Strimo IPTV support,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`);
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="flex-grow px-4 sm:px-6 pb-20 pt-12 md:pt-16 bg-white text-black">
      <div className="mx-auto max-w-[1140px]">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#36a9ff]">Help center</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-tight">
            Frequently Asked Questions<br />(FAQ)
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-700">
            Find answers to common questions about our IPTV service, including{" "}
            <Link href="/pricing" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">subscriptions</Link>,{" "}
            <Link href="/installation" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">devices</Link>, streaming quality, payments, and more. If you need further help, our{" "}
            <Link href="/contact" className="text-[#36a9ff] font-semibold hover:text-[#36a9ff] transition-colors">support team</Link> is here for you.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up mt-8">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const contentId = `faq-item-${index}`;

            return (
              <div 
                key={index} 
                className="bg-gradient-to-b from-[#497598] to-[#8fb0c9] rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <button
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-white focus:outline-none"
                >
                  <span className="text-sm md:text-base">{faq.question.replace(/^\d+\.\s*/, '')}</span>
                  <span className={`text-white shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                
                <div 
                  id={contentId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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

        <section className="mt-20 border-t border-black/10 pt-16 sm:pt-20">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black">Get in Touch with Our Support Team</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">We&apos;re here to help you get the best streaming experience. Send us a message and we&apos;ll get back to you quickly.</p>
          </header>
          <div className="mt-10 grid gap-8 xl:grid-cols-[278px_minmax(0,1fr)] xl:gap-10">
            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <a className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-black/10 bg-white p-5 text-center transition-colors hover:border-[#36a9ff]/50" href="mailto:support@strimoiptv.com">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#145082]/20 text-[#36a9ff]"><Mail className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-black">Email Us</span>
                <span className="mt-2 block text-xs leading-5 text-gray-600">For general inquiries and support.</span>
                <span className="mt-3 block text-xs font-semibold text-[#36a9ff]">support@strimoiptv.com</span>
              </a>
              <a className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-black/10 bg-white p-5 text-center transition-colors hover:border-[#36a9ff]/50" href="https://wa.me/213552069874?text=Hello%20strimoiptv%20IPTV%20support%2C%20I%20need%20help." rel="noreferrer" target="_blank">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]"><MessageCircle className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-black">WhatsApp Support</span>
                <span className="mt-2 block text-xs leading-5 text-gray-600">Fastest way to reach us for technical issues.</span>
                <span className="mt-3 block text-xs font-semibold text-[#25D366]">Start Chat ?</span>
              </a>
              <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-black/10 bg-white p-5 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/10 text-gray-700"><Clock3 className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-black">Response Time</span>
                <span className="mt-2 block text-xs leading-5 text-gray-600">We typically reply within <strong className="text-black">2 hours</strong> during standard business hours.</span>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-bold text-black">Send us a message</h3>
              <form action={sendSupportMessage} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-xs font-semibold text-gray-600">Name<input className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3.5 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray-600 focus:border-[#36a9ff]" name="name" placeholder="John Doe" required /></label>
                  <label className="block text-xs font-semibold text-gray-600">Email address<input className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3.5 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray-600 focus:border-[#36a9ff]" name="email" placeholder="john@example.com" required type="email" /></label>
                </div>
                <label className="block text-xs font-semibold text-gray-600">Subject<input className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3.5 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray-600 focus:border-[#36a9ff]" name="subject" placeholder="How can we help?" /></label>
                <label className="block text-xs font-semibold text-gray-600">Message<textarea className="mt-2 min-h-32 w-full resize-y rounded-xl border border-black/10 bg-white px-3.5 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray-600 focus:border-[#36a9ff]" name="message" placeholder="Describe your question or issue..." required /></label>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 active:translate-y-0" type="submit"><Send className="h-4 w-4" />Send message via WhatsApp</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
