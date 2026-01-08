import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethodCard = ({ icon, title, description, action, actionLabel, details, available }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon name={icon} size={24} color="var(--color-primary)" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      {details && (
        <div className="space-y-2 mb-4">
          {details?.map((detail, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-foreground">
              <Icon name="Check" size={16} color="var(--color-success)" />
              <span>{detail}</span>
            </div>
          ))}
        </div>
      )}
      {available && (
        <div className="flex items-center gap-2 text-sm text-success mb-4 bg-success/10 px-3 py-2 rounded-md">
          <Icon name="Clock" size={16} />
          <span className="font-medium">{available}</span>
        </div>
      )}
      <Button 
        variant="outline" 
        fullWidth 
        onClick={action}
        iconName="ArrowRight"
        iconPosition="right"
      >
        {actionLabel}
      </Button>
    </div>
  );
};

export default ContactMethodCard;