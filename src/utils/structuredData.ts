// Structured Data Schemas for SEO

export const createBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Fundzama Fabrication",
  "alternateName": "Fundzama",
  "description": "Professional custom metal fabrication services in South Africa. Specializing in industrial equipment, forklift battery tanks, pallet jacks, and custom metalwork.",
  "url": "https://fundzama.co.za",
  "logo": "https://fundzama.co.za/images/logo2.png",
  "image": [
    "https://fundzama.co.za/images/logo2.png",
    "https://fundzama.co.za/images/tanks7.jpg"
  ],
  "telephone": "+27-XX-XXX-XXXX",
  "email": "info@fundzama.co.za",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Your City",
    "addressRegion": "Your Province",
    "postalCode": "XXXX",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -26.2041,
    "longitude": 28.0473
  },
  "openingHours": [
    "Mo-Fr 08:00-17:00",
    "Sa 08:00-13:00"
  ],
  "sameAs": [
    "https://www.facebook.com/fundzama",
    "https://www.linkedin.com/company/fundzama"
  ],
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "South Africa"
  },
  "serviceType": [
    "Metal Fabrication",
    "Custom Metalwork",
    "Industrial Equipment Manufacturing",
    "Welding Services",
    "Steel Fabrication"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Metal Fabrication Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Metal Fabrication",
          "description": "Bespoke metal fabrication solutions for industrial and commercial needs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Forklift Battery Tank Manufacturing",
          "description": "Specialised manufacturing of forklift battery tanks and related equipment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Equipment Fabrication",
          "description": "Custom fabrication of industrial equipment and machinery components"
        }
      }
    ]
  }
});

export const createServiceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Fundzama Fabrication",
    "url": "https://fundzama.co.za"
  },
  "areaServed": {
    "@type": "Country",
    "name": "South Africa"
  },
  "serviceType": "Metal Fabrication"
});

export const createProductSchema = (productName: string, description: string, image?: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": productName,
  "description": description,
  "image": image,
  "manufacturer": {
    "@type": "Organisation",
    "name": "Fundzama Fabrication"
  },
  "category": "Industrial Equipment",
  "brand": {
    "@type": "Brand",
    "name": "Fundzama"
  }
});

export const createWebPageSchema = (title: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": url,
  "isPartOf": {
    "@type": "WebSite",
    "name": "Fundzama Fabrication",
    "url": "https://fundzama.co.za"
  },
  "inLanguage": "en-ZA",
  "about": {
    "@type": "Organisation",
    "name": "Fundzama Fabrication"
  }
});

export const createBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const createOrganisationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organisation",
  "name": "Fundzama Fabrication",
  "alternateName": "Fundzama",
  "url": "https://fundzama.co.za",
  "logo": "https://fundzama.co.za/images/logo2.png",
  "description": "South Africa's premier metal fabrication company specializing in custom metalwork, industrial equipment, and precision engineering solutions.",
  "foundingDate": "2010",
  "industry": "Metal Fabrication",
  "numberOfEmployees": "10-50",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ZA",
    "addressRegion": "Gauteng"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+27-XX-XXX-XXXX",
    "contactType": "customer service",
    "areaServed": "ZA",
    "availableLanguage": ["English", "Afrikaans"]
  },
  "sameAs": [
    "https://www.facebook.com/fundzama",
    "https://www.linkedin.com/company/fundzama"
  ]
});