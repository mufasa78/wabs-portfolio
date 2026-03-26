/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    // Serve modern formats — Next.js auto-converts to AVIF/WebP when supported
    formats: ["image/avif", "image/webp"],

    // Responsive breakpoints fed to the srcset
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache optimised images for 1 year on CDN/ISR
    minimumCacheTTL: 31536000,

    // Allow external image hostnames (replaces deprecated `domains`)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
