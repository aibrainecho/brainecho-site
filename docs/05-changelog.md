# BrainEcho Site 변경 이력

버전 태그(vX.Y.Z)와 1:1 대응됩니다. `git tag -l -n` 으로 각 버전 요약을 즉시 확인할 수 있습니다.

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
