"use client";

import { useState, useEffect, useId } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  Plus,
  Users,
  UtensilsCrossed,
  Sparkles,
  Calendar,
  Send,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import {
  OCCASIONS,
  GUEST_PRESETS,
  CUISINES_LIST,
  CUSTOMIZER_DISHES,
  DIETARY_PREFERENCES,
  CustomizerDish,
} from "@/data/cateringData";

interface MenuCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  initialOccasion?: string;
}

export default function MenuCustomizer({
  isOpen,
  onClose,
  initialOccasion,
}: MenuCustomizerProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 6;

  // Customizer State
  const [selectedOccasion, setSelectedOccasion] = useState<string>(
    initialOccasion || "wedding"
  );
  const [guestCount, setGuestCount] = useState<number | string>(150);
  const [customGuests, setCustomGuests] = useState<string>("");
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([
    "Indian",
    "Continental",
  ]);
  const [selectedDishes, setSelectedDishes] = useState<string[]>([
    "c-start-1", // Charcoal Paneer Tikka
    "c-main-1",  // Signature Dum Biryani
    "c-live-1",  // Flaming Parmigiano Pasta Wheel
    "c-des-1",   // Saffron Angoori Rasmalai
  ]);
  const [activeMenuCategory, setActiveMenuCategory] = useState<string>("STARTERS");
  const [selectedDietary, setSelectedDietary] = useState<string[]>([
    "Vegetarian",
    "Non-Vegetarian",
  ]);
  const [specialRequests, setSpecialRequests] = useState<string>("");

  // Enquiry submission modal state inside customizer
  const [isEnquirySubmitted, setIsEnquirySubmitted] = useState<boolean>(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });
  const [showEnquiryForm, setShowEnquiryForm] = useState<boolean>(false);

  // Generate unique IDs for form inputs
  const customGuestsId = useId();
  const specialRequestsId = useId();
  const fullNameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const eventDateId = useId();

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Sync initial occasion if passed
  useEffect(() => {
    if (initialOccasion) {
      setSelectedOccasion(initialOccasion);
    }
  }, [initialOccasion]);

  if (!isOpen) return null;

  // Helpers
  const toggleCuisine = (cuisineId: string) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisineId)
        ? prev.filter((c) => c !== cuisineId)
        : [...prev, cuisineId]
    );
  };

  const toggleDish = (dishId: string) => {
    setSelectedDishes((prev) =>
      prev.includes(dishId)
        ? prev.filter((id) => id !== dishId)
        : [...prev, dishId]
    );
  };

  const toggleDietary = (item: string) => {
    setSelectedDietary((prev) =>
      prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item]
    );
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetBuilder = () => {
    setCurrentStep(1);
    setIsEnquirySubmitted(false);
    setShowEnquiryForm(false);
  };

  const currentOccasionData =
    OCCASIONS.find((o) => o.id === selectedOccasion) || OCCASIONS[0];

  const filteredDishes = CUSTOMIZER_DISHES.filter(
    (dish) => dish.category === activeMenuCategory
  );

  const stepsMeta = [
    { num: "01", label: "OCCASION" },
    { num: "02", label: "GUESTS" },
    { num: "03", label: "CUISINE" },
    { num: "04", label: "MENU" },
    { num: "05", label: "PREFERENCES" },
    { num: "06", label: "SUMMARY" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="SAVOUR Menu Customizer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E211D]/85 backdrop-blur-xl animate-fade-in p-0 md:p-6 lg:p-10"
    >
      {/* Modal Container */}
      <div className="relative w-full h-full max-w-6xl max-h-[96vh] bg-[#F7F3EA] text-[#263426] shadow-2xl flex flex-col overflow-hidden border border-[#B58A45]/30">
        {/* Top Header Bar */}
        <header className="px-6 py-4 sm:px-8 sm:py-5 border-b border-[#E8DFD0] flex items-center justify-between bg-[#F7F3EA]/95 z-20">
          <div className="flex items-center gap-4">
            <div className="relative w-28 sm:w-36 h-9">
              <Image
                src="/logo.png"
                alt="SAVOUR"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block h-5 w-[1px] bg-[#B58A45]/40" />
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
              Bespoke Culinary Architect
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close menu customizer"
            className="p-2 text-[#263426]/70 hover:text-[#263426] hover:bg-[#E8DFD0]/60 transition-colors rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        {/* Editorial Progress Stepper */}
        <div className="bg-[#FFFFFF] border-b border-[#E8DFD0] px-6 sm:px-8 py-3 overflow-x-auto scrollbar-none z-10">
          <div className="flex items-center justify-between min-w-[550px] max-w-4xl mx-auto">
            {stepsMeta.map((s, idx) => {
              const stepNumber = idx + 1;
              const isPassed = stepNumber < currentStep;
              const isCurrent = stepNumber === currentStep;

              return (
                <button
                  key={s.num}
                  onClick={() => setCurrentStep(stepNumber)}
                  disabled={showEnquiryForm && isEnquirySubmitted}
                  className={`flex items-center gap-2 text-left group focus:outline-none transition-opacity ${
                    isCurrent
                      ? "opacity-100"
                      : isPassed
                      ? "opacity-75 hover:opacity-100"
                      : "opacity-40"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                      isCurrent
                        ? "bg-[#263426] text-[#F7F3EA] ring-2 ring-[#B58A45]"
                        : isPassed
                        ? "bg-[#B58A45] text-white"
                        : "bg-[#E8DFD0] text-[#263426]"
                    }`}
                  >
                    {isPassed ? <Check className="w-3.5 h-3.5" /> : s.num}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-[0.18em] font-semibold whitespace-nowrap ${
                      isCurrent
                        ? "text-[#263426] underline decoration-[#B58A45] underline-offset-4"
                        : "text-[#1E211D]/80"
                    }`}
                  >
                    {s.label}
                  </span>
                  {idx < stepsMeta.length - 1 && (
                    <div
                      className={`w-6 sm:w-10 h-[1px] ml-2 ${
                        isPassed ? "bg-[#B58A45]" : "bg-[#E8DFD0]"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Step Content Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            {/* ================= STEP 1: OCCASION ================= */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl mx-auto space-y-6"
              >
                <div className="text-center max-w-xl mx-auto">
                  <span className="text-[10px] font-mono tracking-widest text-[#B58A45] uppercase">
                    Step 01 / 06
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#263426] font-light mt-1">
                    WHAT ARE YOU PLANNING?
                  </h3>
                  <p className="text-xs text-[#1E211D]/70 mt-2 font-light">
                    Every celebration has its own cadence. Select the occasion to unlock custom culinary curation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
                  {OCCASIONS.map((occ) => {
                    const isSelected = selectedOccasion === occ.id;
                    return (
                      <div
                        key={occ.id}
                        onClick={() => setSelectedOccasion(occ.id)}
                        className={`group relative h-56 rounded-none cursor-pointer overflow-hidden border-2 transition-all duration-300 shadow-sm hover:shadow-lg ${
                          isSelected
                            ? "border-[#B58A45] ring-2 ring-[#B58A45]/30"
                            : "border-transparent hover:border-[#E8DFD0]"
                        }`}
                      >
                        <Image
                          src={occ.image}
                          alt={occ.title}
                          fill
                          className={`object-cover transition-transform duration-700 ${
                            isSelected
                              ? "scale-108 brightness-75"
                              : "brightness-80 group-hover:scale-105"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E211D] via-[#1E211D]/40 to-transparent" />

                        {/* Top Indicator */}
                        <div className="absolute top-3 right-3 z-10">
                          {isSelected ? (
                            <div className="w-7 h-7 rounded-full bg-[#B58A45] text-white flex items-center justify-center shadow-md">
                              <Check className="w-4 h-4 stroke-[3]" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full border border-white/60 bg-black/30 backdrop-blur-sm" />
                          )}
                        </div>

                        {/* Text Info */}
                        <div className="absolute bottom-4 left-4 right-4 z-10">
                          <h4 className="font-serif text-2xl text-white font-light tracking-wide group-hover:text-[#E8DFD0] transition-colors">
                            {occ.title}
                          </h4>
                          <p className="text-[11px] text-[#E8DFD0]/90 font-light mt-1 line-clamp-2">
                            {occ.tagline}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ================= STEP 2: GUEST COUNT ================= */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl mx-auto space-y-8"
              >
                <div className="text-center">
                  <span className="text-[10px] font-mono tracking-widest text-[#B58A45] uppercase">
                    Step 02 / 06
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#263426] font-light mt-1">
                    HOW MANY GUESTS?
                  </h3>
                  <p className="text-xs text-[#1E211D]/70 mt-2 font-light">
                    Select your anticipated guest count to calculate course sizing and brigade staffing.
                  </p>
                </div>

                {/* Presets */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4">
                  {GUEST_PRESETS.map((preset) => {
                    const isSelected =
                      guestCount === preset && customGuests === "";
                    return (
                      <button
                        key={preset.toString()}
                        onClick={() => {
                          setGuestCount(preset);
                          setCustomGuests("");
                        }}
                        className={`py-5 px-4 text-center border transition-all duration-300 ${
                          isSelected
                            ? "border-[#B58A45] bg-[#263426] text-white shadow-md"
                            : "border-[#E8DFD0] bg-white text-[#263426] hover:border-[#B58A45]"
                        }`}
                      >
                        <Users
                          className={`w-5 h-5 mx-auto mb-2 ${
                            isSelected ? "text-[#B58A45]" : "text-[#1E211D]/50"
                          }`}
                        />
                        <span className="font-serif text-2xl font-light block">
                          {preset}
                        </span>
                        <span className="text-[9px] uppercase tracking-widest opacity-80">
                          Guests
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Number Input */}
                <div className="bg-white p-6 border border-[#E8DFD0] shadow-sm">
                  <label htmlFor={customGuestsId} className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#263426] mb-2">
                    Or Enter Exact Custom Guest Count
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      id={customGuestsId}
                      type="number"
                      min="10"
                      max="5000"
                      placeholder="e.g. 320"
                      value={customGuests}
                      onChange={(e) => {
                        setCustomGuests(e.target.value);
                        if (e.target.value) {
                          setGuestCount(e.target.value);
                        }
                      }}
                      className="flex-1 px-4 py-3 border border-[#E8DFD0] bg-[#F7F3EA]/30 text-lg font-serif text-[#263426] focus:outline-none focus:border-[#B58A45]"
                    />
                    <span className="text-xs uppercase tracking-wider text-[#1E211D]/60 whitespace-nowrap">
                      Attendees
                    </span>
                  </div>
                </div>

                {/* Active Selection Feedback */}
                <div className="p-4 bg-[#263426]/5 border-l-2 border-[#B58A45] text-xs text-[#263426]">
                  Current Projection:{" "}
                  <strong className="text-[#A96348] font-bold">
                    {customGuests ? `${customGuests} Guests (Custom)` : `${guestCount} Guests`}
                  </strong>{" "}
                  for your {currentOccasionData.title} celebration.
                </div>
              </motion.div>
            )}

            {/* ================= STEP 3: CUISINES ================= */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto space-y-6"
              >
                <div className="text-center max-w-xl mx-auto">
                  <span className="text-[10px] font-mono tracking-widest text-[#B58A45] uppercase">
                    Step 03 / 06
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#263426] font-light mt-1">
                    CHOOSE YOUR CUISINES
                  </h3>
                  <p className="text-xs text-[#1E211D]/70 mt-2 font-light">
                    Multi-select as many regional and global traditions as you desire. Our multi-kitchen brigade handles seamless fusion.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {CUISINES_LIST.map((c) => {
                    const isSelected = selectedCuisines.includes(c.id);
                    return (
                      <div
                        key={c.id}
                        onClick={() => toggleCuisine(c.id)}
                        className={`p-5 cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                          isSelected
                            ? "border-[#B58A45] bg-[#263426] text-white shadow-md"
                            : "border-[#E8DFD0] bg-white text-[#263426] hover:border-[#B58A45]"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span
                              className={`text-[10px] uppercase tracking-widest font-semibold ${
                                isSelected ? "text-[#B58A45]" : "text-[#1E211D]/50"
                              }`}
                            >
                              Cuisine
                            </span>
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                                isSelected
                                  ? "bg-[#B58A45] border-[#B58A45] text-white"
                                  : "border-gray-300 bg-white"
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                          <h4 className="font-serif text-xl font-normal mb-1">
                            {c.name}
                          </h4>
                          <p
                            className={`text-[11px] leading-relaxed font-light ${
                              isSelected ? "text-[#E8DFD0]/85" : "text-[#1E211D]/70"
                            }`}
                          >
                            {c.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center pt-2">
                  <span className="text-xs text-[#B58A45] font-semibold">
                    {selectedCuisines.length} Cuisines Selected
                  </span>
                </div>
              </motion.div>
            )}

            {/* ================= STEP 4: BUILD YOUR MENU ================= */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl mx-auto space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E8DFD0] pb-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#B58A45] uppercase">
                      Step 04 / 06
                    </span>
                    <h3 className="font-serif text-3xl text-[#263426] font-light mt-1">
                      BUILD YOUR MENU
                    </h3>
                    <p className="text-xs text-[#1E211D]/70 font-light">
                      Curate dishes across all key courses. Click items to toggle selection.
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-0 flex items-center gap-2">
                    <span className="text-xs font-semibold px-3 py-1 bg-[#263426] text-white">
                      {selectedDishes.length} Items Selected
                    </span>
                  </div>
                </div>

                {/* Course Tabs */}
                <div className="flex items-center overflow-x-auto gap-2 pb-2 border-b border-[#E8DFD0]">
                  {(
                    [
                      "STARTERS",
                      "MAIN COURSE",
                      "LIVE COUNTERS",
                      "DESSERTS",
                      "BEVERAGES",
                    ] as const
                  ).map((category) => {
                    const isTabActive = activeMenuCategory === category;
                    const itemsInCourse = CUSTOMIZER_DISHES.filter(
                      (d) => d.category === category
                    );
                    const selectedInCourse = itemsInCourse.filter((d) =>
                      selectedDishes.includes(d.id)
                    ).length;

                    return (
                      <button
                        key={category}
                        onClick={() => setActiveMenuCategory(category)}
                        className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all border ${
                          isTabActive
                            ? "bg-[#263426] text-white border-[#263426]"
                            : "bg-white text-[#263426] border-[#E8DFD0] hover:border-[#B58A45]"
                        }`}
                      >
                        <span>{category}</span>
                        {selectedInCourse > 0 && (
                          <span className="ml-2 px-1.5 py-0.5 rounded-full text-[9px] bg-[#B58A45] text-white font-mono">
                            {selectedInCourse}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Dishes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredDishes.map((dish: CustomizerDish) => {
                    const isSelected = selectedDishes.includes(dish.id);
                    return (
                      <div
                        key={dish.id}
                        onClick={() => toggleDish(dish.id)}
                        className={`group p-4 bg-white border cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                          isSelected
                            ? "border-[#B58A45] bg-[#F7F3EA]/70 ring-1 ring-[#B58A45]"
                            : "border-[#E8DFD0] hover:border-[#B58A45]"
                        }`}
                      >
                        <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden bg-gray-100">
                          <Image
                            src={dish.image}
                            alt={dish.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <span
                            className={`absolute top-1 left-1 w-2.5 h-2.5 rounded-full border border-white ${
                              dish.isVeg ? "bg-emerald-600" : "bg-red-600"
                            }`}
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] uppercase tracking-wider text-[#B58A45] font-semibold">
                              {dish.cuisine}
                            </span>
                            <span
                              className={`text-[10px] font-semibold flex items-center gap-1 ${
                                isSelected ? "text-[#B58A45]" : "text-[#1E211D]/40"
                              }`}
                            >
                              {isSelected ? (
                                <>
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                  <span>Selected</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5" />
                                  <span>Add</span>
                                </>
                              )}
                            </span>
                          </div>
                          <h4 className="font-serif text-base text-[#263426] font-medium truncate mt-0.5">
                            {dish.name}
                          </h4>
                          <p className="text-[11px] text-[#1E211D]/70 font-light line-clamp-2 mt-1">
                            {dish.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ================= STEP 5: PREFERENCES & NOTES ================= */}
            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl mx-auto space-y-8"
              >
                <div className="text-center">
                  <span className="text-[10px] font-mono tracking-widest text-[#B58A45] uppercase">
                    Step 05 / 06
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#263426] font-light mt-1">
                    MAKE IT YOURS.
                  </h3>
                  <p className="text-xs text-[#1E211D]/70 mt-2 font-light">
                    Every guest deserves flawless consideration. Highlight any dietary paradigms.
                  </p>
                </div>

                {/* Dietary Multi-Select Badges */}
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#263426] block">
                    Dietary Accommodations
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {DIETARY_PREFERENCES.map((diet) => {
                      const isSelected = selectedDietary.includes(diet);
                      return (
                        <button
                          key={diet}
                          type="button"
                          onClick={() => toggleDietary(diet)}
                          className={`px-4 py-2.5 text-xs uppercase tracking-wider font-semibold border transition-all ${
                            isSelected
                              ? "bg-[#263426] text-white border-[#263426] shadow-sm"
                              : "bg-white text-[#263426] border-[#E8DFD0] hover:border-[#B58A45]"
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 inline mr-1.5" />}
                          {diet}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Special Requests */}
                <div className="bg-white p-6 border border-[#E8DFD0] shadow-sm space-y-2">
                  <label htmlFor={specialRequestsId} className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#263426]">
                    Special Requests & Vision
                  </label>
                  <p className="text-[11px] text-[#1E211D]/60 font-light">
                    Share service style preferences (plated, buffet, roaming cocktail), theme notes, or specific dishes not listed.
                  </p>
                  <textarea
                    id={specialRequestsId}
                    rows={4}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Tell us about dietary preferences or special requests… (e.g. Separate Jain kitchen setup, live champagne tower, late-night sliders)"
                    className="w-full mt-2 p-3.5 text-xs text-[#263426] bg-[#F7F3EA]/30 border border-[#E8DFD0] focus:outline-none focus:border-[#B58A45] leading-relaxed"
                  />
                </div>
              </motion.div>
            )}

            {/* ================= STEP 6: SUMMARY & DEMO ENQUIRY ================= */}
            {currentStep === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto space-y-8"
              >
                {!showEnquiryForm ? (
                  <>
                    <div className="text-center max-w-xl mx-auto">
                      <span className="text-[10px] font-mono tracking-widest text-[#B58A45] uppercase">
                        Review & Request
                      </span>
                      <h3 className="font-serif text-3xl sm:text-5xl text-[#263426] font-light mt-1">
                        YOUR SAVOUR MENU
                      </h3>
                      <p className="text-xs text-[#1E211D]/70 mt-2 font-light">
                        Here is the preliminary blueprint of your customized gastronomic experience.
                      </p>
                    </div>

                    {/* Summary Overview Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-5 bg-white border border-[#E8DFD0]">
                        <span className="text-[10px] uppercase tracking-widest text-[#B58A45] font-semibold block mb-1">
                          Occasion & Scale
                        </span>
                        <h4 className="font-serif text-2xl text-[#263426]">
                          {currentOccasionData.title}
                        </h4>
                        <p className="text-xs text-[#1E211D]/75 font-light mt-1">
                          {customGuests ? `${customGuests} Guests` : `${guestCount} Guests`}
                        </p>
                      </div>

                      <div className="p-5 bg-white border border-[#E8DFD0]">
                        <span className="text-[10px] uppercase tracking-widest text-[#B58A45] font-semibold block mb-1">
                          Cuisines Selected
                        </span>
                        <h4 className="font-serif text-xl text-[#263426]">
                          {selectedCuisines.join(", ") || "General Curation"}
                        </h4>
                        <p className="text-xs text-[#1E211D]/75 font-light mt-1">
                          {selectedCuisines.length} regional styles
                        </p>
                      </div>

                      <div className="p-5 bg-white border border-[#E8DFD0]">
                        <span className="text-[10px] uppercase tracking-widest text-[#B58A45] font-semibold block mb-1">
                          Dietary Focus
                        </span>
                        <h4 className="font-serif text-lg text-[#263426]">
                          {selectedDietary.join(", ") || "Standard"}
                        </h4>
                        <p className="text-xs text-[#1E211D]/75 font-light mt-1 truncate">
                          {specialRequests ? specialRequests : "No extra special requests"}
                        </p>
                      </div>
                    </div>

                    {/* Selected Dishes Roster */}
                    <div className="bg-white p-6 border border-[#E8DFD0]">
                      <div className="flex items-center justify-between border-b border-[#E8DFD0] pb-3 mb-4">
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#263426]">
                          Curated Dishes ({selectedDishes.length})
                        </span>
                        <button
                          onClick={() => setCurrentStep(4)}
                          className="text-xs text-[#B58A45] hover:underline uppercase tracking-wider font-semibold"
                        >
                          Modify Dishes
                        </button>
                      </div>

                      {selectedDishes.length === 0 ? (
                        <p className="text-xs text-[#1E211D]/60 italic py-4">
                          No dishes chosen yet. Click &apos;Modify Dishes&apos; to pick delicious courses.
                        </p>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {selectedDishes.map((dishId) => {
                            const item = CUSTOMIZER_DISHES.find(
                              (d) => d.id === dishId
                            );
                            if (!item) return null;
                            return (
                              <div
                                key={dishId}
                                className="p-3 bg-[#F7F3EA]/50 border border-[#E8DFD0] flex items-center gap-3"
                              >
                                <div className="relative w-12 h-12 flex-shrink-0 bg-gray-200">
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="min-w-0">
                                  <span className="text-[8px] uppercase tracking-widest text-[#B58A45] block">
                                    {item.category}
                                  </span>
                                  <h5 className="font-serif text-sm text-[#263426] truncate">
                                    {item.name}
                                  </h5>
                                  <span className="text-[9px] text-[#1E211D]/60">
                                    {item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Bottom CTA to trigger Enquiry Form */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8DFD0]">
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="text-xs uppercase tracking-widest font-semibold text-[#1E211D]/70 hover:text-[#263426] flex items-center gap-2"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Edit Entire Menu</span>
                      </button>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                          onClick={() => setShowEnquiryForm(true)}
                          className="w-full sm:w-auto px-8 py-4 bg-[#B58A45] hover:bg-[#a07738] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        >
                          <UtensilsCrossed className="w-4 h-4" />
                          <span>Request This Menu</span>
                        </button>
                      </div>
                    </div>
                  </>
                ) : isEnquirySubmitted ? (
                  /* Confirmation State */
                  <div className="max-w-lg mx-auto py-12 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-[#344A35] text-white flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
                        Custom Portfolio Generated
                      </span>
                      <h3 className="font-serif text-4xl text-[#263426] mt-2">
                        Your Menu is Ready.
                      </h3>
                      <p className="text-sm text-[#1E211D]/80 font-light mt-3 leading-relaxed">
                        We have prepared your personalized SAVOUR catering itinerary for{" "}
                        <strong>{enquiryForm.name || "your event"}</strong> ({customGuests || guestCount} guests).
                      </p>
                      <p className="text-xs text-[#1E211D]/60 mt-1">
                        Our Executive Culinary Director will review the timing and ingredient sourcing and reach out at <strong>{enquiryForm.email || "your email"}</strong>.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-[#E8DFD0] text-xs text-[#A96348] font-mono">
                      DEMO NOTE: Frontend simulation completed. No live server request dispatched.
                    </div>

                    <div className="flex items-center justify-center gap-4 pt-4">
                      <button
                        onClick={resetBuilder}
                        className="px-6 py-3 border border-[#263426] text-[#263426] text-xs uppercase tracking-widest font-semibold hover:bg-[#263426] hover:text-white transition-colors"
                      >
                        Design Another Menu
                      </button>
                      <button
                        onClick={onClose}
                        className="px-6 py-3 bg-[#B58A45] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#a07738] transition-colors"
                      >
                        Return to Website
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Enquiry Details Form */
                  <div className="max-w-xl mx-auto py-4 space-y-6">
                    <div className="text-center">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
                        Almost Finished
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl text-[#263426] font-light mt-1">
                        Tell us where to send the details.
                      </h3>
                      <p className="text-xs text-[#1E211D]/70 font-light mt-1">
                        We will compile your {selectedDishes.length}-dish custom menu into an editorial PDF folio with pricing allocations.
                      </p>
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsEnquirySubmitted(true);
                      }}
                      className="bg-white p-6 sm:p-8 border border-[#E8DFD0] shadow-sm space-y-4"
                    >
                      <div>
                        <label htmlFor={fullNameId} className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#263426] mb-1">
                          Full Name *
                        </label>
                        <input
                          id={fullNameId}
                          type="text"
                          required
                          placeholder="e.g. Riya & Karan Kapoor"
                          value={enquiryForm.name}
                          onChange={(e) =>
                            setEnquiryForm({ ...enquiryForm, name: e.target.value })
                          }
                          className="w-full px-4 py-3 text-xs bg-[#F7F3EA]/30 border border-[#E8DFD0] text-[#263426] focus:outline-none focus:border-[#B58A45]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor={phoneId} className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#263426] mb-1">
                            Phone / WhatsApp *
                          </label>
                          <input
                            id={phoneId}
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={enquiryForm.phone}
                            onChange={(e) =>
                              setEnquiryForm({
                                ...enquiryForm,
                                phone: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 text-xs bg-[#F7F3EA]/30 border border-[#E8DFD0] text-[#263426] focus:outline-none focus:border-[#B58A45]"
                          />
                        </div>

                        <div>
                          <label htmlFor={emailId} className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#263426] mb-1">
                            Email Address *
                          </label>
                          <input
                            id={emailId}
                            type="email"
                            required
                            placeholder="celebration@example.com"
                            value={enquiryForm.email}
                            onChange={(e) =>
                              setEnquiryForm({
                                ...enquiryForm,
                                email: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 text-xs bg-[#F7F3EA]/30 border border-[#E8DFD0] text-[#263426] focus:outline-none focus:border-[#B58A45]"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor={eventDateId} className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#263426] mb-1">
                          Anticipated Date (Optional)
                        </label>
                        <input
                          id={eventDateId}
                          type="date"
                          value={enquiryForm.date}
                          onChange={(e) =>
                            setEnquiryForm({ ...enquiryForm, date: e.target.value })
                          }
                          className="w-full px-4 py-3 text-xs bg-[#F7F3EA]/30 border border-[#E8DFD0] text-[#263426] focus:outline-none focus:border-[#B58A45]"
                        />
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setShowEnquiryForm(false)}
                          className="text-xs uppercase tracking-widest text-[#1E211D]/60 hover:text-[#263426]"
                        >
                          Back to Summary
                        </button>

                        <button
                          type="submit"
                          className="px-8 py-3.5 bg-[#263426] hover:bg-[#344A35] text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center gap-2 transition-all shadow-md"
                        >
                          <span>Send Enquiry</span>
                          <Send className="w-3.5 h-3.5 text-[#B58A45]" />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Modal Sticky Bottom Navigation (Steps 1 to 5) */}
        {currentStep < 6 && (
          <footer className="px-6 py-4 sm:px-8 border-t border-[#E8DFD0] bg-[#FFFFFF] flex items-center justify-between z-20">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2 px-4 py-2.5 transition-colors ${
                currentStep === 1
                  ? "opacity-30 cursor-not-allowed text-[#1E211D]/40"
                  : "text-[#263426] hover:text-[#B58A45]"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-[#B58A45]">
              <span>STEP</span>
              <span className="font-bold">0{currentStep}</span>
              <span className="opacity-40">/</span>
              <span>0{totalSteps}</span>
            </div>

            <button
              onClick={handleNext}
              className="text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2 px-6 py-2.5 bg-[#263426] hover:bg-[#344A35] text-white transition-all shadow-sm hover:shadow-md"
            >
              <span>{currentStep === 5 ? "View Summary" : "Next Step"}</span>
              <ArrowRight className="w-4 h-4 text-[#B58A45]" />
            </button>
          </footer>
        )}
      </div>
    </div>
  );
}
