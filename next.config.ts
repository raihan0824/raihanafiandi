import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/raihanafiandi",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
