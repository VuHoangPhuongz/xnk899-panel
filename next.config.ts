import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // 👈 Tắt ESLint khi build
  },
   typescript: {
    ignoreBuildErrors: true, // 👈 bỏ qua TypeScript errors
  },
};

export default nextConfig;
