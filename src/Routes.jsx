import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Pricing from './pages/pricing';
import Contact from './pages/contact';
import ProductFeatures from './pages/product-features';
import DemoRequest from './pages/demo-request';
import Homepage from './pages/homepage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileStickyBar from './components/MobileStickyBar';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-features" element={<ProductFeatures />} />
          <Route path="/demo-request" element={<DemoRequest />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
        {/* Global conversion components */}
        <FloatingWhatsApp />
        <MobileStickyBar />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
