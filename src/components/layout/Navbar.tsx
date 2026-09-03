"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
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

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "text-cyan-400 py-1 font-bold"
      : "hover:text-cyan-400 py-1 transition-colors text-gray-300";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 flex flex-col ${
        scrolled
          ? "bg-[#050b14]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#050b14]/80 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between relative">
        
        {/* LOGO */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group shrink-0 z-20">
          <BrandLogo />
        </Link>

        {/* Nav Links Container */}
        <nav className="hidden xl:flex relative z-10 items-center justify-center p-1.5 border border-cyan-500/30 rounded-full bg-[#091322]/80 backdrop-blur-md text-[13px] font-extrabold tracking-wide">
          <Link 
            href="/" 
            onClick={handleLogoClick} 
            className={`px-5 py-2 rounded-full uppercase transition-all duration-300 ${pathname === '/' ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Home
          </Link>
          <Link 
            href="/channels" 
            className={`px-5 py-2 rounded-full uppercase transition-all duration-300 ${pathname === '/channels' ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Channels
          </Link>
          <Link 
            href="/pricing" 
            className={`px-5 py-2 rounded-full uppercase transition-all duration-300 ${pathname === '/pricing' ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Pricing
          </Link>
          <Link 
            href="/installation" 
            className={`px-5 py-2 rounded-full uppercase transition-all duration-300 ${pathname === '/installation' ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Setup
          </Link>
          <Link 
            href="/reseller" 
            className={`px-5 py-2 rounded-full uppercase transition-all duration-300 ${pathname === '/reseller' ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Reseller
          </Link>
          <Link 
            href="/blog" 
            className={`px-5 py-2 rounded-full uppercase transition-all duration-300 ${pathname === '/blog' ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Blog
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 z-20">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20StrimoIPTV."
            target="_blank"
            rel="noreferrer"
            className="group bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 text-black font-black px-6 py-2.5 text-sm transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] rounded-full uppercase hover:scale-105 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-black animate-spin" style={{ animationDuration: '4s' }} />
            GET STARTED
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-20"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050b14] border-b border-cyan-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
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
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20StrimoIPTV."
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-extrabold rounded-full text-sm uppercase shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
