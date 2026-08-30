import Image from "next/image";
import Link from "next/link";

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-transparent text-white relative z-10 border-b border-white/10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* ========================================================================= */}
        {/* PART 1: How does it work? Realm IPTV Timeline */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#36a9ff]/10 text-[#36a9ff] font-bold text-xs tracking-widest uppercase mb-6 border border-[#36a9ff]/20">
            EASY IPTV SETUP
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            How to Start Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36a9ff] to-[#2196f3]">
              Realm IPTV Subscription
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Getting started with Realm IPTV is quick and simple. Follow this 3-step process to unlock instant access to premium <Link href="/channels" className="font-semibold text-[#36a9ff] hover:text-[#2196f3] transition-colors">live TV, movies, and series</Link>.
          </p>
        </div>

        {/* Timeline Steps Container */}
        <div className="relative max-w-[960px] mx-auto mb-28">
          {/* Vertical Dashed Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-[#36a9ff]/20 hidden md:block" />

          {/* STEP 1 */}
          <div className="relative mb-16 md:mb-20">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-[#36a9ff] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(54,169,255,0.6)]">
                Step One
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Card */}
              <div className="bg-[#051f33]/80 backdrop-blur-sm text-slate-100 p-8 rounded-2xl shadow-xl relative border border-[#36a9ff]/20 transition-all hover:border-[#36a9ff]/50"
              >
                <h3 className="text-xl font-extrabold text-[#36a9ff] mb-3">
                  <a
                    href="#pricing"
                    className="hover:text-[#2196f3] transition-colors"
                  >
                    1. Choose Your Realm IPTV Plan
                  </a>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Select the best IPTV subscription package for your entertainment needs from our{" "}
                  <a
                    href="#pricing"
                    className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
                  >
                    pricing plans
                  </a>
                  . Once checkout is complete, we will email or{" "}
                  <Link
                    href="/contact"
                    className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
                  >
                    WhatsApp
                  </Link>{" "}
                  your secure login details instantly.
                </p>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-2xl bg-[#051f33]/50 border border-[#36a9ff]/20 shadow-xl transition-all hover:border-[#36a9ff]/50 hover:shadow-[0_0_20px_rgba(54,169,255,0.3)]"
              >
                <Image
                  src="/step_1_generated.png"
                  alt="Place your order online"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative mb-16 md:mb-20">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-[#36a9ff] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(54,169,255,0.6)]">
                Step Two
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Image */}
              <div className="overflow-hidden rounded-2xl bg-[#051f33]/50 border border-[#36a9ff]/20 shadow-xl order-2 md:order-1 transition-all hover:border-[#36a9ff]/50 hover:shadow-[0_0_20px_rgba(54,169,255,0.3)]"
              >
                <Image
                  src="/step_2_generated.png"
                  alt="Instant installation"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Card */}
              <div className="bg-[#051f33]/80 backdrop-blur-sm text-slate-100 p-8 rounded-2xl shadow-xl relative border border-[#36a9ff]/20 order-1 md:order-2 transition-all hover:border-[#36a9ff]/50"
              >
                <h3 className="text-xl font-extrabold text-[#36a9ff] mb-3">
                  <Link
                    href="/installation"
                    className="hover:text-[#2196f3] transition-colors"
                  >
                    2. Install Your Streaming App
                  </Link>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Use our step-by-step{" "}
                  <Link
                    href="/installation"
                    className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
                  >
                    IPTV installation guides
                  </Link>{" "}
                  to easily set up Realm on your Smart TV, Firestick, Android Box, or Apple device using top-rated apps like IPTV Smarters or Tivimate.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-[#36a9ff] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(54,169,255,0.6)]">
                Step Three
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Card */}
              <div className="bg-[#051f33]/80 backdrop-blur-sm text-slate-100 p-8 rounded-2xl shadow-xl relative border border-[#36a9ff]/20 transition-all hover:border-[#36a9ff]/50"
              >
                <h3 className="text-xl font-extrabold text-[#36a9ff] mb-3">
                  <Link
                    href="/channels"
                    className="hover:text-[#2196f3] transition-colors"
                  >
                    3. Enjoy Premium IPTV Streaming
                  </Link>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Start watching instantly! Dive into our massive Realm IPTV{" "}
                  <Link
                    href="/channels"
                    className="text-[#36a9ff] font-semibold hover:text-[#2196f3] transition-colors"
                  >
                    channels catalog
                  </Link>
                  {" "}featuring over 50,000 live broadcasts and a huge Video on Demand library, all delivered without buffering.
                </p>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-2xl bg-[#051f33]/50 border border-[#36a9ff]/20 shadow-xl transition-all hover:border-[#36a9ff]/50 hover:shadow-[0_0_20px_rgba(54,169,255,0.3)]"
              >
                <Image
                  src="/step_3_generated.png"
                  alt="Watch and enjoy live TV"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
