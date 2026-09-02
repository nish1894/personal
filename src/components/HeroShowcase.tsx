import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight,
  Play,
  Pause,
  TrendingUp
} from 'lucide-react';

// Tech snacks catalog for the endless climbing journey
const TECH_CATALOG = [
  { name: 'Node.js', snackIcon: '🫐', speech: 'Fueling up on non-blocking I/O and event loop mechanics!' },
  { name: 'Apache Kafka', snackIcon: '⚡', speech: 'Absorbing high-throughput message streams and partitioned topics!' },
  { name: 'Redis Cache', snackIcon: '☕', speech: 'Devouring Redis cache hits to cut database read latency!' },
  { name: 'MongoDB', snackIcon: '💎', speech: 'Indexing polymorphic schemas and compound query filters!' },
  { name: 'Docker', snackIcon: '🍱', speech: 'Packaging reproducible multi-stage containers for production!' },
  { name: 'LangGraph', snackIcon: '⭐', speech: 'Orchestrating stateful multi-agent workflows and tool calling!' },
  { name: 'Fastify APIs', snackIcon: '🍕', speech: 'Building schema-validated microservice endpoints with low overhead!' },
  { name: 'Vector Search', snackIcon: '🔮', speech: 'Traversing high-dimensional embeddings for semantic retrieval!' },
  { name: 'MQTT Broker', snackIcon: '📡', speech: 'Ingesting low-bandwidth IoT sensor telemetry reliably!' },
  { name: 'Distributed Systems', snackIcon: '🍩', speech: 'Studying consensus protocols and fault-tolerant architectures!' },
];

const STEP_OFFSETS = [-1, 0, 1, 2, 3] as const;

// Helper to determine step visual styling
const getStepVisibilityClass = (offset: number) => {
  if (offset === 0) return 'scale-105 z-20';
  if (offset > 0) return 'opacity-90 z-10';
  return 'opacity-40 z-0';
};

// Helper for snack icon styling
const getSnackClass = (isCurrent: boolean, isPast: boolean, isMunching: boolean) => {
  if (isCurrent && isMunching) {
    return 'scale-125 rotate-12 bg-white border border-[#cbd5e1]';
  }
  if (isCurrent) {
    return 'scale-110 animate-bounce bg-white border border-[#cbd5e1]';
  }
  if (isPast) {
    return 'scale-90 bg-emerald-50 border border-emerald-300 text-emerald-600';
  }
  return 'scale-90 bg-white border border-[#cbd5e1]';
};

// Mascot Face component
const MascotAvatar: React.FC<{ isMunching: boolean; isHopping: boolean }> = ({ isMunching, isHopping }) => {
  const bgColor = isMunching ? '#1e293b' : '#0f172a';

  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <circle cx="20" cy="20" r="18" fill={bgColor} />
      <circle cx="20" cy="5" r="3" fill="#38bdf8" />
      <line x1="20" y1="8" x2="20" y2="12" stroke="#38bdf8" strokeWidth="2" />
      {isMunching ? (
        <>
          <path d="M12 18 Q16 14 20 18" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M22 18 Q26 14 30 18" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="21" cy="26" r="4" fill="#f43f5e" />
          <path d="M6 8 L10 12" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : isHopping ? (
        <>
          <path d="M14 18 L16 14 L18 18 Z" fill="#38bdf8" />
          <path d="M24 18 L26 14 L28 18 Z" fill="#38bdf8" />
          <path d="M14 26 Q21 31 28 26" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </>
      ) : (
        <>
          <circle cx="15" cy="18" r="2.5" fill="#38bdf8" />
          <circle cx="27" cy="18" r="2.5" fill="#38bdf8" />
          <path d="M15 25 Q21 29 27 25" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </>
      )}
    </svg>
  );
};

