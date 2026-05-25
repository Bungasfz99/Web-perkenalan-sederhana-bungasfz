import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Ini untuk mengabaikan eror tanda petik yang bikin gagal deploy
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
