import React, { useState } from 'react';
import { MessageCircle, X, Send, CheckCheck, Sparkles, ExternalLink, HelpCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string; // Default WhatsApp number (with country code, no + or spaces)
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "919876543210", // Default contact number
  defaultMessage = "Hi MasterPacks team! I have a question about the Documentary After Effects Pack."
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState(defaultMessage);
  const [showTooltip, setShowTooltip] = useState(true);

  // Clean phone number for URL
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');

  const openWhatsApp = (msgToSend?: string) => {
    window.open('https://wa.link/19r6zu', '_blank', 'noopener,noreferrer');
  };

  const presetQuestions = [
    "⚡ Is this pack compatible with Premiere Pro & After Effects?",
    "🎁 What's included in the ₹499 / $12 bundle?",
    "📥 How do I receive the instant download link?",
    "💼 Can I use this for commercial YouTube & client projects?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Chat Drawer Box */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-slate-900 border border-slate-700/90 rounded-2xl shadow-2xl overflow-hidden animate-fade-in text-slate-100 flex flex-col">
          {/* Header */}
          <div className="bg-[#075E54] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center font-bold text-white border-2 border-emerald-400/50 text-sm">
                  MP
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#075E54]" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">MasterPacks Support</h4>
                <p className="text-[11px] text-emerald-200 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" /> Online • Quick response
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-colors"
              aria-label="Close WhatsApp Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-950/80 space-y-3 text-xs max-h-80 overflow-y-auto">
            {/* System Greeting Bubble */}
            <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-xs border border-slate-700/80 max-w-[90%] space-y-1">
              <p className="font-semibold text-emerald-400 text-[11px]">MasterPacks Team</p>
              <p className="text-slate-200 leading-relaxed">
                👋 Hey there! Need help choosing or downloading the After Effects Documentary Pack? Ask us anything on WhatsApp!
              </p>
              <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 pt-1">
                <span>Just now</span>
                <CheckCheck className="w-3.5 h-3.5 text-blue-400" />
              </div>
            </div>

            {/* Quick Question Chips */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <HelpCircle className="w-3 h-3 text-emerald-400" /> Click a common question:
              </p>
              <div className="flex flex-col gap-1.5">
                {presetQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCustomMsg(q);
                      openWhatsApp(q);
                    }}
                    className="p-2 rounded-xl bg-slate-800/90 hover:bg-emerald-950/40 border border-slate-700 hover:border-emerald-500/50 text-left text-slate-300 hover:text-white text-[11px] transition-all flex items-center justify-between group"
                  >
                    <span>{q}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input & Direct Send Footer */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex flex-col gap-2">
            <div className="relative">
              <textarea
                rows={2}
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500 resize-none"
              />
            </div>
            <button
              onClick={() => openWhatsApp()}
              className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <WhatsAppLogoSVG className="w-4 h-4 fill-slate-950" />
              <span>Start Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button with Badge */}
      <div className="relative flex items-center gap-3">
        {/* Hover Tooltip when closed */}
        {!isOpen && showTooltip && (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-slate-700 text-white text-xs font-semibold shadow-xl animate-bounce">
            <span>Need help? Chat on WhatsApp</span>
            <button
              onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
              className="text-slate-400 hover:text-white p-0.5"
            >
              ×
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-emerald-300/40 ${
            isOpen ? 'rotate-90 bg-slate-800 border-slate-600' : ''
          }`}
          aria-label="Open WhatsApp Chat"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <WhatsAppLogoSVG className="w-7 h-7 fill-white" />
          )}

          {/* Pulse Ripple Effect */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 -z-10" />
          )}

          {/* Notification Dot */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-slate-900 animate-pulse">
              1
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

// Official WhatsApp Logo SVG helper
export const WhatsAppLogoSVG: React.FC<{ className?: string }> = ({ className = "w-5 h-5 fill-current" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);
