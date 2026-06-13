import { Helmet } from 'react-helmet-async';

interface SchemaInjectorProps {
  type: 'organization' | 'faq' | 'localBusiness';
  data?: Record<string, unknown>;
}

export default function SchemaInjector({ type, data }: SchemaInjectorProps) {
  const schemas: Record<string, object> = {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Mahalaxmi Agri Commodities',
      description: 'Agricultural commodity broker based in Rajkot, Gujarat, India. Specializing in spices, pulses, oil seeds, and cotton.',
      url: 'https://mahalaxmiagri.com',
      logo: 'https://mahalaxmiagri.com/logo.png',
      sameAs: [],
      knowsAbout: ['Cumin', 'Coriander', 'Turmeric', 'Sesame Seeds', 'Groundnut', 'Castor', 'Toor Dal', 'Chana', 'Commodity Brokerage', 'Agricultural Trade India'],
      ...data,
    },
    localBusiness: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Mahalaxmi Agri Commodities',
      description: 'Agricultural commodity broker based in Rajkot, Gujarat, India.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rajkot',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
      telephone: '+91-98765-43210',
      email: 'info@mahalaxmiagri.com',
      url: 'https://mahalaxmiagri.com',
      ...data,
    },
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an agri commodity broker?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An agri commodity broker is a professional intermediary who connects agricultural product suppliers with buyers (such as exporters or processors), facilitating transactions without taking ownership of the commodity. The broker earns a commission on successful deal closure.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a commodity broker charge in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Commodity brokerage fees in India typically range from 0.5% to 1% of transaction value, split between buyer and seller. The exact rate depends on transaction size, commodity type, and negotiation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What commodities do you broker in Gujarat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We broker cumin (jeera), coriander, turmeric, fenugreek, sesame seeds, groundnut, castor oil seeds, mustard, toor dal, chana, fennel, nigella, and cotton — sourced primarily from Gujarat, Rajasthan, and Madhya Pradesh.',
          },
        },
      ],
      ...data,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemas[type])}
      </script>
    </Helmet>
  );
}
