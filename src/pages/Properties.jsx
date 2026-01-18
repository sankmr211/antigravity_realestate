import React from 'react';
import PropertyCard from '../components/features/PropertyCard';
import { properties } from '../data/properties';
import './Properties.css';

const Properties = () => {
    return (
        <div className="properties-page">
            <div className="properties-header-bg">
                <div className="container">
                    <h1>Our Exclusive Properties</h1>
                    <p>Discover a curated selection of the finest homes.</p>
                </div>
            </div>

            <div className="container section">
                <div className="properties-grid-full">
                    {properties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Properties;
