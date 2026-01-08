import React from 'react';

const BillingToggle = ({ billingCycle, onToggle }) => {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12">
      <button
        onClick={() => onToggle('monthly')}
        className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-250 ${
          billingCycle === 'monthly' ?'bg-primary text-primary-foreground shadow-md' :'bg-muted text-muted-foreground hover:bg-muted/80'
        }`}
      >
        Monthly
      </button>
      
      <button
        onClick={() => onToggle('annual')}
        className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-250 relative ${
          billingCycle === 'annual' ?'bg-primary text-primary-foreground shadow-md' :'bg-muted text-muted-foreground hover:bg-muted/80'
        }`}
      >
        Annual
        <span className="absolute -top-2 -right-2 bg-success text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
          Save 20%
        </span>
      </button>
    </div>
  );
};

export default BillingToggle;