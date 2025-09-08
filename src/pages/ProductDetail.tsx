
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Star } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const ProductDetail = () => {
  const { id } = useParams();

  const productData: Record<string, any> = {
    'battery-tanks': {
      title: 'Electric Forklift Battery Tanks',
      category: 'Industrial Equipment',
      description: 'Heavy-duty battery containment systems designed for electric forklift operations. Our tanks feature robust construction, multiple color options, and comprehensive safety features to ensure reliable performance in demanding industrial environments.',
      longDescription: 'Our Electric Forklift Battery Tanks represent the pinnacle of industrial battery containment technology. Engineered with precision and built to last, these tanks provide secure housing for electric forklift batteries while ensuring easy maintenance access and optimal safety protocols.',
      specifications: [
        'Material: High-grade steel with protective coating',
        'Capacity: 200-1000 Ah battery compatibility',
        'Dimensions: Custom sizing available',
        'Colors: Red, Blue, Green, Yellow, Black',
        'Safety: Acid-resistant interior lining',
        'Certification: Industrial safety standards compliant'
      ],
      features: [
        'Multiple color options for facility organisation',
        'Acid-resistant interior coating',
        'Easy-access maintenance panels',
        'Reinforced lifting points',
        'Ventilation systems included',
        'Custom sizing available'
      ],
      applications: [
        'Warehouse operations',
        'Manufacturing facilities',
        'Distribution centers',
        'Industrial complexes'
      ],
      images: ['/images/tank1.jpg', '/images/tanks7.jpg', '/images/tank2.jpg', '/images/tank3.jpg', '/images/tank4.jpg']
    },
    'pallet-jacks': {
      title: 'Uplift Pallet Jacks',
      category: 'Material Handling',
      description: 'Professional-grade pallet handling equipment available in both roller and standard configurations. Built for durability and efficiency in high-volume material handling operations.',
      longDescription: 'Our Uplift Pallet Jacks are engineered for the demanding requirements of modern material handling. Whether you need roller models for smooth transport or standard models for versatile lifting, our pallet jacks deliver reliable performance day after day.',
      specifications: [
        'Load Capacity: 2000-5000 kg',
        'Fork Length: 1150mm standard, custom available',
        'Fork Width: 550mm standard',
        'Lift Height: 200mm maximum',
        'Material: High-strength steel construction',
        'Wheels: Polyurethane load wheels, nylon steer wheels'
      ],
      features: [
        'Roller and standard model options',
        'Heavy-duty construction',
        'Ergonomic handle design',
        'Precision hydraulic system',
        'Low-maintenance operation',
        'Custom configurations available'
      ],
      applications: [
        'Warehouse operations',
        'Retail environments',
        'Manufacturing floors',
        'Loading dock operations'
      ],
      images: ['🏗️', '📦', '🚛', '⚙️']
    },
    'industrial-stairs': {
      title: 'Industrial Stairs & Safety Railings',
      category: 'Safety Infrastructure',
      description: 'Safety-compliant stairways and railing systems designed for industrial environments. Our solutions meet all safety standards while providing durable, long-lasting performance.',
      longDescription: 'Safety is paramount in industrial environments, and our Industrial Stairs & Safety Railings provide the reliable access solutions your facility needs. Engineered to meet stringent safety standards while delivering exceptional durability.',
      specifications: [
        'Material: Galvanised steel construction',
        'Compliance: OSHA safety standards',
        'Railing Height: 42" standard',
        'Step Width: Custom sizing available',
        'Load Rating: 100 lbs/sq ft minimum',
        'Finish: Hot-dip galvanised or powder coated'
      ],
      features: [
        'OSHA compliant design',
        'Slip-resistant treads',
        'Modular construction',
        'Weather-resistant finish',
        'Custom configurations',
        'Professional installation'
      ],
      applications: [
        'Industrial platforms',
        'Equipment access',
        'Mezzanine levels',
        'Outdoor installations'
      ],
      images: ['🏭', '🛡️', '⬆️', '🔧']
    },
    'washbays': {
      title: 'Lead Acid Washbays',
      category: 'Maintenance Equipment',
      description: 'Specialised washbay systems with perforated surfaces designed for lead acid battery maintenance. Features efficient drainage and acid-resistant construction.',
      longDescription: 'Our Lead Acid Washbays are specifically engineered for safe and efficient battery maintenance operations. The perforated surface design ensures optimal drainage while the acid-resistant construction provides long-lasting durability.',
      specifications: [
        'Material: Acid-resistant stainless steel',
        'Surface: Perforated for optimal drainage',
        'Dimensions: Standard and custom sizes',
        'Drainage: Integrated collection system',
        'Safety: Non-slip surface treatment',
        'Installation: Floor-mounted or portable options'
      ],
      features: [
        'Perforated drainage surface',
        'Acid-resistant materials',
        'Easy cleaning design',
        'Safety compliance',
        'Modular construction',
        'Custom sizing available'
      ],
      applications: [
        'Battery maintenance facilities',
        'Industrial workshops',
        'Service centers',
        'Manufacturing plants'
      ],
      images: ['🚿', '🔋', '⚗️', '🛠️']
    },
    'outdoor-furniture': {
      title: 'Custom Outdoor Metal Furniture',
      category: 'Furniture',
      description: 'Weather-resistant outdoor furniture solutions for commercial and residential applications. Modern designs with durable construction for long-lasting performance.',
      longDescription: 'Our Custom Outdoor Metal Furniture combines aesthetic appeal with practical durability. Each piece is crafted to withstand the elements while providing comfortable, stylish seating and table solutions for any outdoor environment.',
      specifications: [
        'Material: Weather-resistant steel/aluminum',
        'Finish: Powder-coated for durability',
        'Design: Modern and traditional styles',
        'Customisation: Colors, sizes, configurations',
        'Hardware: Stainless steel fasteners',
        'Warranty: 5-year structural warranty'
      ],
      features: [
        'Weather-resistant construction',
        'Custom design options',
        'Modern styling',
        'Comfortable ergonomics',
        'Low maintenance',
        'Commercial grade quality'
      ],
      applications: [
        'Restaurant patios',
        'Corporate campuses',
        'Public spaces',
        'Residential gardens'
      ],
      images: ['🪑', '☀️', '🌧️', '🎨']
    },
    'custom-fabrication': {
      title: 'Custom Fabrication Services',
      category: 'Custom Solutions',
      description: 'Bespoke metal fabrication solutions tailored to your specific requirements. From concept to completion, we bring your vision to life with precision engineering.',
      longDescription: 'Our Custom Fabrication Services represent the ultimate in personalised metal working solutions. Whether you need a one-off prototype or a full production run, our expert team works closely with you to deliver exactly what you envision.',
      specifications: [
        'Materials: Steel, aluminum, stainless steel, specialty alloys',
        'Processes: Cutting, welding, forming, machining',
        'Capacity: Small prototypes to large assemblies',
        'Tolerances: Precision to ±0.005"',
        'Finishing: Painting, plating, anodizing, powder coating',
        'Quality: ISO 9001 certified processes'
      ],
      features: [
        'Complete design consultation',
        'Prototype development',
        'Production fabrication',
        'Quality assurance',
        'Finishing services',
        'Project management'
      ],
      applications: [
        'Architectural elements',
        'Industrial machinery',
        'Artistic installations',
        'Specialised equipment'
      ],
      images: ['⚙️', '🔧', '📐', '✨']
    }
  };

  const product = productData[id as string];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-orange-600 hover:text-orange-700">
            Return to Products
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
            to="/products"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div>
                <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-6">
                  {product.title}
                </h1>
                <p className="text-xl text-slate-600 mb-6">
                  {product.description}
                </p>
                <p className="text-slate-700 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="bg-slate-200 rounded-lg overflow-hidden h-96">
                {product.images[0].startsWith('/images/') ? (
                  <img 
                    src={product.images[0]} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="p-8 text-center h-full flex items-center justify-center">
                    <div>
                      <div className="text-8xl mb-4">{product.images[0]}</div>
                      <p className="text-slate-600 font-medium">PLACEHOLDER: {product.title} Hero Image</p>
                      <p className="text-sm text-slate-500 mt-2">Replace with: High-quality product photo</p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Product Gallery</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.images.map((image: string, index: number) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-slate-200 rounded-lg overflow-hidden h-48 hover:bg-slate-300 transition-colors cursor-pointer">
                  {image.startsWith('/images/') ? (
                    <img 
                      src={image} 
                      alt={`${product.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="p-6 text-center h-full flex items-center justify-center">
                      <div>
                        <div className="text-3xl mb-1">{image}</div>
                        <p className="text-xs text-slate-600">Image {index + 1}</p>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <ScrollAnimation>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Specifications</h3>
                <ul className="space-y-3">
                  {product.specifications.map((spec: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Star className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            {/* Features */}
            <ScrollAnimation delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
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
              Interested in <span className="text-orange-400">{product.title}</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a custom quote or speak with our experts about your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Request Quote
              </Link>
              <Link
                to="/products"
                className="border-2 border-slate-400 text-slate-300 hover:bg-slate-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View All Products
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;