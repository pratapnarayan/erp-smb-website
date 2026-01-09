import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import FounderTrustSection from './components/FounderTrustSection';
import IndustryCards from './components/IndustryCards';
import FeaturePreview from './components/FeaturePreview';
import ScreenshotCarousel from './components/ScreenshotCarousel';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="main-content flex-1">
        <HeroSection />
        <TrustSection />
        <FounderTrustSection />
        <IndustryCards />
        <ScreenshotCarousel />
        <FeaturePreview />
        <CTASection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;