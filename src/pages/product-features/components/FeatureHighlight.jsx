import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeatureHighlight = ({ highlight }) => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm font-medium rounded-full mb-4">
            <Icon name="Sparkles" size={14} />
            {highlight?.badge}
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {highlight?.title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6">
            {highlight?.description}
          </p>

          <div className="space-y-3 mb-6">
            {highlight?.points?.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={14} color="var(--color-success)" />
                </div>
                <p className="text-sm md:text-base text-foreground">{point}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-primary text-primary-foreground text-sm md:text-base font-medium rounded-lg hover:bg-primary/90 transition-colors duration-250">
              Try This Feature
              <Icon name="ArrowRight" size={16} />
            </button>
            <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-border text-foreground text-sm md:text-base font-medium rounded-lg hover:bg-muted transition-colors duration-250">
              Watch Demo
              <Icon name="Play" size={16} />
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Image
            src={highlight?.image}
            alt={highlight?.imageAlt}
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;