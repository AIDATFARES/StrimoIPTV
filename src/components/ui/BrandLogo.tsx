import Link from "next/link";

interface BrandLogoProps {
  compact?: boolean;
}

export default function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none font-sans ${compact ? "scale-90 origin-left" : ""}`}>
      {/* Dynamic Stream Hexagon Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-500 to-indigo-600 p-[1.5px] shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] transition-all duration-300">
        <div className="w-full h-full bg-[#050b14] rounded-[10.5px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-indigo-500/20 opacity-80" />
          <svg
            className="w-5 h-5 text-cyan-400 relative z-10 translate-x-[1px] group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86a1 1 0 00-1.5.86z" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase font-heading">
            STRIMO<span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">IPTV</span>
          </span>
          <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 tracking-wider">
            4K
          </span>
        </div>
        <span className="text-[9.5px] font-bold text-gray-400 tracking-[0.25em] uppercase mt-0.5">
          STREAMING NETWORK
        </span>
      </div>
    </div>
  );
}
