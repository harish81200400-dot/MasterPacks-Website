import React from 'react';

export const TickerTape: React.FC = () => {
  const tickerText = "COMMERCIAL USE LICENSE • PRICE INCREASES SOON • LIFETIME ACCESS • INSTANT DOWNLOAD • NO PLUGIN REQUIRED • ";

  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 overflow-hidden py-3 border-y border-blue-400/40 relative shadow-lg">
      <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-extrabold tracking-widest uppercase text-white drop-shadow-sm flex gap-2">
        <span>{tickerText}</span>
        <span>{tickerText}</span>
        <span>{tickerText}</span>
        <span>{tickerText}</span>
      </div>
    </div>
  );
};
