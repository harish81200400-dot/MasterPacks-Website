import React, { useState, useEffect } from 'react';
import { Zap, Sparkles, Menu, X, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/images/masterpacks_logo_1785221159691.jpg';

interface NavbarProps {
  onOpenCheckout: () => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout, currency, onToggleCurrency }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-slate-700/80 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <img 
              src={logoImg} 
              alt="MasterPacks Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
              MASTERPACKS
            </span>
            <span className="text-[10px] text-slate-400 -mt-1 font-medium tracking-wider">AFTER EFFECTS ASSETS</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#what-it-helps" className="hover:text-blue-400 transition-colors">Showcase</a>
          <a href="#testimonials" className="hover:text-blue-400 transition-colors">Reviews</a>
          <a href="#library" className="hover:text-blue-400 transition-colors">Library & Bonus</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing Offer</a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
        </div>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a 
            href="https://rzp.io/rzp/7cCIwcxW"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-bold text-sm transition-all shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:scale-105 flex items-center gap-2"
          >
            <Zap className="w-4 h-4 fill-current text-yellow-300" />
            <span>Get Bundle ({currency === 'INR' ? '₹499' : '$12'})</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3 font-medium text-slate-200">
            <a href="#what-it-helps" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 py-1">Showcase</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 py-1">2,127+ Reviews</a>
            <a href="#library" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 py-1">Library Vault</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 py-1">Pricing Offer</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 py-1">FAQ</a>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>Selected Currency:</span>
              <button 
                onClick={onToggleCurrency}
                className="px-2.5 py-1 rounded bg-slate-800 text-blue-400 font-bold border border-slate-700"
              >
                {currency === 'INR' ? '₹ INR' : '$ USD'}
              </button>
            </div>
            <a 
              href="https://rzp.io/rzp/7cCIwcxW"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold text-center text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Zap className="w-4 h-4 fill-current text-yellow-300" />
              <span>Get Instant Access ({currency === 'INR' ? '₹499' : '$12'})</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
