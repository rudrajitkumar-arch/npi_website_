import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubPages ? "/npi_website_" : "");

const nextConfig: NextConfig = {
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
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGithubPages
    ? {}
    : {
        async redirects() {
          return [
            {
              source: "/clients",
              destination: "/",
              permanent: true,
            },
          ];
        },
      }),
};

export default nextConfig;
