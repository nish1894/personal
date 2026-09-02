import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/portfolio';
import { Github, ExternalLink, ShieldCheck, Cpu, Layers, CheckCircle2, ArrowUpRight, Box } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'platform' | 'rag' | 'cloud'>('platform');
  const liftOff = FEATURED_PROJECTS[0];
  const secondaryProjects = FEATURED_PROJECTS.slice(1);

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-center gap-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101828]">
          Featured Technical Projects
        </h2>
        <div className="h-[1px] flex-1 bg-[#eaecf0]"></div>
      </div>

      {/* Primary Flagship Project: Lift Off Solutions */}
      <div
        id="flagship-project-card"
        className="bg-white rounded-2xl border-2 border-[#1d4ed8]/30 shadow-sm p-6 sm:p-8 mb-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 bg-[#1d4ed8] text-white text-[11px] font-mono font-semibold px-4 py-1 rounded-bl-lg tracking-wider uppercase">
          Flagship Architecture
        </div>

        {/* Title, Badge, & Repos */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold text-[#1d4ed8] bg-[#eff4ff] px-2.5 py-0.5 rounded border border-[#dbeafe]">
                Multi-Tenant AI & RAG Platform
              </span>
              <span className="text-xs font-mono text-[#667085] bg-[#f9fafb] px-2 py-0.5 rounded border border-[#eaecf0]">
                84 Automated Tests
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">
              {liftOff.title}
            </h3>
            <p className="text-sm sm:text-base font-medium text-[#475467] mt-1">
              {liftOff.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-center">
            <a
              href={liftOff.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="liftoff-github-link"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#101828] hover:bg-[#1f2937] rounded-lg transition-all active:scale-[0.98]"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Summary Description */}
        <p className="text-sm sm:text-base text-[#344054] leading-relaxed mb-6 max-w-4xl">
          {liftOff.description} Built with modular domain isolation, API-enforced role-based access control,
          and a decoupled Python service managing multi-tier context generation for enterprise document collections.
        </p>

        {/* Interactive Feature Deep-Dive Tabs */}
        <div className="border border-[#e4e7ec] rounded-xl bg-[#fafaf8] overflow-hidden mb-6">
          <div className="flex border-b border-[#e4e7ec] bg-[#f2f4f7]/60 text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveTab('platform')}
              className={`flex items-center gap-2 px-4 py-3 font-semibold border-b-2 transition-colors focus:outline-hidden ${
                activeTab === 'platform'
                  ? 'border-[#1d4ed8] text-[#1d4ed8] bg-white'
                  : 'border-transparent text-[#667085] hover:text-[#101828]'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Platform Core & Security</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rag')}
              className={`flex items-center gap-2 px-4 py-3 font-semibold border-b-2 transition-colors focus:outline-hidden ${
                activeTab === 'rag'
                  ? 'border-[#1d4ed8] text-[#1d4ed8] bg-white'
                  : 'border-transparent text-[#667085] hover:text-[#101828]'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>RAG Engine & LangGraph</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cloud')}
              className={`flex items-center gap-2 px-4 py-3 font-semibold border-b-2 transition-colors focus:outline-hidden ${
                activeTab === 'cloud'
                  ? 'border-[#1d4ed8] text-[#1d4ed8] bg-white'
                  : 'border-transparent text-[#667085] hover:text-[#101828]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Cloud Architecture</span>
            </button>
          </div>

          <div className="p-5 sm:p-6 bg-white min-h-[170px]">
            {activeTab === 'platform' && (
              <div className="space-y-3">
                <div className="text-xs font-mono font-medium text-[#667085] uppercase">
                  Verified Platform & Authentication Architecture
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#344054]">
                  {liftOff.platformBullets?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#fafaf8] border border-[#eaecf0]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'rag' && (
              <div className="space-y-3">
                <div className="text-xs font-mono font-medium text-[#667085] uppercase">
                  Python RAG Engine & 5-Tier Adaptive Retrieval
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#344054]">
                  {liftOff.ragBullets?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#fafaf8] border border-[#eaecf0]">
                      <Cpu className="w-4 h-4 text-[#1d4ed8] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'cloud' && (
              <div className="space-y-4">
                <div className="text-xs font-mono font-medium text-[#667085] uppercase">
                  Designed Cloud Deployment Topology
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  {liftOff.architectureNote}
                </p>

                {/* SVG Visual Layout for Cloud Diagram */}
                <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 bg-white rounded-lg border border-[#cbd5e1] shadow-2xs">
                      <div className="font-bold text-[#0f172a]">Frontend Client</div>
                      <div className="text-[11px] text-[#64748b] mt-0.5">React 19 on Vercel</div>
                      <div className="text-[10px] text-[#2563eb] mt-1">TanStack Query</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-[#cbd5e1] shadow-2xs">
                      <div className="font-bold text-[#0f172a]">Auth & Identity</div>
                      <div className="text-[11px] text-[#64748b] mt-0.5">Firebase Auth</div>
                      <div className="text-[10px] text-emerald-600 mt-1">Server Token Verify</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-[#cbd5e1] shadow-2xs">
                      <div className="font-bold text-[#0f172a]">API Microservice</div>
                      <div className="text-[11px] text-[#64748b] mt-0.5">Node.js / Fastify</div>
                      <div className="text-[10px] text-[#2563eb] mt-1">Google Cloud Run</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-[#cbd5e1] shadow-2xs">
                      <div className="font-bold text-[#0f172a]">RAG Engine</div>
                      <div className="text-[11px] text-[#64748b] mt-0.5">Python & LangGraph</div>
                      <div className="text-[10px] text-[#7c3aed] mt-1">5 Retrieval Tiers</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#f2f4f7]">
          {liftOff.technologies.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 bg-[#f8fafc] text-[#334155] border border-[#e2e8f0] rounded-md font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Secondary Projects Grid (Twitter Clone & EdTech Platform) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {secondaryProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="bg-white rounded-xl border border-[#e4e7ec] p-6 shadow-xs hover:border-[#cbd5e1] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-xl font-bold text-[#101828]">
                  {project.title}
                </h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md text-[#475467] hover:text-[#101828] hover:bg-[#f2f4f7] transition-colors"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <div className="text-xs font-semibold text-[#1d4ed8] mb-3">
                {project.tagline}
              </div>

              <p className="text-sm text-[#475467] leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Verified Features */}
              <ul className="space-y-2 text-xs text-[#344054] mb-5">
                {project.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8] mt-1.5 shrink-0"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#f2f4f7] mb-4">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 bg-[#f8fafc] text-[#334155] border border-[#e2e8f0] rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101828] hover:text-[#1d4ed8] transition-colors"
              >
                <span>View Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* More on GitHub Banner */}
      <div className="p-5 rounded-xl bg-[#fafaf8] border border-[#e4e7ec] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-white rounded-lg border border-[#eaecf0] text-[#101828]">
            <Box className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-[#101828]">
              Additional Engineering Work on GitHub
            </div>
            <div className="text-xs text-[#667085]">
              Includes PyStore (Django, Kafka-notified B2B2C marketplace) and open-source system explorations.
            </div>
          </div>
        </div>

        <a
          href="https://github.com/nish1894"
          target="_blank"
          rel="noopener noreferrer"
          id="github-profile-link-banner"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#101828] bg-white hover:bg-[#f9fafb] border border-[#d0d5dd] rounded-lg shadow-2xs transition-all whitespace-nowrap"
        >
          <Github className="w-4 h-4" />
          <span>github.com/nish1894</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#667085]" />
        </a>
      </div>
    </section>
  );
};
