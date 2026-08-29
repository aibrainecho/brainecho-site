# BrainEcho Site 변경 이력

버전 태그(vX.Y.Z)와 1:1 대응됩니다. `git tag -l -n` 으로 각 버전 요약을 즉시 확인할 수 있습니다.

## v4.0.0 — 2026-08-29
- [추가] 사업분야(Business Areas) 4개 영역 체계로 재구성 — Services 섹션 전면 개편
  - 01 AX — Healthcare AI (음향 스크리닝 엔진 · 음성-뇌파 이중 바이오마커 / Voice Biomarker · EEG Fusion · Edge AI)
  - 02 DX — Intelligence AI (하이브리드 RAG 파이프라인 · 법률·시장·지식 SaaS / Hybrid RAG · Time-Series · Vector DB)
  - 03 R&D — 도메인 범용 AI 추론 연구 (전이 표현 추출 · 금융·회계·인사·공공·품질 분석모델 / Representation Learning · Anomaly Detection)
  - 04 CONSULTING — 공공·정책 (B2G 진입 전략 · 재정투자 타당성 · 지방재정 투자심사 / Public Policy · B2G · Governance)
- [추가] 연혁(History) 섹션 신설 — 기업부설연구소(2025.02) → 벤처인증(2026.03) → 상표(2026.04) → 특허(2026.05) → **AI 핀테크 시스템 개발(빅데이터 분석시스템, 2026.05)** → 홈페이지 리뉴얼(2026.08)
- [추가] 클라우드코드/오픈클로 프로젝트 분석 결과 반영 — BAOS·BHCM·BSAP·GOV·Project Factory 등 기술사업 매핑, 시장 보완자료(Mordor·GMI 등) 수집
- [수정] About/Hero/Footer/layout 메타데이터 — 4개 사업분야(AX·DX·R&D·CONSULTING) 일관 체계로 업데이트
- [수정] Technology: AI Core 14+ 시스템 · 4 Business Areas 표현으로 갱신
- [운영] 베이스라인 태그 `baseline-v3.0.0` 생성 — 업데이트 전 상태(v3.0.0) 복원 기준점 (restore.sh v3.0.0)

## v3.0.0 — 2026-08-07
- [전환] 정적 사이트 export (`output: "export"`) — 서버 의존성 제거
- [삭제] 관리자 페이지(/admin) + 공지사항 API 라우트 → 정적 notices.json 전환
- [추가] 브랜드 로고 (brand-logo.png/jpg)
- [추가] Technology: AI Ecosystem 아키텍처 다이어그램(SVG) 전면 재작성
- [추가] Evidence: IP 포트폴리오(특허 3·상표 2), SCI 논문 테이블, 인증 현황
- [수정] Hero/About/Services/Contact/Footer/Header 전면 리워크 — 실제 회사 콘텐츠 반영
- [수정] 공지사항 1건 — "(주)브레인에코 공식 홈페이지 새롭게 오픈"
- [운영] Cloudflare Pages 배포 스크립트(sync_notices.py + wrangler) 추가
- [운영] 버전관리 체계 도입: 태그 기반 릴리스, CHANGELOG, restore.sh

## v2.1.0 — 2026-05-20
- 마일스톤 타임라인 재구성
- 특허/상표권 섹션 추가
- 섹션 간격 50% 축소

## v2.0.0 — 2026-04-30
- 브랜드 컬러 업데이트
- 실제 회사 콘텐츠 반영
- SVG 그래픽 + Technology/Evidence 섹션 추가

## v0.1.0 — 2026-04-30
- Next.js 16 + TypeScript + Tailwind CSS v4 기반 구축
- Hero, About, Services, Header 컴포넌트
- 관리자 페이지 (/admin) + 공지사항 API
- docs/ 매뉴얼 신규 작성
