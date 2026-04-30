# BrainEcho 공식 웹사이트

AI 기반 음성 분석 기술 기업 BrainEcho의 공식 웹사이트입니다.

## 🚀 기술 스택

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Deployment:** Vercel (권장)

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # Root layout (SEO metadata)
│   ├── page.tsx            # 메인 페이지
│   ├── globals.css         # 전역 스타일
│   ├── admin/
│   │   └── page.tsx        # 관리자 페이지
│   └── api/
│       └── notices/
│           └── route.ts    # 공지사항 API
├── components/
│   ├── Header.tsx          # 네비게이션 헤더
│   ├── Hero.tsx            # 히어로 섹션
│   ├── About.tsx           # 회사 소개
│   ├── Services.tsx        # 서비스 소개
│   ├── NoticeSection.tsx   # 공지사항
│   ├── Contact.tsx         # 문의/연락처
│   └── Footer.tsx          # 푸터
└── lib/
    ├── types.ts            # TypeScript 타입
    └── notices.ts          # 공지사항 데이터 유틸
data/
└── notices.json            # 공지사항 저장 파일
```

## 🛠️ 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 🔐 관리자 페이지

- **URL:** `/admin`
- **기본 비밀번호:** `.env.local` 파일 참조
- **기능:** 공지사항 작성·삭제, 상단 고정

> **⚠️ 보안:** 배포 전에 반드시 관리자 비밀번호를 변경하세요.

```bash
# .env.local 에서 ADMIN_PASSWORD 값 변경
ADMIN_PASSWORD=새로운-안전한-비밀번호
```

## ☁️ Vercel 배포 (권장)

### 1. GitHub 저장소 생성
```bash
# GitHub CLI 로그인 (처음 1회)
gh auth login

# 저장소 생성 및 푸시
git init
git add .
git commit -m "Initial commit: BrainEcho website"
gh repo create brainecho-site --public --push
```

### 2. Vercel 배포
1. [vercel.com](https://vercel.com) → GitHub 계정 연동
2. `brainecho-site` 저장소 선택
3. Environment Variables에 `ADMIN_PASSWORD` 등록
4. Deploy 버튼 클릭

### 3. 도메인 연결
1. Vercel Dashboard → Project Settings → Domains
2. `www.brainecho.co.kr` 입력
3. DNS 설정 가이드에 따라 도메인 네임서버 또는 CNAME 레코드 설정

## 🌐 도메인 DNS 설정

Vercel에 도메인을 연결하려면 도메인 구입처에서:

### 옵션 A: Vercel 네임서버 (권장)
Vercel 제공 네임서버로 변경

### 옵션 B: CNAME 레코드
```
www.brainecho.co.kr → cname.vercel-dns.com
```

---

Built with ❤️ by BrainEcho
