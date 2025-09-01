import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v5jmypcwpk.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
