"use client";

import { useEffect, useRef, useState } from "react";
import {
  TrendingUp, Award, BookOpen, FlaskConical,
  Users, ChevronRight, BarChart3, ExternalLink,
} from "lucide-react";

const metrics = [
  { label: "AI 음성 헬스 시장 (2035)", value: "$116.9B", sub: "TAM", color: "text-brand-500" },
  { label: "국내 디지털 헬스", value: "$2.4B", sub: "SAM", color: "text-accent-500" },
  { label: "연평균 성장률", value: "37.85%", sub: "CAGR", color: "text-lime-500" },
  { label: "목표 매출 (2027)", value: "₩15억", sub: "SOM", color: "text-brand-400" },
];

const advantages = [
  {
    icon: BarChart3,
    title: "비용 1/100",
    desc: "전문 장비(MDVP) 대비 1/100 비용. 스마트폰만으로 병원 수준 스크리닝.",
  },
  {
    icon: Users,
    title: "커버 질환 4배",
    desc: "글로벌 경쟁사 대비 4배 많은 질환 동시 스크리닝. 단일 플랫폼 멀티 진단.",
  },
  {
    icon: FlaskConical,
    title: "10년+ 임상 데이터",
    desc: "2016년부터 축적된 도메인 전문성. SCI 논문 기반 검증된 AI 모델.",
  },
  {
    icon: Award,
    title: "35개국 글로벌 채널",
    desc: "예송음성센터 MOU 기반 즉시 활용 가능한 글로벌 인프라.",
  },
];

const milestones = [
  { yearLine1: "2016", yearLine2: "~2019", event: "R&D Foundation — 음성 분석 AI 핵심 원천 기술 연구 개발 시작. GVC(Good Voice Care) 프로토타입 개발성공. 공공 연구개발 성공적 수행." },
  { yearLine1: "2020", yearLine2: "~2023", event: "다수 특허 등록 및 음성 분석 기술 고도화. 원천 기술 IP 확보. AI 플랫폼 기반 기술 체계 구축." },
  { yearLine1: "2024", yearLine2: "", event: "Technology Startup — 주식회사 브레인에코 기술기반 창업(성실경영자확인). S전자 등 기업 협력 프로젝트 진행. AI 플랫폼 고도화 및 다수 코어기반 기술 체계 구축 시작." },
  { yearLine1: "2025", yearLine2: ".02", event: "연구개발전담부서 인정 / 예송음성센터 MOU (35개국) / 그립 AIoT 협정" },
  { yearLine1: "2025", yearLine2: ".06", event: "삼성전자 URecA 2.0 컨텐츠 개인화 플랫폼 참여 (→2026.06)" },
  { yearLine1: "2026", yearLine2: ".01", event: "소프트웨어 응용솔루션 개발업 상표권 등록 (제42류)" },
];

function MarketChart() {
  return (
    <svg viewBox="0 0 400 220" className="w-full max-w-md mx-auto">
      {/* Grid */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="40" y1={50 + i * 45} x2="380" y2={50 + i * 45} stroke="#e5e7eb" strokeWidth="1" />
      ))}
      {/* Growth Line */}
      <defs>
        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0047AB" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0047AB" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M 60 180 L 140 150 L 220 120 L 300 70 L 360 30"
        fill="none" stroke="#0047AB" strokeWidth="3" strokeLinecap="round" />
      <path d="M 60 180 L 140 150 L 220 120 L 300 70 L 360 30 L 360 180 Z"
        fill="url(#chart-fill)" />
      {/* Data Points */}
      {[
        { x: 60, y: 180, label: "'16", v: "" },
        { x: 140, y: 150, label: "'20", v: "" },
        { x: 220, y: 120, label: "'24", v: "" },
        { x: 300, y: 70, label: "'28", v: "₩60억" },
        { x: 360, y: 30, label: "'30", v: "₩1,000억" },
      ].map((pt) => (
        <g key={pt.label}>
          <circle cx={pt.x} cy={pt.y} r="5" fill="#0047AB" className="hover:r-3 transition-all" />
          {pt.v && <text x={pt.x} y={pt.y - 12} textAnchor="middle" className="text-xs font-bold" fill="#0047AB">{pt.v}</text>}
          <text x={pt.x} y={195} textAnchor="middle" className="text-xs" fill="#9ca3af">{pt.label}</text>
        </g>
      ))}
      {/* Y-axis label */}
      <text x="12" y="30" textAnchor="middle" className="text-[10px]" fill="#9ca3af" transform="rotate(-90, 12, 110)" dx="-80">Revenue</text>
    </svg>
  );
}

export default function Evidence() {
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
    <section id="evidence" ref={ref} className="relative bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-600">Clinical & Market</span>
          <h2 className="section-title mt-6">
            검증된 <span className="gradient-text">임상 근거</span>와 시장 기회
          </h2>
          <p className="section-subtitle mx-auto">
            10년 연구개발 + 대기업 협력 + 35개국 글로벌 채널 — 브레인에코만의 경쟁력.
          </p>
        </div>

        {/* Market Metrics */}
        <div className={`mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
              <div className={`text-2xl font-bold sm:text-3xl ${m.color}`}>{m.value}</div>
              <div className="mt-1 text-xs text-gray-400">{m.sub}</div>
              <div className="mt-1 text-sm font-medium text-gray-500">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Growth Chart + Advantages */}
        <div className="mx-auto mt-16 grid max-w-5xl items-center gap-10 lg:grid-cols-2">
          {/* Chart */}
          <div className={`rounded-2xl border border-gray-100 bg-white p-8 shadow-sm ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
               style={{ transitionDelay: "0.3s", transition: "all 0.7s" }}>
            <h3 className="mb-1 text-lg font-bold text-gray-900">2030 목표: 매출 ₩1,000억</h3>
            <p className="mb-6 text-sm text-gray-400">Global AI Voice Healthcare Top-5 플랫폼</p>
            <MarketChart />
          </div>

          {/* Competitive Advantages */}
          <div className={`space-y-4 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
               style={{ transitionDelay: "0.4s", transition: "all 0.7s" }}>
            {advantages.map((a) => (
              <div key={a.title} className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <a.icon size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-gray-900">{a.title}</h4>
                    <ChevronRight size={12} className="text-lime-500" />
                  </div>
                  <p className="mt-0.5 text-xs text-gray-500">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className={`mx-auto mt-16 max-w-4xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
             style={{ transitionDelay: "0.5s", transition: "all 0.7s" }}>
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
            핵심 <span className="gradient-text">마일스톤</span>
          </h3>
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-brand-300 via-accent-300 to-brand-300" />
            <div className="space-y-3">
              {milestones.map((m) => (
                <div key={m.yearLine1 + m.yearLine2} className="relative flex items-start gap-4">
                  <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow border-2 border-brand-200">
                    <span className="font-bold leading-tight text-brand-600 text-center" style={{fontSize: "9px"}}>
                      {m.yearLine1}<br />{m.yearLine2}
                    </span>
                  </div>
                  <div className="flex-1 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                    <p className="text-sm leading-relaxed text-gray-700">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
