import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import ContactHero from './components/ContactHero';
import ContactMethodCard from './components/ContactMethodCard';
import ContactForm from './components/ContactForm';
import OfficeLocation from './components/OfficeLocation';
import QuickLinks from './components/QuickLinks';
import FAQSection from './components/FAQSection';

const Contact = () => {
  const contactMethods = [
    {
      icon: "MessageSquare",
      title: "WhatsApp Business",
      description: "Get instant support through WhatsApp - the fastest way to reach us",
      actionLabel: "Chat on WhatsApp",
      action: () => window.open('https://wa.me/911234567890', '_blank'),
      details: [
        "Instant response during business hours",
        "Share screenshots and documents easily",
        "Track conversation history"
      ],
      available: "Available 24/7"
    },
    {
      icon: "Phone",
      title: "Phone Support",
      description: "Speak directly with our support team for immediate assistance",
      actionLabel: "Call Now",
      action: () => window.location.href = 'tel:+911244567890',
      details: [
        "Direct connection to support team",
        "Technical troubleshooting",
        "Sales inquiries welcome"
      ],
      available: "Mon-Fri: 9 AM - 6 PM IST"
    },
    {
      icon: "Mail",
      title: "Email Support",
      description: "Send detailed queries and receive comprehensive responses",
      actionLabel: "Send Email",
      action: () => window.location.href = 'mailto:support@erp-smb.com',
      details: [
        "Detailed technical queries",
        "Attach documents and screenshots",
        "Response within 2 business hours"
      ],
      available: "Response within 2 hours"
    },
    {
      icon: "MessageCircle",
      title: "Live Chat",
      description: "Chat with our team in real-time for quick questions",
      actionLabel: "Start Chat",
      action: () => {
        alert('Live chat feature will be available soon. Please use WhatsApp for instant support.');
      },
      details: [
        "Real-time conversation",
        "Quick answers to common questions",
        "No account required"
      ],
      available: "Mon-Sat: 9 AM - 6 PM IST"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - ERP-SMB | Get Support & Schedule Demo</title>
        <meta 
          name="description" 
          content="Contact ERP-SMB for support, sales inquiries, or demo scheduling. Multiple channels including WhatsApp, phone, email. Response within 2 hours. Founder-led support for Indian SMBs." 
        />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 main-content">
          <ContactHero />
          
          <section className="py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Choose Your Preferred Contact Method
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  We offer multiple ways to connect with us. Select the method that works best for you.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
                {contactMethods?.map((method, index) => (
                  <ContactMethodCard key={index} {...method} />
                ))}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                <ContactForm />
                <OfficeLocation />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                <div className="lg:col-span-2">
                  <FAQSection />
                </div>
                <div>
                  <QuickLinks />
                </div>
              </div>
            </div>
          </section>
          
          <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Join hundreds of Indian SMBs who have already made the switch to ERP-SMB. Schedule a personalized demo today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => window.location.href = '/demo-request'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto"
                >
                  Schedule Demo
                  <span className="text-lg">→</span>
                </button>
                <button
                  onClick={() => window.location.href = '/pricing'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-md font-medium hover:bg-muted transition-colors w-full sm:w-auto"
                >
                  View Pricing
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;