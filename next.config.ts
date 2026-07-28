import type { NextConfig } from "next";

// Loader path from @ideavo/webpack-tagger - use direct resolve to get the actual file
const loaderPath = require.resolve('@ideavo/webpack-tagger');

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['*.e2b.app', '*.ideavo.app', '*.ideavo.ai'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [loaderPath]
      }
    }
  }
} as NextConfig;

export default nextConfig;
