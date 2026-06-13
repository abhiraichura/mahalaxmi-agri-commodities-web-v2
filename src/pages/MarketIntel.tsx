import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, BookOpen } from 'lucide-react';
import SeasonCalendar from '../components/features/SeasonCalendar';

const intelligenceNotes = [
  {
    commodity: 'Cumin',
    date: 'June 2025',
    headline: 'Jeera arrivals at Unjha surge 18% week-on-week',
    excerpt: 'Export inquiry from Bangladesh down. Price correction likely in Q3.',
  },
  {
    commodity: 'Sesame',
    date: 'June 2025',
    headline: 'Hulled sesame demand from Japanese buyers firming up',
    excerpt: 'Saurashtra crop estimates revised upward by 8%. Window to lock supply opening in July before price rises.',
  },
  {
    commodity: 'Groundnut',
    date: 'May 2025',
    headline: 'EU aflatoxin rejections hit 3-year high for Indian groundnut',
    excerpt: 'Exporters must enforce NABL lab testing protocol. Buyers are moving to certified-only supply.',
  },
  {
    commodity: 'Toor Dal',
    date: 'May 2025',
    headline: 'Mozambique and Myanmar import restrictions creating supply gap',
    excerpt: 'Indian toor dal export opportunity strongest since 2022.',
  },
  {
    commodity: 'Castor',
    date: 'April 2025',
    headline: 'China buying activity resuming post-Lunar New Year slowdown',
    excerpt: 'Spot prices at ₹5,800/quintal. Recommend gradual forward booking.',
  },
  {
    commodity: 'Coriander',
    date: 'April 2025',
    headline: 'Split coriander demand for oleoresin extraction exceeds whole seed demand',
    excerpt: 'Premium of ₹400/quintal over whole for first time this season.',
  },
];

const regulations = [
  {
    title: 'APEDA Registration Requirements for Exporters',
    content: 'All exporters of agricultural products from India must register with APEDA. Registration is mandatory for spices, pulses, oil seeds, and other scheduled products. The process involves submitting an online application with company details, bank information, and a fee of ₹5,900. Registration is valid for 5 years and must be renewed thereafter.',
  },
  {
    title: 'Phytosanitary Certificate — How to Obtain',
    content: 'Phytosanitary certificates are issued by the Plant Protection Adviser to the Government of India through regional offices. Exporters must submit an application through the PQIS portal along with treatment details, inspection reports, and a fee. Processing typically takes 3-5 working days.',
  },
  {
    title: 'EU MRL (Maximum Residue Limit) Compliance for Spices',
    content: 'The European Union maintains strict MRL standards for pesticide residues in spices. Key limits include: total aflatoxin ≤10 μg/kg for groundnuts, ochratoxin A ≤30 μg/kg for dried fruits. Exporters must ensure supplier compliance through pre-shipment testing at EU-recognized laboratories.',
  },
  {
    title: 'USA FDA Import Alerts on Indian Spices (2024 update)',
    content: 'The FDA maintains Import Alert 24-17 for surveillance of Indian spice shipments. Common detention reasons include salmonella contamination and filth. Exporters should implement HACCP-based controls and obtain third-party laboratory certificates to minimize detention risk.',
  },
  {
    title: 'Fumigation Requirements by Destination Country',
    content: 'Most importing countries require methyl bromide or phosphine fumigation for agricultural commodities. Australia and New Zealand require additional heat treatment for certain products. Fumigation must be performed by APEDA-empanelled agencies, and certificates must include batch numbers and treatment duration.',
  },
  {
    title: 'FSSAI Export Standards for Processed Spices',
    content: 'FSSAI regulates the safety and quality of food products exported from India. For spices, key parameters include moisture content, total ash, acid insoluble ash, and volatile oil content. Exporters must obtain an FSSAI license and comply with the Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011.',
  },
  {
    title: 'Organic Certification Bodies Recognised for EU Export',
    content: 'For organic exports to the EU, Indian suppliers must be certified by bodies recognized by the EU Commission. Approved bodies include APEDA (NPOP), Control Union, Ecocert India, and Lacon. The EU organic logo can only be used if the product contains at least 95% organic ingredients.',
  },
  {
    title: 'NCDEX Commodity Contracts — Delivery Specs Reference',
    content: 'NCDEX offers futures contracts for cumin, coriander, turmeric, guar seed, and other commodities. Delivery specifications include quality parameters, delivery centers (Unjha, Rajkot, Nizamabad), and tender period. Physical delivery is mandatory for all contracts unless squared off before expiry.',
  },
];

export default function MarketIntel() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Market Intelligence | Mahalaxmi Agri Commodities</title>
        <meta name="description" content="Bi-weekly market commentary, commodity season calendar, export regulation tracker, and sourcing recommendations from Rajkot's leading agri commodity broker." />
        <link rel="canonical" href="https://mahalaxmiagri.com/market-intel" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="caption text-brand-primary mb-4">Market Intelligence</p>
          <h1 className="display-l text-text-primary mb-6">
            The information edge<br />
            that closes deals faster.
          </h1>
          <p className="body-large text-text-secondary">
            Our market intelligence is not scraped from news aggregators. 
            It is compiled from daily mandi contacts, exporter conversations, 
            and 22+ years of pattern recognition. Published twice monthly.
          </p>
        </div>
      </section>

      {/* Latest Commentary */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <BookOpen className="text-brand-primary" size={24} />
            <h2 className="heading-2 text-text-primary">Latest Commentary</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intelligenceNotes.map((note, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-warm rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-brand-primary text-white text-xs font-medium rounded">{note.commodity}</span>
                  <span className="text-xs text-text-muted font-barlow-condensed uppercase tracking-wider">{note.date}</span>
                </div>
                <h3 className="font-barlow font-semibold text-text-primary mb-2">{note.headline}</h3>
                <p className="text-sm text-text-secondary">{note.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Season Calendar */}
      <section className="py-20 md:py-28 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Calendar className="text-brand-primary" size={24} />
            <h2 className="heading-2 text-text-primary">Commodity Season Calendar</h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <SeasonCalendar />
          </div>
        </div>
      </section>

      {/* Regulation Accordion */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2 text-text-primary mb-10">Export Regulation Quick Reference</h2>
          <div className="space-y-3">
            {regulations.map((reg, i) => (
              <div key={i} className="border border-border-light rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-bg-warm transition-colors"
                >
                  <span className="font-barlow font-semibold text-text-primary">{reg.title}</span>
                  <ChevronDown
                    size={20}
                    className={`text-text-muted transition-transform ${openAccordion === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openAccordion === i ? 'auto' : 0, opacity: openAccordion === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 text-sm text-text-secondary leading-relaxed">
                    {reg.content}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
