"use client";

export default function Marquee() {
  const line1 = [
    "CRAFT",
    "TASTE",
    "EXPERIENCE",
    "CELEBRATE",
    "CRAFT",
    "TASTE",
    "EXPERIENCE",
    "CELEBRATE",
  ];

  const line2 = [
    "FOOD",
    "FLAVOUR",
    "MOMENTS",
    "SAVOUR",
    "FOOD",
    "FLAVOUR",
    "MOMENTS",
    "SAVOUR",
  ];

  return (
    <section className="py-12 bg-[#263426] text-[#F7F3EA] overflow-hidden border-y border-[#B58A45]/30 select-none">
      {/* Track 1: Leftward scroll */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-2 animate-marquee whitespace-nowrap flex items-center gap-8 text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-widest text-[#E8DFD0]/90">
          {line1.concat(line1).map((word, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{word}</span>
              <span className="text-xs text-[#B58A45] font-sans">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Gold hairline divider */}
      <div className="gold-divider my-2 opacity-30" />

      {/* Track 2: Rightward scroll */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-2 animate-marquee-reverse whitespace-nowrap flex items-center gap-8 text-xl sm:text-3xl md:text-4xl font-serif italic font-light tracking-widest text-[#B58A45]/90">
          {line2.concat(line2).map((word, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{word}</span>
              <span className="text-[10px] text-[#E8DFD0]/40 font-sans">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
