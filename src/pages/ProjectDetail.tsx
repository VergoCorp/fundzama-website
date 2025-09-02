import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, DollarSign, Users, CheckCircle } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const ProjectDetail = () => {
  const { id } = useParams();

  const projectData: Record<string, any> = {
    'mining-complex': {
      title: 'Johannesburg Mining Complex',
      category: 'Industrial Infrastructure',
      client: 'Anglo American',
      year: '2024',
      location: 'Johannesburg, SA',
      value: 'R 2.5M',
      duration: '8 months',
      status: 'Completed',
      description: 'Complete fabrication of industrial stairs, railings, and safety platforms for major mining operation.',
      challenge: 'The project required fabrication of safety infrastructure for a high-risk mining environment, with strict compliance to mining safety regulations and the ability to withstand extreme industrial conditions.',
      solution: 'Our team designed and fabricated custom industrial stairs, safety railings, and access platforms using high-grade galvanised steel. All components were engineered to exceed mining safety standards while providing long-term durability in harsh underground conditions.',
      deliverables: [
        '15 industrial stairway systems',
        '500 meters of safety railings',
        '8 access platforms with safety features',
        'Custom handrail systems',
        'Emergency egress solutions',
        'Comprehensive safety documentation'
      ],
      outcomes: [
        'Zero safety incidents during installation',
        '100% compliance with mining safety standards',
        'Reduced maintenance requirements by 40%',
        'Enhanced worker safety and accessibility',
        'On-time delivery within budget'
      ],
      images: ['⛏️', '🏗️', '🛡️', '⚙️', '📋', '✅']
    },
    'warehouse-automation': {
      title: 'Automated Warehouse Systems',
      category: 'Material Handling',
      client: 'Shoprite Holdings',
      year: '2024',
      location: 'Cape Town, SA',
      value: 'R 1.8M',
      duration: '6 months',
      status: 'Completed',
      description: 'Custom pallet jack fleet and battery tank systems for automated distribution center.',
      challenge: 'Shoprite needed a complete material handling solution for their new automated distribution center, requiring custom pallet jacks and battery systems that could integrate seamlessly with their automation technology.',
      solution: 'We developed a comprehensive material handling system including 50 custom pallet jacks and 25 battery tank systems, all designed to work with the automated warehouse management system while maintaining high efficiency and reliability.',
      deliverables: [
        '50 custom uplift pallet jacks',
        '25 electric forklift battery tanks',
        'Integrated charging stations',
        'Custom fleet management system',
        'Maintenance training program',
        'Extended warranty coverage'
      ],
      outcomes: [
        'Increased warehouse efficiency by 35%',
        'Reduced operational costs by 25%',
        'Improved inventory accuracy to 99.8%',
        'Enhanced worker productivity',
        'Seamless automation integration'
      ],
      images: ['🏭', '🚛', '🔋', '📊', '⚡', '🎯']
    },
    'manufacturing-upgrade': {
      title: 'Manufacturing Plant Upgrade',
      category: 'Manufacturing',
      client: 'Sasol Limited',
      year: '2023',
      location: 'Durban, SA',
      value: 'R 3.2M',
      duration: '10 months',
      status: 'Completed',
      description: 'Comprehensive fabrication services for production line enhancement and safety improvements.',
      challenge: 'Sasol required a complete upgrade of their manufacturing facility while maintaining continuous production, demanding precise scheduling and specialised fabrication techniques for chemical processing environments.',
      solution: 'Our team executed a phased upgrade approach, fabricating custom equipment supports, safety systems, and process infrastructure using chemical-resistant materials and specialised welding techniques suitable for the petrochemical environment.',
      deliverables: [
        'Custom equipment mounting systems',
        'Chemical-resistant walkways and platforms',
        'Specialised ventilation ductwork',
        'Safety shower and eyewash stations',
        'Process piping supports',
        'Emergency response infrastructure'
      ],
      outcomes: [
        'Zero production downtime during installation',
        'Improved safety compliance by 100%',
        'Enhanced production capacity by 20%',
        'Reduced maintenance costs by 30%',
        'Extended equipment lifespan'
      ],
      images: ['🏗️', '⚗️', '🛡️', '🔧', '📈', '🏆']
    },
    'retail-furniture': {
      title: 'Retail Chain Outdoor Furniture',
      category: 'Commercial Furniture',
      client: 'Woolworths Holdings',
      year: '2023',
      location: 'Nationwide',
      value: 'R 950K',
      duration: '4 months',
      status: 'Completed',
      description: 'Custom outdoor furniture design and fabrication for 50+ retail locations nationwide.',
      challenge: 'Woolworths needed a unified outdoor furniture solution for their retail locations across South Africa, requiring weather-resistant designs that maintained brand consistency while accommodating diverse climatic conditions.',
      solution: 'We designed and fabricated a modular outdoor furniture system using weather-resistant materials and finishes, creating a cohesive brand experience while ensuring durability across different environmental conditions.',
      deliverables: [
        '200 custom outdoor tables',
        '800 weather-resistant chairs',
        '50 umbrella stands and accessories',
        'Modular seating configurations',
        'Brand-consistent color schemes',
        'Installation and setup services'
      ],
      outcomes: [
        'Enhanced customer experience at all locations',
        'Increased outdoor seating capacity by 60%',
        'Improved brand consistency nationwide',
        'Reduced replacement costs by 50%',
        'Positive customer feedback scores'
      ],
      images: ['🪑', '☀️', '🏪', '🎨', '🌍', '⭐']
    },
    'power-station': {
      title: 'Power Station Maintenance Equipment',
      category: 'Energy Infrastructure',
      client: 'Eskom Holdings',
      year: '2023',
      location: 'Pretoria, SA',
      value: 'R 4.1M',
      duration: '12 months',
      status: 'Completed',
      description: 'Specialised washbay systems and maintenance platforms for power generation facility.',
      challenge: 'Eskom required specialised maintenance equipment for their power generation facility, including acid-resistant washbay systems and maintenance platforms that could operate safely in high-voltage environments.',
      solution: 'We engineered and fabricated specialised maintenance equipment including lead acid washbays with advanced drainage systems and maintenance platforms with electrical isolation features, all designed to meet strict power industry safety standards.',
      deliverables: [
        '10 lead acid washbay systems',
        '15 maintenance access platforms',
        'Specialised drainage and containment systems',
        'Electrical isolation equipment',
        'Safety compliance documentation',
        'Operator training programs'
      ],
      outcomes: [
        'Improved maintenance efficiency by 45%',
        '100% safety compliance achievement',
        'Reduced environmental impact',
        'Enhanced equipment reliability',
        'Streamlined maintenance procedures'
      ],
      images: ['⚡', '🚿', '🔋', '🛠️', '📋', '🌱']
    },
    'automotive-assembly': {
      title: 'Automotive Assembly Line',
      category: 'Automotive',
      client: 'BMW South Africa',
      year: '2022',
      location: 'East London, SA',
      value: 'R 2.7M',
      duration: '9 months',
      status: 'Completed',
      description: 'Custom fabrication of assembly line components and material handling systems.',
      challenge: 'BMW required precision-engineered assembly line components that could integrate with their existing production systems while meeting strict automotive quality standards and production timing requirements.',
      solution: 'Our team fabricated custom assembly line components including conveyor supports, material handling systems, and precision fixtures, all engineered to automotive industry tolerances and integrated seamlessly with existing production equipment.',
      deliverables: [
        'Custom conveyor support systems',
        'Precision assembly fixtures',
        'Material handling equipment',
        'Quality control stations',
        'Ergonomic work platforms',
        'Integration and testing services'
      ],
      outcomes: [
        'Increased production efficiency by 25%',
        'Improved product quality consistency',
        'Enhanced worker ergonomics and safety',
        'Reduced assembly line downtime',
        'Successful integration with existing systems'
      ],
      images: ['🚗', '🏭', '⚙️', '📏', '🔧', '🏁']
    }
  };

  const project = projectData[id as string];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-orange-600 hover:text-orange-700">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-slate-900 mb-6">
                  {project.title}
                </h1>
                
                <p className="text-xl text-slate-600 mb-8">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-orange-500 mr-3" />
                    <div>
                      <p className="font-semibold text-slate-900">Client</p>
                      <p className="text-slate-600">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-orange-500 mr-3" />
                    <div>
                      <p className="font-semibold text-slate-900">Year</p>
                      <p className="text-slate-600">{project.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-orange-500 mr-3" />
                    <div>
                      <p className="font-semibold text-slate-900">Location</p>
                      <p className="text-slate-600">{project.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-orange-500 mr-3" />
                    <div>
                      <p className="font-semibold text-slate-900">Value</p>
                      <p className="text-slate-600">{project.value}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="bg-slate-200 rounded-lg p-8 text-center h-96 flex items-center justify-center">
                <div>
                  <div className="text-8xl mb-4">{project.images[0]}</div>
                  <p className="text-slate-600 font-medium">PLACEHOLDER: {project.title} Hero Image</p>
                  <p className="text-sm text-slate-500 mt-2">Replace with: Main project photo</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Project Gallery</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {project.images.map((image: string, index: number) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-slate-200 rounded-lg p-4 text-center h-24 flex items-center justify-center hover:bg-slate-300 transition-colors cursor-pointer">
                  <div>
                    <div className="text-2xl mb-1">{image}</div>
                    <p className="text-xs text-slate-600">Image {index + 1}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">The Challenge</h3>
                <p className="text-slate-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solution</h3>
                <p className="text-slate-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Deliverables & Outcomes */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Project Deliverables</h3>
                <ul className="space-y-3">
                  {project.deliverables.map((deliverable: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Project Outcomes</h3>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">
              Inspired by This <span className="text-orange-400">Project</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can deliver similar results for your organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/projects"
                className="border-2 border-slate-400 text-slate-300 hover:bg-slate-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View All Projects
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;