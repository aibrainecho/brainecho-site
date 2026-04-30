"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Sparkles, Shield, Mic, Activity } from "lucide-react";

function WaveformSVG() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.08]"
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="wave-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4A90D9" />
          <stop offset="50%" stopColor="#7FFF00" />
          <stop offset="100%" stopColor="#4A90D9" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((row) => (
        <g key={row} opacity={0.15 + row * 0.1}>
          {Array.from({ length: 40 }, (_, i) => {
            const x = 30 + i * 30;
            const phase = i * 0.3 + row * 0.5;
            const h = 20 + Math.sin(phase) * 15;
            return (
              <rect
                key={i}
                x={x}
                y={200 - h / 2 + (row - 3.5) * 40}
                width="6"
                height={h}
                rx="3"
                fill="url(#wave-grad)"
                className="origin-center"
                style={{
                  animation: `wave ${1.5 + Math.sin(phase) * 0.5}s ease-in-out infinite`,
                  animationDelay: `${phase * 0.2}s`,
                }}
              />
            );
          })}
        </g>
      ))}
    </svg>
  );
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Orbs */}
        <div className="absolute -left-32 -top-32 h-[600px] w-[600px] animate-float rounded-full bg-gradient-to-br from-brand-500/20 to-accent-400/10 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] animate-float rounded-full bg-gradient-to-tr from-lime-400/10 to-brand-500/20 blur-[120px] [animation-delay:-3s]" />
        {/* Waveform */}
        <WaveformSVG />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Badges */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-sm">
              <Sparkles size={12} className="text-lime-400" />
              AI Voice Biomarker
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-sm">
              <Shield size={12} className="text-lime-400" />
              Digital Healthcare
            </span>
          </div>

          {/* Tagline */}
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-lime-400/80 uppercase">
            Connecting Neural Intelligence to Digital Reality
          </p>

          {/* Main Title */}
          <h1 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            목소리로 질병을
            <br />
            <span className="gradient-text">먼저 발견한다</span>
          </h1>
          <p className="text-balance mt-3 text-lg text-white/40 sm:text-xl">
            AI가 의료 접근성의 격차를 닫습니다
          </p>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            30초 발성으로 30+ 음향 파라미터를 분석,
            <br className="hidden sm:block" />
            5분 만에 후두암·파킨슨·우울증 스크리닝 결과를 제공합니다.
          </p>

          {/* Stats Row */}
          <div className="mx-auto mt-10 flex max-w-lg flex-wrap justify-center gap-8 border-t border-white/10 pt-8">
            {[
              { label: "AI 정확도", value: "95%", color: "text-lime-400" },
              { label: "분석 시간", value: "<5분", color: "text-accent-300" },
              { label: "커버 질환", value: "4종", color: "text-accent-300" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                <div className="mt-1 text-xs text-white/40">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#technology"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#technology")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary text-base"
            >
              <Mic size={18} />
              기술 살펴보기
              <ChevronDown size={16} />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              <Activity size={18} />
              문의하기
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDown size={20} className="text-white/30" />
      </div>
    </section>
  );
}
