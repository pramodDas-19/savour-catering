"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/910000000000?text=Hello%20SAVOUR%20Catering%2C%20I%20would%20like%20to%20inquire%20about%20bespoke%20event%20catering.";

  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group"
      aria-label="WhatsApp Concierge"
    >
      {/* Expandable Luxury Tooltip Pill */}
      <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-[#263426]/95 backdrop-blur-md text-[#F7F3EA] border border-[#B58A45]/40 shadow-xl opacity-0 translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] uppercase tracking-wider font-semibold">
          Chat with Concierge
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SAVOUR Catering on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#B58A45] focus:ring-offset-2"
      >
        {/* Subtle pulsing outer ring */}
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white stroke-none drop-shadow-sm" />
      </a>
    </motion.aside>
  );
}
