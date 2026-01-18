import React, { useState } from 'react';
import { Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import EnquiryModal from '../common/EnquiryModal';
import { companyInfo } from '../../data/company';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="property-card">
                <div className="property-image-container">
                    <img src={property.image} alt={property.title} className="property-image" />
                    <div className="property-price">{property.price}</div>
                    <div className="property-tag">{property.type}</div>
                </div>

                <div className="property-content">
                    <h3 className="property-title">{property.title}</h3>
                    <p className="property-location">
                        <MapPin size={16} />
                        {property.location}
                    </p>

                    <div className="property-features">
                        <div className="feature">
                            <Bed size={18} />
                            <span>{property.beds} Beds</span>
                        </div>
                        <div className="feature">
                            <Bath size={18} />
                            <span>{property.baths} Baths</span>
                        </div>
                        <div className="feature">
                            <Square size={18} />
                            <span>{property.area} sqft</span>
                        </div>
                    </div>

                    <div className="property-footer">
                        <button
                            className="view-details-link"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit', padding: 0 }}
                            onClick={() => setIsModalOpen(true)}
                        >
                            View Details <ArrowRight size={16} />
                        </button>
                        <Button variant="whatsapp" className="card-whatsapp-btn" onClick={(e) => {
                            e.preventDefault();
                            const phoneNumber = "91" + companyInfo.phones[0].replace(/\s+/g, '');
                            window.open(`https://wa.me/${phoneNumber}?text=I'm interested in ${property.title}`, '_blank');
                        }}>
                            WhatsApp
                        </Button>
                    </div>
                </div>
            </div>

            <EnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                property={property}
            />
        </>
    );
};

export default PropertyCard;
