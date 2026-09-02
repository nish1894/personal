import React from 'react';
import { EDUCATION_DATA } from '../data/portfolio';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-center gap-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101828]">
          Education & Academic Background
        </h2>
        <div className="h-[1px] flex-1 bg-[#eaecf0]"></div>
      </div>

      <div className="bg-white rounded-2xl border border-[#e4e7ec] p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#f2f4f7]">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-[#101828] text-white shrink-0 shadow-xs">
              <GraduationCap className="w-7 h-7 text-[#fafaf8]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#eff4ff] text-[#1d4ed8] border border-[#dbeafe]">
                  Premier National Institute
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#101828] tracking-tight">
                {EDUCATION_DATA.institution}
              </h3>
              <p className="text-sm font-medium text-[#475467] mt-0.5">
                Dual Degree Program (B.Tech. + M.Tech.)
              </p>
            </div>
          </div>

          <div className="self-start lg:self-center px-4 py-3 rounded-xl bg-[#fafaf8] border border-[#e4e7ec] flex items-center gap-3">
            <Award className="w-5 h-5 text-[#1d4ed8]" />
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#667085]">
                Cumulative Grade Point Average
              </div>
              <div className="text-lg font-bold text-[#101828]">
                {EDUCATION_DATA.cgpa}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-[#fafaf8] border border-[#eaecf0]">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085] mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#1d4ed8]" />
              Conferred Degrees
            </h4>
            <ul className="space-y-2 text-sm font-medium text-[#101828]">
              {EDUCATION_DATA.degrees.map((degree) => (
                <li key={degree} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]"></span>
                  <span>{degree}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#fafaf8] border border-[#eaecf0]">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085] mb-2">
              Foundational Focus
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#475467] leading-relaxed">
              {EDUCATION_DATA.highlights?.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#1d4ed8] font-bold">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
