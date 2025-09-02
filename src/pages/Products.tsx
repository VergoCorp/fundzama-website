import React, { useState } from 'react';
import { ArrowLeft, Star, ShoppingCart, Eye, Filter, X, CheckCircle, Shield, Truck, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const products = [
    {
      id: 'battery-tanks',
      name: 'Electric Forklift Battery Tank',
      category: 'Industrial Equipment',
      price: 'R 15,000',
      rating: 4.8,
      reviews: 24,
      description: 'Heavy-duty battery containment system with multiple color options and safety features.',
      image: '/src/images/tank1.jpg',
      features: ['Multiple color options', 'Safety features', 'Heavy-duty construction', 'Easy installation'],
      specifications: {
        'Material': 'High-grade steel',
        'Capacity': 'Up to 2000kg',
        'Dimensions': '1200mm x 800mm x 600mm',
        'Weight': '45kg',
        'Finish': 'Powder coated'
      },
      benefits: [
        'Enhanced safety with spill containment',
        'Multiple color options for facility coordination',
        'Heavy-duty construction for long-term use',
        'Easy installation and maintenance'
      ]
    },
    {
      id: 'pallet-jacks',
      name: 'Uplift Pallet Jack',
      category: 'Material Handling',
      price: 'R 8,500',
      rating: 4.9,
      reviews: 31,
      description: 'Professional-grade pallet handling equipment in roller and standard configurations.',
      image: '/src/images/IMG_8657.JPG',
      features: ['Roller configuration', 'Standard configuration', 'Professional grade', 'Durable construction'],
      specifications: {
        'Load Capacity': 'Up to 2500kg',
        'Fork Length': '1150mm',
        'Fork Width': '160mm',
        'Lift Height': '200mm',
        'Material': 'Steel construction'
      },
      benefits: [
        'Increased efficiency in material handling',
        'Reduced manual labor requirements',
        'Improved workplace safety',
        'Versatile configuration options'
      ]
    },
    {
      id: 'industrial-stairs',
      name: 'Industrial Stairs & Railings',
      category: 'Safety Equipment',
      price: 'R 12,000',
      rating: 4.7,
      reviews: 18,
      description: 'Safety-compliant stairways and railing systems for industrial environments.',
      image: '/src/images/IMG_8656.JPG',
      features: ['Safety compliant', 'Industrial grade', 'Custom sizing', 'Easy installation'],
      specifications: {
        'Material': 'Galvanised steel',
        'Height': 'Customizable',
        'Width': 'Standard 1000mm',
        'Load Rating': '500kg per step',
        'Finish': 'Hot-dip galvanised'
      },
      benefits: [
        'Compliance with safety regulations',
        'Custom sizing for specific applications',
        'Durable construction for industrial use',
        'Easy installation and maintenance'
      ]
    },
    {
      id: 'washbays',
      name: 'Lead Acid Washbay',
      category: 'Battery Maintenance',
      price: 'R 6,800',
      rating: 4.6,
      reviews: 15,
      description: 'Specialised washbay systems with perforated surfaces for battery maintenance.',
      image: '/src/images/IMG_8655.JPG',
      features: ['Perforated surface', 'Battery maintenance', 'Specialised design', 'Durable materials'],
      specifications: {
        'Material': 'Stainless steel',
        'Surface': 'Perforated for drainage',
        'Dimensions': '2000mm x 1500mm x 200mm',
        'Drainage': 'Integrated system',
        'Finish': 'Corrosion resistant'
      },
      benefits: [
        'Specialised for battery maintenance',
        'Integrated drainage system',
        'Corrosion-resistant materials',
        'Easy cleaning and maintenance'
      ]
    },
    {
      id: 'outdoor-furniture',
      name: 'Custom Outdoor Furniture',
      category: 'Furniture',
      price: 'R 3,200',
      rating: 4.9,
      reviews: 42,
      description: 'Weather-resistant outdoor furniture solutions for commercial and residential use.',
      image: '/src/images/IMG_8654.JPG',
      features: ['Weather resistant', 'Commercial grade', 'Residential use', 'Custom designs'],
      specifications: {
        'Material': 'Powder-coated steel',
        'Finish': 'Weather-resistant coating',
        'Design': 'Customizable',
        'Warranty': '5 years',
        'Installation': 'Professional service'
      },
      benefits: [
        'Weather-resistant for outdoor use',
        'Custom designs to match requirements',
        'Commercial and residential applications',
        'Long-lasting durability'
      ]
    },
    {
      id: 'custom-fabrication',
      name: 'Custom Fabrication Service',
      category: 'Custom Services',
      price: 'Contact Us',
      rating: 5.0,
      reviews: 56,
      description: 'Bespoke metal fabrication solutions tailored to your specific requirements.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      features: ['Custom design', 'Tailored solutions', 'Professional consultation', 'Quality guarantee'],
      specifications: {
        'Service': 'Full fabrication',
        'Materials': 'Various metals available',
        'Design': 'Custom to specification',
        'Timeline': 'Project dependent',
        'Support': 'Full consultation'
      },
      benefits: [
        'Tailored to specific requirements',
        'Professional design consultation',
        'Quality guarantee on all work',
        'Comprehensive project support'
      ]
    }, 
    // as a custom service
    {
      id: 'custom-fabrication',
      name: 'Custom Metal Fabrication',
      category: 'Industrial Equipment',
      price: 'R 25,000',
      rating: 4.9,
      reviews: 28,
      description: 'Bespoke metal fabrication services for unique industrial requirements.',
      image: '/src/images/IMG_8653.JPG',
      features: ['Custom design', 'Industrial grade', 'Precision engineering', 'Quality finish'],
      specifications: {
        'Material': 'Various steel grades',
        'Capacity': 'Custom specifications',
        'Finish': 'Multiple options',
        'Lead Time': '2-4 weeks',
        'Quality': 'ISO standards'
      },
      benefits: [
        'Tailored to specific requirements',
        'Professional engineering support',
        'Quality assurance throughout',
        'Flexible design options'
      ]
    },
    {
      id: 'workshop-equipment',
      name: 'Workshop Equipment',
      category: 'Industrial Equipment',
      price: 'R 18,000',
      rating: 4.8,
      reviews: 35,
      description: 'Professional workshop equipment and machinery for industrial applications.',
      image: '/src/images/IMG_8651.JPG',
      features: ['Heavy-duty construction', 'Professional grade', 'Safety features', 'Easy maintenance'],
      specifications: {
        'Material': 'Industrial steel',
        'Power': 'Various options',
        'Safety': 'CE certified',
        'Warranty': '2 years',
        'Support': 'Technical assistance'
      },
      benefits: [
        'Enhanced workshop efficiency',
        'Improved safety standards',
        'Reduced maintenance costs',
        'Professional-grade performance'
      ]
    }
  ];

  const categories = [
    {
      name: 'Industrial Equipment',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      count: 15,
      description: 'Heavy-duty industrial machinery and equipment'
    },
    {
      name: 'Material Handling',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      count: 8,
      description: 'Equipment for moving and storing materials'
    },
    {
      name: 'Safety Equipment',
      image: 'https://images.pexels.com/photos/159306/architecture-building-construction-site-159306.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      count: 12,
      description: 'Safety infrastructure and protective equipment'
    },
    {
      name: 'Battery Maintenance',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      count: 6,
      description: 'Specialised battery care and maintenance systems'
    }
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
  };

  const clearFilter = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
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
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Products</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Quality metal fabrication products designed for industrial and commercial applications
              </p>
            </div>
          </ScrollAnimation>



          {/* Categories - COMMENTED OUT */}
          {/*
          <ScrollAnimation delay={200}>
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Product Categories</h2>
                {selectedCategory && (
                  <button
                    onClick={clearFilter}
                    className="inline-flex items-center text-slate-600 hover:text-slate-800 font-semibold transition-colors"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear Filter
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 ${
                      selectedCategory === category.name 
                        ? 'border-blue-500 shadow-blue-100' 
                        : 'border-transparent hover:border-slate-200'
                    }`}
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    <div className="h-32 overflow-hidden relative">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      {selectedCategory === category.name && (
                        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          Active
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 mb-1">{category.name}</h3>
                      <p className="text-sm text-slate-600 mb-2">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">{category.count} products</span>
                        <div className="text-blue-600 text-sm font-semibold">
                          {selectedCategory === category.name ? 'Selected' : 'Click to filter'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
          */}

          {/* Filter Status - COMMENTED OUT */}
          {/*
          {selectedCategory && (
            <ScrollAnimation>
              <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Filter className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-blue-800 font-semibold">
                      Showing products in: <span className="text-blue-600">{selectedCategory}</span>
                    </span>
                  </div>
                  <button
                    onClick={clearFilter}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Show All Products
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          )}
          */}

          {/* Product Details Section - COMMENTED OUT */}
          {/*
          <ScrollAnimation delay={400}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Product Details & Specifications</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Premium Quality</h3>
                      <p className="text-slate-600">Industry-leading standards</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-700">Certified materials and construction</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-slate-700">Safety compliance guaranteed</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-orange-500 mr-3" />
                      <span className="text-slate-700">Professional delivery and installation</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-purple-500 mr-3" />
                      <span className="text-slate-700">Quick turnaround times</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Expert Support</h3>
                      <p className="text-slate-600">Professional consultation available</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-700">Custom design consultation</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-slate-700">Technical specifications review</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-orange-500 mr-3" />
                      <span className="text-slate-700">Installation guidance</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-purple-500 mr-3" />
                      <span className="text-slate-700">Ongoing maintenance support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          */}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ScrollAnimation key={product.id} delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-slate-600 ml-1">{product.rating}</span>
                        <span className="text-sm text-slate-500 ml-1">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">{product.description}</p>
                    
                    {/* Specifications */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Specifications:</h4>
                      <div className="space-y-1">
                        {Object.entries(product.specifications).slice(0, 3).map(([key, value], specIndex) => (
                          <div key={specIndex} className="flex justify-between text-sm">
                            <span className="text-slate-600 font-medium">{key}:</span>
                            <span className="text-slate-800">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {product.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-end">
                      <div className="flex space-x-2">
                        <Link
                          to={`/products/${product.id}`}
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                          title="View Product Details"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        <button className="p-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors">
                          <ShoppingCart className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* No Results Message */}
          {selectedCategory && filteredProducts.length === 0 && (
            <ScrollAnimation>
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-600 mb-6">
                  No products available in the "{selectedCategory}" category at the moment.
                </p>
                <button
                  onClick={clearFilter}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  View All Products
                </button>
              </div>
            </ScrollAnimation>
          )}

          {/* CTA Section */}
          <ScrollAnimation delay={800}>
            <div className="text-center mt-20">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Need Something Custom?
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                We specialise in custom fabrication solutions tailored to your specific requirements
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Request Custom Quote
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Products;