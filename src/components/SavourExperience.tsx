"use client";

import { motion } from "framer-motion";
import { Compass, Palette, Flame, Sparkles } from "lucide-react";

export default function SavourExperience() {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      tagline: "Understand the occasion.",
      description:
        "We begin with a personal tasting consultation to explore your vision, venue architecture, cultural traditions, and emotional tempo of your gathering.",
      icon: Compass,
    },
    {
      num: "02",
      title: "CURATE",
      tagline: "Build the right menu.",
      description:
        "Our Executive Chefs tailor each course, beverage pairing, and live station concept, matching local seasonality with global luxury ingredients.",
      icon: Palette,
    },
    {
      num: "03",
      title: "CREATE",
      tagline: "Prepare every dish with care.",
      description:
        "From slow-simmered handis to live flambé stations, our brigade executes time-honored techniques with contemporary Michelin-level discipline.",
      icon: Flame,
    },
    {
      num: "04",
      title: "SERVE",
      tagline: "Deliver an effortless experience.",
      description:
        "Discreet, synchronized service and immaculate table settings ensure hosts and guests are immersed in pure celebration without a single distraction.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#263426] text-[#F7F3EA] relative overflow-hidden">
      {/* Subtle background embellishment */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,138,69,0.12),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#B58A45]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
              The Journey
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light leading-[1.05] tracking-tight">
            FROM FIRST TASTE <br />
            <span className="italic font-normal text-[#E8DFD0]">TO FINAL COURSE.</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-[#E8DFD0]/70 font-light max-w-xl leading-relaxed">
            Our seamless four-stage choreography guarantees an effortless hosting experience from your initial tasting to the final farewell digestif.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col justify-between p-8 bg-[#344A35]/40 border border-white/10 hover:border-[#B58A45]/60 transition-all duration-300 group hover:-translate-y-1.5"
              >
                {/* Step Number & Line */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-5xl font-light text-[#B58A45] opacity-70 group-hover:opacity-100 transition-opacity">
                      {step.num}
                    </span>
                    <div className="p-3 bg-[#263426] rounded-full border border-[#B58A45]/30 group-hover:border-[#B58A45] transition-colors">
                      <Icon className="w-5 h-5 text-[#B58A45]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl tracking-wide text-[#F7F3EA] group-hover:text-white transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-serif italic text-base text-[#B58A45] mt-1 mb-4">
                    “{step.tagline}”
                  </p>

                  <p className="text-xs text-[#E8DFD0]/75 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#E8DFD0]/50 group-hover:text-[#B58A45] transition-colors">
                  <span>Phase {step.num}</span>
                  <span>SAVOUR Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
