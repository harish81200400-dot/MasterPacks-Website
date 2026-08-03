import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/mockData';
import { CheckCircle2, Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'editors' | 'designers' | 'directors'>('all');

  const filteredReviews = REVIEWS_DATA.filter(r => {
    if (filter === 'all') return true;
    return r.category === filter;
  });

  return (
    <section id="testimonials" className="py-8 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-6 sm:mb-12">
        <p className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-2">
          - LOVED BY CREATORS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          2,127+ Editors Trust Us
        </h2>
        <p className="text-slate-400 mt-2 text-xs sm:text-base">
          Read verified feedback from documentary editors, YouTubers, motion artists, and filmmakers worldwide.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-8">
          {[
            { id: 'all', label: `All Reviews (${REVIEWS_DATA.length})` },
            { id: 'editors', label: 'Video Editors' },
            { id: 'designers', label: 'Motion Designers' },
            { id: 'directors', label: 'Directors & Filmmakers' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-colors ${
                filter === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
          >
            <div>
              {/* Star Rating */}
              <div className="flex text-yellow-400 mb-3 text-sm tracking-widest">
                ★★★★★
              </div>

              {/* Review Text */}
              <p className="italic text-slate-200 mb-6 text-sm md:text-base leading-relaxed">
                "{rev.comment}"
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {rev.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-bold text-white text-sm flex items-center gap-1.5">
                  <span>{rev.name}</span>
                  {rev.verified && (
                    <span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-1.5 py-0.5 rounded flex items-center gap-1 border border-blue-500/20">
                      <CheckCircle2 className="w-3 h-3 text-blue-400" />
                      Verified
                    </span>
                  )}
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  {rev.role} • <span className="text-slate-500">{rev.handle}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
