import type { Metadata } from 'next';
import GraphicDesignContent from './GraphicDesignContent';

export const metadata: Metadata = {
  title: 'Graphic Design | Cinedise Studio',
  description:
    'Graphic design portfolio by Cinedise Studio - Posters, brand identity, and visual design.',
  openGraph: {
    title: 'Graphic Design | Cinedise Studio',
    description: 'Graphic design portfolio by Cinedise Studio.',
    images: [
      {
        url: 'https://cinedise-video.s3.eu-north-1.amazonaws.com/public/category-thumbnails/category-8.jpg',
      },
    ],
  },
};

export default function GraphicDesignPage() {
  return <GraphicDesignContent />;
}
