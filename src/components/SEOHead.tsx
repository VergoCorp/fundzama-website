import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'business';
  structuredData?: object;
  noindex?: boolean;
  canonical?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Fundzama Fabrication - Custom Metal Fabrication Solutions | South Africa",
  description = "Professional custom metal fabrication services in South Africa. Specializing in industrial equipment, forklift battery tanks, pallet jacks, and custom metalwork.",
  keywords = "metal fabrication, custom metalwork, industrial equipment, forklift battery tanks, pallet jacks, South Africa, welding, steel fabrication, manufacturing",
  image = "/images/logo2.png",
  url = "https://fundzama.netlify.app",
  type = "website",
  structuredData,
  noindex = false,
  canonical,
  author = "Fundzama Fabrication",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const siteName = "Fundzama Fabrication";
  const canonicalUrl = canonical || `${url}${window.location.pathname}`;
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow";
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content="South Africa" />
      
      {/* Enhanced Meta Tags */}
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="7 days" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="coverage" content="Worldwide" />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta name="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta name="article:modified_time" content={modifiedTime} />}
      {section && <meta name="article:section" content={section} />}
      {tags.length > 0 && tags.map(tag => <meta key={tag} name="article:tag" content={tag} />)}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_ZA" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@fundzama" />
      <meta name="twitter:creator" content="@fundzama" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#f97316" />
      <meta name="msapplication-TileColor" content="#f97316" />
      <meta name="application-name" content={siteName} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.voiceflow.com" />
      <link rel="preconnect" href="https://general-runtime.voiceflow.com" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdn.tailwindcss.com" />
    </Helmet>
  );
};

export default SEOHead;