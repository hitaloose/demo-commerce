import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/demo-commerce",
  output: "export",
  images: {
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
