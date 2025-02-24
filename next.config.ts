
require("dotenv").config();
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rose-legislative-swordtail-248.mypinata.cloud",
        pathname: "/ipfs/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_ALCHEMY_API_URL: process.env.NEXT_PUBLIC_ALCHEMY_API_URL,
  },
 
};

export default nextConfig;
