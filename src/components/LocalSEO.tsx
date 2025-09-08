import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface LocalSEOProps {
  businessName?: string;
  address?: string;
  phone?: string;
  email?: string;
  hours?: string[];
  showMap?: boolean;
}

const LocalSEO: React.FC<LocalSEOProps> = ({
  businessName = "Fundzama Fabrication",
  address = "Your Business Address, City, Province, South Africa",
  phone = "+27-XX-XXX-XXXX",
  email = "admin@fundzamafabrication.co.za",
  hours = [
    "Monday - Friday: 7:00 AM - 5:00 PM",
    "Saturday: 8:00 AM - 1:00 PM",
    "Sunday: Closed"
  ],
  showMap = true
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
        <MapPin className="h-6 w-6 text-orange-500 mr-2" />
        Visit Our Workshop
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Information */}
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900">Address</h3>
              <p className="text-slate-600">{address}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900">Phone</h3>
              <a href={`tel:${phone}`} className="text-orange-600 hover:text-orange-700">
                {phone}
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900">Email</h3>
              <a href={`mailto:${email}`} className="text-orange-600 hover:text-orange-700">
                {email}
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900">Business Hours</h3>
              <div className="text-slate-600">
                {hours.map((hour, index) => (
                  <p key={index}>{hour}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Placeholder */}
        {showMap && (
          <div className="bg-gray-100 rounded-lg flex items-center justify-center h-64">
            <div className="text-center text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-2" />
              <p>Interactive Map</p>
              <p className="text-sm">Google Maps integration</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Local SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": businessName,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": address.split(',')[0],
              "addressLocality": address.split(',')[1]?.trim(),
              "addressRegion": address.split(',')[2]?.trim(),
              "addressCountry": "ZA"
            },
            "telephone": phone,
            "email": email,
            "openingHours": [
              "Mo-Fr 08:00-17:00",
              "Sa 08:00-13:00"
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -26.2041,
              "longitude": 28.0473
            },
            "url": "https://fundzama.netlify.app",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "Country",
              "name": "South Africa"
            }
          })
        }}
      />
    </div>
  );
};

export default LocalSEO;
