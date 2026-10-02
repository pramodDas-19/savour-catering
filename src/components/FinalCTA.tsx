"use client";

import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";

interface FinalCTAProps {
  onOpenCustomizer: () => void;
}

export default function FinalCTA({ onOpenCustomizer }: FinalCTAProps) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#1E211D] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=85"
          alt="Luxury dining atmosphere"
          fill
          className="object-cover object-center brightness-[0.45] contrast-[1.1]"
        />
        {/* Dark Olive Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#263426]/90 via-[#263426]/80 to-[#1E211D]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(38,52,38,0.7)_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B58A45]/40 bg-[#263426]/70 backdrop-blur-md mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#B58A45]" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#E8DFD0]">
            Begin Your Culinary Story
          </span>
        </div>

        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#F7F3EA] font-light leading-[0.95] tracking-tight max-w-3xl">
          LET&apos;S CREATE <br />
          SOMETHING <br />
          <span className="italic font-normal text-[#B58A45]">DELICIOUS.</span>
        </h2>

        <p className="mt-8 text-base sm:text-xl text-[#E8DFD0]/90 font-serif italic max-w-2xl leading-relaxed">
          “Tell us about your celebration and we&apos;ll help create a menu around it.”
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onOpenCustomizer}
            className="w-full sm:w-auto px-8 py-4 bg-[#B58A45] hover:bg-[#a07738] text-white text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <span>Customize Your Menu</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border border-[#F7F3EA]/70 hover:border-[#B58A45] bg-[#263426]/60 hover:bg-[#263426] backdrop-blur-md text-[#F7F3EA] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <span>Plan Your Event</span>
            <ArrowUpRight className="w-4 h-4 text-[#B58A45]" />
          </a>
        </div>
      </div>
    </section>
  );
}
