import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import WhatsAppButton from './components/layout/WhatsAppButton';
import { useLenis } from './hooks/useLenis';

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
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#DE2A72" />
      </Helmet>

      <CustomCursor />
      <Navbar />

      <main
        className={`transition-opacity duration-300 ease-in-out ${
          transitionStage === 'fadeOut' ? 'opacity-0' : 'opacity-100'
        }`}
        onTransitionEnd={() => {
          if (transitionStage === 'fadeOut') {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;

            requestAnimationFrame(() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            });

            setDisplayLocation(location);

            setTimeout(() => {
              setTransitionStage('fadeIn');
            }, 10);
          }
        }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={displayLocation}>
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
