"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SHOWCASE_CATEGORIES, MenuItem } from "@/data/cateringData";
import { Sparkles, ArrowRight } from "lucide-react";

interface MenuShowcaseProps {
  onOpenCustomizer: () => void;
}

export default function MenuShowcase({ onOpenCustomizer }: MenuShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("indian");

  const currentCategory =
    SHOWCASE_CATEGORIES.find((cat) => cat.id === activeCategory) ||
    SHOWCASE_CATEGORIES[0];

  return (
    <section id="menus" className="py-24 sm:py-32 bg-[#F7F3EA] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B58A45]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
              The Collection
            </span>
            <span className="w-6 h-[1px] bg-[#B58A45]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#263426] font-light leading-none tracking-tight">
            THE SAVOUR <span className="italic font-normal text-[#A96348]">TABLE</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#1E211D]/80 font-light font-serif italic">
            “Explore a selection of flavours crafted for every occasion.”
          </p>
        </div>

        {/* Editorial Horizontal Category Selector */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-12 sm:mb-16 scrollbar-none gap-2 sm:gap-3 border-b border-[#E8DFD0]">
          {SHOWCASE_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-3 text-xs uppercase tracking-[0.2em] font-semibold whitespace-nowrap transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "text-[#263426]"
                    : "text-[#1E211D]/60 hover:text-[#263426]"
                }`}
              >
                <span>{cat.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#B58A45]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[#B58A45] font-medium mb-1">
            {currentCategory.name} CURATION
          </p>
          <p className="text-sm text-[#1E211D]/75 font-light">
            {currentCategory.description}
          </p>
        </div>

        {/* Animated Dishes Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {currentCategory.items.map((dish: MenuItem) => (
              <div
                key={dish.id}
                className="group bg-[#FFFFFF] border border-[#E8DFD0] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Dish Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-[#263426]">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108 group-hover:brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Dietary Indicator Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-white/95 backdrop-blur-md border border-[#E8DFD0] shadow-sm">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        dish.isVeg ? "bg-emerald-600" : "bg-red-600"
                      }`}
                    />
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-[#263426]">
                      {dish.isVeg ? "Veg" : "Non-Veg"}
                    </span>
                    {dish.isJainFriendly && (
                      <span className="text-[8px] uppercase tracking-wider text-[#A96348] font-bold border-l pl-1 border-gray-300">
                        Jain
                      </span>
                    )}
                  </div>

                  {/* Cuisine / Tag */}
                  {dish.tag && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#263426]/90 backdrop-blur-sm text-[#F7F3EA] text-[9px] uppercase tracking-widest font-medium border border-[#B58A45]/40">
                      {dish.tag}
                    </div>
                  )}

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B58A45] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>

                {/* Dish Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#B58A45] font-semibold mb-1.5">
                      <span>{dish.cuisine}</span>
                      <span className="text-[#1E211D]/40 font-mono text-[9px]">{dish.category}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-[#263426] leading-snug font-normal group-hover:text-[#A96348] transition-colors duration-200">
                      {dish.name}
                    </h3>

                    <p className="mt-2.5 text-xs text-[#1E211D]/75 font-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                    <button
                      onClick={onOpenCustomizer}
                      className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#263426] hover:text-[#B58A45] transition-colors flex items-center gap-1.5"
                    >
                      <span>Add to Custom Menu</span>
                      <ArrowRight className="w-3 h-3 text-[#B58A45]" />
                    </button>
                    <Sparkles className="w-3.5 h-3.5 text-[#B58A45]/50 group-hover:text-[#B58A45] transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Banner to Customizer */}
        <div className="mt-16 p-8 sm:p-10 bg-[#263426] text-[#F7F3EA] flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#B58A45]/30 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
              Interactive Gastronomy
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-light">
              Desire an entirely personalized culinary journey?
            </h4>
            <p className="text-xs text-[#E8DFD0]/80 font-light max-w-xl">
              Combine multi-regional courses, interactive live counters, dietary accommodations, and craft beverages in our bespoke menu builder.
            </p>
          </div>
          <button
            onClick={onOpenCustomizer}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#B58A45] hover:bg-[#a07738] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg"
          >
            Launch Menu Builder
          </button>
        </div>
      </div>
    </section>
  );
}
