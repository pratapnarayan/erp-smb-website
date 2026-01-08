import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Owner',
    company: 'Sharma Traders',
    industry: 'Wholesale Trading',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a341e72a-1763295403609.png",
    imageAlt: 'Professional headshot of middle-aged Indian businessman Rajesh Sharma wearing navy blue suit with warm smile in modern office setting',
    quote: 'ERP-SMB transformed how we manage our wholesale business. We went from Excel chaos to having real-time visibility of our entire inventory across 3 warehouses. The founder personally helped us during migration.',
    metrics: {
      label: 'Time Saved',
      value: '15 hours/week'
    },
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Finance Manager',
    company: 'Patel Distributors',
    industry: 'Distribution',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1be9e8efb-1763300496913.png",
    imageAlt: 'Professional portrait of Indian woman Priya Patel in formal business attire with confident expression against neutral background',
    quote: 'The cash flow tracking feature is a game-changer. We can now see exactly where our money is at any given time. GST compliance became so much easier, and our accountant loves the automated reports.',
    metrics: {
      label: 'Revenue Growth',
      value: '23% increase'
    },
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'Operations Head',
    company: 'Kumar Retail Chain',
    industry: 'Retail',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b686b60e-1763292151580.png",
    imageAlt: 'Professional photograph of Indian male executive Amit Kumar wearing white shirt and glasses with friendly demeanor in corporate environment',
    quote: 'Managing 5 retail stores was a nightmare with spreadsheets. Now we have one system that shows us everything - from stock levels to customer preferences. The WhatsApp support is incredibly responsive.',
    metrics: {
      label: 'Efficiency Gain',
      value: '40% faster'
    },
    rating: 5
  }];


  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Business Owners Like You
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from Indian SMBs who transformed their operations with ERP-SMB
          </p>
        </div>

        <div className="relative">
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 bg-gradient-to-br from-primary to-secondary p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/20 mb-4">
                    <Image
                      src={testimonials?.[activeTestimonial]?.image}
                      alt={testimonials?.[activeTestimonial]?.imageAlt}
                      className="w-full h-full object-cover" />

                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {testimonials?.[activeTestimonial]?.name}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base mb-1">
                    {testimonials?.[activeTestimonial]?.role}
                  </p>
                  <p className="text-white/80 text-sm">
                    {testimonials?.[activeTestimonial]?.company}
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-white/80 text-xs mb-1">
                    {testimonials?.[activeTestimonial]?.metrics?.label}
                  </p>
                  <p className="text-white text-2xl font-bold">
                    {testimonials?.[activeTestimonial]?.metrics?.value}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonials?.[activeTestimonial]?.rating })?.map((_, index) =>
                  <Icon key={index} name="Star" size={20} color="var(--color-warning)" className="fill-current" />
                  )}
                </div>

                <blockquote className="text-base md:text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonials?.[activeTestimonial]?.quote}"
                </blockquote>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Building2" size={16} />
                  <span>{testimonials?.[activeTestimonial]?.industry}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
              aria-label="Previous testimonial">

              <Icon name="ChevronLeft" size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials?.map((_, index) =>
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeTestimonial === index ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`
                }
                aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
              aria-label="Next testimonial">

              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialSection;