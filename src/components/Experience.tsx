import React, { useState } from 'react';
import { WORK_EXPERIENCE, EARLIER_EXPERIENCE } from '../data/portfolio';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <section id="experience" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-center gap-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101828]">
          Professional Experience
        </h2>
        <div className="h-[1px] flex-1 bg-[#eaecf0]"></div>
      </div>

      <div className="relative pl-0 sm:pl-4 space-y-12 before:hidden sm:before:block before:absolute before:top-3 before:bottom-3 before:left-[19px] before:w-[2px] before:bg-[#eaecf0]">
        {WORK_EXPERIENCE.map((exp, idx) => (
          <div key={exp.company} id={`experience-${idx}`} className="relative sm:pl-10 group">
            {/* Timeline indicator node */}
            <div className="hidden sm:flex absolute left-0 top-1.5 w-8 h-8 rounded-full bg-white border-2 border-[#1d4ed8] items-center justify-center -translate-x-1/2 group-hover:scale-110 transition-transform">
              <span className={`w-2 h-2 rounded-full ${exp.isCurrent ? 'bg-[#1d4ed8] animate-pulse' : 'bg-[#64748b]'}`}></span>
            </div>

            {/* Content card */}
            <div className="bg-white rounded-xl border border-[#e4e7ec] p-6 shadow-xs hover:border-[#cbd5e1] transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-4 border-b border-[#f2f4f7]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#101828]">
                      {exp.role}
                    </h3>
                    <span className="text-[#667085] font-normal">at</span>
                    <span className="text-base sm:text-lg font-semibold text-[#1d4ed8]">
                      {exp.company}
                    </span>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[#f2f4f7] text-[#344054] border border-[#e4e7ec]">
                      {exp.type}
                    </span>
                    {exp.isCurrent && (
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#667085]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.dates}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 md:max-w-xs justify-start md:justify-end">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 bg-[#f8fafc] text-[#334155] border border-[#e2e8f0] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bullets */}
              <ul className="mt-4 space-y-2.5 text-sm text-[#344054] leading-relaxed">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <ArrowRight className="w-4 h-4 text-[#1d4ed8] mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Earlier Experience Accordion */}
        <div className="sm:pl-10">
          <div className="border border-[#e4e7ec] rounded-xl bg-[#fafaf8] overflow-hidden">
            <button
              type="button"
              id="toggle-earlier-experience-btn"
              onClick={() => setShowEarlier(!showEarlier)}
              className="w-full px-5 py-3.5 text-left flex items-center justify-between text-xs font-mono font-medium text-[#475467] hover:text-[#101828] hover:bg-[#f2f4f7] transition-colors focus:outline-hidden"
              aria-expanded={showEarlier}
            >
              <div className="flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-[#667085]" />
                <span>Earlier Experience (Undergraduate Internship)</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-[#667085]">
                <span>{showEarlier ? 'Hide' : 'View'} details</span>
                {showEarlier ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </div>
            </button>

            {showEarlier && (
              <div className="p-5 border-t border-[#e4e7ec] bg-white space-y-2 text-sm animate-in fade-in duration-150">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-semibold text-[#101828]">
                    {EARLIER_EXPERIENCE.role} · <span className="text-[#475467]">{EARLIER_EXPERIENCE.company}</span>
                  </div>
                  <div className="text-xs font-mono text-[#667085]">
                    {EARLIER_EXPERIENCE.dates} · {EARLIER_EXPERIENCE.location}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  {EARLIER_EXPERIENCE.bullets[0]}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {EARLIER_EXPERIENCE.stack.map((s) => (
                    <span key={s} className="text-[10px] font-mono px-2 py-0.5 bg-[#f8fafc] text-[#475467] border border-[#e2e8f0] rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
