import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/features/PropertyCard';
import SkeletonCard from '../components/common/SkeletonCard';
import Button from '../components/common/Button';
import { companyInfo } from '../data/company';
import { CheckCircle } from 'lucide-react';
import './Home.css';


import { fetchPropertiesFromSheet } from '../services/googleSheetsService';

const Home = () => {
    const [sheetProperties, setSheetProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProperties = async () => {
            try {
                const data = await fetchPropertiesFromSheet();
                if (data.length > 0) {
                    setSheetProperties(data);
                    console.log("Sheet Data Loaded:", data);
                }
            } catch (error) {
                console.error("Failed to load properties", error);
            } finally {
                setLoading(false);
            }
        };
        loadProperties();
    }, []);

    // Display only first 3 items for Home page
    const displayProperties = sheetProperties.slice(0, 3);

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <h1 className="hero-title animate-fade-in">Find Your Dream Home With Confidence</h1>
                    <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Luxury Homes • Trusted Agents • Best Prices
                    </p>
                    <div className="hero-buttons animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <Button variant="primary" onClick={() => window.location.href = `tel:${companyInfo.phones[0]}`}>
                            Call Now
                        </Button>
                        <Button variant="secondary" onClick={() => window.location.href = `mailto:${companyInfo.email}`}>
                            Email Us
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section trust-section">
                <div className="container">
                    <div className="section-header center-header">
                        <h2>Our Premium Services</h2>
                        <p>We provide all services related to Real Estate</p>
                    </div>
                    <div className="services-grid">
                        {companyInfo.services.map((service, index) => (
                            <div className="service-item" key={index}>
                                <CheckCircle className="service-icon" size={24} />
                                <span>{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Properties */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Properties</h2>
                        <Link to="/properties" className="view-all-link">
                            View All Properties <ArrowRight size={20} />
                        </Link>
                    </div>
                    <div className="properties-grid">
                        {loading ? (
                            // Show Skeleton loaders when data is fetching
                            Array(3).fill(0).map((_, index) => (
                                <SkeletonCard key={`skeleton-${index}`} />
                            ))
                        ) : (
                            displayProperties.length > 0 ? (
                                displayProperties.map(property => (
                                    <PropertyCard key={property.id} property={property} />
                                ))
                            ) : (
                                <p>No properties available at the moment.</p>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section cta-section">
                <div className="container cta-content">
                    <h2>Ready to Find Your Perfect Home?</h2>
                    <p>Contact us today and let our experts help you find the property of your dreams.</p>
                    <Button variant="secondary" onClick={() => window.open(`https://wa.me/91${companyInfo.phones[0].replace(/\s+/g, '')}`, '_blank')}>
                        Chat on WhatsApp
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
