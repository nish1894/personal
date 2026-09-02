import React from 'react';
import { Layers, Server, Cpu, GitBranch } from 'lucide-react';

const HIGHLIGHTS = [
  {
    title: 'Backend Microservices',
    tag: 'Node.js · Fastify · Docker',
    description: 'Production services, strict inter-service contracts, clean API boundaries, and containerized deployments.',
    icon: Server,
  },
  {
    title: 'Performance & Caching Systems',
    tag: 'Redis · Mongo Indexing',
    description: 'Eliminating redundant DB queries, optimizing in-memory cache lifetimes, and designing cache-first flows.',
    icon: Layers,
  },
  {
    title: 'Event-Driven Messaging Pipelines',
    tag: 'Kafka · MQTT Pub/Sub',
    description: 'Decoupled asynchronous event streams engineered for high-throughput IoT telemetry and background jobs.',
    icon: GitBranch,
  },
  {
    title: 'Applied AI & RAG Engineering',
    tag: 'Vector Search · LangGraph',
    description: 'Multi-tier retrieval architectures, contextual search pipelines, and agentic workflows.',
    icon: Cpu,
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101828]">
          About Me
        </h2>
        <div className="h-[1px] flex-1 bg-[#eaecf0]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Narrative paragraphs */}
        <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#344054] leading-relaxed">
          <p>
            I am an IIT Bombay graduate and Software Developer who discovered a genuine passion for engineering software after exploring different fields for years. Once I started building and seeing how code powers real-world systems, I knew this was what I wanted to dedicate myself to. I am on this journey to continually learn, sharpen my craft, and become one of the best software engineers.
          </p>
          <p>
            My day-to-day work centers around backend engineering: Node.js microservices, MongoDB, Redis, Apache Kafka, MQTT, and Docker. I take pride in understanding systems from first principles, covering everything from architectural design and hands-on coding to performance tuning, containerization, and production support.
          </p>
          <p>
            What excites me most is diving into complex data flows, finding where unnecessary overhead slows things down, and solving the root bottleneck rather than applying superficial fixes. Beyond backend services, I also enjoy building modern full-stack and AI-integrated applications with React, TypeScript, Fastify, Python, LangChain, and LangGraph.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-medium text-[#475467] bg-[#f2f4f7] px-3 py-1.5 rounded-md border border-[#e4e7ec]">
              IIT Bombay Dual Degree (B.Tech + M.Tech)
            </span>
            <span className="text-xs font-mono font-medium text-[#475467] bg-[#f2f4f7] px-3 py-1.5 rounded-md border border-[#e4e7ec]">
              Production Systems Ownership
            </span>
            <span className="text-xs font-mono font-medium text-[#475467] bg-[#f2f4f7] px-3 py-1.5 rounded-md border border-[#e4e7ec]">
              Bengaluru, India
            </span>
          </div>
        </div>

        {/* Right Column: Core Engineering Pillars */}
        <div className="lg:col-span-5 bg-[#fafaf8] rounded-2xl border border-[#e4e7ec] p-6 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#eaecf0]">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085]">
              Core Engineering Focus
            </span>
            <span className="text-[11px] font-mono text-[#1d4ed8] bg-[#eff4ff] px-2 py-0.5 rounded border border-[#dbeafe]">
              Specializations
            </span>
          </div>

          <div className="divide-y divide-[#eaecf0]">
            {HIGHLIGHTS.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className="py-3.5 first:pt-0 last:pb-0 group">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-2 rounded-lg bg-white text-[#344054] group-hover:text-[#1d4ed8] group-hover:border-[#cbd5e1] shrink-0 border border-[#e4e7ec] transition-colors shadow-2xs">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                        <h4 className="text-sm font-bold text-[#101828]">
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-mono text-[#667085] bg-white px-1.5 py-0.5 rounded border border-[#eaecf0]">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#475467] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
