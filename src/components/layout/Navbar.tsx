"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive 
      ? "text-[#36a9ff] border-b-2 border-[#36a9ff] pb-1 transition-colors duration-200" 
      : "text-gray-400 hover:text-[#36a9ff] pb-1 transition-colors duration-200 whitespace-nowrap";
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "text-[#36a9ff] py-1 font-bold"
      : "hover:text-[#36a9ff] py-1 transition-colors text-gray-300";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 flex flex-col ${
        scrolled
          ? "bg-[#141414]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-[#141414]/80 backdrop-blur-md"
      }`}
    >
      {/* Promotional Top Bar */}
      <div className="w-full bg-green-600 text-white py-2 overflow-hidden flex items-center shadow-sm">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-2 px-8 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
              🎁 Special Offer: We offer a <span className="font-extrabold underline uppercase tracking-widest">Free Trial</span> to test our service! 
              <a 
                href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20zyminexiptv%20IPTV." 
                target="_blank" 
                rel="noreferrer"
                className="inline-block ml-2 bg-black text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold hover:bg-[#141414] hover:text-white transition-colors shadow-sm animate-button-pulse-white"
              >
                Claim Now
              </a>
            </span>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between relative">
        
        {/* LOGO */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group shrink-0 z-20">
          <BrandLogo />
        </Link>

        {/* Nav Links Container */}
        <nav className="hidden lg:flex relative z-10 items-center justify-center p-1.5 border border-[#36a9ff] rounded-full bg-transparent text-sm font-bold tracking-wide">
          <Link 
            href="/" 
            onClick={handleLogoClick} 
            className={`px-6 py-2 rounded-full uppercase ${pathname === '/' ? 'bg-[#36a9ff] text-white shadow-[0_0_15px_rgba(54,169,255,0.4)]' : 'text-white hover:text-[#36a9ff] transition-colors'}`}
          >
            Home
          </Link>
          <Link 
            href="/pricing" 
            className={`px-6 py-2 rounded-full uppercase ${pathname === '/pricing' ? 'bg-[#36a9ff] text-white shadow-[0_0_15px_rgba(54,169,255,0.4)]' : 'text-white hover:text-[#36a9ff] transition-colors'}`}
          >
            Pricing
          </Link>
          <Link 
            href="/installation" 
            className={`px-6 py-2 rounded-full uppercase ${pathname === '/installation' ? 'bg-[#36a9ff] text-white shadow-[0_0_15px_rgba(54,169,255,0.4)]' : 'text-white hover:text-[#36a9ff] transition-colors'}`}
          >
            Setup
          </Link>
          <Link 
            href="/blog" 
            className={`px-6 py-2 rounded-full uppercase ${pathname === '/blog' ? 'bg-[#36a9ff] text-white shadow-[0_0_15px_rgba(54,169,255,0.4)]' : 'text-white hover:text-[#36a9ff] transition-colors'}`}
          >
            Blog
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 z-20">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20zyminexiptv%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-voltra px-6 py-2.5 text-sm shadow-[0_0_15px_rgba(249,235,199,0.3)] hover:shadow-[0_0_25px_rgba(249,235,199,0.5)]"
          >
            GET STARTED
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors z-20"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 font-semibold">
            <Link href="/" onClick={handleLogoClick} className={getMobileLinkClass("/")}>Home</Link>
            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/pricing")}>Pricing</Link>
            <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/how-it-works")}>How It Works</Link>
            <Link href="/channels" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/channels")}>Channels</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/contact")}>Contact Support</Link>
            <Link href="/reseller" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/reseller")}>Reseller</Link>
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20zyminexiptv%20IPTV."
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3 btn-primary-voltra text-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
