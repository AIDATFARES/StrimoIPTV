import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function BlogOfferCard() {
  return (
    <div className="w-full bg-surface-container rounded-2xl p-6 md:p-8 my-10 border border-primary/20 relative overflow-hidden group">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-tertiary/10 opacity-50 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider border border-primary/30">
              <Star className="w-3.5 h-3.5 fill-primary" />
              Limited Time Offer
            </span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-headline-lg font-bold text-on-surface mb-2">
            Experience <span className="text-primary">REALM IPTV</span>
          </h3>
          
          <p className="text-on-surface-variant text-base md:text-lg mb-0 max-w-2xl">
            Upgrade your entertainment with ultra-stable, anti-freeze streaming. Access premium live channels, sports, and VOD on all your favorite devices.
          </p>
        </div>
        
        <div className="shrink-0 w-full md:w-auto mt-2 md:mt-0">
          <Link 
            href="/pricing"
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-primary hover:bg-primary-container text-on-primary font-bold rounded-xl transition-all hover:scale-105 active:scale-95 group/btn shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)]"
          >
            View REALM Plans
            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
