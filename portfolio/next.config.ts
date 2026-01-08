import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
    // Required for static export if <Image /> used without an external loader
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
