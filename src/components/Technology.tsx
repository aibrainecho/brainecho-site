"use client";

import { useEffect, useRef, useState } from "react";
import {
  AudioWaveform, CircuitBoard, Cpu, Radio,
  AppWindow, Microscope, Brain, ShieldPlus,
} from "lucide-react";

type Module = {
  icon: typeof Brain;
  step: string;
  title: string;
  desc: string;
  tech: string[];
};

const modules: Module[] = [
  {
    icon: AudioWaveform,
    step: "01",
    title: "음성 특징 추출",
    desc: "30+ 음향 파라미터를 실시간으로 추출하여 임상 수준의 음성 프로파일을 생성합니다.",
    tech: ["Jitter · Shimmer · HNR", "MFCC 1~40", "F0 · F1~F4 Formant", "스펙트럼 기울기"],
  },
  {
    icon: CircuitBoard,
    step: "02",
    title: "잡음 환경 개선 DNN ★",
    desc: "모바일 주변잡음·코딩잡음·통신잡음 환경을 병원 장비(MDVP) 수준으로 보정하는 독자 기술입니다.",
    tech: ["Non-linear DNN Mapping", "Domain Gap 해소", "실시간 노이즈 캔슬링", "경쟁사 모방 불가"],
  },
  {
    icon: Brain,
    step: "03",
    title: "자동 진단 분류 DNN",
    desc: "CNN+RNN+Transformer 하이브리드 모델로 4개 질환군을 동시에 분류·진단합니다.",
    tech: ["후두암 · 성대마비", "파킨슨병 (AUC 0.9125)", "우울증 (71.3% 민감도)", "SHAP XAI 근거 제시"],
  },
  {
    icon: AppWindow,
    step: "04",
    title: "모바일 통합 시스템",
    desc: "iOS/Android 앱 + AWS 클라우드 + 의료기관 대시보드로 이어지는 엔드투엔드 플랫폼입니다.",
    tech: ["GVC App (5분 스크리닝)", "AWS 글로벌 분산 서버", "REST API B2B 연동", "Edge AI 오프라인 지원"],
  },
];

const accuracyData = [
  { label: "후두 질환", value: 95, color: "bg-brand-500" },
  { label: "후두암", value: 91, color: "bg-brand-400" },
  { label: "파킨슨 (AUC)", value: 91.1, color: "bg-accent-500" },
  { label: "우울증 (민감도)", value: 71.3, color: "bg-accent-400" },
];

function AccuracyChart() {
  return (
    <div className="space-y-4">
      {accuracyData.map((d) => (
        <div key={d.label}>
          <div className="mb-1 flex justify-between text-sm">
            <span className="font-medium text-gray-700">{d.label}</span>
            <span className="font-bold text-brand-600">{d.value}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              className={`h-full rounded-full ${d.color} transition-all duration-1000`}
              style={{ width: `${d.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Technology() {
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
    <section id="technology" ref={ref} className="relative bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-600">Core Technology</span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">4-Module AI</span> Pipeline
          </h2>
          <p className="section-subtitle mx-auto">
            스마트폰 마이크에서 진단 결과까지 — 브레인에코의 독자적인 엔드투엔드 AI 아키텍처.
          </p>
        </div>

        {/* Pipeline Flow */}
        <div className="relative mt-16">
          {/* Connecting Arrow (visible on lg) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-200 via-accent-200 to-brand-200 lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {modules.map((mod, i) => (
              <div
                key={mod.step}
                className={`relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 150}ms`, transition: "all 0.6s" }}
              >
                {/* Step Number */}
                <div className="absolute -top-3 left-4 flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white shadow-md">
                  {mod.step}
                </div>

                <div className="mb-4 mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-accent-50 text-brand-600">
                  <mod.icon size={24} />
                </div>

                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {mod.title}
                  {mod.step === "02" && <span className="ml-1 text-xs text-lime-600">★ 핵심</span>}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">{mod.desc}</p>

                <div className="border-t border-gray-100 pt-3">
                  <p className="mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Tech Stack</p>
                  <ul className="space-y-1">
                    {mod.tech.map((t) => (
                      <li key={t} className="flex items-center gap-1.5 text-xs text-gray-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Accuracy Section */}
        <div className={`mx-auto mt-20 max-w-5xl rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:p-10 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
             style={{ transitionDelay: "0.6s", transition: "all 0.7s" }}>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                임상 검증된 AI 성능
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                SCI 국제 논문 기반 검증. TTA 공인 시험 기준 목표: 자동 검사 성공률 95%, 시스템 반응속도 2.0초 이내.
                설명 가능 AI(SHAP)로 모든 진단 결과에 임상적 근거를 제시합니다.
              </p>
              <div className="flex flex-wrap gap-3">
                {["TTA 인증 목표", "SHAP XAI", "SCI 논문", "FDA 510(k) 준비"].map((tag) => (
                  <span key={tag} className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <AccuracyChart />
          </div>
        </div>
      </div>
    </section>
  );
}
