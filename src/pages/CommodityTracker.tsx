import { Helmet } from 'react-helmet-async';
import { AlertTriangle } from 'lucide-react';
import CommodityTrackerComponent from '../components/features/CommodityTracker';

export default function CommodityTracker() {
  return (
    <>
      <Helmet>
        <title>Commodity Tracker | Mahalaxmi Agri Commodities — Price Reference</title>
        <meta name="description" content="Reference price data for key agri commodities sourced from APMC mandis and market reports. Updated twice weekly by our team." />
        <link rel="canonical" href="https://mahalaxmiagri.com/commodity-tracker" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="caption text-brand-primary mb-4">Commodity Tracker</p>
          <h1 className="display-l text-text-primary mb-6">
            Know the market.<br />
            Know your price.
          </h1>
          <p className="body-large text-text-secondary">
            Reference price data for key agri commodities sourced from APMC mandis, 
            industry contacts, and market reports. Updated twice weekly by our team.
          </p>
        </div>
      </section>

      {/* Tracker Table */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CommodityTrackerComponent />

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-lg flex gap-4">
            <AlertTriangle className="text-amber-500 flex-shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">Disclaimer</h4>
              <p className="text-sm text-amber-700">
                Prices shown are indicative reference figures compiled from market contacts and publicly available sources. 
                They do not constitute trading advice or binding price offers. Verify all prices with the 
                relevant APMC or exchange before transacting. Mahalaxmi Agri Commodities accepts no 
                liability for decisions made on the basis of this data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
