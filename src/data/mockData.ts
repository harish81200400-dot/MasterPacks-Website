import { Review, FaqItem, BundleItem, AssetCategory } from '../types';

export const REVIEWS_DATA: Review[] = [
  {
    id: 3,
    name: "Rohit Verma",
    role: "YouTube Editor",
    handle: "@rohitcreates",
    comment: "The map animations saved me an insane amount of time. They look professional without needing complex setup.",
    rating: 5,
    verified: true,
    category: "editors"
  },
  {
    id: 7,
    name: "Karan Singh",
    role: "Freelance Editor",
    handle: "@karancuts",
    comment: "MasterPacks helped me stop rebuilding the same animations every week. Now I can focus on storytelling instead of repetitive work.",
    rating: 5,
    verified: true,
    category: "editors"
  },
  {
    id: 8,
    name: "Jose P.",
    role: "Filmmaker",
    handle: "@josefilms",
    comment: "Professional quality assets every editor needs.",
    rating: 5,
    verified: true,
    category: "directors"
  }
];

export const BUNDLE_ITEMS: BundleItem[] = [
  { title: "Documentary Templates", originalPriceINR: 6999, originalPriceUSD: 85, included: true },
  { title: "World Map Animations", originalPriceINR: 7999, originalPriceUSD: 99, included: true },
  { title: "Podcast Intro Pack", originalPriceINR: 2999, originalPriceUSD: 39, included: true },
  { title: "Cinematic Title Pack", originalPriceINR: 2999, originalPriceUSD: 39, included: true },
  { title: "SaaS Animation Pack", originalPriceINR: 7999, originalPriceUSD: 99, included: true },
  { title: "3D Web & App Promo Pack", originalPriceINR: 5999, originalPriceUSD: 75, included: true },
  { title: "Animated Text Pack", originalPriceINR: 1999, originalPriceUSD: 25, included: true },
  { title: "Chat UI Elements", originalPriceINR: 2999, originalPriceUSD: 39, included: true },
  { title: "Lifetime Updates", originalPriceINR: 0, originalPriceUSD: 0, included: true, highlight: true }
];

export const ASSET_CATEGORIES: AssetCategory[] = [
  {
    id: "docs",
    name: "Documentary Videos",
    description: "Historical maps, archival photo zoom effects, paper tear overlays, and dramatic text reveals.",
    icon: "📜",
    itemCount: 2400,
    tags: ["Maps", "Archival", "Lower Thirds", "Film Grain"],
    sampleItems: [
      { title: "3D Interactive Topo Map", type: "Map Anim", resolution: "4K UHD", format: "AE Project", previewGradient: "from-amber-900 to-slate-900" },
      { title: "Vintage Newspaper Zoom", type: "Text & Photo", resolution: "4K UHD", format: "AE Mogrt", previewGradient: "from-stone-800 to-amber-950" },
      { title: "Documentary Subtitle Engine", type: "Typography", resolution: "4K UHD", format: "AE Project", previewGradient: "from-zinc-900 to-slate-800" }
    ]
  },
  {
    id: "saas",
    name: "SaaS Explainers",
    description: "Isometric UI mockups, cursor click animations, dashboard metrics counters, and feature callouts.",
    icon: "🚀",
    itemCount: 1800,
    tags: ["UI Mockups", "Dashboards", "Cursors", "Popups"],
    sampleItems: [
      { title: "Floating 3D Browser Window", type: "3D Promo", resolution: "4K 60FPS", format: "AE Template", previewGradient: "from-blue-900 to-indigo-950" },
      { title: "Interactive Analytics Chart", type: "Data Viz", resolution: "4K UHD", format: "AE Mogrt", previewGradient: "from-cyan-900 to-slate-900" },
      { title: "Feature Highlight Spotlight", type: "Callout", resolution: "4K UHD", format: "AE Project", previewGradient: "from-purple-900 to-slate-900" }
    ]
  },
  {
    id: "podcasts",
    name: "Podcast Clips",
    description: "Dynamic audio spectrum visualizers, speaker lower-thirds, animated captions, and clip frames.",
    icon: "🎙️",
    itemCount: 1200,
    tags: ["Audio Waves", "Captions", "Speaker Badges"],
    sampleItems: [
      { title: "Waveform Sound Spectrum", type: "Audio Viz", resolution: "4K 60FPS", format: "AE Mogrt", previewGradient: "from-emerald-900 to-slate-900" },
      { title: "Viral Word-by-Word Subtitle", type: "Captions", resolution: "4K Vertical", format: "AE Mogrt", previewGradient: "from-teal-900 to-slate-900" }
    ]
  },
  {
    id: "reels",
    name: "Reels & Shorts",
    description: "9:16 vertical templates, hook animations, sound FX sync points, and high-engagement transitions.",
    icon: "📱",
    itemCount: 1900,
    tags: ["9:16", "Transitions", "Emoji Pops", "Hooks"],
    sampleItems: [
      { title: "Retention Hook Opener", type: "Shorts Template", resolution: "1080x1920", format: "AE Project", previewGradient: "from-fuchsia-900 to-pink-950" },
      { title: "Fast Glitch Transition", type: "FX Transition", resolution: "Universal", format: "AE Preset", previewGradient: "from-violet-900 to-slate-900" }
    ]
  },
  {
    id: "youtube",
    name: "YouTube Videos",
    description: "Subscribe & notification reminders, chapter cards, title bumpers, and end screen overlays.",
    icon: "▶️",
    itemCount: 1500,
    tags: ["Subscribe CTA", "Bumpers", "End Screens"],
    sampleItems: [
      { title: "Glassmorphism Subscribe Button", type: "CTA Anim", resolution: "4K 60FPS", format: "AE Mogrt", previewGradient: "from-red-900 to-slate-900" },
      { title: "Chapter Timeline Marker", type: "Graphics", resolution: "4K UHD", format: "AE Project", previewGradient: "from-rose-900 to-slate-900" }
    ]
  },
  {
    id: "clients",
    name: "Client Projects",
    description: "Corporate pitch deck motion slides, logo reveals, brand guidelines mockups, and commercial ads.",
    icon: "💼",
    itemCount: 1200,
    tags: ["Logo Reveals", "Commercials", "Brand Assets"],
    sampleItems: [
      { title: "Cinematic Gold Logo Stinger", type: "Logo Reveal", resolution: "4K UHD", format: "AE Project", previewGradient: "from-yellow-950 to-slate-900" },
      { title: "Product Grid Showcase", type: "Commercial", resolution: "4K UHD", format: "AE Template", previewGradient: "from-blue-950 to-slate-900" }
    ]
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Do I need After Effects experience? / I'm a beginner. Can I use this?",
    answer: "Everything is beginner friendly and designed for fast drag-and-drop workflows. Detailed instructions and organized timelines make it easy to start immediately."
  },
  {
    question: "Can I customize the colors, text, and animations?",
    answer: "Yes! Every asset is fully customizable. You can match the colors to your brand, edit text layers, and adjust timings to fit your project perfectly."
  },
  {
    question: "Can I reuse these for multiple videos?",
    answer: "Absolutely. Your commercial license allows you to use these templates across infinite personal and client projects without any extra fees."
  },
  {
    question: "Can I use this for YouTube Reels and Instagram?",
    answer: "Yes, many elements are highly adaptable for vertical formats or can easily be cropped and adjusted inside your editing software."
  },
  {
    question: "How long do I have access?",
    answer: "Forever. You pay once and get lifetime access to the entire library, including all future updates to the packs you purchased."
  }
];
