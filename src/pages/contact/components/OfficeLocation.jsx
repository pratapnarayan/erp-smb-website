import React from 'react';
import Icon from '../../../components/AppIcon';

const OfficeLocation = () => {
  const officeDetails = {
    address: "Tower B, 4th Floor, Cyber City\nGurgaon, Haryana 122002\nIndia",
    phone: "+91 124 4567890",
    email: "support@erp-smb.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM IST\nSaturday: 10:00 AM - 2:00 PM IST\nSunday: Closed"
  };

  const contactInfo = [
    {
      icon: "MapPin",
      label: "Office Address",
      value: officeDetails?.address,
      multiline: true
    },
    {
      icon: "Phone",
      label: "Phone Number",
      value: officeDetails?.phone,
      action: () => window.location.href = `tel:${officeDetails?.phone}`
    },
    {
      icon: "Mail",
      label: "Email Address",
      value: officeDetails?.email,
      action: () => window.location.href = `mailto:${officeDetails?.email}`
    },
    {
      icon: "Clock",
      label: "Business Hours",
      value: officeDetails?.hours,
      multiline: true
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="aspect-[16/9] w-full bg-muted relative overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="ERP-SMB Office Location"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=28.4595,77.0266&z=14&output=embed"
          className="absolute inset-0"
        />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
          Visit Our Office
        </h3>
        
        <div className="space-y-6">
          {contactInfo?.map((info, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name={info?.icon} size={20} color="var(--color-primary)" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {info?.label}
                </p>
                {info?.multiline ? (
                  <p className="text-sm md:text-base text-foreground whitespace-pre-line">
                    {info?.value}
                  </p>
                ) : (
                  <button
                    onClick={info?.action}
                    className="text-sm md:text-base text-primary hover:underline text-left"
                  >
                    {info?.value}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-start gap-3 p-4 bg-info/10 rounded-lg">
            <Icon name="Info" size={20} color="var(--color-info)" className="flex-shrink-0 mt-0.5" />
            <p className="text-sm text-info">
              For urgent support outside business hours, please use our WhatsApp channel for immediate assistance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;