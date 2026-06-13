import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | Mahalaxmi Agri Commodities</title>
        <meta name="description" content="Terms of Use for Mahalaxmi Agri Commodities website. Legal terms governing your use of our services." />
        <link rel="canonical" href="https://mahalaxmiagri.com/legal/terms" />
      </Helmet>

      <section className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-1 text-text-primary mb-8">Terms of Use</h1>
          <p className="text-text-muted text-sm mb-8">Last updated: June 13, 2025</p>

          <div className="space-y-8">
            <div>
              <h2 className="heading-3 text-text-primary mb-3">1. Acceptance of Terms</h2>
              <p className="body text-text-secondary">
                By accessing and using this website, you accept and agree to be bound by the terms and 
                provisions of this agreement. If you do not agree to these terms, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">2. Description of Service</h2>
              <p className="body text-text-secondary">
                Mahalaxmi Agri Commodities operates as an independent commodity broker connecting agricultural 
                product suppliers with buyers (exporters). We do not hold, trade, or warehouse any commodities. 
                All transactions are facilitated between independent third parties.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">3. No Financial or Investment Advice</h2>
              <p className="body text-text-secondary">
                The information provided on this website, including commodity prices, market intelligence, 
                and trade commentary, is for informational purposes only. It does not constitute financial, 
                investment, or trading advice. You should conduct your own due diligence before making any 
                business decisions.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">4. Brokerage Services</h2>
              <p className="body text-text-secondary mb-3">
                Our brokerage services are subject to separate written agreements between Mahalaxmi Agri 
                Commodities and the respective parties. Key terms include:
              </p>
              <ul className="list-disc list-inside space-y-2 body text-text-secondary">
                <li>Brokerage fees range from 0.5% to 1% of transaction value</li>
                <li>Fees are disclosed and agreed upon before any introduction</li>
                <li>No fee is charged if a deal does not close</li>
                <li>We do not guarantee the quality, quantity, or delivery of any commodity</li>
                <li>All parties are responsible for their own compliance with applicable laws</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">5. Intellectual Property</h2>
              <p className="body text-text-secondary">
                All content on this website, including text, graphics, logos, images, and software, is the 
                property of Mahalaxmi Agri Commodities and is protected by Indian and international copyright 
                laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">6. Limitation of Liability</h2>
              <p className="body text-text-secondary">
                Mahalaxmi Agri Commodities shall not be liable for any direct, indirect, incidental, special, 
                or consequential damages arising from the use of our website or services. This includes but 
                is not limited to losses from commodity price fluctuations, quality disputes, or delivery failures 
                between transacting parties.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">7. Governing Law</h2>
              <p className="body text-text-secondary">
                These Terms of Use shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the 
                courts in Rajkot, Gujarat.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">8. Changes to Terms</h2>
              <p className="body text-text-secondary">
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting to this website. Your continued use of the website constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="heading-3 text-text-primary mb-3">9. Contact Information</h2>
              <p className="body text-text-secondary">
                For questions about these Terms of Use, please contact us at info@mahalaxmiagri.com 
                or +91 98765 43210.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
