import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const trustBadges = [
    { icon: 'Shield', label: 'Secure & Scalable' },
    { icon: 'Users', label: 'Founder-Led Support' },
    { icon: 'CheckCircle', label: 'Built for Indian SMBs' },
    { icon: 'TrendingUp', label: 'Designed for Growth' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border border-primary/20 shadow-sm">
              <Icon name="Sparkles" size={18} />
              <span>Built for Indian SMBs</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Replace Excel & Tally with{' '}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">Powerful Cloud ERP</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Manage Accounting, Inventory, Sales & GST in One System. Designed for growing Indian businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => navigate('/demo-request')}
                className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8 py-6"
              >
                Get a Free Personalized ERP Demo
              </Button>
              <Button
                variant="success"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => {
                  const phoneNumber = '919319033678';
                  const message = encodeURIComponent('Hi, I want a free ERP demo for my business.');
                  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                }}
                className="w-full sm:w-auto border-2 hover:bg-success/90 text-base px-8 py-6 bg-[#25D366] text-white hover:bg-[#20BA5A]"
              >
                Chat on WhatsApp
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustBadges?.map((badge, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2.5 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-border/50 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Icon name={badge?.icon} size={22} color="var(--color-primary)" />
                  </div>
                  <span className="text-xs font-medium text-foreground text-center leading-tight">
                    {badge?.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-primary via-blue-700 to-secondary p-4 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm"></div>
                </div>
                <span className="text-white text-sm font-semibold ml-2">ERP-SMB Dashboard</span>
              </div>

              <div className="p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white">
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-white p-5 rounded-xl shadow-md border border-border/50 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Revenue</span>
                      <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                        <Icon name="TrendingUp" size={18} color="var(--color-success)" />
                      </div>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">₹12.5L</p>
                    <p className="text-xs font-semibold text-success">+23% this month</p>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-md border border-border/50 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Orders</span>
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="ShoppingCart" size={18} color="var(--color-primary)" />
                      </div>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">342</p>
                    <p className="text-xs font-semibold text-primary">+18% this week</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md border border-border/50 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-foreground">Inventory Status</span>
                    <span className="text-xs font-semibold text-success bg-success/10 px-3 py-1 rounded-full">All Good</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-success to-emerald-400 h-2.5 rounded-full shadow-sm" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground min-w-[2.5rem] text-right">85%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-primary to-blue-500 h-2.5 rounded-full shadow-sm" style={{ width: '72%' }}></div>
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground min-w-[2.5rem] text-right">72%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;