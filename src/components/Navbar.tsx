"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenCustomizer: () => void;
}

export default function Navbar({ onOpenCustomizer }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Menus", href: "#menus" },
    { name: "Signature", href: "#signature" },
    { name: "Live Counters", href: "#live-stations" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#F7F3EA]/95 backdrop-blur-md border-b border-[#263426]/10 shadow-[0_4px_25px_rgba(38,52,38,0.06)] py-3"
            : "bg-gradient-to-b from-[#1E211D]/75 via-[#1E211D]/35 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A45]"
            aria-label="SAVOUR Catering Home"
          >
            <div className="relative w-36 sm:w-44 h-11 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/logo.png"
                alt="SAVOUR Luxury Catering"
                fill
                priority
                className={`object-contain transition-all duration-300 ${
                  scrolled
                    ? "brightness-95 contrast-110 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                    : "brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                }`}
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="#about"
              className={`text-[11px] xl:text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-colors duration-200 relative py-1 hover:text-[#B58A45] group ${
                scrolled ? "text-[#263426]" : "text-white/90 hover:text-white"
              }`}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B58A45] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#experience"
              className={`text-[11px] xl:text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-colors duration-200 relative py-1 hover:text-[#B58A45] group ${
                scrolled ? "text-[#263426]" : "text-white/90 hover:text-white"
              }`}
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B58A45] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#menus"
              className={`text-[11px] xl:text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-colors duration-200 relative py-1 hover:text-[#B58A45] group ${
                scrolled ? "text-[#263426]" : "text-white/90 hover:text-white"
              }`}
            >
              Menus
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B58A45] transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Interactive Customize Link */}
            <button
              onClick={onOpenCustomizer}
              className={`text-[11px] xl:text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-colors duration-200 relative py-1 hover:text-[#B58A45] flex items-center gap-1.5 group ${
                scrolled ? "text-[#263426]" : "text-white/90 hover:text-white"
              }`}
            >
              <span>Customize</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B58A45] animate-pulse" />
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B58A45] transition-all duration-300 group-hover:w-full" />
            </button>

            <a
              href="#gallery"
              className={`text-[11px] xl:text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-colors duration-200 relative py-1 hover:text-[#B58A45] group ${
                scrolled ? "text-[#263426]" : "text-white/90 hover:text-white"
              }`}
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B58A45] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#contact"
              className={`text-[11px] xl:text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-colors duration-200 relative py-1 hover:text-[#B58A45] group ${
                scrolled ? "text-[#263426]" : "text-white/90 hover:text-white"
              }`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B58A45] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Action Right CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="text-[11px] xl:text-xs uppercase tracking-[0.18em] font-semibold whitespace-nowrap px-6 py-2.5 bg-[#263426] text-[#F7F3EA] hover:bg-[#344A35] transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md border border-[#B58A45]/30 hover:border-[#B58A45]"
            >
              <span>Plan Your Event</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B58A45]" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onOpenCustomizer}
              className={`sm:hidden text-[10px] uppercase tracking-wider font-semibold px-3 py-1.5 border border-[#B58A45] whitespace-nowrap ${
                scrolled ? "text-[#263426]" : "text-white"
              }`}
            >
              Customize
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors focus:outline-none ${
                scrolled ? "text-[#263426]" : "text-white"
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#263426]/98 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col justify-between p-8 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="relative w-36 h-10">
            <Image
              src="/logo.png"
              alt="SAVOUR Catering"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/80 hover:text-white p-2"
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        <nav className="flex flex-col gap-5 my-auto">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl text-white/90 hover:text-[#B58A45] transition-colors flex items-center justify-between group"
            >
              <span className="flex items-center gap-4">
                <span className="text-xs font-sans tracking-widest text-[#B58A45]">0{idx + 1}</span>
                <span>{link.name}</span>
              </span>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#B58A45] transition-colors" />
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCustomizer();
            }}
            className="w-full py-3.5 bg-[#B58A45] text-white text-xs uppercase tracking-[0.2em] font-semibold text-center hover:bg-[#9a7333] transition-colors flex items-center justify-center gap-2"
          >
            <span>Launch Menu Customizer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </button>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 border border-white/30 text-white text-xs uppercase tracking-[0.2em] font-semibold text-center hover:bg-white hover:text-[#263426] transition-colors"
          >
            Plan Your Event
          </a>
        </div>
      </div>
    </>
  );
}
