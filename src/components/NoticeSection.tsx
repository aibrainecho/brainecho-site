"use client";

import { useEffect, useRef, useState } from "react";
import { Megaphone, Calendar, Pin, ExternalLink } from "lucide-react";
import { Notice } from "@/lib/types";

export default function NoticeSection() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch("/api/notices")
      .then((res) => res.json())
      .then((data) => {
        setNotices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getFullYear()}. ${String(d.getMonth() + 1).padStart(2, "0")}. ${String(d.getDate()).padStart(2, "0")}`;
  };

  const displayedNotices = notices.slice(0, 5);

  return (
    <section
      id="notice"
      ref={ref}
      className="relative bg-white py-24"
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-600">
            Notice
          </span>
          <h2 className="section-title mt-6">
            공지<span className="gradient-text">사항</span>
          </h2>
          <p className="section-subtitle mx-auto">
            BrainEcho의 새로운 소식과 업데이트를 확인하세요.
          </p>
        </div>

        {/* Notice List */}
        <div
          className={`mx-auto mt-12 max-w-3xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
            </div>
          ) : displayedNotices.length === 0 ? (
            <div className="py-12 text-center text-gray-400">
              등록된 공지사항이 없습니다.
            </div>
          ) : (
            <div className="divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white shadow-sm">
              {displayedNotices.map((notice) => (
                <div key={notice.id}>
                  <button
                    onClick={() =>
                      setExpanded(
                        expanded === notice.id ? null : notice.id
                      )
                    }
                    className={`flex w-full items-start gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50 ${
                      expanded === notice.id ? "bg-gray-50" : ""
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {notice.pinned ? (
                        <Pin
                          size={16}
                          className="text-accent-500"
                          fill="currentColor"
                        />
                      ) : (
                        <Megaphone
                          size={16}
                          className="text-brand-400"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-gray-900">
                          {notice.title}
                        </h3>
                        {notice.pinned && (
                          <span className="flex-shrink-0 rounded-full bg-accent-50 px-2 py-0.5 text-xs font-medium text-accent-600">
                            공지
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                        <Calendar size={12} />
                        {formatDate(notice.createdAt)}
                        <span className="text-gray-300">|</span>
                        {notice.author}
                      </div>
                    </div>
                    <ExternalLink
                      size={14}
                      className={`mt-1 flex-shrink-0 text-gray-300 transition-transform ${
                        expanded === notice.id ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {expanded === notice.id && (
                    <div className="border-t border-gray-50 px-6 py-5">
                      <div className="prose prose-sm max-w-none text-gray-600 whitespace-pre-line">
                        {notice.content}
                      </div>
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
