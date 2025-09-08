// Performance optimisation utilities for Core Web Vitals

// Lazy loading utilities
export const createIntersectionObserver = (callback: IntersectionObserverCallback, options?: IntersectionObserverInit) => {
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });
  }
  return null;
};

// Resource preloading
export const preloadCriticalResources = () => {
  // Preload critical images
  const criticalImages = [
    '/images/logo2.png',
    '/images/tanks7.jpg',
    '/images/forklift-battery-tank.jpg', // Electric forklift battery tank image
    '/images/electric jack.jpg', // Electronic battery jack
    '/images/fireplace 1.jpg', // Custom fireplace image 1
    '/images/fireplace 2.jpg', // Custom fireplace image 2
    '/images/fireplace 3.jpg', // Custom fireplace image 3
    '/images/mine cropped 1.png', // Mining equipment battery tank 1
    '/images/mine cropped.png', // Mining equipment battery tank 2
    '/images/tank 2.4.jpg', // Additional battery tank
    '/images/trailer.jpg' // Custom trailer
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Web font optimisation
export const optimiseWebFonts = () => {
  // If using custom fonts, add font-display: swap
  const fontLink = document.createElement('link');
  fontLink.rel = 'preconnect';
  fontLink.href = 'https://fonts.googleapis.com';
  document.head.appendChild(fontLink);

  const fontGstaticLink = document.createElement('link');
  fontGstaticLink.rel = 'preconnect';
  fontGstaticLink.href = 'https://fonts.gstatic.com';
  fontGstaticLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontGstaticLink);
};

// Critical CSS injection
export const injectCriticalCSS = () => {
  const criticalCSS = `
    /* Critical above-the-fold styles */
    .min-h-screen { min-height: 100vh; }
    .bg-slate-900 { background-color: rgb(15 23 42); }
    .text-white { color: rgb(255 255 255); }
    .font-bold { font-weight: 700; }
    .font-black { font-weight: 900; }
    .text-center { text-align: center; }
    .flex { display: flex; }
    .items-center { align-items: center; }
    .justify-center { justify-content: center; }
    .relative { position: relative; }
    .absolute { position: absolute; }
    .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};

// Service Worker registration for caching
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered: ', registration);
    } catch (registrationError) {
      console.log('SW registration failed: ', registrationError);
    }
  }
};

// Image optimisation helper
export const getOptimisedImageSrc = (originalSrc: string, _width?: number, _quality = 85) => {
  // This is where you'd integrate with an image optimisation service
  // For now, return the original src
  return originalSrc;
};

// Defer non-critical JavaScript
export const deferNonCriticalJS = () => {
  // Defer analytics and other non-critical scripts
  const scripts = document.querySelectorAll('script[data-defer]');
  scripts.forEach(script => {
    script.setAttribute('defer', 'true');
  });
};

// Core Web Vitals monitoring
export const initWebVitalsMonitoring = () => {
  // This would integrate with web-vitals library
  if (typeof window !== 'undefined') {
    // Monitor LCP, FID, CLS
    import('web-vitals').then((webVitals: any) => {
      // Use the available functions from web-vitals
      // Note: Function names may vary based on web-vitals version
      const vitalsLogger = (metric: any) => console.log(metric);
      
      // Try different possible function names
      if (typeof webVitals.onCLS === 'function') webVitals.onCLS(vitalsLogger);
      else if (typeof webVitals.getCLS === 'function') webVitals.getCLS(vitalsLogger);
      
      if (typeof webVitals.onFID === 'function') webVitals.onFID(vitalsLogger);
      else if (typeof webVitals.getFID === 'function') webVitals.getFID(vitalsLogger);
      
      if (typeof webVitals.onFCP === 'function') webVitals.onFCP(vitalsLogger);
      else if (typeof webVitals.getFCP === 'function') webVitals.getFCP(vitalsLogger);
      
      if (typeof webVitals.onLCP === 'function') webVitals.onLCP(vitalsLogger);
      else if (typeof webVitals.getLCP === 'function') webVitals.getLCP(vitalsLogger);
      
      if (typeof webVitals.onTTFB === 'function') webVitals.onTTFB(vitalsLogger);
      else if (typeof webVitals.getTTFB === 'function') webVitals.getTTFB(vitalsLogger);
    }).catch(() => {
      // web-vitals not available
    });
  }
};

// Resource hints for external domains
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//cdn.tailwindcss.com' },
    { rel: 'dns-prefetch', href: '//cdn.voiceflow.com' },
    { rel: 'preconnect', href: 'https://general-runtime.voiceflow.com' }
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    document.head.appendChild(link);
  });
};