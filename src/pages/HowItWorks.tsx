import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserCheck, Link2, FlaskConical, Scale, FileText, Truck } from 'lucide-react';
import SchemaInjector from '../components/seo/SchemaInjector';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: UserCheck,
    title: 'Intake & Qualification',
    description: 'A supplier or exporter contacts us with a requirement. We conduct a structured intake: commodity type, quantity (MT), quality grade required, delivery timeline, price expectations, and destination port/location. No conversation proceeds without documented requirements. We qualify both sides before making any introduction.',
  },
  {
    icon: Link2,
    title: 'Market Matching',
    description: 'Using our active network of 500+ suppliers across Gujarat, Rajasthan, and Madhya Pradesh, and our exporter database of 120+ verified export houses, we identify the 2–3 best-matched counterparties. We do not flood both sides with contacts. We make curated, high-probability introductions.',
  },
  {
    icon: FlaskConical,
    title: 'Sample & Quality Review',
    description: 'Before price negotiation begins, physical samples move. We coordinate sample dispatch from supplier to exporter, and where needed, facilitate third-party lab testing (NABL-accredited labs for spice quality, moisture, and contamination testing). Quality alignment happens before price alignment.',
  },
  {
    icon: Scale,
    title: 'Price Discovery & Negotiation',
    description: 'We facilitate transparent price discovery by sharing real-time market rates from APMC Unjha, NCDEX commodity data, and our own market intelligence. We mediate between supplier minimum and exporter maximum with a focus on closing — not prolonging negotiation. Brokerage terms are discussed and agreed at this stage.',
  },
  {
    icon: FileText,
    title: 'Deal Structuring & Documentation',
    description: 'Once price is agreed, we assist in documenting the transaction: Purchase Order terms, payment schedule (advance, balance on loading), grade and moisture specifications, delivery point (ex-godown or FOR destination), and dispute resolution clause. We do not provide legal services, but we ensure no critical term is left undocumented.',
  },
  {
    icon: Truck,
    title: 'Delivery Monitoring & Post-Deal Support',
    description: 'Our role does not end at deal closure. We follow up on delivery schedules, flag delays to both parties, and remain available for 30 days post-delivery for quality dispute mediation. This post-deal support is what transforms a one-time transaction into a long-term relationship.',
  },
];

export default function HowItWorks() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !timelineRef.current) return;

    const items = timelineRef.current.querySelectorAll('.timeline-item');
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>How It Works | Mahalaxmi Agri Commodities — Brokerage Process</title>
        <meta name="description" content="Learn how Mahalaxmi Agri Commodities brokers deals between suppliers and exporters. 6-step process from intake to post-deal support." />
        <link rel="canonical" href="https://mahalaxmiagri.com/how-it-works" />
      </Helmet>
      <SchemaInjector type="faq" />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="caption text-brand-primary mb-4">The Process</p>
          <h1 className="display-l text-text-primary mb-6">
            How a Deal Gets Done.<br />
            From First Call to Final Invoice.
          </h1>
          <p className="body-large text-text-secondary">
            Agri commodity brokerage sounds simple. It is not. Every transaction 
            involves sourcing, quality verification, price negotiation, logistic 
            coordination, and documentation. Here is exactly how we operate.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={timelineRef} className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border-light md:-translate-x-px" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className={`timeline-item relative flex gap-8 mb-16 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-bg-warm rounded-xl p-6 md:p-8 ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="text-brand-primary font-barlow-condensed font-bold text-2xl">0{i + 1}</span>
                        <Icon className="text-brand-primary" size={24} />
                      </div>
                      <h3 className="heading-3 text-text-primary mb-3">{step.title}</h3>
                      <p className="body text-text-secondary">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-brand-primary rounded-full border-4 border-white shadow-md md:-translate-x-1/2 mt-6" />
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fee Transparency */}
      <section className="py-20 md:py-28 bg-bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2 text-text-primary mb-4 text-center">Our Brokerage Fee. Transparent. Fixed. Fair.</h2>
          <p className="body-large text-text-secondary mb-10 text-center max-w-2xl mx-auto">
            Our brokerage fee is typically 0.5% to 1% of the transaction value, 
            split between supplier and exporter (unless negotiated otherwise). 
            This fee is disclosed and agreed before any introduction is made.
          </p>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-text-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Transaction Value</th>
                  <th className="px-6 py-4 text-left font-semibold">Brokerage Rate</th>
                  <th className="px-6 py-4 text-left font-semibold">Who Pays</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                <tr>
                  <td className="px-6 py-4 text-text-primary font-medium">&lt; ₹10 Lakh</td>
                  <td className="px-6 py-4 text-brand-primary font-bold">1%</td>
                  <td className="px-6 py-4 text-text-secondary">Split 50:50</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-text-primary font-medium">₹10L – ₹1 Crore</td>
                  <td className="px-6 py-4 text-brand-primary font-bold">0.75%</td>
                  <td className="px-6 py-4 text-text-secondary">As negotiated</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-text-primary font-medium">&gt; ₹1 Crore</td>
                  <td className="px-6 py-4 text-brand-primary font-bold">0.5%</td>
                  <td className="px-6 py-4 text-text-secondary">As negotiated</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-text-muted text-sm mt-6">
            We earn zero if a deal does not close. Our incentive is identical to yours: completing the transaction.
          </p>
        </div>
      </section>
    </>
  );
}
