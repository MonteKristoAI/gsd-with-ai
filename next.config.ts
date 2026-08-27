import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Manifesto Performance: serve WebP/AVIF where supported.
    formats: ["image/avif", "image/webp"],
    // Allow our own trusted Torque Curve SVG through next/image.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        // Blog featured images live in the MonteKristo platform storage bucket.
        protocol: "https",
        hostname: "pplolmxyagikhhhzruul.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
