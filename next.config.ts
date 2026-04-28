import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Manifesto Performance: serve WebP/AVIF where supported.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
