import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturePreview = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 0,
      icon: 'BarChart3',
      title: 'Real-Time Dashboard',
      description: 'Get instant visibility into your business performance with live data updates',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e0209a6b-1764676409002.png",
      imageAlt: 'Modern business analytics dashboard displaying colorful charts, graphs, and key performance indicators on large computer monitor with clean interface design',
      benefits: [
        'Live revenue tracking',
        'Inventory status at a glance',
        'Customer insights',
        'Automated alerts']

    },
    {
      id: 1,
      icon: 'Package',
      title: 'Smart Inventory',
      description: 'Never run out of stock or overstock with intelligent inventory management',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_122b22f9d-1764654516001.png",
      imageAlt: 'Organized warehouse shelving system with neatly stacked inventory boxes and barcode scanning equipment in modern distribution center',
      benefits: [
        'Auto reorder points',
        'Multi-location tracking',
        'Batch & expiry management',
        'Stock movement history']

    },
    {
      id: 2,
      icon: 'IndianRupee',
      title: 'Cash Flow Control',
      description: 'Track every rupee with comprehensive financial management tools',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1849d52c1-1764757159118.png",
      imageAlt: 'Professional financial planning workspace with Indian rupee currency notes, calculator, financial charts, and business documents spread on wooden desk',
      benefits: [
        'Invoice & payment tracking',
        'Expense management',
        'GST compliance',
        'Profit & loss reports']

    },
    {
      id: 3,
      icon: 'Users',
      title: 'Customer Management',
      description: 'Build stronger relationships with complete customer lifecycle tracking',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_150cccfb9-1767602141428.png",
      imageAlt: 'Diverse business team collaborating around conference table with laptops and documents, engaged in customer relationship discussion',
      benefits: [
        'Customer profiles',
        'Purchase history',
        'Payment reminders',
        'Loyalty programs']

    }];


  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="Zap" size={16} />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What You Can Manage with ERP-SMB
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete business management replacing Excel & Tally with intelligent automation for Indian SMBs
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-2xl border-2 border-border overflow-hidden">
          <div className="flex overflow-x-auto border-b-2 border-border scrollbar-hide bg-muted/30">
            {features?.map((feature) =>
              <button
                key={feature?.id}
                onClick={() => setActiveTab(feature?.id)}
                className={`flex-shrink-0 flex items-center gap-3 px-6 md:px-8 py-5 transition-all duration-300 font-semibold ${activeTab === feature?.id ?
                    'bg-card border-b-4 border-primary text-primary shadow-sm' : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'}`
                }>

                <Icon name={feature?.icon} size={22} />
                <span className="text-sm md:text-base whitespace-nowrap">{feature?.title}</span>
              </button>
            )}
          </div>

          <div className="p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {features?.[activeTab]?.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                  {features?.[activeTab]?.description}
                </p>

                <div className="space-y-4">
                  {features?.[activeTab]?.benefits?.map((benefit, index) =>
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                        <Icon name="Check" size={16} color="var(--color-success)" />
                      </div>
                      <span className="text-sm md:text-base text-foreground font-medium">{benefit}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-border hover:shadow-3xl transition-shadow duration-300">
                  <Image
                    src={features?.[activeTab]?.image}
                    alt={features?.[activeTab]?.imageAlt}
                    className="w-full h-full object-cover" />

                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturePreview;