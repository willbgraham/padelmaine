import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/concept",
        destination: "/concept.html",
      },
      {
        source: "/business-plan",
        destination: "/business-plan.html",
      },
    ];
  },
  turbopack: {
    root: ".",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.unixpadel.com",
      },
    ],
  },
};

export default nextConfig;
