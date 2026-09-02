import React from 'react';
import { SKILL_GROUPS } from '../data/portfolio';
import { Check, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const primarySkills = SKILL_GROUPS.find((g) => g.isPrimary);
  const otherSkillGroups = SKILL_GROUPS.filter((g) => !g.isPrimary);

  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-center gap-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101828]">
          Technical Skills & Tooling
        </h2>
        <div className="h-[1px] flex-1 bg-[#eaecf0]"></div>
      </div>

      {/* Primary Professional Technologies Callout */}
      {primarySkills && (
        <div className="mb-10 p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#1d4ed8]/20 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#eaecf0]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#eff4ff] text-[#1d4ed8] border border-[#dbeafe]">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#101828]">
                  Primary Professional Technologies
                </h3>
                <p className="text-xs text-[#667085]">
                  Technologies with active production deployment, debugging, and optimization ownership
                </p>
              </div>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
              Production Verified
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {primarySkills.skills.map((skill) => (
              <div
                key={skill}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#eff4ff]/60 border border-[#bfdbfe] text-xs font-semibold text-[#1e40af]"
              >
                <Check className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherSkillGroups.map((group) => (
          <div
            key={group.category}
            className="p-5 rounded-xl bg-white border border-[#e4e7ec] shadow-xs flex flex-col justify-between"
          >
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085] pb-2 mb-3 border-b border-[#f2f4f7]">
                {group.category}
              </h4>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 bg-[#fafaf8] text-[#344054] border border-[#e4e7ec] rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
