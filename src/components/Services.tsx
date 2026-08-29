"use client";

import { useEffect, useRef, useState } from "react";
import { HeartPulse, BrainCircuit, FlaskConical, Landmark } from "lucide-react";

const businessAreas = [
  {
    no: "01",
    code: "AX",
    icon: HeartPulse,
    title: "Healthcare AI",
    color: "#0047AB",
    points: [
      "음향학적 특징 기반 질환 위험도 스크리닝 엔진",
      "음성–뇌파 이중 바이오마커 융합 분석",
    ],
    tags: ["Voice Biomarker", "EEG Fusion", "Edge AI"],
    platforms: [
      { name: "Good Voice Care (GVC)", desc: "스마트폰 10초 발성 → 5개 질환 위험도 스크리닝" },
      { name: "Voice Biomarker Platform", desc: "88개 음향 파라미터 건강 분석" },
      { name: "EEG Brainwave Fusion", desc: "음성→뇌파 예측 듀얼 바이오마커" },
    ],
    market: "글로벌 음성 바이오마커 시장 $3.84B(2026) → $7.77B(2031), CAGR 15.15% (Mordor Intelligence)",
    status: "GVC App V3.0 — 2026 출시 예정",
  },
  {
    no: "02",
    code: "DX",
    icon: BrainCircuit,
    title: "Intelligence AI",
    color: "#00BFA5",
    points: [
      "하이브리드 검색(RAG) 기반 분석 파이프라인 설계",
      "법률·시장·지식 도메인 SaaS 운영 및 API 제품화",
    ],
    tags: ["Hybrid RAG", "Time-Series", "Vector DB"],
    platforms: [
      { name: "Chronos AI Engine", desc: "시계열 추론 · What-if 시뮬레이션" },
      { name: "Legal Intelligence Engine", desc: "법령 5,584건 · 판례 15,928건 하이브리드 RAG" },
      { name: "SignalForge Engine", desc: "실시간 시장 신호 분석" },
      { name: "Confluence AI", desc: "기업 지식 RAG 엔진" },
    ],
    market: "Enterprise AI 시장 CAGR 37%+ (2026~2035, Gartner) — B2B SaaS · API 제품화 확대",
    status: "법률·시장·지식 도메인 SaaS — 운영 중",
  },
  {
    no: "03",
    code: "R&D",
    icon: FlaskConical,
    title: "도메인 범용 AI 추론 연구",
    color: "#7C3AED",
    points: [
      "이종 도메인 패턴학습 및 전이 가능 표현 추출",
      "금융·회계·인사·공공·품질 분석모델 연구개발",
    ],
    tags: ["Representation Learning", "Anomaly Detection"],
    platforms: [
      { name: "BAOS (회계·경영)", desc: "중소기업 AI 경영 OS — 분석모델" },
      { name: "BHCM (인사)", desc: "법령 파라미터 · 급여·채용 분석" },
      { name: "BSAP (금융)", desc: "시계열 신호 엔진 연구" },
      { name: "Project Factory", desc: "19 에이전트 SDLC 연구 파이프라인" },
    ],
    market: "도메인 특화 분석모델 — 19 에이전트 SDLC 파이프라인 기반 연구개발 체계 운영",
    status: "연구개발 진행 중",
  },
  {
    no: "04",
    code: "CONSULTING",
    icon: Landmark,
    title: "공공 · 정책",
    color: "#D97706",
    points: [
      "공공시장(B2G) 진입 전략 · 정책 자문",
      "재정투자 타당성 · 지방재정 투자심사",
    ],
    tags: ["Public Policy", "B2G", "Governance"],
    platforms: [
      { name: "Gov Project Platform", desc: "정부과제 수집 · AI 분석 · 맞춤 추천" },
      { name: "B2G 진입 전략", desc: "공공시장 진출 컨설팅" },
      { name: "재정 타당성 분석", desc: "투자심사 · 예산 편성 지원" },
    ],
    market: "공공 AI 시장 $19.7B(2025) → $115.3B(2035), CAGR 약 19% (Global Market Insights) · 국내 공공 AI 용역 연 2.8조원(2024, SPRi)",
    status: "정부과제 플랫폼 — 운영 중",
  },
];

export default function Services() {
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
    <section id="services" ref={ref} className="relative py-24"
      style={{ background: "#fafafa" }}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="inline-block rounded-full px-4 py-1.5 text-sm font-medium tracking-widest"
            style={{ background: "rgba(0,71,171,0.08)", color: "#0047AB", border: "1px solid #e2e8f0" }}>
            Business Areas
          </span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">사업분야</span> — 4 Business Areas
          </h2>
          <p className="section-subtitle mx-auto">
            AX(Healthcare AI) · DX(Intelligence AI) · R&D(도메인 범용 AI 연구) · CONSULTING(공공·정책) — 각 도메인에 특화된 AI 기술사업을 운영합니다.
          </p>
        </div>

        {/* Business Area Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {businessAreas.map((area, i) => (
            <div
              key={area.no}
              className={`rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                borderLeft: `4px solid ${area.color}`,
                transitionDelay: `${i * 120}ms`,
                transition: "all 0.6s",
              }}
            >
              {/* Header */}
              <div className="mb-5 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black"
                    style={{ background: `${area.color}18`, color: area.color }}>
                    {area.no}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold" style={{ color: "#1e293b" }}>{area.title}</h3>
                      <span className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                        style={{ background: `${area.color}18`, color: area.color, border: `1px solid ${area.color}33` }}>
                        {area.code}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-xs" style={{ color: "#64748B" }}>
                      <area.icon size={13} style={{ color: area.color }} />
                      {area.tags.join(" · ")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Points */}
              <div className="mb-5 space-y-2"
                style={{ borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", padding: "14px 0" }}>
                {area.points.map((p) => (
                  <div key={p} className="flex items-start gap-2 text-sm" style={{ color: "#475569" }}>
                    <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full" style={{ background: area.color }} />
                    {p}
                  </div>
                ))}
              </div>

              {/* Platforms */}
              <div className="mb-4">
                <div className="mb-2 text-[11px] font-bold tracking-widest" style={{ color: area.color }}>
                  // 관련 기술 · 시스템
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {area.platforms.map((pl) => (
                    <span key={pl.name} title={pl.desc}
                      className="rounded-lg px-2.5 py-1.5 text-xs"
                      style={{
                        background: `${area.color}0D`,
                        border: `1px solid ${area.color}33`,
                        color: "#475569",
                      }}>
                      {pl.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Market + Status */}
              <div className="rounded-xl px-4 py-3 text-xs leading-relaxed"
                style={{
                  background: `${area.color}0F`,
                  border: `1px solid ${area.color}2E`,
                  color: "#64748B",
                }}>
                <div className="font-semibold" style={{ color: area.color }}>📈 {area.market}</div>
              </div>
              <div className="mt-3 rounded-xl px-4 py-2.5 text-xs font-medium"
                style={{
                  background: `${area.color}14`,
                  border: `1px solid ${area.color}33`,
                  color: area.color,
                }}>
                📌 {area.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
