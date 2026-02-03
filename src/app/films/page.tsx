import type { Metadata } from 'next';
import FilmsContent from './FilmsContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = {
  title: 'Films | Cinedise Studio',
  description:
    'Film production by Cinedise Studio - The Unequals, an action-packed short film with high-end VFX and Dolby Atmos sound.',
  openGraph: {
    title: 'Films | Cinedise Studio',
    description: 'Film production by Cinedise Studio - The Unequals, an action-packed short film.',
    images: [{ url: `${CDN_BASE}/films/parallax.png` }],
  },
};

export default function FilmsPage() {
  return <FilmsContent />;
}
