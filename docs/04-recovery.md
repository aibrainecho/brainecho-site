# BrainEcho Site 복구 절차

## 1. 복원할 버전 확인 (필수)
```bash
cd ~/brainecho-site
git fetch --tags
git tag -l -n              # 모든 버전 + 한 줄 요약
cat docs/05-changelog.md   # 상세 변경 이력 (버전별 추가/수정/삭제)
```

## 2. 복원 실행 — 자동 스크립트 (권장)
```bash
./scripts/restore.sh                   # 복원 가능한 버전 목록
./scripts/restore.sh v3.0.0            # 복원 + 빌드
./scripts/restore.sh v3.0.0 --deploy   # 복원 + 빌드 + Cloudflare Pages 배포
```

## 3. 복원 실행 — 수동
```bash
cd ~/brainecho-site
git checkout v3.0.0                    # 원하는 버전으로 전환
npm ci && npm run build                # 정적 빌드 재생산 (out/)
npx wrangler pages deploy out --project-name brainecho-website  # 배포 (선택)
```

## 4. 복원 후
- `restore.sh`는 `docs/restore-log.md`에 복원 기록 자동 추가
- 작업 후 `git checkout main` 으로 원복
- 복원 기록은 커밋: `git add docs/restore-log.md && git commit -m "docs: 복원 기록"`

## 개발 서버 / 프로덕션
```bash
npm run dev                # 개발 (localhost:3000)
npm run build && npm run start  # 프로덕션 로컬
```

## 배포
- Cloudflare Pages: `npx wrangler pages deploy out --project-name brainecho-website`
- Vercel: Git push 후 자동 배포 (배포 실패 시 로컬 `npm run build` 검증 후 재시도)
