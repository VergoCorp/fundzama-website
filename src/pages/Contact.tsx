import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';
import { createWebPageSchema } from '../utils/structuredData';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const webPageSchema = createWebPageSchema(
    "Contact Fundzama Fabrication - Get Your Custom Metal Fabrication Quote",
    "Contact South Africa's premier metal fabrication company. Get quotes for custom metalwork, industrial equipment, and fabrication services. Expert consultation available.",
    "https://fundzama.co.za/contact"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('https://hook.eu2.make.com/eczk3r9vosiqp3cshyilq4w2eklekol7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'Fundzama Contact Form'
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <SEOHead
        title="Contact Fundzama Fabrication - Get Your Custom Metal Fabrication Quote"
        description="Contact South Africa's premier metal fabrication company. Get quotes for custom metalwork, industrial equipment, and fabrication services. Expert consultation available."
        keywords="contact Fundzama, metal fabrication quote, South Africa fabrication, custom metalwork quote, industrial equipment inquiry"
        image="https://fundzama.co.za/images/logo2.png"
        url="https://fundzama.co.za/contact"
        type="website"
        structuredData={webPageSchema}
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
                ← Back to Home
              </Link>
            </div>
            
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Ready to start your next fabrication project? Our expert team is here to help bring your vision to life.
              </p>
            </div>
          </ScrollAnimation>

          {/* Contact Information */}
          <ScrollAnimation delay={200}>
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
              {/* Office */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center contact-card flex-1">
                <div className="bg-orange-500 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Main Office</h3>
                <p className="text-slate-600 mb-2">General Inquiries</p>
                <a href="tel:0110283877" className="text-orange-600 hover:text-orange-700 font-semibold">
                  011 028 3877
                </a>
              </div>

              {/* Elijah */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center contact-card flex-1">
                <div className="bg-yellow-500 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Elijah Fundzama</h3>
                <p className="text-slate-600 mb-2">CEO & Founder</p>
                <a href="tel:0722775886" className="text-orange-600 hover:text-orange-700 font-semibold">
                  072 277 5886
                </a>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center contact-card flex-1">
                <div className="bg-orange-600 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-600 mb-2">24/7 Support</p>
                <a href="mailto:admin@fundzamafabrication.co.za" className="text-orange-600 hover:text-orange-700 font-semibold text-sm">
                  admin@fundzamafabrication.co.za
                </a>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation delay={400}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed response.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors form-input"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors form-input"
                        placeholder="083 123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors form-input"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors form-input"
                    >
                      <option value="">Select a service</option>
                      <option value="battery-tanks">Electric Forklift Battery Tanks</option>
                      <option value="pallet-jacks">Uplift Pallet Jacks</option>
                      <option value="industrial-stairs">Industrial Stairs & Railings</option>
                      <option value="washbays">Lead Acid Washbays</option>
                      <option value="outdoor-furniture">Custom Outdoor Furniture</option>
                      <option value="custom-fabrication">Custom Fabrication Services</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors form-input"
                      placeholder="Please describe your project requirements, timeline, and any specific details..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center submit-button ${
                      isSubmitted
                        ? 'bg-green-500 text-white'
                        : isSubmitting
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-xl'
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Message Sent Successfully!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Error Message */}
                  {submitError && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">{submitError}</p>
                    </div>
                  )}
                </form>
              </div>
            </ScrollAnimation>

            {/* Additional Info */}
            <ScrollAnimation delay={600}>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Fundzama?</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-500 p-2 rounded-lg mr-4 flex-shrink-0">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Fast Response Time</h3>
                        <p className="text-slate-600">We respond to all inquiries within 24 hours with detailed project assessments.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-green-500 p-2 rounded-lg mr-4 flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Quality Guarantee</h3>
                        <p className="text-slate-600">All our work comes with comprehensive warranties and quality assurance.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-purple-500 p-2 rounded-lg mr-4 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Nationwide Service</h3>
                        <p className="text-slate-600">We serve clients across South Africa with consistent quality and reliability.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Business Hours</h3>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">7:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">8:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold">Emergency Only</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2 mt-3">
                      <span>Emergency Contact:</span>
                      <span className="font-semibold text-blue-600">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Our Facility</h2>
              <p className="text-xl text-slate-600">Located in the heart of South Africa's industrial region</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Fundzama Fabrication Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Address</p>
                      <p className="text-slate-600">Industrial Complex, Johannesburg<br />South Africa</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Facility Tours</p>
                      <p className="text-slate-600">Available by appointment<br />Monday - Friday, 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="tel:0110283877"
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule a Visit
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="bg-slate-200 rounded-lg p-8 text-center map-placeholder flex items-center justify-center">
                <div>
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-slate-600 font-medium">PLACEHOLDER: Facility Location Map</p>
                  <p className="text-sm text-slate-500 mt-2">Replace with: Interactive map or facility photo</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;