"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024; // 10 MB
const THANK_YOU_URL =
  "https://www.newperfectinc.com/contact/thank-you/";

export default function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
  });

  const [drawings, setDrawings] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const product = searchParams.get("product");
    if (product) setFormData((prev) => ({ ...prev, compType: product }));
  }, [searchParams]);

  const totalSize = drawings.reduce((sum, f) => sum + f.size, 0);
  const isSizeExceeded = totalSize > MAX_UPLOAD_BYTES;

  /** Sync `drawings` state back onto the real file input via DataTransfer */
  const syncFilesToInput = (files: File[]) => {
    if (!fileInputRef.current) return;
    const dt = new DataTransfer();
    files.forEach((f) => dt.items.add(f));
    fileInputRef.current.files = dt.files;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files ? Array.from(e.target.files) : [];
    const combined = [...drawings, ...selected];
    const size = combined.reduce((sum, f) => sum + f.size, 0);
    setUploadError(
      size > MAX_UPLOAD_BYTES
        ? "Total attachment size must not exceed 10 MB. Please remove some files and try again."
        : null
    );
    setDrawings(combined);
    syncFilesToInput(combined);
  };

  const removeFile = (index: number) => {
    const updated = drawings.filter((_, i) => i !== index);
    const size = updated.reduce((sum, f) => sum + f.size, 0);
    setUploadError(
      size > MAX_UPLOAD_BYTES
        ? "Total attachment size must not exceed 10 MB. Please remove some files and try again."
        : null
    );
    setDrawings(updated);
    syncFilesToInput(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSizeExceeded) {
      setUploadError(
        "Total attachment size must not exceed 10 MB. Please remove some files and try again."
      );
      return;
    }
    setSubmitting(true);
    // Native form submit — browser handles multipart/file encoding
    formRef.current?.submit();
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      action="https://formsubmit.co/info@newperfectinc.com"
      method="POST"
      encType="multipart/form-data"
      className="bg-white border border-zinc-200/90 rounded-2xl p-5 sm:p-8 md:p-10 space-y-4 sm:space-y-6 shadow-xl relative overflow-hidden hover:border-[#1E6D95]/40 transition-all duration-300 h-full flex flex-col justify-between"
    >
      {/* FormSubmit config — hidden fields */}
      <input type="hidden" name="_subject" value="New RFQ Enquiry — New Perfect Incorporation" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={THANK_YOU_URL} />
      <input type="hidden" name="_captcha" value="true" />

      <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E6D95]" />

      <div className="border-b border-zinc-100 pb-4 mb-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#1E6D95] block mb-1">
          Technical Requirement Intake
        </span>
        <h3
          className="text-xl sm:text-2xl font-black uppercase text-[#252A2D] tracking-tight"
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
            name="Contact Name"
            required
            placeholder="e.g. Meet Patel"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6D95]/20 focus:border-[#1E6D95] bg-zinc-50/50 focus:bg-white transition-all text-[#252A2D] shadow-sm"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            name="Company Name"
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
            name="email"
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
            name="Phone Number"
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
            name="Industry Sector"
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
            name="Component Type"
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
            name="Material Grade"
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
            name="Quantity"
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
          name="Surface Finish / Plating"
          placeholder="e.g. Nickel plating / Buffing / Anodizing"
          value={formData.finish}
          onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
          className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6D95]/20 focus:border-[#1E6D95] bg-zinc-50/50 focus:bg-white transition-all text-[#252A2D] shadow-sm"
        />
      </div>

      {/* Upload Drawing Zone */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
          Upload Technical Drawing (PDF, DWG, STEP, JPG)
        </label>
        <div className="relative border-2 border-dashed border-[#1E6D95]/40 hover:border-[#1E6D95] bg-[#EAF3F7]/30 hover:bg-[#EAF3F7]/60 rounded-xl transition-all p-6 text-center cursor-pointer group shadow-inner">
          <input
            ref={fileInputRef}
            type="file"
            name="attachment"
            multiple
            accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="w-10 h-10 rounded-full bg-[#1E6D95]/15 text-[#1E6D95] flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <span className="text-xs font-black text-[#252A2D] uppercase tracking-wider block mb-1">
            {drawings.length === 0
              ? "Select Drawing Files"
              : `${drawings.length} file${drawings.length > 1 ? "s" : ""} selected`}
          </span>
          <span className="text-[11px] text-zinc-400 block">
            Drag files here or click to browse. Maximum total attachment size: 10 MB.
          </span>
        </div>

        {/* File list */}
        {drawings.length > 0 && (
          <ul className="mt-2 space-y-1">
            {drawings.map((f, i) => (
              <li
                key={i}
                className="flex items-center justify-between text-[11px] text-zinc-600 bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-1.5"
              >
                <span className="truncate max-w-[75%]">{f.name}</span>
                <span className="flex items-center gap-2 shrink-0">
                  <span className="text-zinc-400">{(f.size / 1024).toFixed(0)} KB</span>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="text-red-400 hover:text-red-600 font-bold transition-colors"
                    aria-label={`Remove ${f.name}`}
                  >
                    ×
                  </button>
                </span>
              </li>
            ))}
          </ul>
        )}

        {uploadError && (
          <p className="mt-2 text-[11px] text-red-600 font-semibold flex items-start gap-1.5">
            <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            {uploadError}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
          Message / Requirement Details
        </label>
        <textarea
          rows={4}
          name="Message / Requirements"
          placeholder="Describe critical dimensions, material requirements, and target timelines..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6D95]/20 focus:border-[#1E6D95] bg-zinc-50/50 focus:bg-white transition-all text-[#252A2D] shadow-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSizeExceeded || submitting}
        className="w-full bg-[#1E6D95] hover:bg-[#15516F] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-black uppercase tracking-widest py-4 rounded-xl shadow-lg hover:shadow-[#1E6D95]/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
      >
        {submitting ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            <span>Sending…</span>
          </>
        ) : (
          <>
            <span>Send Enquiry</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>

      {/* Reassurance */}
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
