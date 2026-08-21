import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/search', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/assets/', '/*.js$', '/*.css$'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/assets/', '/*.js$', '/*.css$'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
    ],
    sitemap: 'https://zynochat.in/sitemap.xml',
  };
}
