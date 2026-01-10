import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', path: '/product-features' },
        { label: 'Pricing', path: '/pricing' },
        { label: 'Demo', path: '/demo-request' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/homepage' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', path: '/contact' },
        { label: 'Documentation', path: '/product-features' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' }
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link to="/homepage" className="inline-flex items-center gap-3 text-primary font-semibold text-xl mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="LayoutDashboard" size={20} color="var(--color-primary)" />
              </div>
              <span className="font-heading">ERP-SMB</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-2 font-semibold">
              ERP-SMB – Modern ERP for trading and distribution businesses
            </p>
            <p className="text-muted-foreground text-sm mb-4 max-w-sm">
              Built for Indian SMBs. Empowering trading, wholesale, and distribution businesses with real-time control over operations.
            </p>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2">
                <Icon name="Mail" size={16} className="inline mr-2" />
                <a href="mailto:pratapnpandey83@gmail.com" className="hover:text-primary transition-colors">pratapnpandey83@gmail.com</a>
              </p>
              <p className="text-sm text-muted-foreground">
                <Icon name="MessageCircle" size={16} className="inline mr-2" />
                WhatsApp Support: <a href="https://wa.me/919319033678" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">+91-93190 33678</a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-9 h-9 rounded-md bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors duration-250"
                  aria-label={social?.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={social?.icon} size={18} color="var(--color-foreground)" />
                </a>
              ))}
            </div>
          </div>

          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                {section?.title}
              </h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.label}>
                    <Link
                      to={link?.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-250"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ERP-SMB. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/homepage"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-250"
              >
                Privacy Policy
              </Link>
              <Link
                to="/homepage"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-250"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;