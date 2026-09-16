import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: 'https://la-casino-guide.example',
    lastModified: new Date('2026-09-17'),
    changeFrequency: 'weekly',
    priority: 1,
  }]
}
