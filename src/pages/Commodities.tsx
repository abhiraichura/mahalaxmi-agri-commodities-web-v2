import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { commodities, categories } from '../data/commodities';
import CommodityCard from '../components/ui/CommodityCard';
import SchemaInjector from '../components/seo/SchemaInjector';

export default function Commodities() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && categories.includes(cat as typeof categories[number])) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filtered = activeCategory === 'All' 
    ? commodities 
    : commodities.filter(c => c.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Commodities We Trade | Mahalaxmi Agri Commodities</title>
        <meta name="description" content="Explore the spices, pulses, oil seeds, and grains we broker. Cumin, coriander, turmeric, sesame, groundnut, castor, toor dal, chana, and more." />
        <link rel="canonical" href="https://mahalaxmiagri.com/commodities" />
      </Helmet>
      <SchemaInjector type="organization" />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="caption text-brand-primary mb-4">What We Trade</p>
          <h1 className="display-l text-text-primary">
            Eight Categories.<br />
            Hundreds of Varieties.<br />
            One Broker.
          </h1>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeCategory === cat 
                    ? 'bg-brand-primary text-white shadow-md' 
                    : 'bg-bg-warm text-text-secondary hover:bg-brand-primary-light hover:text-brand-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((commodity, index) => (
                <motion.div
                  key={commodity.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <CommodityCard commodity={commodity} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">No commodities found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
