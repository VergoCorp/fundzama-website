

import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import ImageGallery from '../components/ImageGallery';
import SEOHead from '../components/SEOHead';
import { createServiceSchema, createWebPageSchema } from '../utils/structuredData';

const Services = () => {
  const serviceSchema = createServiceSchema(
    "Custom Steel Fabrication Services",
    "Professional custom steel fabrication for any project - from overhead jacks and fireplaces to industrial equipment. If it's steel, we can make it."
  );
  
  const webPageSchema = createWebPageSchema(
    "Custom Steel Fabrication Services - We Make Anything Steel | Fundzama",
    "Expert custom steel fabrication services. From overhead jacks to fireplaces, industrial equipment to decorative pieces - if it's steel, we fabricate it to perfection.",
    "https://fundzama.co.za/services"
  );

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, webPageSchema]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <SEOHead
        title="Custom Steel Fabrication Services - We Make Anything Steel | Fundzama"
        description="Expert custom steel fabrication services. From overhead jacks to fireplaces, industrial equipment to decorative pieces - if it's steel, we fabricate it to perfection."
        keywords="custom steel fabrication, overhead jacks, fireplaces, industrial equipment, metal fabrication services, bespoke steel work, South Africa"
        image="https://fundzama.co.za/src/images/headjack.jpg"
        url="https://fundzama.co.za/services"
        type="website"
        structuredData={combinedSchema}
      />
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </div>
            
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500">Steel Fabrication</span>
              </h1>
              <p className="text-2xl text-slate-700 font-semibold mb-4">
                If It's Steel, We Make It
              </p>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                From overhead jacks and fireplaces to industrial equipment and decorative pieces - 
                we're your one-stop solution for any custom steel fabrication project. 
                No job too unique, no design too challenging.
              </p>
            </div>
          </ScrollAnimation>

          {/* Core Capabilities Overview */}
          <ScrollAnimation delay={200}>
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">What We Fabricate</h2>
              <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                Our expertise spans every corner of steel fabrication. Here's just a glimpse of what we create:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  { category: 'Industrial Equipment', items: ['Overhead Jacks', 'Material Handling', 'Safety Railings', 'Platforms & Walkways'] },
                  { category: 'Commercial & Decorative', items: ['Custom Fireplaces', 'Architectural Features', 'Outdoor Furniture', 'Gates & Fencing'] },
                  { category: 'SpecialisedSolutions', items: ['Battery Tank Systems', 'Washbay Equipment', 'Custom Machinery', 'Structural Components'] },
                  { category: 'Surface & Finishing', items: ['Surface Preparation', 'Protective Coatings', 'Quality Finishing', 'Paint & Powder Coating'] }
                ].map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <h3 className="text-lg font-bold text-orange-600 mb-4">{service.category}</h3>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Featured Work Gallery */}
          <ScrollAnimation delay={300}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Featured Work</h2>
              <ImageGallery
                title="Custom Fabrication Excellence"
                subtitle="From concept to completion - see our craftsmanship in action"
                images={[
                  { src: '/src/images/headjack.jpg', alt: 'Custom overhead jack system', title: 'Overhead Jack Systems', description: 'Heavy-duty overhead jacks for industrial lifting applications' },
                  { src: '/src/images/staircase.jpg', alt: 'Custom industrial staircase', title: 'Industrial Staircases', description: 'Safety-compliant staircases with custom railings and platforms' },
                  { src: '/src/images/IMG_8656.JPG', alt: 'Precision metal fabrication work', title: 'Electrical Forklift Battery tanks', description: 'Speacilised battery tanks for electrical forklift systems' }
                ]}
                columns={3}
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Images Section */}
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-2 p-6">
                      <div className="space-y-2">
                        <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                          <img 
                            src="/src/images/electric jack.jpg" 
                            alt="Electronic Battery Jack" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                          <img 
                            src="/src/images/mine cropped 1.png" 
                            alt="Mining Battery Tank" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src="/src/images/fireplace 1.jpg" 
                          alt="Custom Fireplace" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    {/* Overlay Badge */}
                    <div className="absolute top-8 left-8 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Projects
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Explore Our
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500"> Fabrication Gallery</span>
                      </h2>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        Discover our complete portfolio of custom steel fabrication projects. From industrial equipment and mining battery tanks to architectural features and transport solutions.
                      </p>
                      <div className="space-y-3 mb-8">
                        <div className="flex items-center text-slate-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          <span>Electronic battery jacks and lifting equipment</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          <span>Heavy-duty mining equipment and battery tanks</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          <span>Custom fireplaces and architectural features</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          <span>Transport solutions and specialized equipment</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/gallery"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        View Full Gallery
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>



          {/* Process Section - COMMENTED OUT */}
          {/*
          <ScrollAnimation delay={600}>
            <div className="mt-20 text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Our Service Process
              </h2>
              <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Discovery',
                    description: 'Understanding your needs and requirements',
                    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
                  },
                  {
                    step: '02',
                    title: 'Planning',
                    description: 'Creating detailed project roadmap',
                    image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
                  },
                  {
                    step: '03',
                    title: 'Execution',
                    description: 'Implementing the solution',
                    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
                  },
                  {
                    step: '04',
                    title: 'Delivery',
                    description: 'Launching and supporting',
                    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
                  }
                ].map((process, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={process.image} 
                        alt={process.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{process.step}</div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h3>
                      <p className="text-sm text-slate-600">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
          */}

          {/* CTA Section */}
          <ScrollAnimation delay={600}>
            <div className="bg-gradient-to-r from-orange-600 to-yellow-500 rounded-2xl p-12 text-center text-white mt-20">
              <h2 className="text-4xl font-bold mb-6">
                Got a Steel Fabrication Challenge?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Whether it's an overhead jack, a custom fireplace, industrial equipment, or something completely unique - 
                we'll design and fabricate it to your exact specifications. No project too complex, no idea too ambitious.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Your Custom Quote
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  See Our Work
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Services; 