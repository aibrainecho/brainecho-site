"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mic,
  Brain,
  Activity,
  Shield,
  Smartphone,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: Mic,
    title: "음성 바이오마커 분석",
    desc: "딥러닝 기반 음성 분석으로 신경퇴행성 질환, 호흡기 질환, 정신 건강 상태를 비침습적으로 진단합니다.",
    features: [
      "파킨슨병 조기 진단",
      "호흡기 질환 분류",
      "우울증 음성 마커",
    ],
  },
  {
    icon: Brain,
    title: "AI 진단 보조 시스템",
    desc: "의료진의 진단 정확도를 높이는 AI 기반 의사결정 지원 시스템을 제공합니다.",
    features: [
      "실시간 음성 분석",
      "진단 리스크 스코어링",
      "임상 의사결정 지원",
    ],
  },
  {
    icon: Activity,
    title: "생체신호 분석 플랫폼",
    desc: "음성 외 다양한 생체신호를 통합 분석하여 종합적인 건강 프로파일을 제공합니다.",
    features: [
      "멀티모달 데이터 융합",
      "실시간 모니터링",
      "개인화 건강 인사이트",
    ],
  },
  {
    icon: Smartphone,
    title: "디지털 헬스케어 솔루션",
    desc: "모바일 및 웹 기반 건강 관리 솔루션으로 일상 속 건강 모니터링을 실현합니다.",
    features: [
      "모바일 앱 통합",
      "웨어러블 연동",
      "원격 환자 모니터링",
    ],
  },
  {
    icon: Shield,
    title: "의료 데이터 보안",
    desc: "의료 정보 보호를 위한 엔드투엔드 암호화 및 컴플라이언스 솔루션을 제공합니다.",
    features: [
      "ISO 27001/27701",
      "HIPAA 컴플라이언스",
      "데이터 익명화 처리",
    ],
  },
  {
    icon: Stethoscope,
    title: "임상 연구 지원",
    desc: "병원 및 연구기관의 임상 연구를 위한 AI 분석 도구와 데이터 파이프라인을 구축합니다.",
    features: [
      "임상 데이터 수집/분석",
      "AI 모델 개발/검증",
      "연구 논문 공동 발표",
    ],
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-gradient-to-b from-gray-50 to-white py-24"
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-600">
            Services
          </span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">AI 헬스케어</span> 솔루션
          </h2>
          <p className="section-subtitle mx-auto">
            음성 분석부터 임상 연구 지원까지, BrainEcho의 종합 AI 헬스케어
            솔루션을 만나보세요.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
                transitionProperty: "all",
                transitionDuration: "600ms",
              }}
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-accent-50 text-brand-600 transition-all duration-300 group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white group-hover:shadow-lg">
                <service.icon size={28} />
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                {service.desc}
              </p>

              {/* Feature List */}
              <ul className="space-y-2 border-t border-gray-100 pt-4">
                {service.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
