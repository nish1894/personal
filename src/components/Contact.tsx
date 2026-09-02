import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Mail, Linkedin, Github, FileDown, Copy, Check, ExternalLink, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  resumeUrl: string;
}

export const Contact: React.FC<ContactProps> = ({ resumeUrl }) => {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  return (
    <section id="contact" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-center gap-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101828]">
          Get in Touch
        </h2>
        <div className="h-[1px] flex-1 bg-[#eaecf0]"></div>
      </div>

      <div className="bg-white rounded-2xl border border-[#e4e7ec] p-6 sm:p-10 shadow-xs">
        <div className="max-w-2xl">
          <p className="text-xl sm:text-2xl font-semibold text-[#101828] leading-snug mb-3">
            Whether you want to discuss engineering opportunities or just talk about systems and software, I would love to hear from you.
          </p>
          <p className="text-sm sm:text-base text-[#475467] leading-relaxed mb-8">
            I am based in Bengaluru and always glad to connect with engineers and teams building thoughtful, reliable products.
          </p>
        </div>

        {/* Primary Contact Action Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Email action with Mailto & Copy */}
          <div className="p-4 rounded-xl bg-[#fafaf8] border border-[#eaecf0] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-medium text-[#667085] uppercase">Email</span>
                <Mail className="w-4 h-4 text-[#1d4ed8]" />
              </div>
              <div className="text-xs font-medium text-[#101828] break-all mb-3">
                {PERSONAL_INFO.email}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="contact-email-mailto-btn"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-[#1d4ed8] hover:bg-[#1e40af] rounded-lg transition-colors text-center"
              >
                <span>Compose</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                type="button"
                id="contact-copy-email-btn"
                onClick={copyEmailToClipboard}
                className="p-2 rounded-lg bg-white border border-[#d0d5dd] hover:bg-[#f9fafb] text-[#344054] transition-colors"
                title="Copy email address"
                aria-label="Copy email address to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="p-4 rounded-xl bg-[#fafaf8] border border-[#eaecf0] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-medium text-[#667085] uppercase">LinkedIn</span>
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
              </div>
              <div className="text-xs font-medium text-[#101828] mb-3">
                Connect professionally on LinkedIn
              </div>
            </div>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin-btn"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-[#101828] bg-white border border-[#d0d5dd] hover:bg-[#f9fafb] rounded-lg transition-colors"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3 h-3 text-[#667085]" />
            </a>
          </div>

          {/* GitHub */}
          <div className="p-4 rounded-xl bg-[#fafaf8] border border-[#eaecf0] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-medium text-[#667085] uppercase">GitHub</span>
                <Github className="w-4 h-4 text-[#101828]" />
              </div>
              <div className="text-xs font-medium text-[#101828] mb-3">
                Review source code & repositories
              </div>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github-btn"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-[#101828] bg-white border border-[#d0d5dd] hover:bg-[#f9fafb] rounded-lg transition-colors"
            >
              <span>github.com/nish1894</span>
              <ExternalLink className="w-3 h-3 text-[#667085]" />
            </a>
          </div>

          {/* Resume PDF */}
          <div className="p-4 rounded-xl bg-[#fafaf8] border border-[#eaecf0] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-medium text-[#667085] uppercase">Official Resume</span>
                <FileDown className="w-4 h-4 text-[#1d4ed8]" />
              </div>
              <div className="text-xs font-medium text-[#101828] mb-3">
                PDF format for hiring teams
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-view-resume-btn"
                className="flex-1 inline-flex items-center justify-center py-2 px-2 text-xs font-semibold text-[#101828] bg-white border border-[#d0d5dd] hover:bg-[#f9fafb] rounded-lg transition-colors"
              >
                <span>View</span>
              </a>
              <a
                href={resumeUrl}
                download={PERSONAL_INFO.resumeFileName}
                id="contact-download-resume-btn"
                className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-2 text-xs font-semibold text-white bg-[#1d4ed8] hover:bg-[#1e40af] rounded-lg transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location & Direct Phone Metadata */}
        <div className="pt-6 border-t border-[#eaecf0] flex flex-wrap items-center justify-between gap-4 text-xs text-[#667085]">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#1d4ed8]" />
              Location: {PERSONAL_INFO.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#1d4ed8]" />
              Direct: {PERSONAL_INFO.phone}
            </span>
          </div>

          <div className="font-mono text-[11px] text-[#475467]">
            Direct email response guaranteed
          </div>
        </div>
      </div>
    </section>
  );
};
