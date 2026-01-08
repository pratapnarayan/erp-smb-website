import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickLinks = () => {
  const quickLinks = [
    {
      icon: "Calendar",
      title: "Schedule a Demo",
      description: "Book a personalized demo with our product experts",
      link: "/demo-request",
      color: "primary"
    },
    {
      icon: "DollarSign",
      title: "View Pricing",
      description: "Explore our transparent pricing plans for Indian SMBs",
      link: "/pricing",
      color: "secondary"
    },
    {
      icon: "Layers",
      title: "Explore Features",
      description: "Discover how ERP-SMB can transform your business",
      link: "/product-features",
      color: "accent"
    },
    {
      icon: "Home",
      title: "Back to Home",
      description: "Return to homepage to learn more about ERP-SMB",
      link: "/homepage",
      color: "muted"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
          Quick Links
        </h3>
        <p className="text-sm md:text-base text-muted-foreground">
          Explore more about ERP-SMB and our offerings
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quickLinks?.map((link, index) => (
          <Link
            key={index}
            to={link?.link}
            className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg bg-${link?.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={link?.icon} size={20} color={`var(--color-${link?.color})`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {link?.title}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {link?.description}
                </p>
              </div>
              <Icon 
                name="ArrowRight" 
                size={16} 
                className="flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" 
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;