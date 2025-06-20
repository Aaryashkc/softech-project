import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/biography', label: 'Biography' },
    { path: '/events', label: 'Events' },
    { path: '/news', label: 'Latest News' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-sm border-b border-slate-200' 
        : 'bg-slate-50/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="text-lg font-medium text-slate-900 hover:text-slate-600 transition-colors tracking-wide"
            >
              GIRIRAJ PANI POKHREL
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => { navigate(item.path); setIsMenuOpen(false); }}
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm tracking-wide uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => { navigate('/contact'); setIsMenuOpen(false); }}
              className="bg-slate-800 text-white px-6 py-2 hover:bg-slate-900 transition-colors font-medium text-sm tracking-wide"
            >
              SUPPORT
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 transition-colors p-1"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-sm">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => { navigate(item.path); setIsMenuOpen(false); }}
                  className="block w-full text-left px-3 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors font-medium text-sm tracking-wide uppercase"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 mt-4 border-t border-slate-200">
                <button
                  onClick={() => { navigate('/contact'); setIsMenuOpen(false); }}
                  className="block w-full text-center px-3 py-3 bg-slate-800 text-white hover:bg-slate-900 transition-colors font-medium text-sm tracking-wide"
                >
                  SUPPORT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;