"use client";

import Image from "next/image";
import { Flame, Sparkles, ChefHat } from "lucide-react";

interface LiveStationsProps {
  onOpenCustomizer: () => void;
}

export default function LiveStations({ onOpenCustomizer }: LiveStationsProps) {
  const stations = [
    {
      title: "Flaming 24-Month Parmigiano Wheel",
      caption: "Handmade tagliolini flambéed live with French brandy inside a massive parmesan drum, finished with shaved black truffle.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",
      tag: "Live Pasta Theater",
    },
    {
      title: "Live Charcoal Sigri & Tandoor Station",
      caption: "Live embers, smoking skewers of Kakori kebabs, artisanal sheermal, and stuffed za&apos;atar kulchas served piping hot.",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80",
      tag: "Wood-Fired Embers",
    },
    {
      title: "Benares Royal Chaat Counter",
      caption: "Crispy palak patta crisps, five distinct aromatic mountain waters, and smoked matar kulchas assembled in real-time.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
      tag: "Interactive Street Luxury",
    },
    {
      title: "Liquid Nitrogen & Flambé Dessert Bar",
      caption: "Flash-frozen pistachio kulfi crumbles, billowing cool mist, Belgian chocolate spheres melted by hot caramel pour-overs.",
      image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=1000&q=80",
      tag: "Sensory Patisserie",
    },
  ];

  return (
    <section id="live-stations" className="py-24 sm:py-32 bg-[#263426] text-[#F7F3EA] relative overflow-hidden">
      {/* Decorative linework / subtle glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B58A45]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#344A35]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B58A45]/30 bg-[#1E211D]/40 mb-4">
            <Flame className="w-3.5 h-3.5 text-[#B58A45]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E8DFD0] font-medium">
              Theatrical Culinary Performance
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-none">
            WATCH THE FOOD <br />
            <span className="italic font-normal text-[#B58A45]">COME ALIVE.</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#E8DFD0]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Our live chef stations transform private events into high-energy culinary spectacles where guests engage directly with master artisans.
          </p>
        </div>

        {/* 4 Theatrical Station Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {stations.map((st, i) => (
            <div
              key={st.title}
              className="group relative h-[380px] sm:h-[420px] overflow-hidden border border-white/10 hover:border-[#B58A45]/60 transition-all duration-500 shadow-xl"
            >
              <Image
                src={st.image}
                alt={st.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108 brightness-[0.7] group-hover:brightness-[0.6]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E211D] via-[#1E211D]/40 to-transparent" />

              {/* Station Tag */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 bg-[#1E211D]/80 backdrop-blur-md text-[#B58A45] border border-[#B58A45]/40">
                  {st.tag}
                </span>
                <span className="text-xs font-mono text-white/50">0{i + 1}</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="w-8 h-[1.5px] bg-[#B58A45] mb-3 transition-all duration-300 group-hover:w-16" />
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-light group-hover:text-[#F7F3EA] transition-colors">
                  {st.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#E8DFD0]/85 font-light leading-relaxed max-w-lg">
                  {st.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenCustomizer}
            className="px-8 py-3.5 border border-[#B58A45] text-[#F7F3EA] hover:bg-[#B58A45] hover:text-white transition-all text-xs uppercase tracking-[0.2em] font-semibold inline-flex items-center gap-2"
          >
            <ChefHat className="w-4 h-4 text-[#B58A45] hover:text-white" />
            <span>Integrate Live Counters Into Your Menu</span>
          </button>
        </div>
      </div>
    </section>
  );
}
