/**
 * Centralized site configuration
 * Single source of truth for contact details, social links, and company information
 */

export const siteConfig = {
  company: {
    name: 'Cinedise Studio',
    url: 'https://cinedise.studio',
    tagline: 'Crafting Visual Stories',
  },
  contact: {
    email: 'business@cinedise.studio',
    phones: [
      {
        number: '+918108859741',
        display: '+91 81088 59741',
      },
      {
        number: '+919382788853',
        display: '+91 93827 88853',
      },
    ],
  },
  social: {
    instagram: {
      url: 'https://www.instagram.com/cinedisestudio',
      label: 'Ig.',
    },
    youtube: {
      url: 'https://youtube.com/@cinedise?si=gV6O790ZKDjIDTj5',
      label: 'Yt.',
    },
  },
} as const;
