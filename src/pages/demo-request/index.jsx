import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import DemoForm from './components/DemoForm';
import TrustIndicators from './components/TrustIndicators';
import RecentDemoBookings from './components/RecentDemoBookings';
import WhatsAppContact from './components/WhatsAppContact';
import FounderTestimonial from './components/FounderTestimonial';
import DemoExpectations from './components/DemoExpectations';

const DemoRequest = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (formData) => {
    setIsSubmitting(true);

    console.log('Demo Request Submitted:', formData);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Schedule Your Personalized Demo | ERP-SMB - Transform Your Business</title>
        <meta
          name="description"
          content="Book a personalized ERP demo tailored to your Indian SMB needs. Get founder-led consultation, see real-world examples, and discover how to transition from Excel/Tally seamlessly."
        />
        <meta name="keywords" content="ERP demo, business software demo, SMB ERP India, Excel to ERP migration, Tally alternative, personalized business consultation" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="main-content flex-1">
          <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                  <Icon name="Calendar" size={16} />
                  <span>Schedule Your Free Demo</span>
                </div>

                <h1 className="font-heading font-bold text-foreground text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                  See How ERP-SMB Transforms Your Business Operations
                </h1>

                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Get a personalized 45-minute demo tailored to your business type and challenges.
                  See real-world examples from your industry and get a clear migration roadmap from Excel/Tally.
                </p>
              </div>

              <TrustIndicators />
            </div>
          </section>

          <section className="py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                <div className="lg:col-span-2 space-y-6 md:space-y-8">
                  <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
                    <div className="mb-6 md:mb-8">
                      <h2 className="font-heading font-semibold text-foreground text-xl md:text-2xl mb-2">
                        Request Your Personalized Demo
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Fill in your details below and we'll schedule a demo at your preferred time.
                        Our team will contact you within 24 hours to confirm.
                      </p>
                    </div>

                    <DemoForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
                  </div>

                  <DemoExpectations />
                </div>

                <div className="space-y-6 md:space-y-8">
                  <WhatsAppContact />

                  <FounderTestimonial />

                  <RecentDemoBookings />

                  <div className="bg-gradient-to-br from-info/10 to-info/5 border border-info/20 rounded-lg p-4 md:p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-info/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Shield" size={20} color="var(--color-info)" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground text-sm md:text-base mb-1">
                          Your Data is Safe
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          We never share your information with third parties. Your demo request is completely confidential.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} color="var(--color-info)" />
                        <span className="text-xs md:text-sm text-foreground">Bank-grade encryption</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} color="var(--color-info)" />
                        <span className="text-xs md:text-sm text-foreground">ISO 27001 certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} color="var(--color-info)" />
                        <span className="text-xs md:text-sm text-foreground">GDPR compliant</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4 md:p-6">
                    <h3 className="font-heading font-semibold text-foreground text-sm md:text-base mb-4">
                      Frequently Asked Questions
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-foreground text-sm mb-1">
                          How long is the demo?
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          Typically 45-60 minutes, with dedicated Q&A time at the end.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium text-foreground text-sm mb-1">
                          Can I bring my team?
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          Absolutely! We encourage finance and operations team members to join.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium text-foreground text-sm mb-1">
                          Is there any cost?
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          No, the demo is completely free with no obligations.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium text-foreground text-sm mb-1">
                          What if I need to reschedule?
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          No problem! Just contact us and we'll find a new time that works for you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-12 md:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
              <Icon name="Users" size={48} color="var(--color-primary)" className="mx-auto mb-4 md:mb-6" />

              <h2 className="font-heading font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
                Get Personalized, Founder-Led Guidance
              </h2>

              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
                Every demo is personally conducted by our founders who understand the unique challenges
                of Indian trading and distribution businesses. Get tailored advice for your specific needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-3xl mx-auto">
                <div className="bg-card border border-border rounded-lg p-4 md:p-6">
                  <Icon name="Calendar" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                  <p className="text-sm md:text-base font-semibold text-foreground mb-1">45-Minute Demo</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Tailored to your business</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 md:p-6">
                  <Icon name="Users" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                  <p className="text-sm md:text-base font-semibold text-foreground mb-1">Founder-Led</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Personal consultation</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 md:p-6">
                  <Icon name="Shield" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                  <p className="text-sm md:text-base font-semibold text-foreground mb-1">No Pressure</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Zero obligation</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DemoRequest;