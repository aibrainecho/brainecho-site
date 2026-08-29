"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { HeartPulse, BrainCircuit, FlaskConical, Landmark, X, Maximize2 } from "lucide-react";

const businessAreas = [
  {
    no: "01",
    code: "AX",
    icon: HeartPulse,
    title: "Healthcare AI",
    color: "#0047AB",
    summary: "음성·뇌파 바이오마커 기반 질환 위험도 스크리닝",
    points: [
      "음향학적 특징 기반 질환 위험도 스크리닝 엔진",
      "음성–뇌파 이중 바이오마커 융합 분석",
    ],
    tags: ["Voice Biomarker", "EEG Fusion", "Edge AI"],
    platforms: [
      { name: "Good Voice Care (GVC)", desc: "스마트폰 10초 발성 → 5개 질환 위험도 스크리닝" },
      { name: "Voice Biomarker Platform", desc: "88개 음향 파라미터 건강 분석" },
      { name: "EEG Brainwave Fusion", desc: "음성→뇌파 예측 듀얼 바이오마커" },
    ],
    market: "글로벌 음성 바이오마커 시장 $3.84B(2026) → $7.77B(2031), CAGR 15.15% (Mordor Intelligence)",
    status: "GVC App V3.0 — 2026 출시 예정",
  },
  {
    no: "02",
    code: "DX",
    icon: BrainCircuit,
    title: "Intelligence AI",
    color: "#00BFA5",
    summary: "하이브리드 RAG · 시계열 추론 SaaS 및 API",
    points: [
      "하이브리드 검색(RAG) 기반 분석 파이프라인 설계",
      "법률·시장·지식 도메인 SaaS 운영 및 API 제품화",
    ],
    tags: ["Hybrid RAG", "Time-Series", "Vector DB"],
    platforms: [
      { name: "Chronos AI Engine", desc: "시계열 추론 · What-if 시뮬레이션" },
      { name: "Legal Intelligence Engine", desc: "법령 5,584건 · 판례 15,928건 하이브리드 RAG" },
      { name: "SignalForge Engine", desc: "실시간 시장 신호 분석" },
      { name: "Confluence AI", desc: "기업 지식 RAG 엔진" },
    ],
    market: "Enterprise AI 시장 CAGR 37%+ (2026~2035, Gartner) — B2B SaaS · API 제품화 확대",
    status: "법률·시장·지식 도메인 SaaS — 운영 중",
  },
  {
    no: "03",
    code: "R&D",
    icon: FlaskConical,
    title: "도메인 범용 AI 추론 연구",
    color: "#7C3AED",
    summary: "이종 도메인 패턴학습 · 전이 표현 연구",
    points: [
      "이종 도메인 패턴학습 및 전이 가능 표현 추출",
      "금융·회계·인사·공공·품질 분석모델 연구개발",
    ],
    tags: ["Representation Learning", "Anomaly Detection"],
    platforms: [
      { name: "BAOS (회계·경영)", desc: "중소기업 AI 경영 OS — 분석모델" },
      { name: "BHCM (인사)", desc: "법령 파라미터 · 급여·채용 분석" },
      { name: "BSAP (금융)", desc: "시계열 신호 엔진 연구" },
      { name: "Project Factory", desc: "19 에이전트 SDLC 연구 파이프라인" },
    ],
    market: "도메인 특화 분석모델 — 19 에이전트 SDLC 파이프라인 기반 연구개발 체계 운영",
    status: "연구개발 진행 중",
  },
  {
    no: "04",
    code: "CONSULTING",
    icon: Landmark,
    title: "공공 · 정책",
    color: "#D97706",
    summary: "B2G 진입 전략 · 재정투자 타당성 자문",
    points: [
      "공공시장(B2G) 진입 전략 · 정책 자문",
      "재정투자 타당성 · 지방재정 투자심사",
    ],
    tags: ["Public Policy", "B2G", "Governance"],
    platforms: [
      { name: "Gov Project Platform", desc: "정부과제 수집 · AI 분석 · 맞춤 추천" },
      { name: "B2G 진입 전략", desc: "공공시장 진출 컨설팅" },
      { name: "재정 타당성 분석", desc: "투자심사 · 예산 편성 지원" },
    ],
    market: "공공 AI 시장 $19.7B(2025) → $115.3B(2035), CAGR 약 19% (Global Market Insights) · 국내 공공 AI 용역 연 2.8조원(2024, SPRi)",
    status: "정부과제 플랫폼 — 운영 중",
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  /* ── 섹션 가시성 (스크롤 리빌) ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  /* ── prefers-reduced-motion 감지 (BAOS-MOTION-001) ── */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* ── 확장 카드 열기/닫기 (BAOS-UX-001) ── */
  const openCard = useCallback((i: number) => {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    setActiveIndex(i);
  }, []);

  const closeCard = useCallback(() => {
    if (activeIndex === null) return;
    setIsClosing(true);
    window.setTimeout(() => {
      setActiveIndex(null);
      setIsClosing(false);
      lastFocusedRef.current?.focus();
    }, reducedMotion ? 0 : 200);
  }, [activeIndex, reducedMotion]);

  /* ── ESC 닫기 + 포커스 트랩 + 배경 스크롤 잠금 ── */
  useEffect(() => {
    if (activeIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { closeCard(); return; }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);

    // 열림 직후 닫기 버튼으로 포커스 이동
    const t = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    }, reducedMotion ? 0 : 250);

    return () => {
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex, closeCard, reducedMotion]);

  const active = activeIndex !== null ? businessAreas[activeIndex] : null;

  return (
    <section id="services" ref={ref} className="relative py-24"
      style={{ background: "#fafafa" }}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="inline-block rounded-full px-4 py-1.5 text-sm font-medium tracking-widest"
            style={{ background: "rgba(0,71,171,0.08)", color: "#0047AB", border: "1px solid #e2e8f0" }}>
            Business Areas
          </span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">사업분야</span> — 4 Business Areas
          </h2>
          <p className="section-subtitle mx-auto">
            AX(Healthcare AI) · DX(Intelligence AI) · R&D(도메인 범용 AI 연구) · CONSULTING(공공·정책) — 카드를 클릭하면 상세 기술사업과 시장 지표가 펼쳐집니다.
          </p>
        </div>

        {/* 미니멀 카드 그리드 */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {businessAreas.map((area, i) => (
            <button
              key={area.no}
              type="button"
              onClick={() => openCard(i)}
              aria-expanded={activeIndex === i}
              aria-controls={`area-dialog-${area.no}`}
              className={`group relative overflow-hidden rounded-2xl p-7 text-left transition-all duration-500 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                borderLeft: `4px solid ${area.color}`,
                transitionDelay: `${i * 120}ms`,
                transition: "all 0.6s",
                cursor: "pointer",
              }}
            >
              {/* 헤더 */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${area.color}18`, color: area.color }}>
                    {area.no}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold" style={{ color: "#1e293b" }}>{area.title}</h3>
                      <span className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                        style={{ background: `${area.color}18`, color: area.color, border: `1px solid ${area.color}33` }}>
                        {area.code}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 text-xs" style={{ color: "#64748B" }}>
                      <area.icon size={13} style={{ color: area.color }} />
                      {area.tags.join(" · ")}
                    </div>
                  </div>
                </div>
                <Maximize2 size={16} className="mt-1 shrink-0 transition-transform duration-300 group-hover:rotate-45"
                  style={{ color: area.color, opacity: 0.6 }} />
              </div>

              {/* 요약 */}
              <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{area.summary}</p>

              {/* 펼치기 힌트 */}
              <div className="mt-5 flex items-center gap-1.5 text-xs font-bold tracking-wide"
                style={{ color: area.color }}>
                자세히 보기
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── 확장 다이얼로그 (Open & Close) ── */}
      {active && (
        <div
          id={`area-dialog-${active.no}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`area-title-${active.no}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{
            background: "rgba(15,23,42,0.6)",
            backdropFilter: "blur(6px)",
            opacity: isClosing ? 0 : 1,
            transition: reducedMotion ? "none" : "opacity 0.25s ease-out",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) closeCard(); }}
        >
          <div
            ref={dialogRef}
            className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-10"
            style={{
              boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
              transform: isClosing ? "scale(0.96)" : "scale(1)",
              transition: reducedMotion ? "none" : "transform 0.3s ease-out",
              borderTop: `5px solid ${active.color}`,
            }}
          >
            {/* 닫기 */}
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black"
                  style={{ background: `${active.color}18`, color: active.color }}>
                  {active.no}
                </div>
                <div>
                  <h3 id={`area-title-${active.no}`} className="text-2xl font-black" style={{ color: "#1e293b" }}>
                    {active.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm" style={{ color: "#64748B" }}>
                    <active.icon size={14} style={{ color: active.color }} />
                    {active.tags.join(" · ")}
                  </div>
                </div>
              </div>
              <button
                type="button"
                data-autofocus
                onClick={closeCard}
                aria-label="닫기"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
              >
                <X size={18} />
              </button>
            </div>

            {/* 핵심 포인트 */}
            <div className="mb-6 space-y-2.5 rounded-2xl px-5 py-4"
              style={{ background: `${active.color}0D`, border: `1px solid ${active.color}2E` }}>
              {active.points.map((p) => (
                <div key={p} className="flex items-start gap-2.5 text-[15px] font-medium" style={{ color: "#334155" }}>
                  <span className="mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full" style={{ background: active.color }} />
                  {p}
                </div>
              ))}
            </div>

            {/* 플랫폼 상세 */}
            <div className="mb-6">
              <div className="mb-3 text-xs font-bold tracking-widest" style={{ color: active.color }}>
                // 관련 기술 · 시스템
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {active.platforms.map((pl) => (
                  <div key={pl.name} className="rounded-xl border border-gray-100 bg-gray-50/60 px-4 py-3">
                    <div className="text-sm font-bold" style={{ color: "#1e293b" }}>{pl.name}</div>
                    <div className="mt-0.5 text-xs leading-relaxed" style={{ color: "#64748B" }}>{pl.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 시장 지표 */}
            <div className="rounded-2xl px-5 py-4 text-sm leading-relaxed"
              style={{ background: `${active.color}0F`, border: `1px solid ${active.color}2E`, color: "#475569" }}>
              <span className="mr-1.5">📈</span>
              <span className="font-semibold" style={{ color: active.color }}>시장 지표: </span>
              {active.market}
            </div>

            {/* 상태 */}
            <div className="mt-4 flex items-center justify-between rounded-2xl px-5 py-3.5"
              style={{ background: `${active.color}14`, border: `1px solid ${active.color}33` }}>
              <span className="text-sm font-bold" style={{ color: active.color }}>📌 {active.status}</span>
              <button
                type="button"
                onClick={closeCard}
                className="rounded-xl px-4 py-2 text-sm font-bold text-white transition-all hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ background: active.color }}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
