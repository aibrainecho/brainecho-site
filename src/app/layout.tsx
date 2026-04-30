import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrainEcho | AI 기반 음성 분석 기술 기업",
  description:
    "BrainEcho는 AI 기반 음성·생체신호 분석 기술로 헬스케어의 새로운 가능성을 열어갑니다. 음성 바이오마커, AI 진단 보조, 디지털 헬스케어 솔루션을 제공합니다.",
  keywords: [
    "BrainEcho",
    "브레인에코",
    "AI 음성분석",
    "음성 바이오마커",
    "디지털 헬스케어",
    "AI 진단",
    "생체신호 분석",
  ],
  openGraph: {
    title: "BrainEcho | AI 기반 음성 분석 기술 기업",
    description:
      "AI 기반 음성·생체신호 분석 기술로 헬스케어의 새로운 가능성을 열어갑니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
