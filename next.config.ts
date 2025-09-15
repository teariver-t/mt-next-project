import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,  // ReactのStrictModeを有効化
  images: {
    domains: ['images.microcms-assets.io'],  // 画像を許可するドメイン
  },
};

export default nextConfig;
