import type { Metadata } from 'next';
import { getProjectsByCategory } from '@/data/projects';
import VfxContent from './VfxContent';
import { CDN_BASE } from '@/config/content';

export const metadata: Metadata = {
  title: 'VFX | Cinedise Studio',
  description:
    'Visual Effects expertise by Cinedise Studio - From compositing to 3D animation, we bring your vision to life.',
  openGraph: {
    title: 'VFX | Cinedise Studio',
    description: 'Visual Effects expertise by Cinedise Studio - From compositing to 3D animation.',
    images: [
      {
        url: `${CDN_BASE}/vfx/atomic-brew/thumbnail.png`,
      },
    ],
  },
};

export default async function VfxPage() {
  const projects = await getProjectsByCategory('VFX');
  return <VfxContent projects={projects} />;
}
