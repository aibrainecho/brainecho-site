import { Notice } from "./types";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "notices.json");

export function readNotices(): Notice[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function writeNotices(notices: Notice[]): void {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(notices, null, 2), "utf-8");
}

export function getNotice(id: string): Notice | undefined {
  return readNotices().find((n) => n.id === id);
}

export function createNotice(
  data: Omit<Notice, "id" | "createdAt" | "updatedAt">
): Notice {
  const notices = readNotices();
  const notice: Notice = {
    ...data,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  notices.unshift(notice);
  writeNotices(notices);
  return notice;
}

export function deleteNotice(id: string): boolean {
  const notices = readNotices();
  const idx = notices.findIndex((n) => n.id === id);
  if (idx === -1) return false;
  notices.splice(idx, 1);
  writeNotices(notices);
  return true;
}

export function updateNotice(
  id: string,
  data: Partial<Omit<Notice, "id" | "createdAt">>
): Notice | undefined {
  const notices = readNotices();
  const idx = notices.findIndex((n) => n.id === id);
  if (idx === -1) return undefined;
  notices[idx] = {
    ...notices[idx],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  writeNotices(notices);
  return notices[idx];
}
