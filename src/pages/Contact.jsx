import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Button from '../components/common/Button';
import './Contact.css';
import { companyInfo } from '../data/company';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct WhatsApp Message
        const message = `*General Enquiry from Website*%0A%0A` +
            `*User Details:*%0A` +
            `Name: ${formData.name}%0A` +
            `Email: ${formData.email}%0A` +
            `Phone: ${formData.phone}%0A%0A` +
            `*Message:*%0A${formData.message}`;

        // Use the first company phone number, stripping spaces
        const phoneNumber = "91" + companyInfo.phones[0].replace(/\s+/g, '');

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank');
    };

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

                        {/* Phone */}
                        <a href={`tel:${companyInfo.phones[0].replace(/\s+/g, '')}`} className="info-item info-link">
                            <div className="icon-box"><Phone size={24} /></div>
                            <div>
                                <h4>Phone</h4>
                                <p>{companyInfo.phones.join(', ')}</p>
                            </div>
                        </a>

                        {/* Email */}
                        <a href={`mailto:${companyInfo.email}`} className="info-item info-link">
                            <div className="icon-box"><Mail size={24} /></div>
                            <div>
                                <h4>Email</h4>
                                <p>{companyInfo.email}</p>
                            </div>
                        </a>

                        {/* Office Address */}
                        <a
                            href={`https://maps.app.goo.gl/7XM4D3sb9mD7JPf38`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-item info-link"
                        >
                            <div className="icon-box"><MapPin size={24} /></div>
                            <div>
                                <h4>Office</h4>
                                <p>{companyInfo.address}</p>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>{companyInfo.landmark}</p>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={`https://wa.me/91${companyInfo.phones[0].replace(/\s+/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-item info-link"
                        >
                            <div className="icon-box"><MessageCircle size={24} /></div>
                            <div>
                                <h4>WhatsApp</h4>
                                <p>{companyInfo.phones[0]}</p>
                            </div>
                        </a>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Send us a Message</h3>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="How can we help?"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <Button variant="primary" style={{ width: '100%', backgroundColor: '#25D366', borderColor: '#25D366' }}>Send via WhatsApp</Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5607.778705854974!2d80.0246117435406!3d12.888034262350152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7b03533aa21%3A0x7680816c13d948ab!2sGowtham%20Real%20Estate%20Housing%20and%20Properties!5e0!3m2!1sen!2sin!4v1768738102222!5m2!1sen!2sin"
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
