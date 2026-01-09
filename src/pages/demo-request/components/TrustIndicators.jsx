import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const trustElements = [
    {
      icon: 'Users',
      title: 'Built for Indian SMBs',
      description: 'Designed specifically for trading and distribution businesses'
    },
    {
      icon: 'Clock',
      title: '24-Hour Response',
      description: 'We respond to all demo requests within one business day'
    },
    {
      icon: 'Shield',
      title: 'Secure & Compliant',
      description: 'Bank-grade security with GST compliance built-in'
    },
    {
      icon: 'HeadphonesIcon',
      title: 'Founder-Led Support',
      description: "You\'re never just a ticket number with us"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {trustElements?.map((element, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-4 md:p-6 text-center hover:shadow-md transition-shadow duration-250"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
            <Icon name={element?.icon} size={24} color="var(--color-primary)" />
          </div>
          <h3 className="font-heading font-semibold text-foreground text-sm md:text-base mb-1 md:mb-2">
            {element?.title}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground">
            {element?.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrustIndicators;