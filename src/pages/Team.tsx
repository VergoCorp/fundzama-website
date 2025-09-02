import React from 'react';
import { Mail, Phone, Linkedin, Award, Users, Target } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Team = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
                Meet Our Team
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                The skilled professionals behind South Africa's premier metal fabrication company. 
                Experience, expertise, and excellence in every project.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Team Values</h2>
              <p className="text-xl text-slate-600">The principles that unite us in delivering excellence</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for perfection in every weld, every cut, every project we undertake.',
                color: 'bg-orange-500'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Our diverse expertise comes together to solve complex engineering challenges.',
                color: 'bg-yellow-500'
              },
              {
                icon: Target,
                title: 'Precision',
                description: 'Attention to detail and accuracy in everything we do, from design to delivery.',
                color: 'bg-slate-600'
              }
            ].map((value, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <div className="text-center">
                  <div className={`${value.color} p-4 rounded-full w-16 h-16 mx-auto mb-6`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      



      {/* Team Stats */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team by Numbers</h2>
              <p className="text-xl text-slate-300">Experience and expertise that delivers results</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Combined Years Experience', color: 'text-orange-400' },
              { number: '25+', label: 'Professional Certifications', color: 'text-yellow-400' },
              { number: '1000+', label: 'Projects Completed', color: 'text-green-400' },
              { number: '100%', label: 'Safety Record', color: 'text-blue-400' }
            ].map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Join Our <span className="text-orange-500">Expert Team</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented professionals who share our passion for excellence 
              in metal fabrication and engineering.
            </p>
            <a
              href="mailto:careers@fundzamafabrication.co.za"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              careers@fundzamafabrication.co.za
            </a>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Team;