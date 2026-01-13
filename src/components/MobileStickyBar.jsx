import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from './AppIcon';

const MobileStickyBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    // Don't show on demo-request page (they're already on the form)
    const shouldHide = location.pathname === '/demo-request';

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show when scrolling up, hide when scrolling down
            if (currentScrollY < lastScrollY || currentScrollY < 100) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleDemoClick = () => {
        navigate('/demo-request');
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = '919319033678';
        const message = encodeURIComponent('Hi, I want a free ERP demo for my business.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    if (shouldHide) return null;

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-primary shadow-2xl md:hidden transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <div className="px-4 py-3 flex items-center gap-3">
                <button
                    onClick={handleDemoClick}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
                >
                    <Icon name="Calendar" size={18} color="white" />
                    <span className="text-sm">Get Free Demo</span>
                </button>

                <button
                    onClick={handleWhatsAppClick}
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-4 rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 active:scale-95"
                    aria-label="WhatsApp"
                >
                    <Icon name="MessageCircle" size={20} color="white" />
                </button>
            </div>
        </div>
    );
};

export default MobileStickyBar;
