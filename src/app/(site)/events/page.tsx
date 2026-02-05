import type { Metadata } from 'next';
import { getProjectsByCategory } from '@/data/projects';
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

export default async function EventsPage() {
  const projects = await getProjectsByCategory('Events');
  return <EventsContent projects={projects} />;
}
