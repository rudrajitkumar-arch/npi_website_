import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubPages ? "/npi_website_" : "");

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: basePath || undefined,
  trailingSlash: true,
  allowedDevOrigins: [
    "192.168.1.4",
    "192.168.1.4:3000",
    "localhost",
    "localhost:3000",
  ],
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  poweredByHeader: false,
  ...(isGithubPages
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                {
                  key: "X-Content-Type-Options",
                  value: "nosniff",
                },
                {
                  key: "X-Frame-Options",
                  value: "DENY",
                },
                {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
                },
                {
                  key: "Permissions-Policy",
                  value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
                },
                {
                  key: "X-DNS-Prefetch-Control",
                  value: "on",
                },
                {
                  key: "Content-Security-Policy-Report-Only",
                  value:
                    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://www.newperfectinc.com; font-src 'self' data:; connect-src 'self' https://formsubmit.co blob: data:; form-action 'self' https://formsubmit.co; frame-ancestors 'none'; object-src 'none'; base-uri 'self';",
                },
              ],
            },
          ];
        },
        async redirects() {
          return [
            // ── Domain: non-www → www (preserves full path) ──────────
            {
              source: "/:path*",
              has: [{ type: "host", value: "newperfectinc.com" }],
              destination: "https://www.newperfectinc.com/:path*",
              permanent: true,
            },

            // ── Legacy: About ─────────────────────────────────────────
            { source: "/about-us.php",      destination: "/about/", permanent: true },
            { source: "/about-us",          destination: "/about/", permanent: true },
            { source: "/about_us.php",      destination: "/about/", permanent: true },
            { source: "/about_us",          destination: "/about/", permanent: true },
            { source: "/company.php",       destination: "/about/", permanent: true },
            { source: "/company",           destination: "/about/", permanent: true },

            // ── Legacy: Products ──────────────────────────────────────
            { source: "/products.php",      destination: "/products/", permanent: true },
            { source: "/our-products.php",  destination: "/products/", permanent: true },
            { source: "/our-products",      destination: "/products/", permanent: true },
            { source: "/product.php",       destination: "/products/", permanent: true },

            // ── Legacy: Quality ───────────────────────────────────────
            { source: "/quality.php",          destination: "/quality/", permanent: true },
            { source: "/quality-control.php",  destination: "/quality/", permanent: true },
            { source: "/quality-control",      destination: "/quality/", permanent: true },
            { source: "/certifications.php",   destination: "/quality/", permanent: true },
            { source: "/certifications",       destination: "/quality/", permanent: true },

            // ── Legacy: Capabilities ──────────────────────────────────
            { source: "/capabilities.php",          destination: "/capabilities/", permanent: true },
            { source: "/manufacturing.php",         destination: "/capabilities/", permanent: true },
            { source: "/manufacturing",             destination: "/capabilities/", permanent: true },
            { source: "/manufacturing-capabilities.php", destination: "/capabilities/", permanent: true },
            { source: "/manufacturing-capabilities",    destination: "/capabilities/", permanent: true },

            // ── Legacy: Infrastructure ────────────────────────────────
            { source: "/infrastructure.php",  destination: "/infrastructure/", permanent: true },
            { source: "/facility.php",        destination: "/infrastructure/", permanent: true },
            { source: "/facility",            destination: "/infrastructure/", permanent: true },

            // ── Legacy: Industries ────────────────────────────────────
            { source: "/industries.php",  destination: "/industries/", permanent: true },
            { source: "/clients.php",     destination: "/industries/", permanent: true },
            { source: "/clients",         destination: "/industries/", permanent: true },

            // ── Legacy: Contact ───────────────────────────────────────
            { source: "/contact.php",        destination: "/contact/", permanent: true },
            { source: "/contact-us.php",     destination: "/contact/", permanent: true },
            { source: "/contact-us",         destination: "/contact/", permanent: true },
            { source: "/contact_us.php",     destination: "/contact/", permanent: true },
            { source: "/enquiry.php",        destination: "/contact/", permanent: true },
            { source: "/enquiry",            destination: "/contact/", permanent: true },
            { source: "/get-quote.php",      destination: "/contact/", permanent: true },
            { source: "/get-quote",          destination: "/contact/", permanent: true },
            { source: "/rfq.php",            destination: "/contact/", permanent: true },

            // ── Legacy: Home ──────────────────────────────────────────
            { source: "/index.php",   destination: "/", permanent: true },
            { source: "/home.php",    destination: "/", permanent: true },
          ];
        },
      }),
};

export default nextConfig;
