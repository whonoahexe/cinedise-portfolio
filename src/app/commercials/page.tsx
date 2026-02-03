import type { Metadata } from 'next';
import CommercialsContent from './CommercialsContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = {
  title: 'Commercials | Cinedise Studio',
  description:
    'Commercial video production by Cinedise Studio - High-impact commercials that elevate your brand.',
  openGraph: {
    title: 'Commercials | Cinedise Studio',
    description:
      'Commercial video production by Cinedise Studio - High-impact commercials that elevate your brand.',
    images: [{ url: `${CDN_BASE}/commercials/header.jpg` }],
  },
};

export default function CommercialsPage() {
  return <CommercialsContent />;
}
