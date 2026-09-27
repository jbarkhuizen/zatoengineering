import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Orbitron } from "next/font/google"; // Pulling both directly from Google Fonts natively

import "./globals.css";

// Configure our modern, ultra-clean sans font
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

// Configure our raw industrial font accent
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Zato Engineering | Precision Grinding & Hard Chrome Specialists",
  description: "Advanced engineering solutions, precision grinding, and hard chrome specialities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${orbitron.variable}`}>
      <body className="font-sans bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-zato-gold selection:text-slate-950">
        
        {/* Sleek, glassmorphism blurred header navigation */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/60 border-b border-white/[0.03]">
          <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <Image 
                src="/Zato Engineering Logo.png" 
                alt="Zato Engineering Logo" 
                width={52} 
                height={70} 
                className="object-contain filter brightness-110 h-auto transition-transform duration-300 hover:scale-120"
                priority
              />
              <div className="flex flex-col justify-center items-start tracking-tight font-sans select-none">
                {/* Zato: big Boldand branded in Zato-Gold */}
                <span className="text-2xl md:text-3xl font-black uppercase text-zato-gold leading-none tracking-wide transition-transform duration-300 group-hover:scale-[1.02]">
                  ZATO
                </span>

                {/* Engineering: underneath, clean white text */}
                <span className="text-[16px] md:text-xs font-semibold upperrcase text-slate-200 tracking-[1.8] leading-none mt-1 opacity-90 transition-colors duration-300 group-hover:text-white">
                  Engineering
                </span>
              </div>
            </Link>
            
            <div className="flex gap-8 font-mono text-xs uppercase tracking-widest text-slate-400">
              <Link href="/" className="hover:text-zato-gold transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-zato-gold hover:after:w-full after:transition-all">Home</Link>
              <Link href="/about" className="hover:text-zato-gold transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-zato-gold hover:after:w-full after:transition-all">About</Link>
              <Link href="/products" className="hover:text-zato-gold transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-zato-gold hover:after:w-full after:transition-all">Products</Link>
              <Link href="/contact" className="hover:text-zato-gold transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-zato-gold hover:after:w-full after:transition-all">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow relative">{children}</main>

        <footer className="border-t border-white/[0.02] bg-slate-950/40 py-8 text-center text-[10px] text-slate-600 tracking-widest uppercase font-mono">
          &copy; {new Date().getFullYear()} ZATO ENGINEERING. [ SYSTEM PRECISION: VERIFIED ]
        </footer>
      </body>
    </html>
  );
}