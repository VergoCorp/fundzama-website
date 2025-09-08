import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedFabricationGallery from '../components/AnimatedFabricationGallery';

const FabricationGallery: React.FC = () => {
  // Define the fabrication projects with your images
  const fabricationProjects = [
    {
      id: 'electric-jack',
      images: ['/images/electric jack.jpg'],
      title: 'Electronic Battery Jack',
      description: 'Custom-engineered electronic battery jack featuring precision hydraulic systems and robust steel construction. Designed for industrial applications requiring reliable lifting and positioning capabilities.',
      category: 'Industrial Equipment',
      specs: [
        'Heavy-duty steel frame construction',
        'Electronic hydraulic lifting system',
        'Integrated battery compartment',
        'Safety mesh protection',
        'Industrial-grade wheels and casters'
      ]
    },
    {
      id: 'mining-battery-tanks',
      images: [
        '/images/mine cropped 1.png',
        '/images/mine cropped.png'
      ],
      title: 'Heavy-Duty Mining Battery Tanks',
      description: 'Robust battery tank systems engineered for extreme mining environments. Features reinforced construction, precision-welded seams, and industrial-grade finishes designed to withstand harsh operational conditions.',
      category: 'Mining Equipment',
      specs: [
        'Heavy-duty steel construction',
        'Reinforced corner brackets',
        'Industrial yellow finish coating',
        'Precision battery cell compartments',
        'Lifting points for easy handling',
        'Corrosion-resistant materials'
      ]
    },
    {
      id: 'custom-fireplace',
      images: [
        '/images/fireplace 1.jpg',
        '/images/fireplace 2.jpg',
        '/images/fireplace 3.jpg'
      ],
      title: 'Custom Built-in Fireplace',
      description: 'Sophisticated custom fireplace installation featuring precision-engineered steel components, multiple cooking surfaces, and integrated storage solutions. A perfect blend of functionality and aesthetic appeal.',
      category: 'Architectural Features',
      specs: [
        'Multi-level cooking surfaces',
        'Integrated storage compartments',
        'Precision steel grating systems',
        'Custom-fit masonry integration',
        'Heat-resistant finish coating',
        'Modular design components'
      ]
    },
    {
      id: 'battery-tank',
      images: ['/images/tank 2.4.jpg'],
      title: 'Industrial Battery Tank',
      description: 'Precision-fabricated industrial battery tank with robust construction and professional finish. Designed for reliable performance in demanding industrial applications.',
      category: 'Industrial Equipment',
      specs: [
        'Heavy-gauge steel construction',
        'Professional yellow finish',
        'Reinforced structural design',
        'Integrated lifting handles',
        'Corrosion-resistant coating',
        'Custom sizing available'
      ]
    },
    {
      id: 'custom-trailer',
      images: ['/images/trailer.jpg'],
      title: 'Custom Equipment Trailer',
      description: 'Multi-purpose equipment trailer featuring dual-axle configuration, safety railings, and custom-designed loading platform. Built for reliable transport of heavy equipment and materials.',
      category: 'Transport Solutions',
      specs: [
        'Dual-axle heavy-duty configuration',
        'Safety railing system',
        'Custom loading platform',
        'Professional blue and yellow finish',
        'Heavy-duty tires and suspension',
        'Integrated tie-down points'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fabrication Gallery - Custom Steel Projects | Fundzama</title>
        <meta 
          name="description" 
          content="Explore our featured fabrication projects including mining equipment, battery tanks, custom trailers, industrial equipment, and architectural features. See our precision craftsmanship in action." 
        />
        <meta name="keywords" content="steel fabrication, mining equipment, battery tanks, custom trailers, industrial equipment, fireplace fabrication, precision engineering, heavy duty equipment" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Fabrication Gallery - Custom Steel Projects | Fundzama" />
        <meta property="og:description" content="Explore our featured fabrication projects showcasing custom steel work, industrial equipment, and architectural features." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/electric jack.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fabrication Gallery - Custom Steel Projects | Fundzama" />
        <meta name="twitter:description" content="Explore our featured fabrication projects showcasing custom steel work, industrial equipment, and architectural features." />
        <meta name="twitter:image" content="/images/electric jack.jpg" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fabrication 
              <span className="text-orange-500"> Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Discover our latest custom fabrication projects showcasing precision engineering, 
              innovative design, and superior craftsmanship in every steel creation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full">
                Industrial Equipment
              </span>
              <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full">
                Mining Equipment
              </span>
              <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full">
                Architectural Features
              </span>
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full">
                Transport Solutions
              </span>
            </div>
          </div>
        </section>

        {/* Animated Gallery */}
        <AnimatedFabricationGallery 
          projects={fabricationProjects}
          autoPlay={true}
          autoPlayInterval={8000}
          title="Featured Projects"
          subtitle="Each project represents our commitment to precision, quality, and innovative steel fabrication solutions"
        />

        {/* Call to Action */}
        <section className="bg-slate-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              From concept to completion, we bring your custom steel fabrication ideas to life 
              with precision engineering and superior craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Get a Quote
              </a>
              <a
                href="/services"
                className="border border-slate-400 hover:border-white text-slate-300 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>


      </div>
    </>
  );
};

export default FabricationGallery;