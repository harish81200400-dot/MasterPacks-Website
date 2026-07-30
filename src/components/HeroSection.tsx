import React, { useState, useEffect } from 'react';
import { Sparkles, Flame } from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: () => void;
  currency: 'INR' | 'USD';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout, currency }) => {
  // Countdown Timer state
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 18, seconds: 42 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 }; // reset cycle
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative px-6 pt-24 sm:pt-32 pb-4 text-center max-w-5xl mx-auto flex flex-col items-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Ticker / Urgency Banner */}
      <div className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs sm:text-sm font-medium text-blue-300 backdrop-blur-md shadow-inner">
        <span className="flex items-center gap-1 text-yellow-400 font-bold">
          <Flame className="w-4 h-4 fill-current animate-pulse text-yellow-500" />
          SPECIAL OFFER:
        </span>
        <span>Price increases in</span>
        <span className="font-mono font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
          {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
        </span>
      </div>

      {/* Editor Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 mb-6 text-xs sm:text-sm font-semibold tracking-wider text-blue-400 shadow-md">
        <Sparkles className="w-4 h-4 text-blue-400" />
        <span>BUILT BY EDITORS — FOR EDITORS</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-2 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
        Create Premium Documentary & SaaS Videos Like Pro.
      </h1>


    </header>
  );
};
