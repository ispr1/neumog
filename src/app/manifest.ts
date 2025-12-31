import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Neumog | Product Development Services & Software Engineering',
        short_name: 'Neumog',
        description: 'Managed product delivery, not a marketplace. Trusted experts in product, engineering, data science, and AI/ML.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#7c3aed', // Primary violet
        icons: [
            {
                src: '/icon?id=small',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/icon?id=medium',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon?id=large',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
