import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rose-legislative-swordtail-248.mypinata.cloud",
        port: "",
        pathname: "/ipfs/**",
      },
    ],
  },
};

export default nextConfig;
