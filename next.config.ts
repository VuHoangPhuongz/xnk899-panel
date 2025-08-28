import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // 👈 Tắt ESLint khi build
  },
   typescript: {
    ignoreBuildErrors: true, // 👈 bỏ qua TypeScript errors
  },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
        
      },
    ],
  },
};

export default nextConfig;
