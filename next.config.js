/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**.squarecdn.com"
        },
        {
          protocol: "https",
          hostname: "**.mrtodspies.com"
        }
      ]
    },
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NEXT_PUBLIC_SQUARE_APP_ID: process.env.NEXT_PUBLIC_SQUARE_APP_ID
    },
    experimental: {
      serverActions: true
    }
  };
  
  module.exports = nextConfig;
  