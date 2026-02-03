import type { Metadata } from 'next';
import EventsContent from './EventsContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = {
  title: 'Events | Cinedise Studio',
  description:
    'Event coverage and videography by Cinedise Studio - Capturing memorable moments from fashion weeks, auto expos, and college fests.',
  openGraph: {
    title: 'Events | Cinedise Studio',
    description: 'Event coverage and videography by Cinedise Studio.',
    images: [{ url: `${CDN_BASE}/events/header.jpg` }],
  },
};

export default function EventsPage() {
  return <EventsContent />;
}
