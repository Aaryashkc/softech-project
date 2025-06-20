import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const candidateData = {
    name: "Giriraj Pani Pokhrel",
    title: "Nepali Politician",
    contact: {
      email: "contact@girirajpokhrel.com",
      phone: "(555) 123-4567",
      address: "Campaign Office, Main Street, City"
    }
  };

  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-4 tracking-wide">{candidateData.name}</h3>
            <p className="text-white mb-6 max-w-md leading-relaxed">
              Committed to transparent governance, sustainable development, and building stronger communities through collaborative leadership and proven experience.
            </p>
            <div className="inline-block">
              <span className="bg-red-700 text-white px-4 py-2 text-sm font-medium tracking-wide">
                {candidateData.title}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-medium mb-6 text-white tracking-wide uppercase text-sm">Navigation</h4>
            <ul className="space-y-3">
              {[
                { path: '/biography', label: 'Biography' },
                { path: '/events', label: 'Events' },
                { path: '/news', label: 'News' },
                { path: '/contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-white hover:text-red-200 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-medium mb-6 text-red-200 tracking-wide uppercase text-sm">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-red-200">
                <Mail size={16} className="text-white" />
                <span className="text-sm">{candidateData.contact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-red-200">
                <Phone size={16} className="text-white" />
                <span className="text-sm">{candidateData.contact.phone}</span>
              </div>
              <div className="flex items-start gap-3 text-red-200">
                <MapPin size={16} className="mt-0.5 text-white" />
                <span className="text-sm">{candidateData.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-red-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-red-200 text-sm">
              © 2025 {candidateData.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-red-200 hover:text-red-100 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-red-200 hover:text-red-100 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-red-200 hover:text-red-100 text-sm transition-colors">
                Campaign Finance Disclaimer
              </a>
            </div>
          </div>
          
          {/* Political Disclaimer */}
          <div className="mt-6 pt-6 border-t border-red-300">
            <p className="text-red-300 text-xs leading-relaxed">
              By Softech Foundation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;