import { Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="gradient-bg">
      <div className="section-container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Brain size={28} className="text-accent-400" />
              <span className="text-xl font-bold text-white">
                Brain<span className="text-accent-400">Echo</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
              AI 기반 음성 및 생체신호 분석 기술로 헬스케어의 새로운 기준을
              제시합니다. 혁신적인 기술과 신뢰할 수 있는 전문성을 바탕으로,
              더 나은 건강한 내일을 만들어갑니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Notice", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-white/50 transition-colors hover:text-accent-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>contact@brainecho.co.kr</li>
              <li>0500-0000-0000</li>
              <li>서울특별시 강남구</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} BrainEcho. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-white/30">
              <a href="#" className="hover:text-white/50">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-white/50">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
