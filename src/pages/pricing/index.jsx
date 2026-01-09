import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PricingCard from './components/PricingCard';
import BillingToggle from './components/BillingToggle';
import ComparisonTable from './components/ComparisonTable';
import ROICalculator from './components/ROICalculator';
import FAQSection from './components/FAQSection';
import TrustBadges from './components/TrustBadges';

const Pricing = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('annual');

  const pricingData = [
    {
      tier: "Starter",
      price: {
        monthly: 999,
        annual: 9588
      },
      period: "month",
      description: "Perfect for small businesses starting their digital journey",
      bestFor: "Small teams replacing Excel",
      features: [
        { text: "Up to 3 user accounts", included: true },
        { text: "Basic inventory management", included: true },
        { text: "Sales & purchase orders", included: true },
        { text: "Customer & supplier management", included: true },
        { text: "Basic reporting & analytics", included: true },
        { text: "Email support", included: true },
        { text: "GST-compliant invoicing", included: true },
        { text: "Mobile app access", included: true },
        { text: "Multi-location support", included: false },
        { text: "Advanced analytics", included: false },
        { text: "API access", included: false },
        { text: "Dedicated account manager", included: false }],

      isPopular: false,
      ctaText: "Get My Free ERP Demo",
      ctaVariant: "outline"
    },
    {
      tier: "Growth",
      price: {
        monthly: 1999,
        annual: 19188
      },
      period: "month",
      description: "Ideal for growing businesses with expanding operations",
      bestFor: "Traders and distributors managing inventory and credit sales",
      features: [
        { text: "Up to 10 user accounts", included: true },
        { text: "Advanced inventory management", included: true },
        { text: "Multi-location support (up to 3)", included: true },
        { text: "Sales & purchase orders", included: true },
        { text: "Customer & supplier management", included: true },
        { text: "Advanced reporting & analytics", included: true },
        { text: "Custom workflows", included: true },
        { text: "Priority email & phone support", included: true },
        { text: "GST-compliant invoicing", included: true },
        { text: "WhatsApp Business integration", included: true },
        { text: "Bulk operations", included: true },
        { text: "Data export capabilities", included: true },
        { text: "API access", included: false },
        { text: "Dedicated account manager", included: false }],

      isPopular: true,
      ctaText: "Get My Free ERP Demo",
      ctaVariant: "default"
    },
    {
      tier: "Custom",
      price: {
        monthly: null,
        annual: null
      },
      period: "custom",
      description: "Complete solution for established businesses with complex needs",
      bestFor: "Multi-location businesses and custom workflows",
      features: [
        { text: "Unlimited user accounts", included: true },
        { text: "Enterprise inventory management", included: true },
        { text: "Unlimited multi-location support", included: true },
        { text: "Advanced sales & purchase workflows", included: true },
        { text: "CRM & supplier management", included: true },
        { text: "Custom analytics & dashboards", included: true },
        { text: "Custom workflows & automation", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Full API access", included: true },
        { text: "Custom integrations", included: true },
        { text: "White-glove onboarding", included: true },
        { text: "Custom training sessions", included: true },
        { text: "SLA guarantee", included: true }],

      isPopular: false,
      ctaText: "Talk to Us",
      ctaVariant: "outline"
    }];


  const handleCtaClick = (tier) => {
    if (tier === "Enterprise") {
      navigate('/contact');
    } else {
      navigate('/demo-request');
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Transparent Plans for Indian SMBs | ERP-SMB</title>
        <meta name="description" content="Simple, transparent pricing for Indian SMBs. Choose from Starter, Growth, or Enterprise plans. All plans include GST-compliant invoicing, mobile access, and expert support. Start your free trial today." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="main-content flex-1">
          <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Icon name="Tag" size={16} />
                  Transparent Pricing
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Simple Pricing for Growing Businesses
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Choose the plan that fits your business size and needs. All plans include GST-compliant invoicing,
                  mobile access, and our commitment to your success.
                </p>
              </div>

              <BillingToggle billingCycle={billingCycle} onToggle={setBillingCycle} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                {pricingData?.map((plan) =>
                  <PricingCard
                    key={plan?.tier}
                    {...plan}
                    billingCycle={billingCycle}
                    onCtaClick={() => handleCtaClick(plan?.tier)} />

                )}
              </div>

              <div className="text-center mb-10 p-6 bg-muted/50 rounded-xl border border-border">
                <p className="text-sm md:text-base text-muted-foreground mb-2">
                  <Icon name="Info" size={18} className="inline mr-2" />
                  <strong>ERP-SMB is best suited for inventory-driven businesses with 5–50 employees.</strong>
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Final pricing depends on number of users, selected modules, and business complexity.
                </p>
              </div>

              <TrustBadges />
            </div>
          </section>

          <section className="py-12 md:py-16 bg-muted/30 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Calculate Your Potential Savings
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  See how much time and money you could save by switching to ERP-SMB
                </p>
              </div>

              <ROICalculator />
            </div>
          </section>

          <section className="py-12 md:py-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Detailed Feature Comparison
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Compare all features across our pricing tiers to find the perfect fit
                </p>
              </div>

              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <ComparisonTable pricingData={pricingData} />
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  Everything you need to know about our pricing and plans
                </p>
              </div>

              <FAQSection />
            </div>
          </section>

          <section className="py-12 md:py-16 lg:py-20 bg-primary/5 px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="Sparkles" size={32} color="var(--color-primary)" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start your 14-day free trial today with full access to all Growth plan features. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => navigate('/demo-request')}>

                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => navigate('/contact')}>

                  Talk to Sales
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Questions? Our team is here to help. <button onClick={() => navigate('/contact')} className="text-primary hover:underline">Contact us</button>
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>);

};

export default Pricing;