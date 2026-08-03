import React from 'react';
import { Gift, CheckCircle2, Sparkles, FolderArchive, Zap } from 'lucide-react';

interface LibraryBonusProps {
  onOpenCheckout: () => void;
  currency: 'INR' | 'USD';
}

export const LibraryBonus: React.FC<LibraryBonusProps> = ({ onOpenCheckout, currency }) => {
  return (
    <section id="library" className="py-8 sm:py-16 px-4 sm:px-6 bg-slate-900 border-t border-slate-800 scroll-mt-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
          <FolderArchive className="w-3.5 h-3.5" />
          COMPLETE VAULT ARCHITECTURE
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 text-white tracking-tight">
          Your Complete Motion Graphics Library.
        </h2>
        <p className="text-slate-400 mb-6 sm:mb-12 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Everything you need for modern documentary storytelling, cinematic edits, and SaaS motion design.
        </p>

        {/* 2 Category Columns */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-16 text-left">
          {/* Documentary Assets Card */}
          <div className="bg-slate-800 p-5 sm:p-8 rounded-3xl border border-slate-700 hover:border-blue-500/60 transition-all shadow-xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xl sm:text-2xl mb-3 sm:mb-4 border border-blue-500/20">
              📜
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4 text-blue-400">Documentary Assets</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-slate-300 font-medium text-sm sm:text-base">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
                World Map Animations (3D Topo & Vector Flight Paths)
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
                Cinematic Title Packs & Lower-Third Engines
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
                Storytelling Assets (Vintage Paper, Ink Drops, Film Scratches)
              </li>
            </ul>
          </div>

          {/* SaaS Promo Card */}
          <div className="bg-slate-800 p-5 sm:p-8 rounded-3xl border border-slate-700 hover:border-purple-500/60 transition-all shadow-xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-xl sm:text-2xl mb-3 sm:mb-4 border border-purple-500/20">
              🚀
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4 text-purple-400">SaaS Promo</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-slate-300 font-medium text-sm sm:text-base">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0" />
                3D Web & App Promo Packs (Mockup Devices & Frames)
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0" />
                Chat UI Elements & Typing Bubble Popups
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0" />
                SaaS Animation Pack (Metric Counters & Interactive Charts)
              </li>
            </ul>
          </div>
        </div>

        {/* BONUS VAULT BANNER */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 p-5 sm:p-8 md:p-12 rounded-3xl border border-purple-500/50 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-purple-400/30 text-purple-300 text-xs font-extrabold uppercase tracking-widest mb-4">
              <Gift className="w-4 h-4 text-purple-300 animate-bounce" />
              SPECIAL INCLUDED BONUS
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">
              🎁 Unlock The Creator Bonus Vault
            </h3>

            <p className="text-purple-300 font-bold text-xl mb-6">
              Worth {currency === 'INR' ? '₹15,000+' : '$180+'} Free
            </p>

            <p className="text-slate-200 max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
              Everything from transitions, titles, reels, icons, HUDs, and SFX — ready to drag, drop, and customize.
            </p>

            <a
              href="https://rzp.io/rzp/7cCIwcxW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-purple-950 font-extrabold rounded-xl text-xl shadow-2xl hover:scale-105 transition-all"
            >
              <Zap className="w-5 h-5 fill-current text-amber-500" />
              <span>👉 {currency === 'INR' ? '₹499' : '$12'} Today Only</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
