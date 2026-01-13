import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
    <>
      <Helmet>
        <title>Replace Excel & Tally with Cloud ERP for Indian SMBs | ERP-SMB</title>
        <meta
          name="description"
          content="GST-ready Cloud ERP for Indian SMBs. Replace Excel & Tally with powerful business automation. Manage Accounting, Inventory, Sales & GST. Free personalized demo."
        />
        <meta name="keywords" content="ERP for Indian SMBs, Tally alternative, Replace Excel with ERP, GST-ready ERP, Cloud ERP India, Business automation software" />
      </Helmet>
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
    </>
  );
};

export default Homepage;