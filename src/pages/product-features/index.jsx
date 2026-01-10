import React, { useState } from 'react';

import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FeatureCard from './components/FeatureCard';
import WorkflowSection from './components/WorkflowSection';
import IntegrationShowcase from './components/IntegrationShowcase';
import ComparisonTable from './components/ComparisonTable';
import FeatureHighlight from './components/FeatureHighlight';

const ProductFeatures = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Features', icon: 'LayoutGrid' },
    { id: 'orders', label: 'Orders & Sales', icon: 'ShoppingCart' },
    { id: 'inventory', label: 'Inventory', icon: 'Package' },
    { id: 'accounts', label: 'Accounts & Receivables', icon: 'IndianRupee' },
    { id: 'reporting', label: 'Reporting', icon: 'BarChart3' },
    { id: 'hrms', label: 'HRMS & Users', icon: 'Users' }];


  const features = [
    {
      id: 1,
      category: 'orders',
      icon: 'ShoppingCart',
      title: 'Orders & Sales Management',
      description: 'Stop losing track of orders and customer payments. Track every order from quotation to delivery with automated alerts for pending deliveries and overdue payments.',
      problem: 'Losing track of orders, delayed deliveries, and customer payment disputes',
      benefit: 'Complete visibility of order pipeline with automated alerts for pending deliveries and overdue payments',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecd42800-1767033343981.png",
      imageAlt: 'Business team analyzing sales charts and graphs on large monitor showing upward trending revenue data in modern office',
      capabilities: [
        'Quick quotation generation with customizable templates',
        'Automated order-to-invoice conversion workflow',
        'Real-time order status tracking for customers',
        'Customer payment history and credit limit management',
        'Sales analytics with product-wise and customer-wise reports'],

      testimonial: {
        name: 'Amit Patel',
        role: 'Sales Director, Gujarat Wholesale',
        avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1211dd392-1763294112808.png",
        avatarAlt: 'Confident Indian businessman in his forties wearing white shirt and tie with warm smile in professional setting',
        quote: 'Our sales team processes 3x more orders now. The automated workflows eliminated manual errors completely.'
      }
    },
    {
      id: 2,
      category: 'inventory',
      icon: 'Package',
      title: 'Inventory Management',
      description: 'Never run out of stock or overstock again. Real-time stock tracking across multiple locations with intelligent reorder alerts prevents stockouts and frees up blocked cash.',
      problem: 'Stockouts causing lost sales, excess inventory blocking cash, and manual stock counting errors',
      benefit: 'Automated stock alerts, accurate inventory valuation, and data-driven purchasing decisions',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_12ce4ac9b-1764658762607.png",
      imageAlt: 'Modern warehouse with organized inventory shelves showing boxes and products in systematic arrangement with barcode scanning equipment',
      capabilities: [
        'Real-time stock level tracking across multiple locations',
        'Automated low-stock alerts and reorder point management',
        'Batch and serial number tracking for complete traceability',
        'Barcode scanning integration for quick stock updates',
        'Inventory valuation using FIFO, LIFO, or weighted average methods'],

      testimonial: {
        name: 'Pratap Pandey',
        role: 'Operations Manager, Delhi Trading Co.',
        avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12c863552-1763294002377.png",
        avatarAlt: 'Professional Indian man in his forties wearing navy blue business suit with confident smile in modern office setting',
        quote: 'We reduced stockouts by 85% within the first month. The automated alerts saved us from multiple crisis situations.'
      }
    },
    {
      id: 3,
      category: 'accounts',
      icon: 'IndianRupee',
      title: 'Accounts & Receivables',
      description: 'Stop chasing customers for payments. Track every rupee owed to you with automated payment reminders, aging reports, and GST-compliant invoicing to keep your cash flow healthy.',
      problem: 'Delayed payments, cash flow issues, and time wasted chasing customers for money',
      benefit: 'Faster collections, improved cash flow, and complete visibility of who owes what',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_115d681bf-1766559886131.png",
      imageAlt: 'Indian accountant working on laptop with GST tax forms and calculator on desk showing financial documents and charts',
      capabilities: [
        'Automatic GST calculation for all transactions (CGST, SGST, IGST)',
        'GST-compliant invoice generation with all required fields',
        'Automated payment reminder emails and WhatsApp notifications',
        'Aging reports for outstanding receivables management',
        'Customer payment history and credit limit tracking'],

      testimonial: {
        name: 'Vikram Singh',
        role: 'Business Owner, Jaipur Traders',
        avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_140d70fac-1763295720370.png",
        avatarAlt: 'Indian entrepreneur in his fifties wearing traditional kurta with modern blazer showing friendly smile in office',
        quote: 'Collection time reduced from 45 days to 28 days. The automated reminders work like magic without being pushy.'
      }
    },
    {
      id: 4,
      category: 'reporting',
      icon: 'BarChart3',
      title: 'Reporting & Dashboards',
      description: 'Make decisions based on real data, not gut feeling. Real-time dashboards and reports give you instant insights into sales, inventory, and cash flow.',
      problem: 'Making decisions based on outdated Excel reports and gut feeling instead of real data',
      benefit: 'Data-driven decisions with real-time insights into sales, inventory, and cash flow',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1abdc0f87-1767521790771.png",
      imageAlt: 'Business professionals analyzing dashboard with charts and graphs on large screen in modern office meeting room',
      capabilities: [
        'Real-time business dashboard with key metrics',
        'Sales reports by product, customer, and time period',
        'Inventory reports with stock aging and movement analysis',
        'Financial reports including P&L, balance sheet, and cash flow',
        'Custom report builder for specific business needs'],

      testimonial: {
        name: 'Priya Sharma',
        role: 'Finance Manager, Sharma Enterprises',
        avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_150f92757-1763295812976.png",
        avatarAlt: 'Professional portrait of Indian woman in formal attire with warm smile in office setting',
        quote: 'What used to take 3 days for month-end reporting now takes just a few hours. Real-time data changed everything.'
      }
    },
    {
      id: 5,
      category: 'hrms',
      icon: 'Users',
      title: 'HRMS & User Management',
      description: 'Control who sees what in your business. Manage your team efficiently with role-based access, attendance tracking, and performance monitoring.',
      problem: 'Manual attendance tracking, unclear role responsibilities, and security concerns with data access',
      benefit: 'Streamlined HR processes, secure data access controls, and better team accountability',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cec7b6ac-1765212939526.png",
      imageAlt: 'HR manager reviewing employee data on computer screen with team members working in modern office background',
      capabilities: [
        'Role-based access control for data security',
        'Employee attendance and leave management',
        'User activity logs for audit trail',
        'Performance tracking and goal management',
        'Team collaboration and task assignment'],

      testimonial: {
        name: 'Meera Iyer',
        role: 'HR Head, Chennai Retail',
        avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_10343c2d4-1763298794759.png",
        avatarAlt: 'Smiling Indian woman in her thirties wearing professional attire with headset in customer service environment',
        quote: 'Managing 50 employees across 3 locations became so much easier. Everyone knows their responsibilities now.'
      }
    }];


  const workflows = [
    {
      icon: 'Workflow',
      title: 'Order-to-Cash Workflow',
      description: 'Streamlined process from customer order to payment collection with automated steps and real-time visibility.',
      steps: [
        { title: 'Order Entry', description: 'Customer places order via phone, email, or portal' },
        { title: 'Inventory Check', description: 'Automatic stock verification and allocation' },
        { title: 'Invoice Generation', description: 'GST-compliant invoice created instantly' },
        { title: 'Dispatch', description: 'Delivery challan and e-way bill generated' },
        { title: 'Payment', description: 'Payment recorded and reconciled automatically' },
        { title: 'Accounting', description: 'Books updated in real-time with GST entries' }],

      metrics: [
        { value: '70%', label: 'Faster Processing' },
        { value: '95%', label: 'Accuracy Rate' },
        { value: '₹8L', label: 'Monthly Savings' }]

    },
    {
      icon: 'ShoppingCart',
      title: 'Procure-to-Pay Workflow',
      description: 'Efficient procurement process from supplier selection to payment with complete audit trail and approvals.',
      steps: [
        { title: 'Purchase Request', description: 'Department raises purchase requirement' },
        { title: 'Approval', description: 'Multi-level approval based on amount' },
        { title: 'PO Creation', description: 'Purchase order sent to supplier automatically' },
        { title: 'Goods Receipt', description: 'GRN created with quality inspection' },
        { title: 'Invoice Matching', description: '3-way matching (PO, GRN, Invoice)' },
        { title: 'Payment', description: 'Scheduled payment with TDS calculation' }],

      metrics: [
        { value: '60%', label: 'Time Reduction' },
        { value: '100%', label: 'Compliance' },
        { value: '₹5L', label: 'Cost Savings' }]

    }];


  const integrations = [
    {
      name: 'Tally',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1d2860c5d-1764789122529.png",
      logoAlt: 'Tally accounting software logo showing green and white color scheme with modern design',
      description: 'Seamless data migration and sync'
    },
    {
      name: 'WhatsApp Business',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_121b3e390-1764748487804.png",
      logoAlt: 'WhatsApp Business green logo with phone icon representing business communication platform',
      description: 'Customer notifications and support'
    },
    {
      name: 'Payment Gateways',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a4db6543-1764676502502.png",
      logoAlt: 'Digital payment gateway icon showing credit card and mobile payment symbols in blue and orange',
      description: 'Razorpay, Paytm, PhonePe integration'
    },
    {
      name: 'GST Portal',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e24d2f34-1767631223834.png",
      logoAlt: 'Indian GST portal logo with tricolor theme showing government tax filing system',
      description: 'Direct GSTR filing and reconciliation'
    },
    {
      name: 'Banking APIs',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1205ba079-1767159499545.png",
      logoAlt: 'Banking API integration icon showing secure connection between bank and software systems',
      description: 'Bank statement auto-reconciliation'
    },
    {
      name: 'E-way Bill',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_19f7b6071-1767631223418.png",
      logoAlt: 'E-way bill system logo for Indian goods transportation documentation',
      description: 'Automated e-way bill generation'
    },
    {
      name: 'Excel',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1bdb1acd7-1764748487531.png",
      logoAlt: 'Microsoft Excel green spreadsheet icon representing data import and export functionality',
      description: 'Import/export data easily'
    },
    {
      name: 'Email',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13628ed24-1767631224388.png",
      logoAlt: 'Email envelope icon in blue representing automated email communication system',
      description: 'Automated invoice and report emails'
    }];


  const comparison = {
    title: 'ERP-SMB vs Traditional Methods',
    description: 'See how ERP-SMB compares to Excel and Tally for growing Indian SMBs',
    columns: ['Excel/Manual', 'Tally', 'ERP-SMB'],
    rows: [
      { feature: 'Real-time Inventory Tracking', values: [false, true, true] },
      { feature: 'Multi-location Management', values: [false, 'Limited', true] },
      { feature: 'Automated GST Filing', values: [false, true, true] },
      { feature: 'Customer Portal', values: [false, false, true] },
      { feature: 'Mobile App Access', values: [false, false, true] },
      { feature: 'Workflow Automation', values: [false, 'Limited', true] },
      { feature: 'Advanced Analytics', values: [false, 'Basic', true] },
      { feature: 'WhatsApp Integration', values: [false, false, true] },
      { feature: 'Cloud-based Access', values: [false, 'Optional', true] },
      { feature: 'Automatic Backups', values: [false, 'Manual', true] }]

  };

  const highlight = {
    badge: 'Most Popular',
    title: 'Smart Dashboard Analytics',
    description: 'Get instant insights into your business performance with AI-powered analytics. Track sales trends, inventory turnover, cash flow, and customer behavior in real-time with beautiful, easy-to-understand visualizations.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11ec04093-1764666206470.png",
    imageAlt: 'Modern business analytics dashboard on computer screen showing colorful charts, graphs, and KPI metrics with real-time data visualization',
    points: [
      'Real-time business metrics updated every minute',
      'Customizable dashboards for different roles and departments',
      'Predictive analytics for sales forecasting and inventory planning',
      'Mobile-responsive design for on-the-go decision making',
      'Export reports in Excel, PDF, or share via WhatsApp']

  };

  const filteredFeatures = activeCategory === 'all' ?
    features :
    features?.filter((f) => f?.category === activeCategory);

  const handleFeatureToggle = (featureId) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <>
      <Helmet>
        <title>Product Features - ERP-SMB | Complete Business Management Solution</title>
        <meta name="description" content="Explore ERP-SMB's comprehensive features designed for Indian SMBs. Inventory management, GST-compliant accounting, sales automation, and more." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="main-content flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 md:mb-6">
                  <Icon name="Sparkles" size={16} />
                  Built for Indian SMBs
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                  Everything You Need to Run Your Business
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8">
                  From inventory management to GST compliance, ERP-SMB provides all the tools you need to grow your business with confidence. No complexity, just results.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    onClick={() => window.location.href = '/demo-request'}>

                    Schedule a Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Play"
                    iconPosition="left">

                    Watch Video Tour
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-6 md:py-8 border-b border-border sticky top-16 bg-background z-30">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {categories?.map((category) =>
                  <button
                    key={category?.id}
                    onClick={() => setActiveCategory(category?.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm md:text-base font-medium whitespace-nowrap transition-all duration-250 flex-shrink-0 ${activeCategory === category?.id ?
                        'bg-primary text-primary-foreground' :
                        'bg-muted text-muted-foreground hover:bg-muted/80'}`
                    }>

                    <Icon name={category?.icon} size={16} />
                    {category?.label}
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Feature Highlight */}
          <section className="py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <FeatureHighlight highlight={highlight} />
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                  Powerful Features for Every Business Function
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover how ERP-SMB transforms your daily operations with intelligent automation and real-time insights.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {filteredFeatures?.map((feature) =>
                  <FeatureCard
                    key={feature?.id}
                    feature={feature}
                    isExpanded={expandedFeature === feature?.id}
                    onToggle={() => handleFeatureToggle(feature?.id)} />

                )}
              </div>
            </div>
          </section>

          {/* Workflow Sections */}
          <section className="py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                  Streamlined Business Workflows
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                  See how ERP-SMB automates your entire business process from start to finish with intelligent workflows.
                </p>
              </div>

              <div className="space-y-8 md:space-y-12">
                {workflows?.map((workflow, index) =>
                  <WorkflowSection key={index} workflow={workflow} />
                )}
              </div>
            </div>
          </section>

          {/* Integrations */}
          <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <IntegrationShowcase integrations={integrations} />
            </div>
          </section>

          {/* Comparison Table */}
          <section className="py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                  Why Choose ERP-SMB?
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                  See how we compare to traditional business management methods used by Indian SMBs.
                </p>
              </div>

              <ComparisonTable comparison={comparison} />
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8">
                Join hundreds of Indian SMBs who have already made the switch from Excel and Tally to ERP-SMB. Schedule a personalized demo today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={() => window.location.href = '/demo-request'}>

                  Schedule Free Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.location.href = '/contact'}>

                  Talk to Sales
                </Button>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-4">
                No credit card required • Free 30-day trial • Cancel anytime
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>);

};

export default ProductFeatures;