import React, { useState } from 'react';
import { X, Check, ShieldCheck, Download, Copy, Sparkles, Zap, Lock, CreditCard, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'INR' | 'USD';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, currency }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'paypal'>('upi');
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  if (!isOpen) return null;

  const basePrice = currency === 'INR' ? 499 : 12;
  const finalPrice = couponApplied ? Math.round(basePrice * 0.9) : basePrice;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'PRO10' || couponCode.trim().toUpperCase() === 'QUIK10') {
      setCouponApplied(true);
    } else {
      alert("Invalid code! Try code: 'PRO10' for an extra 10% off.");
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://rzp.io/rzp/7cCIwcxW", "_blank", "noopener,noreferrer");
    setStep('success');
  };

  const licenseKey = "MP-2026-AE10K-VAULT-99812X";

  const handleCopyKey = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl text-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" /> Secure SSL Checkout
            </div>
            <h3 className="text-2xl font-black text-white mb-1">Get Instant Lifetime Access</h3>
            <p className="text-xs text-slate-400 mb-6">
              10,000+ Motion Assets • Commercial Use License • Instant Download
            </p>

            {/* Order Summary Box */}
            <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 mb-6 space-y-2">
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <span>MasterPacks Master Bundle</span>
                <span>{currency === 'INR' ? `₹${basePrice}` : `$${basePrice}`}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-purple-400">
                <span>+ Creator Bonus Vault (Worth {currency === 'INR' ? '₹15,000' : '$180'})</span>
                <span className="font-bold">FREE</span>
              </div>
              {couponApplied && (
                <div className="flex justify-between items-center text-xs text-emerald-400 font-bold border-t border-slate-700/60 pt-2">
                  <span>Coupon Applied (PRO10 - 10% OFF)</span>
                  <span>-{currency === 'INR' ? `₹${Math.round(basePrice * 0.1)}` : `$1.2`}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-base font-extrabold text-white border-t border-slate-700 pt-2">
                <span>Total Due Today:</span>
                <span className="text-xl text-blue-400">{currency === 'INR' ? `₹${finalPrice}` : `$${finalPrice}`}</span>
              </div>
            </div>

            {/* Coupon input */}
            {!couponApplied && (
              <form onSubmit={handleApplyCoupon} className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Discount code (e.g. PRO10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white uppercase focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 rounded-xl border border-slate-700"
                >
                  Apply
                </button>
              </form>
            )}

            {/* Customer Information Form */}
            <form onSubmit={handleCompleteOrder} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Your Email Address (For Download Links) *</label>
                <input
                  type="email"
                  required
                  placeholder="editor@yourdomain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`py-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 ${
                      paymentMethod === 'upi' ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-slate-950 border-slate-700 text-slate-400'
                    }`}
                  >
                    <span>GPay / UPI</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 ${
                      paymentMethod === 'card' ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-slate-950 border-slate-700 text-slate-400'
                    }`}
                  >
                    <span>Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`py-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 ${
                      paymentMethod === 'paypal' ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-slate-950 border-slate-700 text-slate-400'
                    }`}
                  >
                    <span>PayPal</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold text-base transition-all shadow-[0_0_25px_-5px_rgba(59,130,246,0.6)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-5 h-5 fill-current text-yellow-300" />
                <span>Pay {currency === 'INR' ? `₹${finalPrice}` : `$${finalPrice}`} & Download Now</span>
              </button>

              <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                256-Bit Encrypted • Commercial License Included • Lifetime Updates
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40 text-3xl">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">Payment Successful! 🎉</h3>
              <p className="text-sm text-slate-300 mt-1">
                Welcome to MasterPacks, <strong className="text-white">{name}</strong>! We've sent a receipt & backup link to <strong className="text-blue-400">{email}</strong>.
              </p>
            </div>

            {/* License Key Box */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Your Commercial License Key:
              </span>
              <div className="flex items-center justify-between gap-2">
                <code className="text-sm font-mono font-bold text-blue-400 bg-slate-900 px-3 py-1.5 rounded border border-slate-800 flex-1">
                  {licenseKey}
                </code>
                <button
                  onClick={handleCopyKey}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white rounded-lg flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copiedKey ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Download Links */}
            <div className="space-y-2 text-left">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Your Instant Asset Downloads:</h4>
              
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert("Downloading Master Bundle (Part 1: AE Templates & World Maps)..."); }}
                className="p-3.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-white flex items-center justify-between text-sm font-bold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>MasterPacks_Bundle_v4.zip (14.2 GB)</span>
                </span>
                <span className="text-xs text-blue-400">Download</span>
              </a>

              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert("Downloading Creator Bonus Vault (Transitions, SFX & HUDs)..."); }}
                className="p-3.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-white flex items-center justify-between text-sm font-bold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Creator_Bonus_Vault.zip (8.5 GB)</span>
                </span>
                <span className="text-xs text-purple-400">Download</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-sm transition-colors"
            >
              Done & Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
