"use client";

import { TESTIMONIALS_DATA } from "@/data/cateringData";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#263426] text-[#F7F3EA] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B58A45]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
              Words of Gratitude
            </span>
            <span className="w-6 h-[1px] bg-[#B58A45]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-none">
            SERVED WITH LOVE. <br />
            <span className="italic font-normal text-[#E8DFD0]">REMEMBERED WITH JOY.</span>
          </h2>

          <p className="mt-4 text-xs font-mono uppercase tracking-widest text-[#B58A45]/80">
            Selected Client Reflections • Demo Portfolio Excerpts
          </p>
        </div>

        {/* 3 Editorial Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 bg-[#344A35]/30 border border-white/10 hover:border-[#B58A45]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#B58A45]/50 mb-6 stroke-[1.5]" />
                <p className="font-serif italic text-lg sm:text-xl text-[#F7F3EA] leading-relaxed font-light">
                  “{t.quote}”
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#263426] border border-[#B58A45]/40 flex items-center justify-center font-serif text-sm text-[#B58A45]">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#F7F3EA]">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-[#E8DFD0]/60 font-light mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
