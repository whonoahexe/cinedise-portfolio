import type { Metadata } from 'next';
import CommercialsContent from './CommercialsContent';

export const metadata: Metadata = {
    title: 'Commercials | Cinedise Studio',
    description: 'Commercial video production by Cinedise Studio - High-impact commercials that elevate your brand.',
    openGraph: {
        title: 'Commercials | Cinedise Studio',
        description: 'Commercial video production by Cinedise Studio - High-impact commercials that elevate your brand.',
        images: [{ url: 'https://cinedise-video.s3.eu-north-1.amazonaws.com/public/commercials/header.jpg' }],
    },
};

export default function CommercialsPage() {
    return <CommercialsContent />;
}
