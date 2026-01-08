import React from 'react';
import Icon from '../../../components/AppIcon';

const ComparisonTable = ({ pricingData }) => {
  const allFeatures = [
    { category: "Core Features", items: [
      "User Accounts",
      "Inventory Management",
      "Sales & Purchase Orders",
      "Customer Management",
      "Supplier Management",
      "Basic Reporting"
    ]},
    { category: "Advanced Features", items: [
      "Multi-location Support",
      "Advanced Analytics",
      "Custom Workflows",
      "API Access",
      "Bulk Operations",
      "Data Export"
    ]},
    { category: "Integrations", items: [
      "GST Filing Integration",
      "Payment Gateway",
      "WhatsApp Business",
      "Email Marketing",
      "Accounting Software",
      "E-commerce Platforms"
    ]},
    { category: "Support & Training", items: [
      "Email Support",
      "Phone Support",
      "Dedicated Account Manager",
      "Onboarding Training",
      "Priority Support",
      "Custom Training Sessions"
    ]}
  ];

  const getFeatureAvailability = (tierName, featureName) => {
    const tier = pricingData?.find(t => t?.tier === tierName);
    if (!tier) return false;
    
    const featureMap = {
      "Starter": {
        "User Accounts": "Up to 3",
        "Inventory Management": true,
        "Sales & Purchase Orders": true,
        "Customer Management": true,
        "Supplier Management": true,
        "Basic Reporting": true,
        "Email Support": true,
        "GST Filing Integration": true,
        "Payment Gateway": true
      },
      "Growth": {
        "User Accounts": "Up to 10",
        "Inventory Management": true,
        "Sales & Purchase Orders": true,
        "Customer Management": true,
        "Supplier Management": true,
        "Basic Reporting": true,
        "Multi-location Support": "Up to 3",
        "Advanced Analytics": true,
        "Custom Workflows": true,
        "Bulk Operations": true,
        "Data Export": true,
        "Email Support": true,
        "Phone Support": true,
        "GST Filing Integration": true,
        "Payment Gateway": true,
        "WhatsApp Business": true,
        "Email Marketing": true,
        "Onboarding Training": true
      },
      "Enterprise": {
        "User Accounts": "Unlimited",
        "Inventory Management": true,
        "Sales & Purchase Orders": true,
        "Customer Management": true,
        "Supplier Management": true,
        "Basic Reporting": true,
        "Multi-location Support": "Unlimited",
        "Advanced Analytics": true,
        "Custom Workflows": true,
        "API Access": true,
        "Bulk Operations": true,
        "Data Export": true,
        "Email Support": true,
        "Phone Support": true,
        "Dedicated Account Manager": true,
        "Onboarding Training": true,
        "Priority Support": true,
        "Custom Training Sessions": true,
        "GST Filing Integration": true,
        "Payment Gateway": true,
        "WhatsApp Business": true,
        "Email Marketing": true,
        "Accounting Software": true,
        "E-commerce Platforms": true
      }
    };

    return featureMap?.[tierName]?.[featureName] || false;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left p-4 md:p-6 text-sm md:text-base font-semibold text-foreground min-w-[200px]">
              Features
            </th>
            {pricingData?.map((tier) => (
              <th key={tier?.tier} className="text-center p-4 md:p-6 text-sm md:text-base font-semibold text-foreground min-w-[120px] md:min-w-[150px]">
                {tier?.tier}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures?.map((category, categoryIndex) => (
            <React.Fragment key={categoryIndex}>
              <tr className="bg-muted/50">
                <td colSpan={pricingData?.length + 1} className="p-3 md:p-4 text-xs md:text-sm font-semibold text-foreground">
                  {category?.category}
                </td>
              </tr>
              {category?.items?.map((feature, featureIndex) => (
                <tr key={featureIndex} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-3 md:p-4 text-xs md:text-sm text-foreground">
                    {feature}
                  </td>
                  {pricingData?.map((tier) => {
                    const availability = getFeatureAvailability(tier?.tier, feature);
                    return (
                      <td key={tier?.tier} className="p-3 md:p-4 text-center">
                        {typeof availability === 'string' ? (
                          <span className="text-xs md:text-sm text-foreground font-medium">
                            {availability}
                          </span>
                        ) : availability ? (
                          <Icon name="Check" size={20} color="var(--color-success)" />
                        ) : (
                          <Icon name="Minus" size={20} color="var(--color-muted-foreground)" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;