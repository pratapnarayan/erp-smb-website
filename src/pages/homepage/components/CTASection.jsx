import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const benefits = [
    'Free 30-day trial with full features',
    'No credit card required',
    'Personal onboarding with founder',
    'Migration support from Excel/Tally'
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary via-blue-700 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-white/30">
              <Icon name="Zap" size={18} />
              <span>Start Your Transformation Today</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Replace Excel with Real-Time Clarity?
            </h2>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Join 500+ Indian SMBs who transformed their business operations. Schedule a personalized demo and see how ERP-SMB can work for your business.
            </p>

            <div className="space-y-4 mb-10">
              {benefits?.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center mt-0.5 backdrop-blur-sm border border-white/30">
                    <Icon name="Check" size={16} color="white" />
                  </div>
                  <span className="text-base md:text-lg text-white/90 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => navigate('/demo-request')}
                className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all duration-300 text-base px-8 py-6"
              >
                Get a Free Personalized ERP Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                onClick={() => navigate('/contact')}
                className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto text-base px-8 py-6"
              >
                Talk to Founder
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border-2 border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 gap-5 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Icon name="Users" size={28} color="white" className="mb-3" />
                  <p className="text-3xl md:text-4xl font-bold text-white mb-2">500+</p>
                  <p className="text-sm md:text-base text-white/80 font-medium">Active Businesses</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Icon name="Star" size={28} color="white" className="mb-3" />
                  <p className="text-3xl md:text-4xl font-bold text-white mb-2">4.9/5</p>
                  <p className="text-sm md:text-base text-white/80 font-medium">Customer Rating</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 mb-5 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} color="white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">Average ROI</p>
                    <p className="text-white/80 text-sm">Within 3 months</p>
                  </div>
                </div>
                <p className="text-4xl font-bold text-white">320%</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <Icon name="Clock" size={24} color="white" />
                  <div>
                    <p className="text-white font-bold text-base">Setup Time</p>
                    <p className="text-white/80 text-sm">Get started in 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;