"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface SignatureDishesProps {
  onOpenCustomizer: () => void;
}

interface DishItem {
  id: string;
  num: string;
  title: string;
  category: string;
  caption: string;
  image: string;
  origin: string;
}

const DISHES: DishItem[] = [
  {
    id: "sig-1",
    num: "01",
    title: "Royal Awadhi Dum Biryani",
    category: "HERITAGE MAIN",
    caption:
      "Aged long-grain Dehradun basmati, tender mountain lamb, whole saffron stigmas, and artisanal attar sealed under edible silver leaf.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=85",
    origin: "Lucknow, India",
  },
  {
    id: "sig-2",
    num: "02",
    title: "Truffle Infused Malai Burrata Kulcha",
    category: "GOURMET STARTER",
    caption:
      "Slow-baked tandoori kulcha stuffed with wild porcini, topped with fresh Puglia burrata, micro cilantro, and summer black truffle carpaccio.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=85",
    origin: "Contemporary Fusion",
  },
  {
    id: "sig-3",
    num: "03",
    title: "24-Hour Braised Prime Cut & Morel Glaze",
    category: "CHEF'S MAIN COURSE",
    caption:
      "Slowly simmered with roasted bone marrow essence, Himalayan wild morels, celery root puree, and pickled shallot petals.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=85",
    origin: "Haute Gastronomy",
  },
  {
    id: "sig-4",
    num: "04",
    title: "Gold Leaf Saffron Shrikhand & Chocolate",
    category: "ARTISAN DESSERT",
    caption:
      "Valrhona Guanaja cocoa vessel filled with velvet saffron hung-curd, Iranian pistachios, and hand-applied 24-karat edible gold foil.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    origin: "Bespoke Patisserie",
  },
];

// Feature Row with Parallax effect
function ParallaxFeatureDish({
  dish,
  isReversed = false,
}: {
  dish: DishItem;
  isReversed?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms: image moves inside frame, text floats oppositely
  const yImage = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["25px", "-25px"]);
  const yWatermark = useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]);

  return (
    <div
      ref={cardRef}
      className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Floating Background Watermark Number */}
      <motion.span
        style={{ y: yWatermark }}
        className={`hidden lg:block absolute -top-12 font-serif text-[12rem] font-light text-[#B58A45]/10 select-none pointer-events-none z-0 ${
          isReversed ? "right-10" : "left-10"
        }`}
      >
        {dish.num}
      </motion.span>

      {/* Image Column with Parallax Zoom/Shift */}
      <div
        className={`relative z-10 ${
          isReversed
            ? "lg:col-span-7 lg:order-2"
            : "lg:col-span-7 lg:order-1"
        }`}
      >
        <div className="relative overflow-hidden h-[420px] sm:h-[520px] bg-[#263426] shadow-2xl border border-[#E8DFD0] group">
          <motion.div
            style={{ y: yImage, scale: 1.15 }}
            className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
          >
            <Image
              src={dish.image}
              alt={dish.title}
              fill
              className="object-cover object-center brightness-[0.92] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

          {/* Badge */}
          <div
            className={`absolute top-4 z-20 px-3 py-1 bg-[#263426]/90 backdrop-blur-sm text-[10px] uppercase tracking-widest text-[#B58A45] font-semibold border border-[#B58A45]/30 ${
              isReversed ? "right-4" : "left-4"
            }`}
          >
            {dish.origin}
          </div>
        </div>
      </div>

      {/* Text Column with Opposing Parallax Float */}
      <motion.div
        style={{ y: yText }}
        className={`relative z-10 space-y-4 ${
          isReversed
            ? "lg:col-span-5 lg:order-1 lg:text-right flex flex-col lg:items-end"
            : "lg:col-span-5 lg:order-2"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest text-[#B58A45] font-semibold">
            {dish.num}
          </span>
          <span className="w-4 h-[1px] bg-[#B58A45]/50" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
            {dish.category}
          </span>
        </div>

        <h3 className="font-serif text-3xl sm:text-5xl text-[#263426] font-light leading-tight">
          {dish.title}
        </h3>

        <div className="w-16 h-[1.5px] bg-[#B58A45] my-2" />

        <p className="text-sm text-[#1E211D]/80 font-light leading-relaxed max-w-md">
          {dish.caption}
        </p>
      </motion.div>
    </div>
  );
}

// Half-column cards with independent subtle vertical parallax
function ParallaxCardDish({ dish }: { dish: DishItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={cardRef} className="space-y-5">
      <div className="group relative overflow-hidden h-[360px] sm:h-[440px] bg-[#263426] shadow-xl border border-[#E8DFD0]">
        <motion.div
          style={{ y: yImage, scale: 1.12 }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
        >
          <Image
            src={dish.image}
            alt={dish.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#263426]/90 backdrop-blur-sm text-[10px] uppercase tracking-widest text-[#B58A45] font-semibold border border-[#B58A45]/30">
          {dish.origin}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-mono tracking-widest text-[#B58A45] font-semibold">
            {dish.num}
          </span>
          <span className="w-4 h-[1px] bg-[#B58A45]/40" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
            {dish.category}
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#263426] font-light">
          {dish.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#1E211D]/75 font-light leading-relaxed">
          {dish.caption}
        </p>
      </div>
    </div>
  );
}

export default function SignatureDishes({ onOpenCustomizer }: SignatureDishesProps) {
  return (
    <section id="signature" className="py-24 sm:py-36 bg-[#F7F3EA] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 sm:mb-28">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B58A45]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
                Culinary Centerpieces
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl text-[#263426] font-light leading-none tracking-tight">
              SIGNATURE <br />
              <span className="italic font-normal text-[#A96348]">FLAVOURS.</span>
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 max-w-md">
            <p className="text-sm text-[#1E211D]/75 font-light leading-relaxed mb-4">
              Iconic dishes that have defined royal wedding feasts and international diplomatic banquets. Crafted without compromise.
            </p>
            <button
              onClick={onOpenCustomizer}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-[#263426] hover:text-[#B58A45] flex items-center gap-2 group transition-colors"
            >
              <span>Add Signatures to Your Event</span>
              <ArrowUpRight className="w-4 h-4 text-[#B58A45] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Parallax Dishes Layout */}
        <div className="space-y-24 sm:space-y-36">
          {/* Dish 1: Left heavy layout with Parallax */}
          <ParallaxFeatureDish dish={DISHES[0]} isReversed={false} />

          {/* Dish 2: Right heavy layout with Parallax */}
          <ParallaxFeatureDish dish={DISHES[1]} isReversed={true} />

          {/* Dishes 3 & 4: Two Asymmetrical Columns with subtle individual scroll parallax */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 pt-4">
            <ParallaxCardDish dish={DISHES[2]} />
            <ParallaxCardDish dish={DISHES[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
