import React from 'react';
import Icon from '../../../components/AppIcon';
import { useNavigate } from 'react-router-dom';

const IndustryCards = () => {
  const navigate = useNavigate();

  const industries = [
    {
      id: 1,
      icon: 'Store',
      title: 'Retail & Trading',
      description: 'Point-of-sale, inventory tracking, and customer management for retail businesses',
      features: ['POS Integration', 'Stock Alerts', 'Customer Loyalty'],
      color: 'from-blue-500 to-blue-600',
      stats: '150+ Retailers'
    },
    {
      id: 2,
      icon: 'Package',
      title: 'Wholesale Distribution',
      description: 'Order management, supplier tracking, and bulk inventory control',
      features: ['Bulk Orders', 'Supplier Portal', 'Route Planning'],
      color: 'from-emerald-500 to-emerald-600',
      stats: '200+ Distributors'
    },
    {
      id: 3,
      icon: 'Factory',
      title: 'Manufacturing',
      description: 'Production planning, raw material tracking, and quality control',
      features: ['BOM Management', 'Production Tracking', 'Quality Checks'],
      color: 'from-orange-500 to-orange-600',
      stats: '100+ Manufacturers'
    },
    {
      id: 4,
      icon: 'Truck',
      title: 'Logistics & Supply',
      description: 'Fleet management, delivery tracking, and warehouse operations',
      features: ['Fleet Tracking', 'Delivery Routes', 'Warehouse Management'],
      color: 'from-purple-500 to-purple-600',
      stats: '80+ Logistics Firms'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Built for Your Industry
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions that understand the unique challenges of your business sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {industries?.map((industry) => (
            <div
              key={industry?.id}
              className="group bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => navigate('/product-features')}
            >
              <div className={`bg-gradient-to-br ${industry?.color} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={industry?.icon} size={24} color="white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{industry?.title}</h3>
                  <p className="text-sm text-white/90">{industry?.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3 mb-4">
                  {industry?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs font-medium text-primary">{industry?.stats}</span>
                  <Icon name="ArrowRight" size={16} color="var(--color-primary)" className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCards;