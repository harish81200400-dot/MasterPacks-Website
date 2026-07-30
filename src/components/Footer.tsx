import React, { useState } from 'react';
import { ShieldCheck, Mail, FileText, X } from 'lucide-react';
import logoImg from '../assets/images/masterpacks_logo_1785221159691.jpg';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'contact' | 'privacy' | 'refund' | 'terms' | null>(null);

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 px-6 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
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
          <div>
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

      {/* Policy Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl text-slate-200">
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
  );
};
