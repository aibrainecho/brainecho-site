import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrainEcho | AI로 연결하는 건강, 지식, 관계",
  description:
    "(주)브레인에코는 AI 음성 건강진단 · 뇌파-음성 융합분석 · 시장 예측·분석 · 법률 리스크 대응 · 가족 관계 플랫폼 · 문화 AI 분석 등 6개 도메인에 걸쳐 9개의 AI 플랫폼을 운영하는 한국 최초 멀티도메인 AI 기술 기업입니다.",
  keywords: [
    "BrainEcho", "브레인에코", "AI voice biomarker",
    "AI 음성 건강진단", "멀티도메인 AI", "GVC",
    "Good Voice Care", "Chronos AI", "Legal Intelligence",
    "SignalForge", "LinkUs", "NeoSAJU",
    "AI 플랫폼", "디지털 헬스케어", "법률 리스크 대응",
  ],
  metadataBase: new URL("https://www.brainecho.co.kr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BrainEcho | 인공지능으로 연결하는 건강, 지식, 관계",
    description:
      "9개 AI 플랫폼을 운영하는 한국 최초 멀티도메인 AI 기술 기업 — AI 건강진단부터 법률 리스크 대응까지",
    type: "website",
    locale: "ko_KR",
    url: "https://www.brainecho.co.kr",
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
