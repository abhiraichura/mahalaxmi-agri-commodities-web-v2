import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Package, Shield, FileCheck, BarChart3, ArrowRight } from 'lucide-react';
import SupplierForm from '../components/features/SupplierForm';
import SchemaInjector from '../components/seo/SchemaInjector';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Price Maximisation',
    description: 'We introduce your commodity to exporters who are actively seeking supply and have the capacity to pay a fair market price. We know which buyers are bullish and which are waiting. We time your introduction accordingly.',
  },
  {
    icon: Package,
    title: 'Quality Preparation',
    description: 'We advise on the quality grade and packaging requirements of specific export buyers before you dispatch a sample. This avoids rejection and wasted logistics costs.',
  },
  {
    icon: Shield,
    title: 'Payment Security',
    description: 'Every exporter in our network has a transaction history with us. We will not introduce you to buyers with poor payment track records.',
  },
  {
    icon: FileCheck,
    title: 'Documentation Support',
    description: 'We guide you on what documentation export buyers require — weight certificates, phytosanitary certificates, fumigation certificates — so you are not blindsided at the loading stage.',
  },
  {
    icon: BarChart3,
    title: 'Market Intelligence',
    description: 'We share price trends, seasonal demand shifts, and buyer preference updates with registered suppliers in our network at no charge.',
  },
];

export default function ForSuppliers() {
  return (
    <>
      <Helmet>
        <title>For Suppliers | Mahalaxmi Agri Commodities — Sell Your Crop</title>
        <meta name="description" content="Register as a supplier with Mahalaxmi Agri Commodities. Get better prices, verified buyers, payment security, and market intelligence." />
        <link rel="canonical" href="https://mahalaxmiagri.com/for-suppliers" />
      </Helmet>
      <SchemaInjector type="faq" />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="caption text-brand-primary mb-4">For Suppliers</p>
          <h1 className="display-l text-text-primary mb-6">
            Your crop deserves<br />
            the right buyer.<br />
            Not just the nearest one.
          </h1>
          <Link
            to="#register"
            className="inline-flex items-center px-6 py-3 bg-brand-primary text-white font-semibold rounded-md hover:bg-brand-primary-dark transition-colors gap-2"
          >
            Register as a Supplier <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2 text-text-primary mb-6">The Problem with Selling Direct.</h2>
          <div className="space-y-4">
            <p className="body-large text-text-secondary">
              Most agricultural suppliers in India face the same constraints:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Limited access to export-grade buyers who pay premium prices',
                'Dependence on local mandi prices, which may not reflect global demand',
                'Inability to negotiate from a position of information',
                'Risk of delayed payment from unknown buyers',
                'No recourse when quality disputes arise post-delivery',
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
              A commodity broker solves all of these — at a cost that is a fraction of 
              what you leave on the table by selling locally.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2 text-text-primary text-center mb-12">What We Do for Suppliers</h2>
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

      {/* Registration Form */}
      <section id="register" className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-text-primary mb-3">Supplier Registration</h2>
            <p className="body-large text-text-secondary">Join our verified supplier network. No fees to register.</p>
          </div>
          <SupplierForm />
        </div>
      </section>
    </>
  );
}
