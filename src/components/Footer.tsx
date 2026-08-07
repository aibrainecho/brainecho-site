export default function Footer() {
  return (
    <footer style={{ background: "#f8fafc" }}>
      <div className="section-container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/brand-logo.png" alt="BrainEcho" className="h-8 w-auto" />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: "#64748B" }}>
              AI 음성 건강진단 · 뇌파-음성 융합분석 · 시장 예측·분석 · 법률 리스크 대응 · 가족 관계 플랫폼 · 문화 AI 분석 — 9개 AI 플랫폼을 운영하는 한국 최초 멀티도메인 AI 기술 기업.
            </p>
            <p className="mt-2 text-xs" style={{ color: "#94A3B8" }}>
              &quot;Connecting Neural Intelligence to Digital Reality&quot;
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold" style={{ color: "#1e293b" }}>Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Technology", "Products", "Evidence", "Notice", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase() === "home" ? "hero" : item.toLowerCase() === "products" ? "services" : item.toLowerCase()}`}
                    className="text-sm transition-colors"
                    style={{ color: "#64748B" }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold" style={{ color: "#1e293b" }}>Contact</h4>
            <ul className="space-y-2 text-sm" style={{ color: "#64748B" }}>
              <li>info@brainecho.kr</li>
              <li>83 Songi-ro, Songpa-gu, Seoul, Korea</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8"
          style={{ borderTop: "1px solid #e2e8f0" }}>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm" style={{ color: "#94A3B8" }}>
              &copy; {new Date().getFullYear()} BrainEcho Co., Ltd. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs" style={{ color: "#CBD5E1" }}>
              <a href="#" style={{ color: "inherit" }}>개인정보처리방침</a>
              <a href="#" style={{ color: "inherit" }}>이용약관</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
