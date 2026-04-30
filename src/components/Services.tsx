"use client";

import { useEffect, useRef, useState } from "react";
import {
  Smartphone, Cloud, Building2, Globe,
  BarChart3, Users, Database, Network,
} from "lucide-react";

const products = [
  {
    icon: Smartphone,
    title: "GVC App",
    subtitle: "모바일 셀프 스크리닝",
    segment: "B2C (일반인)",
    desc: "스마트폰으로 30초 발성 → 5분 내 멀티 질환 스크리닝 결과 제공. 프리미엄 구독 ₩9,900/월.",
    features: ["iOS/Android", "멀티 질환 동시 진단", "결과 추이 분석", "병원 연계"],
    highlight: "국내 최초 모바일 음성 스크리닝 앱",
  },
  {
    icon: Cloud,
    title: "GVC AI API",
    subtitle: "AI 진단 보조 서비스",
    segment: "B2B (의료기관)",
    desc: "병원·플랫폼·보험사 대상 REST API 기반 AI 진단 보조. 사용량 과금 + 연간 라이선스.",
    features: ["실시간 AI 분석", "의료기관 대시보드", "환자 관리 시스템", "SHAP 근거 제시"],
    highlight: "의료 효율화 · 트리아지 자동화",
  },
  {
    icon: Building2,
    title: "GVC Local System",
    subtitle: "지자체·공공 전용",
    segment: "Public (지자체)",
    desc: "22만명 언어치료 대상자 정기 모니터링 인프라. 공공 조달 수의계약 우선권 보유.",
    features: ["대상자 체계 관리", "위험도 기반 우선 배정", "정부 조달 연계", "치료 성과 분석"],
    highlight: "소기업 확인 기반 공공 조달 가능",
  },
  {
    icon: Globe,
    title: "GVC Global",
    subtitle: "35개국 글로벌",
    segment: "Global (해외)",
    desc: "예송음성센터 35개국 인프라 활용. 다국어 모델 교체만으로 즉시 배포 가능.",
    features: ["다국어 지원", "35개국 동시 배포", "FDA 510(k) 준비", "글로벌 B2B 파트너십"],
    highlight: "글로벌 채널 즉시 활용 가능",
  },
];

const bizModel = [
  { phase: "Phase 1 (2026)", items: ["B2C 앱 구독 ₩9,900/월", "B2B API 사용량 과금", "목표 매출 ₩5억"] },
  { phase: "Phase 2 (2027)", items: ["Enterprise SaaS 구축", "공공 조달 계약", "목표 매출 ₩15억"] },
  { phase: "Phase 3 (2028+)", items: ["GVC DB 플랫폼 라이선싱", "35개국 글로벌 SaaS", "목표 매출 ₩60억"] },
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
    <section id="services" ref={ref} className="relative bg-white py-24">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-600">Product Portfolio</span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">Good Voice Care</span> (GVC)
          </h2>
          <p className="section-subtitle mx-auto">
            AI 음성 스크리닝 플랫폼 — 4개 질환군 동시 스크리닝, 3중 아키텍처, 글로벌 확장.
          </p>
        </div>

        {/* Product Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <div key={p.title}
              className={`group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms`, transition: "all 0.6s" }}>
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-accent-50 text-brand-600 transition-all duration-300 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white group-hover:shadow-lg">
                  <p.icon size={28} />
                </div>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">{p.segment}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-400">{p.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{p.desc}</p>

              <div className="mt-4 border-t border-gray-100 pt-4">
                <ul className="grid grid-cols-2 gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-xl bg-brand-50 px-4 py-2.5 text-xs font-medium text-brand-700">
                {p.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Business Model */}
        <div className={`mx-auto mt-16 max-w-4xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
             style={{ transitionDelay: "0.5s", transition: "all 0.7s" }}>
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
            Multi-Stream <span className="gradient-text">SaaS Revenue</span> Architecture
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {bizModel.map((phase) => (
              <div key={phase.phase} className="rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm text-center">
                <div className="mb-4 inline-block rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold text-white">
                  {phase.phase}
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
