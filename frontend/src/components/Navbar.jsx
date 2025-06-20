import React, { useState } from 'react';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/biography', label: 'Biography' },
    { 
      path: '/events', 
      label: 'Events', 
      hasDropdown: true,
      dropdownItems: [
        { path: '/events', label: 'Events' },
        { path: '/gallery', label: 'Gallery' }
      ]
    },
    { path: '/news', label: 'Latest News' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleEventsHover = (isOpen) => {
    setIsEventsDropdownOpen(isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-red-900 shadow-sm border-b border-red-200' 
        : 'bg-red-900 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="text-lg font-medium text-white hover:text-red-400 transition-colors tracking-wide"
            >
              GIRIRAJ MANI POKHREL
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button
                      onClick={() => navigate(item.path)}
                      className="flex items-center text-white hover:text-red-400 transition-colors font-medium text-sm tracking-wide uppercase"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    
                    {/* Desktop Dropdown */}
                    <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-red-200 shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdownItems.map((dropdownItem) => (
                        <button
                          key={dropdownItem.path}
                          onClick={() => navigate(dropdownItem.path)}
                          className="block w-full text-left px-4 py-2 text-slate-600 hover:text-red-700 hover:bg-red-50 transition-colors font-medium text-sm first:rounded-t-sm last:rounded-b-sm"
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => { navigate(item.path); setIsMenuOpen(false); }}
                    className="text-white hover:text-red-400 transition-colors font-medium text-sm tracking-wide uppercase"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => { navigate('/bookstore'); setIsMenuOpen(false); }}
              className="bg-slate-200 text-red-800 px-6 py-2 hover:bg-slate-50 transition-colors font-medium text-sm tracking-wide flex items-center"
            >
              <ShoppingCart className="ml-1 w-4 h-4" /> <span className='ml-1'>Bookstore</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-500 transition-colors p-1"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-red-900 border-t border-red-200 shadow-sm">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => { navigate(item.path); setIsMenuOpen(false); }}
                        className="block w-full text-left px-3 py-3 text-white hover:text-red-700 hover:bg-red-50 transition-colors font-medium text-sm tracking-wide uppercase"
                      >
                        {item.label}
                      </button>
                      {/* Mobile Dropdown Items */}
                      <div className="ml-4 border-l-2 border-red-200 pl-4 space-y-1">
                        {item.dropdownItems.slice(1).map((dropdownItem) => (
                          <button
                            key={dropdownItem.path}
                            onClick={() => { navigate(dropdownItem.path); setIsMenuOpen(false); }}
                            className="block w-full text-left px-3 py-2 text-slate-300 hover:text-red-600 hover:bg-red-50 transition-colors font-medium text-sm"
                          >
                            {dropdownItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => { navigate(item.path); setIsMenuOpen(false); }}
                      className="block w-full text-left px-3 py-3 text-white hover:text-red-700 hover:bg-red-50 transition-colors font-medium text-sm tracking-wide uppercase"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              <div className="pt-2 mt-4 border-t border-red-200">
                <button
                  onClick={() => { navigate('/bookstore'); setIsMenuOpen(false); }}
                  className="flex bg-slate-200 text-red-800 px-6 py-2 hover:bg-slate-50 transition-colors font-medium text-sm tracking-wide items-center"
                >
                  <ShoppingCart className="ml-1 w-4 h-4" /> <span>Bookstore</span>
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