import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, FlaskConical, TrendingUp, FileCheck, Users, ArrowRight } from 'lucide-react';
import ExporterForm from '../components/features/ExporterForm';

const benefits = [
  {
    icon: Search,
    title: 'Supply Discovery',
    description: 'Tell us your commodity, quantity, grade, delivery timeline, and budget. We identify 2–3 best-fit suppliers within 48 hours. Not a directory. A curated introduction.',
  },
  {
    icon: FlaskConical,
    title: 'Pre-Shipment Quality Assurance',
    description: 'Before recommending a supplier, we confirm sample testing results, storage conditions, and loading capacity. We flag risk factors to you before commitment, not after.',
  },
  {
    icon: TrendingUp,
    title: 'Price Intelligence',
    description: 'We share live APMC mandi rates, NCDEX futures prices, and our proprietary price tracking for commodities you source regularly. You negotiate from a position of knowledge.',
  },
  {
    icon: FileCheck,
    title: 'Documentation Facilitation',
    description: 'We coordinate all required export documentation: Certificate of Origin, Phytosanitary Certificate (through APEDA-empanelled agencies), fumigation certificates, and grade certificates.',
  },
  {
    icon: Users,
    title: 'Supplier Relationship Management',
    description: 'Regular sourcing relationships benefit from our ongoing supplier management. We pre-position supply for your next order, give you seasonal advance notice, and coordinate multiple supplier pickups into consolidated consignments.',
  },
];

export default function ForExporters() {
  return (
    <>
      <Helmet>
        <title>For Exporters | Mahalaxmi Agri Commodities — Verified Supply</title>
        <meta name="description" content="Source verified agri commodities from pre-vetted suppliers. Cumin, coriander, turmeric, sesame, groundnut, castor, and more. Submit your sourcing requirement." />
        <link rel="canonical" href="https://mahalaxmiagri.com/for-exporters" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="caption text-brand-primary mb-4">For Exporters</p>
          <h1 className="display-l text-text-primary mb-6">
            Verified supply.<br />
            No sourcing surprises.
          </h1>
          <Link
            to="#inquiry"
            className="inline-flex items-center px-6 py-3 bg-brand-primary text-white font-semibold rounded-md hover:bg-brand-primary-dark transition-colors gap-2"
          >
            Submit a Sourcing Requirement <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2 text-text-primary mb-6">Why Exporters Choose a Broker Over Direct Sourcing.</h2>
          <p className="body-large text-text-secondary mb-6">
            India's agri commodity supply chain is fragmented across hundreds of districts, 
            thousands of farms and aggregators, and dozens of quality grades for every 
            commodity. An exporter sourcing direct faces:
          </p>
          <div className="space-y-4">
            {[
              'Inconsistent quality from new suppliers with no track record',
              'Inability to verify storage conditions, moisture content, and admixture without field presence',
              'Price opacity — without real-time mandi intelligence, you may be overpaying or missing better supply',
              'Operational overhead of managing multiple supplier relationships across geographies',
              'No structured dispute resolution when quality issues arise at port',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 bg-bg-warm rounded-lg"
              >
                <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                <p className="body text-text-secondary">{item}</p>
              </motion.div>
            ))}
          </div>
          <p className="body-large text-text-secondary mt-6">
            We eliminate all of these — one relationship, trusted supply.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2 text-text-primary text-center mb-12">What We Do for Exporters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand-primary-light rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-brand-primary" size={24} />
                  </div>
                  <h3 className="heading-3 text-text-primary mb-2">0{i + 1} — {benefit.title}</h3>
                  <p className="body text-text-secondary text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-text-primary mb-3">Submit Sourcing Requirement</h2>
            <p className="body-large text-text-secondary">Tell us what you need. We respond within 48 hours.</p>
          </div>
          <ExporterForm />
        </div>
      </section>
    </>
  );
}
