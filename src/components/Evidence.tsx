"use client";

import { useEffect, useRef, useState } from "react";
import {
  Award, BookOpen, FlaskConical, TrendingUp,
  ScrollText, Stamp, Shield,
} from "lucide-react";

const sciFoundation = [
  ["BMJ Evidence-Based", "2025", "Speech Biomarkers Systematic Review", "6 DB Meta-Analysis — AI Voice Clinical Validation"],
  ["JMIR", "2025", "Clinical Decision Support · Speech Signal", "Deep Learning + ML Predictive Models"],
  ["Nature Sci. Rep.", "2024-25", "Parkinson's AUC 0.9125 · Laryngeal 85~97%", "SHAP XAI · Multi-Center Validation"],
  ["MDPI Bioengineering", "2025", "69 Studies (2020-2025) Meta-Review", "Voice AI Field Standard — Comprehensive Review"],
  ["Bridge2AI (NIH)", "2025-", "12,523 Voice Cases · Multi-Center", "World's Largest Voice Health Database"],
  ["PubMed Central", "2024", "ML/DL 16 Diseases (2015-2024)", "200+ Studies Foundation — AI Clinical Revolution"],
];

const kpis = [
  { value: "200+", label: "Global Studies", sub: "BMJ · Nature · JMIR" },
  { value: "$5.4B", label: "Global TAM 2035", sub: "Voice Biomarker Market" },
  { value: "3+4", label: "IP Portfolio", sub: "Patents + Trademarks" },
  { value: "6", label: "Certifications", sub: "Venture · Lab · ISO" },
];

const ipList = [
  { type: "특허출원", no: "No.10-2026-0085", title: "생체 신호 분석 기반 개인화 폐루프 뇌파 동조 시스템", yr: "2026.05", color: "#0047AB" },
  { type: "특허등록", no: "No.10-2298", title: "스마트폰을 이용한 목소리 질환 조기진단 시스템 및 방법", yr: "2026.05", color: "#0047AB" },
  { type: "특허등록", no: "No.10-1908", title: "머신러닝을 통해 환경변수 영향을 개선한 음성 질환 진단 시스템", yr: "2026.05", color: "#0047AB" },
  { type: "상표등록", no: "제40-2490호", title: "AI 플랫폼 사업 Class 42 소프트웨어 솔루션", yr: "2026.04", color: "#0047AB" },
  { type: "상표등록", no: "제40-2166호", title: "AI 플랫폼 사업 및 브랜드 지식재산권(IP)", yr: "2026.04", color: "#0047AB" },
];

const certs = [
  "벤처기업 인증 (혁신성장유형 · 2026.03)",
  "기업부설연구소 (연구개발전담부서 · 2025.02)",
  "기술혁신형 중소기업",
  "중소기업 확인",
  "창업기업 확인",
  "성실경영자 확인 (중소벤처기업부)",
];

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
    <section id="evidence" ref={ref} className="relative py-24"
      style={{ background: "#fafafa" }}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="inline-block rounded-full px-4 py-1.5 text-sm font-medium tracking-widest"
            style={{ background: "rgba(0,71,171,0.08)", color: "#0047AB", border: "1px solid #e2e8f0" }}>
            IP & Clinical Evidence
          </span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">Research Foundation</span> & IP Portfolio
          </h2>
          <p className="section-subtitle mx-auto">
            200+ Global Studies · 3 Patents · 4 Trademarks · 6 Certifications — scientific credibility and proprietary technology.
          </p>
        </div>

        {/* KPI Stats */}
        <div className={`mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}>
          {kpis.map((k) => (
            <div key={k.label} className="rounded-2xl p-5 text-center"
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}>
              <div className="text-2xl font-black sm:text-3xl" style={{ color: "#0047AB" }}>
                {k.value}
              </div>
              <div className="mt-1 text-xs" style={{ color: "#64748B" }}>{k.sub}</div>
              <div className="mt-0.5 text-sm font-medium" style={{ color: "#334155" }}>{k.label}</div>
            </div>
          ))}
        </div>

        {/* IP + Certs grid */}
        <div className={`mt-12 grid gap-6 lg:grid-cols-2 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`} style={{ transitionDelay: "0.25s", transition: "all 0.6s" }}>
          {/* IP Portfolio */}
          <div>
            <div className="mb-4 text-xs font-bold tracking-widest" style={{ color: "#0047AB" }}>
              // 특허·상표·IP 현황
            </div>
            <div className="space-y-3">
              {ipList.map((ip) => (
                <div key={ip.no} className="rounded-xl p-4"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    borderLeft: `3px solid ${ip.color}`,
                  }}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded px-2 py-0.5 text-[10px] font-bold"
                      style={{
                        background: `${ip.color}0D`,
                        border: `1px solid ${ip.color}33`,
                        color: ip.color,
                      }}>
                      {ip.type}
                    </span>
                    <span className="text-[11px]" style={{ color: "#94A3B8" }}>{ip.yr}</span>
                  </div>
                  <div className="text-sm font-bold mb-1" style={{ color: "#1e293b" }}>{ip.no}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{ip.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-4 text-xs font-bold tracking-widest" style={{ color: "#0047AB" }}>
              // 기업 현황
            </div>
            <div className="space-y-3">
              {certs.map((cert) => (
                <div key={cert} className="rounded-xl p-4 flex items-start gap-3"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}>
                  <Shield size={16} className="mt-0.5 shrink-0" style={{ color: "#0047AB" }} />
                  <div>
                    <div className="text-sm font-bold" style={{ color: "#334155" }}>✓ {cert}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SCI Papers Table */}
        <div className={`mt-12 rounded-2xl p-6 overflow-x-auto ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            transitionDelay: "0.35s",
            transition: "all 0.6s",
          }}>
          <div className="mb-4 text-xs font-bold tracking-widest" style={{ color: "#0047AB" }}>
            // Research Foundation — 200+ global studies validate voice AI biomarker science
          </div>
          <table className="w-full text-xs" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Journal / Source", "Year", "Key Findings", "Significance"].map((h) => (
                  <th key={h} className="px-3 py-2.5 text-left font-bold whitespace-nowrap"
                    style={{
                      color: "#64748B",
                      borderBottom: "1px solid #e2e8f0",
                    }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sciFoundation.map((row, i) => (
                <tr key={row[0] + row[1]}
                  style={{ background: i % 2 === 0 ? "transparent" : "rgba(0,71,171,0.04)" }}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 py-2.5"
                      style={{
                        color: j === 0 ? "#0047AB" : "#64748B",
                        borderBottom: "1px solid #e2e8f0",
                        fontWeight: j === 0 ? 700 : 400,
                      }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
