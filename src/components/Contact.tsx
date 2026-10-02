"use client";

import { useState, useId } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Wedding",
    guests: "150",
    date: "",
    notes: "",
  });

  // Generate unique IDs for form inputs
  const clientNameId = useId();
  const contactEmailId = useId();
  const contactPhoneId = useId();
  const eventTypeId = useId();
  const guestEstimateId = useId();
  const targetedDateId = useId();
  const culinaryVisionId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F7F3EA] border-t border-[#E8DFD0] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact details & Brand Identity */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#B58A45]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
                  Get In Touch
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#263426] font-light leading-none tracking-tight">
                SAVOUR <br />
                <span className="italic font-normal text-[#A96348]">CATERING</span>
              </h2>
              <p className="mt-4 text-xs font-mono tracking-widest text-[#B58A45] uppercase">
                “Exceptional Food for Unforgettable Moments.”
              </p>
            </div>

            <p className="text-sm text-[#1E211D]/80 font-light leading-relaxed">
              We welcome private tasting inquiries for weddings, diplomatic galas, luxury corporate gatherings, and destination milestone celebrations across Goa and worldwide.
            </p>

            <div className="olive-divider" />

            {/* Demo Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#263426] text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#B58A45]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B58A45] font-semibold block">
                    Culinary Studio & Kitchens
                  </span>
                  <p className="text-sm font-medium text-[#263426]">
                    Goa, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#263426] text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#B58A45]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B58A45] font-semibold block">
                    Direct Concierge (Demo)
                  </span>
                  <p className="text-sm font-medium text-[#263426]">
                    +91 00000 00000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#263426] text-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#B58A45]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B58A45] font-semibold block">
                    Electronic Inquiries
                  </span>
                  <p className="text-sm font-medium text-[#263426]">
                    hello@savourcatering.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-white border border-[#E8DFD0] hover:border-[#B58A45] text-xs uppercase tracking-wider text-[#263426] flex items-center gap-2 transition-colors shadow-sm"
              >
                <InstagramIcon className="w-4 h-4 text-[#A96348]" />
                <span>Instagram</span>
              </a>

              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-white border border-[#E8DFD0] hover:border-[#B58A45] text-xs uppercase tracking-wider text-[#263426] flex items-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="p-4 bg-white/60 border border-[#E8DFD0] text-[11px] text-[#1E211D]/60 leading-relaxed font-light">
              <strong className="font-semibold text-[#A96348]">Demo Notice:</strong> SAVOUR Catering is a portfolio demonstration website. All contact details and accolades are presented for aesthetic showcase purposes.
            </div>
          </div>

          {/* Right Column: Event Planning Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 border border-[#E8DFD0] shadow-lg">
              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B58A45] font-semibold">
                  Tasting & Quotation
                </span>
                <h3 className="font-serif text-3xl text-[#263426] font-light mt-1">
                  Plan Your Event
                </h3>
                <p className="text-xs text-[#1E211D]/70 font-light mt-1">
                  Share your celebration parameters and our catering director will arrange a personalized culinary tasting folio.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#344A35] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-3xl text-[#263426]">
                    Enquiry Recorded
                  </h4>
                  <p className="text-xs text-[#1E211D]/75 font-light max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || "Esteemed Guest"}. We have received your celebration details for {formData.eventType} ({formData.guests} guests).
                  </p>
                  <p className="text-[11px] text-[#A96348] font-mono">
                    (Demo mode: inquiry successfully simulated)
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 border border-[#263426] text-xs uppercase tracking-widest text-[#263426] hover:bg-[#263426] hover:text-white transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={clientNameId} className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#263426] mb-1">
                        Your Name *
                      </label>
                      <input
                        id={clientNameId}
                        type="text"
                        required
                        placeholder="e.g. Meera Singhania"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 text-xs bg-[#F7F3EA]/30 border border-[#E8DFD0] text-[#263426] focus:outline-none focus:border-[#B58A45]"
                      />
                    </div>

                    <div>
                      <label htmlFor={contactEmailId} className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#263426] mb-1">
                        Email Address *
                      </label>
                      <input
                        id={contactEmailId}
                        type="email"
                        required
                        placeholder="meera@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 text-xs bg-[#F7F3EA]/30 border border-[#E8DFD0] text-[#263426] focus:outline-none focus:border-[#B58A45]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor={contactPhoneId} className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#263426] mb-1">
                        Phone *
                      </label>
                      <input
                        id={contactPhoneId}
                        type="tel"
                        required
                        placeholder="+91 98765 00000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 text-xs bg-[#F7F3EA]/30 border border-[#E8DFD0] text-[#263426] focus:outline-none focus:border-[#B58A45]"
                      />
                    </div>

                    <div>
                      <label htmlFor={eventTypeId} className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#263426] mb-1">
                        Occasion Type
                      </label>
                      <select
                        id={eventTypeId}
                        value={formData.eventType}
                        onChange={(e) =>
                          setFormData({ ...formData, eventType: e.target.value })
                        }
                        className="w-full px-4 py-3 text-xs bg-[#F7F3EA]/30 border border-[#E8DFD0] text-[#263426] focus:outline-none focus:border-[#B58A45]"
                      >
                        <option value="Wedding">Royal Wedding</option>
                        <option value="Corporate">Corporate Gala</option>
                        <option value="Private Dinner">Private Dinner</option>
                        <option value="Reception">Cocktail Reception</option>
                        <option value="Other">Bespoke Gathering</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor={guestEstimateId} className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#263426] mb-1">
                        Guest Count
                      </label>
                      <input
                        id={guestEstimateId}
                        type="number"
                        placeholder="150"
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({ ...formData, guests: e.target.value })
                        }
                        className="w-full px-4 py-3 text-xs bg-[#F7F3EA]/30 border border-[#E8DFD0] text-[#263426] focus:outline-none focus:border-[#B58A45]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={targetedDateId} className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#263426] mb-1">
                      Event Date
                    </label>
                    <input
                      id={targetedDateId}
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full px-4 py-3 text-xs bg-[#F7F3EA]/30 border border-[#E8DFD0] text-[#263426] focus:outline-none focus:border-[#B58A45]"
                    />
                  </div>

                  <div>
                    <label htmlFor={culinaryVisionId} className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#263426] mb-1">
                      Culinary Vision & Notes
                    </label>
                    <textarea
                      id={culinaryVisionId}
                      rows={3}
                      placeholder="Tell us about your venue, preferred cuisines, or any bespoke desires..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-4 py-3 text-xs bg-[#F7F3EA]/30 border border-[#E8DFD0] text-[#263426] focus:outline-none focus:border-[#B58A45]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#263426] hover:bg-[#344A35] text-white text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Request Event Consultation</span>
                    <Send className="w-4 h-4 text-[#B58A45]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
