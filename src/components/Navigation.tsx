import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Menu, X, FileDown, ExternalLink } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

interface NavigationProps {
  resumeUrl: string;
}

export const Navigation: React.FC<NavigationProps> = ({ resumeUrl }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      const matched = SECTION_IDS.find((id) => {
        const el = document.getElementById(id);
        return el ? scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight : false;
      });

      if (matched) {
        setActiveSection(matched);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <a
        href="#main-content"
        id="skip-to-content-link"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1d4ed8] focus:text-white focus:rounded-md focus:shadow-md font-medium text-sm"
      >
        Skip to main content
      </a>

      <header
        id="main-site-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#fafaf8]/95 backdrop-blur-md border-b border-[#e7e5e4] shadow-xs py-3'
            : 'bg-[#fafaf8]/80 backdrop-blur-xs border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo with NK Monogram */}
          <a
            href="#hero"
            id="brand-logo-link"
            className="flex items-center gap-2.5 group focus:outline-hidden"
            aria-label="Nishant Kumar Portfolio Home"
          >
            <span className="w-8 h-8 rounded-lg bg-[#1c2024] text-[#fafaf8] flex items-center justify-center font-bold text-xs tracking-wider border border-[#2d3139] group-hover:bg-[#1d4ed8] transition-colors">
              NK
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-[#1c2024] group-hover:text-[#1d4ed8] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-[#717784] font-medium leading-none hidden sm:inline">
                IIT Bombay · Backend & AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" aria-label="Primary Navigation" className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const sectionKey = item.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  id={`nav-link-${sectionKey}`}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#1d4ed8] bg-[#eff4ff]'
                      : 'text-[#525866] hover:text-[#1c2024] hover:bg-[#f3f4f6]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            {/* Resume Call-to-action in Desktop Nav */}
            <div className="ml-2 pl-2 border-l border-[#e7e5e4] flex items-center gap-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-view-resume-btn"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1c2024] bg-[#f4f4f2] hover:bg-[#e9e9e6] border border-[#d6d3d1] rounded-md transition-all active:scale-[0.98]"
                title="Open resume in a new tab"
              >
                <span>Resume</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#717784]" />
              </a>
              <a
                href={resumeUrl}
                download={PERSONAL_INFO.resumeFileName}
                id="nav-download-resume-btn"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-white bg-[#1d4ed8] hover:bg-[#1e40af] rounded-md shadow-2xs transition-all active:scale-[0.98]"
                title="Download resume PDF"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">PDF</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-[#1c2024] bg-[#f4f4f2] border border-[#d6d3d1] rounded-md"
            >
              <span>Resume</span>
            </a>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#525866] hover:text-[#1c2024] rounded-md hover:bg-[#f3f4f6] focus:outline-hidden"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="md:hidden bg-[#fafaf8] border-b border-[#e7e5e4] px-4 pt-2 pb-4 space-y-1 shadow-md animate-in fade-in duration-150"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-md text-sm font-medium text-[#525866] hover:text-[#1c2024] hover:bg-[#f3f4f6]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#e7e5e4] flex flex-col gap-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full py-2 text-sm font-medium text-[#1c2024] bg-[#f4f4f2] border border-[#d6d3d1] rounded-md"
              >
                <ExternalLink className="w-4 h-4 text-[#717784]" />
                <span>View Full Resume</span>
              </a>
              <a
                href={resumeUrl}
                download={PERSONAL_INFO.resumeFileName}
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full py-2 text-sm font-semibold text-white bg-[#1d4ed8] rounded-md shadow-xs"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
