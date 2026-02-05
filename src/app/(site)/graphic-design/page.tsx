import type { Metadata } from 'next';
import GraphicDesignContent from './GraphicDesignContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = {
  title: 'Graphic Design | Cinedise Studio',
  description:
    'Graphic design portfolio by Cinedise Studio - Posters, brand identity, and visual design.',
  openGraph: {
    title: 'Graphic Design | Cinedise Studio',
    description: 'Graphic design portfolio by Cinedise Studio.',
    images: [
      {
        url: `${CDN_BASE}/category-thumbnails/category-8.jpg`,
      },
    ],
  },
};

export default function GraphicDesignPage() {
  return <GraphicDesignContent />;
}
