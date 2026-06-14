import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
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

const AnimatedPage = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    <Suspense fallback={<PageLoader />}>
      {children}
    </Suspense>
  </motion.div>
);

export default function App() {
  useLenis();
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#DE2A72" />
      </Helmet>

      <CustomCursor />
      <Navbar />

      <main>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/how-it-works" element={<AnimatedPage><HowItWorks /></AnimatedPage>} />
            <Route path="/commodities" element={<AnimatedPage><Commodities /></AnimatedPage>} />
            <Route path="/for-suppliers" element={<AnimatedPage><ForSuppliers /></AnimatedPage>} />
            <Route path="/for-exporters" element={<AnimatedPage><ForExporters /></AnimatedPage>} />
            <Route path="/market-intel" element={<AnimatedPage><MarketIntel /></AnimatedPage>} />
            <Route path="/commodity-tracker" element={<AnimatedPage><CommodityTracker /></AnimatedPage>} />
            <Route path="/connect" element={<AnimatedPage><Connect /></AnimatedPage>} />
            <Route path="/legal/privacy" element={<AnimatedPage><Privacy /></AnimatedPage>} />
            <Route path="/legal/terms" element={<AnimatedPage><Terms /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
