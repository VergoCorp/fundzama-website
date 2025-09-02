
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Projects = () => {
  const projects = [
    {
      id: 'mining-complex',
      title: 'Johannesburg Mining Complex',
      description: 'Complete fabrication of industrial stairs, railings, and safety platforms for major mining operation.',
      category: 'Industrial Infrastructure',
      client: 'Anglo American',
      year: '2024',
      location: 'Johannesburg, SA',
      image: '/src/images/IMG_8676.JPG',
      status: 'Completed',
      value: 'R 2.5M'
    },
    {
      id: 'warehouse-automation',
      title: 'Automated Warehouse Systems',
      description: 'Custom pallet jack fleet and battery tank systems for automated distribution center.',
      category: 'Material Handling',
      client: 'Shoprite Holdings',
      year: '2024',
      location: 'Cape Town, SA',
      image: '/src/images/IMG_8673.JPG',
      status: 'Completed',
      value: 'R 1.8M'
    },
    {
      id: 'manufacturing-upgrade',
      title: 'Manufacturing Plant Upgrade',
      description: 'Comprehensive fabrication services for production line enhancement and safety improvements.',
      category: 'Manufacturing',
      client: 'Sasol Limited',
      year: '2023',
      location: 'Durban, SA',
      image: '/src/images/IMG_8674.JPG',
      status: 'Completed',
      value: 'R 3.2M'
    },
    {
      id: 'retail-furniture',
      title: 'Retail Chain Outdoor Furniture',
      description: 'Custom outdoor furniture design and fabrication for 50+ retail locations nationwide.',
      category: 'Commercial Furniture',
      client: 'Woolworths Holdings',
      year: '2023',
      location: 'Nationwide',
      image: '/src/images/IMG_8671.JPG',
      status: 'Completed',
      value: 'R 950K'
    },
    {
      id: 'power-station',
      title: 'Power Station Maintenance Equipment',
      description: 'Specialised washbay systems and maintenance platforms for power generation facility.',
      category: 'Energy Infrastructure',
      client: 'Eskom Holdings',
      year: '2023',
      location: 'Pretoria, SA',
      image: '/src/images/IMG_8672.JPG',
      status: 'Completed',
      value: 'R 4.1M'
    },
    {
      id: 'automotive-assembly',
      title: 'Automotive Assembly Line',
      description: 'Custom fabrication of assembly line components and material handling systems.',
      category: 'Automotive',
      client: 'BMW South Africa',
      year: '2022',
      location: 'East London, SA',
      image: '/src/images/IMG_8670.JPG',
      status: 'Completed',
      value: 'R 2.7M'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
                Our Projects
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Showcasing excellence across South Africa's industrial landscape. From mining to manufacturing, 
                we deliver solutions that power progress.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Projects Completed', color: 'text-orange-500' },
              { number: 'R 50M+', label: 'Total Project Value', color: 'text-yellow-500' },
              { number: '50+', label: 'Major Clients', color: 'text-slate-600' },
              { number: '99%', label: 'On-Time Delivery', color: 'text-green-500' }
            ].map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
              <p className="text-xl text-slate-600">Delivering excellence across diverse industries</p>
            </div>
          </ScrollAnimation>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 100}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-slate-200">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <span className="text-slate-500 text-sm font-semibold">{project.value}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-slate-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.year} • {project.client}
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.location}
                      </div>
                    </div>
                    
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold group-hover:translate-x-1 transition-all duration-300"
                    >
                      View Project Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          
          {/* Coming Soon Section */}
          <ScrollAnimation>
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-12 border-2 border-orange-200">
                <div className="text-6xl mb-6">🚧</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Project Portfolio
                </h3>
                <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Project portfolio showcasing the exceptional work 
                  {/* we've delivered for our valued clients across South Africa. From industrial fabrication to 
                  custom solutions, our projects demonstrate our commitment to quality and innovation. */}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Get a Quote for Your Project
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-orange-400">Next Project</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the ranks of South Africa's leading companies who trust Fundzama Fabrication 
              for their critical projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Projects;