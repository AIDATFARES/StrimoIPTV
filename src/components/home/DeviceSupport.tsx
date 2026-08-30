import { Monitor, Smartphone, Tv, Box, Laptop, Wifi } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DeviceSupport() {
  return (
    <section className="py-24 bg-transparent text-white relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#36a9ff]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Side: Radical Image Display */}
          <div className="w-full lg:flex-1 relative group perspective-1000 min-w-0">
            {/* Animated Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#36a9ff] to-[#2196f3] blur-[60px] opacity-15 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl"></div>
            
            {/* Image Container with 3D-like float effect */}
            <div className="relative rounded-[2rem] overflow-hidden border-2 border-[#36a9ff]/30 bg-[#051f33]/50 backdrop-blur-md p-4 shadow-[0_20px_50px_rgba(54,169,255,0.15)] transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-1">
              <div className="relative rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/devices-banner-nano.webp"
                  alt="Supported IPTV Devices"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -bottom-6 -left-6 bg-[#051f33] p-4 rounded-2xl shadow-[0_10px_30px_rgba(54,169,255,0.2)] border border-[#36a9ff]/20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
                Stream Realm IPTV on <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36a9ff] to-[#2196f3]">
                  Any Device
                </span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed w-full">
                Realm IPTV is designed to adapt to your lifestyle. From the biggest screen in your living room to the smartphone in your pocket, enjoy a <Link href="/installation" className="font-semibold text-[#36a9ff] hover:text-[#2196f3] hover:underline transition-colors">premium IPTV viewing experience</Link> anywhere you go.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* Feature 1 */}
              <div className="p-5 rounded-2xl bg-[#051f33]/80 border border-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_20px_rgba(54,169,255,0.3)] hover:border-[#36a9ff]/50 transition-all duration-300 group">
                <div className="bg-[#36a9ff]/10 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-[#36a9ff] mb-4 group-hover:bg-[#36a9ff]/20 transition-colors">
                  <Tv size={24} />
                </div>
                <h3 className="font-bold text-white mb-1">Smart TVs</h3>
                <p className="text-gray-400 text-sm font-medium">Samsung, LG, Android TV.</p>
              </div>

              {/* Feature 2 */}
              <div className="p-5 rounded-2xl bg-[#051f33]/80 border border-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_20px_rgba(54,169,255,0.3)] hover:border-[#36a9ff]/50 transition-all duration-300 group">
                <div className="bg-[#36a9ff]/10 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-[#36a9ff] mb-4 group-hover:bg-[#36a9ff]/20 transition-colors">
                  <Monitor size={24} />
                </div>
                <h3 className="font-bold text-white mb-1">Computers</h3>
                <p className="text-gray-400 text-sm font-medium">Windows & Mac Support.</p>
              </div>

              {/* Feature 3 */}
              <div className="p-5 rounded-2xl bg-[#051f33]/80 border border-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_20px_rgba(54,169,255,0.3)] hover:border-[#36a9ff]/50 transition-all duration-300 group">
                <div className="bg-[#36a9ff]/10 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-[#36a9ff] mb-4 group-hover:bg-[#36a9ff]/20 transition-colors">
                  <Box size={24} />
                </div>
                <h3 className="font-bold text-white mb-1">Set-Top Boxes</h3>
                <p className="text-gray-400 text-sm font-medium">Firestick, MAG & Apple TV.</p>
              </div>

              {/* Feature 4 */}
              <div className="p-5 rounded-2xl bg-[#051f33]/80 border border-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_20px_rgba(54,169,255,0.3)] hover:border-[#36a9ff]/50 transition-all duration-300 group">
                <div className="bg-[#36a9ff]/10 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-[#36a9ff] mb-4 group-hover:bg-[#36a9ff]/20 transition-colors">
                  <Smartphone size={24} />
                </div>
                <h3 className="font-bold text-white mb-1">Mobile & Tablets</h3>
                <p className="text-gray-400 text-sm font-medium">Watch anywhere on the go.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/installation" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-black uppercase text-white bg-[#051f33] rounded-full hover:bg-[#082a45] hover:shadow-[0_0_20px_rgba(54,169,255,0.4)] border border-[#36a9ff]/30 transition-all duration-300 gap-2 transform hover:-translate-y-1"
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
