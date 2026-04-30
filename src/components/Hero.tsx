"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

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
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient Orbs */}
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] animate-float rounded-full bg-gradient-to-br from-accent-500/30 to-brand-600/20 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] animate-float rounded-full bg-gradient-to-br from-brand-600/30 to-accent-500/20 blur-[100px] [animation-delay:-3s]" />

        {/* Brain Wave Lines */}
        <svg
          className="absolute bottom-0 left-0 right-0 h-64 w-full text-white/5"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,213.3C672,224,768,192,864,165.3C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm">
            <Sparkles size={14} className="text-accent-400" />
            AI 기반 음성 분석 기술 기업
          </div>

          {/* Main Title */}
          <h1 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            목소리 속에 담긴
            <br />
            <span className="gradient-text">건강의 신호</span>를 읽다
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
            BrainEcho는 AI 기반 음성 및 생체신호 분석 기술로
            <br className="hidden sm:block" />
            헬스케어와 웰니스의 새로운 기준을 제시합니다.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary text-base"
            >
              서비스 살펴보기
              <ChevronDown size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline border-white/30 text-base text-white hover:bg-white/10 hover:text-white"
            >
              문의하기
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-white/40" />
      </div>
    </section>
  );
}
