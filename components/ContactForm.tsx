"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    material: "Brass IS 319 (Free Cutting)",
    quantity: "",
    message: "",
    drawing: null as File | null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-white border border-zinc-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
      {/* Contact Info Sidebar */}
      <div className="lg:col-span-4 bg-primary-dark text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
        {/* Subtle geometric line overlay */}
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-accent-gold/20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-accent-gold/20 pointer-events-none" />

        <div className="space-y-8 relative z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-gold block mb-2 font-mono">
              GET IN TOUCH
            </span>
            <h3 className="text-2xl font-display font-bold uppercase tracking-wide">
              OUR JAMNAGAR HEADQUARTERS
            </h3>
            <div className="w-12 h-0.5 bg-accent-gold mt-4" />
          </div>

          <div className="space-y-6 text-sm text-zinc-300">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-accent-gold mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>
                <strong>New Perfect Incorporation</strong>
                <br />
                Plot No. 4145, GIDC Phase 3,
                <br />
                Dared, Jamnagar, Gujarat,
                <br />
                India – 361004
              </span>
            </div>

            <div className="flex items-center">
              <svg className="h-5 w-5 text-accent-gold mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+917817942727" className="hover:text-white transition-colors">
                +91 78179 42727
              </a>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-accent-gold mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="space-y-1">
                <a href="mailto:info@newperfectinc.com" className="block hover:text-white transition-colors">
                  info@newperfectinc.com
                </a>
                <a href="mailto:newperfectinc@gmail.com" className="block hover:text-white transition-colors">
                  newperfectinc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-zinc-400 relative z-10">
          <p className="font-bold text-accent-gold mb-1 uppercase tracking-wide">Export Inquiry Hours</p>
          <p>Monday - Saturday: 09:00 AM - 07:00 PM IST (UTC +5:30)</p>
        </div>
      </div>

      {/* Main Intake Form */}
      <div className="lg:col-span-8 p-8 sm:p-12">
        {isSubmitted ? (
          <div className="h-full flex flex-col justify-center items-center text-center space-y-4 py-12">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center border border-green-200">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary-dark uppercase tracking-wide">
              Request Submitted Successfully
            </h3>
            <p className="text-sm text-zinc-500 max-w-md">
              Thank you for contacting New Perfect Incorporation. Our engineering department will review your specifications and get in touch within 24 business hours
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  company: "",
                  email: "",
                  phone: "",
                  material: "Brass IS 319 (Free Cutting)",
                  quantity: "",
                  message: "",
                  drawing: null,
                });
              }}
              className="mt-4 px-6 py-2.5 bg-primary-dark text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-gold transition-colors duration-300"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h4 className="text-lg font-display font-bold text-primary-dark uppercase tracking-wide border-b border-zinc-100 pb-3 mb-6">
              RFQ (Request for Quote) & Technical Specifications
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full border border-zinc-300 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Acme Components LLC"
                  className="w-full border border-zinc-300 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. purchase@acme.com"
                  className="w-full border border-zinc-300 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +1 555-0199"
                  className="w-full border border-zinc-300 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Material Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                  Target Material Spec
                </label>
                <select
                  value={formData.material}
                  onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                  className="w-full border border-zinc-300 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-gold bg-white transition-colors"
                >
                  <option>Brass IS 319 (Free Cutting)</option>
                  <option>Brass CZ 121 (Standard European)</option>
                  <option>Lead-Free Brass Alloys</option>
                  <option>Forging Grade Brass CZ 122</option>
                  <option>Electrolytic Copper (99.9% pure)</option>
                  <option>Phosphor / Silicon Bronze</option>
                  <option>Other Custom Grade (Specify below)</option>
                </select>
              </div>

              {/* Target Volume */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                  Target Quantity (E.g. Pieces / Kg) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="e.g. 10,000 Pcs / Month"
                  className="w-full border border-zinc-300 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                />
              </div>
            </div>

            {/* Drawing upload file layout */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                Technical Drawings (PDF, DWG, STEP, JPG)
              </label>
              <div className="border-2 border-dashed border-zinc-300 hover:border-accent-gold p-6 text-center cursor-pointer transition-colors duration-200 relative">
                <input
                  type="file"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFormData({ ...formData, drawing: e.target.files[0] });
                    }
                  }}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <svg className="mx-auto h-8 w-8 text-zinc-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-xs text-zinc-500 font-medium">
                  {formData.drawing ? (
                    <span className="text-primary-dark font-bold">Selected: {formData.drawing.name}</span>
                  ) : (
                    <span>Drag and drop drawings here, or click to browse</span>
                  )}
                </p>
              </div>
            </div>

            {/* Requirements Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                Detailed Component Requirements & Specifications
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe critical dimensions, tolerances, surface finishing (e.g. nickel, tin, chrome plating), and scheduling requests..."
                className="w-full border border-zinc-300 px-4 py-2.5 text-sm focus:outline-none focus:border-accent-gold transition-colors"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-primary-dark hover:bg-accent-gold text-white text-xs font-bold uppercase tracking-widest py-4 transition-colors duration-300 hover:shadow-lg font-mono"
              >
                Submit Request for Quote
              </button>
            </div>

            {/* Confidentiality & Engineering Review Reassurance */}
            <div className="pt-3 border-t border-zinc-100 space-y-1.5 text-[11px] text-zinc-500">
              <div className="flex items-start sm:items-center gap-2">
                <svg className="w-3.5 h-3.5 text-accent-gold shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="leading-snug">
                  <strong>Confidentiality Guaranteed:</strong> All technical drawings, CAD data, and specifications are treated with strict confidentiality.
                </span>
              </div>
              <div className="flex items-start sm:items-center gap-2">
                <svg className="w-3.5 h-3.5 text-accent-gold shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="leading-snug">
                  <strong>Engineering Review:</strong> Enquiries are reviewed directly by our technical team, with responses provided within 24 business hours.
                </span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
