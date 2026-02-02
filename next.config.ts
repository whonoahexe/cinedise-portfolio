import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cinedise-video.s3.eu-north-1.amazonaws.com",
        pathname: "/public/**",
      },
    ],
  },
};

export default nextConfig;
