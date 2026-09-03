"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
    { name: "Home", href: "/" },
    { name: "Plans", href: "/#pricing" },
    { name: "Install", href: "/installation" },
    { name: "Devices", href: "/#devices" },
    { name: "Sports", href: "/#sports" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b border-white/[0.06] ${
        scrolled
          ? "bg-[#060810]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#060810]/85 backdrop-blur-md"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between relative">
        
        {/* LOGO */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 group shrink-0 z-20">
          <BrandLogo />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-[#A7B0C0] hover:text-[#60A5FA]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-4 shrink-0 z-20">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20login%20or%20access%20my%20StrimoIPTV%20account."
            target="_blank"
            rel="noreferrer"
            className="text-[#A7B0C0] hover:text-white text-sm font-semibold transition-colors px-3 py-2"
          >
            Login
          </a>
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20start%20a%20free%20trial%20for%20StrimoIPTV."
            target="_blank"
            rel="noreferrer"
            className="btn-primary-strimo px-5 py-2.5 text-xs uppercase tracking-wider font-extrabold flex items-center gap-2"
          >
            <span>Start Trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors z-20"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060810] border-b border-white/[0.08] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#A7B0C0] hover:text-[#60A5FA] py-1.5 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20start%20a%20free%20trial%20for%20StrimoIPTV."
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3 btn-primary-strimo text-xs uppercase tracking-wider font-extrabold"
            >
              Start Trial →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
