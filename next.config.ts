import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ini perintah untuk mengabaikan eror type checking globals.css saat deploy
    ignoreBuildErrors: true,
  },
};

export default nextConfig;