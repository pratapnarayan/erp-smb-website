import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Can I switch plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference immediately. When downgrading, the change will take effect at the start of your next billing cycle, and you'll receive a credit for the unused portion."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and bank transfers. For annual plans, we also offer payment through cheque or NEFT/RTGS. All payments are processed securely through our payment gateway partners."
    },
    {
      question: "Is GST included in the pricing?",
      answer: "No, the displayed prices are exclusive of GST. An additional 18% GST will be added to your invoice as per Indian tax regulations. We provide GST-compliant invoices for all transactions."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features of the Growth plan. No credit card is required to start your trial. You can explore all functionalities and decide which plan suits your business best."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Your data remains accessible for 30 days after cancellation. During this period, you can export all your data in standard formats (Excel, CSV, PDF). After 30 days, data is securely deleted from our servers as per our data retention policy."
    },
    {
      question: "Can I get a custom plan for my business?",
      answer: "Yes, for businesses with unique requirements or more than 50 employees, we offer custom Enterprise plans. Contact our sales team to discuss your specific needs, and we'll create a tailored solution with custom pricing."
    },
    {
      question: "Is training included in the pricing?",
      answer: "Starter plan includes self-service resources and email support. Growth plan includes onboarding training sessions. Enterprise plan includes comprehensive training, dedicated account manager, and ongoing support sessions."
    },
    {
      question: "What about data migration from Excel/Tally?",
      answer: "We provide free data migration assistance for all paid plans. Our team will help you import your existing data from Excel, Tally, or other systems. For Enterprise plans, we offer white-glove migration service with dedicated support."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-3 md:space-y-4">
      {faqs?.map((faq, index) => (
        <div
          key={index}
          className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-md"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between p-4 md:p-6 text-left"
          >
            <span className="text-sm md:text-base font-semibold text-foreground pr-4">
              {faq?.question}
            </span>
            <Icon
              name={openIndex === index ? "ChevronUp" : "ChevronDown"}
              size={20}
              className="flex-shrink-0 text-muted-foreground"
            />
          </button>
          
          {openIndex === index && (
            <div className="px-4 md:px-6 pb-4 md:pb-6">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {faq?.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;