export interface Commodity {
  id: string;
  name: string;
  localName: string;
  category: string;
  description: string;
  keyMarkets: string[];
  qualityParams: string[];
  image?: string;
}

export const commodities: Commodity[] = [
  {
    id: 'cumin',
    name: 'Cumin Seeds',
    localName: 'Jeera',
    category: 'Spices',
    description: "India is the world's dominant producer of cumin...",
    keyMarkets: ['Bangladesh', 'USA', 'UAE'],
    qualityParams: ['Moisture ≤7%', 'Admixture ≤1%'],
  },
  // Add more as per prompt
  {
    id: 'coriander',
    name: 'Coriander Seeds',
    localName: 'Dhaniya',
    category: 'Spices',
    description: 'India produces over 70% of the world...',
    keyMarkets: ['Middle East', 'Malaysia', 'USA'],
    qualityParams: ['Moisture ≤9%'],
  },
  // ... (expand in full implementation)
];