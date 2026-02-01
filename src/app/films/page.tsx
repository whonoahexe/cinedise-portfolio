import type { Metadata } from 'next';
import FilmsContent from './FilmsContent';

export const metadata: Metadata = {
    title: 'Films | Cinedise Studio',
    description: 'Film production by Cinedise Studio - The Unequals, an action-packed short film with high-end VFX and Dolby Atmos sound.',
    openGraph: {
        title: 'Films | Cinedise Studio',
        description: 'Film production by Cinedise Studio - The Unequals, an action-packed short film.',
        images: [{ url: 'https://cinedise-video.s3.eu-north-1.amazonaws.com/public/films/parallax.png' }],
    },
};

export default function FilmsPage() {
    return <FilmsContent />;
}
