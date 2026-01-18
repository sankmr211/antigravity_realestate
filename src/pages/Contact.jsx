import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Button from '../components/common/Button';
import './Contact.css';
import { companyInfo } from '../data/company';


const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-hero">
                <div className="overlay"></div>
                <div className="container contact-hero-content">
                    <h1>Contact Us</h1>
                    <p>We're here to help you find your dream home.</p>
                </div>
            </div>

            <div className="container section">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p className="contact-desc">
                            Have questions about a property? Want to schedule a viewing? Our team of experts is ready to assist you.
                        </p>

                        <div className="info-item">
                            <div className="icon-box"><Phone size={24} /></div>
                            <div>
                                <h4>Phone</h4>
                                <p>{companyInfo.phones.join(', ')}</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Mail size={24} /></div>
                            <div>
                                <h4>Email</h4>
                                <p>{companyInfo.email}</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><MapPin size={24} /></div>
                            <div>
                                <h4>Office</h4>
                                <p>{companyInfo.address}</p>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>{companyInfo.landmark}</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><MessageCircle size={24} /></div>
                            <div>
                                <h4>WhatsApp</h4>
                                <p>{companyInfo.phones[0]}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <h3>Send us a Message</h3>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" placeholder="Your Phone" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="How can we help?" required></textarea>
                            </div>
                            <Button variant="primary" style={{ width: '100%' }}>Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.715220362692!2d-118.40250008478496!3d34.05106198060601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbd11019184f%3A0x6c6e76742c8d2318!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1645564858914!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
