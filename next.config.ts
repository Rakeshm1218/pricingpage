import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true, // 👈 ensures App Router is enabled
  },
};

export default nextConfig;
