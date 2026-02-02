import type { Metadata } from 'next';
import AboutUsContent from './AboutUsContent';

export const metadata: Metadata = {
  title: 'About Us | Cinedise Studio',
  description:
    'Learn about Cinedise Studio - A full-service solution for video, film production, and marketing needs with seven specialized departments.',
  openGraph: {
    title: 'About Us | Cinedise Studio',
    description:
      'Learn about Cinedise Studio - A full-service solution for video, film production, and marketing needs.',
    images: [{ url: 'https://cinedise-video.s3.eu-north-1.amazonaws.com/public/about/1.jpg' }],
  },
};

export default function AboutUs() {
  return <AboutUsContent />;
}
