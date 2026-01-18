import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileBar from './MobileBar';
import { MessageCircle } from 'lucide-react';
import './Layout.css';
import { useLocation } from 'react-router-dom';
import { companyInfo } from '../../data/company';


const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
            <MobileBar />

            {/* Sticky WhatsApp Float */}
            <a
                href={`https://wa.me/91${companyInfo.phones[0].replace(/\s+/g, '')}`}
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={32} />
            </a>
        </div>
    );
};

export default Layout;
