import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TradeGlobe from '../components/three/TradeGlobe';
// Import other components as built

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AgriConnect - Premier Agri Commodity Broker | Ahmedabad, Gujarat</title>
        <meta name="description" content="Leading agri commodity broker in Ahmedabad connecting suppliers of spices, pulses, oil seeds with verified exporters. Trusted brokerage with market intelligence." />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center h-full pt-20">
          {/* Left Text */}
          <div className="space-y-8">
            <div className="uppercase tracking-[4px] text-sm font-medium text-brand-primary">INDIA'S PREMIER AGRI COMMODITY BROKERAGE</div>
            
            <h1 className="display-xl text-text-primary leading-none">
              Where Harvests<br />Meet Markets.
            </h1>
            
            <p className="text-xl text-text-secondary max-w-lg">
              Ahmedabad-based brokerage specialising in connecting India's finest suppliers of spices, pulses, and oil seeds with verified exporters. Deep market knowledge meets unwavering trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/for-suppliers" 
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-medium rounded-full hover:bg-brand-primary-dark transition-all group"
              >
                I'm a Supplier <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </Link>
              <Link 
                to="/for-exporters" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-text-primary text-text-primary font-medium rounded-full hover:bg-text-primary hover:text-white transition-all"
              >
                I'm an Exporter
              </Link>
            </div>
          </div>

          {/* 3D Globe */}
          <div className="relative h-[600px] md:h-auto flex items-center justify-center">
            <TradeGlobe />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-xs tracking-widest flex flex-col items-center opacity-60">
          SCROLL TO EXPLORE
          <div className="w-px h-12 bg-text-primary mt-2"></div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#1A1A1A] py-8 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0">
          {[
            { number: '500+', label: 'Supplier Relationships' },
            { number: '12+', label: 'Years of Experience' },
            { number: '₹150Cr+', label: 'Trade Volume Facilitated' },
            { number: '8', label: 'Commodity Categories' },
            { number: '22', label: 'States Reached' },
          ].map((stat, index) => (
            <div key={index} className="text-center md:border-r border-white/20 last:border-0">
              <div className="text-5xl font-bold text-brand-primary tabular-nums" data-count={stat.number.replace(/[^0-9]/g, '')}>{stat.number}</div>
              <div className="text-xs uppercase tracking-widest text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* More sections to be added */}
      <div className="py-24 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">The Broker Advantage</h2>
          <p className="max-w-2xl mx-auto text-xl text-text-secondary">Bringing structure, intelligence, and integrity to India's agri commodity trade.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
