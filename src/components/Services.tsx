"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Clock, Scale, TrendingUp } from "lucide-react";

const platforms = [
  {
    icon: Mic,
    pillar: "헬스케어 AI",
    pillarColor: "#0047AB",
    name: "Good Voice Care (GVC)",
    en: "AI Voice Biomarker Healthcare Platform",
    desc: "스마트폰 10초 발성 → 30+ 음향 파라미터 분석 → 후두암·파킨슨·우울·인지장애 5개 분야 위험도를 5분 내 스크리닝",
    features: [
      "후두암 85~97% (Nature 2024)",
      "파킨슨병 AUC 0.9125 (Nature 2025)",
      "우울증 민감도 71.3% (Ann.Fam.Med.)",
      "잡음 보정 DNN (MDVP 수준)",
      "Edge AI 오프라인 지원",
      "iOS/Android + AWS REST API",
    ],
    status: "GVC App V3.0 — 2026 출시 예정",
  },
  {
    icon: Clock,
    pillar: "인텔리전스 AI",
    pillarColor: "#00BFA5",
    name: "Chronos AI Engine",
    en: "Time-Series Data Inference Platform",
    desc: "다중 소스 시계열 데이터 수집 → 패턴 분석·변곡점 탐지 → 관계형 네트워크 그래프 모델링 → What-if 시뮬레이션 및 미래 시나리오 예측",
    features: [
      "시계열 특징 추출",
      "변곡점 자동 탐지",
      "세대 간 패턴 분석",
      "What-if 시나리오 시뮬레이션",
      "네트워크 관계 모델링",
      "REST API 플랫폼",
    ],
    status: "운영 중",
  },
  {
    icon: Scale,
    pillar: "인텔리전스 AI",
    pillarColor: "#00BFA5",
    name: "Legal Intelligence Engine",
    en: "Legal Information Analysis Platform",
    desc: "LLM + Hybrid Retrieval(RAG) 기반 법률 질의응답 — 법제처 법령 5,584건·대법원 판례 15,928건 연동, BQAE 자동 품질 검증",
    features: [
      "법령 5,584건 (법제처 LSO/DRF API)",
      "판례 15,928건 (대법원 판례 API)",
      "PostgreSQL 18.3 + pgvector 0.8.1 (HNSW)",
      "Hybrid Retrieval (키워드+벡터 유사도)",
      "BQAE 품질 자동 검증",
      "법률 리포트 자동 생성",
    ],
    status: "개발 완료 · 운영 중",
  },
  {
    icon: TrendingUp,
    pillar: "인텔리전스 AI",
    pillarColor: "#00BFA5",
    name: "SignalForge Engine",
    en: "Market Signal Analysis Platform",
    desc: "멀티 소스 실시간 시장 데이터 수집 → AI 분류·트렌드·이상치 탐지 → 사용자 맞춤형 인사이트 알림·대시보드",
    features: [
      "실시간 시장 신호 탐지",
      "트렌드 이상치 분류",
      "AI 맞춤 알림",
      "투자 인사이트 큐레이션",
      "KIS API 증권 연동",
      "대시보드 + 리포트 생성",
    ],
    status: "운영 중",
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
            Platform Portfolio
          </span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">Core AI</span> Platforms
          </h2>
          <p className="section-subtitle mx-auto">
            Healthcare AI에서 Intelligence AI까지 — 각 도메인에 특화된 AI 플랫폼이 통합 인프라 위에서 운영됩니다.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className={`rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                borderLeft: `4px solid ${p.pillarColor}`,
                transitionDelay: `${i * 120}ms`,
                transition: "all 0.6s",
              }}
            >
              {/* Header */}
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: `${p.pillarColor}18`, color: p.pillarColor }}>
                      <p.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: "#1e293b" }}>{p.name}</h3>
                      <p className="text-xs" style={{ color: "#64748B" }}>{p.en}</p>
                    </div>
                  </div>
                </div>
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium flex-shrink-0"
                  style={{ background: `${p.pillarColor}18`, color: p.pillarColor, border: `1px solid ${p.pillarColor}33` }}
                >
                  {p.pillar}
                </span>
              </div>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed"
                style={{
                  color: "#475569",
                  borderTop: "1px solid #e2e8f0",
                  borderBottom: "1px solid #e2e8f0",
                  padding: "14px 0",
                }}>
                {p.desc}
              </p>

              {/* Features */}
              <div className="mb-4 grid grid-cols-2 gap-1.5">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-1.5 text-xs" style={{ color: "#64748B" }}>
                    <span className="mt-[5px] h-[5px] w-[5px] shrink-0 rounded-full" style={{ background: p.pillarColor }} />
                    {f}
                  </div>
                ))}
              </div>

              {/* Status */}
              <div className="rounded-xl px-4 py-2.5 text-xs font-medium"
                style={{
                  background: `${p.pillarColor}14`,
                  border: `1px solid ${p.pillarColor}33`,
                  color: p.pillarColor,
                }}>
                📌 {p.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
