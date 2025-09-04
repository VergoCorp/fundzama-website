import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Printer } from 'lucide-react';
import logo from '../images/logo2.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-500 rounded-lg overflow-hidden">
                <img src={logo} alt="Fundzama Logo" className="h-10 w-10 object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Fundzama Fabrication</h1>
                <p className="text-slate-300 text-sm">South African Metal Fabrication Excellence</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              Best provider of custom metal fabrication solutions for industrial, commercial, 
              and specialised equipment needs across South Africa.
            </p>
            <div className="flex space-x-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', /* 'Products', 'Projects', */ 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-slate-300 text-sm">011 028 3877</span>
              </div>
              <div className="flex items-center space-x-3">
                <Printer className="h-4 w-4 text-orange-500" />
                <span className="text-slate-300 text-sm">086 664 4981</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-slate-300 text-sm">admin@fundzamafabrication.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-slate-300 text-sm">178 Barbara Road
                  Elandsfontein,
                  Germiston,
                  1401
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Fundzama Fabrication. All rights reserved. | Crafted with precision and pride.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;