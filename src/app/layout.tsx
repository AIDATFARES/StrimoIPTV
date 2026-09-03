import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import BrandLogo from "@/components/ui/BrandLogo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "StrimoIPTV | #1 Premium 4K IPTV Subscription Service 2026",
  description: "Experience premium IPTV streaming with StrimoIPTV. Access 50,000+ live international channels, 200,000 VOD movies, and live 4K sports with anti-freeze server technology and instant automated setup.",
  metadataBase: new URL("https://www.strimoiptv.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "StrimoIPTV | #1 Premium 4K IPTV Subscription Service 2026",
    description: "Experience premium IPTV streaming with StrimoIPTV. Access 50,000+ live international channels, 200,000 VOD movies, and live 4K sports with anti-freeze server technology and instant automated setup.",
    url: "https://www.strimoiptv.com",
    siteName: "StrimoIPTV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StrimoIPTV | #1 Premium 4K IPTV Subscription Service 2026",
    description: "Experience premium IPTV streaming with StrimoIPTV. Access 50,000+ live international channels, 200,000 VOD movies, and live 4K sports with anti-freeze server technology and instant automated setup.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${geist.variable}`}>
      <head />
      <body className="global-grid-bg text-[#F8FAFC] min-h-screen flex flex-col antialiased selection:bg-cyan-500 selection:text-black">
        {/* Header Navigation */}
        <Navbar />

        <div className="flex-grow flex flex-col">{children}</div>

        {/* Footer */}
        <footer className="w-full mt-auto border-t border-white/[0.08] bg-[#05070D]">
          <div className="max-w-[1400px] mx-auto px-6 py-16 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
              
              {/* Brand Column */}
              <div className="lg:col-span-2 space-y-4">
                <Link href="/" className="inline-block">
                  <BrandLogo />
                </Link>
                <p className="text-sm text-[#A7B0C0] max-w-sm leading-relaxed">
                  StrimoIPTV is a leading global IPTV platform providing high-bitrate live television, 4K sports, and VOD entertainment with 99.9% server stability.
                </p>
                <div className="pt-2 text-xs text-[#667085]">
                  © 2026 STRIMOIPTV. All rights reserved.
                </div>
              </div>

              {/* Product Column */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Product</h4>
                <ul className="space-y-2.5 text-sm text-[#A7B0C0]">
                  <li><Link href="/#pricing" className="hover:text-[#60A5FA] transition-colors">Plans & Pricing</Link></li>
                  <li><Link href="/#devices" className="hover:text-[#60A5FA] transition-colors">Supported Devices</Link></li>
                  <li><Link href="/#sports" className="hover:text-[#60A5FA] transition-colors">Sports Channels</Link></li>
                  <li><Link href="/channels" className="hover:text-[#60A5FA] transition-colors">Channel List</Link></li>
                </ul>
              </div>

              {/* Support Column */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Support</h4>
                <ul className="space-y-2.5 text-sm text-[#A7B0C0]">
                  <li><Link href="/installation" className="hover:text-[#60A5FA] transition-colors">Install Guide</Link></li>
                  <li><Link href="/faq" className="hover:text-[#60A5FA] transition-colors">FAQ</Link></li>
                  <li><Link href="/contact" className="hover:text-[#60A5FA] transition-colors">Contact Us</Link></li>
                  <li>
                    <a 
                      href="https://wa.me/213552069874" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-[#60A5FA] transition-colors flex items-center gap-1.5"
                    >
                      <span>WhatsApp Support</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company & Legal Column */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
                <ul className="space-y-2.5 text-sm text-[#A7B0C0]">
                  <li><Link href="/blog" className="hover:text-[#60A5FA] transition-colors">Blog & Guides</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-[#60A5FA] transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/refund-policy" className="hover:text-[#60A5FA] transition-colors">Refund Policy</Link></li>
                  <li><Link href="/dmca" className="hover:text-[#60A5FA] transition-colors">DMCA Disclaimer</Link></li>
                </ul>
              </div>

            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#667085] gap-4">
              <div>High Performance 4K Cloud Streaming Infrastructure</div>
              <div className="flex items-center gap-4">
                <Link href="/privacy-policy" className="hover:text-[#A7B0C0] transition-colors">Privacy</Link>
                <Link href="/refund-policy" className="hover:text-[#A7B0C0] transition-colors">Refunds</Link>
                <Link href="/dmca" className="hover:text-[#A7B0C0] transition-colors">DMCA</Link>
              </div>
            </div>
          </div>
        </footer>

        <WhatsAppButton />
      </body>
    </html>
  );
}
