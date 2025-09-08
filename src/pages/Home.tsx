import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import VideoPlayer from '../components/VideoPlayer';
import SEOHead from '../components/SEOHead';
import { createBusinessSchema, createWebPageSchema } from '../utils/structuredData';
import '../styles/home.css';

const Home = () => {
  const businessSchema = createBusinessSchema();
  const webPageSchema = createWebPageSchema(
    "Fundzama Fabrication - Custom Metal Fabrication Solutions | South Africa",
    "South Africa's premier metal fabrication company. Custom metalwork, industrial equipment, forklift battery tanks, and precision engineering solutions.",
    "https://fundzama.co.za"
  );

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [businessSchema, webPageSchema]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Fundzama Fabrication - Custom Metal Fabrication Solutions | South Africa"
        description="South Africa's premier metal fabrication company. Custom metalwork, industrial equipment, forklift battery tanks, and precision engineering solutions."
        keywords="metal fabrication South Africa, custom metalwork, industrial equipment, forklift battery tanks, pallet jacks, welding services, steel fabrication, manufacturing"
        image="https://fundzama.co.za/images/tanks7.jpg"
        url="https://fundzama.co.za"
        type="website"
        structuredData={combinedSchema}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-orange-600/20 to-yellow-400/20"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Battery Tanks Background */}
          <div className="absolute inset-0">
            <img 
              src="/images/tanks7.jpg" 
              alt="Battery tanks and industrial equipment" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <ScrollAnimation>
              <h1 className="text-6xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-yellow-300 to-orange-400 bg-clip-text text-transparent tracking-tight">
                FORGE THE FUTURE
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="text-2xl lg:text-3xl text-slate-200 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
                <span className="text-orange-400 font-semibold">South Africa's Premier Metal Fabrication Company</span> - Custom Metalwork Specialists
                <br />
                <span className="text-yellow-300">Engineering Excellence</span> in Industrial Equipment, Battery Tanks & Steel Fabrication
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center group border-2 border-orange-500"
                >
                  EXPLORE PRODUCTS
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border-3 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-slate-900 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  GET INSTANT QUOTE
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-10 w-10 text-orange-400" />
        </div>
      </section>

      {/* Product Range Section - Moved from below */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Custom Metal Fabrication Products & Services</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-6">
                Discover our comprehensive range of custom metal fabrication solutions, from industrial equipment 
                to specialisedbattery tank systems. Each product is engineered to meet the highest South African 
                manufacturing standards.
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
          </ScrollAnimation>
          
          <div className="relative overflow-hidden">
            <div className="flex space-x-6 animate-scroll-left">
              {[
                {
                  name: 'Battery Tanks',
                  image: '/images/tanks7.jpg',
                  description: 'Electric forklift battery containment systems'
                },
                {
                  name: 'Industrial Equipment',
                  image: '/images/img_18_1753212850792.jpg',
                  description: 'Heavy-duty machinery and fabrication'
                },
                {
                  name: 'Material Handling',
                  image: '/images/img_14_1753212778101.jpg',
                  description: 'Pallet jacks and lifting equipment'
                },
                {
                  name: 'Safety Infrastructure',
                  image: '/images/img_15_1753212782640.jpg',
                  description: 'Stairs, railings and safety platforms'
                },
                {
                  name: 'Custom Fabrication',
                  image: '/images/img_4_1753212532992.jpg',
                  description: 'Bespoke metal fabrication solutions'
                },
                {
                  name: 'Outdoor Furniture',
                  image: '/images/img_5_1753212569040.jpg',
                  description: 'Weather-resistant commercial furniture'
                },
                {
                  name: 'Washbay Systems',
                  image: '/images/img_6_1753212575500.jpg',
                  description: 'Battery maintenance and cleaning systems'
                },
                {
                  name: 'Industrial Stairs',
                  image: '/images/img_8_1753212630651.jpg',
                  description: 'Safety-compliant access solutions'
                },
                {
                  name: 'Custom Solutions',
                  image: '/images/img_9_1753212644089.jpg',
                  description: 'Tailored fabrication services'
                }
              ].map((product, index) => (
                <div key={index} className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 mb-2 text-center">{product.name}</h3>
                    <p className="text-sm text-slate-600 text-center leading-relaxed">{product.description}</p>
                  </div>
                </div>
              ))}
              
              {/* Duplicate items for seamless loop */}
              {[
                {
                  name: 'Battery Tanks',
                  image: '/images/tanks7.jpg',
                  description: 'Electric forklift battery containment systems'
                },
                {
                  name: 'Industrial Equipment',
                  image: '/images/img_18_1753212850792.jpg',
                  description: 'Heavy-duty machinery and fabrication'
                },
                {
                  name: 'Material Handling',
                  image: '/images/img_14_1753212778101.jpg',
                  description: 'Pallet jacks and lifting equipment'
                },
                {
                  name: 'Safety Infrastructure',
                  image: '/images/img_15_1753212782640.jpg',
                  description: 'Stairs, railings and safety platforms'
                },
                {
                  name: 'Custom Fabrication',
                  image: '/images/img_4_1753212532992.jpg',
                  description: 'Bespoke metal fabrication solutions'
                },
                {
                  name: 'Outdoor Furniture',
                  image: '/images/img_5_1753212569040.jpg',
                  description: 'Weather-resistant commercial furniture'
                },
                {
                  name: 'Washbay Systems',
                  image: '/images/img_6_1753212575500.jpg',
                  description: 'Battery maintenance and cleaning systems'
                },
                {
                  name: 'Industrial Stairs',
                  image: '/images/img_8_1753212630651.jpg',
                  description: 'Safety-compliant access solutions'
                },
                {
                  name: 'Custom Solutions',
                  image: '/images/img_9_1753212644089.jpg',
                  description: 'Tailored fabrication services'
                }
              ].map((product, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 mb-2 text-center">{product.name}</h3>
                    <p className="text-sm text-slate-600 text-center leading-relaxed">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Summary Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Leading <span className="text-orange-500">Metal Fabrication Company</span> in South Africa
                </h2>
                <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                  Founded in 2016, Fundzama Fabrication has established itself as a premier custom metal fabrication 
                  company serving industrial clients across South Africa. We specialise in manufacturing high-quality 
                  forklift battery tanks, industrial equipment, and bespoke steel fabrication solutions.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our state-of-the-art facility combines traditional craftsmanship with modern precision engineering 
                  to deliver exceptional results. From concept to completion, we work closely with clients to create 
                  custom metal fabrication solutions that exceed industry standards and drive business success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="flex justify-center lg:justify-end">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl overflow-hidden services-logo-container">
                  <VideoPlayer
                    src="/images/MVI_8758.MP4"
                    alt="Fundzama Fabrication Process"
                    className="w-full h-full"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    slowMotion={true}
                    showTextOverlay={true}
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>



      {/* Services Summary Section - COMMENTED OUT */}
      {/*
      <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 h-64 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/img_18_1753212850792.jpg" 
                      alt="Metal fabrication workshop" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="h-48 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/img_14_1753212778101.jpg" 
                      alt="Industrial equipment" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-48 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/img_15_1753212782640.jpg" 
                      alt="Custom fabrication" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="h-40 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/img_4_1753212532992.jpg" 
                      alt="Precision engineering" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-40 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/img_5_1753212569040.jpg" 
                      alt="Quality craftsmanship" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Our <span className="text-orange-500">Core Services</span>
                </h2>
                <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                  From industrial equipment to custom fabrication, we deliver precision-engineered solutions 
                  that meet the highest standards of quality and safety. Our comprehensive range of services 
                  covers every aspect of metal fabrication and industrial solutions.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Whether you need electric forklift battery tanks, uplift pallet jacks, industrial stairs 
                  and railings, or custom outdoor furniture, our experienced team ensures exceptional 
                  craftsmanship and reliable delivery for every project.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">6+</div>
                    <div className="text-sm text-slate-600">Service Categories</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                    <div className="text-sm text-slate-600">Custom Solutions</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      */}

      {/* Why Choose Us Section - COMMENTED OUT */}
      {/*
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Why Choose <span className="text-orange-500">Fundzama</span>?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Three decades of precision engineering and unwavering commitment to quality
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Uncompromising Quality',
                description: 'Every weld, every cut, every finish meets the highest industrial standards.',
                color: 'text-orange-500'
              },
              {
                icon: Zap,
                title: 'Lightning Fast Delivery',
                description: 'Advanced fabrication techniques ensure rapid turnaround without sacrificing quality.',
                color: 'text-yellow-500'
              },
              {
                icon: Award,
                title: 'Industry Recognition',
                description: 'Trusted by leading South African companies for mission-critical fabrication.',
                color: 'text-slate-600'
              }
            ].map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <div className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className={`inline-flex p-3 rounded-lg bg-white group-hover:bg-slate-100 transition-colors mb-6`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Featured Projects Summary Section - COMMENTED OUT */}
      {/*
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Featured <span className="text-orange-500">Projects</span>
                </h2>
                <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                  Our portfolio showcases successful projects across South Africa's industrial landscape, 
                  from mining operations to manufacturing facilities. Each project demonstrates our 
                  commitment to quality, safety, and innovation.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  From Johannesburg mining complexes to automated warehouse systems and manufacturing 
                  plant upgrades, we've delivered solutions that exceed client expectations and industry 
                  standards. Our track record speaks for itself.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-green-600 mb-1">500+</div>
                    <div className="text-sm text-slate-600">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-sm text-slate-600">Client Satisfaction</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/projects"
                    className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 h-64 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/img_16_1753212803002.jpg" 
                      alt="Mining complex project" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="h-48 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/img_17_1753212814911.jpg" 
                      alt="Warehouse automation" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-48 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/img_6_1753212575500.jpg" 
                      alt="Manufacturing upgrade" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="h-40 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/img_8_1753212630651.jpg" 
                      alt="Industrial installation" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-40 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/img_9_1753212644089.jpg" 
                      alt="Custom fabrication" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      */}

      {/* Testimonials Section - COMMENTED OUT */}
      {/*
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                What Our <span className="text-orange-500">Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Trusted by leading companies across South Africa for their critical fabrication needs
              </p>
            </div>
          </ScrollAnimation>

          <div className="relative">
            <div className="flex animate-scroll-left">
              {[
                {
                  name: 'David Mokoena',
                  position: 'Operations Manager',
                  company: 'Anglo American',
                  content: 'Fundzama delivered exceptional quality on our mining equipment fabrication. Their attention to detail and commitment to safety standards exceeded our expectations.',
                  rating: 5,
                  image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
                },
                {
                  name: 'Sarah van der Merwe',
                  position: 'Project Director',
                  company: 'Shoprite Holdings',
                  content: 'The warehouse automation systems they built for us have significantly improved our operational efficiency. Professional service from start to finish.',
                  rating: 5,
                  image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
                },
                {
                  name: 'Michael Botha',
                  position: 'Engineering Manager',
                  company: 'Sasol Limited',
                  content: 'Outstanding work on our manufacturing plant upgrade. Fundzama\'s expertise in industrial fabrication is unmatched in South Africa.',
                  rating: 5,
                  image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
                },
                {
                  name: 'Lisa Pretorius',
                  position: 'Facilities Manager',
                  company: 'Eskom',
                  content: 'The industrial stairs and railings they installed at our power stations meet all safety standards. Excellent craftsmanship and attention to detail.',
                  rating: 5,
                  image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
                },
                {
                  name: 'John Smith',
                  position: 'Operations Director',
                  company: 'Transnet',
                  content: 'Fundzama\'s custom fabrication services have been instrumental in our infrastructure projects. Reliable, professional, and always on time.',
                  rating: 5,
                  image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
                }
              ].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-80 md:w-96 mx-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-breathing">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600">{testimonial.position}</p>
                        <p className="text-sm text-orange-600 font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-slate-600 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
              {[
                {
                  name: 'David Mokoena',
                  position: 'Operations Manager',
                  company: 'Anglo American',
                  content: 'Fundzama delivered exceptional quality on our mining equipment fabrication. Their attention to detail and commitment to safety standards exceeded our expectations.',
                  rating: 5,
                  image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
                },
                {
                  name: 'Sarah van der Merwe',
                  position: 'Project Director',
                  company: 'Shoprite Holdings',
                  content: 'The warehouse automation systems they built for us have significantly improved our operational efficiency. Professional service from start to finish.',
                  rating: 5,
                  image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
                },
                {
                  name: 'Michael Botha',
                  position: 'Engineering Manager',
                  company: 'Sasol Limited',
                  content: 'Outstanding work on our manufacturing plant upgrade. Fundzama\'s expertise in industrial fabrication is unmatched in South Africa.',
                  rating: 5,
                  image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
                },
                {
                  name: 'Lisa Pretorius',
                  position: 'Facilities Manager',
                  company: 'Eskom',
                  content: 'The industrial stairs and railings they installed at our power stations meet all safety standards. Excellent craftsmanship and attention to detail.',
                  rating: 5,
                  image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
                },
                {
                  name: 'John Smith',
                  position: 'Operations Director',
                  company: 'Transnet',
                  content: 'Fundzama\'s custom fabrication services have been instrumental in our infrastructure projects. Reliable, professional, and always on time.',
                  rating: 5,
                  image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
                }
              ].map((testimonial, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 md:w-96 mx-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-breathing">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600">{testimonial.position}</p>
                        <p className="text-sm text-orange-600 font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-slate-600 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Our Clients Section - COMMENTED OUT */}
      {/*
      <section className="py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our <span className="text-orange-400">Clients</span>
              </h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                Working with leading brands and organisations across South Africa
              </p>
            </div>
          </ScrollAnimation>

          <div className="relative">
            <div className="flex animate-scroll-right">
              {[
                { name: 'Anglo American', logo: 'https://via.placeholder.com/150x80/1e40af/ffffff?text=Anglo+American' },
                { name: 'Shoprite Holdings', logo: 'https://via.placeholder.com/150x80/059669/ffffff?text=Shoprite' },
                { name: 'Sasol Limited', logo: 'https://via.placeholder.com/150x80/7c3aed/ffffff?text=Sasol' },
                { name: 'Eskom', logo: 'https://via.placeholder.com/150x80/dc2626/ffffff?text=Eskom' },
                { name: 'Transnet', logo: 'https://via.placeholder.com/150x80/ea580c/ffffff?text=Transnet' },
                { name: 'South32', logo: 'https://via.placeholder.com/150x80/0891b2/ffffff?text=South32' },
                { name: 'BHP Billiton', logo: 'https://via.placeholder.com/150x80/059669/ffffff?text=BHP' },
                { name: 'Rio Tinto', logo: 'https://via.placeholder.com/150x80/7c2d12/ffffff?text=Rio+Tinto' }
              ].map((client, index) => (
                <div key={index} className="flex-shrink-0 w-48 md:w-56 mx-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group border border-white/20">
                    <div className="flex items-center justify-center h-16">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                    <p className="text-center text-sm text-slate-200 mt-3 font-medium">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
              {[
                { name: 'Anglo American', logo: 'https://via.placeholder.com/150x80/1e40af/ffffff?text=Anglo+American' },
                { name: 'Shoprite Holdings', logo: 'https://via.placeholder.com/150x80/059669/ffffff?text=Shoprite' },
                { name: 'Sasol Limited', logo: 'https://via.placeholder.com/150x80/7c3aed/ffffff?text=Sasol' },
                { name: 'Eskom', logo: 'https://via.placeholder.com/150x80/dc2626/ffffff?text=Eskom' },
                { name: 'Transnet', logo: 'https://via.placeholder.com/150x80/ea580c/ffffff?text=Transnet' },
                { name: 'South32', logo: 'https://via.placeholder.com/150x80/0891b2/ffffff?text=South32' },
                { name: 'BHP Billiton', logo: 'https://via.placeholder.com/150x80/059669/ffffff?text=BHP' },
                { name: 'Rio Tinto', logo: 'https://via.placeholder.com/150x80/7c2d12/ffffff?text=Rio+Tinto' }
              ].map((client, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-48 md:w-56 mx-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group border border-white/20">
                    <div className="flex items-center justify-center h-16">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                    <p className="text-center text-sm text-slate-200 mt-3 font-medium">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ScrollAnimation delay={600}>
            <div className="text-center mt-12">
              <p className="text-slate-300 mb-4">
                Join our growing network of satisfied clients
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-orange-500"
              >
                Become a Client
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      */}

      {/* Our Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Professional metal fabrication services tailored to your industrial needs
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Sand Blasting Service */}
            <ScrollAnimation delay={100}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/IMG_8802.JPG" 
                    alt="Sand blasting service"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Sand Blasting</h3>
                  <p className="text-slate-600 mb-4">
                    Professional surface preparation and cleaning services for industrial equipment and metal surfaces.
                  </p>
                  <div className="flex space-x-2">
                    <img src="/images/IMG_8803.JPG" alt="Sand blasting work" className="w-16 h-12 object-cover rounded" />
                    <img src="/images/IMG_8804.JPG" alt="Sand blasting process" className="w-16 h-12 object-cover rounded" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Battery Tanks Service */}
            <ScrollAnimation delay={200}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/IMG_8646.JPG" 
                    alt="Battery tanks service"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Battery Tanks</h3>
                  <p className="text-slate-600 mb-4">
                    Custom battery containment systems for electric forklifts and industrial applications.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Custom Fabrication Service */}
            <ScrollAnimation delay={300}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/headjack.jpg" 
                    alt="Custom fabrication service"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom Fabrication</h3>
                  <p className="text-slate-600 mb-4">
                    Bespoke metal fabrication including overhead jacks, staircases, and specialised equipment.
                  </p>
                  <div className="flex space-x-2">
                    <img src="/images/staircase.jpg" alt="Custom staircase" className="w-16 h-12 object-cover rounded" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={400}>
            <div className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-6xl font-black mb-8 leading-tight">
              Ready to Start Your <span className="text-orange-400">NEXT PROJECT</span>?
            </h2>
            <p className="text-2xl text-slate-200 mb-12 max-w-4xl mx-auto font-light">
              From <span className="text-yellow-300 font-semibold">custom fabrication</span> to 
              <span className="text-orange-300 font-semibold"> industrial solutions</span>, 
              we're here to forge your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl group border-2 border-orange-400"
              >
                START YOUR PROJECT NOW
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-slate-400 text-slate-300 hover:bg-slate-400 hover:text-slate-900 px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-110"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;