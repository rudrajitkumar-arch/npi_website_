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
      <div className="bg-white border border-[#D8DEDC] p-8 sm:p-12 text-center space-y-6 shadow-sm">
        <div className="w-16 h-16 bg-[#E8EFEC] text-[#3F6B5B] rounded-full flex items-center justify-center border border-[#3F6B5B]/30 mx-auto">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif font-black uppercase text-[#202A2E] tracking-wide">
          Enquiry Sent Successfully
        </h3>
        <p className="text-sm text-[#68757A] max-w-md mx-auto leading-relaxed">
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
          className="px-6 py-3 bg-[#075E62] hover:bg-[#202A2E] text-white text-xs font-black uppercase tracking-widest transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#D8DEDC] rounded-2xl p-8 sm:p-10 space-y-6 shadow-md relative overflow-hidden hover:border-[#075E62]/40 transition-all duration-300 h-full flex flex-col justify-between">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#075E62]" />

      <div className="border-b border-[#D8DEDC] pb-4 mb-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#075E62] block mb-1">
          Technical Requirement Intake
        </span>
        <h3
          className="text-xl sm:text-2xl font-black uppercase text-[#202A2E] tracking-tight"
          style={{ fontFamily: "var(--font-serif-display)" }}
        >
          Request for Quote (RFQ) Form
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-[#30383C] mb-2">
            Contact Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Meet Patel"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-[#D8DEDC] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075E62]/20 focus:border-[#075E62] bg-[#F6F5F0]/50 focus:bg-white transition-all text-[#30383C] placeholder-[#68757A] shadow-xs"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-[#30383C] mb-2">
            Company Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Schneider Electric"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full border border-[#D8DEDC] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075E62]/20 focus:border-[#075E62] bg-[#F6F5F0]/50 focus:bg-white transition-all text-[#30383C] placeholder-[#68757A] shadow-xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-[#30383C] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="meet@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-[#D8DEDC] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075E62]/20 focus:border-[#075E62] bg-[#F6F5F0]/50 focus:bg-white transition-all text-[#30383C] placeholder-[#68757A] shadow-xs"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-[#30383C] mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border border-[#D8DEDC] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075E62]/20 focus:border-[#075E62] bg-[#F6F5F0]/50 focus:bg-white transition-all text-[#30383C] placeholder-[#68757A] shadow-xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-[#30383C] mb-2">
            Industry Domain
          </label>
          <select
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="w-full border border-[#D8DEDC] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075E62]/20 focus:border-[#075E62] bg-[#F6F5F0]/50 focus:bg-white transition-all text-[#30383C] shadow-xs"
          >
            <option value="">Select Target Industry</option>
            <option value="electrical">Electrical & Electronics</option>
            <option value="automotive">Automotive</option>
            <option value="plumbing">Plumbing & Sanitary</option>
            <option value="aerospace">Aerospace</option>
            <option value="marine">Marine</option>
            <option value="hardware">Hardware & Fasteners</option>
            <option value="other">Other Industrial</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-[#30383C] mb-2">
            Component Type
          </label>
          <input
            type="text"
            placeholder="e.g. Precision CNC Turned Part"
            value={formData.compType}
            onChange={(e) => setFormData({ ...formData, compType: e.target.value })}
            className="w-full border border-[#D8DEDC] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075E62]/20 focus:border-[#075E62] bg-[#F6F5F0]/50 focus:bg-white transition-all text-[#30383C] placeholder-[#68757A] shadow-xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-[#30383C] mb-2">
            Raw Material Specification
          </label>
          <select
            value={formData.material}
            onChange={(e) => setFormData({ ...formData, material: e.target.value })}
            className="w-full border border-[#D8DEDC] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075E62]/20 focus:border-[#075E62] bg-[#F6F5F0]/50 focus:bg-white transition-all text-[#30383C] shadow-xs"
          >
            <option value="Brass IS 319 (Free Cutting)">Brass IS 319 (Free Cutting)</option>
            <option value="CuZn39Pb3 (CW614N European Standard)">CuZn39Pb3 (CW614N European Standard)</option>
            <option value="C36000 (ASTM Standard)">C36000 (ASTM Standard)</option>
            <option value="DZR Brass (Dezincification Resistant)">DZR Brass (Dezincification Resistant)</option>
            <option value="Lead Free Eco Brass">Lead Free Eco Brass (RoHS Compliant)</option>
            <option value="Naval Brass C46400">Naval Brass C46400</option>
            <option value="Electrolytic Copper (ETP)">Electrolytic Copper (ETP)</option>
            <option value="Aluminium Bronze">Aluminium Bronze</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-[#30383C] mb-2">
            Target Batch Quantity
          </label>
          <input
            type="text"
            placeholder="e.g. 5,000 pcs / month"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="w-full border border-[#D8DEDC] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075E62]/20 focus:border-[#075E62] bg-[#F6F5F0]/50 focus:bg-white transition-all text-[#30383C] placeholder-[#68757A] shadow-xs"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#30383C] mb-2">
          Surface Finish / Plating Requirement
        </label>
        <input
          type="text"
          placeholder="e.g. Nickel plating / Buffing / Anodizing"
          value={formData.finish}
          onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
          className="w-full border border-[#D8DEDC] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075E62]/20 focus:border-[#075E62] bg-[#F6F5F0]/50 focus:bg-white transition-all text-[#30383C] placeholder-[#68757A] shadow-xs"
        />
      </div>

      {/* Upload Drawing Zone */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#30383C] mb-2">
          Upload Technical Drawing (PDF, DWG, STEP, JPG)
        </label>
        <div className="relative border-2 border-dashed border-[#075E62]/30 hover:border-[#075E62] bg-[#E8EFEC]/40 hover:bg-[#E8EFEC]/70 rounded-xl transition-all p-6 text-center cursor-pointer group shadow-inner">
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFormData({ ...formData, drawing: e.target.files[0] });
              }
            }}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="w-10 h-10 rounded-full bg-[#075E62]/10 text-[#075E62] flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <span className="text-xs font-black text-[#202A2E] uppercase tracking-wider block mb-1">
            {formData.drawing ? formData.drawing.name : "Select Drawing Files"}
          </span>
          <span className="text-[11px] text-[#68757A] block">
            Drag files here or click to browse. Maximum file size: 20 MB.
          </span>
        </div>
      </div>

      {/* Message requirement details */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#30383C] mb-2">
          Specific Tolerances or Special Instructions
        </label>
        <textarea
          rows={4}
          placeholder="Describe critical dimensions, material requirements, and target timelines..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border border-[#D8DEDC] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075E62]/20 focus:border-[#075E62] bg-[#F6F5F0]/50 focus:bg-white transition-all text-[#30383C] placeholder-[#68757A] shadow-xs resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#C96A45] hover:bg-[#A95132] text-white text-xs sm:text-sm font-black uppercase tracking-widest py-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        <span>Send Enquiry</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>

      {/* Confidentiality & Engineering Review Reassurance */}
      <div className="pt-2 border-t border-[#D8DEDC] space-y-1.5 text-[11px] text-[#68757A]">
        <div className="flex items-start sm:items-center gap-2">
          <svg className="w-3.5 h-3.5 text-[#075E62] shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="leading-snug">
            <strong>Confidentiality Guaranteed:</strong> All technical drawings, CAD data, and specifications are treated with strict confidentiality.
          </span>
        </div>
        <div className="flex items-start sm:items-center gap-2">
          <svg className="w-3.5 h-3.5 text-[#075E62] shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
