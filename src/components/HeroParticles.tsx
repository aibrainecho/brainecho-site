"use client";

import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
// HeroParticles — 경량 파티클 배경 (Canvas 2D, 의존성 0)
// BAOS-MOTION-001: prefers-reduced-motion 사용자 → 정적 프레임 1장만
// BAOS-MOTION-002: 외부 라이브러리 0 (번들 영향 최소)
// BAOS-MOTION-003: next/dynamic(ssr:false)으로 지연 로딩 → LCP 영향 0
// 라이트 브랜드 유지: 흰 배경 + 블루(#0047AB) 계열 은은한 노드
// ─────────────────────────────────────────────────────────────

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
}

const BRAND_BLUE = "0, 71, 171"; // #0047AB

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let raf = 0;
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = Math.max(1, w * dpr);
      canvas.height = Math.max(1, h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // 면적 기반 밀도 — 모바일에서 자동 감소
      const count = Math.min(55, Math.max(20, Math.floor((w * h) / 24000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1 + Math.random() * 2.2,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      // 1) 뉴런 연결선 (가까운 노드끼리만)
      const maxDist = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist * maxDist) {
            const alpha = (1 - Math.sqrt(d2) / maxDist) * 0.14;
            ctx.strokeStyle = `rgba(${BRAND_BLUE}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // 2) 노드 (은은한 호흡 펄스)
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        else if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        else if (p.y > h + 20) p.y = -20;

        const pulse = 0.5 + 0.5 * Math.sin(t / 1100 + p.phase);
        ctx.fillStyle = `rgba(${BRAND_BLUE}, ${(0.10 + 0.20 * pulse).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.8 + pulse * 0.7), 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduced) {
      draw(0); // 모션 비활성 — 정적 프레임 1장
    } else {
      raf = requestAnimationFrame(loop);
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
