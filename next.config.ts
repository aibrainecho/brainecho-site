import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // ⚠️ 정적 export: API 라우트 미지원 (Telegram → PG로 대체)
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  // 빌드 시 /notices.json도 out/에 포함되도록 설정
  transpilePackages: [],
};

export default nextConfig;
