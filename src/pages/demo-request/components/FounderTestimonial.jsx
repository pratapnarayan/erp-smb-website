import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FounderTestimonial = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6">
      <div className="flex items-center gap-4 md:gap-5 mb-4">
        <Image
          src="/founder-pratap-pandey.png"
          alt="Professional headshot of Pratap Pandey, Founder & CEO of ERP-SMB, wearing blue polo shirt with confident smile"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover flex-shrink-0" />

        <div className="flex-1">
          <h4 className="font-heading font-semibold text-foreground text-base md:text-lg mb-1">
            Pratap Pandey
          </h4>
          <p className="text-sm md:text-base text-muted-foreground">
            Founder & CEO, ERP-SMB
          </p>
        </div>
      </div>
      <div className="mb-3 md:mb-4">
        <div className="flex gap-1 mb-2">
          {[1, 2, 3, 4, 5]?.map((star) =>
            <Icon
              key={star}
              name="Star"
              size={16}
              color="var(--color-warning)"
              className="fill-current" />

          )}
        </div>
      </div>
      <blockquote className="text-sm md:text-base text-foreground mb-4 leading-relaxed">
        "I built ERP-SMB because I experienced firsthand the chaos of managing a growing business with Excel and Tally. Every demo I personally conduct is a chance to understand your unique challenges and show you exactly how we can help. You're not just getting software—you're getting a partner who truly understands Indian SMB operations."
      </blockquote>
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 md:p-4">
        <div className="flex items-start gap-2 md:gap-3">
          <Icon name="Info" size={18} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
          <p className="text-xs md:text-sm text-foreground">
            <span className="font-semibold">Personal Commitment:</span> I personally review every demo request and often join the calls to ensure you get the best experience and solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </div>);

};

export default FounderTestimonial;