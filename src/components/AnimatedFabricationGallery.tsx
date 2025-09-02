import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface FabricationProject {
  id: string;
  images: string[];
  title: string;
  description: string;
  category: string;
  specs?: string[];
}

interface AnimatedFabricationGalleryProps {
  projects: FabricationProject[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  title?: string;
  subtitle?: string;
}

const AnimatedFabricationGallery: React.FC<AnimatedFabricationGalleryProps> = ({
  projects,
  autoPlay = true,
  autoPlayInterval = 5000,
  title = "Featured Fabrication Projects",
  subtitle = "Showcasing our precision craftsmanship in custom steel fabrication"
}) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, currentProject, currentImage, autoPlayInterval]);

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    const currentProjectObj = projects[currentProject];
    if (currentImage < currentProjectObj.images.length - 1) {
      setCurrentImage(prev => prev + 1);
    } else {
      setCurrentImage(0);
      setCurrentProject(prev => (prev + 1) % projects.length);
    }
    
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (currentImage > 0) {
      setCurrentImage(prev => prev - 1);
    } else {
      const prevProject = currentProject === 0 ? projects.length - 1 : currentProject - 1;
      setCurrentProject(prevProject);
      setCurrentImage(projects[prevProject].images.length - 1);
    }
    
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const jumpToProject = (projectIndex: number, imageIndex: number = 0) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentProject(projectIndex);
    setCurrentImage(imageIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentProjectObj = projects[currentProject];
  const currentImageSrc = currentProjectObj?.images[currentImage];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Main Gallery Display */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Image Display */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white">
              <div 
                className={`w-full h-full transition-all duration-500 ease-in-out ${
                  isTransitioning ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
                }`}
              >
                <img
                  src={currentImageSrc}
                  alt={`${currentProjectObj?.title} - Image ${currentImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentImage + 1} / {currentProjectObj?.images.length}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-5 h-5 text-slate-700" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                disabled={isTransitioning}
              >
                <ChevronRight className="w-5 h-5 text-slate-700" />
              </button>
            </div>
          </div>

          {/* Project Information */}
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {currentProjectObj?.category}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {currentProjectObj?.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {currentProjectObj?.description}
              </p>
            </div>
            
            {/* Specifications */}
            {currentProjectObj?.specs && (
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {currentProjectObj.specs.map((spec, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Controls */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={togglePlayPause}
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <span className="text-sm text-slate-500">Auto-advance every {autoPlayInterval / 1000}s</span>
            </div>
          </div>
        </div>

        {/* Project Navigation Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, projectIndex) => (
            <div key={project.id} className="space-y-2">
              <div className="grid grid-cols-3 gap-1">
                {project.images.map((image, imageIndex) => (
                  <button
                    key={imageIndex}
                    onClick={() => jumpToProject(projectIndex, imageIndex)}
                    className={`aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                      currentProject === projectIndex && currentImage === imageIndex
                        ? 'ring-3 ring-orange-500 scale-105'
                        : 'hover:scale-105 hover:shadow-lg'
                    }`}
                    disabled={isTransitioning}
                  >
                    <img
                      src={image}
                      alt={`${project.title} thumbnail ${imageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <h4 className={`text-sm font-medium text-center transition-colors ${
                currentProject === projectIndex ? 'text-orange-600' : 'text-slate-600'
              }`}>
                {project.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => jumpToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentProject 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedFabricationGallery;