"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `mailto:info@brainecho.com?subject=[BrainEcho 문의] ${form.name}&body=${encodeURIComponent(form.message + `\n\n--\n${form.name} (${form.email})`)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  const infoItems = [
    { icon: Mail, label: "이메일", value: "info@brainecho.com", href: "mailto:info@brainecho.com" },
    { icon: Phone, label: "대표", value: "대표이사 김인태" },
    { icon: MapPin, label: "주소", value: "서울 송파구 송이로 83, 브리즈타워 6F" },
    { icon: Clock, label: "사업자", value: "235-88-03066" },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-24"
      style={{ background: "linear-gradient(to bottom, #000F24, #001530)" }}>
      <div className="section-container">
        <div className={`text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="inline-block rounded-full px-4 py-1.5 text-sm font-medium tracking-widest"
            style={{ background: "rgba(0,71,171,0.14)", color: "#7FFF00", border: "1px solid rgba(0,71,171,0.22)" }}>
            Contact
          </span>
          <h2 className="section-title mt-6"><span className="gradient-text">문의</span>하기</h2>
          <p className="section-subtitle mx-auto">BrainEcho의 솔루션에 대해 궁금하신 점이 있으시면 언제든지 문의해주세요.</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-5">
          <div className={`space-y-4 lg:col-span-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
               style={{ transitionDelay: "0.2s", transition: "all 0.7s" }}>
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-xl p-5"
                style={{
                  background: "#001530",
                  border: "1px solid rgba(0,71,171,0.22)",
                }}>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "rgba(0,71,171,0.14)", color: "#0047AB" }}>
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="text-xs font-medium" style={{ color: "#6B90C0" }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="mt-0.5 block text-sm font-semibold hover:opacity-80"
                      style={{ color: "#D4E5FF" }}>
                      {item.value}
                    </a>
                  ) : (
                    <div className="mt-0.5 text-sm font-semibold" style={{ color: "#D4E5FF" }}>{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={`lg:col-span-3 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
               style={{ transitionDelay: "0.3s", transition: "all 0.7s" }}>
            <div className="rounded-2xl p-8"
              style={{
                background: "#001530",
                border: "1px solid rgba(0,71,171,0.22)",
              }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ background: "rgba(127,255,0,0.14)" }}>
                    <Send size={28} style={{ color: "#7FFF00" }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "#D4E5FF" }}>문의가 전송되었습니다</h3>
                  <p className="mt-2" style={{ color: "#6B90C0" }}>빠른 시일 내에 답변드리겠습니다.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 px-6 py-3 text-sm font-semibold transition-all hover:bg-white/10"
                    style={{ borderColor: "#0047AB", color: "#0047AB" }}>
                    새 문의 작성
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium" style={{ color: "#D4E5FF" }}>이름</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="block w-full rounded-xl px-4 py-3 text-sm"
                        style={{
                          background: "rgba(0,15,36,0.5)",
                          border: "1px solid rgba(0,71,171,0.22)",
                          color: "#D4E5FF",
                        }}
                        placeholder="성함" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium" style={{ color: "#D4E5FF" }}>이메일</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="block w-full rounded-xl px-4 py-3 text-sm"
                        style={{
                          background: "rgba(0,15,36,0.5)",
                          border: "1px solid rgba(0,71,171,0.22)",
                          color: "#D4E5FF",
                        }}
                        placeholder="이메일" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium" style={{ color: "#374151" }}>문의 내용</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="block w-full rounded-xl px-4 py-3 text-sm"
                      style={{
                        background: "#f9fafb",
                        border: "1px solid #d1d5db",
                        color: "#1e293b",
                      }}
                      placeholder="문의 내용을 입력해주세요" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center text-sm">
                    <Send size={15} /> 문의 보내기
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
