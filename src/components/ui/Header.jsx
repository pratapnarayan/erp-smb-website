import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/homepage', label: 'Home' },
    { path: '/product-features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/demo-request', label: 'Demo' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/homepage" className="header-logo">
            <div className="header-logo-icon">
              <Icon name="LayoutDashboard" size={20} color="var(--color-primary)" />
            </div>
            <span>ERP-SMB</span>
          </Link>

          <nav className="header-nav">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`header-nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Button
              variant="outline"
              size="sm"
              className="hidden lg:inline-flex"
              onClick={() => window.location.href = '/demo-request'}
            >
              Book Free Demo
            </Button>

            <button
              onClick={toggleMobileMenu}
              className="header-mobile-toggle"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : 'closed'}`}>
        <div className="mobile-menu-container">
          <div className="mobile-menu-header">
            <Link to="/homepage" className="header-logo" onClick={closeMobileMenu}>
              <div className="header-logo-icon">
                <Icon name="LayoutDashboard" size={20} color="var(--color-primary)" />
              </div>
              <span>ERP-SMB</span>
            </Link>

            <button
              onClick={closeMobileMenu}
              className="mobile-menu-close"
              aria-label="Close mobile menu"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          <nav className="mobile-menu-nav">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`mobile-menu-link ${isActivePath(item?.path) ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          <div className="mobile-menu-actions">
            <Button
              variant="default"
              fullWidth
              onClick={() => {
                closeMobileMenu();
                window.location.href = '/demo-request';
              }}
            >
              Book Free Demo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;