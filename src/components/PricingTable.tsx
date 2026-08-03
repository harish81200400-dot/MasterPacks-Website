import React from 'react';
import { BUNDLE_ITEMS } from '../data/mockData';
import { Check, Flame, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingTableProps {
  onOpenCheckout: () => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
}

export const PricingTable: React.FC<PricingTableProps> = ({ onOpenCheckout, currency, onToggleCurrency }) => {
  const totalValueINR = 39999;
  const totalValueUSD = 500;

  const currentPriceINR = 499;
  currentPriceINR; // keep reference
  const currentPriceUSD = 12;

  return (
    <section id="pricing" className="py-8 sm:py-16 px-4 sm:px-6 relative scroll-mt-20 overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full w-[600px] h-[600px] mx-auto top-1/2 -translate-y-1/2 -z-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto bg-slate-800/90 rounded-3xl border border-blue-500/50 shadow-2xl overflow-hidden backdrop-blur-md">
        {/* Top Urgency Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-center py-3.5 font-black tracking-widest uppercase text-white text-xs sm:text-base flex items-center justify-center gap-2">
          <Flame className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-yellow-300 animate-bounce" />
          <span>🔥 Limited Time Launch Offer</span>
        </div>

        <div className="p-4 sm:p-10 md:p-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-center sm:text-left">Today You Get</h2>
            
            {/* Currency toggle */}
            <button
              onClick={onToggleCurrency}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Currency: <span className="text-blue-400 font-bold">{currency === 'INR' ? '₹ INR' : '$ USD'}</span>
            </button>
          </div>

          <p className="text-slate-400 text-center sm:text-left mb-6 sm:mb-8 text-xs sm:text-base">
            Start creating videos that actually look premium.
          </p>

          {/* List of included bundle items */}
          <div className="space-y-2.5 sm:space-y-3.5 mb-6 sm:mb-10 font-medium">
            {BUNDLE_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-slate-700/70 pb-2.5 sm:pb-3 text-xs sm:text-base">
                <span className="flex items-center gap-2 text-slate-200">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                  <span>{item.title}</span>
                </span>
                {item.highlight ? (
                  <span className="text-blue-400 font-bold bg-blue-500/10 px-2 py-0.5 rounded text-[10px] sm:text-xs border border-blue-500/20 shrink-0">
                    Included Forever
                  </span>
                ) : (
                  <span className="text-slate-400 line-through font-mono text-xs sm:text-sm shrink-0">
                    {currency === 'INR' ? `₹${item.originalPriceINR.toLocaleString('en-IN')}` : `$${item.originalPriceUSD}`}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Total & Discount Calculation */}
          <div className="flex justify-between items-end mb-5 sm:mb-8 bg-slate-900/80 p-4 sm:p-6 rounded-2xl border border-slate-700">
            <div>
              <p className="text-slate-400 text-xs sm:text-sm mb-1">
                Total Value: <span className="line-through font-mono text-slate-500">{currency === 'INR' ? `₹${totalValueINR.toLocaleString('en-IN')}+` : `$${totalValueUSD}+`}</span>
              </p>
              <p className="text-sm sm:text-lg font-bold text-slate-200">Today Only Special Price</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">97% OFF</span>
              <span className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                {currency === 'INR' ? '₹499' : '$12'}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://rzp.io/rzp/7cCIwcxW"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-black text-xl transition-all shadow-[0_0_35px_-5px_rgba(59,130,246,0.6)] hover:scale-[1.02] flex items-center justify-center gap-3 mb-6 group cursor-pointer"
          >
            <span>Get Instant Access Now</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="text-center text-xs sm:text-sm text-slate-400 flex flex-col items-center gap-2">
            <p className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Lifetime Access • Instant Download • No Monthly Fees
            </p>
            <p className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <Zap className="w-4 h-4 fill-current text-yellow-400" />
              Download Immediately After Purchase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
