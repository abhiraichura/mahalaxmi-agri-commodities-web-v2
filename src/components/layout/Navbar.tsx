import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/commodities', label: 'Commodities' },
    { path: '/how-it-works', label: 'How it Works' },
    { path: '/market-intel', label: 'Market Intel' },
    { path: '/connect', label: 'Connect' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl">AC</div>
          <div>
            <div className="font-bold text-xl tracking-tight">AgriConnect</div>
            <div className="text-xs text-text-muted -mt-1">AHMEDABAD</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-brand-primary transition-colors ${location.pathname === link.path ? 'text-brand-primary' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/for-suppliers" 
            className="px-5 py-2 text-sm border border-text-primary hover:bg-text-primary hover:text-white transition-colors rounded-full"
          >
            For Suppliers
          </Link>
          <Link 
            to="/connect" 
            className="px-6 py-2.5 bg-brand-primary text-white text-sm font-medium rounded-full hover:bg-brand-primary-dark transition-colors"
          >
            Connect With Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-6">
          <div className="flex flex-col space-y-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="py-2 border-b border-border-light"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
              <Link to="/for-suppliers" onClick={() => setIsOpen(false)} className="py-3 text-center border">For Suppliers</Link>
              <Link to="/connect" onClick={() => setIsOpen(false)} className="py-3 text-center bg-brand-primary text-white rounded-full">Connect</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
