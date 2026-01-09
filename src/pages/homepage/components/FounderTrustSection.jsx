import React from 'react';
import Icon from '../../../components/AppIcon';
import { Link } from 'react-router-dom';

const FounderTrustSection = () => {
    const trustPoints = [
        {
            icon: 'Package',
            title: 'Designed for Inventory-Heavy Businesses',
            description: 'Built specifically for trading and distribution businesses that manage stock, orders, and warehouses'
        },
        {
            icon: 'CreditCard',
            title: 'Works for Credit-Based Sales & Receivables',
            description: 'Track credit sales, manage receivables, and maintain customer payment histories effortlessly'
        },
        {
            icon: 'Users',
            title: 'Founder-Led Onboarding and Support',
            description: 'Personal guidance from our founders throughout your journey—no automated responses'
        },
        {
            icon: 'FileSpreadsheet',
            title: 'Simple Alternative to Excel & Tally',
            description: 'Move beyond spreadsheets and legacy software with a modern, intuitive interface'
        },
        {
            icon: 'Workflow',
            title: 'Focused on Real Business Workflows',
            description: 'Every feature is designed around actual trading and distribution workflows, not generic templates'
        },
        {
            icon: 'TrendingUp',
            title: 'Built for Growing Indian SMBs',
            description: 'Scalable solution that grows with your business, from single location to multi-branch operations'
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-background via-muted/20 to-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <Icon name="Target" size={16} />
                        <span>Built for You</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Built for Indian Trading & Distribution Businesses
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                        A practical ERP designed for inventory-driven SMBs who want better control than Excel or Tally.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
                    {trustPoints.map((point, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Icon name={point.icon} size={24} color="var(--color-primary)" />
                            </div>
                            <h3 className="font-bold text-foreground text-base md:text-lg mb-2">
                                {point.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/demo-request"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <Icon name="Calendar" size={20} />
                        <span>Get a Free Personalized ERP Demo</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FounderTrustSection;
