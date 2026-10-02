"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenCustomizer: () => void;
}

export default function Hero({ onOpenCustomizer }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1E211D]"
    >
      {/* Background Image with subtle parallax */}
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 z-0 origin-center will-change-transform"
      >
        <Image
          src="/hero.jpg"
          alt="SAVOUR Luxury Catering"
          fill
          priority
          className="object-cover object-center brightness-[0.78] contrast-[1.05]"
        />
        {/* Editorial Gradients & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E211D] via-[#1E211D]/35 to-[#1E211D]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(30,33,29,0.7)_100%)]" />
      </motion.div>

      {/* Floating subtle emblem badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-24 sm:top-28 z-10 flex flex-col items-center"
      >
        <div className="relative w-28 sm:w-36 h-10 opacity-80 brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          <Image
            src="/logo.png"
            alt="SAVOUR Emblem"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <motion.div
        style={{ opacity: opacityText }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16 flex flex-col items-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#B58A45]/40 bg-[#263426]/60 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B58A45]" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#E8DFD0]">
            SAVOUR CATERING • LUXURY EVENT GASTRONOMY
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F7F3EA] leading-[0.92] tracking-tight font-light uppercase max-w-4xl"
        >
          FOOD THAT <br />
          <span className="italic font-normal text-[#E8DFD0]">BECOMES A</span> <br />
          <span className="text-[#B58A45] font-light">MEMORY.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-7 text-base sm:text-lg md:text-xl text-[#E8DFD0]/90 max-w-2xl font-light leading-relaxed tracking-wide"
        >
          “Exceptional cuisine, beautifully presented for celebrations worth remembering.”
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href="#menus"
            className="w-full sm:w-auto px-8 py-4 bg-[#B58A45] hover:bg-[#a07738] text-white text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore Our Cuisine
          </a>

          <button
            onClick={onOpenCustomizer}
            className="w-full sm:w-auto px-8 py-4 border border-[#F7F3EA]/60 hover:border-[#B58A45] bg-[#263426]/50 hover:bg-[#263426] backdrop-blur-md text-[#F7F3EA] hover:text-white text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-0.5 group"
          >
            <span>Customize Your Menu</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B58A45] group-hover:scale-125 transition-transform" />
          </button>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#E8DFD0]/60 font-medium">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#B58A45]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
