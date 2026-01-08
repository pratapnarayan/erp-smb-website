import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCard = ({ name, role, company, image, imageAlt, testimonial, tier, metrics }) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 md:p-8 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={image}
          alt={imageAlt}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-base md:text-lg font-semibold text-foreground truncate">
            {name}
          </h4>
          <p className="text-sm text-muted-foreground truncate">
            {role}, {company}
          </p>
          <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium mt-2">
            <Icon name="Award" size={12} />
            {tier} Plan
          </div>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)]?.map((_, index) => (
          <Icon key={index} name="Star" size={16} color="var(--color-warning)" className="fill-current" />
        ))}
      </div>
      <p className="text-sm md:text-base text-foreground mb-4 leading-relaxed">
        "{testimonial}"
      </p>
      {metrics && (
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
          {metrics?.map((metric, index) => (
            <div key={index}>
              <p className="text-xs text-muted-foreground mb-1">
                {metric?.label}
              </p>
              <p className="text-base md:text-lg font-bold text-success">
                {metric?.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;