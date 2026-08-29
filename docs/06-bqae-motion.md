# BQAE 모션·UX 규칙군 (BAOS-MOTION-001~003 / BAOS-UX-001~003)

> 확정일: 2026-08-30 (v4.1.0 리뉴얼과 함께 도입)
> 기존 BAOS-HTML-001~005(HTML/DOM 검증)와 함께 적용되는 신규 규칙군.
> 모든 인터랙티브 고도화(확장형 카드 · 레이어 구조 · 오프닝 모션 등)에 적용한다.

---

## BAOS-MOTION-001 — 모션 성능 & 접근성 (critical)

- 모든 애니메이션은 **transform / opacity 만 사용** (layout 속성 애니메이션 금지: top/left/width/height/margin)
- **60fps 유지** 원칙 — 복잡한 연출은 GPU 가속 속성(translate3d, scale) 사용
- `prefers-reduced-motion: reduce` 사용자에게는 **모션 완전 비활성화**
  - CSS: `@media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }`
  - JS: `window.matchMedia("(prefers-reduced-motion: reduce)")` 감지 → 트랜지션 시간 0ms 처리
- **검증**: Playwright에서 `reducedMotion: "reduce"` 에뮬레이션 → 요소가 최종 상태로 즉시 렌더링되는지 확인

## BAOS-MOTION-002 — 번들 영향 보고 (high)

- 새 애니메이션/시각화 라이브러리(Three.js, GSAP, Lottie 등) 추가 시 **gzip 크기 diff를 CHANGELOG에 의무 기록**
- 기준: 페이지 전체 JS **gzip < 200KB 유지 권장** (정적 export 환경)
- 라이브러리 없이 CSS/Canvas로 구현 가능한 경우 **의존성 0 우선** (GSAP 대신 CSS transition 권장)
- **검증**: `next build` 후 `.next/static/chunks` 총 용량(gzip) 측정, 이전 버전 대비 diff 기록

## BAOS-MOTION-003 — 지연 로딩 (high)

- 히어로/오프닝 등 **비필수 애니메이션은 LCP 이후 로드**
  - `next/dynamic` + `ssr: false` 또는 IntersectionObserver 기반 마운트
- 첫 화면(LCP)에 영향 0 확인
- **검증**: Playwright `performance.getEntriesByType("largest-contentful-paint")` 측정, 애니메이션 추가 전후 diff < 100ms

## BAOS-UX-001 — 확장 카드(Expand & Close) 접근성 (critical)

- `role="dialog"` + `aria-modal="true"` + `aria-labelledby` (제목 연결)
- 트리거(카드)에 `aria-expanded` + `aria-controls`
- **ESC 키로 닫기** 필수
- **포커스 트랩**: 열림 시 닫기 버튼으로 포커스 이동, Tab 순환이 다이얼로그 내부에 머무름
- **포커스 복원**: 닫힘 시 포커스를 원래 카드로 복원
- 배경 스크롤 잠금 (body overflow hidden)
- **검증**: Playwright 키보드만으로 열기 → Tab 순환 → ESC 닫기 → 포커스 복원 확인

## BAOS-UX-002 — 모션 타이밍 (high)

- 확장(Open): 250~350ms, ease-out
- 축소(Close): 150~250ms, ease-in (닫기는 더 빠르게)
- 카드 그리드 → 전체 화면 확장 시 backdrop 흐림/어둡기 처리 (bg-black/60 + backdrop-blur)
- **검증**: transition-duration 값 코드 리뷰 + Playwright에서 transitionend 이벤트 대기

## BAOS-UX-003 — Playwright 동작 검증 (high)

인터랙티브 기능 배포 전 반드시 실행:
1. 요소 클릭 → 확장된 패널 **실제 가시성** 확인 (`getBoundingClientRect().width > 0 && offsetParent !== null`)
2. 확장/닫기 동작 확인
3. **ESC** 닫기 확인
4. **console error 0건** 확인
5. `prefers-reduced-motion` 모드에서 정상 동작 확인

---

## 검증 스크립트

- Python 구조 검증: `python3 scripts/verify_bqae.py` (BAOS-HTML-001/002/004 + MOTION-002 번들 체크)
- 브라우저 동작 검증: `npx playwright test` (BAOS-UX-001/003, BAOS-MOTION-001) — playwright/e2e 디렉토리 참조

## 적용 이력

| 버전 | 적용 내용 |
|---|---|
| v4.1.0 | 확장형 카드(Services) · 레이어 구조(Technology) — BAOS-MOTION/UX 규칙 최초 적용 |
