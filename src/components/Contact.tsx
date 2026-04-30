"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto: fallback
    const mailto = `mailto:contact@brainecho.co.kr?subject=[BrainEcho 문의] ${form.name}&body=${encodeURIComponent(form.message + `\n\n--\n${form.name} (${form.email})`)}`;
    window.open(mailto, "_blank");
    setSubmitted(true);
  };

  const infoItems = [
    {
      icon: Mail,
      label: "이메일",
      value: "contact@brainecho.co.kr",
      href: "mailto:contact@brainecho.co.kr",
    },
    {
      icon: Phone,
      label: "전화",
      value: "0500-0000-0000",
      href: "tel:05000000000",
    },
    {
      icon: MapPin,
      label: "주소",
      value: "서울특별시 강남구 테헤란로 000길 00, 00층",
      href: undefined,
    },
    {
      icon: Clock,
      label: "운영 시간",
      value: "평일 09:00 - 18:00 (주말/공휴일 휴무)",
      href: undefined,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-gradient-to-b from-white to-gray-50 py-24"
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-600">
            Contact
          </span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">문의</span>하기
          </h2>
          <p className="section-subtitle mx-auto">
            BrainEcho의 솔루션에 대해 궁금하신 점이 있으시면 언제든지
            문의해주세요.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-5">
          {/* Info Cards */}
          <div
            className={`space-y-4 lg:col-span-2 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: "0.2s",
              transitionProperty: "all",
              transitionDuration: "700ms",
            }}
          >
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-400">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-0.5 block text-sm font-semibold text-gray-900 hover:text-brand-600"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="mt-0.5 text-sm font-semibold text-gray-900">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: "0.3s",
              transitionProperty: "all",
              transitionDuration: "700ms",
            }}
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                    <Send size={28} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    문의가 전송되었습니다
                  </h3>
                  <p className="mt-2 text-gray-500">
                    빠른 시일 내에 답변드리겠습니다.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                    className="btn-outline mt-6"
                  >
                    새 문의 작성
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        이름
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="block w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-colors focus:border-brand-500 focus:ring-brand-500"
                        placeholder="성함을 입력해주세요"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        이메일
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="block w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-colors focus:border-brand-500 focus:ring-brand-500"
                        placeholder="이메일을 입력해주세요"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      문의 내용
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="block w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-colors focus:border-brand-500 focus:ring-brand-500"
                      placeholder="문의하실 내용을 입력해주세요"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={16} />
                    문의 보내기
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
