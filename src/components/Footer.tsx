import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#eaecf0] bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded bg-[#1c2024] text-[#fafaf8] flex items-center justify-center font-bold text-xs tracking-wider">
              NK
            </span>
            <div className="text-xs text-[#475467]">
              <span className="font-semibold text-[#101828]">{PERSONAL_INFO.name}</span> · Software Developer & IIT Bombay Graduate
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#667085]">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#101828] transition-colors"
              aria-label="Nishant Kumar GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#101828] transition-colors"
              aria-label="Nishant Kumar LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#101828] transition-colors"
              aria-label="Email Nishant Kumar"
            >
              <Mail className="w-4 h-4" />
            </a>
            <span className="text-[#d0d5dd]">|</span>
            <button
              type="button"
              onClick={scrollToTop}
              id="footer-back-to-top-btn"
              className="inline-flex items-center gap-1.5 text-[#344054] hover:text-[#1d4ed8] transition-colors font-medium focus:outline-hidden"
              aria-label="Back to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[#f2f4f7] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#667085] font-mono">
          <div>
            Static site built with React, TypeScript & Vite · Deployed to GitHub Pages
          </div>
          <div>
            © {new Date().getFullYear()} Nishant Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
