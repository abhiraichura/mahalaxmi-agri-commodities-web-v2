import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SchemaInjector from '../components/seo/SchemaInjector';

export default function About() {
  const scrollRef = useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>About Us | Mahalaxmi Agri Commodities — Rajkot, Gujarat</title>
        <meta name="description" content="Learn about Mahalaxmi Agri Commodities, Rajkot's leading agri commodity broker. 22+ years connecting suppliers with exporters across India." />
        <link rel="canonical" href="https://mahalaxmiagri.com/about" />
      </Helmet>
      <SchemaInjector type="organization" />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-bg-warm to-bg-tinted pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="caption text-brand-primary mb-4">Our Story</p>
          <h1 className="display-l text-text-primary max-w-3xl">
            Built on Relationships.<br />Driven by Markets.
          </h1>
        </div>
      </section>

      {/* Manifesto */}
      <section ref={scrollRef} className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <h2 className="heading-2 text-text-primary mb-6">
              We are not traders. We are not agents.<br />
              We are the bridge India's agri trade needed.
            </h2>
            <p className="body-large text-text-secondary mb-6">
              The agri commodity brokerage business in India has historically been 
              dominated by informal networks — phone calls, word of mouth, and regional 
              contacts. While relationships remain the core of our work, we believe the 
              21st-century commodity broker must bring something more: verified data, 
              documented processes, and a professional standard that both suppliers 
              and exporters can depend on.
            </p>
            <p className="body-large text-text-secondary mb-6">
              Mahalaxmi Agri Commodities was founded with a singular conviction: that India's 
              agricultural abundance deserves a more sophisticated distribution mechanism. 
              Based in Rajkot — the commercial heart of Saurashtra, which accounts for 
              nearly 35% of India's spice and oil seed exports — we are positioned at the 
              epicentre of India's agri commodity trade.
            </p>
          </div>

          <div className="animate-on-scroll mt-12 p-8 bg-bg-warm rounded-xl">
            <h3 className="heading-3 text-text-primary mb-6">We operate on three principles:</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-brand-primary font-bold text-lg">1.</span>
                <p className="body text-text-secondary"><strong className="text-text-primary">Information Advantage</strong> — we are always better informed than either party</p>
              </div>
              <div className="flex gap-4">
                <span className="text-brand-primary font-bold text-lg">2.</span>
                <p className="body text-text-secondary"><strong className="text-text-primary">Conflict-Free Representation</strong> — we serve the transaction, not one side</p>
              </div>
              <div className="flex gap-4">
                <span className="text-brand-primary font-bold text-lg">3.</span>
                <p className="body text-text-secondary"><strong className="text-text-primary">Long-Term Relationships</strong> — every deal we broker is an investment in the next one</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 md:py-28 bg-text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2 text-white text-center mb-12">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '22+', label: 'Years in Agri Commodity Brokerage' },
              { value: '500+', label: 'Active Supplier Relationships' },
              { value: '120+', label: 'Exporter Accounts Served' },
              { value: '₹150Cr+', label: 'in Trade Facilitated' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="stat-number text-white">{stat.value}</p>
                <p className="text-white/60 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gujarat Advantage */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2 text-text-primary mb-6">Why Rajkot. Why Gujarat.</h2>
          <p className="body-large text-text-secondary mb-8">
            Gujarat is not merely a geography — it is the engine of India's agricultural 
            export economy. The state is home to:
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
              <p className="body text-text-secondary"><strong className="text-text-primary">APMC Unjha</strong> — the world's largest cumin and fennel market</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
              <p className="body text-text-secondary"><strong className="text-text-primary">Rajkot and Morbi</strong> — groundnut and sesame trading hubs</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
              <p className="body text-text-secondary"><strong className="text-text-primary">Bhavnagar</strong> — one of India's top castor oil seed producing districts</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
              <p className="body text-text-secondary"><strong className="text-text-primary">Kandla and Mundra Ports</strong> — two of India's busiest commodity export ports</p>
            </div>
          </div>
          <p className="body-large text-text-secondary">
            Our location in Rajkot places us within reach of every major mandi, 
            cooperative, and export cluster in Western India. We are not distant 
            intermediaries — we are embedded in the supply chain.
          </p>
        </div>
      </section>

      {/* APEDA Section */}
      <section className="py-20 md:py-28 bg-bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2 text-text-primary mb-6">Compliance, Certification, and Export Readiness</h2>
          <p className="body-large text-text-secondary mb-6">
            India's agricultural export ecosystem is governed by APEDA (Agricultural 
            and Processed Food Products Export Development Authority), FSSAI regulations, 
            and destination-country import standards. A commodity broker who does not 
            understand these frameworks cannot protect either side of the transaction.
          </p>
          <p className="body-large text-text-secondary mb-6">
            We maintain current knowledge of:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'APEDA registered exporter requirements',
              'Phytosanitary and fumigation certification norms',
              'EU, US, Middle East, and Southeast Asian import standards for Indian spices',
              'Quality grading benchmarks (moisture, admixture, colour value for spices)',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                <p className="body text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
          <p className="body-large text-text-secondary mt-6">
            This regulatory literacy makes us a more valuable counterpart to both 
            verified suppliers seeking export-grade buyers, and to exporters who cannot 
            afford compliance surprises at the port.
          </p>
        </div>
      </section>
    </>
  );
}
