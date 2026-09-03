import { CreditCard, Mail, PlayCircle, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Plan",
      description: "Select your preferred subscription period (1, 3, 6, 12, or 24 Months) that best fits your entertainment needs.",
      icon: CreditCard,
    },
    {
      number: "02",
      title: "Receive Your Details",
      description: "Get your automated login credentials, M3U playlist link, and Xtream Codes API key delivered instantly via email and WhatsApp.",
      icon: Mail,
    },
    {
      number: "03",
      title: "Start Watching",
      description: "Log into your IPTV application (Smarters, TiviMate, IBO, etc.) or Web Player and enjoy unlimited 4K streaming instantly.",
      icon: PlayCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            <span>GET STARTED IN 3 STEPS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC]">
            How <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">StrimoIPTV</span> Works
          </h2>
          <p className="text-[#A7B0C0] text-base sm:text-lg mt-4">
            Fast, automated setup in less than 3 minutes.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="strimo-card p-8 rounded-2xl relative flex flex-col justify-between overflow-hidden group"
              >
                {/* Large Background Step Number */}
                <div className="absolute top-2 right-4 text-7xl font-black text-white/[0.04] group-hover:text-cyan-500/10 transition-colors select-none font-mono">
                  {step.number}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-[1px] mb-6 shadow-md">
                    <div className="w-full h-full bg-[#080B14] rounded-[11px] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>

                  <div className="text-xs font-mono font-bold text-cyan-400 mb-2">STEP {step.number}</div>
                  
                  <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-tight mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#A7B0C0] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-white/20" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
