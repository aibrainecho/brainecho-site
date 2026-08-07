"use client";

import { useEffect, useRef, useState } from "react";
import { Megaphone, Pin, ChevronDown } from "lucide-react";
import { Notice } from "@/lib/types";

export default function NoticeSection() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch("/notices.json")
      .then((res) => res.json())
      .then((data) => { setNotices(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const formatDate = (d: string) => {
    const date = new Date(d);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  };

  return (
    <section id="notice" ref={ref} className="relative bg-white py-24">
      <div className="section-container">
        <div className={`text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h2 className="section-title mt-0">NOTICE</h2>
          <p className="section-subtitle mx-auto">BrainEcho의 새로운 소식과 업데이트를 확인하세요.</p>
        </div>

        <div className={`mx-auto mt-12 max-w-2xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          style={{ transitionDelay: "0.2s" }}>
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-brand-500" />
            </div>
          ) : notices.length === 0 ? (
            <div className="py-12 text-center text-gray-400">등록된 공지사항이 없습니다.</div>
          ) : (
            <div className="max-h-96 overflow-y-auto rounded-2xl border border-gray-100 bg-white shadow-sm scrollbar-thin">
              {notices.map((notice) => (
                <div key={notice.id}>
                  <button
                    onClick={() => setExpanded(expanded === notice.id ? null : notice.id)}
                    className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-gray-50"
                  >
                    <div className="mt-0.5 shrink-0">
                      {notice.pinned
                        ? <Pin size={14} className="text-brand-500" fill="currentColor" />
                        : <Megaphone size={14} className="text-gray-400" />
                      }
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{formatDate(notice.createdAt)}</span>
                        {notice.pinned && <span className="rounded bg-brand-50 px-1.5 py-0.5 text-[10px] font-medium text-brand-600">공지</span>}
                      </div>
                      <h3 className="mt-0.5 text-sm font-semibold text-gray-800">{notice.title}</h3>
                    </div>
                    <ChevronDown size={14} className={`shrink-0 text-gray-300 transition-transform ${expanded === notice.id ? "rotate-180" : ""}`} />
                  </button>
                  {expanded === notice.id && (
                    <div className="border-t border-gray-100 px-5 py-4 bg-gray-50">
                      <div className="text-sm leading-relaxed text-gray-600 whitespace-pre-line">{notice.content}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
