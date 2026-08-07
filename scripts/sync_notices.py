#!/usr/bin/env python3
"""
sync_notices.py — PG → notices.json → deploy to Cloudflare Pages

Usage:
    python3 scripts/sync_notices.py              # sync only (no deploy)
    python3 scripts/sync_notices.py --deploy     # sync + wrangler deploy
    python3 scripts/sync_notices.py --check      # verify PG vs notices.json consistency
"""

import json
import os
import shutil
import subprocess
import sys
from datetime import datetime

SITE_DIR = os.path.expanduser("~/brainecho-site")
DATA_FILE = os.path.join(SITE_DIR, "data", "notices.json")
OUT_FILE = os.path.join(SITE_DIR, "out", "notices.json")
CF_PROJECT = "brainecho-website"

DB_NAME = "stock_platform_dev"


def load_pg_notices() -> list[dict]:
    """PostgreSQL notice_board 테이블에서 공지 목록 조회"""
    import psycopg2

    try:
        conn = psycopg2.connect(dbname=DB_NAME)
        cur = conn.cursor()
        cur.execute("""
            SELECT id, title, content, author, pinned, created_at, updated_at
            FROM notice_board
            ORDER BY pinned DESC, created_at DESC
        """)
        rows = cur.fetchall()
        conn.close()

        notices = []
        for row in rows:
            notices.append({
                "id": str(row[0]),
                "title": row[1],
                "content": row[2],
                "author": row[3],
                "pinned": row[4],
                "createdAt": row[5].isoformat() if row[5] else None,
                "updatedAt": row[6].isoformat() if row[6] else None,
            })
        return notices
    except Exception as e:
        print(f"[ERROR] PG 조회 실패: {e}", file=sys.stderr)
        sys.exit(1)


def write_notices_json(notices: list[dict]) -> str:
    """notices.json 파일 생성"""
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(notices, f, ensure_ascii=False, indent=2)
    return DATA_FILE


def copy_to_out():
    """data/notices.json → out/notices.json 복사"""
    if not os.path.exists(DATA_FILE):
        print(f"[SKIP] {DATA_FILE} 없음", file=sys.stderr)
        return False
    os.makedirs(os.path.dirname(OUT_FILE), exist_ok=True)
    shutil.copy2(DATA_FILE, OUT_FILE)
    print(f"[COPY] {DATA_FILE} → {OUT_FILE}")
    return True


def wrangler_deploy() -> bool:
    """Cloudflare Pages 배포 (wrangler)"""
    print(f"[DEPLOY] wrangler pages deploy {SITE_DIR}/out → {CF_PROJECT}")
    try:
        result = subprocess.run(
            ["npx", "wrangler", "pages", "deploy", "out", "--project-name", CF_PROJECT],
            cwd=SITE_DIR,
            capture_output=True,
            text=True,
            timeout=60,
        )
        if result.returncode == 0:
            print(f"[DEPLOY] ✅ 성공")
            print(result.stdout.strip())
            return True
        else:
            print(f"[DEPLOY] ❌ 실패 (rc={result.returncode})")
            print(result.stderr.strip())
            return False
    except subprocess.TimeoutExpired:
        print(f"[DEPLOY] ❌ 시간 초과", file=sys.stderr)
        return False
    except FileNotFoundError:
        print(f"[DEPLOY] ❌ npx/wrangler 없음", file=sys.stderr)
        return False


def check_consistency() -> bool:
    """PG 데이터 vs notices.json 일치 여부 확인"""
    pg_notices = load_pg_notices()
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            json_notices = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        print(f"[CHECK] ❌ {DATA_FILE} 없음 또는 파싱 불가")
        return False

    pg_count = len(pg_notices)
    json_count = len(json_notices)

    if pg_count != json_count:
        print(f"[CHECK] ❌ 개수 불일치: PG={pg_count}, JSON={json_count}")
        return False

    for pn, jn in zip(pg_notices, json_notices):
        if pn["id"] != jn["id"] or pn["title"] != jn["title"]:
            print(f"[CHECK] ❌ 내용 불일치 (id={pn['id']})")
            return False

    print(f"[CHECK] ✅ PG({pg_count}) = JSON({json_count}) 일치")
    return True


def main():
    do_deploy = "--deploy" in sys.argv
    do_check = "--check" in sys.argv

    if do_check:
        check_consistency()
        return

    # 1. PG → notices.json
    notices = load_pg_notices()
    write_notices_json(notices)
    print(f"[SYNC] {len(notices)}개 공지 → {DATA_FILE}")

    # 2. out/ 복사
    copy_to_out()

    # 3. deploy
    if do_deploy:
        wrangler_deploy()
    else:
        print(f"[INFO] --deploy 옵션 없음. 배포 생략됨.")


if __name__ == "__main__":
    main()
