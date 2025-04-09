import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    allowedDevOrigins: ['http://192.168.56.1:3000'], // Add your network origin here
  },
};


export default nextConfig;
