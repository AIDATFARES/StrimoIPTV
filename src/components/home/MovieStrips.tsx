import Image from "next/image";
import Link from "next/link";
import BrandMarquee from "./BrandMarquee";

export default function MovieStrips() {
  const movieImages = [
    "imgi_38_5.webp",
    "imgi_40_6.webp",
    "imgi_41_zdf-magaziytn-ghgroyale-zdfneo-copy.webp",
    "imgi_42_7.webp",
    "imgi_43_8.webp",
    "imgi_44_9.webp",
    "imgi_45_10.webp",
    "imgi_46_13.webp",
    "imgi_6_1.webp",
    "imgi_7_2.webp",
    "imgi_8_3.webp",
    "imgi_9_4.webp"
  ];

  return (
    <section className="w-full overflow-hidden bg-[#141414] py-16 relative flex flex-col gap-6">
      {/* Section Header */}
      <div className="text-center mb-8 px-4 z-20">
        <span className="inline-block py-1 px-4 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-[#E50914] text-xs font-bold tracking-widest uppercase mb-4">
          Endless Entertainment
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          THE ULTIMATE <span className="text-[#E50914]">CINEMATIC</span> EXPERIENCE
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-8">
          Explore a massive library of 200,000+ Films & Series. From the latest blockbuster hits to timeless classics, all available instantly in crystal-clear 4K Ultra HD.
        </p>
        <Link 
          href="/channels"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#E50914] text-white text-sm md:text-base font-medium bg-black/20 hover:bg-[#E50914]/10 transition-colors duration-300 gap-2"
        >
          View Zyminex IPTV Channel List <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      {/* Brand Logos Tape */}
      <div className="z-20 w-full mb-10">
        <h3 className="text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-6">50,000+ Premium Live Channels</h3>
        <BrandMarquee />
      </div>

      {/* Top Strip (Right to Left) */}
      <div className="w-full mb-4 z-20">
        <h3 className="text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">200,000+ Latest Movies & Series</h3>
      </div>
      <div className="relative flex w-max items-center">
        <div className="flex gap-4 md:gap-6 px-2 md:px-3 animate-marquee" style={{ animationDuration: '30s' }}>
          {[...movieImages, ...movieImages, ...movieImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[240px] h-[135px] md:w-[340px] md:h-[190px] relative rounded-xl overflow-hidden shadow-xl border border-white/10 hover:scale-105 hover:border-[#E50914]/50 hover:shadow-2xl hover:z-10 transition-all duration-300">
              <Image src={`/fillem/${img}`} alt="Media Thumbnail" fill sizes="(max-width: 640px) 240px, 340px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>


      
      {/* Gradient Masks removed per user request */}
    </section>
  );
}
