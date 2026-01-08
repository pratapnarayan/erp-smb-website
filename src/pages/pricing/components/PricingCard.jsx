import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingCard = ({ 
  tier, 
  price, 
  period, 
  description,
  bestFor,
  features, 
  isPopular, 
  ctaText, 
  ctaVariant,
  onCtaClick,
  billingCycle 
}) => {
  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const calculateAnnualSavings = () => {
    if (billingCycle === 'annual' && price?.monthly) {
      const monthlyCost = price?.monthly * 12;
      const annualCost = price?.annual;
      const savings = monthlyCost - annualCost;
      const savingsPercent = Math.round((savings / monthlyCost) * 100);
      return { amount: savings, percent: savingsPercent };
    }
    return null;
  };

  const savings = calculateAnnualSavings();
  const displayPrice = billingCycle === 'annual' ? price?.annual : price?.monthly;

  return (
    <div className={`relative bg-card rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl ${isPopular 
        ? 'border-primary shadow-xl scale-105 lg:scale-110' 
        : 'border-border hover:border-primary/50'}`}>
      {isPopular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
          Most Popular
        </div>
      )}
      <div className="p-8 md:p-10">
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {tier}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
          {bestFor && (
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold border border-secondary/30">
              <Icon name="Target" size={16} />
              <span>Best for: {bestFor}</span>
            </div>
          )}
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {formatPrice(displayPrice)}
            </span>
            <span className="text-muted-foreground text-base md:text-lg font-medium">
              /{period}
            </span>
          </div>
          
          {savings && billingCycle === 'annual' && (
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm md:text-base font-semibold border border-success/30">
              <Icon name="TrendingDown" size={18} />
              Save {savings?.percent}% annually
            </div>
          )}
          
          <p className="text-xs md:text-sm text-muted-foreground mt-3">
            + 18% GST (as applicable)
          </p>
        </div>

        <Button
          variant={ctaVariant}
          fullWidth
          onClick={onCtaClick}
          className="mb-8 text-base py-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {ctaText}
        </Button>

        <div className="space-y-4">
          <p className="text-sm font-bold text-foreground mb-4">
            Everything included:
          </p>
          {features?.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <Icon 
                  name={feature?.included ? "Check" : "X"} 
                  size={16} 
                  color={feature?.included ? "var(--color-primary)" : "var(--color-muted-foreground)"}
                />
              </div>
              <span className={`text-sm md:text-base ${feature?.included ? 'text-foreground font-medium' : 'text-muted-foreground line-through'}`}>
                {feature?.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;