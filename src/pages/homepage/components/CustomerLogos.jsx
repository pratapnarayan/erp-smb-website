import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';

const CustomerLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const customers = [
  {
    id: 1,
    name: 'Sharma Traders',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_16135b042-1767631225091.png",
    logoAlt: 'Sharma Traders company logo featuring traditional Indian business motif with modern typography in blue and gold colors',
    industry: 'Wholesale Trading',
    location: 'Delhi'
  },
  {
    id: 2,
    name: 'Patel Distributors',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12be9910e-1767631224251.png",
    logoAlt: 'Patel Distributors corporate logo with geometric design elements representing supply chain and distribution network',
    industry: 'Distribution',
    location: 'Ahmedabad'
  },
  {
    id: 3,
    name: 'Kumar Retail Chain',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12d3e3294-1764674640729.png",
    logoAlt: 'Kumar Retail Chain brand logo featuring shopping cart icon with vibrant orange and green color scheme',
    industry: 'Retail',
    location: 'Bangalore'
  },
  {
    id: 4,
    name: 'Gupta Manufacturing',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b66485e7-1767631224710.png",
    logoAlt: 'Gupta Manufacturing industrial logo with gear and factory symbols in metallic silver and blue tones',
    industry: 'Manufacturing',
    location: 'Pune'
  },
  {
    id: 5,
    name: 'Singh Logistics',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b400290b-1767631226527.png",
    logoAlt: 'Singh Logistics company logo featuring truck and road imagery with bold red and black professional design',
    industry: 'Logistics',
    location: 'Mumbai'
  },
  {
    id: 6,
    name: 'Reddy Enterprises',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_149af5378-1767631225198.png",
    logoAlt: 'Reddy Enterprises corporate identity logo with modern minimalist design in navy blue and white colors',
    industry: 'Trading',
    location: 'Hyderabad'
  }];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(customers?.length / 3));
    }, 4000);

    return () => clearInterval(interval);
  }, [customers?.length]);

  const getVisibleCustomers = () => {
    const itemsPerSlide = 3;
    const start = currentIndex * itemsPerSlide;
    return customers?.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="py-8 md:py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-sm md:text-base text-muted-foreground mb-2">Trusted by 500+ Indian SMBs</p>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Join Growing Businesses Across India
          </h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-12">
            {getVisibleCustomers()?.map((customer) =>
            <div
              key={customer?.id}
              className="flex-shrink-0 w-full md:w-1/3 bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">

                <div className="aspect-[2/1] mb-4 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                  src={customer?.logo}
                  alt={customer?.logoAlt}
                  className="w-full h-full object-contain p-4" />

                </div>
                <h4 className="font-semibold text-foreground text-center mb-1">{customer?.name}</h4>
                <p className="text-xs text-muted-foreground text-center">{customer?.industry} • {customer?.location}</p>
              </div>
            )}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(customers?.length / 3) })?.map((_, index) =>
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`
              }
              aria-label={`Go to slide ${index + 1}`} />

            )}
          </div>
        </div>
      </div>
    </section>);

};

export default CustomerLogos;