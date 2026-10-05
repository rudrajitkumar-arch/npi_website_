import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ProductImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

/**
 * Canonical 1:1 square product image container.
 * Enforces 1:1 aspect ratio across all devices and all categories permanently.
 * Uses object-fit: contain with minimal padding to ensure zero cropping or edge cut-offs.
 */
export function ProductImage({ src, alt, priority = false }: ProductImageProps) {
  return (
    <div
      className="product-card-image-wrapper relative w-full bg-[#F2F4F4] flex items-center justify-center overflow-hidden"
      style={{ aspectRatio: "1 / 1" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="product-card-img object-contain object-center p-2"
        loading={priority ? undefined : "lazy"}
        priority={priority}
      />
    </div>
  );
}

export interface ProductCardProps {
  name: string;
  slug: string;
  categorySlug: string;
  image: string;
  imageAlt?: string;
  index?: number;
}

/**
 * Canonical ProductCard component used across all product categories.
 * Guarantees equal height, 1:1 square image canvas, consistent title spacing,
 * and pinned enquiry button across all rows and breakpoints.
 */
export default function ProductCard({
  name,
  slug,
  categorySlug,
  image,
  imageAlt,
  index = 0,
}: ProductCardProps) {
  return (
    <article
      className="product-card animate-fade-in-up stagger-child bg-white border border-[#D9DEE0] overflow-hidden flex flex-col h-full"
      style={{ "--stagger": index } as React.CSSProperties}
    >
      {/* 1:1 Square Image Placeholder */}
      <ProductImage
        src={image}
        alt={imageAlt || `${name} - New Perfect Incorporation`}
      />

      {/* Card Content: Title + Pinned Action Button */}
      <div className="p-4 flex flex-col flex-grow gap-2">
        <h3 className="product-card-title text-[11px] sm:text-xs font-black uppercase tracking-wide text-[#252A2D] leading-snug min-h-[2.5rem] flex items-start flex-grow">
          {name}
        </h3>
        <Link
          href={`/contact?product=${encodeURIComponent(name)}&category=${categorySlug}`}
          className="product-card-btn inline-flex items-center gap-1.5 text-[10px] font-mono font-black uppercase tracking-[0.16em] text-white bg-[#1E6D95] hover:bg-[#15516F] transition-colors px-3 py-2 self-start mt-auto"
          aria-label={`Enquire about ${name}`}
        >
          Enquire
          <span className="product-card-arrow">→</span>
        </Link>
      </div>
    </article>
  );
}
