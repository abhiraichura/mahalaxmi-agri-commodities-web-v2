import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Commodities from './pages/Commodities';
import ForSuppliers from './pages/ForSuppliers';
import ForExporters from './pages/ForExporters';
import MarketIntel from './pages/MarketIntel';
import CommodityTracker from './pages/CommodityTracker';
import Connect from './pages/Connect';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
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
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
