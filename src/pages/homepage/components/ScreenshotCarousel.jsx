import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ScreenshotCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Screenshot data with actual product images
  const screenshots = [
    {
      id: 1,
      title: 'Secure Login',
      description: 'Simple and secure authentication to access your ERP system',
      image: '/screenshots/screenshot-login page.png',
      alt: 'ERP-SMB login page with secure authentication for user access'
    },
    {
      id: 2,
      title: 'Dashboard Overview',
      description: 'Get a complete view of your business metrics at a glance',
      image: '/screenshots/screenshot-DashboardPage.png',
      alt: 'Dashboard showing real-time business metrics, sales data, and key performance indicators'
    },
    {
      id: 3,
      title: 'Enquiry Management',
      description: 'Track and manage customer enquiries efficiently',
      image: '/screenshots/screenshot-EnquiryPage.png',
      alt: 'Enquiry management screen for tracking customer enquiries and converting them to orders'
    },
    {
      id: 4,
      title: 'Orders Management',
      description: 'Track all sales orders from creation to delivery in real-time',
      image: '/screenshots/screenshot-OrdersPage.png',
      alt: 'Orders management interface showing sales order tracking with status indicators and delivery timelines'
    },
    {
      id: 5,
      title: 'Inventory Management',
      description: 'Monitor stock levels, fast-moving items, and reorder points',
      image: '/screenshots/screenshot-inventorypage.png',
      alt: 'Inventory management screen displaying stock levels, fast-moving items analysis, and automated reorder alerts'
    },
    {
      id: 6,
      title: 'Finance Management',
      description: 'P&L, balance sheet, and key financial metrics in one place',
      image: '/screenshots/screenshot-financepage.png',
      alt: 'Finance dashboard with profit and loss statements, balance sheets, and key financial performance indicators'
    },
    {
      id: 7,
      title: 'Sales Management',
      description: 'Comprehensive sales tracking and performance analytics',
      image: '/screenshots/screenshot-salespage.png',
      alt: 'Sales management screen with comprehensive analytics, charts, and performance metrics for business insights'
    },
    {
      id: 8,
      title: 'Reporting & Analytics',
      description: 'Generate detailed reports and gain actionable insights',
      image: '/screenshots/screenshot-reportingpage.png',
      alt: 'Reporting dashboard with customizable reports, analytics, and data visualization tools'
    },
    {
      id: 9,
      title: 'HRMS Module',
      description: 'Manage employee records, attendance, and payroll efficiently',
      image: '/screenshots/screenshot-hrmspage.png',
      alt: 'HRMS interface for managing employee records, attendance tracking, and payroll processing'
    },
    {
      id: 10,
      title: 'Settings & Configuration',
      description: 'Customize your ERP system to match your business needs',
      image: '/screenshots/screenshot-settingspage.png',
      alt: 'Settings page for configuring system preferences, user permissions, and business rules'
    },
    {
      id: 11,
      title: 'Admin Panel',
      description: 'Complete administrative control and system management',
      image: '/screenshots/screenshot-adminpage.png',
      alt: 'Admin panel for system administration, user management, and advanced configuration'
    },
    {
      id: 12,
      title: 'Dark Theme',
      description: 'Comfortable viewing experience with elegant dark mode',
      image: '/screenshots/screenshot-darktheme.png',
      alt: 'Dark theme interface providing comfortable viewing experience and reduced eye strain'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots?.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots?.length) % screenshots?.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleManualNavigation = (direction) => {
    setIsAutoPlaying(false);
    if (direction === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See ERP-SMB in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how ERP-SMB helps trading and distribution businesses manage orders, inventory, receivables, and cash flow in one simple system
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Screenshot Display */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Screenshot Image */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200">
              <img
                src={screenshots?.[currentIndex]?.image}
                alt={screenshots?.[currentIndex]?.alt}
                className="w-full h-full object-contain p-4 transition-opacity duration-500"
                loading="lazy"
              />

              {/* Navigation Arrows */}
              <button
                onClick={() => handleManualNavigation('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => handleManualNavigation('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Screenshot Info */}
            <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {screenshots?.[currentIndex]?.title}
              </h3>
              <p className="text-blue-50 text-lg">
                {screenshots?.[currentIndex]?.description}
              </p>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {screenshots?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${index === currentIndex
                  ? 'w-12 h-3 bg-blue-600' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to screenshot ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>

          {/* Screenshot Counter */}
          <div className="text-center mt-4 text-gray-600 font-medium">
            {currentIndex + 1} / {screenshots?.length}
          </div>
        </div>

        {/* CTA Below Carousel */}
        <div className="text-center mt-12">
          <a
            href="/demo-request"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Your Free Personalized ERP Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;