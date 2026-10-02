"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CulinaryExperienceProps {
  onOpenCustomizer: (initialOccasion?: string) => void;
}

export default function CulinaryExperience({ onOpenCustomizer }: CulinaryExperienceProps) {
  const experiences = [
    {
      id: "wedding",
      num: "01",
      title: "WEDDINGS",
      subtitle: "Menus designed around your celebration.",
      description:
        "Bespoke multi-course banquet design, pre-wedding cocktail spreads, interactive live stations, and artisanal dessert displays crafted to honor your vows.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      badge: "Royal Occasions",
    },
    {
      id: "corporate",
      num: "02",
      title: "CORPORATE EVENTS",
      subtitle: "Refined dining for professional occasions.",
      description:
        "High-level executive summits, product reveals, and luxury gala dinners where impeccable hospitality and immaculate culinary execution elevate your corporate image.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
      badge: "Executive Hospitality",
    },
    {
      id: "private-party",
      num: "03",
      title: "PRIVATE CELEBRATIONS",
      subtitle: "Personalized experiences for intimate gatherings.",
      description:
        "Intimate residential gatherings, landmark birthdays, and anniversary dinners featuring bespoke multi-course menus tailored precisely to your personal preferences.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
      badge: "Intimate Dinners",
    },
    {
      id: "festival",
      num: "04",
      title: "GRAND EVENTS",
      subtitle: "Full-scale culinary experiences for unforgettable occasions.",
      description:
        "Expansive destination gatherings, grand soirees, and monumental cultural festivals requiring multi-kitchen orchestration and hundreds of master artisans.",
      image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1200&q=85",
      badge: "Mega Gatherings",
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F7F3EA] border-t border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B58A45]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
                Event Horizons
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#263426] font-light leading-none tracking-tight">
              MORE THAN <br className="hidden sm:block" />
              <span className="italic font-normal text-[#A96348]">CATERING.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-sm md:text-base text-[#1E211D]/70 max-w-md font-light leading-relaxed">
            Every occasion demands an individually curated sensory identity. We translate your story into an unforgettable gastronomic symphony.
          </p>
        </div>

        {/* 4 Large Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onClick={() => onOpenCustomizer(exp.id)}
              className="group relative h-[480px] sm:h-[540px] overflow-hidden bg-[#263426] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E8DFD0]"
            >
              {/* Background Image with Zoom */}
              <div className="absolute inset-0">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover object-center filter brightness-[0.75] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-[0.65]"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E211D] via-[#1E211D]/40 to-transparent transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[#263426]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Number and Badge */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span className="text-xs font-mono tracking-widest text-[#B58A45] font-medium px-3 py-1 bg-[#1E211D]/60 backdrop-blur-sm border border-[#B58A45]/30">
                  {exp.num}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#E8DFD0] px-3 py-1 bg-[#263426]/70 backdrop-blur-sm border border-white/10">
                  {exp.badge}
                </span>
              </div>

              {/* Bottom Content with Text Movement & Gold Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 z-10 flex flex-col justify-end transform transition-transform duration-500">
                {/* Gold Accent Line */}
                <div className="w-12 h-[2px] bg-[#B58A45] mb-4 transition-all duration-500 group-hover:w-24 group-hover:bg-[#D4A86A]" />

                <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F3EA] font-light tracking-wide group-hover:text-white transition-colors duration-300">
                  {exp.title}
                </h3>

                <p className="font-serif italic text-lg sm:text-xl text-[#B58A45] mt-1 mb-3">
                  “{exp.subtitle}”
                </p>

                <p className="text-xs sm:text-sm text-[#E8DFD0]/85 font-light leading-relaxed max-w-lg opacity-90 sm:opacity-80 sm:group-hover:opacity-100 transition-opacity duration-300">
                  {exp.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#F7F3EA] group-hover:text-[#B58A45] transition-colors">
                  <span>Design For This Occasion</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
