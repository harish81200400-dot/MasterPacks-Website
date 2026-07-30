import React, { useState, useEffect } from 'react';
import { Sparkles, Check, Star, ShieldCheck, Flame, ArrowRight, Play } from 'lucide-react';

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
    <header className="relative px-6 pt-28 sm:pt-36 pb-20 text-center max-w-5xl mx-auto flex flex-col items-center overflow-hidden">
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
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 mb-8 text-xs sm:text-sm font-semibold tracking-wider text-blue-400 shadow-md">
        <Sparkles className="w-4 h-4 text-blue-400" />
        <span>BUILT BY EDITORS — FOR EDITORS</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
        Create Premium Documentary & SaaS Videos Like Pro.
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl text-slate-300 mb-10 max-w-3xl leading-relaxed font-normal">
        10,000+ production-ready After Effects assets for documentary storytelling, cinematic edits, YouTube videos, commercials, and SaaS motion design.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <a
          href="https://rzp.io/rzp/7cCIwcxW"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_40px_-5px_rgba(59,130,246,0.6)] hover:scale-105 flex items-center justify-center gap-3 group"
        >
          <span>Start Editing Like Pros</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="#what-it-helps"
          className="w-full sm:w-auto px-7 py-4 bg-slate-800/90 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold text-base transition-all border border-slate-700 flex items-center justify-center gap-2"
        >
          <Play className="w-4 h-4 fill-current text-blue-400" />
          <span>Explore Asset Showcase</span>
        </a>
      </div>

      {/* Rating & Social Proof */}
      <div className="mt-8 flex flex-col items-center gap-2 text-slate-300 text-sm">
        <div className="flex text-yellow-400 text-lg tracking-widest">
          ★★★★★
        </div>
        <p className="font-medium text-slate-400">
          <strong className="text-white">4.8/5 rating</strong> from 2,127+ professional editors & motion designers
        </p>
      </div>

      {/* Features Mini-Bar */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 pt-8 border-t border-slate-800/80 text-xs sm:text-sm font-semibold text-slate-300 w-full">
        <span className="flex items-center gap-2 bg-slate-800/40 px-3.5 py-1.5 rounded-full border border-slate-700/50">
          <Check className="w-4 h-4 text-emerald-400" />
          4K Resolution
        </span>
        <span className="flex items-center gap-2 bg-slate-800/40 px-3.5 py-1.5 rounded-full border border-slate-700/50">
          <Check className="w-4 h-4 text-emerald-400" />
          Organized Timeline
        </span>
        <span className="flex items-center gap-2 bg-slate-800/40 px-3.5 py-1.5 rounded-full border border-slate-700/50">
          <Check className="w-4 h-4 text-emerald-400" />
          Customize Everything
        </span>
        <span className="flex items-center gap-2 bg-slate-800/40 px-3.5 py-1.5 rounded-full border border-slate-700/50">
          <Check className="w-4 h-4 text-emerald-400" />
          Commercial License
        </span>
      </div>
    </header>
  );
};
