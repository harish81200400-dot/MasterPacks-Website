import React, { useState, useEffect } from 'react';
import { Sparkles, Flame } from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: () => void;
  currency: 'INR' | 'USD';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout, currency }) => {
  // Countdown Timer state (25 minutes)
  const [timeLeft, setTimeLeft] = useState({ minutes: 25, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 25, seconds: 0 }; // reset cycle
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative px-4 sm:px-6 pt-14 sm:pt-20 pb-2 text-center max-w-5xl mx-auto flex flex-col items-center">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Fixed Top Floating Ticker / Urgency Banner */}
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[96vw] inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-red-950/95 via-amber-950/95 to-red-950/95 border border-red-500/80 text-xs sm:text-sm font-extrabold text-amber-200 backdrop-blur-md shadow-[0_4px_25px_rgba(239,68,68,0.5)]">
        <span className="flex items-center gap-1 text-yellow-300 font-extrabold tracking-wide uppercase text-[10px] sm:text-xs whitespace-nowrap">
          <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current animate-bounce text-yellow-400 shrink-0" />
          <span>SPECIAL OFFER:</span>
        </span>
        <span className="font-bold text-slate-100 hidden sm:inline whitespace-nowrap">Price increases in</span>
        <span className="font-mono font-extrabold text-yellow-300 bg-slate-950/90 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border border-amber-500/50 shadow-inner text-[11px] sm:text-base tracking-wider shrink-0 whitespace-nowrap">
          {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
        </span>
      </div>

      {/* Editor Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-slate-800/80 border border-slate-700 mb-3 sm:mb-4 text-[10px] sm:text-sm font-semibold tracking-wider text-blue-400 shadow-md">
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400 shrink-0" />
        <span>BUILT BY EDITORS — FOR EDITORS</span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3 leading-snug sm:leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400 max-w-4xl">
        Create Premium Documentary & SaaS Videos Like Pro.
      </h1>

    </header>
  );
};
