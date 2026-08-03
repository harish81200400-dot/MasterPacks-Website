import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

export const AssetCategories: React.FC = () => {
  return (
    <section id="what-it-helps" className="pt-1 pb-8 sm:pb-12 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Live Video Showcase */}
      <div className="bg-slate-900 border border-slate-700/90 rounded-3xl overflow-hidden shadow-2xl relative p-3 sm:p-5 flex flex-col items-center">
        <div className="mb-3 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Play className="w-3 h-3 fill-current" /> Live Bundle Video Preview
          </span>
        </div>
        <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl mb-6">
          <iframe
            src="https://www.youtube.com/embed/Uj9YbGSl8zs?autoplay=1&mute=1&loop=1&playlist=Uj9YbGSl8zs&rel=0&modestbranding=1"
            title="MasterPacks Bundle Video Preview"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Action Button Below Video */}
        <div className="w-full flex justify-center mb-2">
          <a
            href="https://rzp.io/rzp/7cCIwcxW"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-extrabold text-lg transition-all shadow-[0_0_35px_-5px_rgba(59,130,246,0.6)] hover:scale-105 flex items-center justify-center gap-3 group"
          >
            <span>Buy now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
