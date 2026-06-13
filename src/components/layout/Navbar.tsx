import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Commodities', path: '/commodities' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'For Suppliers', path: '/for-suppliers' },
  { label: 'For Exporters', path: '/for-exporters' },
  { label: 'Market Intel', path: '/market-intel' },
  { label: 'Tracker', path: '/commodity-tracker' },
  { label: 'Connect', path: '/connect' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm font-barlow-condensed">MA</span>
              </div>
              <span className="font-barlow font-bold text-lg text-text-primary hidden sm:block">
                Mahalaxmi Agri
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    location.pathname === link.path
                      ? 'text-brand-primary bg-brand-primary-light'
                      : 'text-text-secondary hover:text-brand-primary hover:bg-bg-warm'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                to="/connect"
                className="inline-flex items-center px-5 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-md hover:bg-brand-primary-dark transition-colors duration-200"
              >
                Connect With Us
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-primary"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-text-primary lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-white text-2xl font-semibold hover:text-brand-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
              >
                <Link
                  to="/connect"
                  className="mt-4 inline-flex items-center px-6 py-3 bg-brand-primary text-white text-lg font-semibold rounded-md"
                >
                  Connect With Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
