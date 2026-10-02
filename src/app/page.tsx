"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Marquee from "@/components/Marquee";
import CulinaryExperience from "@/components/CulinaryExperience";
import MenuShowcase from "@/components/MenuShowcase";
import MenuCustomizer from "@/components/MenuCustomizer";
import SavourExperience from "@/components/SavourExperience";
import SignatureDishes from "@/components/SignatureDishes";
import LiveStations from "@/components/LiveStations";
import Gallery from "@/components/Gallery";
import WhySavour from "@/components/WhySavour";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [initialOccasion, setInitialOccasion] = useState<string>("wedding");

  const handleOpenCustomizer = (occasion?: string) => {
    if (occasion) {
      setInitialOccasion(occasion);
    }
    setIsCustomizerOpen(true);
  };

  const handleCloseCustomizer = () => {
    setIsCustomizerOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#1E211D] relative selection:bg-[#B58A45]/20 selection:text-[#263426]">
      {/* Refined Sticky Navbar */}
      <Navbar onOpenCustomizer={() => handleOpenCustomizer()} />

      {/* Cinematic Hero */}
      <Hero onOpenCustomizer={() => handleOpenCustomizer()} />

      {/* Brand Narrative */}
      <BrandStory />

      {/* Continuous Luxury Marquee */}
      <Marquee />

      {/* 4 Editorial Experience Blocks */}
      <CulinaryExperience onOpenCustomizer={handleOpenCustomizer} />

      {/* Interactive The Savour Table Menu Showcase */}
      <MenuShowcase onOpenCustomizer={() => handleOpenCustomizer()} />

      {/* 4-Step Culinary Journey */}
      <SavourExperience />

      {/* Asymmetric Signature Flavours */}
      <SignatureDishes onOpenCustomizer={() => handleOpenCustomizer()} />

      {/* Live Theaters & Chef Action */}
      <LiveStations onOpenCustomizer={() => handleOpenCustomizer()} />

      {/* Magazine Editorial Gallery */}
      <Gallery />

      {/* 4 Pillars - Why Savour */}
      <WhySavour />

      {/* Client Reflections */}
      <Testimonials />

      {/* Immersive Final Call to Action */}
      <FinalCTA onOpenCustomizer={() => handleOpenCustomizer()} />

      {/* Demo Contact & Event Planning Form */}
      <Contact />

      {/* Brand Footer */}
      <Footer onOpenCustomizer={() => handleOpenCustomizer()} />

      {/* Floating WhatsApp Quick Concierge */}
      <WhatsAppButton />

      {/* Core Interactive Feature: Full-Screen / Side Drawer Menu Customizer Modal */}
      <MenuCustomizer
        isOpen={isCustomizerOpen}
        onClose={handleCloseCustomizer}
        initialOccasion={initialOccasion}
      />
    </main>
  );
}
