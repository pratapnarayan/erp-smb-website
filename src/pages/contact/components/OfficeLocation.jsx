import React from 'react';
import Icon from '../../../components/AppIcon';

const OfficeLocation = () => {
  const contactInfo = [
    {
      icon: "Phone",
      label: "Phone Number",
      value: "+91 93190 33678",
      action: () => window.location.href = 'tel:+919319033678'
    },
    {
      icon: "Mail",
      label: "Email Address",
      value: "pratapnpandey83@gmail.com",
      action: () => window.location.href = 'mailto:pratapnpandey83@gmail.com'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
        Contact Information
      </h3>

      <div className="space-y-6">
        {contactInfo?.map((info, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name={info?.icon} size={24} color="var(--color-primary)" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-muted-foreground mb-2">
                {info?.label}
              </p>
              <button
                onClick={info?.action}
                className="text-base md:text-lg text-primary hover:underline text-left font-medium"
              >
                {info?.value}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex items-start gap-3 p-4 bg-info/10 rounded-lg">
          <Icon name="Info" size={20} color="var(--color-info)" className="flex-shrink-0 mt-0.5" />
          <p className="text-sm text-info">
            For urgent support, please use our WhatsApp channel for immediate assistance
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;