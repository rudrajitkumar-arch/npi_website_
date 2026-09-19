"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ── Config ────────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "917817942727"; // From app/layout.tsx + components/Footer.tsx

const PRODUCT_OPTIONS = [
  "Brass Precision Components",
  "Copper Components",
  "Turned Parts",
  "Forged Brass Parts",
  "Electrical Fittings",
  "Plumbing Fittings",
  "Automotive Components",
  "Insert Moulding Parts",
  "Custom Precision Components",
  "Other",
];

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  requirement: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  requirement?: string;
}

// ── Main component ────────────────────────────────────────────────────────────
export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "", company: "", email: "", phone: "", product: "", requirement: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const popupRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // ── Open/close helpers ────────────────────────────────────────────────────
  const openPopup = useCallback(() => {
    setIsAnimatingOut(false);
    setIsOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimatingOut(false);
    }, 200);
  }, []);

  const togglePopup = useCallback(() => {
    if (isOpen) closePopup();
    else openPopup();
  }, [isOpen, openPopup, closePopup]);

  // ── Focus first field on open ────────────────────────────────────────────
  // ── Focus first field on open (desktop only to prevent mobile keyboard viewport breakage) ─
  useEffect(() => {
    if (isOpen && !isAnimatingOut) {
      if (typeof window !== "undefined" && window.innerWidth > 640) {
        const t = setTimeout(() => firstInputRef.current?.focus(), 60);
        return () => clearTimeout(t);
      }
    }
  }, [isOpen, isAnimatingOut]);

  // ── Escape key ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, closePopup]);

  // ── Click outside ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        closePopup();
      }
    };
    // Small delay so the open-click doesn't immediately close it
    const t = setTimeout(() => {
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler, { passive: true });
    }, 100);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isOpen, closePopup]);

  // ── Stop touch & wheel event propagation into background hero/window ─────
  useEffect(() => {
    const el = popupRef.current;
    if (!el || !isOpen) return;

    const stopPropagation = (e: Event) => {
      e.stopPropagation();
    };

    el.addEventListener("wheel", stopPropagation, { passive: true });
    el.addEventListener("touchstart", stopPropagation, { passive: true });
    el.addEventListener("touchmove", stopPropagation, { passive: true });
    el.addEventListener("touchend", stopPropagation, { passive: true });

    return () => {
      el.removeEventListener("wheel", stopPropagation);
      el.removeEventListener("touchstart", stopPropagation);
      el.removeEventListener("touchmove", stopPropagation);
      el.removeEventListener("touchend", stopPropagation);
    };
  }, [isOpen]);

  // ── Lock background page scroll on mobile while popup is open ─────────────
  useEffect(() => {
    if (!isOpen) return;
    if (typeof window === "undefined" || window.innerWidth > 640) return;

    const prevOverflow = document.body.style.overflow;
    const prevTouchAction = document.body.style.touchAction;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouchAction;
    };
  }, [isOpen]);

  // ── Form logic ───────────────────────────────────────────────────────────
  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.requirement.trim()) e.requirement = "Please describe your requirement.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      "Hello New Perfect Incorporation,",
      "",
      "I would like to discuss a manufacturing requirement.",
      "",
      `Name: ${form.name.trim()}`,
      form.company.trim() ? `Company: ${form.company.trim()}` : null,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.product.trim() ? `Product / Service: ${form.product.trim()}` : null,
      "",
      "Requirement:",
      form.requirement.trim(),
      "",
      "Please get in touch with me regarding this requirement.",
      "",
      "Thank you.",
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener,noreferrer"
    );
    closePopup();
    setForm({ name: "", company: "", email: "", phone: "", product: "", requirement: "" });
    setErrors({});
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* CSS animation keyframes injected once */}
      <style>{`
        @keyframes wa-open {
          from { opacity: 0; transform: translateY(12px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        @keyframes wa-close {
          from { opacity: 1; transform: translateY(0)   scale(1);    }
          to   { opacity: 0; transform: translateY(12px) scale(0.95); }
        }
        #wa-popup {
          transform-origin: bottom right;
          overscroll-behavior: contain;
        }
        #wa-popup.wa-entering {
          animation: wa-open 260ms cubic-bezier(0.16,1,0.3,1) forwards;
        }
        #wa-popup.wa-leaving {
          animation: wa-close 200ms cubic-bezier(0.4,0,1,1) forwards;
        }
        #wa-popup-body {
          flex: 1 1 auto;
          min-height: 0;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-y: contain;
          touch-action: pan-y;
        }
        #wa-popup-body::-webkit-scrollbar {
          width: 5px;
        }
        #wa-popup-body::-webkit-scrollbar-thumb {
          background: #D9DEE0;
          border-radius: 4px;
        }
        #whatsapp-floating-btn .wa-icon,
        #whatsapp-floating-btn .wa-close-icon {
          position: absolute;
          transition: opacity 200ms ease, transform 200ms ease;
        }
        #whatsapp-floating-btn .wa-icon     { opacity: 1; transform: rotate(0deg)   scale(1);    }
        #whatsapp-floating-btn .wa-close-icon { opacity: 0; transform: rotate(-45deg) scale(0.7); }
        #whatsapp-floating-btn.is-open .wa-icon     { opacity: 0; transform: rotate(45deg)  scale(0.7); }
        #whatsapp-floating-btn.is-open .wa-close-icon { opacity: 1; transform: rotate(0deg)   scale(1);   }

        /* Focus ring for inputs inside popup */
        #wa-popup input:focus,
        #wa-popup textarea:focus,
        #wa-popup select:focus {
          border-color: #1E6D95 !important;
          box-shadow: 0 0 0 2px rgba(30,109,149,0.15);
          outline: none;
        }

        /* Mobile sizing & scrolling */
        @media (max-width: 640px) {
          #whatsapp-floating-btn {
            width: 48px !important;
            height: 48px !important;
            bottom: 16px !important;
            right: 16px !important;
          }
          #whatsapp-floating-btn .wa-icon {
            width: 24px !important;
            height: 24px !important;
          }
          #whatsapp-floating-btn .wa-close-icon {
            width: 18px !important;
            height: 18px !important;
          }
          #wa-popup {
            width: calc(100vw - 32px) !important;
            right: 16px !important;
            bottom: 74px !important;
            max-height: calc(100vh - 88px) !important;
            max-height: calc(100dvh - 88px) !important;
            height: auto !important;
          }
          #wa-popup-body {
            padding: 14px 14px 24px !important;
          }
        }
      `}</style>

      {/* Floating WhatsApp button */}
      <button
        id="whatsapp-floating-btn"
        ref={btnRef}
        aria-label={isOpen ? "Close enquiry form" : "Open WhatsApp enquiry form"}
        aria-expanded={isOpen}
        aria-controls="wa-popup"
        onClick={togglePopup}
        className={isOpen ? "is-open" : ""}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9200,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#25D366",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 3px 12px rgba(37,211,102,0.35), 0 1px 4px rgba(0,0,0,0.15)",
          transition: "transform 0.18s ease, box-shadow 0.18s ease",
          padding: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.07)";
          e.currentTarget.style.boxShadow = "0 5px 18px rgba(37,211,102,0.45), 0 2px 6px rgba(0,0,0,0.18)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 3px 12px rgba(37,211,102,0.35), 0 1px 4px rgba(0,0,0,0.15)";
        }}
        onFocus={(e) => { e.currentTarget.style.outline = "3px solid rgba(37,211,102,0.55)"; e.currentTarget.style.outlineOffset = "3px"; }}
        onBlur={(e)  => { e.currentTarget.style.outline = "none"; }}
      >
        {/* WhatsApp icon */}
        <svg className="wa-icon" width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true" focusable="false">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {/* Close (X) icon */}
        <svg className="wa-close-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
          <path d="M3 3L17 17M17 3L3 17" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Chat popup — rendered but animated out */}
      {isOpen && (
        <div
          id="wa-popup"
          ref={popupRef}
          role="dialog"
          aria-modal="false"
          aria-label="WhatsApp Enquiry"
          className={isAnimatingOut ? "wa-leaving" : "wa-entering"}
          style={{
            position: "fixed",
            bottom: "96px",
            right: "24px",
            zIndex: 9100,
            width: "400px",
            maxHeight: "min(620px, calc(100dvh - 120px))",
            background: "#FFFFFF",
            border: "1px solid #D9DEE0",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(37,42,45,0.16), 0 2px 8px rgba(37,42,45,0.08)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div style={{
            padding: "16px 16px 12px",
            borderBottom: "1px solid #D9DEE0",
            background: "#FFFFFF",
            flexShrink: 0,
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: "32px", height: "32px", borderRadius: "50%", background: "#25D366", flexShrink: 0,
                }} aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <div>
                  <p style={{ margin: 0, fontSize: "14px", fontWeight: 700, color: "#252A2D", lineHeight: 1.3, fontFamily: "var(--font-body), sans-serif" }}>
                    Let&apos;s Talk About Your Requirement
                  </p>
                  <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#667177", lineHeight: 1.4 }}>
                    Share your details and we&apos;ll connect on WhatsApp.
                  </p>
                </div>
              </div>
              <button
                onClick={closePopup}
                aria-label="Close enquiry panel"
                style={{
                  flexShrink: 0, background: "none", border: "none", cursor: "pointer",
                  padding: "4px", color: "#667177", lineHeight: 1, borderRadius: "4px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#252A2D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#667177")}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable form body */}
          <div
            id="wa-popup-body"
            style={{
              overflowY: "auto",
              flex: "1 1 auto",
              minHeight: 0,
              padding: "16px",
              WebkitOverflowScrolling: "touch",
              overscrollBehaviorY: "contain",
              touchAction: "pan-y",
            }}
          >
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

              {/* Full Name */}
              <Field label="Full Name" htmlFor="wa-name" required>
                <input
                  ref={firstInputRef}
                  id="wa-name" name="name" type="text" autoComplete="name"
                  value={form.name} onChange={handleChange}
                  placeholder="e.g. Rajesh Shah"
                  aria-required="true"
                  aria-describedby={errors.name ? "wa-name-err" : undefined}
                  style={inputStyle(!!errors.name)}
                />
                {errors.name && <Err id="wa-name-err">{errors.name}</Err>}
              </Field>

              {/* Company */}
              <Field label="Company Name" htmlFor="wa-company" optional>
                <input
                  id="wa-company" name="company" type="text" autoComplete="organization"
                  value={form.company} onChange={handleChange}
                  placeholder="e.g. Acme Industries Ltd."
                  style={inputStyle(false)}
                />
              </Field>

              {/* Email */}
              <Field label="Email Address" htmlFor="wa-email" required>
                <input
                  id="wa-email" name="email" type="email" autoComplete="email"
                  value={form.email} onChange={handleChange}
                  placeholder="e.g. rajesh@company.com"
                  aria-required="true"
                  aria-describedby={errors.email ? "wa-email-err" : undefined}
                  style={inputStyle(!!errors.email)}
                />
                {errors.email && <Err id="wa-email-err">{errors.email}</Err>}
              </Field>

              {/* Phone */}
              <Field label="Phone Number" htmlFor="wa-phone" required>
                <input
                  id="wa-phone" name="phone" type="tel" autoComplete="tel"
                  value={form.phone} onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  aria-required="true"
                  aria-describedby={errors.phone ? "wa-phone-err" : undefined}
                  style={inputStyle(!!errors.phone)}
                />
                {errors.phone && <Err id="wa-phone-err">{errors.phone}</Err>}
              </Field>

              {/* Product */}
              <Field label="Product / Service" htmlFor="wa-product" optional>
                <select
                  id="wa-product" name="product"
                  value={form.product} onChange={handleChange}
                  style={{
                    ...inputStyle(false),
                    appearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23667177' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 10px center",
                    paddingRight: "32px",
                    cursor: "pointer",
                    color: form.product ? "#252A2D" : "#667177",
                  }}
                >
                  <option value="">Select a product or service…</option>
                  {PRODUCT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </Field>

              {/* Requirement */}
              <Field label="Requirement / Message" htmlFor="wa-requirement" required>
                <textarea
                  id="wa-requirement" name="requirement" rows={3}
                  value={form.requirement} onChange={handleChange}
                  placeholder="Briefly describe your manufacturing requirement, quantities, material, etc."
                  aria-required="true"
                  aria-describedby={errors.requirement ? "wa-req-err" : undefined}
                  style={{
                    ...inputStyle(!!errors.requirement),
                    resize: "vertical",
                    minHeight: "80px",
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                />
                {errors.requirement && <Err id="wa-req-err">{errors.requirement}</Err>}
              </Field>

              {/* Submit */}
              <button
                type="submit"
                id="wa-submit-btn"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  width: "100%", padding: "11px 16px",
                  background: "#1E6D95", color: "#FFFFFF",
                  border: "none", borderRadius: "6px",
                  fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                  cursor: "pointer", marginTop: "2px",
                  fontFamily: "var(--font-mono), monospace",
                  transition: "background 0.18s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#15516F")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#1E6D95")}
                onFocus={(e)      => { e.currentTarget.style.outline = "2px solid rgba(30,109,149,0.45)"; e.currentTarget.style.outlineOffset = "2px"; }}
                onBlur={(e)       => { e.currentTarget.style.outline = "none"; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Continue to WhatsApp
              </button>

              <p style={{ margin: "2px 0 0", fontSize: "10px", color: "#667177", textAlign: "center", lineHeight: 1.4 }}>
                Details shared only via WhatsApp. We do not store form data.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

// ── Tiny sub-components ───────────────────────────────────────────────────────

function Field({
  label, htmlFor, required, optional, children,
}: {
  label: string; htmlFor: string; required?: boolean; optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        style={{
          display: "block", marginBottom: "4px",
          fontSize: "10px", fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase",
          color: "#252A2D", fontFamily: "var(--font-mono), monospace",
        }}
      >
        {label}{" "}
        {required && <span aria-hidden="true" style={{ color: "#C0392B" }}>*</span>}
        {optional && <span style={{ color: "#667177", fontWeight: 400 }}>(Optional)</span>}
      </label>
      {children}
    </div>
  );
}

function Err({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} role="alert" style={{ margin: "3px 0 0", fontSize: "11px", color: "#C0392B", lineHeight: 1.4 }}>
      {children}
    </p>
  );
}

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    display: "block", width: "100%",
    padding: "8px 10px", fontSize: "13px",
    color: "#252A2D", background: "#FFFFFF",
    border: `1px solid ${hasError ? "#C0392B" : "#D9DEE0"}`,
    borderRadius: "5px", outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
    fontFamily: "var(--font-body), sans-serif",
    boxSizing: "border-box",
  };
}
