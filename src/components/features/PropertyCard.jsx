import React from 'react';
import { Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
    return (
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
                    <Link to={`/properties/${property.id}`} className="view-details-link">
                        View Details <ArrowRight size={16} />
                    </Link>
                    <Button variant="whatsapp" className="card-whatsapp-btn" onClick={(e) => {
                        e.preventDefault();
                        window.open(`https://wa.me/1234567890?text=I'm interested in ${property.title}`, '_blank');
                    }}>
                        WhatsApp
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
