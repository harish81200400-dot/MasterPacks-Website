import React from 'react';

export const WhyChoose: React.FC = () => {
  const features = [
    {
      icon: "⚡",
      title: "Save Hours",
      description: "Stop rebuilding animations from scratch."
    },
    {
      icon: "🎬",
      title: "Premium Videos",
      description: "Create polished documentary and SaaS edits faster."
    },
    {
      icon: "📦",
      title: "10,000+ Assets",
      description: "Everything you need in one organized library."
    },
    {
      icon: "🚀",
      title: "Fast Workflow",
      description: "Edit more projects in less time."
    },
    {
      icon: "🎨",
      title: "Easy Customization",
      description: "Change colors, timing, text and layouts instantly."
    },
    {
      icon: "∞",
      title: "Lifetime Access",
      description: "One payment. Unlimited use forever."
    }
  ];

  return (
    <section id="why-choose" className="py-20 px-6 bg-slate-800/40 border-y border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-white tracking-tight">
          Why Editors Choose MasterPacks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700/80 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {feat.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-base">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
