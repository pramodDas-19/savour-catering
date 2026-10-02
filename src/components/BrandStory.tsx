"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function BrandStory() {
  const highlights = [
    {
      num: "01",
      title: "Fresh Ingredients",
      desc: "Farm-sourced seasonal produce, hand-ground heirloom spices, and pristine seafood procured daily.",
    },
    {
      num: "02",
      title: "Curated Menus",
      desc: "Every course tailored to the emotional cadence, cultural traditions, and theme of your event.",
    },
    {
      num: "03",
      title: "Thoughtful Presentation",
      desc: "Artisanal stoneware, architectural buffet tiers, botanical accents, and museum-grade plating.",
    },
    {
      num: "04",
      title: "Professional Service",
      desc: "White-glove maître d' hospitality, synchronized table service, and graceful floor management.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F7F3EA] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Editorial Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#B58A45]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
              Our Culinary Philosophy
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#263426] font-light leading-[1.12] tracking-tight">
            CRAFTED WITH PASSION,{" "}
            <span className="italic font-normal text-[#A96348] block sm:inline">
              SERVED WITH ELEGANCE.
            </span>
          </h2>
        </div>

        {/* Two-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Refined Food Photography */}
          <div className="lg:col-span-6">
            <div className="relative h-[420px] sm:h-[500px] md:h-[540px] w-full overflow-hidden border border-[#E8DFD0] shadow-xl bg-[#263426] group">
              <Image
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85"
                alt="SAVOUR Luxury Catering Presentation"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E211D]/80 via-[#1E211D]/20 to-transparent" />

              {/* Refined Integrated Caption Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 bg-[#F7F3EA]/95 backdrop-blur-md border border-[#B58A45]/30 shadow-md">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#B58A45] font-semibold block mb-1">
                  The Master&apos;s Touch
                </span>
                <p className="font-serif italic text-base sm:text-lg text-[#263426] leading-snug">
                  “We do not simply prepare food; we compose sensory memories.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-7">
            <div className="space-y-4">
              <p className="font-serif text-xl sm:text-2xl text-[#263426] leading-relaxed font-normal">
                “At SAVOUR, every celebration begins with food worth remembering. From carefully selected ingredients to thoughtful presentation, we create culinary experiences designed around the occasion.”
              </p>
              <p className="text-xs sm:text-sm text-[#1E211D]/75 font-light leading-relaxed">
                Whether orchestrating a royal destination wedding banquet under starlit canopies or an intimate private chef omakase, SAVOUR brings the discipline of Michelin-starred kitchens to the scale and grandeur of luxury event catering.
              </p>
            </div>

            <div className="olive-divider my-2" />

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-1">
              {highlights.map((item) => (
                <div
                  key={item.num}
                  className="group border-l-2 border-[#B58A45]/40 hover:border-[#B58A45] pl-4 transition-colors duration-300"
                >
                  <span className="text-[10px] font-mono tracking-widest text-[#B58A45] font-semibold block mb-1">
                    {item.num}
                  </span>
                  <h3 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#263426] mb-1 group-hover:text-[#A96348] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#1E211D]/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
