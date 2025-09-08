import React, { useEffect } from 'react';
import { initWebVitalsMonitoring, preloadCriticalResources, addResourceHints } from '../utils/performance';

interface PerformanceMonitorProps {
  enableMonitoring?: boolean;
  enablePreloading?: boolean;
  enableResourceHints?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableMonitoring = true,
  enablePreloading = true,
  enableResourceHints = true
}) => {
  useEffect(() => {
    // Initialize performance monitoring
    if (enableMonitoring) {
      initWebVitalsMonitoring();
    }

    // Preload critical resources
    if (enablePreloading) {
      preloadCriticalResources();
    }

    // Add resource hints
    if (enableResourceHints) {
      addResourceHints();
    }

    // Add performance optimization scripts
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Defer non-critical JavaScript
    const deferScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        script.setAttribute('defer', 'true');
      });
    };

    // Optimize fonts
    const optimizeFonts = () => {
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    // Run optimizations
    optimizeImages();
    deferScripts();
    optimizeFonts();

    // Add service worker for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }

  }, [enableMonitoring, enablePreloading, enableResourceHints]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
