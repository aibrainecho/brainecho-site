"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Cpu, Cloud, Lock } from "lucide-react";

function EcosystemDiagram() {
  return (
    <svg viewBox="0 0 900 520" className="w-full max-w-4xl mx-auto" role="img" aria-label="BrainEcho AI Ecosystem Architecture">
      <defs>
        <linearGradient id="gh" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#0047AB" /><stop offset="100%" stopColor="#2563EB" /></linearGradient>
        <linearGradient id="gi" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#0891B2" /><stop offset="100%" stopColor="#00BFA5" /></linearGradient>
        <linearGradient id="gc" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#DB2777" /><stop offset="100%" stopColor="#EC4899" /></linearGradient>
        <linearGradient id="gs" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#F59E0B" /><stop offset="100%" stopColor="#D97706" /></linearGradient>
        <linearGradient id="gcore" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#1E3A8A" /><stop offset="50%" stopColor="#2563EB" /><stop offset="100%" stopColor="#1E3A8A" /></linearGradient>
        <filter id="sd"><feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.06" /></filter>
        <filter id="sdt"><feDropShadow dx="0" dy="4" stdDeviation="5" floodOpacity="0.10" /></filter>
      </defs>

      {/* Background */}
      <rect x="0" y="0" width="900" height="520" rx="16" fill="#F8FAFC" />

      {/* Title */}
      <text x="450" y="32" textAnchor="middle" fontSize="16" fill="#1E293B" fontWeight="900">BrainEcho AI Ecosystem — Integrated Multi-Domain Architecture</text>

      {/* ═══ LAYER 0: CORE BAR (drawn first = behind) ═══ */}
      <g filter="url(#sdt)">
        <rect x="30" y="52" width="840" height="44" rx="10" fill="url(#gcore)" />
        <text x="450" y="80" textAnchor="middle" fontSize="15" fill="white" fontWeight="900" letterSpacing="3">BRAINECHO AI CORE — 9 PLATFORMS · 4 DOMAINS · UNIFIED INFRASTRUCTURE</text>
      </g>

      {/* ═══ CONNECTION LINES (behind nodes, no overlap) ═══ */}
      {/* Vertical drops from core to each column */}
      {[155, 380, 608, 833].map((x) => (
        <line key={`v-${x}`} x1={x} y1="96" x2={x} y2="118" stroke="#94A3B8" strokeWidth="2" />
      ))}
      {/* Horizontal data flow between columns */}
      <line x1="250" y1="310" x2="350" y2="310" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="6,3" />
      <line x1="500" y1="310" x2="600" y2="310" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="6,3" />
      {/* Bottom integration line */}
      <line x1="30" y1="440" x2="870" y2="440" stroke="#CBD5E1" strokeWidth="2" />

      {/* ═══ COLUMN 1: Healthcare AI ═══ */}
      <g filter="url(#sdt)">
        <rect x="30" y="118" width="250" height="320" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="30" y="118" width="250" height="48" rx="14" fill="url(#gh)" />
        <text x="155" y="148" textAnchor="middle" fontSize="15" fill="white" fontWeight="900">🧬 Healthcare AI</text>
      </g>
      {/* Platform cards */}
      {[
        ["Good Voice Care", "Voice Screening · 5 Diseases", "#DBEAFE", "#1E40AF"],
        ["Voice Biomarker", "88-Parameter Analysis", "#EFF6FF", "#3B82F6"],
        ["EEG Brainwave Fusion", "Voice-EEG Dual Biomarker", "#EFF6FF", "#3B82F6"],
      ].map(([t, s, bg, fg], i) => (
        <g key={t} filter="url(#sd)">
          <rect x="42" y={176 + i * 56} width="226" height="48" rx="8" fill={bg} stroke="#DBEAFE" strokeWidth="1" />
          <text x="155" y={196 + i * 56} textAnchor="middle" fontSize="13" fill={fg} fontWeight="700">{t}</text>
          <text x="155" y={214 + i * 56} textAnchor="middle" fontSize="10" fill="#64748B">{s}</text>
        </g>
      ))}
      {/* Stats foot */}
      <rect x="42" y="346" width="226" height="44" rx="8" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1" />
      <text x="155" y="363" textAnchor="middle" fontSize="11" fill="#0369A1" fontWeight="700">SCI 9+ · Nature · Bridge2AI 12K</text>
      <text x="155" y="379" textAnchor="middle" fontSize="10" fill="#0284C7">Global TAM $5.4B (2035)</text>

      {/* ═══ COLUMN 2: Intelligence AI ═══ */}
      <g filter="url(#sdt)">
        <rect x="300" y="118" width="250" height="320" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="300" y="118" width="250" height="48" rx="14" fill="url(#gi)" />
        <text x="425" y="148" textAnchor="middle" fontSize="15" fill="white" fontWeight="900">🧠 Intelligence AI</text>
      </g>
      {[
        ["Chronos Engine", "Time-Series Inference", "#F0FDFA", "#0F766E"],
        ["Legal Intelligence", "RAG Legal Analysis", "#F0FDFA", "#0F766E"],
        ["SignalForge", "Market Signal Platform", "#F0FDFA", "#0F766E"],
        ["Confluence AI", "Enterprise Knowledge", "#F0FDFA", "#0F766E"],
      ].map(([t, s, bg, fg], i) => (
        <g key={t} filter="url(#sd)">
          <rect x="312" y={176 + i * 48} width="226" height="42" rx="8" fill={bg} stroke="#A7F3D0" strokeWidth="1" />
          <text x="425" y={194 + i * 48} textAnchor="middle" fontSize="13" fill={fg} fontWeight="700">{t}</text>
          <text x="425" y={210 + i * 48} textAnchor="middle" fontSize="10" fill="#64748B">{s}</text>
        </g>
      ))}
      <rect x="312" y="346" width="226" height="44" rx="8" fill="#F0FDFA" stroke="#A7F3D0" strokeWidth="1" />
      <text x="425" y="363" textAnchor="middle" fontSize="11" fill="#0F766E" fontWeight="700">Enterprise AI ↗ CAGR 37%+</text>
      <text x="425" y="379" textAnchor="middle" fontSize="10" fill="#14B8A6">Domain-Specialized Intelligence</text>

      {/* ═══ COLUMN 3: Culture AI ═══ */}
      <g filter="url(#sdt)">
        <rect x="570" y="118" width="170" height="320" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="570" y="118" width="170" height="48" rx="14" fill="url(#gc)" />
        <text x="655" y="148" textAnchor="middle" fontSize="15" fill="white" fontWeight="900">🤝 Culture AI</text>
      </g>
      {[
        ["LinkUs", "Family OS · Kinship", "#FDF2F8", "#9D174D"],
        ["NeoSAJU", "AI Astrology", "#FDF2F8", "#9D174D"],
      ].map(([t, s, bg, fg], i) => (
        <g key={t} filter="url(#sd)">
          <rect x="582" y={176 + i * 56} width="146" height="48" rx="8" fill={bg} stroke="#FBCFE8" strokeWidth="1" />
          <text x="655" y={196 + i * 56} textAnchor="middle" fontSize="13" fill={fg} fontWeight="700">{t}</text>
          <text x="655" y={214 + i * 56} textAnchor="middle" fontSize="10" fill="#64748B">{s}</text>
        </g>
      ))}
      <rect x="582" y="346" width="146" height="44" rx="8" fill="#FDF2F8" stroke="#FBCFE8" strokeWidth="1" />
      <text x="655" y="363" textAnchor="middle" fontSize="11" fill="#9D174D" fontWeight="700">Korean AI · K-Culture</text>
      <text x="655" y="379" textAnchor="middle" fontSize="10" fill="#BE185D">Global Cultural AI</text>

      {/* ═══ COLUMN 4: Infrastructure ═══ */}
      <g filter="url(#sdt)">
        <rect x="758" y="118" width="112" height="320" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="758" y="118" width="112" height="48" rx="14" fill="url(#gs)" />
        <text x="814" y="140" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">🛡️</text>
        <text x="814" y="156" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">Infrastructure</text>
      </g>
      {[
        ["LLM Cluster", "10 High-End"],
        ["Vector+RDB", "Hybrid Store"],
        ["E2E Crypto", "AES Standard"],
        ["Cloud Native", "Auto-Recovery"],
      ].map(([t, s], i) => (
        <g key={t} filter="url(#sd)">
          <rect x="764" y={176 + i * 43} width="100" height="38" rx="8" fill="#FFF7ED" stroke="#FDE68A" strokeWidth="1" />
          <text x="814" y={194 + i * 43} textAnchor="middle" fontSize="11" fill="#92400E" fontWeight="700">{t}</text>
          <text x="814" y={208 + i * 43} textAnchor="middle" fontSize="9" fill="#B45309">{s}</text>
        </g>
      ))}
      <rect x="764" y="346" width="100" height="44" rx="8" fill="#FFF7ED" stroke="#FDE68A" strokeWidth="1" />
      <text x="814" y="364" textAnchor="middle" fontSize="10" fill="#92400E" fontWeight="700">ISO 27001</text>
      <text x="814" y="380" textAnchor="middle" fontSize="9" fill="#B45309">6 Certifications</text>

      {/* ═══ BOTTOM LAYER ═══ */}
      <rect x="30" y="452" width="840" height="56" rx="10" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
      <text x="450" y="472" textAnchor="middle" fontSize="12" fill="#1E293B" fontWeight="700">Cloudflare WAF + Global CDN · Docker Container Orchestration · Zero-Downtime Auto-Recovery · Multi-Cloud Deployment · Real-Time Data Sync</text>
      <text x="450" y="494" textAnchor="middle" fontSize="10" fill="#64748B">End-to-End Encryption · ISO 27001 ISMS · SSOT Key Management · Continuous Monitoring & Auditing</text>
    </svg>
  );
}

