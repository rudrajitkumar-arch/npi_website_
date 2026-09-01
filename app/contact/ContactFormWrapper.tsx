"use client";

import { useState } from "react";

export default function ContactFormWrapper() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    compType: "",
    material: "Brass IS 319 (Free Cutting)",
    quantity: "",
    finish: "",
    message: "",
    drawing: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RFQ Submission Data:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-zinc-200 p-8 sm:p-12 text-center space-y-6 shadow-sm">
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center border border-green-200 mx-auto">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif font-black uppercase text-primary-dark tracking-wide">
          Enquiry Sent Successfully
        </h3>
        <p className="text-sm text-zinc-500 max-w-md mx-auto leading-relaxed">
          Thank you for contacting New Perfect Incorporation. Our sales and engineering team
          will review your drawings and requirements and follow up within 24 business hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              company: "",
              email: "",
              phone: "",
              industry: "",
              compType: "",
              material: "Brass IS 319 (Free Cutting)",
              quantity: "",
              finish: "",
              message: "",
              drawing: null,
            });
          }}
          className="px-6 py-3 bg-primary-dark text-white text-xs font-black uppercase tracking-widest hover:bg-accent-gold transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-zinc-200/90 rounded-2xl p-8 sm:p-10 space-y-6 shadow-xl relative overflow-hidden hover:border-accent-gold/40 transition-all duration-300 h-full flex flex-col justify-between">
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gold" />

      <div className="border-b border-zinc-100 pb-4 mb-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-accent-gold block mb-1">
          Technical Requirement Intake
        </span>
        <h3
          className="text-xl sm:text-2xl font-black uppercase text-primary-dark tracking-tight"
          style={{ fontFamily: "var(--font-serif-display)" }}
        >
          Request for Quote (RFQ) Form
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
            Contact Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Meet Patel"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold bg-zinc-50/50 focus:bg-white transition-all text-primary-dark shadow-sm"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Panasonic India"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold bg-zinc-50/50 focus:bg-white transition-all text-primary-dark shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="e.g. purchase@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold bg-zinc-50/50 focus:bg-white transition-all text-primary-dark shadow-sm"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. +91 78179 42727"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold bg-zinc-50/50 focus:bg-white transition-all text-primary-dark shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
            Industry Sector
          </label>
          <input
            type="text"
            placeholder="e.g. Electrical / Automotive"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold bg-zinc-50/50 focus:bg-white transition-all text-primary-dark shadow-sm"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
            Component Type / Name
          </label>
          <input
            type="text"
            placeholder="e.g. Brass knurled insert"
            value={formData.compType}
            onChange={(e) => setFormData({ ...formData, compType: e.target.value })}
            className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold bg-zinc-50/50 focus:bg-white transition-all text-primary-dark shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
            Material Grade Required
          </label>
          <select
            value={formData.material}
            onChange={(e) => setFormData({ ...formData, material: e.target.value })}
            className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold bg-zinc-50/50 focus:bg-white transition-all text-primary-dark shadow-sm cursor-pointer"
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
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
            Quantity (e.g. pieces / kg) *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. 5,000 Pcs"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold bg-zinc-50/50 focus:bg-white transition-all text-primary-dark shadow-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
          Surface Finish / Plating Requirement
        </label>
        <input
          type="text"
          placeholder="e.g. Nickel plating / Buffing / Anodizing"
          value={formData.finish}
          onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
          className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold bg-zinc-50/50 focus:bg-white transition-all text-primary-dark shadow-sm"
        />
      </div>

      {/* Upload Drawing Zone */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
          Upload Technical Drawing (PDF, DWG, STEP, JPG)
        </label>
        <div className="relative border-2 border-dashed border-accent-gold/40 hover:border-accent-gold bg-amber-50/20 hover:bg-amber-50/50 rounded-xl transition-all p-6 text-center cursor-pointer group shadow-inner">
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFormData({ ...formData, drawing: e.target.files[0] });
              }
            }}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="w-10 h-10 rounded-full bg-accent-gold/15 text-accent-gold flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <span className="text-xs font-black text-primary-dark uppercase tracking-wider block mb-1">
            {formData.drawing ? formData.drawing.name : "Select Drawing Files"}
          </span>
          <span className="text-[11px] text-zinc-400 block">
            Drag files here or click to browse. Maximum file size: 20 MB.
          </span>
        </div>
      </div>

      {/* Message requirement details */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
          Message / Requirement Details
        </label>
        <textarea
          rows={4}
          placeholder="Describe critical dimensions, material requirements, and target timelines..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold bg-zinc-50/50 focus:bg-white transition-all text-primary-dark shadow-sm resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary-dark hover:bg-accent-gold text-white text-xs sm:text-sm font-black uppercase tracking-widest py-4 rounded-xl shadow-lg hover:shadow-accent-gold/20 transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        <span>Send Enquiry</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>

      {/* Confidentiality & Engineering Review Reassurance */}
      <div className="pt-2 border-t border-zinc-100/80 space-y-1.5 text-[11px] text-zinc-500">
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
            <strong>Engineering Review:</strong> Your requirement is reviewed directly by our technical team, with quotation response within 24 business hours.
          </span>
        </div>
      </div>
    </form>
  );
}
