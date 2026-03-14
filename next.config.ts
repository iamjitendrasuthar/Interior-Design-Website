import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // <-- ye flag TypeScript errors ko ignore kar dega
  },
};

export default nextConfig;
