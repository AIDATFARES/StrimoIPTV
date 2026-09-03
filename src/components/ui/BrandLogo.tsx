import Link from "next/link";

interface BrandLogoProps {
  compact?: boolean;
}

export default function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none font-sans ${compact ? "scale-90 origin-left" : ""}`}>
      {/* Stream Icon */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(6,182,212,0.3)]">
        <div className="w-full h-full bg-[#060810] rounded-[7px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-purple-500/20" />
          <svg
            className="w-4 h-4 text-cyan-400 relative z-10 translate-x-[1px]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86a1 1 0 00-1.5.86z" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex items-center gap-1 leading-none">
        <span className="text-xl sm:text-2xl font-black tracking-tight text-[#F8FAFC]">
          STRIMO<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">IPTV</span>
        </span>
      </div>
    </div>
  );
}
