import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/banking",
  trailingSlash: true, // Exports pages as /folder/index.html instead of folder.html
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname, ".."),
  },
  allowedDevOrigins: ['192.168.254.105'],
};

export default nextConfig;