const capabilities = [
  {
    icon: Cpu,
    title: "AI Inference Engine",
    desc: "고성능 대규모 언어모델 클러스터 기반 10종 모델 운영. 멀티 LLM 지능형 폴백 체계로 99.9% 가용성을 보장하며, 딥러닝 추론 파이프라인과 RAG 지식 검색을 결합하여 도메인별 최적화된 AI 분석을 제공합니다.",
    items: ["10+ LLM Models", "Smart Fallback", "Deep Learning Pipeline", "RAG Knowledge Retrieval"],
  },
  {
    icon: Cloud,
    title: "Data Infrastructure",
    desc: "벡터 데이터베이스와 관계형 데이터베이스를 통합한 하이브리드 저장소 아키텍처. 분산 캐시 레이어로 초저지연 응답을 구현하며, 실시간 증분 데이터 동기화와 객체 스토리지 연동을 제공합니다.",
    items: ["Vector + RDB Integration", "Distributed Cache", "Object Storage", "Real-time Sync"],
  },
  {
    icon: Shield,
    title: "Cloud Operations",
    desc: "컨테이너 기반 마이크로서비스 아키텍처로 9개 플랫폼을 표준화하여 배포합니다. 멀티 클라우드 환경에서 무중단 자동 복구, 모니터링, 장애 격리 체계를 갖추고 있으며 6종 기업 인증을 보유하고 있습니다.",
    items: ["Container Orchestration", "Auto-Recovery", "Monitoring + Alerts", "6 Certifications"],
  },
  {
    icon: Lock,
    title: "Security Architecture",
    desc: "종단간 데이터 암호화, 토큰 기반 접근 제어, SSOT 키 관리 체계 등 ISO 27001 표준을 준수하는 통합 보안 아키텍처를 전 서비스에 적용합니다. Cloudflare WAF + 글로벌 CDN으로 네트워크 수준 보호를 제공합니다.",
    items: ["End-to-End Encryption", "Token-Based Auth", "SSOT Key Management", "WAF + Global CDN"],
  },
];

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
    <section id="technology" ref={ref} className="relative bg-gray-50 py-24">
      <div className="section-container">
        <div className={`text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-600">Tech Architecture</span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">AI Ecosystem</span> Architecture
          </h2>
          <p className="section-subtitle mx-auto">
            Centralized AI Core orchestrating 9 specialized platforms across 4 satellite domains — single architecture, infinite scalability.
          </p>
        </div>

        {/* Ecosystem Diagram */}
        <div className={`mx-auto mt-14 max-w-5xl rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`} style={{ transitionDelay: "0.15s", transition: "all 0.7s" }}>
          <EcosystemDiagram />
        </div>

        {/* Capability Cards */}
        <div className={`mt-12 grid gap-6 md:grid-cols-2 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`} style={{ transitionDelay: "0.3s", transition: "all 0.7s" }}>
          {capabilities.map((cap, i) => (
            <div key={cap.title}
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${400 + i * 100}ms`, transition: "all 0.6s" }}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <cap.icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{cap.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">{cap.desc}</p>
              <div className="grid grid-cols-2 gap-1.5">
                {cap.items.map((item) => (
                  <div key={item} className="flex items-center gap-1.5 rounded-lg bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
