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
              AX(Healthcare AI) · DX(Intelligence AI) · R&D(도메인 범용 AI 연구) · CONSULTING(공공·정책) — 4개 사업분야, 14+ AI 플랫폼·시스템을 운영하는 한국 최초 멀티도메인 AI 기술 기업.
            </p>
            <p className="mt-2 text-xs" style={{ color: "#94A3B8" }}>
              &quot;Connecting Neural Intelligence to Digital Reality&quot;
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold" style={{ color: "#1e293b" }}>Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "History", "Technology", "Business", "Evidence", "Notice", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase() === "home" ? "hero" : item.toLowerCase() === "products" ? "services" : item.toLowerCase() === "business" ? "services" : item.toLowerCase()}`}
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
