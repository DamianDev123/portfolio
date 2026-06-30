import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // 👈 Add this line to fix the error
  },
};

export default nextConfig;
