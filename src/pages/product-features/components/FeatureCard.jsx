import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeatureCard = ({ feature, isExpanded, onToggle }) => {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-4 md:p-6 lg:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon name={feature?.icon} size={24} color="var(--color-primary)" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-2">
              {feature?.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground line-clamp-2">
              {feature?.description}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <Image
            src={feature?.image}
            alt={feature?.imageAlt}
            className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {feature?.benefits?.map((benefit, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-success/10 text-success text-xs md:text-sm rounded-full"
            >
              <Icon name="Check" size={14} />
              {benefit}
            </span>
          ))}
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border animate-slide-down">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">
                  Key Capabilities
                </h4>
                <ul className="space-y-2">
                  {feature?.capabilities?.map((capability, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                      <Icon name="ChevronRight" size={16} className="mt-1 flex-shrink-0 text-primary" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {feature?.testimonial && (
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Image
                      src={feature?.testimonial?.avatar}
                      alt={feature?.testimonial?.avatarAlt}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm md:text-base font-medium text-foreground">
                        {feature?.testimonial?.name}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {feature?.testimonial?.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-foreground italic">
                    "{feature?.testimonial?.quote}"
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <button
          onClick={onToggle}
          className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 text-sm md:text-base font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors duration-250"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
          <Icon name={isExpanded ? 'ChevronUp' : 'ChevronDown'} size={16} />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;