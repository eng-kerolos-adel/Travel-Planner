import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "v5jmypcwpk.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
