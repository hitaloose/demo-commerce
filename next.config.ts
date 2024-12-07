import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/demo-commerce",
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
    ],
  },
};

export default nextConfig;
