import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    // TO DO: Once material-tailwind supports Next.js 14, remove this ignoreBuildErrors flag
    typescript: {
      ignoreBuildErrors: true,
    },
};

export default nextConfig;
