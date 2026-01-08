import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the typical response time for support queries?",
      answer: "We aim to respond to all queries within 2 business hours during our working hours (Monday-Friday, 9 AM - 6 PM IST). For urgent issues, our WhatsApp channel provides immediate assistance. Weekend queries are addressed on the next business day."
    },
    {
      question: "Can I schedule a call with the founder directly?",
      answer: "Yes! As part of our founder-led support approach, you can request a call with our founder for strategic discussions, migration planning, or partnership opportunities. Simply mention this in your inquiry form or contact us via email."
    },
    {
      question: "Do you provide support in regional Indian languages?",
      answer: "Currently, our primary support language is English, which is the standard business language for most Indian SMBs. However, our team can assist with basic queries in Hindi. We're working on expanding our regional language support."
    },
    {
      question: "What information should I prepare before contacting sales?",
      answer: "To help us serve you better, please have ready: your business type (trading/wholesale/retail), approximate number of users, current tools you're using (Excel/Tally), and specific pain points you're facing. This helps us provide tailored recommendations."
    },
    {
      question: "Is there a dedicated account manager for customers?",
      answer: "Yes, all our customers are assigned a dedicated account manager who serves as your single point of contact for all queries, training needs, and ongoing support. You'll never feel like just a ticket number."
    },
    {
      question: "How do I report a technical issue or bug?",
      answer: "Technical issues can be reported through multiple channels: email (support@erp-smb.com), WhatsApp, or the contact form selecting 'Technical Support'. Please include screenshots and steps to reproduce the issue for faster resolution."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
          Frequently Asked Questions
        </h3>
        <p className="text-sm md:text-base text-muted-foreground">
          Quick answers to common questions about contacting us
        </p>
      </div>
      <div className="space-y-3">
        {faqs?.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-muted/50 transition-colors"
            >
              <span className="text-sm md:text-base font-medium text-foreground flex-1">
                {faq?.question}
              </span>
              <Icon
                name={openIndex === index ? "ChevronUp" : "ChevronDown"}
                size={20}
                className="flex-shrink-0 text-muted-foreground transition-transform duration-300"
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-4 pt-0 text-sm md:text-base text-muted-foreground">
                {faq?.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground text-center">
          Can't find your answer?{' '}
          <button className="text-primary hover:underline font-medium">
            Contact our support team
          </button>
        </p>
      </div>
    </div>
  );
};

export default FAQSection;