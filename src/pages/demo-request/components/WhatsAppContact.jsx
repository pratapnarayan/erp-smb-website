import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WhatsAppContact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919319033678';
    const message = encodeURIComponent('Hi, I want a free ERP demo for my business.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-success/10 to-success/5 border border-success/20 rounded-lg p-4 md:p-6">
      <div className="flex items-start gap-3 md:gap-4 mb-4">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
          <Icon name="MessageCircle" size={24} color="var(--color-success)" />
        </div>
        <div className="flex-1">
          <h3 className="font-heading font-semibold text-foreground text-base md:text-lg mb-1 md:mb-2">
            Prefer Instant Chat?
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            Connect with us directly on WhatsApp for immediate assistance and quick demo scheduling.
          </p>
        </div>
      </div>

      <Button
        variant="success"
        size="lg"
        fullWidth
        iconName="MessageSquare"
        iconPosition="left"
        onClick={handleWhatsAppClick}
      >
        Chat on WhatsApp
      </Button>

      <div className="mt-4 pt-4 border-t border-success/20">
        <p className="text-xs text-center text-muted-foreground mb-2">
          Available Monday - Saturday, 9 AM - 7 PM IST
        </p>
        <p className="text-xs text-center text-success font-medium">
          Average response time: &lt; 5 minutes
        </p>
      </div>
    </div>
  );
};

export default WhatsAppContact;