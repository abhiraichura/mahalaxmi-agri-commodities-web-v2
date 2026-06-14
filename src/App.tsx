import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import WhatsAppButton from './components/layout/WhatsAppButton';
import { useLenis } from './hooks/useLenis';
import { Suspense, lazy, useEffect } from 'react'; // Added useEffect
import { Routes, Route, useLocation } from 'react-router-dom'; // Added useLocation
// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Commodities = lazy(() => import('./pages/Commodities'));
const ForSuppliers = lazy(() => import('./pages/ForSuppliers'));
const ForExporters = lazy(() => import('./pages/ForExporters'));
const MarketIntel = lazy(() => import('./pages/MarketIntel'));
const CommodityTracker = lazy(() => import('./pages/CommodityTracker'));
const Connect = lazy(() => import('./pages/Connect'));
const Privacy = lazy(() => import('./pages/legal/Privacy'));
const Terms = lazy(() => import('./pages/legal/Terms'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  useLenis();

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#DE2A72" />
      </Helmet>

      <CustomCursor />
      <Navbar />

      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/commodities" element={<Commodities />} />
            <Route path="/for-suppliers" element={<ForSuppliers />} />
            <Route path="/for-exporters" element={<ForExporters />} />
            <Route path="/market-intel" element={<MarketIntel />} />
            <Route path="/commodity-tracker" element={<CommodityTracker />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/terms" element={<Terms />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
