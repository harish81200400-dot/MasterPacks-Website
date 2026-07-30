import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TickerTape } from './components/TickerTape';
import { AssetCategories } from './components/AssetCategories';
import { WhyChoose } from './components/WhyChoose';
import { WorkflowSteps } from './components/WorkflowSteps';
import { Testimonials } from './components/Testimonials';
import { LibraryBonus } from './components/LibraryBonus';
import { PricingTable } from './components/PricingTable';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const PAYMENT_LINK = "https://rzp.io/rzp/7cCIwcxW";

  const handleOpenCheckout = () => {
    window.open(PAYMENT_LINK, '_blank', 'noopener,noreferrer');
  };

  const toggleCurrency = () => {
    setCurrency(prev => (prev === 'INR' ? 'USD' : 'INR'));
  };

  return (
    <div className="bg-slate-900 text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white min-h-screen">
      {/* Navigation */}
      <Navbar
        onOpenCheckout={handleOpenCheckout}
        currency={currency}
        onToggleCurrency={toggleCurrency}
      />

      {/* Hero Header */}
      <HeroSection
        onOpenCheckout={handleOpenCheckout}
        currency={currency}
      />

      {/* Infinite Ticker Tape */}
      <TickerTape />

      {/* What It Helps You Create */}
      <AssetCategories />

      {/* Why Choose Quikmotion */}
      <WhyChoose />

      {/* 3-Step Workflow & Live Customizer Sandbox */}
      <WorkflowSteps />

      {/* Testimonials */}
      <Testimonials />

      {/* Library & Bonus Overview */}
      <LibraryBonus
        onOpenCheckout={handleOpenCheckout}
        currency={currency}
      />

      {/* Pricing Offer Table */}
      <PricingTable
        onOpenCheckout={handleOpenCheckout}
        currency={currency}
        onToggleCurrency={toggleCurrency}
      />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Instant Checkout & License Generator Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        currency={currency}
      />

      {/* Floating WhatsApp Support Button */}
      <WhatsAppButton />
    </div>
  );
}
