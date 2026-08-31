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
      : "text-gray-600 hover:text-[#36a9ff] pb-1 transition-colors duration-200 whitespace-nowrap";
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "text-[#36a9ff] py-1 font-bold"
      : "hover:text-[#36a9ff] py-1 transition-colors text-gray-700";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 flex flex-col ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-2xl"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >

      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between relative">
        
        {/* LOGO */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group shrink-0 z-20">
          <BrandLogo />
        </Link>

        {/* Nav Links Container */}
        <nav className="hidden xl:flex relative z-10 items-center justify-center p-1 border border-[#36a9ff] rounded-full bg-transparent text-[13px] font-bold tracking-wide">
          <Link 
            href="/" 
            onClick={handleLogoClick} 
            className={`px-4 py-2 rounded-full uppercase ${pathname === '/' ? 'bg-[#36a9ff] text-white shadow-[0_0_15px_rgba(54,169,255,0.4)]' : 'text-black hover:text-[#36a9ff] transition-colors'}`}
          >
            Home
          </Link>
          <Link 
            href="/channels" 
            className={`px-4 py-2 rounded-full uppercase ${pathname === '/channels' ? 'bg-[#36a9ff] text-white shadow-[0_0_15px_rgba(54,169,255,0.4)]' : 'text-black hover:text-[#36a9ff] transition-colors'}`}
          >
            Channels
          </Link>
          <Link 
            href="/pricing" 
            className={`px-4 py-2 rounded-full uppercase ${pathname === '/pricing' ? 'bg-[#36a9ff] text-white shadow-[0_0_15px_rgba(54,169,255,0.4)]' : 'text-black hover:text-[#36a9ff] transition-colors'}`}
          >
            Pricing
          </Link>
          <Link 
            href="/installation" 
            className={`px-4 py-2 rounded-full uppercase ${pathname === '/installation' ? 'bg-[#36a9ff] text-white shadow-[0_0_15px_rgba(54,169,255,0.4)]' : 'text-black hover:text-[#36a9ff] transition-colors'}`}
          >
            Setup
          </Link>
          <Link 
            href="/reseller" 
            className={`px-4 py-2 rounded-full uppercase ${pathname === '/reseller' ? 'bg-[#36a9ff] text-white shadow-[0_0_15px_rgba(54,169,255,0.4)]' : 'text-black hover:text-[#36a9ff] transition-colors'}`}
          >
            Reseller
          </Link>
          <Link 
            href="/blog" 
            className={`px-4 py-2 rounded-full uppercase ${pathname === '/blog' ? 'bg-[#36a9ff] text-white shadow-[0_0_15px_rgba(54,169,255,0.4)]' : 'text-black hover:text-[#36a9ff] transition-colors'}`}
          >
            Blog
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 z-20">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20realmiptv%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="group bg-[#00e5ff] text-black font-extrabold px-6 py-2.5 text-sm transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] rounded-full uppercase hover:scale-105"
          >
            GET STARTED
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-black p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors z-20"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-black/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 font-semibold">
            <Link href="/" onClick={handleLogoClick} className={getMobileLinkClass("/")}>Home</Link>
            <Link href="/channels" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/channels")}>Channels</Link>
            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/pricing")}>Pricing</Link>
            <Link href="/installation" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/installation")}>Setup</Link>
            <Link href="/reseller" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/reseller")}>Reseller</Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/blog")}>Blog</Link>
            <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/how-it-works")}>How It Works</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/contact")}>Contact Support</Link>
          </nav>
          <div className="pt-4 border-t border-black/10 flex flex-col gap-3">
            <a
              href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20realmiptv%20IPTV."
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
