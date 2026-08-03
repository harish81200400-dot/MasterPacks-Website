import React, { useState } from 'react';
import { ShieldCheck, Mail, FileText, X, ArrowRight, Zap, Sparkles } from 'lucide-react';
import logoImg from '../assets/images/masterpacks_logo_1785221159691.jpg';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'contact' | 'privacy' | 'refund' | 'terms' | null>(null);

  return (
    <>
      <footer className="border-t border-slate-800 bg-slate-950 pt-8 sm:pt-12 pb-24 sm:pb-28 px-4 sm:px-6 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col items-center mb-6 sm:mb-10 text-center">
          {/* Main Footer Buy Now CTA */}
          <div className="w-full max-w-4xl p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/80 via-indigo-950/80 to-purple-950/80 border border-blue-500/40 shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-12">
            <div className="text-left">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-yellow-500/30 mb-2">
                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" /> Instant Lifetime Access
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                Unlock The Complete MasterPacks Bundle
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Get all After Effects assets, templates, sound effects & bonus packs today.
              </p>
            </div>
            <a
              href="https://rzp.io/rzp/7cCIwcxW"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-extrabold text-base sm:text-lg transition-all shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)] hover:scale-105 flex items-center justify-center gap-2.5 sm:gap-3 shrink-0 group"
            >
              <span>Buy now</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-slate-800/80">
            {/* Left copyright */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 flex items-center justify-center">
                <img 
                  src={logoImg} 
                  alt="MasterPacks Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-200">© 2025 MasterPacks. All rights reserved.</p>
                <p className="text-xs text-slate-500">Built by Editors — For Editors worldwide.</p>
              </div>
            </div>

            {/* Right policy links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <button
                onClick={() => setActiveModal('contact')}
                className="hover:text-slate-200 transition-colors"
              >
                Contact us
              </button>
              <button
                onClick={() => setActiveModal('privacy')}
                className="hover:text-slate-200 transition-colors"
              >
                Privacy policy
              </button>
              <button
                onClick={() => setActiveModal('terms')}
                className="hover:text-slate-200 transition-colors"
              >
                Terms and conditions
              </button>
            </div>
          </div>
        </div>

        {/* Policy Modals */}
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-5 sm:p-6 relative shadow-2xl text-slate-200 my-auto">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              {activeModal === 'contact' && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-400" /> Contact Support
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Have questions about your order or need assistance with your After Effects templates?
                  </p>

                  <div className="mt-4 p-4 bg-slate-800 rounded-xl border border-slate-700 font-mono text-xs text-slate-300">
                    Email: <a href="mailto:finoprosworld@gmail.com" className="text-blue-400 underline">finoprosworld@gmail.com</a><br />
                    Response Time: Within 24 hours
                  </div>
                </div>
              )}

              {activeModal === 'privacy' && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-400" /> Privacy Policy
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed space-y-2">
                    MasterPacks respects your privacy. We collect minimal information required to process your purchase and deliver your digital motion graphics downloads safely. We never sell or share your personal data with third parties.
                  </p>
                </div>
              )}

              {activeModal === 'terms' && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-400" /> Terms & Conditions
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Your purchase grants you a non-exclusive, worldwide, royalty-free commercial license to use MasterPacks assets across unlimited client & personal projects. Reselling or redistributing raw source templates is strictly prohibited.
                  </p>
                </div>
              )}

              <button
                onClick={() => setActiveModal(null)}
                className="mt-6 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </footer>

      {/* Fixed Bottom Purchase Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-slate-800/90 backdrop-blur-lg px-3 sm:px-6 py-2.5 sm:py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <a
            href="https://rzp.io/rzp/7cCIwcxW"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[75%] max-w-xl py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-black text-base sm:text-xl tracking-wider rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:shadow-[0_0_40px_rgba(147,51,234,0.8)] hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2.5 group text-center border border-blue-400/40"
          >
            <span className="uppercase">BUY NOW</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </>
  );
};
