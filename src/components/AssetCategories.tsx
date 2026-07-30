import React, { useState } from 'react';
import { ASSET_CATEGORIES } from '../data/mockData';
import { AssetCategory } from '../types';
import { Sparkles, Play, Layers, Monitor, FileText, CheckCircle2, Eye, X } from 'lucide-react';

export const AssetCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<AssetCategory | null>(null);

  return (
    <section id="what-it-helps" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          VERSATILE MOTION LIBRARY
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          ✨ What This Bundle Helps You Create
        </h2>
        <p className="text-slate-400 text-base md:text-lg">
          Click any video type below to inspect the templates, timelines, and sample motion elements included in the bundle.
        </p>
      </div>

      {/* Grid Cards from user's HTML */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center mb-10">
        {ASSET_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => setSelectedCategory(cat)}
            className="group cursor-pointer bg-slate-800/80 hover:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-700/80 hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col items-center justify-between min-h-[160px]"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
            <h3 className="font-bold text-lg text-slate-100 group-hover:text-blue-400 transition-colors">
              {cat.name}
            </h3>
            <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-blue-400 opacity-80 group-hover:opacity-100 font-medium">
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Assets ({cat.itemCount}+)</span>
            </div>
          </div>
        ))}
      </div>

      {/* Video Demonstration Showcase Below Cards */}
      <div className="mt-8 bg-slate-900 border border-slate-700/90 rounded-3xl overflow-hidden shadow-2xl relative p-3 sm:p-5 flex flex-col items-center">
        <div className="mb-3 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Play className="w-3 h-3 fill-current" /> Live Bundle Video Preview
          </span>
        </div>
        <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/Uj9YbGSl8zs?autoplay=1&mute=1&loop=1&playlist=Uj9YbGSl8zs&rel=0&modestbranding=1"
            title="MasterPacks Bundle Video Preview"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Category Modal Preview */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{selectedCategory.icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedCategory.name}</h3>
                <p className="text-xs text-blue-400 font-mono font-medium">
                  {selectedCategory.itemCount}+ Production-Ready AE Assets Included
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
              {selectedCategory.description}
            </p>

            {/* Included Tags */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Asset Types:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCategory.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-800 text-slate-200 text-xs rounded-full border border-slate-700 font-medium">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sample Asset Cards inside Modal */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Sample Asset Templates:</h4>
              {selectedCategory.sampleItems.map((item, idx) => (
                <div key={idx} className={`p-4 rounded-xl bg-gradient-to-r ${item.previewGradient} border border-slate-700/60 flex items-center justify-between text-white shadow-md`}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-4 h-4 fill-current text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-white">{item.title}</h5>
                      <span className="text-xs text-slate-300">{item.type} • {item.resolution}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono bg-black/40 px-2.5 py-1 rounded border border-white/10 text-slate-200">
                    {item.format}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-medium text-sm transition-colors"
              >
                Close Preview
              </button>
              <a
                href="https://rzp.io/rzp/7cCIwcxW"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedCategory(null)}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg flex items-center gap-1"
              >
                Unlock Entire Category →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
