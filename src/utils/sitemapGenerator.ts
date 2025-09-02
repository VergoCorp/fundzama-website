export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (baseUrl: string = 'https://fundzama.co.za'): string => {
  const urls: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/services`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/products`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/projects`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/team`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.8
    }
  ];

  // Add product pages (you can expand this based on your actual products)
  const productSlugs = [
    'battery-tanks',
    'industrial-equipment',
    'pallet-jacks',
    'safety-infrastructure',
    'custom-fabrication',
    'outdoor-furniture',
    'washbay-systems',
    'industrial-stairs'
  ];

  productSlugs.forEach(slug => {
    urls.push({
      loc: `${baseUrl}/products/${slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7
    });
  });

  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                           http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  const xmlUrls = urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');

  const xmlFooter = '</urlset>';

  return `${xmlHeader}\n${xmlUrls}\n${xmlFooter}`;
};

// Function to save sitemap (for build-time generation)
export const saveSitemap = async (_filePath: string, baseUrl: string = 'https://fundzama.co.za') => {
  const sitemapContent = generateSitemap(baseUrl);
  
  // This would be used in a build script
  // For now, just return the content
  return sitemapContent;
};