import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { companyInfo } from '../../data/company';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3 className="footer-logo">GOWTHAM<span>REAL ESTATE</span></h3>
                        <p className="footer-desc">
                            We provide all services related to Real Estate. {companyInfo.name} is your trusted partner for buying, selling, and property services.
                        </p>
                        {/* <div className="social-links">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        </div> */}
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/properties">Properties</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact Info</h4>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} />
                                <span>{companyInfo.address}</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <span>{companyInfo.phones.join(', ')}</span>
                            </li>
                            <li>
                                <Mail size={18} />
                                <span>{companyInfo.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
