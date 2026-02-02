import type { Metadata } from 'next';
import VfxContent from './VfxContent';

export const metadata: Metadata = {
  title: 'VFX | Cinedise Studio',
  description:
    'Visual Effects expertise by Cinedise Studio - From compositing to 3D animation, we bring your vision to life.',
  openGraph: {
    title: 'VFX | Cinedise Studio',
    description: 'Visual Effects expertise by Cinedise Studio - From compositing to 3D animation.',
    images: [
      {
        url: 'https://cinedise-video.s3.eu-north-1.amazonaws.com/public/vfx/atomic-brew/thumbnail.png',
      },
    ],
  },
};

export default function VfxPage() {
  return <VfxContent />;
}
