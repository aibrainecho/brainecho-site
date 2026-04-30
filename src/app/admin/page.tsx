"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  LogOut,
  Plus,
  Trash2,
  Pin,
  Loader2,
  Eye,
  EyeOff,
} from "lucide-react";
import { Notice } from "@/lib/types";

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  // New notice form
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pinned, setPinned] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const ADMIN_PASSWORD = "brainecho1234";

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await fetch("/api/notices");
      const data = await res.json();
      setNotices(data);
    } catch {
      console.error("Failed to fetch notices");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const pw = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || ADMIN_PASSWORD;
    if (password === pw) {
      setIsAuthenticated(true);
      setLoginError("");
      // Store in session
      sessionStorage.setItem("admin_auth", "true");
    } else {
      setLoginError("비밀번호가 일치하지 않습니다.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_auth");
  };

  const handleCreateNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
          password: ADMIN_PASSWORD,
          pinned,
        }),
      });

      if (res.ok) {
        setTitle("");
        setContent("");
        setPinned(false);
        setShowForm(false);
        await fetchNotices();
      }
    } catch {
      alert("등록 중 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteNotice = async (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      const res = await fetch("/api/notices", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password: ADMIN_PASSWORD }),
      });

      if (res.ok) {
        await fetchNotices();
      } else {
        alert("삭제 중 오류가 발생했습니다.");
      }
    } catch {
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getFullYear()}. ${String(d.getMonth() + 1).padStart(2, "0")}. ${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-brand-950 p-4">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            {/* Logo */}
            <div className="mb-8 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-lg font-bold text-white">
                B
              </div>
              <h1 className="text-xl font-bold text-white">Admin</h1>
              <p className="mt-1 text-sm text-white/50">
                BrainEcho 관리자 페이지
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/70">
                  비밀번호
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-xl border-white/10 bg-white/5 px-4 py-3 pr-10 text-sm text-white placeholder-white/30 transition-colors focus:border-accent-500 focus:ring-accent-500"
                    placeholder="관리자 비밀번호를 입력하세요"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/50"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              {loginError && (
                <p className="text-sm text-red-400">{loginError}</p>
              )}
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-brand-600 to-accent-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:brightness-110"
              >
                로그인
              </button>
            </form>

            {/* Back to main */}
            <div className="mt-6 text-center">
              <a
                href="/"
                className="inline-flex items-center gap-1 text-sm text-white/40 transition-colors hover:text-white/70"
              >
                <ArrowLeft size={14} />
                메인 페이지로
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-500 text-xs font-bold text-white"
            >
              B
            </a>
            <span className="text-sm font-semibold text-gray-900">
              관리자 페이지
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
            >
              <Plus size={14} />
              새 공지
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-50"
            >
              <LogOut size={14} />
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-8">
        {/* Notice Form */}
        {showForm && (
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-gray-900">
              새 공지사항 작성
            </h2>
            <form onSubmit={handleCreateNotice} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  제목
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors focus:border-brand-500 focus:ring-brand-500"
                  placeholder="공지사항 제목"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  내용
                </label>
                <textarea
                  rows={6}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="block w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors focus:border-brand-500 focus:ring-brand-500"
                  placeholder="공지사항 내용을 입력하세요"
                  required
                />
              </div>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={pinned}
                  onChange={(e) => setPinned(e.target.checked)}
                  className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                />
                상단 고정
              </label>
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary text-sm"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      저장 중...
                    </>
                  ) : (
                    "등록하기"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50"
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Notice List */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="text-base font-bold text-gray-900">
              공지사항 관리 ({notices.length})
            </h2>
          </div>
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 size={24} className="animate-spin text-gray-300" />
            </div>
          ) : notices.length === 0 ? (
            <div className="py-12 text-center text-sm text-gray-400">
              등록된 공지사항이 없습니다.
              <br />
              &quot;새 공지&quot; 버튼을 눌러 첫 공지사항을 작성해보세요.
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notices.map((notice) => (
                <div
                  key={notice.id}
                  className="flex items-start gap-3 px-6 py-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {notice.pinned && (
                        <Pin
                          size={14}
                          className="flex-shrink-0 text-accent-500"
                          fill="currentColor"
                        />
                      )}
                      <h3 className="truncate text-sm font-semibold text-gray-900">
                        {notice.title}
                      </h3>
                    </div>
                    <p className="mt-0.5 text-xs text-gray-400">
                      {formatDate(notice.createdAt)} · {notice.author}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteNotice(notice.id)}
                    className="flex-shrink-0 rounded-lg p-2 text-gray-300 transition-colors hover:bg-red-50 hover:text-red-500"
                    title="삭제"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
