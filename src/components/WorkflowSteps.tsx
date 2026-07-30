import React from 'react';
import { Sparkles } from 'lucide-react';

export const WorkflowSteps: React.FC = () => {
  return (
    <section id="workflow" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          EFFORTLESS EDITING
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">3-Step Workflow</h2>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
          No complicated setup. No advanced skills. Just drag, drop, and customize professional videos instantly.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        <div className="flex-1 w-full p-8 rounded-2xl border text-center transition-all shadow-lg bg-slate-800/80 border-slate-700/80 hover:border-blue-500/60">
          <div className="w-12 h-12 mx-auto rounded-xl bg-blue-600/20 text-blue-400 font-extrabold text-2xl flex items-center justify-center mb-4 border border-blue-500/30">
            1
          </div>
          <h3 className="text-xl font-extrabold text-white mb-2">Import</h3>
          <p className="text-xs text-slate-400">Drag Mogrt / AE template straight into Premiere or After Effects</p>
        </div>

        <div className="text-slate-500 hidden md:block text-2xl font-bold">➔</div>

        <div className="flex-1 w-full p-8 rounded-2xl border text-center transition-all shadow-lg bg-slate-800/80 border-slate-700/80 hover:border-blue-500/60">
          <div className="w-12 h-12 mx-auto rounded-xl bg-blue-600/20 text-blue-400 font-extrabold text-2xl flex items-center justify-center mb-4 border border-blue-500/30">
            2
          </div>
          <h3 className="text-xl font-extrabold text-white mb-2">Customize</h3>
          <p className="text-xs text-slate-400">Tweak text, colors, position & timing with intuitive essential controls</p>
        </div>

        <div className="text-slate-500 hidden md:block text-2xl font-bold">➔</div>

        <div className="flex-1 w-full p-8 rounded-2xl border text-center transition-all shadow-lg bg-slate-800/80 border-slate-700/80 hover:border-blue-500/60">
          <div className="w-12 h-12 mx-auto rounded-xl bg-blue-600/20 text-blue-400 font-extrabold text-2xl flex items-center justify-center mb-4 border border-blue-500/30">
            3
          </div>
          <h3 className="text-xl font-extrabold text-white mb-2">Export</h3>
          <p className="text-xs text-slate-400">Render crisp 4K UHD video ready for YouTube, Netflix, or SaaS promo</p>
        </div>
      </div>

      {/* Video Demonstration Showcase */}
      <div className="bg-slate-900 border border-slate-700/90 rounded-3xl overflow-hidden shadow-2xl relative p-3 sm:p-5 flex justify-center">
        <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover sm:object-contain rounded-2xl pointer-events-none"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const iframe = document.getElementById('gdrive-iframe-fallback');
              if (iframe) iframe.style.display = 'block';
            }}
          >
            <source src="https://lh3.googleusercontent.com/d/1G5dKqRJIdVcFuvsXFWvZ2AmbqjlUTvdN" type="video/mp4" />
            <source src="https://drive.google.com/uc?export=download&id=1G5dKqRJIdVcFuvsXFWvZ2AmbqjlUTvdN" type="video/mp4" />
          </video>
          <iframe
            id="gdrive-iframe-fallback"
            src="https://drive.google.com/file/d/1G5dKqRJIdVcFuvsXFWvZ2AmbqjlUTvdN/preview"
            title="MasterPacks Video Preview"
            className="absolute top-0 left-0 w-full h-full border-0 hidden"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};


