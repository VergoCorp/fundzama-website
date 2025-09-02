import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Award, Phone } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import { createOrganisationSchema, createWebPageSchema } from '../utils/structuredData';
import logo from '../images/logo2.png';
import '../styles/about.css';

const About = () => {
  const organisationSchema = createOrganisationSchema();
  const webPageSchema = createWebPageSchema(
    "About Fundzama Fabrication - South Africa's Metal Fabrication Experts",
    "Learn about Fundzama Fabrication's 10+ years of excellence in custom metal fabrication, industrial equipment manufacturing, and precision engineering in South Africa.",
    "https://fundzama.co.za/about"
  );

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organisationSchema, webPageSchema]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <SEOHead
        title="About Fundzama Fabrication - South Africa's Metal Fabrication Experts"
        description="Learn about Fundzama Fabrication's 10+ years of excellence in custom metal fabrication, industrial equipment manufacturing, and precision engineering in South Africa."
        keywords="about Fundzama, metal fabrication company, South Africa manufacturing, industrial equipment, company history, fabrication expertise"
        image="https://fundzama.co.za/src/images/logo2.png"
        url="https://fundzama.co.za/about"
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
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Fundzama</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                At the forefront of South African metal fabrication, with a decade of excellence
              </p>
            </div>
          </ScrollAnimation>

          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <ScrollAnimation>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Founded in 2016, Fundzama Fabrication has grown to become one of South Africa's 
                  most trusted metal fabrication specialists. Our journey has been driven by a passion for precision 
                  engineering and an unwavering commitment to quality.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Today, we serve clients across the country, small-medium, and large scale businesses, to manufacturing facilities, 
                  delivering custom solutions that meet the highest industrial standards.
                </p>
                {/* Statistics Section - COMMENTED OUT */}
                {/*
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                    <div className="text-sm text-slate-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-sm text-slate-600">Client Satisfaction</div>
                  </div>
                </div>
                */}
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden logo-container">
                  <img 
                    src={logo} 
                    alt="Fundzama Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="floating-badge">
                  <div className="badge-icon">🏭</div>
                  <div className="badge-text">State-of-the-art facility</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <ScrollAnimation>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To deliver precision-engineered metal fabrication solutions that exceed client expectations, 
                  while maintaining the highest standards of quality, safety, and innovation in every project.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Excellence in craftsmanship</li>
                  <li>• Innovation in solutions</li>
                  <li>• Integrity in business</li>
                  <li>• Safety in operations</li>
                  <li>• Customer satisfaction</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>



          {/* Process Section - COMMENTED OUT */}
          {/*
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From concept to completion, we follow a proven methodology
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Understanding your requirements and project scope',
                image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Creating detailed technical drawings and specifications',
                image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
              },
              {
                step: '03',
                title: 'Fabrication',
                description: 'Precision manufacturing using advanced techniques',
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Quality assurance and timely project completion',
                image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
              }
            ].map((process, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
              </ScrollAnimation>
            ))}
          </div>
          */}



          {/* CTA Section */}
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help bring your project to life with our expertise and dedication to quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Get In Touch
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default About;