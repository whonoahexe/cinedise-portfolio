import type { Metadata } from 'next';
import SocialMediaContent from './SocialMediaContent';

export const metadata: Metadata = {
  title: 'Social Media | Cinedise Studio',
  description:
    'Social media content creation by Cinedise Studio - Engaging video content for your social platforms.',
  openGraph: {
    title: 'Social Media | Cinedise Studio',
    description: 'Social media content creation by Cinedise Studio.',
    images: [
      { url: 'https://cdn.cinedise.studio/public/social-media/header.jpg' },
    ],
  },
};

export default function SocialMediaPage() {
  return <SocialMediaContent />;
}
