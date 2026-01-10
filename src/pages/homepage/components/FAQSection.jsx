import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How is ERP-SMB different from Excel or Tally?',
      answer: 'Unlike Excel spreadsheets that require manual updates and are prone to errors, ERP-SMB provides real-time data synchronization across your entire business. Compared to Tally, we offer modern cloud-based access, intuitive interface, and features specifically designed for growing SMBs like inventory alerts, customer management, and automated reporting.'
    },
    {
      question: 'How long does it take to migrate from Excel/Tally?',
      answer: 'Most businesses complete migration within 2-3 days with our guided process. We provide personal onboarding support, data import tools, and step-by-step migration guides. Our founder personally assists during the transition to ensure zero disruption to your operations.'
    },
    {
      question: 'Is my business data secure?',
      answer: 'Absolutely. We use bank-grade encryption (256-bit SSL), ISO 27001 certified data centers in India, daily automated backups, and role-based access controls. Your data is stored securely on Indian servers and we never share it with third parties. We are fully GST compliant and follow all Indian data protection regulations.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer founder-led support via WhatsApp, email, and phone during business hours (9 AM - 7 PM IST). You get personal onboarding, free training sessions, comprehensive documentation, video tutorials, and a dedicated account manager. We respond to queries within 2 hours on average.'
    },
    {
      question: 'Can I try before committing?',
      answer: 'Yes! We offer a 30-day free trial with full access to all features. No credit card required. During the trial, you get complete onboarding support, data migration assistance, and training for your team. You can cancel anytime with no questions asked.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'You retain complete ownership of your data. Before cancellation, we provide a full export of all your data in Excel/CSV format. Your data is kept secure for 90 days after cancellation in case you want to return. After 90 days, all data is permanently deleted as per your request.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Everything you need to know about ERP-SMB
          </p>
        </div>

        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-sm border border-border overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <span className="font-semibold text-foreground text-sm md:text-base pr-4">
                  {faq?.question}
                </span>
                <Icon
                  name={openIndex === index ? 'ChevronUp' : 'ChevronDown'}
                  size={20}
                  className="flex-shrink-0 text-primary transition-transform duration-300"
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq?.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919319033678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-success text-white rounded-lg hover:bg-success/90 transition-colors duration-300 font-medium"
            >
              <Icon name="MessageCircle" size={20} />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="mailto:pratapnpandey83@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors duration-300 font-medium"
            >
              <Icon name="Mail" size={20} />
              <span>Email Support</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;