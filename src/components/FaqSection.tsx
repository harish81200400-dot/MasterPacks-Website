import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';
import { Search, Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQ_DATA.filter(f =>
    f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-6 max-w-3xl mx-auto scroll-mt-20">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          HELP CENTER
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Questions? We've Got Answers.
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-2">
          Everything you need to know about the assets, licenses, and compatibility.
        </p>

        {/* FAQ Search Bar */}
        <div className="mt-6 relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g., beginner, license, updates)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Accordions */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <p className="text-center text-slate-400 text-sm py-8">
            No matching questions found. Contact our support team below!
          </p>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-slate-800 rounded-xl border transition-all overflow-hidden ${
                  isOpen ? 'border-blue-500 shadow-lg shadow-blue-500/5' : 'border-slate-700/80 hover:border-slate-600'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex justify-between items-center text-left font-bold cursor-pointer p-6 text-base md:text-lg text-white gap-4"
                >
                  <span>{faq.question}</span>
                  <span className={`transition-transform duration-300 text-blue-400 text-2xl shrink-0 ${isOpen ? 'rotate-45 text-blue-400' : ''}`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="text-slate-300 px-6 pb-6 text-sm md:text-base leading-relaxed border-t border-slate-700/50 pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
