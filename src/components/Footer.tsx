"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface FooterProps {
  onOpenCustomizer: () => void;
}

export default function Footer({ onOpenCustomizer }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#263426] text-[#F7F3EA] border-t border-[#B58A45]/20 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          {/* Brand & Logo */}
          <div className="md:col-span-5 space-y-6">
            <div className="relative w-44 h-14">
              <Image
                src="/logo.png"
                alt="SAVOUR Catering Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="font-serif italic text-xl text-[#E8DFD0]/90 font-light">
              “Exceptional Food for Unforgettable Moments.”
            </p>
            <p className="text-xs text-[#E8DFD0]/70 font-light max-w-sm leading-relaxed">
              Award-winning luxury culinary studio specializing in weddings, corporate galas, and bespoke private gastronomy across India and destination venues.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B58A45] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-widest text-[#E8DFD0]/80">
              <li>
                <a href="#about" className="hover:text-[#B58A45] transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#B58A45] transition-colors">
                  Event Horizons
                </a>
              </li>
              <li>
                <a href="#menus" className="hover:text-[#B58A45] transition-colors">
                  The Savour Table
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#B58A45] transition-colors">
                  Signature Flavours
                </a>
              </li>
              <li>
                <a href="#live-stations" className="hover:text-[#B58A45] transition-colors">
                  Live Theaters
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#B58A45] transition-colors">
                  Visual Folio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B58A45] transition-colors">
                  Connect & Tasting
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Customizer & Connect */}
          <div className="md:col-span-4 space-y-5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B58A45] font-semibold block">
              Interactive Tools
            </span>
            <p className="text-xs text-[#E8DFD0]/70 font-light leading-relaxed">
              Design a preliminary menu with regional courses, guest counts, and live counters in seconds.
            </p>
            <button
              onClick={onOpenCustomizer}
              className="w-full py-3.5 bg-[#B58A45] hover:bg-[#a07738] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>Launch Menu Builder</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </button>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#B58A45] flex items-center justify-center text-[#E8DFD0] hover:text-[#B58A45] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#B58A45] flex items-center justify-center text-[#E8DFD0] hover:text-[#B58A45] transition-colors ml-auto"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8DFD0]/60 gap-4">
          <p>© 2026 SAVOUR Catering. Demo Website.</p>
          <p className="text-[11px] font-mono tracking-wider text-[#B58A45]/80">
            CRAFT • TASTE • ELEGANCE • FRESHNESS
          </p>
        </div>
      </div>
    </footer>
  );
}
