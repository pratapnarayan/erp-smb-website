import React, { useState, useEffect } from 'react';
import Icon from './AppIcon';

const FloatingWhatsApp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button after a short delay for better UX
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleWhatsAppClick = () => {
        const phoneNumber = '919319033678';
        const message = encodeURIComponent('Hi, I want a free ERP demo for my business.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <button
            onClick={handleWhatsAppClick}
            className={`fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
        >
            {/* Pulse animation */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>

            {/* WhatsApp Icon */}
            <div className="relative z-10">
                <Icon name="MessageCircle" size={28} color="white" />
            </div>

            {/* Tooltip on hover (desktop only) */}
            <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
                Chat on WhatsApp
            </span>
        </button>
    );
};

export default FloatingWhatsApp;
