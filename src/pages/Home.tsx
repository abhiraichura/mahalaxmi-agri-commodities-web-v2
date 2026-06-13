import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Network, ShieldCheck, Scale } from 'lucide-react';
import TradeGlobe from '../components/three/TradeGlobe';
import StatsBar from '../components/ui/StatsBar';
import MeridianLine from '../components/ui/MeridianLine';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import SchemaInjector from '../components/seo/SchemaInjector';
import { commodities } from '../data/commodities';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Hero text stagger animation
    if (heroRef.current) {
      const heroTexts = heroRef.current.querySelectorAll('.hero-animate');
      gsap.fromTo(
        heroTexts,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.3,
        }
      );
    }

    // Process flow animation
    if (processRef.current) {
      const processItems = processRef.current.querySelectorAll('.process-item');
      gsap.fromTo(
        processItems,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const featuredCommodities = commodities.slice(0, 8);

  return (
    <>
      <Helmet>
        <title>Mahalaxmi Agri Commodities | Agri Commodity Broker, Rajkot Gujarat</title>
        <meta name="description" content="Leading agri commodity broker based in Rajkot, Gujarat. We connect verified suppliers of spices, pulses, oil seeds and cotton with India's top exporters. 22+ years experience." />
        <meta name="keywords" content="agri commodity broker India, spice broker Gujarat, cumin broker Unjha, pulse broker India, oil seed exporter broker, sesame seeds broker, groundnut broker Saurashtra, agricultural broker Rajkot" />
        <link rel="canonical" href="https://mahalaxmiagri.com/" />
        <meta property="og:title" content="Mahalaxmi Agri Commodities — Agri Commodity Broker, Rajkot" />
        <meta property="og:description" content="Connecting India's agricultural suppliers with verified exporters. Spices, Pulses, Oil Seeds, Cotton." />
        <meta property="og:type" content="website" />
      </Helmet>
      <SchemaInjector type="organization" />
      <SchemaInjector type="localBusiness" />

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center bg-white pt-20 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Panel - Text */}
            <div className="order-2 lg:order-1">
              <p className="hero-animate caption text-brand-primary mb-4">India's Premier Agri Commodity Brokerage</p>
              <h1 className="hero-animate display-xl text-text-primary mb-6">
                Where Harvests<br />Meet Markets.
              </h1>
              <p className="hero-animate body-large text-text-secondary mb-8 max-w-lg">
                We are a Rajkot-based agri commodity brokerage firm specialising in 
                connecting India's finest suppliers of spices, pulses, and oil seeds with 
                verified exporters. Every transaction is backed by deep market knowledge, 
                decades of trade relationships, and an unwavering commitment to trust.
              </p>
              <div className="hero-animate flex flex-wrap gap-4">
                <Link
                  to="/for-suppliers"
                  className="inline-flex items-center px-6 py-3 bg-brand-primary text-white font-semibold rounded-md hover:bg-brand-primary-dark transition-colors gap-2"
                >
                  I'm a Supplier <ArrowRight size={18} />
                </Link>
                <Link
                  to="/for-exporters"
                  className="inline-flex items-center px-6 py-3 border-2 border-text-primary text-text-primary font-semibold rounded-md hover:bg-text-primary hover:text-white transition-colors gap-2"
                >
                  I'm an Exporter <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right Panel - 3D Globe */}
            <div className="order-1 lg:order-2 h-[400px] lg:h-[600px]">
              <TradeGlobe />
            </div>
          </div>
        </div>
      </section>

      {/* Meridian Line */}
      <MeridianLine />

      {/* Stats Bar */}
      <StatsBar />

      {/* Meridian Line */}
      <MeridianLine />

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Editorial Text */}
            <div>
              <h2 className="heading-2 text-text-primary mb-6">
                Agri Commodity Brokerage<br />Reimagined for Modern India.
              </h2>
              <p className="body-large text-text-secondary">
                India is the world's largest producer and exporter of spices, and among the 
                top five exporters of pulses and oil seeds globally. Yet the supply chain 
                connecting farmers and aggregators to export markets remains fragmented, 
                opaque, and driven by informal relationships.
              </p>
              <p className="body-large text-text-secondary mt-4">
                We exist to change that — bringing structure, intelligence, and integrity 
                to every transaction. As a Rajkot-based commodity broker, we serve as 
                the trusted intermediary between Gujarat's most productive agricultural 
                regions and India's leading export houses.
              </p>
              <p className="body-large text-text-secondary mt-4">
                Our brokerage model is simple: we earn only when both sides win. No inventory 
                risk. No markup. Pure alignment.
              </p>
            </div>

            {/* Right - Trust Pillars */}
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-brand-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h3 className="heading-3 text-text-primary mb-2">Verified Supplier Network</h3>
                  <p className="body text-text-secondary">
                    Every supplier in our network undergoes a quality and reliability audit. 
                    We don't list — we vet.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-brand-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h3 className="heading-3 text-text-primary mb-2">Exporter Intelligence</h3>
                  <p className="body text-text-secondary">
                    We understand what exporters need before they know they need it — specs, 
                    volumes, seasonality, certifications.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-brand-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h3 className="heading-3 text-text-primary mb-2">Conflict-Free Brokerage</h3>
                  <p className="body text-text-secondary">
                    Our fee comes at deal closure, from both parties transparently. 
                    Zero hidden charges. Zero hidden agendas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Commodities */}
      <section className="py-20 md:py-28 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="caption text-brand-primary mb-3">What We Broker</p>
            <h2 className="heading-2 text-text-primary">From Gujarat's Fields to the World's Tables.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCommodities.map((commodity, index) => (
              <motion.div
                key={commodity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-primary/20 to-brand-primary/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-20">🌾</span>
                  </div>
                  <div className="absolute bottom-3 left-3 z-20">
                    <span className="inline-block px-2 py-1 bg-brand-primary text-white text-xs font-medium rounded">
                      {commodity.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-barlow font-bold text-lg text-text-primary">{commodity.name}</h3>
                  <p className="text-text-muted text-sm mb-3">({commodity.localName})</p>
                  <p className="text-text-secondary text-sm line-clamp-2 mb-4">{commodity.stat}</p>
                  <Link
                    to={`/connect?commodity=${commodity.id}`}
                    className="text-brand-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Enquire <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/commodities"
              className="inline-flex items-center px-6 py-3 border-2 border-brand-primary text-brand-primary font-semibold rounded-md hover:bg-brand-primary hover:text-white transition-colors gap-2"
            >
              View All Commodities <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Meridian Line */}
      <MeridianLine />

      {/* Why Brokers Win */}
      <section className="py-20 md:py-28 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-text-primary mb-4">
              The Broker Advantage:<br />Why Smart Traders Work Through Us.
            </h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              In India's agri commodity trade, the difference between a profitable deal and 
              a failed one is rarely price. It's timing, trust, and the right introduction.
            </p>
          </div>

          <div ref={processRef} className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="process-item text-center p-8 bg-white rounded-xl">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-primary">01</span>
              </div>
              <h3 className="heading-3 text-text-primary mb-3">Supplier</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>Has commodity</li>
                <li>Needs price discovery</li>
                <li>Wants reliable buyers</li>
              </ul>
            </div>
            <div className="process-item text-center p-8 bg-brand-primary text-white rounded-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">02</span>
              </div>
              <h3 className="heading-3 mb-3">Broker</h3>
              <ul className="text-sm text-white/90 space-y-2">
                <li>Knows both sides</li>
                <li>Verifies quality</li>
                <li>Structures deal</li>
                <li>Facilitates payment</li>
              </ul>
            </div>
            <div className="process-item text-center p-8 bg-white rounded-xl">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-primary">03</span>
              </div>
              <h3 className="heading-3 text-text-primary mb-3">Exporter</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>Has demand</li>
                <li>Needs supply</li>
                <li>Needs reliability</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-block px-8 py-4 bg-text-primary text-white rounded-lg">
              <p className="font-semibold">DEAL CLOSES → Brokerage Earned → Both Parties Win</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Meridian Line */}
      <MeridianLine />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-2 text-white mb-4">Ready to trade smarter?</h2>
          <p className="body-large text-white/85 mb-8 max-w-2xl mx-auto">
            Whether you're a supplier looking for better prices or an exporter 
            sourcing verified quality — let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/connect"
              className="inline-flex items-center px-8 py-4 bg-white text-text-primary font-semibold rounded-md hover:bg-white/90 transition-colors gap-2"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
            <Link
              to="/commodities"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-text-primary transition-colors gap-2"
            >
              Explore Commodities <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
