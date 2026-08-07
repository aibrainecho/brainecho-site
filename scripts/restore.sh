#!/usr/bin/env bash
# restore.sh — BrainEcho 사이트 버전 복원 스크립트
#
# 사용법:
#   ./scripts/restore.sh                # 복원 가능한 버전 목록 표시
#   ./scripts/restore.sh v3.0.0         # 해당 버전 복원 + 빌드
#   ./scripts/restore.sh v3.0.0 --deploy  # 복원 + 빌드 + Cloudflare Pages 배포
#
# 주의: 복원 시 커밋되지 않은 변경사항이 있으면 진행 전 확인을 받습니다.
set -euo pipefail

SITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$SITE_DIR"

TAG="${1:-}"
DO_DEPLOY=0
[[ "${2:-}" == "--deploy" ]] && DO_DEPLOY=1

# ── 버전 목록 표시 ──────────────────────────────────────────────
if [[ -z "$TAG" ]]; then
  echo "📋 복원 가능한 버전 목록:"
  git tag -l -n | sed 's/^/   /'
  echo ""
  echo "⚠️  상세 변경 이력은 docs/05-changelog.md 참고"
  exit 0
fi

# ── 태그 존재 확인 ──────────────────────────────────────────────
if ! git rev-parse -q --verify "refs/tags/$TAG" >/dev/null; then
  echo "❌ 태그 '$TAG' 가 없습니다. (git fetch --tags 후 다시 시도)"
  git tag -l -n | sed 's/^/   가능한 버전: /'
  exit 1
fi

# ── 작업트리 상태 확인 ──────────────────────────────────────────
if ! git diff --quiet HEAD; then
  echo "⚠️  커밋되지 않은 변경사항이 있습니다:"
  git status --short
  echo ""
  read -r -p "백업 후 계속 진행하시겠습니까? (y/N) " ans
  [[ "$ans" == "y" || "$ans" == "Y" ]] || { echo "중단됨."; exit 1; }
fi

# ── 복원 대상 정보 표시 ─────────────────────────────────────────
echo "🔄 복원 대상: $TAG"
git tag -l -n1 "$TAG"

# ── 복원 (임시 브랜치 생성) ─────────────────────────────────────
git checkout -B "restore/$TAG" "$TAG"

# ── 의존성 + 빌드 ───────────────────────────────────────────────
npm ci
npm run build

# ── 빌드 산출물 검증 ────────────────────────────────────────────
if [[ -f out/index.html && -f out/notices.json ]]; then
  echo "✅ 복원 완료: out/index.html + out/notices.json 생성됨"
else
  echo "❌ 빌드 산출물(out/)이 올바르지 않습니다."
  exit 1
fi

# ── 배포 (선택) ─────────────────────────────────────────────────
if [[ $DO_DEPLOY -eq 1 ]]; then
  npx wrangler pages deploy out --project-name brainecho-website
fi

# ── 복원 기록 ────────────────────────────────────────────────────
LOG="docs/restore-log.md"
[[ -f "$LOG" ]] || printf '# 복원 기록\n\n' > "$LOG"
echo "- $(date '+%Y-%m-%d %H:%M') — $TAG 복원" >> "$LOG"
echo "📝 복원 기록: $LOG (커밋: git add $LOG && git commit -m 'docs: 복원 기록')"
echo "✅ 완료. 원래 상태로: git checkout main"
