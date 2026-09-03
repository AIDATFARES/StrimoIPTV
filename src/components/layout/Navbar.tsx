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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "CHANNELS", href: "/channels" },
    { name: "PRICING", href: "/pricing" },
    { name: "SETUP", href: "/installation" },
    { name: "RESELLER", href: "/reseller" },
    { name: "BLOG", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060810]/95 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#060810]/80 backdrop-blur-md border-b border-white/5 py-4"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between relative">
        
        {/* BRAND LOGO */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 group shrink-0 z-20">
          <BrandLogo />
        </Link>

        {/* CENTER CAPSULE NAVIGATION BAR */}
        <nav className="hidden lg:flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-[#080B14]/90 p-1.5 backdrop-blur-md shadow-[0_0_25px_rgba(6,182,212,0.15)]">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-2 text-xs font-black tracking-wider uppercase rounded-full transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 text-black shadow-[0_0_18px_rgba(6,182,212,0.6)]"
                    : "text-[#A7B0C0] hover:text-white hover:bg-white/5 font-extrabold"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTION BUTTON */}
        <div className="hidden sm:flex items-center gap-4 shrink-0 z-20">
          <a
            href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20get%20started%20with%20StrimoIPTV."
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-black uppercase tracking-wider px-7 py-3 shadow-[0_0_22px_rgba(6,182,212,0.6)] hover:shadow-[0_0_32px_rgba(6,182,212,0.95)] transition-all duration-300 active:scale-[0.98]"
          >
            GET STARTED
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors z-20"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060810]/98 border-b border-cyan-500/20 px-6 py-6 space-y-3 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-black tracking-wider uppercase transition-colors ${
                    isActive
                      ? "bg-cyan-400 text-black font-black"
                      : "text-[#A7B0C0] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20get%20started%20with%20StrimoIPTV."
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3.5 rounded-full bg-cyan-400 text-black text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.6)]"
            >
              GET STARTED
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
