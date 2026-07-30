export interface AssetCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  itemCount: number;
  tags: string[];
  sampleItems: {
    title: string;
    type: string;
    resolution: string;
    format: string;
    previewGradient: string;
  }[];
}

export interface Review {
  id: number;
  name: string;
  role: string;
  handle: string;
  comment: string;
  rating: number;
  verified: boolean;
  category: 'all' | 'editors' | 'designers' | 'directors';
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BundleItem {
  title: string;
  originalPriceINR: number;
  originalPriceUSD: number;
  included: boolean;
  highlight?: boolean;
}
