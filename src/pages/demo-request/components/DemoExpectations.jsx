import React from 'react';
import Icon from '../../../components/AppIcon';

const DemoExpectations = () => {
  const expectations = [
    {
      icon: 'ShoppingCart',
      title: 'Track Sales Orders',
      description: 'See how to track sales orders from creation to delivery'
    },
    {
      icon: 'Package',
      title: 'Monitor Inventory',
      description: 'How to monitor inventory and fast-moving items'
    },
    {
      icon: 'IndianRupee',
      title: 'View Receivables',
      description: 'How to view outstanding receivables and overdue payments'
    },
    {
      icon: 'BarChart3',
      title: 'Daily Financial Visibility',
      description: 'How business owners get daily financial visibility'
    }
  ];

  return (
    <div className="bg-card border-2 border-border rounded-xl p-6 md:p-8 shadow-lg">
      <div className="mb-8 p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-2 border-primary/30 rounded-xl">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <Icon name="Video" size={22} color="#ffffff" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-foreground text-xl md:text-2xl mb-2">
              In this 30-minute personalized demo, you'll see:
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              How to track sales orders from creation to delivery, monitor inventory and fast-moving items, view outstanding receivables and overdue payments, and how business owners get daily financial visibility.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {expectations?.map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
              <Icon name={item?.icon} size={24} color="var(--color-primary)" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground text-base md:text-lg mb-1">
                {item?.title}
              </h4>
              <p className="text-sm md:text-base text-muted-foreground">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoExpectations;