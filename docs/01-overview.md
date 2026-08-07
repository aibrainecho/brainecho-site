# BrainEcho 공식 웹사이트

## 개요
AI 기반 음성 분석 기술 기업 BrainEcho의 공식 웹사이트.

## 기술 스택
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **배포**: Cloudflare Pages (wrangler, project: brainecho-website) / Vercel 가능

## 구조
```
src/app/          — 페이지 + API 라우트
src/components/   — Header, Hero, About, Services 등
public/           — 정적 자산
```

## 실행
```bash
cd ~/brainecho-site
npm run dev    # 개발
npm run build  # 빌드
npm run start  # 프로덕션
```
