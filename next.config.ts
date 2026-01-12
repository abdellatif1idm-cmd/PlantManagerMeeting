import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [75, 80, 85, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Webpack config for when Turbopack is not used
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "motion/react": "motion/react",
    };
    return config;
  },

  // Turbopack config (moved from experimental.turbo)
  turbopack: {
    resolveAlias: {
      "motion/react": "motion/react",
    },
  },

  experimental: {
    optimizePackageImports: ["motion"],
  },
};

export default nextConfig;
