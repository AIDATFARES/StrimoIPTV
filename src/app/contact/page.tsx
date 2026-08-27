"use client";

import { Mail, MessageCircle, ArrowRight, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative z-10">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-[#36a9ff]/10 text-[#36a9ff] font-bold text-xs tracking-widest uppercase mb-6 border border-[#36a9ff]/20">
          Contact Support
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
          <span className="block text-white">Get in Touch with</span>
          <span className="mt-1 block text-transparent bg-clip-text bg-gradient-to-r from-[#36a9ff] to-[#2196f3]">Our Support Team.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base leading-6 text-gray-400 font-medium">
          We&apos;re here to help you get the best streaming experience. Send us a message and we&apos;ll get back to you quickly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-[#141414] shadow-[0_20px_40px_-15px_rgba(112,0,255,0.15)] border border-white/5 rounded-[2rem] p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#36a9ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#36a9ff]/20 transition-colors">
              <Mail className="text-[#36a9ff] w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl text-white mb-2">Email Us</h3>
            <p className="text-sm text-gray-400 mb-6 font-medium">For general inquiries and support.</p>
            <a
              className="text-[#36a9ff] font-bold hover:text-[#2196f3] transition-colors"
              href="mailto:support@zyminexiptv.shop"
            >
              support@zyminexiptv.shop
            </a>
          </div>

          <div className="bg-[#141414] shadow-[0_20px_40px_-15px_rgba(112,0,255,0.15)] border border-white/5 rounded-[2rem] p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-6 group-hover:bg-[#25D366]/20 transition-colors">
              <MessageCircle className="text-[#25D366] w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl text-white mb-2">WhatsApp Support</h3>
            <p className="text-sm text-gray-400 mb-6 font-medium">
              Fastest way to reach us for technical issues.
            </p>
            <a
              className="text-[#25D366] font-bold hover:text-[#20bd5a] transition-colors flex items-center gap-2"
              href="https://wa.me/213552069874?text=Hello,%20I%20need%20support%20for%20Zyminex IPTV."
              target="_blank"
              rel="noreferrer"
            >
              Start Chat <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-[#141414] shadow-[0_20px_40px_-15px_rgba(112,0,255,0.15)] border border-white/5 rounded-[2rem] p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors">
              <Clock className="text-gray-400 w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl text-white mb-2">Response Time</h3>
            <p className="text-sm text-gray-400 font-medium">
              We typically reply in <strong className="text-white">Under 2 hours</strong> during standard business hours.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <div className="bg-[#141414] shadow-[0_20px_50px_-15px_rgba(112,0,255,0.15)] border border-white/5 rounded-[2.5rem] p-8 md:p-12 h-full">
            <h2 className="text-2xl font-extrabold text-white mb-8 border-b border-white/5 pb-6">
              Send a Message
            </h2>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="bg-[#141414] border border-white/10 focus:border-[#36a9ff] focus:ring-1 focus:ring-[#36a9ff] rounded-xl px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none transition-all font-medium"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="bg-[#141414] border border-white/10 focus:border-[#36a9ff] focus:ring-1 focus:ring-[#36a9ff] rounded-xl px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none transition-all font-medium"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="bg-[#141414] border border-white/10 focus:border-[#36a9ff] focus:ring-1 focus:ring-[#36a9ff] rounded-xl px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none transition-all font-medium"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="bg-[#141414] border border-white/10 focus:border-[#36a9ff] focus:ring-1 focus:ring-[#36a9ff] rounded-xl px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none transition-all resize-none font-medium"
                  id="message"
                  name="message"
                  placeholder="Describe your issue or question in detail..."
                  rows={6}
                ></textarea>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  className="btn-primary-voltra px-10 py-4 text-sm font-bold flex items-center gap-2 group shadow-[0_10px_30px_rgba(112,0,255,0.3)] hover:-translate-y-1 transition-all"
                  type="submit"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
