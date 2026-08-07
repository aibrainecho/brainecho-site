"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Heart, Brain, Users } from "lucide-react";

const pillars = [
  { icon: Heart, label: "헬스케어 AI", color: "#0047AB", count: 3 },
  { icon: Brain, label: "인텔리전스 AI", color: "#00BFA5", count: 4 },
  { icon: Users, label: "관계·문화 AI", color: "#FF6B9D", count: 2 },
];

const stats = [
  { value: "9", label: "AI 플랫폼·엔진", color: "#0047AB" },
  { value: "200+", label: "Global Studies", color: "#0047AB" },
  { value: "7", label: "IP (특허·상표)", color: "#0047AB" },
  { value: "35", label: "MOU 연계 35개국", color: "#0047AB" },
];

function WaveBars() {
  const bars = Array.from({ length: 38 }, (_, i) => ({
    h: 22 + Math.sin(i * 0.7) * 20 + Math.sin(i * 0.25) * 12,
    op: 0.35 + Math.abs(Math.sin(i * 0.5)) * 0.5,
  }));
  return (
    <div className="flex items-center gap-[3px]">
      {bars.map((b, i) => (
        <div
          key={i}
          className="w-[4px] rounded-sm"
          style={{
            height: b.h,
            opacity: b.op,
            background: "#0047AB",
            animation: `waveBar ${1.5 + Math.sin(i * 0.5) * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="absolute -left-32 -top-32 h-[600px] w-[600px] animate-float rounded-full opacity-[0.08] blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(0,71,171,0.10) 0%, transparent 70%)" }}
        />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] animate-float rounded-full opacity-[0.04] blur-[120px] [animation-delay:-3s]"
          style={{ background: "radial-gradient(circle, rgba(0,71,171,0.06) 0%, transparent 70%)" }}
        />
      </div>

      {/* Main content starts */}

      <div className="relative z-10 section-container text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          {/* Company tag */}
          <div className="mb-6" />

          {/* Pillar Badges */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm"
                style={{
                  background: "rgba(0,71,171,0.08)",
                  border: `1px solid ${p.color}44`,
                  color: p.color,
                }}
              >
                <p.icon size={16} />
                <span className="font-bold">{p.label}</span>
                <span style={{ color: "#94A3B8" }}>{p.count}개</span>
              </div>
            ))}
          </div>

          {/* Main Title */}
          <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ color: "#1e293b" }}>
            인공지능으로 연결하는
            <br />
            <span style={{ color: "#0047AB" }}>건강,</span>{" "}
            <span style={{ color: "#4A90D9" }}>지식,</span>{" "}
            <span style={{ color: "#FF6B9D" }}>관계</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "#64748B" }}>
            AI 음성 건강진단 · 뇌파-음성 융합분석 · 시장 예측·분석
            <br />
            법률 리스크 대응 · 가족 관계 플랫폼 · 문화 AI 분석
            <br />
            <span style={{ color: "#475569" }}>9개 AI 플랫폼을 운영하는 멀티도메인 AI 기술 기업</span>
          </p>

          {/* Wave Animation */}
          <div className="mx-auto mt-8 flex justify-center">
            <WaveBars />
          </div>

          {/* KPI Stats */}
          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-8"
            style={{ borderTop: "1px solid #e2e8f0", paddingTop: "2rem" }}>
            {stats.map((s) => (
              <div key={s.label} className="text-center min-w-[100px]">
                <div className="text-3xl font-black"
                  style={{ color: "#0047AB" }}>
                  {s.value}
                </div>
                <div className="text-sm font-medium" style={{ color: "#64748B" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => {
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary text-base"
            >
              플랫폼 살펴보기 <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDown size={20} style={{ color: "rgba(100,116,139,0.5)" }} />
      </div>
    </section>
  );
}
