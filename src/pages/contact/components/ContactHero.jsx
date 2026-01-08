import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border border-primary/20 shadow-sm">
            <Icon name="MessageCircle" size={18} />
            <span>We're Here to Help</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Get in Touch with Our Team
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Whether you have questions about features, pricing, or need technical support, our team is ready to assist you. Choose your preferred way to connect with us.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-sm md:text-base text-foreground font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-border/50">
              <Icon name="Clock" size={18} color="var(--color-success)" />
              <span>Response within 2 hours</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base text-foreground font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-border/50">
              <Icon name="Users" size={18} color="var(--color-success)" />
              <span>Founder-led support</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base text-foreground font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-border/50">
              <Icon name="Shield" size={18} color="var(--color-success)" />
              <span>100% secure communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;