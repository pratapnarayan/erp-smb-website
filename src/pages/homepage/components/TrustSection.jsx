import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSection = () => {
  const trustPoints = [
    {
      icon: 'MapPin',
      title: 'Built for Indian SMBs',
      description: 'Designed specifically for trading, wholesale, and distribution businesses in India'
    },
    {
      icon: 'Package',
      title: 'Designed for Inventory-Driven Businesses',
      description: 'Perfect for businesses managing stock, orders, and credit sales'
    },
    {
      icon: 'Users',
      title: 'Founder-Led Onboarding & Support',
      description: 'Personal guidance from our founders throughout your journey'
    },
    {
      icon: 'Shield',
      title: 'Secure Role-Based Access',
      description: 'Bank-grade security with granular permissions that grow with your business'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="Award" size={16} />
            <span>Why Choose ERP-SMB</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Indian SMBs Trust ERP-SMB
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Built by people who understand your business challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustPoints?.map((point, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon name={point?.icon} size={28} color="var(--color-primary)" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-3">
                {point?.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;