import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.ibb.co"], // ✅ Add allowed domain
  },
};

export default nextConfig;
