
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectDetail from '@/components/ProjectDetail';

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata | undefined> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return undefined;

    const description = project.description.length > 160 
        ? project.description.substring(0, 157) + '...' 
        : project.description;

    return {
        title: `${project.title} | Cinedise Studio`,
        description,
        openGraph: {
            title: `${project.title} | Cinedise Studio`,
            description,
            images: [{ url: project.headerImage }],
        },
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}
