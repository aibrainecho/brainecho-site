import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow larger body for notice board content
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
