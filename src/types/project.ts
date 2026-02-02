/**
 * Normalized project category types
 */
export type ProjectCategory = 
  | 'Commercial' 
  | 'VFX' 
  | 'Events' 
  | 'Social Media'
  | 'Films'
  | 'Color'
  | 'Motion Design'
  | 'Graphic Design'
  | 'UI/UX';

/**
 * Isotope filter categories used for CSS filtering in the grid
 */
export type IsotopeCategory = 'pages' | 'elements' | 'portfolio';

/**
 * Project interface with typed category
 */
export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  headerImage: string;
  description: string;
  videoYoutubeId?: string; // Standard YouTube ID
  videoEmbedUrl?: string; // Generic embed URL or direct video source
  videoSrc?: string; // Direct video source if applicable (can be same as embedUrl)
  galleryImages: string[];
  nextProject: {
    slug: string;
    title: string;
    thumbnail: string;
  };
}