export const HeroShowcase: React.FC = () => {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [altitude, setAltitude] = useState<number>(320);
  const [snacksEaten, setSnacksEaten] = useState<number>(3);
  const [isClimbing, setIsClimbing] = useState<boolean>(true);
  const [speed, setSpeed] = useState<'normal' | 'fast'>('normal');
  const [isHopping, setIsHopping] = useState<boolean>(false);
  const [isMunching, setIsMunching] = useState<boolean>(false);
  const [xpPopup, setXpPopup] = useState<string | null>(null);

  // Unified step progression logic
  const advanceStep = useCallback(() => {
    setIsHopping(true);
    setIsMunching(true);

    setStepIndex((prev) => {
      const nextIdx = (prev + 1) % TECH_CATALOG.length;
      setXpPopup(`+100 XP ${TECH_CATALOG[nextIdx].name}`);
      return nextIdx;
    });

    setAltitude((prev) => prev + 45);
    setSnacksEaten((prev) => prev + 1);

    setTimeout(() => {
      setIsHopping(false);
      setIsMunching(false);
    }, 500);

    setTimeout(() => {
      setXpPopup(null);
    }, 1200);
  }, []);

  // Interval timer for endless ascent
  useEffect(() => {
    if (!isClimbing) return;

    const intervalTime = speed === 'normal' ? 2200 : 1100;
    const interval = setInterval(advanceStep, intervalTime);
    return () => clearInterval(interval);
  }, [isClimbing, speed, advanceStep]);

  const currentTech = TECH_CATALOG[stepIndex];

  // Visible steps in the endless stairway slice
  const visibleSteps = STEP_OFFSETS.map((offset) => {
    const idx = (stepIndex + offset + TECH_CATALOG.length * 10) % TECH_CATALOG.length;
    return {
      offset,
      tech: TECH_CATALOG[idx],
    };
  });

  const mascotTransform = isMunching
    ? 'scale-125 rotate-6'
    : isHopping
    ? 'scale-110 -translate-y-1'
    : 'scale-100';

  return (
    <div
      id="hero-interactive-showcase"
      className="w-full max-w-lg bg-white rounded-2xl border border-[#e4e7ec] p-5 sm:p-6 shadow-xs relative overflow-hidden"
    >
      <div className="space-y-3.5">
        {/* Mascot Speech Bubble & Active Thought */}
        <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] flex items-center gap-3 min-h-[62px] relative overflow-hidden">
          <div className={`transition-transform duration-300 ${mascotTransform}`}>
            <MascotAvatar isMunching={isMunching} isHopping={isHopping} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-[11px] font-mono font-semibold text-[#1d4ed8]">
              <span>Byte the Engineer Mascot</span>
              <span>·</span>
              <span className="text-emerald-700 font-bold">Altitude {altitude}m</span>
            </div>
            <p className="text-xs text-[#101828] font-medium leading-snug mt-0.5">
              "{currentTech.speech}"
            </p>
          </div>
        </div>

        {/* Endless Ascending Canvas Scene */}
        <div className="bg-[#fafaf8] rounded-xl border border-[#eaecf0] p-4 relative overflow-hidden h-[220px] flex flex-col justify-between">
          {/* Background Sky Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Left Free Space: Single Floating XP Banner */}
          {xpPopup && (
            <div className="absolute left-4 top-3 z-20">
              <div className="bg-amber-500 text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm animate-bounce flex items-center gap-1">
                <span>⚡</span>
                <span>{xpPopup}</span>
              </div>
            </div>
          )}

          {/* Ambient Upward Directional Indicator with Altitude on Right */}
          <div className="absolute right-4 top-3 text-[10px] font-mono text-[#64748b] bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded border border-[#e2e8f0] flex items-center gap-1.5 z-20">
            <TrendingUp className="w-3.5 h-3.5 text-[#1d4ed8]" />
            <span className="font-semibold text-[#0f172a]">{altitude}m</span>
          </div>

          {/* 3D-Styled Endless Staircase Track */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full max-w-sm h-36">
              {visibleSteps.map((item) => {
                const posX = 160 + item.offset * 64;
                const posY = 75 - item.offset * 30;
                const isCurrent = item.offset === 0;
                const isPast = item.offset < 0;

                return (
                  <div
                    key={`${item.tech.name}-${item.offset}`}
                    style={{
                      left: `${posX}px`,
                      top: `${posY}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`absolute transition-all duration-500 ${getStepVisibilityClass(item.offset)}`}
                  >
                    {/* Floating Tech Snack Item on Step */}
                    <div className="flex flex-col items-center mb-1">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shadow-xs transition-transform duration-300 ${getSnackClass(
                          isCurrent,
                          isPast,
                          isMunching
                        )}`}
                      >
                        <span className="text-sm">{item.tech.snackIcon}</span>
                      </div>
                      <span
                        className={`text-[9px] font-mono font-bold whitespace-nowrap mt-0.5 px-1.5 py-0.2 rounded ${
                          isCurrent
                            ? 'bg-[#1d4ed8] text-white shadow-2xs'
                            : 'bg-white/90 text-[#475467] border border-[#eaecf0]'
                        }`}
                      >
                        {item.tech.name}
                      </span>
                    </div>

                    {/* Single Sleek Stair Slab */}
                    <div
                      className={`w-16 h-3 rounded-xs border shadow-xs relative transition-colors ${
                        isCurrent
                          ? 'bg-[#dbeafe] border-[#1d4ed8]'
                          : 'bg-[#e2e8f0] border-[#cbd5e1]'
                      }`}
                    >
                      {isCurrent && (
                        <div className="absolute inset-0 bg-[#3b82f6]/20 animate-pulse rounded-xs" />
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Animated Mascot Character (Standing/Hopping on Step 0) */}
              <div
                style={{
                  left: '160px',
                  top: isHopping ? '30px' : '44px',
                  transform: 'translate(-50%, -50%)',
                }}
                className={`absolute z-30 transition-all duration-300 flex flex-col items-center ${
                  isHopping ? 'rotate-[-4deg]' : ''
                }`}
              >
                {/* Mascot Sprite Body */}
                <div className="relative">
                  {/* Jetpack Propulsion Flame when hopping */}
                  {isHopping && (
                    <div className="absolute -bottom-2 -left-1 w-2 h-3 bg-amber-400 rounded-full blur-[1px] animate-pulse" />
                  )}
                  
                  {/* Mascot Head & Face */}
                  <div className="w-9 h-9 rounded-xl bg-[#0f172a] border-2 border-[#38bdf8] flex items-center justify-center shadow-md relative">
                    {/* Blinking Antenna */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
                      <div className="w-0.5 h-2 bg-[#38bdf8]" />
                    </div>

                    {/* Face Screen */}
                    {isMunching ? (
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] text-[#38bdf8] font-bold">^ ‿ ^</span>
                        <span className="text-[7px] text-[#f43f5e] font-mono font-bold">*munch*</span>
                      </div>
                    ) : (
                      <span className="text-[11px] text-[#38bdf8] font-bold">
                        {isHopping ? '★ ‿ ★' : '● ‿ ●'}
                      </span>
                    )}
                  </div>

                  {/* Cute Developer Backpack */}
                  <div className="absolute top-2 -left-1.5 w-2 h-5 bg-[#334155] rounded-l-sm border border-[#1e293b]" />
                </div>

                {/* Mascot Feet on Stair */}
                <div className="flex gap-2 mt-0.5">
                  <div className={`w-2 h-1 rounded-full bg-[#1e293b] ${isHopping ? '-translate-y-1' : ''}`} />
                  <div className={`w-2 h-1 rounded-full bg-[#1e293b] ${isHopping ? '-translate-y-0.5' : ''}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Status Bar: Speed, Pause/Play, Progress */}
          <div className="pt-2 border-t border-[#eaecf0] flex items-center justify-between z-20 text-[11px] text-[#667085]">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-emerald-700 font-mono font-bold text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                {isClimbing ? 'Continuous Climb' : 'Paused'}
              </span>
              <span className="font-mono text-[10px] text-[#64748b]">
                {snacksEaten} Snacks Consumed
              </span>
            </div>

            {/* Action Controls */}
            <div className="flex items-center gap-1.5">
              {/* Play / Pause Toggle */}
              <button
                type="button"
                id="stairs-play-pause-btn"
                onClick={() => setIsClimbing(!isClimbing)}
                className="p-1 text-xs text-[#475467] hover:text-[#0f172a] rounded border border-[#cbd5e1] hover:bg-white transition-colors"
                title={isClimbing ? 'Pause climbing' : 'Resume climbing'}
              >
                {isClimbing ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-emerald-600" />}
              </button>

              {/* Speed Toggle */}
              <button
                type="button"
                id="stairs-speed-btn"
                onClick={() => setSpeed(speed === 'normal' ? 'fast' : 'normal')}
                className={`px-1.5 py-0.5 text-[10px] font-mono rounded border transition-colors ${
                  speed === 'fast'
                    ? 'bg-amber-100 text-amber-800 border-amber-300 font-bold'
                    : 'bg-white text-[#475467] border-[#cbd5e1]'
                }`}
                title="Toggle speed"
              >
                {speed === 'fast' ? '2x Fast' : '1x Stride'}
              </button>

              {/* Feed Next Snack Button */}
              <button
                type="button"
                id="stairs-feed-btn"
                onClick={advanceStep}
                className="inline-flex items-center gap-1 py-1 px-2.5 text-[11px] font-semibold text-white bg-[#1d4ed8] hover:bg-[#1e40af] rounded-md transition-colors shadow-2xs"
                title="Feed next tech snack immediately"
              >
                <span>Feed</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
