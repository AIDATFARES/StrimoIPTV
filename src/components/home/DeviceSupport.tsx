import { Monitor, Smartphone, Tv, Box, Laptop, Wifi } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DeviceSupport() {
  return (
    <section className="py-24 bg-transparent text-black relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#36a9ff]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Side: Radical Image Display */}
          <div className="w-full lg:flex-1 relative group perspective-1000 min-w-0">
            {/* Animated Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#36a9ff] to-[#2196f3] blur-[60px] opacity-15 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl"></div>
            
            {/* Image Container with 3D-like float effect */}
            <div className="relative rounded-[2rem] overflow-hidden border-2 border-[#36a9ff]/30 bg-gray-50/50 backdrop-blur-md p-4 shadow-[0_20px_50px_rgba(54,169,255,0.15)] transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-1">
              <div className="relative rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/imggt1_2.webp"
                  alt="Supported IPTV Devices"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -bottom-6 -left-6 bg-gray-50 p-4 rounded-2xl shadow-[0_10px_30px_rgba(54,169,255,0.2)] border border-[#36a9ff]/20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-[#22c55e]/10 p-2 rounded-full">
                <Wifi className="text-[#22c55e]" size={20} strokeWidth={3} />
              </div>
              <span className="font-bold text-sm">Zero Buffering</span>
            </div>
          </div>

          {/* Right Side: Title & Paragraph */}
          <div className="w-full lg:flex-1 space-y-8 min-w-0 flex flex-col justify-center">
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#36a9ff]/10 text-[#36a9ff] font-bold text-xs tracking-widest uppercase mb-6 border border-[#36a9ff]/20">
                Limitless Compatibility
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[1.1] tracking-tight mb-8">
                Stream StrimoIPTV on <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36a9ff] to-[#2196f3]">
                  Any Device
                </span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed w-full">
                The StrimoIPTV service is designed to adapt to your lifestyle. From the biggest screen in your living room to the smartphone in your pocket, enjoy a <Link href="/installation" className="font-semibold text-[#36a9ff] hover:text-[#2196f3] hover:underline transition-colors">premium IPTV viewing experience</Link> anywhere you go.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* Feature 1 */}
              <div className="p-5 rounded-xl bg-[#145082] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="bg-white/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center text-[#00e5ff] mb-4 group-hover:scale-110 transition-transform">
                  <Tv size={24} />
                </div>
                <h3 className="font-black text-white mb-1">Smart TVs</h3>
                <p className="text-white/80 text-sm font-medium">Samsung, LG, Android TV.</p>
              </div>

              {/* Feature 2 */}
              <div className="p-5 rounded-xl bg-[#145082] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="bg-white/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center text-[#00e5ff] mb-4 group-hover:scale-110 transition-transform">
                  <Monitor size={24} />
                </div>
                <h3 className="font-black text-white mb-1">Computers</h3>
                <p className="text-white/80 text-sm font-medium">Windows & Mac Support.</p>
              </div>

              {/* Feature 3 */}
              <div className="p-5 rounded-xl bg-[#145082] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="bg-white/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center text-[#00e5ff] mb-4 group-hover:scale-110 transition-transform">
                  <Box size={24} />
                </div>
                <h3 className="font-black text-white mb-1">Set-Top Boxes</h3>
                <p className="text-white/80 text-sm font-medium">Firestick, MAG & Apple TV.</p>
              </div>

              {/* Feature 4 */}
              <div className="p-5 rounded-xl bg-[#145082] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="bg-white/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center text-[#00e5ff] mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone size={24} />
                </div>
                <h3 className="font-black text-white mb-1">Mobile & Tablets</h3>
                <p className="text-white/80 text-sm font-medium">Watch anywhere on the go.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/installation" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-black uppercase text-black bg-[#00e5ff] rounded-full hover:bg-[#00cce6] shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all duration-300 gap-2 transform hover:-translate-y-1"
              >
                Get Setup Instructions <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
