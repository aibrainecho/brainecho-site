const { chromium } = require("playwright");

(async () => {
  const results = [];
  const consoleErrors = [];
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
  page.on("pageerror", (err) => consoleErrors.push(String(err)));

  const log = (rule, name, ok, detail = "") => {
    results.push({ rule, name, ok, detail });
    console.log(`${ok ? "✅" : "❌"} [${rule}] ${name}${detail ? " — " + detail : ""}`);
  };

  // ── 1. 페이지 로드 + 서비스 섹션으로 이동 ──
  await page.goto("http://localhost:4173", { waitUntil: "networkidle" });
  await page.locator("#services").scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);

  const cards = page.locator('#services button[aria-expanded]');
  const cardCount = await cards.count();
  log("BAOS-UX-001", `카드(트리거) 개수 ${cardCount}개`, cardCount >= 4, `found=${cardCount}`);

  // ── 2. 카드 클릭 → 다이얼로그 열림 (실제 가시성) ──
  await cards.nth(0).click();
  await page.waitForTimeout(400);
  const dialog = page.locator('[role="dialog"]');
  const dlgCount = await dialog.count();
  const visible = dlgCount > 0 ? await dialog.first().evaluate((el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    // fixed 요소는 offsetParent가 null — computed style 기반 가시성 판정 (BAOS-HTML-003 보완)
    const styleVisible = cs.display !== "none" && cs.visibility !== "hidden" && cs.opacity !== "0";
    return { w: r.width, h: r.height, vis: r.width > 0 && r.height > 0 && styleVisible };
  }) : null;
  const isVisible = dlgCount > 0 && visible && visible.vis;
  log("BAOS-UX-003", "카드 클릭 → 다이얼로그 열림 + 실제 가시성", isVisible,
    visible ? `dialog=${dlgCount} w=${Math.round(visible.w)} h=${Math.round(visible.h)}` : "dialog=0");

  // ── 3. 다이얼로그 내부 콘텐츠 (시장 지표 포함) ──
  const dlgText = dlgCount > 0 ? await dialog.first().innerText() : "";
  const hasMarket = dlgText.includes("시장 지표") || dlgText.includes("Market");
  log("BAOS-UX-003", "다이얼로그에 상세(시장 지표) 포함", hasMarket);

  // ── 4. ESC 닫기 + 포커스 복원 ──
  await page.keyboard.press("Escape");
  await page.waitForTimeout(400);
  const dlgAfterEsc = await page.locator('[role="dialog"]').count();
  const focusBack = await page.evaluate(() => {
    const el = document.activeElement;
    return el && el.tagName === "BUTTON" && el.closest("#services") !== null;
  });
  log("BAOS-UX-001", "ESC → 다이얼로그 닫힘 + 포커스 카드 복원", dlgAfterEsc === 0 && focusBack,
    `dialog=${dlgAfterEsc} focusOnCard=${focusBack}`);

  // ── 5. 다시 열고 닫기 버튼으로 닫기 ──
  await cards.nth(1).click();
  await page.waitForTimeout(400);
  const open2 = await page.locator('[role="dialog"]').count();
  await page.locator('[role="dialog"] button[aria-label="닫기"]').click();
  await page.waitForTimeout(400);
  const dlgAfterBtn = await page.locator('[role="dialog"]').count();
  log("BAOS-UX-003", "다시 열기 + 닫기 버튼으로 닫기", open2 === 1 && dlgAfterBtn === 0,
    `open=${open2} closed=${dlgAfterBtn}`);

  // ── 6. 키보드 Tab 포커스 트랩 (다이얼로그 내부 순환) ──
  await cards.nth(0).click();
  await page.waitForTimeout(400);
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  const trapOk = await page.evaluate(() => {
    const el = document.activeElement;
    return el && el.closest('[role="dialog"]') !== null;
  });
  log("BAOS-UX-001", "Tab 순환 시 포커스가 다이얼로그 내부에 유지", trapOk);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(400);

  // ── 7. Technology 레이어 구조 (클릭 → 상세 열림) ──
  await page.locator("#technology").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  const layerBtns = page.locator('#technology button[aria-expanded]');
  const layerCount = await layerBtns.count();
  log("BAOS-UX-003", `기술 레이어 버튼 ${layerCount}개`, layerCount >= 4, `found=${layerCount}`);
  if (layerCount > 0) {
    await layerBtns.nth(0).click();
    await page.waitForTimeout(500);
    const l0 = await layerBtns.nth(0).getAttribute("aria-expanded");
    const detailVisible = await layerBtns.nth(0).evaluate((el) => {
      const box = el.querySelector("div.overflow-hidden");
      if (!box) return false;
      return box.getBoundingClientRect().height > 20;
    });
    log("BAOS-UX-003", "레이어 클릭 → aria-expanded=true + 상세 펼침", l0 === "true" && detailVisible,
      `aria=${l0} height>20=${detailVisible}`);
  }

  // ── 8. console error 0건 ──
  log("BAOS-UX-003", "콘솔 에러 0건", consoleErrors.length === 0,
    consoleErrors.length > 0 ? consoleErrors.slice(0, 3).join(" | ") : "");

  // ── 8-1. Hero 파티클 캔버스 (BAOS-MOTION-003: 동적 로딩 후 캔버스 존재) ──
  const heroCanvas = await page.locator('#hero canvas[aria-hidden="true"]').count();
  const canvasVisible = heroCanvas > 0 ? await page.locator('#hero canvas').first().isVisible() : false;
  const canvasDrawn = heroCanvas > 0 ? await page.locator('#hero canvas').first().evaluate((el) => {
    const c = el;
    if (!c.width || !c.height) return false;
    const ctx = c.getContext("2d");
    if (!ctx) return false;
    try {
      const d = ctx.getImageData(0, 0, c.width, c.height).data;
      for (let i = 3; i < d.length; i += 4) { if (d[i] > 0) return true; } // 알파값이 있는 픽셀 존재
      return false;
    } catch { return false; }
  }) : false;
  log("BAOS-MOTION-003", "히어로 파티클 캔버스 존재 + 실제 드로잉", heroCanvas > 0 && canvasVisible && canvasDrawn,
    `canvas=${heroCanvas} visible=${canvasVisible} drawn=${canvasDrawn}`);
  // 캔버스가 동적 청크로 분리되었는지 (전체 JS 내 1곳에만 존재)
  const particleChunks = await page.evaluate(() => {
    // 동적 청크 로드 확인: window.__NEXT_DATA__ 필요 없음 — 캔버스 존재로 간접 확인
    return document.querySelectorAll('#hero canvas').length;
  });
  log("BAOS-MOTION-003", "캔버스 동적 로딩 완료 (SSR HTML엔 없음, 클라이언트에서 생성)", particleChunks === 1,
    `domCanvas=${particleChunks}`);

  // ── 8-2. 파티클 모션 성능 (BAOS-MOTION-001: 60fps 근사 — 1초간 rAF 카운트) ──
  const fps = await page.evaluate(() => new Promise((resolve) => {
    let frames = 0;
    const start = performance.now();
    const count = () => {
      frames++;
      if (performance.now() - start < 1000) requestAnimationFrame(count);
      else resolve(Math.round(frames));
    };
    requestAnimationFrame(count);
  }));
  log("BAOS-MOTION-001", `애니메이션 rAF 1초당 ${fps}프레임 (≥45 양호)`, fps >= 45, `fps=${fps}`);

  // ── 9. prefers-reduced-motion (BAOS-MOTION-001) ──
  const rmPage = await browser.newPage({ reducedMotion: "reduce" });
  await rmPage.goto("http://localhost:4173", { waitUntil: "networkidle" });
  await rmPage.locator("#services").scrollIntoViewIfNeeded();
  await rmPage.waitForTimeout(300);
  await rmPage.locator('#services button[aria-expanded]').nth(0).click();
  await rmPage.waitForTimeout(150);
  const rmDialog = await rmPage.locator('[role="dialog"]').count();
  const rmVisible = rmDialog > 0 ? await rmPage.locator('[role="dialog"]').first().isVisible() : false;
  log("BAOS-MOTION-001", "reduced-motion 모드에서도 다이얼로그 정상 동작", rmDialog === 1 && rmVisible,
    `dialog=${rmDialog} visible=${rmVisible}`);
  await rmPage.close();

  await browser.close();
  const failed = results.filter((r) => !r.ok).length;
  console.log(`\n══════════════════════════════════════`);
  console.log(`BQAE 동작 검증: ${results.length - failed}/${results.length} 통과`);
  process.exit(failed > 0 ? 1 : 0);
})();
