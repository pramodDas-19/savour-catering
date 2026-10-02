"use client";

import Image from "next/image";

export default function Gallery() {
  const photos = [
    {
      id: "g1",
      title: "Royal Banquet Setting",
      category: "Table Architecture",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      span: "md:col-span-8 md:row-span-2 h-[420px] md:h-[540px]",
    },
    {
      id: "g2",
      title: "Chef Finishing Touch",
      category: "Culinary Discipline",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=85",
      span: "md:col-span-4 h-[260px] md:h-[255px]",
    },
    {
      id: "g3",
      title: "Artisan Dessert Symphony",
      category: "Fine Patisserie",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85",
      span: "md:col-span-4 h-[260px] md:h-[255px]",
    },
    {
      id: "g4",
      title: "Celebration Toast",
      category: "The Atmosphere",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=85",
      span: "md:col-span-4 h-[320px] md:h-[380px]",
    },
    {
      id: "g5",
      title: "Wood-Fired Live Counter",
      category: "Live Theater",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=85",
      span: "md:col-span-4 h-[320px] md:h-[380px]",
    },
    {
      id: "g6",
      title: "Handmade Ravioli & Truffle",
      category: "Plated Art",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=85",
      span: "md:col-span-4 h-[320px] md:h-[380px]",
    },
  ];

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F7F3EA] border-t border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B58A45]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
                Visual Folio
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#263426] font-light leading-none tracking-tight">
              MAGAZINE <br />
              <span className="italic font-normal text-[#A96348]">EDITORIAL GALLERY.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-sm text-[#1E211D]/75 font-light max-w-sm leading-relaxed">
            A photographic retrospective of intimate soirees, grand pavilion banquets, and delicate gastronomic detail.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {photos.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden bg-[#263426] border border-[#E8DFD0] ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 brightness-[0.9] group-hover:brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E211D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption Reveal + Gold Line */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <div className="w-8 h-[1.5px] bg-[#B58A45] mb-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="text-[9px] uppercase tracking-widest text-[#B58A45] font-semibold block">
                  {item.category}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-white font-light">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
