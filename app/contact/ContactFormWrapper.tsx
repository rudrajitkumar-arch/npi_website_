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
    <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 p-8 sm:p-12 space-y-6 shadow-sm">
      <h3
        className="text-lg font-black uppercase text-primary-dark border-b border-zinc-100 pb-3"
        style={{ fontFamily: "var(--font-serif-display)" }}
      >
        Request for Quote (RFQ) Form
      </h3>

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
            className="w-full border border-zinc-300 px-4 py-2.5 text-xs focus:outline-none focus:border-accent-gold bg-bg-warm/30 focus:bg-white transition-all"
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
            className="w-full border border-zinc-300 px-4 py-2.5 text-xs focus:outline-none focus:border-accent-gold bg-bg-warm/30 focus:bg-white transition-all"
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
            className="w-full border border-zinc-300 px-4 py-2.5 text-xs focus:outline-none focus:border-accent-gold bg-bg-warm/30 focus:bg-white transition-all"
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
            className="w-full border border-zinc-300 px-4 py-2.5 text-xs focus:outline-none focus:border-accent-gold bg-bg-warm/30 focus:bg-white transition-all"
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
            className="w-full border border-zinc-300 px-4 py-2.5 text-xs focus:outline-none focus:border-accent-gold bg-bg-warm/30 focus:bg-white transition-all"
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
            className="w-full border border-zinc-300 px-4 py-2.5 text-xs focus:outline-none focus:border-accent-gold bg-bg-warm/30 focus:bg-white transition-all"
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
            className="w-full border border-zinc-300 px-4 py-2.5 text-xs focus:outline-none focus:border-accent-gold bg-bg-warm/30 focus:bg-white transition-all"
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
            Quantity (E.g. Pieces / Kgs) *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. 5,000 Pcs"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="w-full border border-zinc-300 px-4 py-2.5 text-xs focus:outline-none focus:border-accent-gold bg-bg-warm/30 focus:bg-white transition-all"
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
          className="w-full border border-zinc-300 px-4 py-2.5 text-xs focus:outline-none focus:border-accent-gold bg-bg-warm/30 focus:bg-white transition-all"
        />
      </div>

      {/* Upload Drawing Zone */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
          Upload Technical Drawing (PDF, DWG, STEP, JPG)
        </label>
        <div className="relative border-2 border-dashed border-zinc-300 hover:border-accent-gold bg-bg-warm/25 transition-all p-6 text-center cursor-pointer group">
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFormData({ ...formData, drawing: e.target.files[0] });
              }
            }}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <svg className="mx-auto h-8 w-8 text-zinc-400 group-hover:text-accent-gold transition-colors mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <span className="text-xs font-bold text-zinc-600 uppercase tracking-wider block mb-1">
            {formData.drawing ? formData.drawing.name : "Select drawing files"}
          </span>
          <span className="text-[10px] text-zinc-400 block">
            Drag files here or click to browse. Max size 20MB.
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
          placeholder="Mention critical dimensions, custom alloy code parameters, and target timelines..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border border-zinc-300 px-4 py-2.5 text-xs focus:outline-none focus:border-accent-gold bg-bg-warm/30 focus:bg-white transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary-dark hover:bg-accent-gold text-white text-xs font-black uppercase tracking-widest py-4 transition-colors hover:shadow-lg"
      >
        Send Enquiry
      </button>
    </form>
  );
}
