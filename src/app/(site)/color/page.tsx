import type { Metadata } from 'next';
import ColorContent from './ColorContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = {
  title: 'Color Grading | Cinedise Studio',
  description:
    'Professional color grading services by Cinedise Studio - Transform your footage with cinematic color.',
  openGraph: {
    title: 'Color Grading | Cinedise Studio',
    description:
      'Professional color grading services by Cinedise Studio - Transform your footage with cinematic color.',
    images: [
      {
        url: `${CDN_BASE}/commercials/atomic-brew/thumbnail.jpg`,
      },
    ],
  },
};

export default function ColorPage() {
  return <ColorContent />;
}
