import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const IntegrationShowcase = ({ integrations }) => {
  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6 lg:p-8">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
          Seamless Integrations
        </h3>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          Connect with the tools you already use. ERP-SMB integrates seamlessly with popular Indian business applications.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {integrations?.map((integration, index) => (
          <div
            key={index}
            className="bg-background rounded-lg border border-border p-4 hover:shadow-md transition-all duration-250 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mb-3 flex items-center justify-center">
                <Image
                  src={integration?.logo}
                  alt={integration?.logoAlt}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                {integration?.name}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                {integration?.description}
              </p>
              <div className="mt-3 flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                <span>Learn more</span>
                <Icon name="ArrowRight" size={12} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationShowcase;