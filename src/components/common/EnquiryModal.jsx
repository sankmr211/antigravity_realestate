import React, { useState } from 'react';
import './EnquiryModal.css';
import { X } from 'lucide-react';
import { companyInfo } from '../../data/company';

const EnquiryModal = ({ isOpen, onClose, property }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct WhatsApp Message
        const message = `Hello, I'm interested in *${property.title}* located at *${property.location}*.%0A%0A` +
            `*My Details:*%0A` +
            `Name: ${formData.name}%0A` +
            `Phone: ${formData.phone}%0A` +
            `Email: ${formData.email}%0A%0A` +
            `Please share more details about this property.`;

        // Use the first company phone number, stripping spaces
        const phoneNumber = "91" + companyInfo.phones[0].replace(/\s+/g, '');

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank');
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <h3>Enquire about Property</h3>
                    <p style={{ marginTop: '0.5rem', color: '#666' }}>{property.title}</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="modal-actions">
                        <button type="button" className="btn-cancel" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="btn-submit">
                            Send via WhatsApp
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EnquiryModal;
