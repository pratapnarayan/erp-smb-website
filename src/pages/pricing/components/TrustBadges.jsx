import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustBadges = () => {
  const badges = [
    {
      icon: "Shield",
      title: "ISO 27001 Certified",
      description: "Enterprise-grade security"
    },
    {
      icon: "Lock",
      title: "Data Encryption",
      description: "256-bit SSL encryption"
    },
    {
      icon: "FileCheck",
      title: "GST Compliant",
      description: "Fully compliant invoicing"
    },
    {
      icon: "Server",
      title: "Daily Backups",
      description: "Automatic data protection"
    },
    {
      icon: "Users",
      title: "500+ Businesses",
      description: "Trust ERP-SMB"
    },
    {
      icon: "Award",
      title: "99.9% Uptime",
      description: "Reliable performance"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
      {badges?.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-300"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <Icon name={badge?.icon} size={24} color="var(--color-primary)" />
          </div>
          <h4 className="text-xs md:text-sm font-semibold text-foreground mb-1">
            {badge?.title}
          </h4>
          <p className="text-xs text-muted-foreground">
            {badge?.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;