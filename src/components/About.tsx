"use client";

import { useEffect, useRef, useState } from "react";
import {
  Building2, Award, Fingerprint, Users,
  Target, TrendingUp, ShieldCheck, Microscope,
} from "lucide-react";

const stats = [
  { label: "Founded", value: "2016", sub: "(Re-est. 2024)" },
  { label: "IP Assets", value: "4", sub: "Trademark + Patent" },
  { label: "R&D Dept", value: "인증", sub: "과학기술정보통신부" },
  { label: "Partners", value: "35", sub: "글로벌 채널" },
];

const values = [
  {
    icon: Microscope,
    title: "10년 도메인 전문성",
    desc: "2016년부터 AI 음성 바이오마커 연구개발, 중소벤처기업부 R&D 국책 과제 '성공' 판정. 국내 최초 모바일 음성 스크리닝 앱 GVC 개발.",
  },
  {
    icon: Target,
    title: "독자적 핵심 기술",
    desc: "잡음 환경 개선 DNN — 모바일-임상 Domain Gap 해소하는 독자 알고리즘. 경쟁사 모방 불가한 핵심 진입 장벽 보유.",
  },
  {
    icon: ShieldCheck,
    title: "임상 검증 완료",
    desc: "후두 질환 95%, 파킨슨 AUC 0.9125 등 SCI 국제 논문 기반 검증된 AI 성능. 설명 가능 AI(SHAP)로 의료 현장 투명성 확보.",
  },
  {
    icon: Building2,
    title: "대기업 협력",
    desc: "삼성전자 URecA 2.0 컨텐츠 개인화 플랫폼 참여, 예송음성센터 MOU(35개국), AWS 전략적 제휴. 검증된 기술력.",
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
    <section id="about" ref={ref} className="relative bg-white py-24">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-600">About BrainEcho</span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">AI 음성 바이오마커</span>의 선구자
          </h2>
          <p className="section-subtitle mx-auto">
            (주)브레인에코는 2016년부터 축적된 10년 이상의 음성 분석 도메인 전문성을 바탕으로,
            AI 기반 디지털 헬스케어 소프트웨어를 연구·개발하는 딥테크 스타트업입니다.
          </p>
        </div>

        {/* Company Info Cards */}
        <div className={`mx-auto mt-12 max-w-4xl rounded-2xl bg-gradient-to-br from-brand-50 to-white p-8 shadow-sm border border-brand-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
             style={{ transitionDelay: "0.15s", transition: "all 0.6s" }}>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-brand-800">주식회사 브레인에코</h3>
              <p className="mt-1 text-sm text-gray-500">BrainEcho Co., Ltd.</p>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><Users size={14} className="text-brand-400" /><span>대표이사 김인태</span></div>
                <div className="flex items-center gap-2"><Building2 size={14} className="text-brand-400" /><span>서울 송파구 송이로 83, 브리즈타워 6F</span></div>
                <div className="flex items-center gap-2"><Award size={14} className="text-brand-400" /><span>사업자등록 235-88-03066</span></div>
              </div>
            </div>
            <div className="border-l border-brand-100 pl-6">
              <h3 className="mb-3 text-sm font-bold text-brand-800">보유 인증</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "벤처기업 인증", "중소기업 확인",
                  "연구개발전담부서", "창업기업 확인",
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-medium text-brand-700 shadow-sm border border-brand-100">
                    <Fingerprint size={12} className="text-lime-500" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-brand-500 sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-gray-400">{s.sub}</div>
              <div className="mt-1 text-sm font-medium text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Value Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {values.map((item, i) => (
            <div key={item.title}
              className={`group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + i * 100}ms`, transition: "all 0.6s" }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition-colors group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                <item.icon size={24} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
