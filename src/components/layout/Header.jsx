import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Button from '../common/Button';
import './Header.css';
import { companyInfo } from '../../data/company';


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Properties', path: '/properties' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isHome = location.pathname === '/';
    const whatsappNumber = companyInfo.phones[0].replace(/\s+/g, '');


    return (
        <header className={`header ${isScrolled || !isHome ? 'header-scrolled' : 'header-transparent'}`}>
            <div className="container header-content">
                <Link to="/" className="logo">
                    GOWTHAM<span>REAL ESTATE</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav md:flex">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} className="nav-link">
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="header-actions md:flex">
                    <Button variant="whatsapp" icon={MessageCircle} onClick={() => window.open(`https://wa.me/91${whatsappNumber}`, '_blank')}>
                        WhatsApp
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <nav>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="mobile-nav-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div style={{ marginTop: '20px' }}>
                        <Button variant="whatsapp" icon={MessageCircle} onClick={() => window.open(`https://wa.me/91${whatsappNumber}`, '_blank')} style={{ width: '100%' }}>
                            WhatsApp Now
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
