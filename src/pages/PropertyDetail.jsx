import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, Check, Phone, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';
import { properties } from '../data/properties';
import './PropertyDetail.css';
import { companyInfo } from '../data/company';


const PropertyDetail = () => {
    const { id } = useParams();
    const property = properties.find(p => p.id === parseInt(id));

    if (!property) {
        return <div className="container section">Property not found.</div>;
    }

    return (
        <div className="property-detail-page">
            <div className="detail-hero" style={{ backgroundImage: `url(${property.image})` }}>
                <div className="detail-overlay"></div>
                <div className="container detail-hero-content">
                    <Link to="/properties" className="back-link"><ArrowLeft size={16} /> Back to Properties</Link>
                    <div className="detail-badge">{property.type}</div>
                    <h1>{property.title}</h1>
                    <p className="detail-location"><MapPin size={20} /> {property.location}</p>
                </div>
            </div>

            <div className="container section detail-grid">
                <div className="detail-main">
                    <div className="detail-price-box md:hidden">
                        <h2>{property.price}</h2>
                    </div>

                    <div className="detail-specs">
                        <div className="spec-item">
                            <Bed size={24} />
                            <span>{property.beds} Bedrooms</span>
                        </div>
                        <div className="spec-item">
                            <Bath size={24} />
                            <span>{property.baths} Bathrooms</span>
                        </div>
                        <div className="spec-item">
                            <Square size={24} />
                            <span>{property.area} Sq Ft</span>
                        </div>
                    </div>

                    <div className="detail-section">
                        <h3>Description</h3>
                        <p className="detail-description">{property.description}</p>
                    </div>

                    <div className="detail-section">
                        <h3>Features</h3>
                        <ul className="features-list">
                            <li><Check size={16} color="var(--color-secondary)" /> Ocean View</li>
                            <li><Check size={16} color="var(--color-secondary)" /> Swimming Pool</li>
                            <li><Check size={16} color="var(--color-secondary)" /> Smart Home System</li>
                            <li><Check size={16} color="var(--color-secondary)" /> Home Theater</li>
                            <li><Check size={16} color="var(--color-secondary)" /> Wine Cellar</li>
                            <li><Check size={16} color="var(--color-secondary)" /> 3 Car Garage</li>
                        </ul>
                    </div>
                </div>

                <aside className="detail-sidebar">
                    <div className="agent-card">
                        <h3>Interested?</h3>
                        <p className="agent-subtitle">Contact an agent today</p>
                        <div className="agent-price-box">
                            {property.price}
                        </div>

                        <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="Your Phone" />
                            </div>
                            <div className="form-group">
                                <textarea rows="4" placeholder="Message">I am interested in {property.title}</textarea>
                            </div>
                            <Button variant="primary" style={{ width: '100%' }}>Send Inquiry</Button>
                        </form>

                        <div className="agent-actions">
                            <Button variant="whatsapp" style={{ width: '100%' }} onClick={() => window.open(`https://wa.me/91${companyInfo.phones[0].replace(/\s+/g, '')}?text=I'm interested in ${property.title}`, '_blank')}>
                                WhatsApp Now
                            </Button>

                            <div className="phone-display">
                                <Phone size={16} /> <span>{companyInfo.phones[0]}</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default PropertyDetail;
