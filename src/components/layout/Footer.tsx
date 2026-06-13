import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl">AC</div>
            <div className="text-2xl font-bold tracking-tight">AgriConnect</div>
          </div>
          <p className="text-text-muted text-sm max-w-xs">
            Ahmedabad-based premier agri commodity brokerage connecting Gujarat's suppliers with India's leading exporters.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-text-muted hover:text-white"><Linkedin size={20} /></a>
            <a href="#" className="text-text-muted hover:text-white"><MessageCircle size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-brand-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-primary">About Us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-brand-primary">How It Works</Link></li>
            <li><Link to="/market-intel" className="hover:text-brand-primary">Market Intelligence</Link></li>
            <li><Link to="/connect" className="hover:text-brand-primary">Connect</Link></li>
          </ul>
        </div>

        {/* Commodities */}
        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase">Commodities</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/commodities" className="hover:text-brand-primary">Spices</Link></li>
            <li><Link to="/commodities" className="hover:text-brand-primary">Pulses</Link></li>
            <li><Link to="/commodities" className="hover:text-brand-primary">Oil Seeds</Link></li>
            <li><Link to="/commodities" className="hover:text-brand-primary">Grains</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase">Contact</h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 flex-shrink-0" />
              <div>+91 98765 43210</div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 flex-shrink-0" />
              <div>info@agriconnect.in</div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 flex-shrink-0" />
              <div>Ahmedabad, Gujarat</div>
            </div>
          </div>
          <a href="https://wa.me/919876543210" target="_blank" className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-sm font-medium">
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-8 max-w-7xl mx-auto px-6 text-xs text-text-muted flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© 2025 AgriConnect. All rights reserved.</div>
        <div className="flex gap-6">
          <Link to="/legal/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/legal/terms" className="hover:text-white">Terms of Service</Link>
        </div>
        <div className="text-center md:text-right">Independent Agri Commodity Broker • No inventory held</div>
      </div>
    </footer>
  );
};

export default Footer;
