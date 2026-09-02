import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { FileDown, ArrowDown, Github, Linkedin, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { HeroShowcase } from './HeroShowcase';

interface HeroProps {
  resumeUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ resumeUrl }) => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Availability & Location Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f2f4f7] border border-[#e4e7ec] text-xs font-medium text-[#344054]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#667085]" />
              {PERSONAL_INFO.location}
            </span>
            <span className="text-[#d0d5dd]">|</span>
            <span className="text-[#1d2939] font-medium">{PERSONAL_INFO.status}</span>
          </div>

          {/* Name & Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101828] leading-[1.12]">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold tracking-tight text-[#344054] leading-snug">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#475467] leading-relaxed max-w-2xl">
            {PERSONAL_INFO.subheadline}
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              id="hero-view-work-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1d4ed8] hover:bg-[#1e40af] rounded-lg shadow-xs hover:shadow-sm transition-all active:scale-[0.98]"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={resumeUrl}
              download={PERSONAL_INFO.resumeFileName}
              id="hero-download-resume-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#101828] bg-white hover:bg-[#f9fafb] border border-[#d0d5dd] rounded-lg shadow-2xs hover:shadow-xs transition-all active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4 text-[#475467]" />
              <span>Download Resume</span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-view-resume-link"
              className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-medium text-[#1d4ed8] hover:text-[#1e40af] transition-colors"
            >
              <span>View Resume</span>
              <span className="text-xs">↗</span>
            </a>
          </div>

          {/* Secondary Links & Credentials */}
          <div className="pt-4 border-t border-[#eaecf0] flex flex-wrap items-center justify-between gap-4 text-sm text-[#475467]">
            <div className="flex items-center gap-5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-link"
                className="inline-flex items-center gap-1.5 hover:text-[#101828] transition-colors"
              >
                <Github className="w-4 h-4 text-[#667085]" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-link"
                className="inline-flex items-center gap-1.5 hover:text-[#101828] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="hero-email-link"
                className="inline-flex items-center gap-1.5 hover:text-[#101828] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#667085]" />
                <span className="font-medium">Email</span>
              </a>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-[#667085] bg-[#f9fafb] px-2.5 py-1 rounded-md border border-[#eaecf0]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>B.Tech & M.Tech Dual Degree · IIT Bombay</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Endless Stairway Showcase */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <HeroShowcase />
        </div>
      </div>
    </section>
  );
};
