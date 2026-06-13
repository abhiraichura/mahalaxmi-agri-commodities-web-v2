import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm font-barlow-condensed">MA</span>
              </div>
              <span className="font-barlow font-bold text-lg">Mahalaxmi Agri</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Rajkot-based Agri Commodity Broker. Connecting India's finest suppliers with export-grade buyers since 2002.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-barlow font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'For Suppliers', path: '/for-suppliers' },
                { label: 'For Exporters', path: '/for-exporters' },
                { label: 'Market Intel', path: '/market-intel' },
                { label: 'Connect', path: '/connect' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-brand-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commodities */}
          <div>
            <h4 className="font-barlow font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">Commodities</h4>
            <ul className="space-y-2">
              {['Spices', 'Pulses', 'Oil Seeds', 'Grains'].map((item) => (
                <li key={item}>
                  <Link to={`/commodities?category=${item}`} className="text-white/70 hover:text-brand-primary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-barlow font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Phone size={14} className="text-brand-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail size={14} className="text-brand-primary" />
                <span>info@mahalaxmiagri.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <MessageCircle size={14} className="text-brand-primary" />
                <span>WhatsApp Available</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <MessageCircle size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Mail size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-xs text-center md:text-left">
              © 2025 Mahalaxmi Agri Commodities. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-white/50">
              <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/legal/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
          <p className="text-white/30 text-xs mt-4 text-center md:text-left max-w-3xl">
            Disclaimer: This website is for informational and business development purposes only. Mahalaxmi Agri Commodities is an independent commodity broker and does not hold, trade, or warehouse agricultural commodities. Brokerage fees are agreed separately per transaction.
          </p>
        </div>
      </div>
    </footer>
  );
}
