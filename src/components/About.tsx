"use client";

import { useEffect, useRef, useState } from "react";
import { HeartPulse, BrainCircuit, FlaskConical, Landmark } from "lucide-react";

const pillars = [
  {
    icon: HeartPulse,
    label: "AX · Healthcare AI",
    color: "#0047AB",
    platforms: [
      { name: "Good Voice Care (GVC)", desc: "AI 음성 건강진단" },
      { name: "Voice Biomarker Platform", desc: "88개 파라미터 건강 분석" },
      { name: "EEG Brainwave Fusion", desc: "음성-뇌파 듀얼 바이오마커" },
    ],
    pitch: "음향학적 특징 기반 질환 위험도 스크리닝 엔진 + 음성–뇌파 이중 바이오마커 융합. SCI 9편 임상 근거.",
    market: "음성 바이오마커 시장 $3.84B(2026) → $7.77B(2031), CAGR 15.15%",
  },
  {
    icon: BrainCircuit,
    label: "DX · Intelligence AI",
    color: "#00BFA5",
    platforms: [
      { name: "Chronos AI Engine", desc: "시계열 추론 엔진" },
      { name: "Legal Intelligence", desc: "법률 하이브리드 RAG" },
      { name: "SignalForge Engine", desc: "시장 신호 분석" },
      { name: "Confluence AI", desc: "기업 지식 엔진" },
    ],
    pitch: "하이브리드 검색(RAG) 기반 분석 파이프라인 설계 — 법률·시장·지식 도메인 SaaS 운영 및 API 제품화.",
    market: "Enterprise AI 시장 CAGR 37%+ (2026~2035 Gartner)",
  },
  {
    icon: FlaskConical,
    label: "R&D · 도메인 범용 AI 연구",
    color: "#7C3AED",
    platforms: [
      { name: "BAOS", desc: "회계·경영 분석" },
      { name: "BHCM", desc: "인사 분석" },
      { name: "BSAP", desc: "금융 시계열 분석" },
      { name: "Project Factory", desc: "19 에이전트 SDLC" },
    ],
    pitch: "이종 도메인 패턴학습 및 전이 가능 표현 추출 — 금융·회계·인사·공공·품질 분석모델 연구개발.",
    market: "Representation Learning · Anomaly Detection",
  },
  {
    icon: Landmark,
    label: "CONSULTING · 공공·정책",
    color: "#D97706",
    platforms: [
      { name: "Gov Project Platform", desc: "정부과제 AI 분석·추천" },
      { name: "B2G 진입 전략", desc: "공공시장 진출 컨설팅" },
      { name: "재정 타당성 분석", desc: "투자심사 지원" },
    ],
    pitch: "공공시장(B2G) 진입 전략 · 정책 자문 — 재정투자 타당성, 지방재정 투자심사.",
    market: "공공 AI 시장 $19.7B(2025) → $115.3B(2035), CAGR 약 19%",
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
            4-Business Area <span className="gradient-text">AI Strategy</span>
          </h2>
          <p className="section-subtitle mx-auto">
            AX · DX · R&D · CONSULTING — 4개 사업분야에 걸쳐 14+ AI 플랫폼·시스템을 운영합니다.
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
            <strong style={{ color: "#0047AB" }}>AX(Healthcare AI) · DX(Intelligence AI) · R&D(도메인 범용 AI 연구) · CONSULTING(공공·정책)</strong>{" "}
            4개 사업분야에 걸쳐{" "}
            <strong style={{ color: "#0047AB" }}>14+ AI 플랫폼·시스템</strong>을 운영하는{" "}
            <strong style={{ color: "#1e293b" }}>Korea's First Multi-Domain AI SaaS Platform</strong>입니다.
          </p>
        </div>

        {/* 4-Business Area Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
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
                    {pillar.platforms.length}개 시스템
                  </div>
                </div>
              </div>

              {/* Platform list */}
              <div className="mb-4 flex flex-wrap gap-2">
                {pillar.platforms.map((p) => (
                  <span
                    key={p.name}
                    title={p.desc}
                    className="rounded px-2.5 py-1 text-xs"
                    style={{
                      background: `${pillar.color}0D`,
                      border: `1px solid ${pillar.color}33`,
                      color: "#475569",
                    }}
                  >
                    {p.name}
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
