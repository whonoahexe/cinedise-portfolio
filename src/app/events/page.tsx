import type { Metadata } from 'next';
import EventsContent from './EventsContent';

export const metadata: Metadata = {
  title: 'Events | Cinedise Studio',
  description:
    'Event coverage and videography by Cinedise Studio - Capturing memorable moments from fashion weeks, auto expos, and college fests.',
  openGraph: {
    title: 'Events | Cinedise Studio',
    description: 'Event coverage and videography by Cinedise Studio.',
    images: [
      { url: 'https://cinedise-video.s3.eu-north-1.amazonaws.com/public/events/header.jpg' },
    ],
  },
};

export default function EventsPage() {
  return <EventsContent />;
}
