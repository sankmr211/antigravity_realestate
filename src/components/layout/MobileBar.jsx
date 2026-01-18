import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import './MobileBar.css';
import { companyInfo } from '../../data/company';


const MobileBar = () => {
    const whatsappNumber = companyInfo.phones[0].replace(/\s+/g, '');

    return (
        <div className="mobile-bar md:hidden">
            <a href={`tel:${companyInfo.phones[0]}`} className="mobile-bar-item">
                <Phone size={24} />
                <span>Call</span>
            </a>
            <a href={`https://wa.me/91${whatsappNumber}`} target="_blank" rel="noreferrer" className="mobile-bar-item whatsapp">
                <MessageCircle size={24} />
                <span>WhatsApp</span>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="mobile-bar-item">
                <Mail size={24} />
                <span>Email</span>
            </a>
        </div>
    );
};

export default MobileBar;
