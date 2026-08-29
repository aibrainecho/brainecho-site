"use client";

import { useEffect, useRef, useState } from "react";
import { Landmark, Rocket, Building2, Sparkles } from "lucide-react";

const historyItems = [
  {
    date: "2025.02",
    icon: Building2,
    title: "기업부설연구소 설립",
    desc: "연구개발전담부서 인정 — 음성 AI 바이오마커 연구개발 체계 구축",
    highlight: false,
  },
  {
    date: "2026.03",
    icon: Rocket,
    title: "벤처기업 인증",
    desc: "혁신성장유형 — 중소벤처기업부",
    highlight: false,
  },
  {
    date: "2026.04",
    icon: Landmark,
    title: "AI 플랫폼 상표등록",
    desc: "AI 플랫폼 사업 Class 42 소프트웨어 솔루션 상표 2건 등록",
    highlight: false,
  },
  {
    date: "2026.05",
    icon: Landmark,
    title: "특허 출원 · 등록 3건",
    desc: "음성 질환 조기진단 · 뇌파 동조 시스템 등 지식재산권 확보",
    highlight: false,
  },
  {
    date: "2026.05",
    icon: Sparkles,
    title: "AI 핀테크 시스템 개발",
    desc: "빅데이터 분석시스템 — 금융·시장 데이터 분석 인프라 구축",
    highlight: true,
  },
  {
    date: "2026.08",
    icon: Rocket,
    title: "공식 홈페이지 전면 리뉴얼",
    desc: "사업분야 4개 영역(AX · DX · R&D · CONSULTING) 체계로 개편",
    highlight: false,
  },
];

export default function History() {
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
    <section id="history" ref={ref} className="relative bg-white py-24">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="inline-block rounded-full px-4 py-1.5 text-sm font-medium tracking-widest"
            style={{ background: "rgba(0,71,171,0.08)", color: "#0047AB", border: "1px solid #e2e8f0" }}>
            Company History
          </span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">연혁</span> — Milestones
          </h2>
          <p className="section-subtitle mx-auto">
            연구개발 체계 구축부터 특허·상표권 확보, AI 핀테크 시스템 개발까지 — BrainEcho의 성장 이력입니다.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative border-l-2 pl-8 ml-4"
            style={{ borderColor: "#e2e8f0" }}>
            {historyItems.map((item, i) => (
              <div
                key={item.title + item.date}
                className={`relative mb-10 transition-all duration-700 last:mb-0 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Dot */}
                <div className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full"
                  style={{
                    background: item.highlight ? "#0047AB" : "#ffffff",
                    border: `2px solid ${item.highlight ? "#0047AB" : "#cbd5e1"}`,
                    boxShadow: item.highlight ? "0 0 0 4px rgba(0,71,171,0.12)" : "none",
                  }}>
                  <item.icon size={14} style={{ color: item.highlight ? "#ffffff" : "#94A3B8" }} />
                </div>

                {/* Card */}
                <div className="rounded-2xl p-5"
                  style={{
                    background: item.highlight ? "rgba(0,71,171,0.05)" : "#ffffff",
                    border: `1px solid ${item.highlight ? "rgba(0,71,171,0.35)" : "#e2e8f0"}`,
                    boxShadow: item.highlight ? "0 1px 4px rgba(0,71,171,0.10)" : "0 1px 3px rgba(0,0,0,0.04)",
                  }}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{
                        background: item.highlight ? "#0047AB" : "rgba(0,71,171,0.08)",
                        color: item.highlight ? "#ffffff" : "#0047AB",
                      }}>
                      {item.date}
                    </span>
                    {item.highlight && (
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                        style={{ background: "rgba(0,71,171,0.12)", color: "#0047AB", border: "1px solid rgba(0,71,171,0.3)" }}>
                        ★ 핵심 성과
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-base font-bold" style={{ color: "#1e293b" }}>{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: "#64748B" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
