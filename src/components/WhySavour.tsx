"use client";

import { Leaf, BookOpen, Sparkles, ShieldCheck } from "lucide-react";

export default function WhySavour() {
  const pillars = [
    {
      num: "01",
      title: "FRESH INGREDIENTS",
      description:
        "Every spice is cold-milled, oils are cold-pressed, seafood arrives same-morning from coastal harbors, and seasonal vegetables are procured directly from regenerative organic growers.",
      icon: Leaf,
    },
    {
      num: "02",
      title: "CURATED MENUS",
      description:
        "We reject repetitive standard banquet templates. Every course sequence is bespoke, thoughtfully engineered to complement your venue, theme, climate, and guest demographics.",
      icon: BookOpen,
    },
    {
      num: "03",
      title: "BEAUTIFUL PRESENTATION",
      description:
        "Food presented as fine art. Custom stoneware, natural marble pedestals, botanical floral accents, and atmospheric lighting elevate every serving counter into a sculpture.",
      icon: Sparkles,
    },
    {
      num: "04",
      title: "PROFESSIONAL SERVICE",
      description:
        "Experienced butler brigades, certified sommeliers, and dedicated floor managers execute synchronized service with discreet grace, anticipating guest desires before they are spoken.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F7F3EA] border-t border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B58A45]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
              The SAVOUR Standard
            </span>
            <span className="w-6 h-[1px] bg-[#B58A45]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#263426] font-light tracking-tight leading-none">
            THOUGHTFUL FOOD. <br />
            <span className="italic font-normal text-[#A96348]">SEAMLESS SERVICE.</span>
          </h2>
        </div>

        {/* 4 Pillars with minimal icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="p-8 bg-white border border-[#E8DFD0] hover:border-[#B58A45] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs tracking-widest text-[#B58A45] font-semibold">
                      {item.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#263426]/70 group-hover:text-[#B58A45] transition-colors" />
                  </div>

                  <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#263426] mb-3 group-hover:text-[#A96348] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1E211D]/75 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F2ECE1]">
                  <div className="w-0 group-hover:w-full h-[1.5px] bg-[#B58A45] transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
