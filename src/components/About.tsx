"use client";

import { useEffect, useRef, useState } from "react";
import { Heart, Brain, Users, Award, Building2 } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    label: "헬스케어 AI",
    color: "#0047AB",
    iconColor: "#0047AB",
    platforms: [
      { name: "Good Voice Care (GVC)", desc: "AI 음성 건강진단" },
      { name: "Voice Biomarker Platform", desc: "88개 파라미터 건강 분석" },
      { name: "EEG Brainwave Fusion", desc: "음성-뇌파 듀얼 시스템" },
    ],
    pitch: "스마트폰 음성 30초로 5개 질환 위험도 스크리닝 + 뇌파 예측. SCI 9편 임상 근거.",
    market: "글로벌 AI 헬스케어 TAM 2033년 1.6조원 CAGR 21.11%",
  },
  {
    icon: Brain,
    label: "인텔리전스 AI",
    color: "#00BFA5",
    iconColor: "#00BFA5",
    platforms: [
      { name: "Chronos AI Engine", desc: "시계열 추론 엔진" },
      { name: "SignalForge Engine", desc: "시장 예측·분석" },
      { name: "Legal Intelligence", desc: "법률 RAG 분석" },
      { name: "Confluence AI", desc: "기업 지식 엔진" },
    ],
    pitch: "시계열 추론·시장 예측·법률 리스크 대응·기업 지식 관리 4개 엔진. B2B SaaS 최적화.",
    market: "Enterprise AI 시장 CAGR 37%+ (2026~2035 Gartner)",
  },
  {
    icon: Users,
    label: "관계·문화 AI",
    color: "#FF6B9D",
    iconColor: "#FF6B9D",
    platforms: [
      { name: "LinkUs — Family OS", desc: "살아있는 가족 운영체제" },
      { name: "NeoSAJU", desc: "문화 AI 분석" },
    ],
    pitch: "한국어 정밀 호칭 엔진 + 전통 명리학 AI 해석. K-Culture 디지털화 선도.",
    market: "국내 K-AI 플랫폼 시장 고성장 · 한국어 특화 경쟁 우위",
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="relative py-24"
      style={{ background: "#ffffff" }}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="inline-block rounded-full px-4 py-1.5 text-sm font-medium tracking-widest"
            style={{ background: "rgba(0,71,171,0.08)", color: "#0047AB", border: "1px solid #e2e8f0" }}>
            Brand Positioning
          </span>
          <h2 className="section-title mt-6">
            3-Pillar <span className="gradient-text">AI Platform</span> Strategy
          </h2>
          <p className="section-subtitle mx-auto">
            한국 최초 멀티도메인 AI SaaS 기업 — 6개 도메인에 걸쳐 9개의 독립적 AI 플랫폼을 운영합니다.
          </p>
        </div>

        {/* Brand Positioning Statement */}
        <div className={`mx-auto mt-12 max-w-4xl rounded-2xl p-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            transition: "all 0.6s",
            transitionDelay: "0.15s",
          }}>
          <p className="text-lg leading-relaxed" style={{ color: "#334155" }}>
            BrainEcho는{" "}
            <strong style={{ color: "#0047AB" }}>AI 건강진단·뇌파분석·법률대응·시장예측·지식·관계</strong> 등 6개 도메인에 걸쳐{" "}
            <strong style={{ color: "#0047AB" }}>9개의 독립적 AI 플랫폼</strong>을 운영하는{" "}
            <strong style={{ color: "#1e293b" }}>Korea's First Multi-Domain AI SaaS Platform</strong>입니다.
          </p>
        </div>

        {/* 3-Pillar Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              className={`rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                background: "#ffffff",
                border: `1px solid #e2e8f0`,
                borderTop: `3px solid ${pillar.color}`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                transitionDelay: `${200 + i * 100}ms`,
                transition: "all 0.6s",
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${pillar.color}18`, color: pillar.color }}
                >
                  <pillar.icon size={22} />
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: pillar.color }}>
                    {pillar.label}
                  </div>
                  <div className="text-xs" style={{ color: "#64748B" }}>
                    {pillar.platforms.length}개 플랫폼
                  </div>
                </div>
              </div>

              {/* Platform list */}
              <div className="mb-4 flex flex-wrap gap-2">
                {pillar.platforms.map((p) => (
                  <span
                    key={p.name}
                    className="rounded px-2.5 py-1 text-xs"
                    style={{
                      background: `${pillar.color}0D`,
                      border: `1px solid ${pillar.color}33`,
                      color: "#475569",
                    }}
                  >
                    {p.name.split(" ")[0]} {p.name.split(" ")[1] || ""}
                  </span>
                ))}
              </div>

              {/* Pitch */}
              <p className="mb-3 text-sm leading-relaxed"
                style={{
                  color: "#64748B",
                  borderBottom: "1px solid #e2e8f0",
                  paddingBottom: "0.75rem",
                }}>
                {pillar.pitch}
              </p>

              {/* Market */}
              <p className="text-xs leading-relaxed" style={{ color: pillar.color }}>
                {pillar.market}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
