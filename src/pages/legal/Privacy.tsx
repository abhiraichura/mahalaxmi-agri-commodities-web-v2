import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Mahalaxmi Agri Commodities</title>
        <meta name="description" content="Privacy Policy of Mahalaxmi Agri Commodities. How we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://mahalaxmiagri.com/legal/privacy" />
      </Helmet>

      <section className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-1 text-text-primary mb-8">Privacy Policy</h1>
          <p className="text-text-muted text-sm mb-8">Last updated: June 13, 2025</p>

          <div className="space-y-8">
            <div>
              <h2 className="heading-3 text-text-primary mb-3">1. Introduction</h2>
              <p className="body text-text-secondary">
                Mahalaxmi Agri Commodities ("we", "our", "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">2. Information We Collect</h2>
              <p className="body text-text-secondary mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 body text-text-secondary">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and business address.</li>
                <li><strong>Business Information:</strong> Commodity types, supply volumes, quality grades, and trading preferences.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and referring website.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">3. How We Use Your Information</h2>
              <p className="body text-text-secondary mb-3">We use the collected information for:</p>
              <ul className="list-disc list-inside space-y-2 body text-text-secondary">
                <li>Facilitating commodity brokerage services between suppliers and exporters</li>
                <li>Communicating with you about inquiries, deals, and market updates</li>
                <li>Improving our website and services</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Sending periodic emails and market intelligence (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">4. Information Sharing</h2>
              <p className="body text-text-secondary">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                information with trusted partners and service providers who assist us in operating our 
                website and conducting our business, provided they agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">5. Data Security</h2>
              <p className="body text-text-secondary">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">6. Your Rights</h2>
              <p className="body text-text-secondary mb-3">Under applicable data protection laws, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 body text-text-secondary">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">7. Contact Us</h2>
              <p className="body text-text-secondary">
                If you have any questions about this Privacy Policy, please contact us at 
                info@mahalaxmiagri.com or +91 98765 43210.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
