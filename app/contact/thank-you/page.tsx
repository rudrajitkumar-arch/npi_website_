import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enquiry Sent — New Perfect Incorporation",
  description: "Your RFQ has been received. Our engineering team will respond within 24 business hours.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F6] flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full bg-white border border-zinc-200 rounded-2xl p-10 sm:p-14 text-center shadow-xl space-y-6 relative overflow-hidden">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E6D95]" />

        {/* Success icon */}
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center border border-green-200 mx-auto">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Label */}
        <span className="text-[10px] font-black uppercase tracking-widest text-[#1E6D95] block">
          Enquiry Received
        </span>

        <h1
          className="text-2xl sm:text-3xl font-black uppercase text-[#252A2D] tracking-tight"
          style={{ fontFamily: "var(--font-serif-display)" }}
        >
          Thank You
        </h1>

        <p className="text-sm text-zinc-500 leading-relaxed max-w-sm mx-auto">
          Your RFQ has been sent to our team at{" "}
          <strong className="text-[#252A2D]">New Perfect Incorporation</strong>.
          We will review your drawings and requirements and follow up within{" "}
          <strong className="text-[#252A2D]">24 business hours</strong>.
        </p>

        {/* Reassurance */}
        <div className="text-left space-y-2 bg-zinc-50 border border-zinc-100 rounded-xl p-4">
          <div className="flex items-start gap-2 text-[11px] text-zinc-500">
            <svg className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>
              <strong>Confidentiality Guaranteed</strong> — Your technical drawings and
              specifications are handled with strict confidentiality.
            </span>
          </div>
          <div className="flex items-start gap-2 text-[11px] text-zinc-500">
            <svg className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              <strong>Direct Engineering Review</strong> — Your enquiry goes straight to
              our technical team, not a sales queue.
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/"
            className="px-6 py-3 bg-[#1E6D95] hover:bg-[#15516F] text-white text-xs font-black uppercase tracking-widest rounded-xl transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/products/"
            className="px-6 py-3 bg-white border border-zinc-300 hover:border-[#1E6D95] text-[#252A2D] text-xs font-black uppercase tracking-widest rounded-xl transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}
