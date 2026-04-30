"use client";

import { useEffect, useRef, useState } from "react";
import {
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  Users,
  Microscope,
  HeartPulse,
} from "lucide-react";

const stats = [
  { label: "AI 분석 정확도", value: "98.5%", suffix: "" },
  { label: "누적 분석 데이터", value: "500K", suffix: "+건" },
  { label: "특허 보유", value: "12", suffix: "건" },
  { label: "연구진", value: "25", suffix: "명" },
];

const values = [
  {
    icon: BrainCircuit,
    title: "기술 혁신",
    desc: "최신 AI/ML 기술을 음성 분석에 접목하여 의료 현장에서 실용적인 솔루션을 제공합니다.",
  },
  {
    icon: HeartPulse,
    title: "헬스케어 집중",
    desc: "모든 기술 개발은 궁극적으로 인간의 건강과 삶의 질 향상에 기여합니다.",
  },
  {
    icon: ShieldCheck,
    title: "데이터 보안",
    desc: "의료 데이터 보안을 최우선으로 하여 ISO 27001 기반 보안 체계를 운영합니다.",
  },
  {
    icon: Microscope,
    title: "임상 검증",
    desc: "모든 기술은 병원 및 연구기관과의 협력을 통해 엄격한 임상 검증을 거칩니다.",
  },
];

export default function About() {
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
    <section id="about" ref={ref} className="relative bg-white py-24">
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-600">
            About BrainEcho
          </span>
          <h2 className="section-title mt-6">
            AI로 읽어내는
            <span className="gradient-text"> 건강의 언어</span>
          </h2>
          <p className="section-subtitle mx-auto">
            BrainEcho는 음성 속에 숨겨진 생체 신호를 AI로 분석하여,
            질병의 조기 발견과 건강 상태 모니터링을 가능하게 합니다.
          </p>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-bold text-brand-600 sm:text-4xl">
                {stat.value}
                <span className="text-lg text-accent-500">{stat.suffix}</span>
              </div>
              <div className="mt-2 text-sm font-medium text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Value Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <div
              key={item.title}
              className={`group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${300 + i * 100}ms`,
                transitionProperty: "all",
                transitionDuration: "600ms",
              }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-accent-50 text-brand-600 transition-colors group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white">
                <item.icon size={24} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
