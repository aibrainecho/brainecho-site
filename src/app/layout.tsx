import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrainEcho | AI Voice Biomarker Healthcare",
  description:
    "BrainEcho는 AI 기반 음성 바이오마커 분석 기술로 헬스케어의 새로운 기준을 제시합니다. 5분 모바일 음성 스크리닝 플랫폼 GVC를 통해 후두암·파킨슨·우울증을 조기 발견합니다.",
  keywords: [
    "BrainEcho", "브레인에코", "AI voice biomarker",
    "음성 바이오마커", "디지털 헬스케어", "GVC",
    "Good Voice Care", "음성 스크리닝", "AI 진단",
    "후두암 조기진단", "파킨슨병 진단",
  ],
  openGraph: {
    title: "BrainEcho | Connecting Neural Intelligence to Digital Reality",
    description:
      "AI 음성 바이오마커 기반 디지털 헬스케어 플랫폼 — 5분 만에 목소리로 건강을 진단합니다.",
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
